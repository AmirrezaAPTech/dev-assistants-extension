import React from 'react';
import ReactDOM from 'react-dom';
import './NewTab.css';
import NewTab from '../NewTab';

const App: React.FC = () => {
  return (
<NewTab />
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
