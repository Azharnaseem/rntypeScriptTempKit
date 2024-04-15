import { Platform, StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: height(1.5),
  },
  textFieldContainer: {
    width: width(85),
    alignSelf: "center",
    backgroundColor: AppColors.snowWhite,
    borderRadius: width(3),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width(5),
    marginBottom: height(0.5),
  },
  textFieldInnerContainer: {
    width: width(80),
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textInput: {
    width: width(80),
    height: Platform.OS === "ios" ? height(6) : height(6.5),
    color: AppColors.white,
  },
  error: {
    color: AppColors.red,
  },
});
export default styles;
