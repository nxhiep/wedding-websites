import { Grid2 } from "@mui/material";
import MyTitle from "../myTitle";
import Image from "next/image";
import { FC } from "react";
import { ImagesConfig } from "@/config/images";

const HappyWedding = () => {
    return (
        <div id="HappyWedding">
            <MyTitle
                title="Mừng cưới"
                description="Hộp mừng cưới"
            />

            <Grid2 container spacing={2} justifyContent={'center'}>
                <Grid2 container size={{ xs: 12, sm: 6, md: 4, xl: 3 }} alignItems={'stretch'} justifyContent={'center'}>
                    <InfoItem
                        title="Mừng cưới đến chú rể"
                        accountName="NGUYỄN XUÂN HIỆP"
                        accountNumber="19036562480019"
                        bankName="Techcombank"
                        location="Thanh Xuân"
                        image={ImagesConfig.qrsBank[0]}
                    />
                </Grid2>
                <Grid2 container size={{ xs: 12, sm: 6, md: 4, xl: 3 }} alignItems={'stretch'} justifyContent={'center'}>
                    <InfoItem
                        title="Mừng cưới đến cô dâu"
                        accountName="TRẦN VŨ HÀ NGỌC ANH"
                        accountNumber="2600614372"
                        bankName="BIDV"
                        location="CN MY DINH PGD LAC LONG QUAN"
                        image={ImagesConfig.qrsBank[1]}
                    />
                </Grid2>
            </Grid2>
        </div>
    );
}

const InfoItem:FC<({
    title: string
    accountName: string
    accountNumber: string
    bankName: string
    location: string
    image: string
})> = ({ accountName, accountNumber, bankName, location, title, image }) => {
    return (
        <div style={{ 
            width: 350, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexDirection: 'column',
            border: '1px solid #ddd',
            borderRadius: 12,
            padding: 20
         }}>
            <div style={{ marginBottom: 12, fontSize: '1.1em', textTransform: 'uppercase' }}><strong>{title}</strong></div>
            <Image src={image} width={400} height={400} alt={title} style={{ width: 200, height: 200 }} />
            <div style={{ marginTop: 12 }}>
                <div>
                    <span>Ngân hàng: &nbsp;&nbsp;</span>
                    <strong>{bankName}</strong>
                </div>
                <div>
                    <span>Chi nhánh: &nbsp;&nbsp;</span>
                    <strong>{location}</strong>
                </div>
                <div>
                    <span>Tên tài khoản: &nbsp;&nbsp;</span>
                    <strong>{accountName}</strong>
                </div>
                <div>
                    <span>Số tài khoản: &nbsp;&nbsp;</span>
                    <strong>{accountNumber}</strong>
                </div>
            </div>
        </div>
    );
}

export default HappyWedding;