import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transfrom: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid gold;
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  cursor: pointer;
  &:hover {
    background: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
