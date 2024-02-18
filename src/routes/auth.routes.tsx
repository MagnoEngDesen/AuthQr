import React from 'react';
import SigIn from '../pages/Signin';

import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../pages/Signup';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name="SignIn"
        component={SigIn}
        options={{title: 'Sign In', headerMode: 'float'}}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: 'Sign Up'}}
      />
    </AuthStack.Navigator>
  );
};
export default AuthRoutes;
