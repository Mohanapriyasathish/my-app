import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greatings/>
      <Details access="✔" name="Priya" batch="B43WD1"/>
    <Details access="✔" name="Sathish" batch="B43WD2" />
    <Details access="✔"name="Dhanshika" batch="B43WD3"/>
    </div>
);
}
      

export default App;
function Details(props){
  return(
    <div className="card">
      <img src="" alt="name"/>
      <h2><span>{props.access}</span>{props.name}</h2>
      <p>{props.batch}</p>
      </div>
       
  );
}
function Greatings(){
  <div>
    <h2>Hello Guvi</h2>
  </div>
}

