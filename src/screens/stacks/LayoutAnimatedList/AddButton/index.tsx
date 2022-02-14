import { generateRandomColor } from '@utilities';
import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import useStyle from '../styles';

interface AddButtonProps {
  addItem: () => void;
}

const AddButton: FC<AddButtonProps> = ({ addItem }) => {
  const { addButtonContainer, stick, horizontalStick, verticalStick } =
    useStyle();

  return (
    <TouchableOpacity
      onPress={addItem}
      style={[addButtonContainer, { backgroundColor: generateRandomColor() }]}
    >
      <View style={[stick, horizontalStick]} />
      <View style={[stick, verticalStick]} />
    </TouchableOpacity>
  );
};

export default AddButton;
