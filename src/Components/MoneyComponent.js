import React from "react";
import { FormattedNumber } from "react-intl";

export const MoneyComponent = ({ amount }) => {
  if (!amount.currency || amount.value == null) {
    return <></>;
  }
  return (
    <>
      {amount.currency} {"  "}
      <FormattedNumber value={amount.value} />
    </>
  );
};
