import React, { useRef } from "react";
import { Image, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { setIsLoggedIn } from "~redux/slices/user";
import { Icons } from "~assets";
import {
  Button,
  LargeText,
  ScreenWrapper,
  SmallText,
  Spacer,
} from "~components";
import LoginFormValidation from "./validation"; // Correct the import path as needed
import styles from "./styles";
import { AppColors } from "~utils";
import { height } from "~utils/dimensions";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "~components/input";
interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const dispatch = useDispatch();
  const passwordRef = useRef<TextInput | null>(null);

  const {
    control,
    handleSubmit,
    formState: { isValid,errors },
  } = useForm<FormData>({
    mode: "all",
    resolver: yupResolver(LoginFormValidation), // Replace with your validation schema
  });

  const loginHandler = async () => {
    dispatch(setIsLoggedIn(true));
  };

  return (
    <ScreenWrapper
      statusBarColor={AppColors.primary}
      barStyle="light-content"
      scrollEnabled
    >
      <View style={styles.mainViewContainer}>
        <Image source={Icons.logo} style={styles.logo} resizeMode="contain" />

        <View style={styles.inputContainer}>
          <LargeText textAlign="center" size={5}>
            Sign in to your Account
          </LargeText>
          <Spacer vertical={height(2)} />
          <InputField
            control={control}
            name="email"
            keyboardType="email-address"
            onSubmit={() => passwordRef?.current?.focus()}
            keytype="next"
            label="Email"
            placeholder="Enter email"
            error={errors.email}
          />
          <InputField
            ref={passwordRef}
            label="Password"
            control={control}
            name="password"
            secureTextEntry
            placeholder="Enter Password"
            error={errors.password}
          />
          <SmallText color={AppColors.red} size={3} textAlign="right">
            Forgot Password?
          </SmallText>
        </View>
        <Spacer vertical={height(2)} />
        <Button
          disabled={!isValid}
          withShadow
          onPress={handleSubmit(loginHandler)}
        >
          Login
        </Button>
      </View>
    </ScreenWrapper>
  );
}
