import { Field, Form, Button } from "@/components/ui";

import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export function SignUp() {
  return (
    <Main>
      <Form>
        <Field
          label="Nome"
          placeholder="Digite seu nome"
          type="text"
          id="name"
        />

        <Field
          label="Email"
          placeholder="Digite seu email"
          type="email"
          id="email"
        />

        <Field
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          id="password"
        />

        <Button type="submit">Registrar</Button>
      </Form>
    </Main>
  );
}
