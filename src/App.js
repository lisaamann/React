import logo from './logo.svg';
import './App.css';
import SuperButton from './components/SuperButton';
import ButtonRow from './components/ButtonRow';

function App() {
  return (
    <div className="App">
      <h1>Hello Lisa, this is a site build on React - that tiny, cruel Bitch</h1>
      <SuperButton/>
      <ButtonRow/>
      <ButtonRow/>
      <ButtonRow/>
    </div>
  );
}

export default App;
