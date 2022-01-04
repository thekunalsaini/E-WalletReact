import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import AddMoney from "./AddMoney";
import { render, screen } from '@testing-library/react';
//import DetailServices from "../services/DetailServices";
//jest.mock("../services/DetailServices");

it("should render contact information", () => {
  
    render(
      <AddMoney
      />
    );
  

  expect(
    screen.queryAllByTestId("[data-testid='add']").innerText
  ).toBeInTheDocument

});