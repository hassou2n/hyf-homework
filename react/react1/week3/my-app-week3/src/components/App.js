import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <TodoList fetchUrl="https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw" />
    </div>
  );
}

export default App;