import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button
} from "react-native";
import api from "../axios/axios";

export default function Home({ navigation }) {
  return (
  <View>
        <Text style={styles.title}> Bem-vindos ao Home!</Text>

    <Button style={styles.button} title="Cadastro de Organizador" onPress={()=>navigation.navigate("CadastroOrganizador")}/>
    <Button style={styles.button} title="Cadastro de Evento" onPress={()=>navigation.navigate("CadastroEvento")}/>
    <Button style={styles.button} title="Cadastro de Ingresso" onPress={()=>navigation.navigate("CadastroIngresso")}/>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  button:{
    backgroundColor: 'greem',
    padding: 10,
    borderRadius: 9
  }
});
