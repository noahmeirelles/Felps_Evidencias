import { Text, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Profile({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Text>Lista de classificação no campeonato brasileiro de boulder</Text>
    </View>
  );
}
