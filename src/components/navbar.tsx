'use client';

import { CloseRounded, MenuRounded } from "@mui/icons-material";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

class MenuItem {
    id: string
    title: string

    constructor(id: string, title: string) {
        this.id = id;
        this.title = title;
    }
}

const mapLink = [
    new MenuItem('#CoupleWidget', 'Cặp đôi'),
    new MenuItem('#WeddingEvent', 'Sự kiện cưới'),
    new MenuItem('#Album', 'Album Hình Cưới'),
    // new MenuItem('#Guestbook', 'Sổ Lưu Bút'),
    new MenuItem('#HappyWedding', 'Mừng cưới')
];

export const NavbarMobile = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="navbar-mobile">
            <IconButton onClick={() => setOpen(!open)}>{open ? <CloseRounded /> : <MenuRounded />}</IconButton>
            <div style={{ display: open ? 'block' : 'none' }} className="navbar-mobile-content">
                <div className="navbar-mobile-list">
                    {mapLink.map((item) => {
                        return <a key={'navbar-mobile-item-' + item.id} href={item.id}>{item.title}</a>
                    })}
                </div>
            </div>
        </div>
    );
}

export const NavbarPC = () => {
    return (
        <div className="navbar-pc">
            {mapLink.map((item) => {
                return <a key={'navbar-pc-item-' + item.id} href={item.id}>{item.title}</a>
            })}
        </div>
    );
}

const Navbar = () => {
    return (
        <>
            <NavbarPC />
            <NavbarMobile />
        </>
    );
}

export default Navbar;