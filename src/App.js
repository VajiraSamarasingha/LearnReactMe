import logo from './logo.svg';
import './App.css';
// import {name,age} from './my.js';

import {num1,num2} from './my.js';

class Car{
  constructor(name){
    this.brand = name;
  }
  present(){
    return 'I have a '+ this.brand;
  }
}

class Model extends Car{
  constructor(name, mod){
    super(name);
    this.model = mod;
  }
  show(){
    return this.present() + ', it is a ' + this.model;
  }
}

// const c1 = new Car("Ford");
// const c2 = c1.present();

const hello = function(){
  return "Hello Vajira Samarasingha";
}
const Hi =() =>{
  return "Hi Sl_Niko_Tech";
}


const Love = (val) => "I Love You "+val;






// function Exp(){
//   return num1;
  
// }

function sum(){
  return num1+num2;
}

const c3 = new Model("Ford", "Mustang");
const c2 = c3.show();
const myArray = ['Apple','Banana','Orange'];

const myList = myArray.map((item) => <p>{item}</p>);

function F1(){
  var num2 = 32;
  var num3 = 34;

  return num2+num3;
}

function F2(){
  var num2 = 67;
  var num3 = 72;

  return num2-num3;
}

let authenticated = true;
let pakaya = false;

const Table = (
  <table border="1">
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Class</th>
      <th>Address</th>
    </tr>
    <tr>
      <td>Vajira</td>
      <td>24</td>
      <td>12-C</td>
      <td>Pitipana,Homagama,Colombo</td>
    </tr>
  </table>
);
const num =30
const Buy = (

  <h1>{(num)<70 ? "You area Fail":"You Not Fail"}</h1>
);

function Cars(props){
  return <h2>I am a {props.brand}!</h2>
}


function Cricket(){
  const six = () => {
    alert("I am Vajira Samarasingha Six Runner");
  }
  return (
    <button onClick={six}>Click Me Show Data Following</button>
  );
}

const SriLanka = <Cricket/>;

function Garage(){
  return (
    <div>
      <h1>I am Vajira My car Brand Show Following</h1>
      <h2>{<Cars brand="Honda"/>}</h2>

    </div>
  )
}
const Identity = "Pavani";
const Show = ()=>{
  return alert("I am Vajira Samarasingha "+Identity);
};

const ClickMe = <button onClick={Show}>Click Me show Garage</button>

const myelement = <Cars brand="Honda"/>;



function Jeep(props){
  return <li>I am a {props.brand}!</li>
}
function JeepGarage(){
  const Jeeps = ["Honda", "Toyota", "Nissan", "Mitsubishi", "Suzuki"];

  return (
    <>
      <h1>I am Vajira My Jeep Brand Show Following</h1>
      <ul>
        {Jeeps.map((item) => <Jeep brand={item}/>)};
      </ul>
    </>
  )
}


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p><img src="logo.svg"/></p>
      <p>I am Vajira samarasingh May Car brand is {c2}</p>
      <p>{hello()}</p>
      <p>{Hi()}</p>
      <p>{Love("CIVIC Car")}</p>
      <p>{myList}</p>
      <p>{sum()}</p>

      <p>{pakaya ? F1():F2()}</p>
      <p>{Table}</p>
      <p>{Buy}</p>
      {/* <p>{Garage()}</p> */}
      <p>{SriLanka}</p>
      <p>{ClickMe}</p>

      <p>{JeepGarage()}</p>
    </div>
  );
}

export default App;
