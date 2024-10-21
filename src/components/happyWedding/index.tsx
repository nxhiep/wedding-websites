import { Grid2 } from "@mui/material";
import MyTitle from "../myTitle";

const HappyWedding = () => {
    return (
        <div id="HappyWedding">
            <MyTitle
                title="Mừng cưới"
                description="Hộp mừng cưới"
            />

            <Grid2 container>
                <Grid2 container size={{ xs: 12, sm: 6 }} alignItems={'center'} justifyContent={'flex-end'}>
                    <div style={{ width: 400 }}>
                        <div><strong>Mừng cưới đến chú rể</strong></div>
                        <div>
                            <span>Ngân hàng: &nbsp;&nbsp;</span>
                            <strong>Techcombank</strong>
                        </div>
                        <div>
                            <span>Tên tài khoản: &nbsp;&nbsp;</span>
                            <strong>NGUYEN XUAN HIEP</strong>
                        </div>
                        <div>
                            <span>Số tài khoản: &nbsp;&nbsp;</span>
                            <strong>xxx</strong>
                        </div>
                        <div>
                            <span>Chi nhánh: &nbsp;&nbsp;</span>
                            <strong>Thanh Xuân</strong>
                        </div>
                    </div>
                </Grid2>
                <Grid2 container size={{ xs: 12, sm: 6 }} alignItems={'center'} justifyContent={'flex-start'}>
                    <div style={{ width: 400 }}>
                        <div><strong>Mừng cưới đến cô dâu</strong></div>
                        <div>
                            <span>Ngân hàng: &nbsp;&nbsp;</span>
                            <strong>Techcombank</strong>
                        </div>
                        <div>
                            <span>Tên tài khoản: &nbsp;&nbsp;</span>
                            <strong>NGUYEN XUAN HIEP</strong>
                        </div>
                        <div>
                            <span>Số tài khoản: &nbsp;&nbsp;</span>
                            <strong>xxx</strong>
                        </div>
                        <div>
                            <span>Chi nhánh: &nbsp;&nbsp;</span>
                            <strong>Thanh Xuân</strong>
                        </div>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    );
}

export default HappyWedding;