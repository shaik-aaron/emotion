import {Pressable, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Descriptions: React.FC = ({feeling}: any) => {
  const emotion = useSelector((state: any) => state.emotion.emotion);

  return (
    <Pressable style={styles[emotion.feeling as keyof typeof styles]}>
      <Text style={styles[`${emotion.feeling}Text`] as keyof typeof styles}>
        {feeling}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  down: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    borderColor: '#DF4545',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  downText: {
    color: '#DF4545',
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
  },
  lowText: {
    color: '#6E8BD7',
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
  },
  neutralText: {
    color: 'white',
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
  },
  fineText: {
    color: '#8EF09E',
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
  },
  goodText: {
    color: '#4BE95A',
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
  },
  low: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    borderColor: '#6E8BD7',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  neutral: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    borderColor: 'white',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fine: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    borderColor: '#8EF09E',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  good: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    borderColor: '#4BE95A',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Descriptions;
