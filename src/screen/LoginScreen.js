import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";

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

const LoginScreen = ({ goMain }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Login Screen</Text>
    <Button title="Go Main" onPress={goMain} />
  </View>
);

LoginScreen.navigationOptions = {
  title: "Login"
};

const mapStateToProps = (state, ownProps) => {
  return {
    nav: state.nav
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goMain: () => {
      dispatch({ type: "Main" });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
