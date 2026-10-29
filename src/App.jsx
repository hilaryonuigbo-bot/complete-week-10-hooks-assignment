
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ProfileCard from './components/ProfileCard';
import SearchBox from './components/SearchBox';
import './index.css';

function App() {
  return (
    <main className="app">
      <h1>React Hooks Assignment</h1>

      <Counter />
      <TodoList />
      <ProfileCard />
      <SearchBox />
    </main>
  );
}

export default App;