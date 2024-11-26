'use client';

import Config from "@/config";
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, Container, Grid2, useMediaQuery, useTheme } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import MyTitle from "../myTitle";
import { ImagesConfig } from "../../config/images";

const CoupleWidget = () => {
    return (
        <div id="CoupleWidget">
            <MyTitle 
                title="Cặp đôi"
                description="Tình yêu là điều kiện trong đó hạnh phúc của đối phương là điều cần thiết cho chính bạn."
            />
            {/* <Container maxWidth='xl'> */}
                <Grid2 container alignItems={'stretch'}>
                    <Grid2 size={{ md: 12, lg: 6, xl: 6 }}>
                        <UserItem
                            userName={Config.groomFamily.name}
                            fatherName={Config.groomFamily.father}
                            motherName={Config.groomFamily.mother}
                            facebookUrl={Config.groomFamily.facebookUrl}
                            place="left"
                            imageUrl={ImagesConfig.groom}
                            description={`Chàng trai điềm đạm, chín chắn và đầy nhiệt huyết trong công việc. Với tính cách hòa nhã và lạc quan, ${Config.groomFamily.shortName} luôn là người mang lại năng lượng tích cực cho những người xung quanh. Anh không chỉ thành công trong sự nghiệp mà còn rất biết cách chăm sóc và bảo vệ những người thân yêu. Trong mắt ${Config.brideFamily.shortName}, ${Config.groomFamily.shortName} là một bờ vai vững chắc, luôn sẵn sàng sẻ chia và hỗ trợ cô trong mọi hoàn cảnh.`}
                        />
                    </Grid2>
                    <Grid2 size={{ md: 12, lg: 6, xl: 6 }}>
                        <UserItem
                            userName={Config.brideFamily.name}
                            fatherName={Config.brideFamily.father}
                            motherName={Config.brideFamily.mother}
                            facebookUrl={Config.brideFamily.facebookUrl}
                            place="right"
                            imageUrl={ImagesConfig.bride}
                            description={`Cô gái dịu dàng, thông minh và đầy tinh tế. Với nụ cười tươi tắn và đôi mắt biết nói, ${Config.brideFamily.shortName} luôn tạo được thiện cảm với mọi người ngay từ lần đầu gặp gỡ. Cô không chỉ giỏi giang trong công việc mà còn rất quan tâm đến gia đình và những người xung quanh. Trong mắt ${Config.groomFamily.shortName}, ${Config.brideFamily.shortName} là người phụ nữ của sự ấm áp và yêu thương, luôn mang lại cảm giác an toàn và hạnh phúc.`}
                        />
                    </Grid2>
                </Grid2>
            {/* </Container> */}
        </div>
    );
}

const UserItem:FC<({ userName: string, imageUrl: string, fatherName: string, motherName: string, description: string, facebookUrl: string, place: 'left' | 'right' })> = ({
    userName, description, facebookUrl, fatherName, imageUrl, motherName, place
}) => {
    let justifyContent = place === 'left' ? 'flex-end' : 'flex-start';
    const theme = useTheme();
    const isSmallerLG = useMediaQuery(theme.breakpoints.down('lg'));
    if(isSmallerLG && place === 'left') {
        justifyContent = 'flex-start';
    }
    return (
        <Box sx={{ width: '100%', height: '100%', borderRight: place === 'left' ? '2px solid #ddd' : undefined, backgroundColor: '#f5f4ec' }}>
            <Grid2 container direction={place === 'left' ? 'row' : 'row-reverse'}>
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 5, xl: 6 }}>
                    <Image src={imageUrl} alt={userName} width={800} height={800} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} priority />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6, md: 8, lg: 7, xl: 6 }} sx={{ padding: 5 }}>
                    <div className="great-vibes" style={{ fontSize: 26, display: 'flex', alignItems: 'center', justifyContent: justifyContent }}>
                        <span>{userName}</span>
                        <a href={facebookUrl} target="_blank" style={{ width: 24, height: 24, marginLeft: 12 }}>
                            <FacebookIcon />
                        </a>
                        </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: justifyContent }}>
                        <span>Con ông: </span>
                        <span style={{ fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase' }}>{fatherName}</span>
                    </div>
                    <div style={{ marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: justifyContent }}>
                        <span>Con bà: </span>
                        <span style={{ fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase' }}>{motherName}</span>
                    </div>
                    <div style={{ marginBottom: 20, textAlign: 'justify' }}>{description}</div>
                </Grid2>
            </Grid2>
        </Box>
    );
}

export default CoupleWidget;