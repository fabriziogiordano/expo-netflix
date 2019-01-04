import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, device, images } from '../api/constants';

const Header = props => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Image source={images.netflix} style={styles.logo} />
      <View style={styles.containerMenu}>
        <Text style={styles.text}>TV Shows</Text>
        <Text style={styles.text}>Movies</Text>
        <Text style={styles.text}>My List</Text>
      </View>
    </View>
  );
};

Header.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: colors.black20,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingBottom: 4,
    paddingHorizontal: 16,
    paddingTop: device.iPhoneX ? 54 : 30,
    position: 'absolute',
    width: '100%',
    zIndex: 10
  },
  logo: {
    height: 35,
    marginRight: 48,
    width: 20
  },
  containerMenu: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 35,
    flex: 1
  },
  text: {
    color: colors.white,
    fontFamily: 'HelveticaNeue-Medium',
    marginRight: 24
  }
});

export default Header;
