import React from "react";
import { Divider } from "./StyledComponents";
import Summary from "./Summary";

const BreakDown = (props) => {
  return (
    <>
      {props.summary.map((e, i) => {
        return (
          <div key={i} style={{ fontSize: "14px", fontWeight: "normal" }}>
            <Summary isRadio={props.isRadio} title={e.title} value={e.value} />
            {props.divider && props.summary.length - 1 === i && <Divider />}
          </div>
        );
      })}
    </>
  );
};

export default BreakDown;
