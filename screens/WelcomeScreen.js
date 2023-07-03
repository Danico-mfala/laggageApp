import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../constants/colors";

export default function WelcomeScreen() {
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: COLORS.secondary }}
    >
      <View className="flex-1 justify-around my-4">
        <Text
          style={{
            color: COLORS.white,
            fontSize: 40,
            marginTop: 50,
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Let's Get Started!
        </Text>

        <View>
          <Image
            source={require("../assets/images/hero1.png")}
            style={{
              width: 350,
              height: 250,
              marginTop: 50,
              marginLeft: 30,
              textAlign: "center",
            }}
          />
        </View>
        <View style={{ margin: 50 }}>
          <TouchableOpacity
            style={{
              marginLeft: 30,
              backgroundColor: COLORS.grey,
              marginRight: 70,
              borderRadius: 7,
              width: 320,
              marginLeft: -14,
            }}
          >
            <Text
              style={{
                color: COLORS.black,
                fontStyle: Blob,
                textAlign: "center",

                margin: 10,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
