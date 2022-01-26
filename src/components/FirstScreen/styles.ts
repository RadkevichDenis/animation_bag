import { StyleSheet, TextProps, ViewProps } from "react-native";

type Style = {
  container: ViewProps;
  button: ViewProps;
  text: TextProps;
};

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 15,
  },
  text: {
    color: "#000",
  },
});
