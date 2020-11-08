import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
 
ReactDOM.render(
  <React.StrictMode>
    
    <div className="Container">
                <div id="header">
                  <h1>Seja Bem-Vindo ao Peaky's Burguers</h1>
                  <br></br>
                  <h2>para continuar</h2>
                  <h2>clique em um dos botões abaixo</h2>
                </div>
                <div id="select">
                  <a href="https://websiteback.herokuapp.com/sistema/pedidos"><button className="select_button">Produtos</button></a>
                  <a href="https://websiteback.herokuapp.com/sistema/carrinhos"><button className="select_button">Pedidos</button></a>
                  <a href="https://websiteback.herokuapp.com/sistema/usuarios"><button className="select_button">Clientes</button></a>
                </div>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 
serviceWorker.unregister();