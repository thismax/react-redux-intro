import React from 'react';
import { render } from 'react-dom';

const MyTitle = props => (
  <div>
    <h1 style={{ color: props.color }}>{props.title}</h1>
  </div>
);

const MyComponent = () => (
  <div id="my-component">
    <MyTitle title="Game of Thrones" color="YellowGreen" />
    <MyTitle title="Stranger Things" color="peru" />
    <MyTitle title="House of Cards" color="GreenYellow" />
    <MyTitle title="The Americans" color="cyan" />
  </div>
);

render(<MyComponent />, document.getElementById('app'));
