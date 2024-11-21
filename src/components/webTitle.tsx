import Config from "@/config";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FC } from "react";

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