import { MoneyComponent } from "./MoneyComponent";
import "./EMIComponent.css";
import BreakDown from "./BreakDown";
import { Divider } from "./StyledComponents";

export const EMIComponent = (props) => {
  const breakDown = [
    {
      title: "Tenure",
      value: "9 months",
    },
    {
      title: "Interest",
      value: <MoneyComponent amount={{ currency: "USD", value: 150 }} />,
    },
    {
      title: "Total amount payable",
      value: <MoneyComponent amount={{ currency: "USD", value: 10150 }} />,
    },
  ];

  const headerComponent = [
    {
      header: {
        title: (
          <span>
            <MoneyComponent amount={{ currency: "USD", value: 3339 }} /> for 3
            months @1% p.a
          </span>
        ),
        value: (
          <input
            type="radio"
            name="emi"
            onChange={() => props.handleSelected()}
          />
        ),
      },
      children: [
        {
          title: "Tenure",
          value: "9 months",
        },
        {
          title: "Interest",
          value: <MoneyComponent amount={{ currency: "USD", value: 150 }} />,
        },
        {
          title: "Total amount payable",
          value: <MoneyComponent amount={{ currency: "USD", value: 10150 }} />,
        },
      ],
    },
  ];

  return (
    <div
      className={`emiComponent ${
        props.isSelected ? "emiComponentSelected" : ""
      }`}>
      {headerComponent.map((e, index) => (
        <div key={index}>
          <div style={{ padding: "6px" }}>
            <BreakDown isRadio={props.isRadio || false} summary={[e.header]} />
          </div>
          {props.isSelected && (
            <>
              {" "}
              <Divider />
              <div style={{ padding: "6px" }}>
                <BreakDown summary={e.children} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
