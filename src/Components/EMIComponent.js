import BreakDown from "./BreakDown";
import { Divider } from "./StyledComponents";
import "./EMIComponent.css";

export const EMIComponent = (props) => {
  const { isSelected, element } = props;
  return (
    <div className={`emiComponent ${isSelected ? "emiComponentSelected" : ""}`}>
      <div>
        <div style={{ padding: "6px" }}>
          <BreakDown
            isRadio={props.isRadio || false}
            summary={[element.header]}
          />
        </div>
        {isSelected && (
          <>
            {" "}
            <Divider />
            <div style={{ padding: "6px" }}>
              <BreakDown
                isRadio={props.isRadio || false}
                summary={element.children}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
