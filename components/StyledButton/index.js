import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = ({ type, content, onPress }) => {
  //  const type = props.type;
  //  const content = props.content;
  //  const onPress = props.onPress;
  const backgroundColor = type === "primary" ? "#171a20cc" : "#fffeea";
  const textColor = type === "primary" ? "#ffffff" : "#171a20";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
