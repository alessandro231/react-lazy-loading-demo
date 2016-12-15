import React from 'react';
import DoughnutExample from '../../components/DoughnutExample';
import MixedExample from '../../components/MixedExample';
import PolarExample from '../../components/PolarExample';

class Charts extends React.Component {

  render() {
    return (
      <div>
        <h1>Charts</h1>
        <DoughnutExample />
        <MixedExample />
        <PolarExample />
      </div>
    );
  }
}

export default Charts