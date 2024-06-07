import React from "react";
// import the react-json-view component
import ReactJson from "react-json-view";

interface Props {
  output: object;
}

const OutputContent = ({ output }: Props) => {
  return (
    <ReactJson
      src={output}
      name={null}
      theme="monokai"
      displayDataTypes={false}
      style={{ padding: "1rem" }}
    />
  );
};

export default OutputContent;
