import React from 'react';
import getGoats from '../helpers/data/goatData';
import '../styles/_app.scss';

class App extends React.Component {
  clickTest = () => {
    getGoats().then((response) => console.warn(response));
  };

  render() {
    return (
      <div className='App'>
        <h2>Goat Yoga</h2>
        <button onClick={this.clickTest} className='btn btn-info'>
          Click the button
        </button>
      </div>
    );
  }
}

export default App;
