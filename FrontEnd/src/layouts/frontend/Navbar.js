import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import swal from 'sweetalert';

function Navbar() {

    const history = useHistory();

    const logoutSubmit = (event) => {
        event.preventDefault();

        axios.post('/api/logout').then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal("Success", res.data.message, "success");
                history.push('/');
            }
        });
    }

    var AuthButtons = '';
    if (!localStorage.getItem('auth_token')) {
        AuthButtons = (
            <ul className="navbar-nav">
                <span className="nav-item">
                    <Link className="btn-outline-sm" to="/login">Đăng nhập</Link>
                </span>
                <span className="nav-item">
                    <Link className="btn-outline-sm" to="/register">Đăng ký</Link>
                </span>
            </ul>
        )
    }
    else {
        AuthButtons = (
            <ul className="navbar-nav">
                <span className="nav-item">
                    <button type="button" onClick={logoutSubmit} className="btn-outline-sm">Đăng xuất</button>
                </span>
            </ul>
        )
    }

    return (
        <div>
            <nav id="navbarExample" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
                <div className="container">
                    <Link className="navbar-brand logo-image" to="/"><img className="logotobig" src="images/logo_5000.png" alt="alternative" /></Link>
                    <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ms-auto navbar-nav-scroll">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Trang chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/listquiz">Làm bài thi</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#statistical">Thống kê</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#tips">Mẹo</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#faq">FAQ</a>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="#pricing">Pricing</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</Link>
                                <ul className="dropdown-menu" aria-labelledby="dropdown01">
                                    <li><Link className="dropdown-item" to="article.html">Article Details</Link></li>
                                    <li><div className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="terms.html">Terms Conditions</Link></li>
                                    <li><div className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="privacy.html">Privacy Policy</Link></li>
                                </ul>
                            </li> */}
                        </ul>
                        {
                            AuthButtons
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;