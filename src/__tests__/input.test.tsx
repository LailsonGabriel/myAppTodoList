import { fireEvent, render } from "@testing-library/react-native";
import Input from "../app/components/input";
import { TextMatch, TextMatchOptions } from "@testing-library/react-native/build/matches";
import { GetByQuery } from "@testing-library/react-native/build/queries/make-queries";
import { CommonQueryOptions } from "@testing-library/react-native/build/queries/options";

describe("Input", () => {
  let setCpf: jest.Mock<any, any, any> | ((value: string) => void) | undefined;
  let cpf;
  let getByPlaceholderText: GetByQuery<TextMatch, CommonQueryOptions & TextMatchOptions> | ((arg0: string) => any);

  beforeEach(() => {
    setCpf = jest.fn(); // mock da função setCpf
    cpf = ''; // valor inicial de cpf

    const utils = render(
      <Input
        iconName="account-arrow-right"
        label={"CPF"}
        type={"number-pad"}
        placeholder="000.000.000-00"
        limit={14}
        value={cpf}
        onChangeText={setCpf}
      />
    );

    getByPlaceholderText = utils.getByPlaceholderText;
  });

  test("should update CPF value on input change", () => {
    const inputElement = getByPlaceholderText("000.000.000-00");

    // Simula a digitação de um valor no input
    fireEvent.changeText(inputElement, "123.456.789-00");

    // Verifica se a função setCpf foi chamada com o valor correto
    expect(setCpf).toHaveBeenCalledWith("123.456.789-00");
  });

  test("should render the CPF input with the correct placeholder", () => {
    const inputElement = getByPlaceholderText("000.000.000-00");
    expect(inputElement).toBeTruthy();
  });
});
