import React, { Suspense } from "react";
import { Route, Switch, RouteComponentProps, RouteProps, useLocation, RedirectProps, Redirect } from "react-router-dom";
import * as H from 'history';

import { PrivateRouteProps } from "./route.model";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import LoaderLogo from "../../assets/images/logo.png";

const RenderRoute: React.FC<RouteProps> = props => {
    const { component, location } = props;
    const Component: React.ComponentType<any> = component!
    
    return (
        <Route
            exact
            path={location?.pathname}
            render={(routerProps: RouteComponentProps<{}>) => <ErrorBoundary><Component {...routerProps} {...props} /></ErrorBoundary>}
        />
    );
};

/**
 * Manages routing and redirection
 * @param appRoutes routes required for routing 
 * @param redirectPath redirect path 
 */
const PrivateRoute = (props: PrivateRouteProps & {redirectPath?: RedirectProps, animate?: boolean}) => {
    const location: H.Location = useLocation();
    const { appRoutes, redirectPath = {to: "", from: ""} } = props;
    
    return (
        <Suspense fallback={<FallbackLoader />}>
            <Switch location={location}>
                {appRoutes.map((route, index) => (
                    <RenderRoute key={index} {...route} />
                ))}
                {redirectPath.to && redirectPath.from && <Redirect to={redirectPath.to} from={redirectPath.from} />}
            </Switch>
        </Suspense>
    )
};

export default PrivateRoute;


interface FallbackProps {
    h?: number;
    styles?: React.CSSProperties;
}

/**
 * Fallback loading icon
 * @param h height of the fallback container 
 * @param styles custom css properties of the loader 
 */
export const FallbackLoader = ({h, styles}: FallbackProps) => {
    return(
        <div className="blinking" style={{position: 'relative', width: '100%', height: (h ? h : 100) + 'vh', ...styles}}>
            <img src={LoaderLogo} alt="Loader" style={{ position: 'absolute', left: '50%', top: '50%', transform:' translate(-50%, -50%)' }} />
        </div>
    )
}
