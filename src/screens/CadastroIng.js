import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import api from "../axios/axios";

export default function CadastroIng({ navigation }) {
  const [ingresso, setIngresso] = useState({
    preco: "",
    tipo: "",
    fk_id_evento: ""
  });

  async function handleCadastroIngresso() {
    await api.postCadastroIngresso(ingresso).then(
        (response)=>{
            console.log(response.data.message);
            Alert.alert(response.data.message);
        }, (error)=>{
            console.log(error)
            Alert.alert(error.response.data.error)
        }
    );
  }

  return(
    <View style={styles.container}>
         <Text style={styles.title}> Faça o Cadastro do Ingresso</Text>
         <TextInput
           style={styles.input}
           placeholder="Preço"
           value={ingresso.preco}
           onChangeText={(value) => {
            setIngresso({ ...ingresso, preco: value });
           }}
         />
    <TextInput
          style={styles.input}
            placeholder="Tipo"
            value={ingresso.tipo}
            onChangeText={(value) => {
            setIngresso({ ...ingresso, tipo: value });
            }}
          />
     <TextInput
          style={styles.input}
            placeholder="ID do Evento"
            value={ingresso.fk_id_evento}
            onChangeText={(value) => {
            setIngresso({ ...ingresso, fk_id_evento: value });
            }}
          />
          <TouchableOpacity onPress={handleCadastroIngresso} style={styles.button}>
            <Text>Cadastrar Ingresso</Text>
          </TouchableOpacity>
    
          <Button title="Voltar para Home" onPress={()=> navigation.navigate("Home")} />
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
          backgroundColor: 'lightgreen',
          padding: 10,
          borderRadius: 5
        }
      });
