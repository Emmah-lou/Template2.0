const App = () => {
  return (
    <Template>
      <Clock />
      <StopWatch />
      <Counter />
    </Template>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);