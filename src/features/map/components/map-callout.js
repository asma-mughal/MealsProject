import React from "react";
import {Text} from 'react-native';
import { CompactResturant } from "../../../components/restaurant/CompactResturant";
export const MapCallout = ({ restaurant }) => (
  <CompactResturant isMap restaurant={restaurant} />
);