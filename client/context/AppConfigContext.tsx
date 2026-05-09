"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

const AppConfigContext =
  createContext<any>(null);

export const AppConfigProvider =
  ({
    children,
  }: {
    children: React.ReactNode;
  }) => {

    const [config, setConfig] =
      useState(null);

    return (
      <AppConfigContext.Provider
        value={{
          config,
          setConfig,
        }}
      >
        {children}
      </AppConfigContext.Provider>
    );
  };

export const useAppConfig =
  () =>
    useContext(
      AppConfigContext
    );