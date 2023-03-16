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
      location: this.location,
    };
  }
  getLocation() {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     const lat = position.coords.latitude;
    //     const lon = position.coords.longitude;
    //     const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyD0Z0u3ZVq3Yj8QH7TmRm1yL7g6bWjK9l0`;
    //     fetch(url)
    //       .then(response => response.json())
    //       .then(data => {
    //         this.setState( {location: data.results[0].formatted_address} );
    //       });
    //   });
    // } else {
    //   this.setState( {location: 'Geolocation is not supported by this browser.'} );
    // }
    navigator.geolocation.getCurrentPosition((position) => {
      const location = `${position.coords.latitude}, ${position.coords.longitude}`;
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://www.google.com/search?q=${lat}%2C+${lon}`
      this.setState( {location: url} );
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
        <h2>The Time in <a href={this.state.location}>Click For Current Location</a> is Currently, {this.state.currentTime.toLocaleTimeString()}</h2>
      </div>
    );
  }
}