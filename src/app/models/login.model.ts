export interface ILoginViewModel {
  cpf: string;
  setCpf: (cpf: string) => void;
  onSubmit: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}