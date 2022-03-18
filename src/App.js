import styled from "styled-components";
import PaginatedList from "./Components/PaginatedList";

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center,
  marginTop: 2rem,
  > * {
    margin-right: 0.8rem;
  }
`;

const Header = styled.header`
  padding: 2rem 0 2rem 2rem;
  background: var(--color-primary);
  color: white;
`;

const Title = styled.h2`
  margin: 0;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <Title>Paginated List in React with SWR</Title>
      </Header>
      <main>
        <PaginatedList />
      </main>
    </Container>
  );
};

export default App;
