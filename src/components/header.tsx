import Navbar from "./navbar";
import WebTitle from "./webTitle";

const Header = () => {
    return (
        <header className="header">
            <div className="header-bg">
                <div style={{ width: 40 }}></div>
                <WebTitle size={30} />
                <Navbar />
            </div>
        </header>
    );
}

export default Header;