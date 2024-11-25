import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import LikedPage from './pages/LikedPage';
import SearchPage from './pages/SearchPage';

const queryClient = new QueryClient(); // 사용할 객체

function App() {
  return (
    <BrowserRouter>
      <Container>
        <QueryClientProvider client={queryClient}>
          {/* 내부에서 React-query 사용 가능 */}
          {/* <SearchPage /> */}
          <Routes>
            <Route path='/' element={<SearchPage />} />
            <Route path='/liked' element={<LikedPage />} />
          </Routes>
        </QueryClientProvider>
      </Container>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
