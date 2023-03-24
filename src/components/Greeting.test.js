import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("render hello world text", () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const helloWorldElement = screen.getByText("Hello world!!");
    expect(helloWorldElement).toBeInTheDocument();
  });


  test("render text test this is text description!!!",() => {
    render(<Greeting />);

    const paragrahpElement = screen.getByText("this is text description!!!");
    expect(paragrahpElement).toBeInTheDocument();
  });

  test("render text test: change text", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("change text");
    expect(outputElement).toBeInTheDocument();
  });

  test('render this is text description!!! not on click', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("this is text description!!!");
    expect(outputElement).toBeNull();
  });
});
