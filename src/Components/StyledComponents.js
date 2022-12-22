import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 18px;
  text-align: center;
  margin: 0px;
  font-weight: 600;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid #d6d3d3;
`;

export const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: ${(props) => props.alignItems || "center"};
  gap: 5px;
  line-height: 26px;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: #fff;
`;

export const StyledButton = styled.button`
  font-size: 16px;
  padding: 12px 40px;
  border: 1px solid ${(props) => (props.disabled ? "white" : "#633ea5")};
  border-radius: 12px;
  color: ${(props) => (props.disabled ? "black" : "#633ea5")};
  color: ${(props) =>
    props.primary ? (props.disabled ? "#7f7c7c" : "white") : "#633ea5"};
  background: ${(props) =>
    props.primary ? (props.disabled ? "#efefef" : "#633ea5") : "#fff"};
  :hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "")};
  }
`;
