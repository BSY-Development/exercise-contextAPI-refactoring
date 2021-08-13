import React from 'react';
import CarsContext from './MyContext';
import Cars from './Cars';

class CarGrandpa extends React.Component {
  constructor() {
    super();

    this.state = {
      blue: false,
      yellow: false,
      red: false,
    }

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      ...this.state.cars,
      [car]: side,
    });
  };

  render() {
    const context = {
      ...this.state, moveCar: this.moveCar
    }
    return (
      <CarsContext.Provider value={context}>
        <Cars />
      </CarsContext.Provider>
    );
  }
}

export default CarGrandpa;
