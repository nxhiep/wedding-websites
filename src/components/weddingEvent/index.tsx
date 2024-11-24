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
                <Grid2 size={{ xs: 5, xl: 2 }}>
                    <EventItem 
                        title="Tiệc cưới nhà gái"
                        address="xxx"
                        date="9h00 - 01/01/2025"
                        image={ImagesConfig.events[1]}
                        addressMap=""
                    />
                </Grid2>
                <Grid2 size={{ xs: 5, xl: 2 }}>
                    <EventItem 
                        title="Tiệc cưới nhà trai"
                        address="Số 4/134 Đại Khối, Phường Đông Cương, TP Thanh Hoá"
                        date="9h00 - 03/01/2025"
                        image={ImagesConfig.events[0]}
                        addressMap=""
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
            <Image src={image} width={400} height={400} alt='Sự kiện nhà gái' style={{ width: '100%', height: '50%', borderRadius: 12 }} />
            <div>{title}</div>
            <div><PlaceIcon />{address}</div>
            <div><ScheduleIcon />{date}</div>
            <div>
                <a href={addressMap} target="_blank">XEM ĐỊA CHỈ</a>
            </div>
        </div>
    );
}

export default WeddingEvent;