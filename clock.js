var App = function App() {
  return React.createElement(
    Template,
    null,
    React.createElement(Clock, { secondsShift: 0 })
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));