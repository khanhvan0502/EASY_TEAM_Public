import React from 'react';

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-col first details">
                                <h6 className="text-uppercase">Về chúng tôi</h6>
                                <p className="p-small">Là một cộng đồng chia sẻ kiến thức phỏng vấn tốt nhất cho những người có nhu cầu tìm việc. Giúp mọi người có thêm kiến thức cũng như kinh nghiệm khi đi phỏng vấn. </p>
                            </div> {/* end of footer-col */}
                            <div className="footer-col second">
                                <h6 className="text-uppercase">Địa chỉ</h6>
                                <p className="p-small">Đà Nẵng - Việt Nam</p>
                            </div> {/* end of footer-col */}
                            <div className="footer-col third">
                                <span className="fa-stack">
                                    <a href="#your-link">
                                        <i className="fas fa-circle fa-stack-2x" />
                                        <i className="fab fa-facebook-f fa-stack-1x" />
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="#your-link">
                                        <i className="fas fa-circle fa-stack-2x" />
                                        <i className="fab fa-twitter fa-stack-1x" />
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="#your-link">
                                        <i className="fas fa-circle fa-stack-2x" />
                                        <i className="fab fa-pinterest-p fa-stack-1x" />
                                    </a>
                                </span>
                                <span className="fa-stack">
                                    <a href="#your-link">
                                        <i className="fas fa-circle fa-stack-2x" />
                                        <i className="fab fa-instagram fa-stack-1x" />
                                    </a>
                                </span>
                                <p className="p-small"><a href="mailto:contact@site.com"><strong>easyteam@gmail.com</strong></a></p>
                            </div> {/* end of footer-col */}
                        </div> {/* end of col */}
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <p className="p-small">Copyright © <a href="#your-link">EASYTEAM</a></p>
                    </div> {/* enf of row */}
                </div> {/* end of container */}
            </div>
        </div>
    );
}

export default Footer;