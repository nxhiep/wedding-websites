import Config from "@/config";
import Image from "next/image";
import heartIcon from "../app/images/heart.svg";
import { FC } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

const WebTitle:FC<({ size: number, color?: string })> = ({ size, color }) => {
    return (
        <div className="header-title great-vibes" style={{ fontSize: size, color: color ?? 'black' }}>
            {Config.groomFamily.shortName}
            &nbsp;&nbsp;
            <FavoriteIcon fontSize="large" color="error" />
            &nbsp;&nbsp;
            {Config.brideFamily.shortName}
        </div>
    );
}

export default WebTitle;