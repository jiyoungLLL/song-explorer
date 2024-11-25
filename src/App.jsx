import styled from 'styled-components';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <AppContainer>
      <SearchPage />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
