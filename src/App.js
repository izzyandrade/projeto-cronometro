import React from 'react';
import './style.css';

export default class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			numero: 0,
			botaoInicio: "INICIO",
		}
		this.inicio = this.inicio.bind(this);
		this.limpar = this.limpar.bind(this);
		this.timer = null;
	}

	inicio(){
		let state = this.state;
		if(this.timer !== null){
			clearInterval(this.timer);
			this.timer = null;
			state.botaoInicio = "INICIO";
		}else{
			this.timer = setInterval(() => {
				state.numero += 0.1;
				this.setState(state);
			}, 100);
			state.botaoInicio = "PAUSAR";
		}
		//this.setState(state);
	}

	limpar(){
		if(this.timer !== null){
			clearInterval(this.timer);
			this.timer = null;
		}

		let state = this.state;
		state.numero = 0;
		state.botaoInicio = "INICIO";
		this.setState(state);
	}

	render(){
		return(
			<div className="container">
				<img className="img" src={require('./assets/cronometro.png')} alt=""/>
				<a className="timer">{this.state.numero.toFixed(1)}</a>
				<div className="areaBtn">
					<a className="btn" onClick={this.inicio}>{this.state.botaoInicio}</a>
					<a className="btn" onClick={this.limpar}>ZERAR</a>
				</div>
			</div>
		);
	}
}