import { StyleSheet, ViewStyle } from 'react-native';
import { AppColors } from '~utils';
import { width, height } from '~utils/dimensions';

interface AvatarStyles {
  container: ViewStyle;
  primaryContainer: ViewStyle;
  secondaryContainer: ViewStyle;
  editButton: ViewStyle;
}

const styles = StyleSheet.create<AvatarStyles>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(100),
    borderColor: AppColors.white,
    backgroundColor: AppColors.snowWhite,
  },
  primaryContainer: {
    borderWidth: 0,
  },
  secondaryContainer: {
    borderWidth: width(1),
    borderColor: AppColors.primary,
  },
  editButton: {
    position: 'absolute',
    right: width(10),
    top: height(5),
  },
});

export default styles;
