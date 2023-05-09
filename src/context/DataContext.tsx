import React, { createContext } from "react";
import { languagesButtons } from "../data/arrayLanguageButton";
import { languagesBadges } from "../data/arrayLanguageBadge";
import { arrayMethods } from "../data/arrayMethod.data";

type dataContextProviderProps = {
  children: React.ReactNode;
};

const data = {
  languagesButtons,
  languagesBadges,
  arrayMethods,
};

export const DataContext = createContext(data);

export const DataContextProvider = ({ children }: dataContextProviderProps) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
