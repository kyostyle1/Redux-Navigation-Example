import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const MainScreen = ( { goProfile, goBack }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Main Screen
    </Text>
    <Button 
        title = 'Go Profile'
        onPress = { goProfile }>
    </Button>
    <Button 
        title = 'Go Back'
        onPress = { goBack }>
    </Button>
  </View>
);

MainScreen.navigationOptions = {
  title: 'Main',
};

const mapStateToProps = (state, ownProps) => {
    return {
        nav: state.nav
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        goProfile: () => {
            dispatch({type: 'Profile'});
        },
        goBack: () => {
            dispatch({type: 'Back'});
        }
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(MainScreen);
