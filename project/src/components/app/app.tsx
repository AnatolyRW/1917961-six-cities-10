import Main from '../../pages/main/main';
import MainPageProps from '../../types/main-page-props';

function App({placeCount} : MainPageProps): JSX.Element {
  return(
    <Main placeCount={placeCount}/>
  );
}

export default App;
