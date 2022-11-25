import React from 'react';
import { ProviderWrapper as LanguageProviderWrapper } from "../contexts/ActualUserContext";
import { App } from "./App";

export const AppLoader = () => {
  return (
       <LanguageProviderWrapper>
          <App />
      </LanguageProviderWrapper>  
  );
};
