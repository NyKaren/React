import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// http://localhost:3001/

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div); 
  //adicionando aqui embaixo o que seria de class App extends Component, antes do render
  constructor() {
    super();
    this.state = {lista:[{nome: 'Alberto', email: 'alberto.souza@caelum.com.br', senha: '123456'}]};
  }
});
