'use client';

import { CloseRounded, MenuRounded } from "@mui/icons-material";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

export const MenuMobile = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="navbar-mobile">
            <IconButton onClick={() => setOpen(!open)}>{open ? <CloseRounded /> : <MenuRounded />}</IconButton>
            <div style={{ display: open ? 'block' : 'none' }} className="navbar-mobile-content">
                <div className="navbar-mobile-list">
                    <a href="#CoupleWidget">Cặp đôi</a>
                    <a href="#WeddingEvent">Sự kiện cưới</a>
                    <a href="#Album">Album Hình Cưới</a>
                    <a href="#Guestbook">Sổ Lưu Bút</a>
                    <a href="#HappyWedding">Mừng cưới</a>
                </div>
            </div>
        </div>
    );
}

export const MenuPC = () => {
    return (
        <div>

        </div>
    );
}

const Menu = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    if(isMobile) {
        return <MenuMobile />
    }
    return <MenuPC />
}

export default Menu;