import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import styled from 'styled-components';

export default function Main() {
  return (
    <MainWrapper className="main">
      <CVForm />
      <CVPreview />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
`;
