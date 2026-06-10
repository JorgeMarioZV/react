function App() {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello World</h1>
    <h2>The time now is {currDate.toLocaleDateString()}, {currDate.toLocaleTimeString()}.</h2>
    <p><b>Author:</b>Jorge Mario</p>
    </div>
  );
}

export default App;