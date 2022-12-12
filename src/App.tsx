import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default App;
