import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
function Song({ title, singer, number }) {
  return (
    <SongContainer>
      <Details>
        <Title>{title}</Title>
        <Singer>{singer}</Singer>
      </Details>
      <SongNumber>{number}</SongNumber>
    </SongContainer>
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

const Title = styled.div`
  font-weight: 700;
`;

const Singer = styled.div``;

const SongNumber = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 38px;
`;
