import React, { useContext, useEffect, useState } from "react";

import { Searchbar } from "react-native-paper";

import { LocationContext, LocationContextProvider } from "../../../services/location/location.context";

export const Search = ({isFavouriteToggle,onFavouriteToggle}) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
    search(searchKeyword);
  }, []);
  return (

      <Searchbar
      icon={isFavouriteToggle?'heart':'heart-outline'}
      onIconPress={onFavouriteToggle} //oFavToggle is a function that allow you to heart your fav restaurnat.
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
  );
};