import React, { useState, useEffect } from "react";
import { View, Animated, Easing, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BouncingArrow = () => {
  // Initialize an Animated.Value for the X-axis position
  const translateX = new Animated.Value(0);
  const bounceDuration = 1000; // Adjust the duration of the bounce animation

  useEffect(() => {
    // Create a sequence of animations using Animated.loop
    const bounceAnimation = Animated.loop(
      Animated.sequence([
        // Move the arrow to the right
        Animated.timing(translateX, {
          toValue: 50,
          duration: bounceDuration,
          easing: Easing.linear,
          useNativeDriver: false, // set to false if needed for certain properties
        }),

        // Move the arrow back to the left
        Animated.timing(translateX, {
          toValue: 0,
          duration: bounceDuration,
          easing: Easing.linear,
          useNativeDriver: false, // set to false if needed for certain properties
        }),
      ])
    );

    // Start the bounce animation
    bounceAnimation.start();

    // Clean up the animation when the component unmounts
    return () => {
      bounceAnimation.stop();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateX }] }}>
        <MaterialCommunityIcons name="arrow-right" size={50} color="black" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BouncingArrow;
