import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";


function Home() {
  const [fetc, setFetc] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setFetc(json))
      .catch((error) => {
        // Handle any errors that occur
        console.error(error);
      });
  }, []);

  return (
    <ScrollView className="bg-white">
      {/* Hero */}

      <View className="w-full h-[300px] relative">
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          className="w-full h-[300px] z-10 absolute"
        ></LinearGradient>
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/5c/23/ed/5c23edd7b6d7a7d05261359420ca8309.jpg",
          }}
          className="w-full h-full"
        />
        <Text className=" absolute bottom-10 text-5xl uppercase font-bold px-2 text-white z-10">
          30% off on the sale
        </Text>
      </View>
      {/* Headers */}
      <View className="flex-row content-center justify-between px-4 py-6 ">
      <View className="">
        <Text className=" text-xl font-bold ">Featured Products</Text>
        <Text className="text-gray-500 text-sm">
          This are the featured product here
        </Text>
        </View>
        
        <View className="items-center justify-center">
          <Text className="text-md font-bold text-grey">
          <FontAwesome name="arrow-right" size={25} color="#000" />

          </Text>
        </View>

      </View>
      {/* Product */}
      <View className="flex-row flex-wrap gap-6 justify-center my-4 ">
        {fetc.slice(0, 6).map((item) => (
          <TouchableOpacity
            key={item.id}
            className=" w-[170px] h-[200px]   relative bg-gray-300 mx-4 rounded-md"
            onPress={() => {
              navigation.navigate("ProductScreen", {
                title: item.title,
                price: item.price,
                image: item.image,
                description: item.description,
              });
            }}
          >
            <Image
              source={{
                uri: item.image,
              }}
              className=" w-full h-full  rounded-md"
            />
            <Text className=" font-medium  text-md text-white uppercase my-2 mx-2 absolute bottom-0 z-20  ">
              {item.title}
            </Text>
            <Text className=" font-medium text-md w-20 text-center bg-red-700 p-1 rounded-lg text-white uppercase absolute z-20 top-0 m-2 ">
              ${item.price}
            </Text>
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.8)"]}
              className="w-full h-[100%] z-10 absolute"
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

export default Home;
