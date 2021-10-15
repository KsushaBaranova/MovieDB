import React from 'react';
import {TextInput} from 'react-native';
import {SearchBarProps} from '../../interfaces';
import styles from './styles';

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  onFocus,
  onBlur,
}) => {
  return (
    <TextInput
      style={styles.textInputStyle}
      placeholder={'Search movie'}
      placeholderTextColor="#a9a9a9"
      value={value}
      onChangeText={onChangeText}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default SearchBar;
