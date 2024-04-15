import { useIsFocused } from "@react-navigation/native";
import React, { Fragment } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  ViewStyle,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "./styles";
import { height } from "~utils/dimensions";
import { AppColors } from "~utils";

interface Props {
  children?: any;
  statusBarColor?: string;
  transclucent?: boolean;
  scrollEnabled?: boolean;
  barStyle?: string;
  imageBackgroundColor?: string;
  backgroundColor?: string;
  contentContainerStyle?: ViewStyle;
  footerUnScrollable?: () => void;
  containerViewStyle?: ViewStyle;
  headerUnScrollable?: () => void;
  backgroundImage?: any;
}
export default function ScreenWrapper({
  children,
  statusBarColor = AppColors.white,
  transclucent = false,
  scrollEnabled = false,
  backgroundImage,
  containerViewStyle = {},
  contentContainerStyle = {},
  headerUnScrollable = () => null,
  footerUnScrollable = () => null,
  backgroundColor = AppColors.transparent,
  imageBackgroundColor = AppColors.black,
  barStyle = "dark-content",
}: Props) {
  if (backgroundImage) {
    backgroundColor = AppColors.transparent;
  }
  function FocusAwareStatusBar(props: any) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  }
  const content = () => {
    return (
      <>
        {headerUnScrollable()}
        <View
          style={[
            styles.mainViewContainer,
            containerViewStyle,
            {
              backgroundColor: transclucent
                ? AppColors.transparent
                : backgroundColor,
            },
          ]}
        >
          {scrollEnabled ? (
            <KeyboardAwareScrollView
              contentContainerStyle={[
                styles.contentContainer,
                contentContainerStyle,
              ]}
              keyboardShouldPersistTaps="handled"
              extraScrollHeight={height(8)}
              showsVerticalScrollIndicator={false}
            >
              {children}
            </KeyboardAwareScrollView>
          ) : (
            children
          )}
          {footerUnScrollable()}
        </View>
      </>
    );
  };
  return (
    <Fragment>
      <FocusAwareStatusBar
        barStyle={barStyle}
        backgroundColor={statusBarColor}
        translucent={transclucent}
      />
      {!transclucent && (
        <SafeAreaView style={{ backgroundColor: statusBarColor }} />
      )}
      {backgroundImage ? (
        <ImageBackground
          source={backgroundImage}
          style={[styles.container, { backgroundColor: imageBackgroundColor }]}
          resizeMode={"cover"}
        >
          {content()}
        </ImageBackground>
      ) : (
        content()
      )}
    </Fragment>
  );
}
