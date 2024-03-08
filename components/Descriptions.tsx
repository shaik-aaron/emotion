import {Pressable, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {descriptors} from '../store/emotionSlice';
import {Dispatch} from '@reduxjs/toolkit';

const Descriptions: React.FC = ({feeling}: any) => {
  const emotion: any = useSelector((state: any) => state.emotion.emotion);
  const dispatch: Dispatch<any> = useDispatch();

  function selectDescription() {
    if (emotion.describing.includes(feeling)) {
      let temp = emotion.describing.slice();
      let filtered = temp.filter((element: any) => element !== feeling);
      dispatch(descriptors(filtered) as any);
    } else {
      let temp = emotion.describing.slice(); // Create a copy of the array
      temp.push(feeling);
      dispatch(descriptors(temp) as any);
    }
  }

  console.log(emotion);

  return (
    <Pressable
      onPress={selectDescription}
      style={
        emotion.describing.includes(feeling)
          ? styles[`${emotion.feeling}Selected` as keyof typeof styles]
          : styles[emotion.feeling as keyof typeof styles]
      }>
      <Text
        style={
          emotion.describing.includes(feeling)
            ? styles.selectedText
            : styles[`${emotion.feeling}Text` as keyof typeof styles]
        }>
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
  downSelected: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    borderColor: '#DF4545',
    backgroundColor: '#DF4545',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  lowSelected: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    borderColor: '#6E8BD7',
    backgroundColor: '#6E8BD7',
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
  neutralSelected: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    borderColor: 'white',
    backgroundColor: 'white',
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
  fineSelected: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    borderColor: '#8EF09E',
    backgroundColor: '#8EF09E',
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
  goodSelected: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    borderColor: '#4BE95A',
    backgroundColor: '#4BE95A',
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
  selectedText: {
    color: 'black',
    fontFamily: 'Mulish-SemiBold',
    fontSize: 14,
  },
});

export default Descriptions;
