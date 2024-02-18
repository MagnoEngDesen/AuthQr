import {Alert} from 'react-native';

export default interface UserAuthentication {
  name: string;
  password: string;
}

interface Response {
  token: string;
  user: {
    name: string;
    qrCode: string;
  };
}

export function signIn(user: UserAuthentication): Promise<Response> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mockUsers = [
        {
          user: {
            name: 'usuario1',
            password: 'usuario1',
            qrCode:
              'https://raw.githubusercontent.com/MagnoEngDesen/assets/master/raw/App-Fut/usuario1.jpeg',
          },
        },
        {
          user: {
            name: 'usuario2',
            password: 'usuario2',
            qrCode:
              'https://raw.githubusercontent.com/MagnoEngDesen/assets/master/raw/App-Fut/usuario2.jpeg',
          },
        },
        {
          user: {
            name: 'usuario3',
            password: 'usuario3',
            qrCode:
              'https://raw.githubusercontent.com/MagnoEngDesen/assets/master/raw/App-Fut/usuario3.jpeg',
          },
        },
        {
          user: {
            name: 'usuario4',
            password: 'usuario4',
            qrCode:
              'https://raw.githubusercontent.com/MagnoEngDesen/assets/master/raw/App-Fut/usuario4.jpeg',
          },
        },
        {
          user: {
            name: 'usuario5',
            password: 'usuario5',
            qrCode:
              'https://raw.githubusercontent.com/MagnoEngDesen/assets/master/raw/App-Fut/usuario5.jpeg',
          },
        },
      ];

      const authenticatedUser = mockUsers.find(
        mockUser =>
          mockUser.user.name === user.name &&
          mockUser.user.password === user.password,
      );

      if (authenticatedUser) {
        const authToken = 'simulated_auth_token';
        resolve({
          token: authToken,
          user: {
            name: authenticatedUser.user.name,
            qrCode: authenticatedUser.user.qrCode,
          },
        });
      } else {
        reject(
          Alert.alert('Error', 'Incorrect Username or Password', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]),
        );
      }
    }, 2000);
  });
}
