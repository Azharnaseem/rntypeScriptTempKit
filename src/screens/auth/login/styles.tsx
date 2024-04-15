import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import { height ,width} from '~utils/dimensions';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    alignItems: 'center',
    paddingTop:height(4),

  },
  title: {
    color: AppColors.black,
    fontWeight: 'bold',
    fontSize: width(4),
    marginBottom: height(2)
  },
  inputContainer:{
    width:width(85),
    marginVertical:height(2),
    backgroundColor:AppColors.white,
    elevation:5,
    paddingVertical:height(2),
    paddingHorizontal:width(2),
    borderRadius:width(2)
  },
  logo:{
    marginBottom:height(4)
  }
});
export default styles;
