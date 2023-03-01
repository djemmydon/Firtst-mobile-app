import {
  View,
  Text,
  SafeAreaView,
  Image,
  Touchable,
  TouchableHighlightBase,
  Button,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ProductScreen = () => {
  const [qty, setQty] = useState(1);

  const handleIncreament = () => {
    setQty((prev) => prev + 1);
  };


  const handleDecreament = () => {
    if (qty <=1) {
      setQty(1);
    }
    setQty((prev) => prev - 1);

  };

  const navigattion = useNavigation();

  const {
    params: { title, price, image, description },
  } = useRoute();
  return (
    <ScrollView>
      <View className="w-full h-[300px] relative">
        <Text
          onPress={navigattion.goBack}
          className="absolute z-10 my-4 mx-4 bg-red-500 p-2 rounded-full"
        >
          <FontAwesome name="arrow-left" size={15} color="#fff" />
        </Text>
        <Image
          source={{
            uri: image,
          }}
          className="w-full h-full"
        />
      </View>

      <View className="my-4 px-4 bg-white rounded-3xl ">
        <Text className="text-black py-4">Rating 4.0 of 5</Text>
        <Text className="text-2xl font-bold uppercase text-[#FF375F]">
          {title}
        </Text>
        <Text className="text-md text-gray-500 capitalize py-2">
          {description}
        </Text>

        <View className="py-4 flex-row gap-4 items-center">
          <Text className="text-xl">QTY</Text>
          <View className=" flex-row gap-5 items-center justify-center border w-28">
            <FontAwesome onPress={handleDecreament}  name="minus" size={15} color="#FF375F" />
            <Text>{qty}</Text>
            <FontAwesome onPress={handleIncreament} name="plus" size={15} color="#FF375F" />
          </View>
        </View>

       
        
        <View className="py-4 flex-row justify-between">

        <Text className="text-xl text-[#FF375F] my-2 font-bold uppercase">
          ${price}.00
        </Text>

          
        <Pressable className="bg-red-700 w-52  h-10 active:bg-red-500 transition rounded-full">
          <Text className="text-white text-xl text-center  py-1 font-bold">
           Add to Cart 
            </Text>
            
        </Pressable>
        </View>
     
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
