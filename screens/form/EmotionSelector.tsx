import {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

export const EmotionSelector: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backButtonsContainer}>
        <Pressable>
          <Image source={require('../../assets/back.png')} />
        </Pressable>
        <Pressable>
          <Image source={require('../../assets/close.png')} />
        </Pressable>
      </View>
      <Text style={styles.step}>1/4</Text>
      <Text style={styles.howDoYouFeel}>how do you feel?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
  },
  backButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 64,
    marginBottom: 50,
  },
  step: {
    fontFamily: 'Mulish-Medium',
    color: '#585858',
    fontSize: 14,
    marginBottom: 4,
  },
  howDoYouFeel: {
    fontFamily: 'Mulish-ExtraBold',
    fontSize: 20,
    color: 'white',
  },
});
