import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//Colors
import Colors from '../Constants/Colors';

//Icons
import SearchIcon from 'react-native-vector-icons/Feather';
import BellIcon from 'react-native-vector-icons/Feather';

const Header = props => {
  console.log('header props', props);
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.headerText}>{'Your Tasks'}</Text>
      <View style={styles.iconView}>
        <BellIcon
          name="bell"
          size={24}
          color={Colors.PRIMARY}
          style={{marginRight: 6}}
        />
        <SearchIcon name="search" size={24} color={Colors.PRIMARY} />
      </View>
    </View>
  );
};

export default Header;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.SECONDARY,
  },
  iconView: {
    flexDirection: 'row',
  },
});
