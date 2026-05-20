import { createContext } from "react";

export interface DefinitionsContextType {
  keycodes: any;
  behaviours: any;
}

export const DefinitionsContext = createContext<DefinitionsContextType>({
  keycodes: { indexed: {} },
  behaviours: { indexed: {} }
});

export interface SearchContextType {
  getSearchTargets: (param: any, behaviour: string) => any[];
  sources: any;
}

export const SearchContext = createContext<SearchContextType>({
  getSearchTargets: () => [],
  sources: {}
});
