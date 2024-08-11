import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Task from "../app/components/task";
import { useGlobalContext } from "../app/context/GlobalContext";

jest.mock('../app/context/GlobalContext'); // Mock do contexto global

describe("Task Component", () => {
  const mockToggleTaskChecked = jest.fn();
  const mockDeleteTask = jest.fn();
  
  beforeEach(() => {
    (useGlobalContext as jest.Mock).mockReturnValue({
      tasks: [
        { id: 1, title: 'Test Task 1', checked: false },
        { id: 2, title: 'Test Task 2', checked: true },
      ],
      toggleTaskChecked: mockToggleTaskChecked,
      deleteTask: mockDeleteTask,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders task with correct title", () => {
    const { getByText } = render(<Task title="Test Task 1" id={1} checked={false} />);
    expect(getByText("Test Task 1")).toBeTruthy();
  });

  test("calls toggleTaskChecked when checkbox is pressed", () => {
    const { getByTestId } = render(<Task title="Test Task 1" id={1} checked={false} />);
    const checkboxButton = getByTestId("checkbox-button");

    fireEvent.press(checkboxButton);
    expect(mockToggleTaskChecked).toHaveBeenCalledWith(1);
  });

  test("calls deleteTask when delete button is pressed", () => {
    const { getByTestId } = render(<Task title="Test Task 1" id={1} />);
    const deleteButton = getByTestId("delete-button");

    fireEvent.press(deleteButton);
    expect(mockDeleteTask).toHaveBeenCalledWith(1);
  });
});
