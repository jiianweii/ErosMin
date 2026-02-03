import SwipeFeed from "@/components/minute/SwipeFeed";
import { useNavbarContext } from "@/providers/NavbarProvider";
import { useFocusEffect } from "expo-router";
import React, { useCallback } from "react";

const Minute = () => {
  const { setIsNavbarShown } = useNavbarContext();

  useFocusEffect(
    useCallback(() => {
      setIsNavbarShown(false);
      return () => setIsNavbarShown(true);
    }, []),
  );

  return <SwipeFeed />;
};

export default Minute;
