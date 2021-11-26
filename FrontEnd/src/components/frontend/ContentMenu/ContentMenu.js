import React, { Component } from 'react';
import Details from './Details';
import Features from './Features';
import Questions from './Questions';
import Testimonials from './Testimonials';

class ContentMenu extends Component {
    render() {
        return (
            <div>
                <Features/>
                <Details/>
                {/* <Testimonials/> */}
                <Questions/>
            </div>
        );
    }
}

export default ContentMenu;