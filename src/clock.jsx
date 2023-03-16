const App = () => {
  return (
    <Template>
      <Clock secondsShift={0}/>
      <Clock secondsShift={10}/>
      <Counter />
    </Template>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

