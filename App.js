import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

import Home from "./component/Home";
import Navbar from "./component/Navbar";
import ProductScreen from "./component/ProductScreen";
import FontAwesome from "@expo/vector-icons/FontAwesome";


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
          <Navbar/>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
        
          <Stack.Screen name="Home"  component={Home} />
          <Stack.Screen name="ProductScreen" component={ProductScreen} />

        </Stack.Navigator>
     
        <View className=" w-16 h-16 bg-white border-2 border-red-400 rounded-full absolute right-0 bottom-0 m-4 p-4 hover:bg-red-400">
        <FontAwesome name="shopping-cart" size={30} color="#FF375F" />

        </View>
      </TailwindProvider>
    </NavigationContainer>
  );
}
//  function App() {
//   return (
//     <View style={styles.body}>
//       <Text style={styles.vieww}>This is myijsdjnnsvlkndlfnvknfvjknkjvndkjnvkjn text</Text>
//   </View>
//   )
// }

// export default App
const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    backgroundColor: "white", 
  },
});
