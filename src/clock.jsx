const App = () => {
  return (
    <Template>
      <Clock />
      
      <Counter />

      <ScrollLengthLogger />
    </Template>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

