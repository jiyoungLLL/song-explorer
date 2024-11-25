import { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import SongList from '../../components/SongList'; // 디렉토리 내에서 index.jsx라고 정의했기 때문
// .jsx 확장자를 생각하는 이유는 번들러 때문

function SearchPage() {
  const [searchText, setSearchText] = useState('bk');

  return (
    <div>
      {/* 의존성 문제 해결 */}
      <SearchBar
        onSearch={(value) => {
          setSearchText(value);
        }}
      />
      <SongList searchText={searchText} />
    </div>
  );
}

export default SearchPage;
