import React from 'react';
import {Alert, Pressable, Text, TextInput, View} from 'react-native';
import AppView from '../../components/app-view';
import COLORS from '../../constants';
import {Icon} from 'react-native-elements';
import AppButton from '../../components/app-button';
import {useNavigation} from '@react-navigation/native';

const SignUp: React.FC = () => {
  const {navigate} = useNavigation();
  return (
    <AppView>
      <View style={{marginVertical: 22}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginVertical: 12,
            color: COLORS.black,
          }}>
          Create Your Account
        </Text>
        <Text style={{fontSize: 16, color: COLORS.black}}>
          Connect to access the QR-code
        </Text>
      </View>
      <View style={{marginBottom: 12}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            marginVertical: 8,
          }}>
          Username
        </Text>
        <View
          style={{
            width: '100%',
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 22,
          }}>
          <TextInput
            placeholder="Enter your username"
            placeholderTextColor={COLORS.black}
            keyboardType="default"
            style={{width: '100%', fontSize: 16, color: COLORS.black}}
          />
        </View>
      </View>
      <View style={{marginBottom: 12}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            marginVertical: 8,
          }}>
          Password
        </Text>
        <View
          style={{
            width: '100%',
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 22,
          }}>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor={COLORS.black}
            secureTextEntry
            style={{width: '100%', fontSize: 16, color: COLORS.black}}
          />
        </View>
      </View>
      <AppButton
        title="Sign Up"
        filled
        onPress={() =>
          Alert.alert('success', 'User registration', [
            {text: 'OK', onPress: () => navigate('SignIn')},
          ])
        }
        style={{
          marginTop: 18,
          marginBottom: 4,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 22,
        }}>
        <Text style={{fontSize: 16, color: COLORS.black}}>
          Already have an account
        </Text>
        <Pressable onPress={() => navigate('SignIn')}>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.primary,
              fontWeight: 'bold',
              marginLeft: 6,
            }}>
            Sign In
          </Text>
        </Pressable>
      </View>
    </AppView>
  );
};

export default SignUp;
