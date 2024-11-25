import SearchBar from '../../components/SearchBar';
import SongList from '../../components/SongList'; // 디렉토리 내에서 index.jsx라고 정의했기 때문
// .jsx 확장자를 생각하는 이유는 번들러 때문
import { Link, useNavigate } from 'react-router';

function SearchPage() {
  let navigate = useNavigate();
  return (
    <div>
      {/* 의존성 문제 해결 */}
      <Link to='/liked'>Liked</Link>
      <button
        onClick={() => {
          navigate('/liked');
        }}
      />
      <SearchBar />
      <SongList />
    </div>
  );
}

export default SearchPage;
