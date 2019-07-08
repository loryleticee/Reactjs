import React from 'react';
import "../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import Truc from './Truc';

function SayHello(props){
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'mysql-pawolanmwen.alwaysdata.net',
        user:'106139_test',
        password:'LebronjameS64',//password of your mysql db
        database:'pawolanmwen_meeting'
    });
    console.log(connection);
    // connection.connect(function(err){
    //     (err)? console.log(err+'+++++++++++++++//////////'): console.log('connection********');
    // });

    return(
        <div className="jumbotron">
           <link rel="stylesheet" href="/css/video-react.css" />
            <div className="container">
                <a href="http://localhost:3000/">
                    <div className="btn btn-danger"> Moien, {props.name} !</div>
                </a>
                <Player
                   playsInline
                   poster="/assets/poster.png"
                   src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
            </div>
            <Truc name='lory' />
        </div>
   )
}

export default SayHello;
