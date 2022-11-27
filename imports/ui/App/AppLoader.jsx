// Dependancies :
import React from 'react';
import { ProviderWrapper as LanguageProviderWrapper } from "../contexts/ActualUserContext";
// Components : 
import { App } from "./App";

export const AppLoader = () => {
  return (
       <LanguageProviderWrapper>
          <App />
      </LanguageProviderWrapper>  
  );
};
