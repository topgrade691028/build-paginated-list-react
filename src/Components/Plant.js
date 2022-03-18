import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 3px solid var(--color-secondary);
  border-radius: 15px;
  padding: 0.6rem;
  margin-top: 2rem;
  > * {
    margin-right: 0.8rem;
  }
`;

const Key = styled.label``;

const Value = styled.label`
  margin-left: 0.5rem;
  font-weight: 700;
`;

const Plant = ({ plant }) => {
  return (
    <Container>
      {Object.entries(plant).map(([key, value]) => {
        return (
          <div>
            <Key>{`${key} :`}</Key>
            <Value>{`${value}`}</Value>
          </div>
        );
      })}
    </Container>
  );
};

export default Plant;
