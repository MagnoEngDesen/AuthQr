import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import AppView from '../../components/app-view';
import {Text} from 'react-native-elements';
import COLORS from '../../constants';
import AppButton from '../../components/app-button';
import {signIn} from '../../services/auth';
import AuthContext from '../../contexts/auth';

const SigIn: React.FC = () => {
  const {signed, signIn} = useContext(AuthContext);
  const {navigate} = useNavigation();
  const [password, onChangeTextPassword] = React.useState('');
  const [username, onChangeTextUsername] = React.useState('');

  console.log(signed);

  function handleSignIn() {
    signIn({name: username, password: password});
  }
  return (
    <AppView>
      <View style={styles.titleContainer}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginVertical: 12,
            color: COLORS.black,
          }}>
          Hi Welcome AuthQR ! 👋
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: COLORS.black,
          }}>
          Hello again you have been missed!
        </Text>
      </View>
      <View style={styles.formContainer}>
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
            onChangeText={text => onChangeTextUsername(text)}
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
            onChangeText={text => onChangeTextPassword(text)}
            style={{width: '100%', fontSize: 16, color: COLORS.black}}
          />
        </View>
      </View>
      <AppButton
        title="Sign In"
        filled
        onPress={handleSignIn}
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
          Don't have an account ?{' '}
        </Text>
        <Pressable onPress={() => navigate('SignUp')}>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.primary,
              fontWeight: 'bold',
              marginLeft: 6,
            }}>
            Register
          </Text>
        </Pressable>
      </View>
    </AppView>
  );
};
export default SigIn;

const styles = StyleSheet.create({
  titleContainer: {marginVertical: 22},
  formContainer: {marginBottom: 12},
});
