import React, {useContext} from 'react';
import AuthContext from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../constants';
import {ActivityIndicator} from 'react-native';

const Routes: React.FC = () => {
  const {signed, loading} = useContext(AuthContext);
  console.log(loading, 'lod');
  if (loading) {
    return (
      <LinearGradient
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
        colors={[COLORS.secondary, COLORS.primary]}>
        <ActivityIndicator size={'large'} color={COLORS.white} />
      </LinearGradient>
    );
  }
  return signed ? <AppRoutes /> : <AuthRoutes />;
};
export default Routes;
