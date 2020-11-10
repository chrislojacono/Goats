import React, { Component } from 'react';
import goatData from '../../helpers/data/goatData';
import Goat from '../Goat';
import GoatForm from '../GoatForm';

class GoatCorral extends Component {
  state = {
    goats: [],
  };

  componentDidMount() {
    this.loadData();
  }

  addUpdateGoat = (goatObject) => {
    if (goatObject.id === '') {
      goatData.addGoat(goatObject).then((response) => {
        if (!response.error) {
          this.loadData();
        }
      });
    } else {
      goatData.updateGoat(goatObject).then((response) => {
        console.warn(goatObject);
        if (!response.error) {
          this.loadData();
        }
      });
    }
  }

  loadData = () => {
    goatData.getGoats().then((response) => {
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
    goatData.deleteGoat(e.target.id).then(() => {
      this.loadData();
    });
  }

  render() {
    const { goats } = this.state;
    const renderGoatToDom = () => goats.map((goat) => <Goat key={goat.id} goat={goat} addUpdateGoat={this.addUpdateGoat} removeGoat={this.removeGoat} />);

    return (
      <>
      <GoatForm addUpdateGoat={this.addUpdateGoat} goat={''}/>
      <div className="d-flex flex-wrap">
        {renderGoatToDom()}
      </div>
      </>
    );
  }
}

export default GoatCorral;
