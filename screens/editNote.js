import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomTextInput from "../components/customTextInput";
import CustomButton from "../components/customButton";

const EditNote = ({ item, setCurrentPage, editNote }) => {
  const [newTitle, setNewTitle] = useState(item.title);
  const [newDesc, setNewDesc] = useState(item.desc);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Edit Note</Text>
      <CustomTextInput text={newTitle} onChange={setNewTitle} label="Title" placeholder={item.title} numberOfLines={1} multiline={false} />
      <CustomTextInput text={newDesc} onChange={setNewDesc} label="Description" placeholder={item.desc} multiline numberOfLines={4} />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="Save"
          width="100%"
          onPress={() => {
            editNote(item.id, newTitle, newDesc);
            setCurrentPage("home");
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton backgroundColor="#DDDDDD" color="#203239" text="Back to Home" width="100%" onPress={() => setCurrentPage("home")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#203239",
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default EditNote;
