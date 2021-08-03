import './App.css';
import ReactPage from './react-page/react-page';
import Header from './react-page/header';
import Body from './react-page/title/body';

function App() {
  return (
    <div className="App">
      <ReactPage></ReactPage>
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
