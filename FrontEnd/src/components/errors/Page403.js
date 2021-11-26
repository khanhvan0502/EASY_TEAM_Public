import React from "react";
import { Link } from "react-router-dom";

function Page403() {
    return (
        <div className="container main-content">
            <div className="row">
                <div className="col-md-12">
                    <div className="error_404">
                        <div>
                            <h2>Page 403</h2>
                            <h3>Access Denied.! As you are not an Admin</h3>
                        </div>
                        <div className="clearfix" /><br />
                        <Link to="/" className="form-control-submit-button">Home Page</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page403;