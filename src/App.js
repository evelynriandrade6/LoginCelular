import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import Home from "./screens/Home";
import CadastroEvento from "./screens/CadastroEvento";
import CadastroOrganizador from "./screens/CadastroOrg";
import CadastroIngresso from "./screens/CadastroIng";
import Layout from "./components/Layout";

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={()=>(
          <Layout>
            <Login />
          </Layout>
        )}/>
        <Stack.Screen name="Cadastro" component={()=>(
          <Layout>
            <Cadastro />
          </Layout>
        )}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="CadastroEvento" component={CadastroEvento}/>
        <Stack.Screen name="CadastroOrganizador" component={CadastroOrganizador}/>
        <Stack.Screen name="CadastroIngresso" component={CadastroIngresso}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
