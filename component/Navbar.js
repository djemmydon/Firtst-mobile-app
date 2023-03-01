import { Text, TextInput, View } from "react-native";
import React, { Component } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export class Navbar extends Component {
  render() {
    return (
      <>
      <View className="h-20 px-6  flex-row justify-between items-center ">
        <View  className="shadow-lg rounded-full bg-slate-100 p-2 ">
           <FontAwesome name="bars" size={20} color="#FF375F" />
        </View>
       
        <Text className="- text-2xl text-black font-bold">
          <Text className="  text-red-600 text-3xl">K</Text>inox
        </Text>

        <View className="relative shadow-lg bg-slate-100 p-2 rounded-full">
          <FontAwesome name="shopping-bag" size={20} color="#FF375F" />
          <Text className="absolute bg-red-600 w-[10px] h-[10px] text-sm text-center rounded-full  text-white -top-1 -right-1 "></Text>
        </View>
        </View>

        <View className="my-5 mx-5">
          <View className="flex-row items-center justify-center gap-2">
            <TextInput className=" w-[280px] h-10 bg-slate-100  rounded-md"
             
            />
            <View  className="p-3 rounded-md bg-[#ff395f]">
              <FontAwesome name="search" size={19} color="#fff" />
            </View>
         
          </View>
         

        </View>
        </>
    );
  }
}

export default Navbar;
