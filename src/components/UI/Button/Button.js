import styled from "styled-components";

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #ffcdb2;
  border-radius: 20px;
  color: #ffcdb2;
  background: #b5838d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  transition-duration: 0.7ms;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ffcdb2;
    border-color: #ffcdb2;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
    color: #b5838d;
  }
`;

//const Button = props => {
//  return (
//    <button type={props.type} className="button" onClick={props.onClick}>
//      {props.children}
//    </button>
//  );
// };

export default Button;
