'use client';

import { Button, Container, Dialog, DialogActions, DialogContent } from "@mui/material";
import { useState } from "react";
import AlbumsCarousel from "../carousel/albums_carousel";
import MyTitle from "../myTitle";

const Album = () => {
    const [openImage, setOpenImage] = useState<string | null>(null);
    return (
        <div id="Album">
            <MyTitle
                title="Album ảnh cưới"
                description=""
            />
            <Container>
                <AlbumsCarousel 
                    onSelectImage={(list) => {
                        setOpenImage(list);
                    }}
                />
            </Container>
            { openImage && (
                <Dialog open={true} maxWidth="xl">
                    <DialogContent>
                        xxx
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenImage(null)} variant="outlined">Đóng</Button>
                    </DialogActions>
                </Dialog>
            ) }
        </div>
    );
}

export default Album;