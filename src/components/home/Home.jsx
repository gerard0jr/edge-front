import React, { Component } from 'react'
import Navbar from './Navbar';
import NumbersInput from './NumbersInput';
import { Button } from '@material-ui/core';
import { changeValue, getDBNumber } from '../../services/database'

export default class Home extends Component {
    state = {
        number: 1,
        DBNum: null
    }
    // Increment number function
    incrementNumber = () => {
        let { number } = this.state
        if(number === 100) return
        number ++
        changeValue(number)
        .then(res => this.getNumber())
        .catch(err => console.log(err))
        
    }
    // Decrement number function
    decrementNumber = () => {
        let { number } = this.state
        if(number === 0) return
        number --
        changeValue(number)
        .then(res => this.getNumber())
        .catch(err => console.log(err))
    }

    resetCounter = () => {
        let defaultNumber = 1
        changeValue(defaultNumber)
        .then(res => this.getNumber())
        .catch(err => console.log(err))
    }

    getNumber = () => {
        getDBNumber()
        .then(res => this.setState({DBNum:res.number, number:res.number}))
        .catch(err => console.log(err))
    }

  render() {
    const { number, DBNum } = this.state
    const { incrementNumber, decrementNumber, resetCounter } = this
    return (
      <div>
        <Navbar/>
        <h1>¡Hola!</h1>
        <p>Presiona el botón <b>+ </b>para incrementar el número, presiona el boton <b>- </b>para decrementarlo</p>
        <NumbersInput incrementNumber={incrementNumber} decrementNumber={decrementNumber} number={number}/>
        <Button onClick={resetCounter}>Reiniciar</Button>
        <h4>Database info: {DBNum ? DBNum : "Not changed"}</h4>
      </div>
    )
  }
}
