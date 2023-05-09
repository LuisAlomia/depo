import React, { createContext } from "react";

type dataContextProviderProps = {
  children: React.ReactNode;
};

const data = {
  name: "luis",
};

export const DataContext = createContext(data);

export const DataContextProvider = ({ children }: dataContextProviderProps) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
