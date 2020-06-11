import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const AdminRoute = ({ component, ...rest }: any) => {
    const isAdmin = localStorage.getItem('isAdmin') === '1';
    const routeComponent = (props: any) => (
        isAdmin
            ? React.createElement(component, props)
            : <Redirect to="/questions" />
    );

    return (
        <Route {...rest} render={routeComponent} />
    );
}