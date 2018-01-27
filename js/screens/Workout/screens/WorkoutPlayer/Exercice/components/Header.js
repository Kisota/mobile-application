import React from 'react';
import T from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  exerciceHeader: {
    fontFamily: 'Poiret One',
    textAlign: 'center',
    color: '#eee5e9',
    backgroundColor: '#08415c',
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 28,
    fontWeight: 'bold',
  },
  header: {
    height: 50,
  },
});

const Header = ({ label }) => (
  <View style={styles.header}>
    <Text style={styles.exerciceHeader}>{label.toUpperCase()}</Text>
  </View>
);

Header.propTypes = {
  label: T.string,
};

Header.defaultProps = {
  label: '',
};

export default Header;
