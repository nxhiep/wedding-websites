'use client';

import { CloseRounded, MenuRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";

const MenuMobile = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="navbar-mobile">
            <IconButton onClick={() => setOpen(!open)}>{open ? <CloseRounded /> : <MenuRounded />}</IconButton>
            <div style={{ display: open ? 'block' : 'none' }}>
                <a href="#CoupleWidget">Cặp đôi</a>
                <a href="#WeddingEvent">Sự kiện cưới</a>
                <a href="#Album">Album Hình Cưới</a>
                <a href="#Guestbook">Sổ Lưu Bút</a>
                <a href="#HappyWedding">Mừng cưới</a>
            </div>
        </div>
    );
}

export default MenuMobile;