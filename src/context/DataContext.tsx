import React, { createContext } from "react";
import { languagesButtons } from "../data/arrayLanguageButton";
import { languagesBadges } from "../data/arrayLanguageBadge";
import { arrayMethods } from "../data/arrayMethod.data";
import { arrayMethodsStrings } from "../data/arrayMethodString";
import { arrayCommands } from "../data/arrayCommands";
import { commandsLanguageButton } from "../data/commandsLanguageButton";

type dataContextProviderProps = {
  children: React.ReactNode;
};

const data = {
  languagesButtons,
  languagesBadges,
  commandsLanguageButton,
  arrayMethods,
  arrayMethodsStrings,
  arrayCommands,
};

export const DataContext = createContext(data);

export const DataContextProvider = ({ children }: dataContextProviderProps) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
