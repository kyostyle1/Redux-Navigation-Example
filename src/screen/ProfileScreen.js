import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

const ProfileScreen = ({ goBack }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Profile Screen</Text>
    <Button title="Go Back" onPress={goBack} />
  </View>
);

ProfileScreen.navigationOptions = {
  title: "Profile"
};

const mapStateToProps = (state, ownProps) => {
  return {
    nav: state.nav
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goBack: () => {
      dispatch({ type: "Back" });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ProfileScreen
);
