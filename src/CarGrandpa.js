import React from 'react';
import CarsContext from './MyContext';
import Cars from './Cars';
import TrafficSignal from './TrafficSignal';

class CarGrandpa extends React.Component {
  constructor() {
    super();

    this.state = {
      blue: false,
      yellow: false,
      red: false,
      signalColor: 'red',
    }

    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal(color) {
    this.setState({ signalColor: color })
  }

  moveCar(car, side) {
    this.setState({
      ...this.state.cars,
      [car]: side,
    });
  };

  render() {
    const context = {
      ...this.state, moveCar: this.moveCar, changeSignal: this.changeSignal
    }
    return (
      <CarsContext.Provider value={context}>
        <Cars />
        <TrafficSignal />
      </CarsContext.Provider>
    );
  }
}

export default CarGrandpa;
