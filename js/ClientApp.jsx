const ce = React.createElement;

const MyTitle = props => {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyComponent = () => {
  return ce(
    'div',
    { id: 'my-component' },
    ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'Rick and Morty', color: 'LimeGreen' }),
    ce(MyTitle, { title: 'Silicon Valley', color: 'peru' })
  );
};

ReactDOM.render(ce(MyComponent), document.getElementById('app'));
