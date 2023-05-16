import styled from "styled-components";

export const ButtonGreen = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #27ae60;
  border: 2px solid #27ae60;
  color: #ffffff;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  height: ${(props) => (props.height ? props.height : 60)}px;
  border-radius: 8px;
  padding: 0px 20px;
  width: ${(props) => (props.width ? props.width : "auto")}px;

  &:hover {
    background-color: #93d7af;
    border-color: #93d7af;
  }
`;

export const ButtonGray = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #e0e0e0;
  border: 2px solid #e0e0e0;
  color: #828282;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  padding: 0px 20px;
  height: ${(props) => (props.height ? props.height : 60)}px;
  border-radius: 8px;
  width: ${(props) => (props.width ? props.width : "auto")}%;

  &:hover {
    background-color: #828282;
    border-color: #828282;
    color: #e0e0e0;
  }
`;

export const ButtonInput = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #e0e0e0;
  border: 2px solid #e0e0e0;
  color: #333333;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  padding: 0px 20px;
  height: 40px;
  border-radius: 8px;
  width: ${(props) => (props.width ? props.width : "auto")}px;
`;
