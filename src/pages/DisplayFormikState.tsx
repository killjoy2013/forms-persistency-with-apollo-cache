import * as React from "react";

const DisplayFormikState = (formikProps: any) => (
  <div style={{ margin: "1rem 0" }}>
    <h3 style={{ fontFamily: "monospace" }} />
    <pre
      style={{
        background: "#f6f8fa",
        fontSize: ".65rem",
        padding: ".5rem"
      }}
    >
      <strong>props</strong> = {JSON.stringify(formikProps, null, 2)}
    </pre>
  </div>
);

export default DisplayFormikState;
