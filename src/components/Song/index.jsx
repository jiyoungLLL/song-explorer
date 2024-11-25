import styled from 'styled-components';

function Song() {
  const songList = [
    {
      brand: 'kumyoung',
      no: '82776',
      title: '사랑, 사랑',
      singer: 'Kid Wine         ',
      composer: 'Kid Wine,PATEKO..',
      lyricist: 'Kid Wine         ',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82775',
      title: '묘해, 너와',
      singer: '태일(NCT)',
      composer: '심현보   ',
      lyricist: '심현보   ',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82774',
      title: '멈춰 줘 (드라마"눈물의 여왕")',
      singer: '헤이즈       ',
      composer: '남혜승,박진호',
      lyricist: '남혜승,박진호',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82773',
      title: '꽃이 피는 데 필요한 몇 가지',
      singer: 'NuNew,폴킴       ',
      composer: 'Acharya Dulyapa..',
      lyricist: '폴킴             ',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82765',
      title: '수성의 하루',
      singer: '쏜애플(Thornapple)',
      composer: '윤성현,심재현,방..',
      lyricist: '윤성현            ',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82764',
      title: "라망 (L'amant)",
      singer: '아이유',
      composer: '정재형',
      lyricist: '정재형',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82763',
      title: '고장 난 걸까 (드라마"눈물의 여왕")',
      singer: '10cm         ',
      composer: '남혜승,김경희',
      lyricist: '남혜승,김경희',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82753',
      title: '사랑, 결코 시들지 않는',
      singer: '최영관(신바람 최박..',
      composer: '박세준              ',
      lyricist: '이영준              ',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82752',
      title: '비상',
      singer: '이승기       ',
      composer: '최준영,임재범',
      lyricist: '채정은       ',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82751',
      title: '봄이 와도',
      singer: '로이킴',
      composer: '로이킴',
      lyricist: '로이킴',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82750',
      title: '별',
      singer: 'CRAVITY           ',
      composer: '별들의전쟁1,별들..',
      lyricist: '별들의전쟁1,별들..',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82749',
      title: '너 없는 시간 (Feat.if.iwere(입하월))',
      singer: '안재우           ',
      composer: '안재우,if.iwere..',
      lyricist: '안재우,if.iwere..',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82748',
      title: '공짜',
      singer: '박지현     ',
      composer: '김동찬     ',
      lyricist: '강옥원,정서',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82747',
      title: '겨울 장미',
      singer: '정서주',
      composer: '유승엽',
      lyricist: '유승엽',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82743',
      title: '10X',
      singer: '샤이니            ',
      composer: 'Andreas Gustav E..',
      lyricist: '이형석,Andreas G..',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82740',
      title: '속는 셈 치고 다시 만나자',
      singer: '케이시            ',
      composer: '조영수,한길       ',
      lyricist: '케이시,조영수,한..',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82739',
      title: '사랑시 고백구 행복동',
      singer: '최수호',
      composer: '오성훈',
      lyricist: '오성훈',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82738',
      title: '병원에선 괜찮다고 해',
      singer: '지아          ',
      composer: '최갑원,공희   ',
      lyricist: '최갑원,미라클2',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82737',
      title: '둘이',
      singer: '최유리',
      composer: '최유리',
      lyricist: '최유리',
      release: '2024-05-01',
    },
    {
      brand: 'kumyoung',
      no: '82736',
      title: '내게 기대 (드라마"닥터슬럼프")',
      singer: '박형식           ',
      composer: '김재원,심규태,J..',
      lyricist: '김재원,심규태,J..',
      release: '2024-05-01',
    },
  ];

  return (
    <>
      {songList.map((item, index) => {
        return (
          <SongContainer key={index}>
            <Details>
              <SongName>{item.title}</SongName>
              <Singer>{item.singer}</Singer>
            </Details>
            <SongNumber>{item.no}</SongNumber>
          </SongContainer>
        );
      })}
    </>
  );
}

export default Song;

const SongContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  border-radius: 15px;
  border: 0.5px grey solid;
  padding: 15px 30px;
  margin-bottom: 20px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const SongName = styled.div`
  font-weight: 700;
`;

const Singer = styled.div``;

const SongNumber = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 38px;
`;
