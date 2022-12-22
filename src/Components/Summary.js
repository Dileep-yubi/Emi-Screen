import React from "react";
import { FlexDiv } from "./StyledComponents";

const Summary = (props) => {
  return (
    <FlexDiv
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <span>{props.title}</span>
      <span>{props.value}</span>
    </FlexDiv>
  );
};

export default Summary;
