"use client";
import JsonView from "@uiw/react-json-view";
import { darkTheme } from "@uiw/react-json-view/dark";
import { gruvboxTheme } from "@uiw/react-json-view/gruvbox";
import { useTheme } from "next-themes";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Props {
  output: object;
}

const style: React.CSSProperties = {
  padding: "1.5rem 0.8rem",
};

const OutputContent = ({ output }: Props) => {
  console.log(output);
  const { theme } = useTheme();

  return (
    <ScrollArea className="max-h-80 overflow-auto">
      {theme === "light" ? (
        <>
          <JsonView value={output} style={{ ...gruvboxTheme, ...style }} />
        </>
      ) : (
        <JsonView value={output} style={{ ...darkTheme, ...style }} />
      )}

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default OutputContent;
