import React, {ReactNode, createContext, useEffect} from 'react';
import UserAuthentication, * as auth from '../services/auth';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
  children: ReactNode;
}

interface AuthContextData {
  signed: boolean;
  user: object | null;
  loading: boolean;
  signIn(user: UserAuthentication): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ({children}) => {
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState<object | null>(null);

  useEffect(() => {
    async function loadStoragedData() {
      setLoading(true);
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      if (storagedUser) {
        setLoading(false);
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }
    loadStoragedData();
  }, []);

  async function signIn(userAuth: UserAuthentication) {
    setLoading(true);
    const response = await auth
      .signIn(userAuth)
      .finally(() => setLoading(false));

    setUser(response.user);

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
  }

  function signOut() {
    AsyncStorage.clear(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, loading, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
