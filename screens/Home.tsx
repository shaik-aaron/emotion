import {FC} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

const Home: FC = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.greeting}>good morning</Text>
        <Text style={styles.subHeading}>stay on top of your emotions and</Text>
        <Text style={styles.subHeading}>log them through your day</Text>
        <View style={styles.checkInContainer}>
          <View style={styles.checkInBox}>
            <Text style={styles.checkInText}>let's start by checking in</Text>
            <Pressable
              onPress={() => navigation.navigate('EmotionSelector')}
              style={styles.checkInButton}>
              <Text style={styles.howDoYouFeel}>how do you feel?</Text>
            </Pressable>
            <Text style={styles.checkedInAmount}>checked in 3 times today</Text>
          </View>
        </View>
        <View style={styles.yourEmotionsContainer}>
          <View style={styles.divider} />
          <Text style={styles.yourEmotions}>your emotions</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.emotionsContainer}>
          <View style={styles.emotionContainer}>
            <View style={styles.inlineEmotion}>
              <Text style={styles.emotion}>I'm feeling</Text>
              <Text style={styles.emotionItalic}>happy and curious</Text>
            </View>
            <View style={styles.tagsContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagEmotion}>work</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagEmotion}>travel</Text>
              </View>
            </View>
            <Text style={styles.dateStamp}>wed 23 aug, 11:18 pm</Text>
            <View style={styles.borderBottom} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  greeting: {
    fontFamily: 'Mulish-ExtraBold',
    color: 'white',
    fontSize: 32,
    marginTop: 124,
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeading: {
    textAlign: 'center',
    fontFamily: 'Mulish-Regular',
    fontSize: 16,
    color: '#585858',
    lineHeight: 24,
  },
  checkInContainer: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 64,
    marginBottom: 80,
  },
  checkInBox: {
    borderRadius: 20,
    backgroundColor: '#1f1f1f',
    paddingTop: 80,
    paddingBottom: 48,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  checkInText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Mulish-Bold',
    marginBottom: 80,
  },
  checkInButton: {
    borderRadius: 12,
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 18,
    width: 'auto',
  },
  howDoYouFeel: {
    fontFamily: 'Mulish-Bold',
    color: '#000C18',
  },
  checkedInAmount: {
    textAlign: 'center',
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: '#888888',
  },
  yourEmotionsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  divider: {
    width: 60,
    height: 1,
    backgroundColor: '#585858',
  },
  yourEmotions: {
    fontFamily: 'Mulish-SemiBold',
    color: '#585858',
    fontSize: 16,
  },
  emotionsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  emotionContainer: {
    paddingTop: 24,
  },
  inlineEmotion: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    marginBottom: 12,
  },
  emotion: {
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    color: 'white',
  },
  emotionItalic: {
    fontFamily: 'Mulish-BoldItalic',
    fontSize: 18,
    color: 'white',
  },
  tagsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  tag: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 68,
    borderColor: 'white',
    borderWidth: 1,
  },
  tagEmotion: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: 'white',
  },
  dateStamp: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: 'white',
    lineHeight: 21,
    marginBottom: 20,
  },
  borderBottom: {
    width: '100%',
    height: 1,
    backgroundColor: '#393939',
  },
});

export default Home;
