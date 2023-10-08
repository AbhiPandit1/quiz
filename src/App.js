import Quiz from './component/Quiz';
import { Question } from './question/Question';

function App() {
  return (
    <div className="App">
      <Quiz questions={Question.questions} />
    </div>
  );
}

export default App;
