import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, Modal, TouchableHighlight, TextInput } from 'react-native';


export default function App() {
  const responses = [
    "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it",
    "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes",
    "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now",
    "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no",
    "Outlook not so good", "Very doubtful", "Don't think so.", "You're pushing your luck.",
    "I don't know, I never thought I'd get this far.", "No."
  ];

  const getRandomResponse = () => setResponse(responses[Math.floor(Math.random() * responses.length)]);

  const [response, setResponse] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [question, setQuestion] = useState("");

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const submitQuestion = () => {
    getRandomResponse();
    openModal();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/magic8ball.gif')} style={styles.magic8BallImage} />
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Ask a question..."
          onChangeText={(text) => setQuestion(text)}
          value={question}
        />
        <TouchableOpacity style={styles.button} onPress={submitQuestion}>
          <Text style={styles.buttonText}>
            Ask Jaden Fisher's Mysterious Magic 8-Ball
          </Text>
        </TouchableOpacity>
        <Text style={styles.response}>{response}</Text>
      </View>

      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Your Answer is Ready.</Text>
            <Text style={styles.modalText}>{response}</Text>
            <TouchableHighlight
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#02b9d6', alignItems: 'center', justifyContent: 'center' },
  magic8BallImage: { width: 200, height: 200, marginBottom: 20 },
  content: { alignItems: 'center' },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  button: { backgroundColor: '#2c3e50', paddingVertical: 15, paddingHorizontal: 25, borderRadius: 10 },
  buttonText: { color: '#fff', fontSize: 18 },
  response: { fontSize: 24, marginBottom: 20, color: '#fff' },
  
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 22 },
  modalContent: { backgroundColor: '#000', padding: 20, borderRadius: 10, alignItems: 'center', elevation: 5 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#fff' },
  modalText: { fontSize: 16, marginBottom: 20, color: '#fff' },
  modalCloseButton: { backgroundColor: '#2c3e50', padding: 10, borderRadius: 5 },
  modalCloseButtonText: { color: '#fff', fontSize: 16 },
});