import React, { createContext } from "react";
import { languagesButtons } from "../data/arrayLanguageButton";
import { languagesBadges } from "../data/arrayLanguageBadge";
import { arrayMethods } from "../data/arrayMethod.data";
import { arrayMethodsStrings } from "../data/arrayMethodString";

type dataContextProviderProps = {
  children: React.ReactNode;
};

const data = {
  languagesButtons,
  languagesBadges,
  arrayMethods,
  arrayMethodsStrings,
};

export const DataContext = createContext(data);

export const DataContextProvider = ({ children }: dataContextProviderProps) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
