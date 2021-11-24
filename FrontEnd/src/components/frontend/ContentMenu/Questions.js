import React from 'react';

function Questions() {
    return (
        <div className="accordion-1">
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
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How
                                        can I contact you quickly and get a reasonable quote more for my project?</button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">Sed lacinia cursus viverra. Nunc sed libero euismod, congue
                                        dui a, vulputate quam. Pellentesque neque nisi, ultrices ut ipsum ac, mattis
                                        sollicitudin neque. Ut ac nunc sem. Etiam id erat facilisis magna sagittis porta.
                                        Donec eu dolor eu dolor finibus sodales consectetur, et condimentum elit tincidunt
                                    </div>
                                </div>
                            </div>
                            {/* end of accordion-item */}
                            {/* Accordion Item */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Is
                                        the Free Tier available for unlimited time or it will end more words after a
                                        while?</button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">Mauris faucibus placerat nisl. Sed eros odio, posuere at
                                        felis quis, tincidunt facilisis nibh. Nulla in ante sem. Nam aliquam urna nisi,
                                        cursus semper dolor convallis at. Duis vulputate est in consectetur, et condimentum
                                        elit tincidunt libero consectetur, et condimentum suis vulputate est in libero</div>
                                </div>
                            </div>
                            {/* end of accordion-item */}
                            {/* Accordion Item */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Can I use the app on mobile devices or it’s limited
                                        more words to desktop use?</button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">Nullam at diam at mi facilisis consectetur at non turpis.
                                        Proin a felis nisi. Sed at orci rutrum, tincidunt magna vel, pharetra libero. Proin
                                        mauris orci, faucibus eget malesuada vel, consectetur, et condimentum elit tincidunt
                                        pellentesque vitae ligula. Pellentesque euismod tincidun</div>
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

export default Questions;