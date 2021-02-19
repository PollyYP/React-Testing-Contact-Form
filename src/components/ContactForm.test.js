import React from "react";
import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
import userEvent from "@testing-library/user-event";

test("renders the component app without errors", () => {
  render(<ContactForm />);
});

test("when a user fills out and submit the form, a new user information created and displayed", () => {
  //   Arrange - render the component and get access to the form elements in the DOM
  render(<ContactForm />);
  const firstNameInput = screen.getByTestId("firstNameInput");
  const lastNameInput = screen.getByTestId("lastNameInput");
  const emailInput = screen.getByTestId("emailInput");
  const messageInput = screen.getByTestId("messageInput");
  const submitButton = screen.getByRole("button", { name: /submit/i });

  //   Act - type into the form, filling out all fields of the form, then submit
  userEvent.type(firstNameInput, "Ann");
  userEvent.type(lastNameInput, "Brownie");
  userEvent.type(emailInput, "abcde@gmail.com");
  userEvent.type(messageInput, "Looking forward to meeting everyone!");
  userEvent.click(submitButton);

  //   Assert - make sure that the new user information we created is displayed in the list

  expect(firstNameInput).toBeInTheDocument("Ann");
  expect(lastNameInput).toBeInTheDocument("Brownie");
  expect(emailInput).toBeInTheDocument("abcde@gmail.com");
  expect(messageInput).toBeInTheDocument(
    "Looking forward to meeting everyone!"
  );
});
