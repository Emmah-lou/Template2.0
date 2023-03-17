// const dotenv = require('dotenv');
// dotenv.config();
// const {mapAPIKey} = process.env.LOCATION_API_TOKEN;

const WEATHER_API_TOKEN = '3b410b8ed8df2c4d8fd392406a80053f';

const Template = (props) => {
  return (
    <div>
      <Navbar />
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-9">
            {props.children}
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  )
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <a className="navbar-brand" href="index.html">Navbar</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="press.html">Press</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="clock.html">Current time</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const Sidebar = () => {
  return (
    <div className="d-none d-md-block col-md-3">
      <div className="border border-primary py-4 px-3">
        Sidebar
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="border-top p-2">
      Template Demo © 2019
    </div>
  )
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    
  }
  increment(amount) {
    
    this.setState( {count: this.state.count + amount} );
  }
  render() { 
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.increment(1)}>Increment</button>
      </div>
    );

  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
      location: 'Loading...',
      weather: 'Loading...',
    };
  }
  
  getInfo() {

    navigator.geolocation.getCurrentPosition((position) => {
      const location = `${position.coords.latitude}, ${position.coords.longitude}`;
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      
      //weather api call adress
      const weatherCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_TOKEN}`;
      
      //call to weather API
      fetch (weatherCall)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.name);
        // change state to display weather and location
        this.setState( {weather: data.weather[0].description} );
        this.setState( {location: data.name} );
      })
      .catch(error => console.log(error));
    });

  } 
  componentDidMount() {
    this.currentClock = setInterval(() => this.updateTime(), 1000);
    this.getInfo();
    
  }
  componentWillUnmount() {
    clearInterval(this.currentClock);
  }
  updateTime() {
    this.setState( {currentTime: new Date()} );
  }
  render() {
    return (
      <div>
        <h2>Hello World! Welcome {this.state.location}</h2>
        <h2>Current time {this.state.currentTime.toLocaleTimeString()}</h2>
        <h2>Current weather {this.state.weather}</h2>
      </div>
    );
  }
}

class ScrollLengthLogger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollLength: 0,
    };
    this.updateScrollLength = this.updateScrollLength.bind(this);
  }
  updateScrollLength(e) {
    this.setState( {scrollLength: window.scrollY} );
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateScrollLength);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScrollLength);
  }
  render() {
    return (
      <div>
        <h2>Scroll Length: {this.state.scrollLength}</h2>
      </div>
    );
  }
}