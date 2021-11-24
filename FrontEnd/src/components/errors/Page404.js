import React from "react";
import { Link } from "react-router-dom";

function Page404() {
    return (
        <div className="container main-content">
            <div className="row">
                <div className="col-md-12">
                    <div className="error_404">
                        <div>
                            <h2>Page 404</h2>
                            <h3>Page Not Found</h3>
                        </div>
                        <div className="clearfix" /><br />
                        <Link to="/" className="form-control-submit-button">Home Page</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page404;