import React from "react";
import { CustomButton } from "./custom-btn.styles";

const CustomBtn = ({ children, ...props }) => {
  return <CustomButton {...props}>{children}</CustomButton>;
};

export default CustomBtn;
