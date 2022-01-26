import { StyleSheet, ViewProps } from "react-native";

type Style = {
  container: ViewProps;
};

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
