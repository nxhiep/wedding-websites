import MenuMobile from "../navbar";

const Thanks = () => {

    return (
        <div id="Thanks">
            <div className="bg"></div>
            <div className="content">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div id="heart"></div>
                </div>
                <h1>Thank You!</h1>
                <h1>Xuân Hiệp - Ngọc Anh</h1>
                <MenuMobile />
            </div>
        </div>
    );
}

export default Thanks;