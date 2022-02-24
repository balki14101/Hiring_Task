import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

//Components
import Header from '../../Components/Header';
import TaskCard from '../../Components/LinearGradientCard';

//Colors
import Colors from '../../Constants/Colors';
//Data
import {YourTaskData} from '../../Constants/Data';

//Icons
import Plus from 'react-native-vector-icons/Feather';

const Tasks = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" />

      {/**-------------Header--------------- */}
      <Header />
      {/**-------------Header--------------- */}

      <ScrollView showsVerticalScrollIndicator={false}>
        {/**-------------task Card view--------------- */}
        {YourTaskData.map((item, index) => {
          return (
            <TouchableOpacity
              key={String(index)}
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('Summary', item);
              }}>
              <TaskCard item={item} />
            </TouchableOpacity>
          );
        })}
        {/**-------------task Card view--------------- */}
      </ScrollView>
      <View style={styles.newTaskButtonView}>
        <Plus name="plus" color={Colors.TERITARY} size={20} />
        <Text style={styles.newTaskButtonText}>{'New Task'}</Text>
      </View>
    </View>
  );
};

export default Tasks;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 16,
  },
  newTaskButtonView: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    bottom: 8,
    right: 16,
  },
  newTaskButtonText: {
    color: Colors.PRIMARY,
    marginLeft: 8,
    fontWeight: '500',
  },
});
