import React, {useContext} from 'react';
import {Image, Pressable, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../constants';
import {Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const {navigate} = useNavigation();
  const {user, signOut} = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }
  return (
    <LinearGradient
      style={{
        flex: 1,
        justifyContent: 'space-between',
      }}
      colors={[COLORS.secondary, COLORS.primary]}>
      <View>
        <View
          style={{
            height: 40,
            width: '100%',
            backgroundColor: COLORS.primary,
            position: 'absolute',
            borderTopEndRadius: 8,
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
            top: 0,
            left: 0,
            zIndex: 9999,
            transform: [{translateY: 140}],
          }}></View>
        <View
          style={{
            height: 40,
            width: '100%',
            backgroundColor: COLORS.white,
            position: 'absolute',
            borderBottomEndRadius: 8,
            borderBottomStartRadius: 8,
            top: 0,
            left: 0,
            zIndex: 9999,
            transform: [{translateY: 590}],
          }}></View>
        <Image
          source={{uri: user?.qrCode}}
          style={{
            height: 450,
            width: '100%',
            position: 'absolute',
            top: 100,
            left: 0,
            transform: [{translateY: 60}],
          }}
        />
      </View>
      <View
        style={{
          paddingBottom: 60,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: COLORS.white,
          }}>
          Do you want to log out ?
        </Text>
        <Pressable onPress={handleSignOut}>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.white,
              fontWeight: 'bold',
              marginLeft: 4,
            }}>
            Sign Out
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};
export default Dashboard;
