import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styled from 'styled-components';
import SearchPage from './pages/SearchPage';

const queryClient = new QueryClient(); // 사용할 객체

function App() {
  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        {/* 내부에서 React-query 사용 가능 */}
        <SearchPage />
      </QueryClientProvider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
