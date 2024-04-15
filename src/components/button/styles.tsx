import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  container: {
    borderRadius: width(10),
    paddingVertical: height(1.3),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: width(20),
  },
  primaryContainer: {
    backgroundColor: AppColors.primary,
  },
  secondaryContainer: {
    backgroundColor: AppColors.primary,
  },
  disableContainer: {
    backgroundColor: AppColors.wihte5,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default styles;
