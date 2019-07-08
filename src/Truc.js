import React, { Component } from 'react';

class Truc extends Component {

    Do()
    {
        let par = <p> Je m'appel paragraphe {this.props.name} </p>;
        return par
    }

    render()
    {
        return (this.Do());
    }
}

export default Truc;