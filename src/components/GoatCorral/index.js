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

  removeGoat = (e) => {
    const removedGoat = this.state.goats.filter((goat) => goat.id !== e.target.id);
    this.setState({
      goats: removedGoat,
    });
  }

  render() {
    const { goats } = this.state;
    const renderGoatToDom = () => goats.map((goat) => <Goat key={goat.id} goat={goat} removeGoat={this.removeGoat} />);

    return (
      <div className="d-flex flex-wrap">
        {renderGoatToDom()}
      </div>
    );
  }
}

export default GoatCorral;
