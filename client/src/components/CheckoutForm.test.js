import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />)

  const header = screen.getByRole(/heading/i)

  expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />)

  const fName = screen.getByLabelText(/first name/i)
  const lName = screen.getByLabelText(/last name/i)
  const address = screen.getByLabelText(/address/i)
  const city = screen.getByLabelText(/city/i)
  const state = screen.getByLabelText(/state/i)
  const zip = screen.getByLabelText(/zip/i)
  const submit = screen.getByRole('button')

  fireEvent.change(fName, {target: {value: 'Dustin'}})
  fireEvent.change(lName, {target: {value: 'Myers'}})
  fireEvent.change(address, {target: {value: '500 Ezy St'}})
  fireEvent.change(city, {target: {value: 'New York'}})
  fireEvent.change(state, {target: {value: 'NY'}})
  fireEvent.change(zip, {target: {value: '12345'}})
  fireEvent.click(submit)

  const successMessage = screen.getByTestId(/successMessage/i)

  expect(successMessage).toBeTruthy()
});
