import { combineReducers } from "redux";
import { NavigationActions } from "react-navigation";
import { AppNavigator } from "../navigators/AppNavigator";

const firstAction = AppNavigator.router.getActionForPathAndParams("Login");

const initialNavState = AppNavigator.router.getStateForAction(
  firstAction
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case "Main":
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Main" }),
        state
      );
      break;
    case "Profile":
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Profile" }),
        state
      );
      break;
    case "Back":
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    default:
      break;
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const AppReducer = combineReducers({
  nav
});

export default AppReducer;
