import React from 'react';

function Testimonials() {
    return (

        <div className="slider-1 bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="h2-heading">Few words from our clients</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        {/* Card Slider */}
                        <div className="slider-container">
                            <div className="swiper-container card-slider">
                                <div className="swiper-wrapper">
                                    {/* Slide */}
                                    <div className="swiper-slide">
                                        <div className="card">
                                            <img className="card-image" src="images/testimonial-1.jpg" alt="alternative" />
                                            <div className="card-body">
                                                <p className="testimonial-text">Tortor sodales eget. Vivamus imperdiet leo eu
                                                    risus tincidunt uris. Proin placerat, urna hendrerit placerat erase
                                                    convallis</p>
                                                <p className="testimonial-author">Jude Thorn - Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end of swiper-slide */}
                                    {/* end of slide */}
                                    {/* Slide */}
                                    <div className="swiper-slide">
                                        <div className="card">
                                            <img className="card-image" src="images/testimonial-2.jpg" alt="alternative" />
                                            <div className="card-body">
                                                <p className="testimonial-text">Eros volutpat ante mauris euismod sem, ut varius
                                                    nisi lectus in urna. Integer luctus, nunc eget maximus intem, orci risus
                                                </p>
                                                <p className="testimonial-author">Roy Smith - Developer</p>
                                            </div>
                                        </div>
                                    </div> {/* end of swiper-slide */}
                                    {/* end of slide */}
                                    {/* Slide */}
                                    <div className="swiper-slide">
                                        <div className="card">
                                            <img className="card-image" src="images/testimonial-3.jpg" alt="alternative" />
                                            <div className="card-body">
                                                <p className="testimonial-text">Sed congue ex quam, sit amet venenatis dolor
                                                    lacinia vulputate. Nunc pulvinar ex ex, sit amet scelerisque tellus
                                                    pretium semper</p>
                                                <p className="testimonial-author">Marsha Singer - Marketer</p>
                                            </div>
                                        </div>
                                    </div> {/* end of swiper-slide */}
                                    {/* end of slide */}
                                    {/* Slide */}
                                    <div className="swiper-slide">
                                        <div className="card">
                                            <img className="card-image" src="images/testimonial-4.jpg" alt="alternative" />
                                            <div className="card-body">
                                                <p className="testimonial-text">Etiam est lorem, interdum non semper ut,
                                                    bibendum vitae ante. Pellente sollicitun sagittis lectus. Aenean in
                                                    comod</p>
                                                <p className="testimonial-author">Tim Shaw - Designer</p>
                                            </div>
                                        </div>
                                    </div> {/* end of swiper-slide */}
                                    {/* end of slide */}
                                    {/* Slide */}
                                    <div className="swiper-slide">
                                        <div className="card">
                                            <img className="card-image" src="images/testimonial-5.jpg" alt="alternative" />
                                            <div className="card-body">
                                                <p className="testimonial-text">Quisque nec turpis placerat, accumsan lorem
                                                    lobortis, vestibulum elit. Fusce finibus nisl varius semper elementum
                                                    vivamus</p>
                                                <p className="testimonial-author">Lindsay Spice - Marketer</p>
                                            </div>
                                        </div>
                                    </div> {/* end of swiper-slide */}
                                    {/* end of slide */}
                                    {/* Slide */}
                                    <div className="swiper-slide">
                                        <div className="card">
                                            <img className="card-image" src="images/testimonial-6.jpg" alt="alternative" />
                                            <div className="card-body">
                                                <p className="testimonial-text">Vulputate sed tellus nec, imperdiet luctus
                                                    purus. Morbi lobortis massa a mi interdum condimentum. Integer non
                                                    gravida nisi</p>
                                                <p className="testimonial-author">Ann Blake - Developer</p>
                                            </div>
                                        </div>
                                    </div> {/* end of swiper-slide */}
                                    {/* end of slide */}
                                </div> {/* end of swiper-wrapper */}
                                {/* Add Arrows */}
                                <div className="swiper-button-next" />
                                <div className="swiper-button-prev" />
                                {/* end of add arrows */}
                            </div> {/* end of swiper-container */}
                        </div>
                        {/* end of card slider */}
                    </div> {/* end of col */}
                </div> {/* end of row */}
            </div> {/* end of container */}
        </div>
    );
}

export default Testimonials;