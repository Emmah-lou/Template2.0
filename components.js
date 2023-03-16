var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Template = function Template(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, null),
    React.createElement(
      "div",
      { className: "container py-4" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-12 col-md-9" },
          props.children
        ),
        React.createElement(Sidebar, null)
      )
    ),
    React.createElement(Footer, null)
  );
};

var Navbar = function Navbar() {
  return React.createElement(
    "nav",
    { className: "navbar navbar-expand navbar-light bg-light" },
    React.createElement(
      "a",
      { className: "navbar-brand", href: "index.html" },
      "Navbar"
    ),
    React.createElement(
      "div",
      { className: "collapse navbar-collapse", id: "navbarNav" },
      React.createElement(
        "ul",
        { className: "navbar-nav" },
        React.createElement(
          "li",
          { className: "nav-item" },
          React.createElement(
            "a",
            { className: "nav-link", href: "index.html" },
            "Home"
          )
        ),
        React.createElement(
          "li",
          { className: "nav-item" },
          React.createElement(
            "a",
            { className: "nav-link", href: "press.html" },
            "Press"
          )
        ),
        React.createElement(
          "li",
          { className: "nav-item" },
          React.createElement(
            "a",
            { className: "nav-link", href: "clock.html" },
            "Current time"
          )
        )
      )
    )
  );
};

var Sidebar = function Sidebar() {
  return React.createElement(
    "div",
    { className: "d-none d-md-block col-md-3" },
    React.createElement(
      "div",
      { className: "border border-primary py-4 px-3" },
      "Sidebar"
    )
  );
};

var Footer = function Footer() {
  return React.createElement(
    "div",
    { className: "border-top p-2" },
    "Template Demo \xA9 2019"
  );
};

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = {
      count: 0
    };

    return _this;
  }

  _createClass(Counter, [{
    key: "increment",
    value: function increment(amount) {

      this.setState({ count: this.state.count + amount });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          "Count: ",
          this.state.count
        ),
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this2.increment(1);
            } },
          "Increment"
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

var Clock = function (_React$Component2) {
  _inherits(Clock, _React$Component2);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this3 = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this3.state = {
      currentTime: new Date(),
      location: 'Loading...'
    };
    return _this3;
  }

  _createClass(Clock, [{
    key: "getLocation",
    value: function getLocation() {
      var _this4 = this;

      navigator.geolocation.getCurrentPosition(function (position) {
        var location = position.coords.latitude + ", " + position.coords.longitude;
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        console.log(lat, lon);
        var url = "https://www.google.com/search?q=" + lat + "%2C+" + lon;
        //this.setState( {location: url} );
        var apiCall = "https://us1.locationiq.com/v1/reverse?key=pk.5f6ccf34896284c480a8d6ec083f317c&lat=" + lat + "&lon=" + lon + "&format=json";
        fetch(apiCall).then(function (response) {
          return response.json();
        }).then(function (data) {
          console.log(data);
          _this4.setState({ location: data.display_name });
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this5 = this;

      this.currentClock = setInterval(function () {
        return _this5.updateTime();
      }, 1000);
      this.location = this.getLocation();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.currentClock);
    }
  }, {
    key: "updateTime",
    value: function updateTime() {
      this.setState({ currentTime: new Date() });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          "Hello World! Welcome ",
          this.state.location
        ),
        React.createElement(
          "h2",
          null,
          "Current time ",
          this.state.currentTime.toLocaleTimeString()
        )
      );
    }
  }]);

  return Clock;
}(React.Component);

var ScrollLengthLogger = function (_React$Component3) {
  _inherits(ScrollLengthLogger, _React$Component3);

  function ScrollLengthLogger(props) {
    _classCallCheck(this, ScrollLengthLogger);

    var _this6 = _possibleConstructorReturn(this, (ScrollLengthLogger.__proto__ || Object.getPrototypeOf(ScrollLengthLogger)).call(this, props));

    _this6.state = {
      scrollLength: 0
    };
    _this6.updateScrollLength = _this6.updateScrollLength.bind(_this6);
    return _this6;
  }

  _createClass(ScrollLengthLogger, [{
    key: "updateScrollLength",
    value: function updateScrollLength(e) {
      this.setState({ scrollLength: window.scrollY });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.updateScrollLength);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.updateScrollLength);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          "Scroll Length: ",
          this.state.scrollLength
        )
      );
    }
  }]);

  return ScrollLengthLogger;
}(React.Component);