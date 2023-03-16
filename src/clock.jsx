const App = () => {
  return (
    <Template>
      <Clock />
      
      <Counter />
    </Template>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

