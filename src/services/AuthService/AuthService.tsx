import React, { ReactNode } from 'react'
import { connect } from 'react-redux'

import { RouteProps, withRouter, RouteComponentProps } from 'react-router-dom';
import * as History from 'history'

import { Dispatch } from 'redux';
import { RootState } from '../../store/rootReducer';

type Props = RouteComponentProps & RouteProps & ReduxStateProps & ReduxDispatchProps & {
    children(childProps: {currentPath: string, location?: History.Location, isAuthenticated: () => boolean}): ReactNode
};
interface State {

};

/**
 * Manages user Authentication and routing processes
 */
class AuthService extends React.Component<Props, State> {
    /**
     * Checks whether user is authenticated
     */
    isAuthenticated = () => {
        return true;
    }

    render() {
        const {location, children} = this.props;

        return children({
            currentPath: location.pathname,
            location: location,
            isAuthenticated: this.isAuthenticated
        })
    }
}

export interface ReduxStateProps {
}

export interface ReduxDispatchProps {
}

const mapStateToProps = (state: RootState): ReduxStateProps => ({
})

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthService))
