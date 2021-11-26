import React from 'react';

function FAQ() {
    return (
        <div id="faq" className="accordion-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="h2-heading">Frequent questions</h2>
                    </div> {/* end of col */}
                </div> {/* end of row */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="accordion" id="accordionExample">
                            {/* Accordion Item */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Làm thế nào để đăng kí tài khoản</button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">Sử dụng gmail để đăng kí tài khoản.</div>
                                </div>
                            </div>
                            {/* end of accordion-item */}
                            {/* Accordion Item */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Tôi có thể làm bài thi khi không đăng kí tài khoản không?</button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">Bạn có thể làm bài thi khi chưa có tài khoản trên website, nhưng bạn sẽ không xem được điểm số bài thi của mình. Trường hợp bạn muốn xem, bạn phải đăng kí tài khoản ngay sau khi làm bài thi, bạn sẽ xem được kết quả của bạn.</div>
                                </div>
                            </div>
                            {/* end of accordion-item */}
                            {/* Accordion Item */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Tôi có thể sử dụng website này bằng điện thoại di động được không?</button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse " aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">Bạn có thể sử dụng website bằng điện thoại, nhưng bạn muốn sử dụng website một cách tốt nhất thì bạn nên truy cập bằng máy tính.</div>
                                </div>
                            </div>
                            {/* end of accordion-item */}
                            {/* Accordion Item */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Tôi nên tránh những câu hỏi nào?</button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">- Câu hỏi không có mục đích, không đem lại kiến thức cho bạn. Những câu hỏi mà bạn đã biết rõ câu trả lời. 
                                    Những câu hỏi trùng lặp.</div>
                                </div>
                            </div>
                            {/* end of accordion-item */}
                            {/* Accordion Item */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Bạn có thể Donate cho team không???</button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">0788030997 - Bùi Phước Thái nhé!!!</div>
                                </div>
                            </div>
                            {/* end of accordion-item */}
                        </div> {/* end of accordion */}
                    </div> {/* end of col */}
                </div> {/* end of row */}
            </div> {/* end of container */}
        </div>
    );
}

export default FAQ;