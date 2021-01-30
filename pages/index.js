import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import {useRouter} from 'next/router'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('Retorno do useState', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>CSS</h1>
            </Widget.Header>  

            <Widget.Content>
              <form onSubmit={function(e){
                e.preventDefault();
                console.log("Testeeeeeeeee");

                router.push(`/quiz?name=${name}`);
              }}>
                <input onChange={function(e){
                  console.log(e.target.value);

                  setName(e.target.value);
                }} placeholder="Diz aí seu nome"/>  
                <button type="submit" disabled={name.length === 0}>
                  Jogar {name}
                </button>
              </form>
            </Widget.Content>
          </Widget>
            
          <Widget>
            <Widget.Content>
              <h1>Quizes da galera</h1>

              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
        </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/bObByGeNneRiCus" />
    </QuizBackground>    
  );
}
