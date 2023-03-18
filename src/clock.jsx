const App = () => {
  return (
    <Template>
      <ScrollLengthLogger />
      
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

