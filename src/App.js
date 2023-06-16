
import './App.css';
import "./Head.css";
import Body from './components/Body';
import Boxs from './components/Boxs';
import Category from './components/Category';
import Header from './components/Header';
import QuizBox from './components/QuizBox';
import RequestBox from './components/RequestBox';
import SecondBody from './components/SecondBody';

function App() {
  return (
    <div>
      <Header/>
      <Body/>
      <Category/>
      <SecondBody/>
      <Boxs/>
      <QuizBox/>
      <RequestBox/>
    </div>
  );
}

export default App;
