import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../screen/LoginScreen';
import MainScreen from '../screen/MainScreen';
import ProfileScreen from '../screen/ProfileScreen';

export const AppNavigator = StackNavigator({
    Login: { screen: LoginScreen },
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav})} />
);

const mapStateToProps = (state, ownProps) => {
    return {
        nav: state.nav,
    }
}

export default connect(mapStateToProps)(AppWithNavigationState);