'use client';
import { Collapse, IconButton, Tooltip } from "@mui/material";
import RateReviewIcon from '@mui/icons-material/RateReview';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { CSSProperties, useState } from "react";
import Config from "@/config";

const StaticWidgets = () => {
    const style: CSSProperties = {
        backgroundColor: Config.mainColor,
        color: 'white'
    }
    const [open, setOpen] = useState(true);
    const gap = 12;
    return (
        <div className="static-actions">
            <Collapse in={open}>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: gap }}>
                    <Tooltip title="Gửi lời chúc" placement="right">
                        <IconButton style={style}>
                            <RateReviewIcon color="inherit" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Xác nhận tham dự" placement="right">
                        <IconButton style={style}>
                            <ForwardToInboxIcon color="inherit" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Mừng cưới" placement="right">
                        <IconButton style={style}>
                            <MonetizationOnIcon color="inherit" />
                        </IconButton>
                    </Tooltip>
                </div>
            </Collapse>
            <div style={{ height: gap }}></div>
            <IconButton style={style} onClick={() => setOpen(!open)}>
                {open ? <CloseIcon color="inherit" /> : <MenuIcon color="inherit" /> }
            </IconButton>
        </div>
    );
}

export default StaticWidgets;