import { KeyboardTypeOptions } from "react-native";

export type InputProps = {
  secureTextEntry?: boolean;
  label: string;
  type: KeyboardTypeOptions;
  placeholder?: string;
  onChangeText?: (value: string) => void;
  value?: string | number | any;
  limit?: number;
  iconName: string;
}