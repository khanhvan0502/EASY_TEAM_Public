import React from 'react';

import publicRoutesList from '../../routes/PublicRouteList';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';

const FrontendLayout = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Switch>
                    {publicRoutesList.map((routedata, idx) => {
                        return (
                            routedata.component && (
                                <Route
                                    key={idx}
                                    path={routedata.path}
                                    exact={routedata.exact}
                                    name={routedata.name}
                                    render={(props) => (
                                        <routedata.component {...props} />
                                    )}
                                />
                            )
                        )
                    })}

                </Switch>
            </div>
        </div>
    );
}

export default FrontendLayout;