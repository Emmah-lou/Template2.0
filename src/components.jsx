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
    };
  }
  getLocation() {

    navigator.geolocation.getCurrentPosition((position) => {
      const location = `${position.coords.latitude}, ${position.coords.longitude}`;
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.log(lat, lon);
      const url = `https://www.google.com/search?q=${lat}%2C+${lon}`
      //this.setState( {location: url} );
      const apiCall = `https://us1.locationiq.com/v1/reverse?key=pk.5f6ccf34896284c480a8d6ec083f317c&lat=${lat}&lon=${lon}&format=json`;
      fetch (apiCall)   
      .then(response => response.json())
      .then(data => {  
        console.log(data.display_name);
        this.setState( {location: data.display_name} );
      })
    });

  } 
  componentDidMount() {
    this.currentClock = setInterval(() => this.updateTime(), 1000);
    this.location = this.getLocation();
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
        
      </div>
    );
  }
}