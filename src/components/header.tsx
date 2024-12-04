import { MenuMobile } from "./menu";
import WebTitle from "./webTitle";

const Header = () => {
    return (
        <header className="header">
            <div className="header-bg">
                <div style={{ width: 40 }}></div>
                <WebTitle size={35} />
                <MenuMobile />
            </div>
        </header>
    );
}

export default Header;