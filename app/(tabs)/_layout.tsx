import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import { Stack } from "expo-router";
import { SearchController } from "../../context/SearchContext";

const Page = () => {
  return (
    <SearchController>
    <View>
      <ExploreHeader />
      <Listings />
    </View>
    </SearchController>
    
  );
}
export default Page;