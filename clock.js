var App = function App() {
  return React.createElement(
    Template,
    null,
    React.createElement(Clock, null),
    React.createElement(Counter, null)
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));