import React, { Component } from 'react';
import getGoats from '../../helpers/data/goatData';
import Goat from '../Goat';

class GoatCorral extends Component {
  state = {
    goats: [],
  };

  componentDidMount() {
    getGoats().then((response) => {
      this.setState({
        goats: response,
      });
    });
  }

  render() {
    const { goats } = this.state;
    const renderGoatToDom = () => goats.map((goat) => <Goat key={goat.id} goat={goat}/>);

    return (
      <div>
        {renderGoatToDom()}
      </div>
    );
  }
}

export default GoatCorral;
