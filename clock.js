var App = function App() {
  return React.createElement(
    Template,
    null,
    React.createElement(Clock, { secondsShift: 0 }),
    React.createElement(Clock, { secondsShift: 10 }),
    React.createElement(Counter, null)
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));