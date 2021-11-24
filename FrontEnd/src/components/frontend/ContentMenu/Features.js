import React from 'react';

function Features() {
    return (
        <div id="features" className="cards-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="h2-heading">Ioniq CRM application is packed with <span>awesome features</span></h2>
                    </div> {/* end of col */}
                </div> {/* end of row */}
                <div className="row">
                    <div className="col-lg-12">
                        {/* Card */}
                        <div className="card">
                            <div className="card-icon">
                                <span className="fas fa-headphones-alt" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Người dùng</h4>
                                <p>Et blandit nisl libero at arcu. Donec ac lectus sed tellus mollis viverra. Nullam
                                    pharetra ante at nunc elementum</p>
                            </div>
                        </div>
                        {/* end of card */}
                        {/* Card */}
                        <div className="card">
                            <div className="card-icon green">
                                <span className="far fa-clipboard" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Lượt truy cập</h4>
                                <p>Vulputate nibh feugiat. Morbi pellent diam nec libero lacinia, sed ultrices velit
                                    scelerisque. Nunc placerat justo sem</p>
                            </div>
                        </div>
                        {/* end of card */}
                        {/* Card */}
                        <div className="card">
                            <div className="card-icon blue">
                                <span className="far fa-comments" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Số câu hỏi</h4>
                                <p>Ety suscipit metus sollicitudin euqu isq imperdiet nibh nec magna tincidunt, nec pala
                                    vehicula neque sodales verum</p>
                            </div>
                        </div>
                        {/* end of card */}
                    </div> {/* end of col */}
                </div> {/* end of row */}
            </div> {/* end of container */}
        </div>
    );
}

export default Features;