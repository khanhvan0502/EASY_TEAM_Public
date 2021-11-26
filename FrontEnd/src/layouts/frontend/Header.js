import { Link } from "react-router-dom";

function Header() {
    return (
        <header id="header" className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h1 className="h1-large">Chào mừng đến với <span className="replace-me">ứng dụng website về câu hỏi phỏng vấn</span></h1>
                            <p className="p-large">Cung cấp các câu hỏi trực quan về các ngôn ngữ phổ biến, giúp người dùng có thể củng cố về kiến thức</p>
                            <Link className="btn-solid-lg" to="/register">Đăng ký ngay</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image-container">
                            <img className="img-fluid" src="images/header-illustration.svg" alt="alternative" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;