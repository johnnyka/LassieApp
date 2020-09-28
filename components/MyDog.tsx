import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Alert,
} from "react-native";
import { useTheme } from "@react-navigation/native";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Dog, useThemeTypes } from "../types";
import ButtonGroup from "./buttons/ButtonGroup";

import { Text, View } from "./Themed";

export default function MyDog(): React.ReactElement {
  const [dogInfo, setDogInfo] = useState<Dog | null>(null);
  const buttons = [
    { 
      name: "Health", 
      pressHandler: () => console.log("clicked Health") 
    },
    {
      name: "Activities",
      pressHandler: () => console.log("clicked Activities"),
    },
  ];
  // This image should be saved to backend for specific user
  // const [imageToUpload, setImageToUpload] = useState<string | null>(null);

  async function getImagePermission(): Promise<true | false> {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      return status === "granted";
    }
    return false;
  }
  function fetchDogInfo(): Dog {
    // Mock
    return {
      image: "",
      name: "Charles Dickens",
      age: 2,
    };
  }

  async function selectImage(): Promise<void> {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        allowsMultipleSelection: false,
      });
      if (!result.cancelled) {
        // setImageToUpload(result.uri);
        setDogInfo({ ...dogInfo, image: result.uri });
      }
    } catch (err) {
      Alert.alert(err);
    }
  }

  async function handlePress(): Promise<void> {
    const access = await getImagePermission();
    if (access) await selectImage();
    else
      Alert.alert(
        "Sorry, we need permission to access your images for this to work"
      );
  }

  function renderImage(): React.ReactElement {
    const themeColors: useThemeTypes = useTheme();

    const {
      colors: { background },
    } = themeColors;
    return dogInfo && dogInfo.image ? (
      <View style={{ backgroundColor: background }}>
        <Image style={styles.dogImage} source={{ uri: dogInfo.image }} />
      </View>
    ) : (
      <TouchableOpacity
        onPress={handlePress}
        style={{ backgroundColor: background }}
      >
        <View style={styles.dogImage}>
          <Text style={styles.addPhotoText}>Add Photo</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function renderInfo(): React.ReactElement | null {
    const themeColors: useThemeTypes = useTheme();

    const {
      colors: { text, background },
    } = themeColors;
    return dogInfo ? (
      <View style={{ backgroundColor: background }}>
        <Text style={[styles.dogName, { color: text }]}>{dogInfo.name}</Text>
        <Text style={[styles.dogAge, { color: text }]}>
          {dogInfo.age} years old
        </Text>
      </View>
    ) : null;
  }

  useEffect(() => {
    const data = fetchDogInfo();
    setDogInfo(data);
  }, []);

  return (
    <>
      <View>
        {renderImage()}
        {renderInfo()}
      </View>
      <ButtonGroup buttons={buttons} />
    </>
  );
}

const styles = StyleSheet.create({
  addPhotoText: {
    fontSize: 20,
    fontFamily: "montserrat-semiBold",
  },
  dogImage: {
    borderRadius: 500,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  dogName: {
    textAlign: "center",
    padding: 10,
    fontFamily: "montserrat-semiBold",
    fontSize: 20,
  },
  dogAge: {
    textAlign: "center",
    paddingBottom: 10,
    fontFamily: "montserrat-regular",
  },
  buttonGroup: {
    flexDirection: "row",
  },
  button: {
    width: 150,
    padding: 15,
    borderRadius: 8,
    margin: 5,
    marginTop: 15,
    marginBottom: 15,
  },
  btnText: {
    textAlign: "center",
    fontFamily: "montserrat-semiBold",
    fontSize: 17,
  },
});
