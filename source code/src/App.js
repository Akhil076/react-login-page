import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />
      <div className="Border">
        <Welcome />
        <Loginform />
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return(
    <div className="header">
      <div className="container"><h1>My Website</h1></div>
    </div>
  );
}

function Navigator() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="box">Home</div>
        <div className="box">About</div>
        <div className="box">Contact</div>
		  </div>
    </div>
  );
}

function Welcome(){
  return(
    <div className="container2">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h3  id="welcome">Welcome!</h3>
      </div>
    </div>
  );
}

function Loginform(){

  const getRandomNumber = (min, max) => {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  };

  return (
    <div className="Loginform">
      <div className="container2">
        <form method="POST">
          <h3 id="a">Login</h3>
          <label for="emailid" id="label1">Email ID:</label>
          <input type="text" className="forms" id="emailid"></input><br></br>
          <label for="password" id="label2">Password:</label>
          <input type="text" className="forms" id="password"></input><br></br>
          <input type="checkbox" id="remme" name="remme"></input>
          <label for="remme"> Remember Me</label><br></br>
          <button className="button">Login</button>
        </form><br />
        <a href="https://students.iitm.ac.in/iitmsports/">IITM Sports Website</a><br /><br />
        <label for="comments" id="label3">Comments:</label><br />
        <textarea className="comments" name="comments"></textarea>
        <div id="dice">
          Random output: {getRandomNumber(1,100)}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return(
    <div className="footer">
      <div className="container2">
        <p id="copyright">Copyright &copy; 2021 My Website</p>
      </div>
    </div>
  );
}

export default App;
