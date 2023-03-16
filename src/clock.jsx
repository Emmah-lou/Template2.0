const App = () => {
  return (
    <Template>
      <Clock secondsShift={0}/>
    </Template>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

