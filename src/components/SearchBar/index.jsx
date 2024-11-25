import styled from 'styled-components';

function SearchBar() {
  return (
    <div>
      <Search />
      <SearchButton>검색</SearchButton>
    </div>
  );
}

export default SearchBar;

const Search = styled.input`
  position: relative;
  width: 460px;
  height: 40px;
  margin: 20px 0;
  border-radius: 15px;
  border: 0.5px grey solid;
`;

const SearchButton = styled.button`
  position: relative;
  z-index: 100;
  left: -50px;
  width: 50px;
  height: 43.8px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 0.5px grey solid;
`;
