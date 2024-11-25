import { Grid2 } from "@mui/material";
import MyTitle from "../myTitle";
import { ImagesConfig } from "@/config/images";
import Image from "next/image";
import { FC } from "react";
import PlaceIcon from '@mui/icons-material/Place';
import ScheduleIcon from '@mui/icons-material/Schedule';

const WeddingEvent = () => {

    return (
        <div id="WeddingEvent">
            <MyTitle
                title="Sự kiện đám cưới"
                description="...tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm chằm về cùng một hướng..."
            />
            <Grid2 container alignItems={'stretch'} justifyContent={'center'} spacing={2}>
                <Grid2 size={{ xs: 5, xl: 3 }} justifyContent={'center'} alignItems={'center'} display={'flex'}>
                    <EventItem 
                        title="Tiệc cưới nhà gái"
                        address="Số 14, Ngách 1, Ngõ 137, Đường Lê Văn Tám, Phường Đồng Tâm, TP Yên Bái"
                        date="9h00 - 01/01/2025"
                        image={ImagesConfig.events[1]}
                        addressMap="https://maps.app.goo.gl/7smS2h2FC45g5QYv5"
                    />
                </Grid2>
                <Grid2 size={{ xs: 5, xl: 3 }} justifyContent={'center'} alignItems={'center'} display={'flex'}>
                    <EventItem 
                        title="Tiệc cưới nhà trai"
                        address="Số 4/134 Đại Khối, Phường Đông Cương, TP Thanh Hoá"
                        date="9h00 - 03/01/2025"
                        image={ImagesConfig.events[0]}
                        addressMap="https://maps.app.goo.gl/4D4JCXXdnZ32ERf87"
                    />
                </Grid2>
            </Grid2>
        </div>
    );
}

const EventItem: FC<({ 
    title: string, image: string, address: string, date: string, addressMap: string 
})> = ({
    title, image, address, date, addressMap
}) => {
    return (
        <div className="event-item">
            <Image src={image} width={400} height={400} alt='Sự kiện nhà gái' style={{ width: 250, height: 250, borderRadius: 12, marginBottom: 12 }} />
            <div style={{ fontSize: 20, textTransform: 'uppercase', fontWeight: 'bold', marginBottom: 12 }}>{title}</div>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 12, fontWeight: '500', minHeight: 65 }}><PlaceIcon />{address}</div>
            <div style={{ display: 'inline-flex', alignItems: 'flex-start', marginBottom: 12, textAlign: 'center', fontWeight: 'bold', }}><ScheduleIcon />{date}</div>
            <div >
                <a href={addressMap} target="_blank">XEM ĐỊA CHỈ</a>
            </div>
        </div>
    );
}

export default WeddingEvent;