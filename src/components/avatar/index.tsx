import React, { useMemo, FC } from "react";
import {
  Image,
  Pressable,
  View,
  ImageSourcePropType,
  ViewStyle,
  ImageStyle,
} from "react-native";
import { EditPen } from "~assets/SVG";
import styles from "./styles";
import { AppColors } from "~utils";
import { width } from "~utils/dimensions";

interface AvatarProps {
  source?: ImageSourcePropType;
  onPress?: () => void;
  variant?: "primary" | "secondary";
  withShadow?: boolean;
  containerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  size?: number;
  showEdit?: boolean;
}

const Avatar: FC<AvatarProps> = ({
  source,
  onPress,
  variant = "primary",
  withShadow = true,
  containerStyle = {},
  imageStyle = {},
  size = 30,
  showEdit = false,
}) => {
  const getStyles = useMemo(() => {
    return {
      containerStyleSecondary: {
        height: width(size + 16),
        width: width(size + 16),
      },
      containerStylePrimary: {
        height: width(size),
        width: width(size),
      },
      imageStyle: {
        height: width(size),
        width: width(size),
        borderRadius: width(100),
        borderColor: AppColors.white,
        backgroundColor: AppColors.white,
      },
      imageContainer: {
        ...(variant === "secondary"
          ? styles.secondaryContainer
          : styles.primaryContainer),
      },
    };
  }, [size, withShadow]);

  return (
    <View
      style={[
        variant === "secondary"
          ? getStyles.containerStyleSecondary
          : getStyles.containerStylePrimary,
        styles.container,
        containerStyle,
      ]}
    >
      {source && (
        <Image
          source={source}
          resizeMode="cover"
          style={[getStyles.imageStyle, imageStyle]}
        />
      )}
      {showEdit && (
        <Pressable style={styles.editButton} onPress={onPress}>
          <EditPen />
        </Pressable>
      )}
    </View>
  );
};

export default Avatar;
