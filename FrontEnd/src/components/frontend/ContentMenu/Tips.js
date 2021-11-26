import React from 'react';
import { Link } from "react-router-dom";

function Tips() {
    return (
        <div id="tips" className="basic-1 bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-5">
                        <div className="text-container details">
                            <h2>Những cách trả lời thông minh cho các câu hỏi phỏng vấn khó</h2>
                            <p>Trong thị trường nhân sự ngày càng phát triển ngày nay, bạn sẽ đối mặt với rất nhiều ứng viên mạnh. Do đó, câu trả lời của bạn trong buổi phỏng vấn có thể mang lại hoặc lấy đi của bạn công việc mơ ước.</p>
                            <Link className="btn-solid-reg" data-bs-toggle="modal" to="/tinlienquan">Xem thêm</Link>
                        </div> {/* end of text-container */}
                    </div> {/* end of col */}
                    <div className="col-lg-6 col-xl-7">
                        <div className="image-container">
                            <img className="img-fluid" src="images/details-1.svg" alt="alternative" />
                        </div> {/* end of image-container */}
                    </div> {/* end of col */}
                </div> {/* end of row */}
            </div> {/* end of container */}
        </div>
    );
}

export default Tips;