import { useRef } from 'react';
import styled from 'styled-components';
import { useSearchTextStore } from '../../stores/useSearchTextStore';

function SearchBar() {
  const { setSearchText } = useSearchTextStore();

  // 특정 DOM 요소에 대해 컨트롤할 때 사용하는 Hook
  // 값이 변경되어도 리렌더링 되지 않음 (!= useState())
  // -> 검색 버튼을 눌러야만 리렌더링!!!
  const inputRef = useRef();

  return (
    <div>
      <Search ref={inputRef} />
      <SearchButton
        onClick={() => {
          setSearchText(inputRef.current.value);
        }}
      >
        검색
      </SearchButton>
    </div>
  );
}

export default SearchBar;

const Search = styled.input`
  position: relative;
  width: 360px;
  height: 40px;
  margin: 20px 0;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border: 0.5px grey solid;
  padding: 0 20px;
`;

const SearchButton = styled.button`
  width: 60px;
  height: 41.5px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 0.5px grey solid;
  border-left: none;
`;
