import TodoList from './TodoList';


function App() {
  return (
    <div className="App">
      <h1>List to do week3</h1>
      <TodoList fetchUrl="https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw" />
    </div>
  );
}

export default App;