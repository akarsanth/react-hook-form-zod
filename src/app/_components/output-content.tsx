"use client";
import dynamic from "next/dynamic";
const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });

interface Props {
  output: object;
}

const OutputContent = ({ output }: Props) => {
  return (
    <DynamicReactJson
      src={output}
      name={null}
      theme="monokai"
      displayDataTypes={false}
      style={{ padding: "1rem" }}
    />
  );
};

export default OutputContent;
