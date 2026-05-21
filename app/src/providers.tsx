import { createContext } from "react";

export interface DefinitionsContextType {
  keycodes: any;
  behaviours: any;
  rawDefinitions?: any;
}

export const DefinitionsContext = createContext<DefinitionsContextType>({
  keycodes: { indexed: {} },
  behaviours: { indexed: {} },
  rawDefinitions: null
});

export interface SearchContextType {
  getSearchTargets: (param: any, behaviour: string) => any[];
  sources: any;
  layoutType?: string;
}

export const SearchContext = createContext<SearchContextType>({
  getSearchTargets: () => [],
  sources: {}
});
