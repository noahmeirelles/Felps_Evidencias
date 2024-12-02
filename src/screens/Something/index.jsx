import { Text, View } from "react-native";

import styles from "./styles";


export default function Profile({ route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de classificação no campeonato brasileiro de boulder</Text>
      <View style={styles.bottomline}>
      </View>
      <View style={styles.all}>
      <Text style={styles.text2}>01-ALEJO-SUTER (argentino ladrão)</Text>
      <Text style={styles.text2}>02-EMMANUEL-VICTOR-GALINA</Text>
      <Text style={styles.text2}>03-EDUARDO-CALIXTO</Text>
      <Text style={styles.text2}>04-LUÍS-GUILHERME</Text>
      <Text style={styles.text2}>05-ANDRÉ-MACEDO (emericano ladrão)</Text>
      <Text style={styles.text2}>06-AITOR-AMAYA (europeu ladrão)</Text>
      <Text style={styles.text2}>07-FELIPE-PINTO(grosso)</Text>
      <Text style={styles.text2}>08-GABRIEL-PAPP</Text>
      <Text style={styles.text2}>09-RAUL-MORAIS</Text>
      <Text style={styles.text2}>10-JOÃO-VITOR</Text>
      <Text style={styles.text2}>11-BRUNO-SIEGLE</Text>
      <Text style={styles.text2}>12-JOHNNY-GABRIEL</Text>
      <Text style={styles.text2}>13-DAVI-STERN</Text>
      <Text style={styles.text2}>13-DAVI-STERN</Text>
      <Text style={styles.text2}>14-PIETRO-LUIGI</Text>
      <Text style={styles.text2}>15-NOAAAAHHH-MEIRELLLLESS(GOAT)</Text>
      <Text style={styles.text2}>...45</Text>
      </View>
    </View>
  );
}
