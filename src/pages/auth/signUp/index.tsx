import styled from "styled-components";

const Input = styled.input`
  background: transparent;
  color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 200px;
  padding: ${(props) => props.theme.sizes.sm} ${(props) => props.theme.sizes.xs};

  &::placeholder{
    color: ${(props) => props.theme.colors.white};
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.sizes.sm};
`;

const Label = styled.label`
  font-size: ${(props) => props.theme.sizes.base};
  color: ${(props) => props.theme.colors.white};
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.sizes.xs};
`;

export function SignUp() {
  return (
    <Main>
      <Form>
        <Field>
          <Label>Email</Label>
          <Input type="text" placeholder="teste" />
        </Field>

        <Field>
          <Label>Senha</Label>
          <Input type="text" placeholder="teste" />
        </Field>
      </Form>
    </Main>
  );
}
