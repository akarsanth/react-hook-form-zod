"use client";
import JsonView from "@uiw/react-json-view";
import { darkTheme } from "@uiw/react-json-view/dark";
import { gruvboxTheme } from "@uiw/react-json-view/gruvbox";
import { useTheme } from "next-themes";

interface Props {
  output: object;
}

const style: React.CSSProperties = {
  padding: "1rem 0.8rem",
  overflowX: "scroll",
};

const OutputContent = ({ output }: Props) => {
  console.log(output);
  const { theme } = useTheme();

  if (theme === "light") {
    return <JsonView value={output} style={{ ...gruvboxTheme, ...style }} />;
  }
  return <JsonView value={output} style={{ ...darkTheme, ...style }} />;
};

export default OutputContent;
