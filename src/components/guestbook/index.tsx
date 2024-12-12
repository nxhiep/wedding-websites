'use client';

import { FireStoreRepo } from "@/repositories/firebase/firestore";
import MyTitle from "../myTitle";
import { FC, Fragment, useEffect, useRef, useState } from "react";
import { Button, Container, Grid2, IconButton, List, ListItem, ListItemAvatar, ListItemText, Snackbar, TextareaAutosize } from "@mui/material";
import { Close, Person } from "@mui/icons-material";
import Review from "@/models/review";
import { Utils } from "@/utils";

const Guestbook = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    useEffect(() => {
        onLoadReviews();
    }, []);
    const onLoadReviews = () => {
        FireStoreRepo.getReviews().then(setReviews);
    }
    const userNameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const contentRef = useRef<HTMLTextAreaElement | null>(null);
    const [snackBarMessage, setSnackBarMessage] = useState('');
    const onSendMessage = () => {
        const userName = userNameRef.current?.value ?? '';
        const email = emailRef.current?.value ?? '';
        const content = contentRef.current?.value ?? '';
        if (!userName) {
            setSnackBarMessage('Bạn chưa nhập tên!');
            return;
        }
        if(email && !Utils.validateEmail(email)) {
            setSnackBarMessage('Email không đúng, vui lòng kiểm tra lại!');
            return;
        }
        if (!content) {
            setSnackBarMessage('Bạn chưa nhập nội dung!');
            return;
        }
        FireStoreRepo.updateReview({
            userName: userName,
            email: email,
            content: content
        });
        setSnackBarMessage('Trân trọng cảm ơn bạn!');
        onLoadReviews();
        if(userNameRef.current) userNameRef.current.value = '';
        if(emailRef.current) emailRef.current.value = '';
        if(contentRef.current) contentRef.current.value = '';
    }
    const handleClose = () => setSnackBarMessage('');
    const action = (
        <Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <Close fontSize="small" />
            </IconButton>
        </Fragment>
    );
    return (
        <div id="Guestbook">
            <MyTitle
                title="Sổ lưu bút"
                description="Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của Xuân Hiệp và Ngọc Anh"
            />
            <Container>
                <Grid2 container spacing={2} alignItems={'stretch'} height={400}>
                    <Grid2 size={{ xs: 12, sm: 6 }} height={'100%'}>
                        <div className="form-input">
                            <div className="form-input-content">
                                <div className="row-1">
                                    <input ref={userNameRef} className="guestbook-text-style playfair-display" placeholder="Họ Tên (*)" />
                                    <input ref={emailRef} className="guestbook-text-style playfair-display" placeholder="Email" />
                                </div>
                                <TextareaAutosize ref={contentRef} className="guestbook-text-style playfair-display" placeholder="Lời chúc của bạn (*)" minRows={5} />
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 12 }}>
                                    <Button size="large" color="primary" variant="contained" onClick={onSendMessage}>Gửi</Button>
                                </div>
                            </div>
                        </div>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }} height={'100%'}>
                        <div className="form-input">
                            <div className="form-input-content">
                                <ListReview reviews={reviews} />
                            </div>
                        </div>
                    </Grid2>
                </Grid2>
                <Snackbar
                    open={!!snackBarMessage}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={snackBarMessage}
                    action={action}
                />
            </Container>
        </div>
    );
}

const ListReview:FC<{reviews: Review[]}> = ({ reviews }) => {
    return (
        <List style={{ overflowY: 'auto' }} className="scroll">
            { reviews.map((item, index) => {
                return (
                        <ListItemText key={'review-item-' + index} primary={item.userName} secondary={item.content}></ListItemText>
                );
            }) }
        </List>
    );
}

export default Guestbook;