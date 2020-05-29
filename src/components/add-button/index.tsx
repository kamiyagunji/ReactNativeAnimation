import React, {useState} from 'react';
import {Animated} from 'react-native';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'navy',
    width: 55,
    height: 55,
    borderRadius: 28,
    position: 'absolute',
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    zIndex: 1,
    elevation: 1,
  },

  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

type AddButtonProps = {
  onAdd: () => void,
}

const AddButton = ({ onAdd } : AddButtonProps) => {
  const [scaleValue] = useState(new Animated.Value(0));
  const onButtonClicked = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
      duration: 700,
    }).start(() => { scaleValue.setValue(0); });
    onAdd();
  };

  const scaleValueInterpolation = scaleValue.interpolate({
    inputRange: [0, 0.25, 1],
    outputRange: [1, 20, 30],
  });

  return (
    <>
      <Animated.View
        style={[styles.container,
          { transform: [{ scale: scaleValueInterpolation }] },
        ]}
      />
      <TouchableOpacity
        style={styles.container}
        onPress={onButtonClicked}
      >
        <Text style={styles.text}>
          +
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default AddButton;
