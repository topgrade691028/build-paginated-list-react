import styled from "styled-components";
import sortasc from "../images/sortasc.svg";
import sortdesc from "../images/sortdesc.svg";

const Button = styled.div`
  border-radius: 15px;
  padding: 0.6rem;
  cursor: pointer;
  background-color: var(--color-primary);
  transition: background-color 0.3s;
  &:hover {
    background-color: var(--color-primary-dark);
  }
  &:active {
    background-color: var(--color-primary-light);
  }
`;

const Image = styled.img`
  width: 1.5rem;
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(175deg)
    brightness(121%) contrast(114%);
`;

const SortButton = ({ order, setOrder }) => {
  return (
    <Button
      onClick={() =>
        setOrder((previousOrder) => (previousOrder === "desc" ? "asc" : "desc"))
      }
    >
      <Image src={order === "desc" ? sortdesc : sortasc} alt='sort icon' />
    </Button>
  );
};

export default SortButton;
