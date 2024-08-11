import { render, fireEvent } from "@testing-library/react-native";
import Button from "../app/components/button";
import { TextMatch, TextMatchOptions } from "@testing-library/react-native/build/matches";
import { GetByQuery } from "@testing-library/react-native/build/queries/make-queries";
import { CommonQueryOptions } from "@testing-library/react-native/build/queries/options";

describe("Button", () => {
  let onPress: jest.Mock<any, any, any>;
  let title: string;
  let disabled: boolean;
  let loading: boolean;
  let getByText: GetByQuery<TextMatch, CommonQueryOptions & TextMatchOptions> | ((arg0: string) => any);
  let getByTestId: GetByQuery<TextMatch, CommonQueryOptions & TextMatchOptions> | ((arg0: string) => any);

  beforeEach(() => {
    onPress = jest.fn();
    title = "Meu botão";
    disabled = false;
    loading = false;

    const utils = render(
      <Button
        title={title}
        onPress={onPress}
        disabled={disabled}
        loading={loading}
      />
    );

    getByText = utils.getByText;
    getByTestId = utils.getByTestId;
  });

  test("should render the button with the correct title", () => {
    const buttonElement = getByText(title);
    expect(buttonElement).toBeTruthy();
  });

  test("should call onPress when the button is pressed", () => {
    const buttonElement = getByText(title);
    fireEvent.press(buttonElement);
    expect(onPress).toHaveBeenCalled();
  });

  test("should not call onPress when the button is disabled", () => {
    disabled = true;

    const { getByText } = render(
      <Button
        title={title}
        onPress={onPress}
        disabled={disabled}
        loading={loading}
      />
    );

    const buttonElement = getByText(title);
    fireEvent.press(buttonElement);
    expect(onPress).not.toHaveBeenCalled();
  });

  test("should show loading spinner when loading is true", () => {
    loading = true;

    const { getByTestId } = render(
      <Button
        title={title}
        onPress={onPress}
        disabled={disabled}
        loading={loading}
      />
    );

    const loadingElement = getByTestId("loading-spinner");
    expect(loadingElement).toBeTruthy();
  });
});
