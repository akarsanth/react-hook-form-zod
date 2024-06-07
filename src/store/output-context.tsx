"use client";
import React, { createContext, useState } from "react";

interface OutputContextProps {
  showOutput: boolean;
  setShowOutput: (showOutput: boolean) => void;
  output: object;
  setOutput: (output: object) => void;
}

export const OutputContext = createContext<OutputContextProps>({
  showOutput: false,
  setShowOutput: () => {},
  output: {},
  setOutput: () => {},
});

export const OutputProvider = ({ children }: { children: React.ReactNode }) => {
  const [showOutput, setShowOutput] = useState<boolean>(false);
  const [output, setOutput] = useState<object>({});

  const handleSetOutput = (newOutput: object) => {
    setOutput(newOutput);
    setShowOutput(true); // Show output after setting it
  };

  const contextValue: OutputContextProps = {
    showOutput,
    setShowOutput,
    output,
    setOutput: handleSetOutput,
  };

  return (
    <OutputContext.Provider value={contextValue}>
      {children}
    </OutputContext.Provider>
  );
};

export default OutputProvider;
