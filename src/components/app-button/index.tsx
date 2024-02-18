import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import COLORS from '../../constants';

interface Props {
  title: string;
  filled?: boolean;
  style?: StyleProp<ViewStyle>;
  color?: string;
  onPress?: () => void;
}

const AppButton: React.FC<Props> = ({
  onPress,
  title,
  style = {},
  color,
  filled,
}) => {
  const filledBgColor = color || COLORS.primary;
  const outlinedColor = COLORS.white;
  const bgColor = filled ? filledBgColor : outlinedColor;
  const textColor = filled ? COLORS.white : COLORS.primary;

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: bgColor}, style]}
      onPress={onPress}>
      <Text style={{fontSize: 18, ...{color: textColor}}}>{title}</Text>
    </TouchableOpacity>
  );
};
export default AppButton;
const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
