import React, {useState} from 'react';
import {View} from 'react-native';
import DropDownPicker, {ItemType} from 'react-native-dropdown-picker';
import styles from './style';

export type DropdownProps = {
  value: string;
  setValue: (value: string) => void;
  data: Array<ItemType>;
};

const Dropdown: React.FC<DropdownProps> = ({value, setValue, data}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(data);

  return (
    <View style={styles.viewDropdownStyle}>
      <DropDownPicker
        value={value}
        items={items}
        open={open}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdownStyle}
        textStyle={styles.dropdownTextStyle}
      />
    </View>
  );
};

export default Dropdown;
