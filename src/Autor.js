import React, { Component } from 'react';
import $ from 'jquery';
import InputCustomizado from './InputCustomizado';

export class FormularioAutor extends Component{
    constructor() {
        super();
        this.state = {lista : [], nome:'',email:'',senha:''};
        this.enviaForm = this.enviaForm.bind(this); //Pode ser assim tb
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);
    }

    enviaForm(evento) {
      evento.preventDefault();
      $.ajax({
        url:"https://cdc-react.herokuapp.com/api/autores",
        contentType: 'application/json',
        dataType:'json',
        type:'post',
        data: JSON.stringify({nome:this.state.nome,email:this.state.email,senha:this.state.senha}),
        success: function(resposta){
            this.setState({lista:resposta});
        }.bind(this),
        error: function(resposta){
            console.log("erro");
        }
      });
    }

    setNome(evento){
      this.setState({nome:evento.target.value});
    }
    setEmail(evento){
      this.setState({email:evento.target.value});
    }
    setSenha(evento){
      this.setState({senha:evento.target.value});
    }
  
    render() {
        return(
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post"> {/*Pode ser com onSubmit={this.enviaForm.bind(this)}*/}
                    <InputCustomizado id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} label="Nome"  />
                    <InputCustomizado id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} label="E-mail"  />                  
                    <InputCustomizado id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha} label="Senha"  />                                      
                    <div className="pure-control-group">                                  
                        <label></label> 
                        <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
                    </div>
                </form>             
            </div>  
        )
        }
}

export class TabelaAutores extends Component {
  
    constructor() {
      super();
      this.state = {lista : []};
    }

    componentDidMount() {
        $.ajax({
          //url:"http://localhost:8080/api/autores", teria que ter jdk7 pra conseguir rodar da minha máquina o .jar
          url:"https://cdc-react.herokuapp.com/api/autores",
          dataType: 'json',
          success:function(resposta){
            this.setState({lista:resposta});
          }.bind(this) //pegar o this do react e não do JSON
        });
    }

    render() {
        return(
            <div>            
                <table className="pure-table">
                    <thead>
                        <tr>
                        <th>Nome</th>
                        <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.lista.map(function(autor){
                        return(
                            <tr>
                            <td>{autor.nome}</td>                
                            <td>{autor.email}</td>                
                            </tr>
                        )
                        })}
                    </tbody>
                </table> 
            </div>             
        );
    }
}