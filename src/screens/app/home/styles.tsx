import {StyleSheet} from 'react-native';
import {AppColors} from '~utils';
import {height} from '~utils/dimensions';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    alignItems: 'center',
    paddingVertical: height(3),
  },
});
export default styles;
