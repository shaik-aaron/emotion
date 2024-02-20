import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home: FC = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});

export default Home;
