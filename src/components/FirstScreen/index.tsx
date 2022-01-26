import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { ScreenNames } from "../../navigation";
import styles from "./styles";

type Navigation = {
  [ScreenNames.SECOND_SCREEN]: undefined;
};

type Props = { navigation: StackNavigationProp<Navigation> };

const FirstScreen = ({ navigation }: Props) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => navigation.navigate(ScreenNames.SECOND_SCREEN)}
      style={styles.button}
    >
      <Text style={styles.text}>Go to second screen</Text>
    </TouchableOpacity>
  </View>
)

export default FirstScreen;
