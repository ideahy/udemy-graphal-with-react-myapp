const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
console.log({ GITHUB_TOKEN });
console.log(process.env);

function App() {
  return <div className="App">hello, GraphQL</div>;
}

export default App;
