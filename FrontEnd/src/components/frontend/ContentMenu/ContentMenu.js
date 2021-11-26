import React, { Component } from 'react';
import Statistical from './Statistical';
import Tips from './Tips';
import FAQ from './FAQ';

class ContentMenu extends Component {
    render() {
        return (
            <div>
                <Statistical/>
                <Tips/>
                {/* <Testimonials/> */}
                <FAQ/>
            </div>
        );
    }
}

export default ContentMenu;