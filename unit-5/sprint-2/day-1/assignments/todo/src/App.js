import { Todo } from './components/Todo';
import './App.css';
import Pagination from '@material-ui/lab/Pagination';

function App() {
  return (
    <div className="App">
     <Todo />
     < Pagination count={5}/>
    </div>
  );
}

export default App;

