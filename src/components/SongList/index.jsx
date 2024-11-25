import { useQuery } from '@tanstack/react-query';
import Song from '../Song';

// eslint-disable-next-line react/prop-types
function SongList({ searchText }) {
  // 처음엔 data가 undefined -> 리렌더링 일어나면서 가져옴
  const { data, isLoading } = useQuery({
    queryKey: ['getSong', searchText], // 새로 받은 건지 알기 위해 searchText 추가
    // 내가 뽑아내고 싶은 것을 return 하는 promise 형태로 return
    queryFn: () => {
      return fetch(
        searchText
          ? `https://api.manana.kr/karaoke/song/${searchText}.json`
          : 'https://api.manana.kr/karaoke.json'
      ).then((res) => {
        return res.json();
      });
    },
  });

  if (isLoading) {
    return 'Loading...';
  }

  if (!data) {
    return 'No data';
  }

  return (
    <div>
      {data.map((item) => {
        return (
          <Song
            key={item.brand + item.no}
            title={item.title}
            singer={item.singer}
            number={item.no}
          />
        );
      })}
    </div>
  );
}

export default SongList;
