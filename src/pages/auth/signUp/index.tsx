import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.colors.black};
  color: #fff;
`;
export function SignUp() {
  return (
    <div>
      <h1>SignUp</h1>

      <Button>Teste</Button>
    </div>
  );
}
