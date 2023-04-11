import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import Home from "./screens/Home";
import Livros from "./screens/Livros";
import Filmes from "./screens/Filmes";
import Series from "./screens/Series";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        icon="home"
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/7133/7133312.png",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Filmes"
        component={Filmes}
        options={{
          title: "Filmes",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/1581/1581249.png",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Livros"
        component={Livros}
        options={{
          title: "Livros",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={{
                  uri: "https://uxwing.com/wp-content/themes/uxwing/download/education-school/read-book-icon.png",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Séries"
        component={Series}
        options={{
          title: "Séries",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={{
                  uri: "https://www.iconpacks.net/icons/2/free-movie-icon-2802-thumb.png",
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
