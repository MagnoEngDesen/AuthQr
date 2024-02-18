import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import COLORS from '../../constants';

interface Props {
  children: ReactNode;
}

const AppView: React.FC<Props> = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>{children}</View>
    </SafeAreaView>
  );
};
export default AppView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  body: {flex: 1, marginHorizontal: 22},
});
