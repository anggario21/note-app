import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import CustomButton from "../components/customButton";

const NoteCard = ({ item, setCurrentPage, deleteNote, setCurrentNote }) => {
  const handleEdit = () => {
    setCurrentNote(item);
    setCurrentPage("edit");
  };
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.desc}</Text>
      <View style={styles.buttons}>
        <CustomButton backgroundColor="#FFC300" color="#151D3B" text="Edit" fontSize={12} width={100} onPress={handleEdit} />
        <CustomButton backgroundColor="#D82148" color="#fff" text="Delete" fontSize={12} width={100} onPress={() => deleteNote(item.id)} />
      </View>
    </View>
  );
};

const Home = ({ noteList, setCurrentPage, deleteNote, setCurrentNote }) => {
  return (
    <View style={styles.container}>
      <CustomButton
        backgroundColor="#DDD"
        color="#203239"
        text="Add Note"
        width="100%"
        onPress={() => {
          setCurrentPage("add");
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={noteList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NoteCard item={item} setCurrentPage={setCurrentPage} deleteNote={deleteNote} setCurrentNote={setCurrentNote} />}
      />
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
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: "#DDD",
    borderWidth: 2,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: "600",
    color: "#203239",
    fontSize: 16,
    marginBottom: 5,
  },
  buttons: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Home;
