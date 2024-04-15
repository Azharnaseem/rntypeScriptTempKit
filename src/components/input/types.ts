import { Control } from "react-hook-form";
import {
  KeyboardType,
  StyleProp,
  ViewStyle,
  ReturnKeyType,
} from "react-native";

type autoCapitalizeProps = "none" | "sentences" | "words" | "characters";

interface errorProps {
  message?: string;
}
export interface InputProps {
  control: Control<any>;
  name: string;
  onSubmit?: () => void;
  maxLength?: number;
  icon?: () => React.ReactNode;
  containerStyles?: StyleProp<ViewStyle>;
  textFieldContainer?: StyleProp<ViewStyle>;
  textFieldInnerContainer?: StyleProp<ViewStyle>;
  multiline?: boolean;
  editable?: boolean;
  error?: errorProps | null;
  secureTextEntry?: boolean;
  textInputStyle?: ViewStyle;
  keytype?: ReturnKeyType;
  placeholder: string;
  keyboardType?: KeyboardType;
  textAlignVertical?: "top" | "center" | "bottom";
  autoCapitalize?: autoCapitalizeProps;
  label: string;
  
}
