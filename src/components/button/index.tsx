import React, { useMemo, FC, ReactNode } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { SmallText } from "~components";
import AppColors from "~utils/app-colors";
import styles from "./styles";

interface ButtonProps {
  onPress?: () => void;
  children?: ReactNode;
  variant?: "primary" | "secondary";
  withShadow?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  touchableOpacityProps?: TouchableOpacityProps;
  textStyle?: StyleProp<ViewStyle>;
  textProps?: any;
  disabled?: boolean;
  buttonTextColor?: string;
}

const Button: FC<ButtonProps> = ({
  onPress,
  children=null, // Provide a default value here
  variant = "primary",
  withShadow = false,
  containerStyle = {},
  touchableOpacityProps,
  textStyle = {},
  textProps = {},
  disabled = false,
  buttonTextColor = AppColors.white,
}) => {
  const getStyles = useMemo(() => {
    return {
      container: {
        ...styles.container,
        ...(disabled
          ? styles.disableContainer
          : variant === "primary"
          ? styles.primaryContainer
          : styles.secondaryContainer),
        ...(withShadow && styles.shadow),
      },
    };
  }, [variant, withShadow, disabled]);

  return (
    <TouchableOpacity
      style={[getStyles.container, containerStyle]}
      onPress={onPress}
      disabled={disabled}
      {...touchableOpacityProps}
    >
      <SmallText
        color={disabled ? AppColors.black : buttonTextColor}
        textStyles={textStyle}
        textProps={textProps}
      >
        {children}
      </SmallText>
    </TouchableOpacity>
  );
};

export default Button;
