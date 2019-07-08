import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import "../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import * as ReactDom from "react-dom";

/*
function App() {
  return (
    <div className="App-Header">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

function SayHello(props){
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'mysql-pawolanmwen.alwaysdata.net',
        user:'106139_test',
        password:'LebronjameS64',//password of your mysql db
        database:'pawolanmwen_meeting'
    });
    console.log(connection);
    connection.connect(function(err){
        (err)? console.log(err+'+++++++++++++++//////////'): console.log('connection********');
    });
   return(
       <div className="jumbotron">
           <link rel="stylesheet" href="/css/video-react.css" />
           <div className="container">
               <a href="#">
                    <div className="btn btn-danger"> Moien, {props.name} !</div>
               </a>
               <Player
                   playsInline
                   poster="/assets/poster.png"
                   src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
               />
           </div>
       </div>
   )
}

const element = <div className="btn btn-danger btn-lg"><SayHello name={'Lory'}/></div>;

ReactDom.render(
    element,
    document.getElementById('root')
);
export default SayHello;
//export default App;
