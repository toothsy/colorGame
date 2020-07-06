import React,{Component} from 'react';
import './App.css';
import './Square.css';
class SquaresGrid extends Component{
	constructor(props) {
	  super(props);
	  this.state = {n:props.n,chosenNumber:props.chosenNumber,color:props.color};
	}
	randomFunction(){
		return Math.floor(Math.random() * 256);
	}
	randomrbg(){
		let r = this.randomFunction();
		let g = this.randomFunction();
		let b = this.randomFunction();
		return `rgb(${r}, ${b}, ${g})`;
	}
	SquareMaker(){
		let array=[];

			for(var i=0;i< this.props.n;i++)
				{
					let color={ backgroundColor:this.randomrbg()}
					if(i === this.props.chosenNumber)
						array.push(<div className="Square"
						onClick ={this.handleClick.bind(this)}
						id={i}
						style= {{backgroundColor:`${this.props.color}`}}>
						</div>);
					else
					array.push(<div className="Square"
						onClick ={this.handleClick.bind(this)}
						id={i}
						style={color} >
						</div>);

				}
				return (<React.Fragment >
							{array.map((square,index) => 
								(<React.Fragment key={index}>
									{square}
								</React.Fragment>)
								)}
						</React.Fragment>
				);	

	}
	handleClick(e){
	// console.log(` this is`,this.props);
	let GuessStripe=document.querySelector("#Guess");
	let Squares=document.querySelectorAll(".Square");
	if(Number(e.target.id) === this.props.chosenNumber)
	{
		// console.log("target",);
		GuessStripe.textContent="YA Found me    ";
		document.querySelector("button").textContent="Play Again?";
		document.querySelector("#header").style.backgroundColor=`${e.target.style.backgroundColor}`;
		for(var i=0;i<Squares.length;i++){
		Squares[i].style.background=`${e.target.style.backgroundColor}`;
		}
	}
	else{
		GuessStripe.textContent="NOOOO";
		e.target.style.backgroundColor=`#232323`;
	}
}
render()			
	{return (
		<React.Fragment>
			<div className="Container">
				{this.SquareMaker()}
			</div>	
		</React.Fragment>
		);}

}
class App extends Component {
randomFunction(){

	return Math.floor(Math.random()*256);
}
smallRandomFunction(){
	
	return Math.floor(Math.random()*5);
}

randomrbg(){
		let r = this.randomFunction();
		let g = this.randomFunction();
		let b = this.randomFunction();
		return `rgb( ${r}, ${g}, ${b})`;
	}	
state={chosenNumber:this.smallRandomFunction(),color:this.randomrbg()};
resetButton(){
	document.querySelector("button").textContent="NEW COLOR";
	document.querySelector("#Guess").textContent="";
	document.querySelector("#header").style.backgroundColor=`#669999`;
	this.setState({chosenNumber:this.smallRandomFunction(),color:this.randomrbg()});
}

render(){
	return (<div>
					<h1 id="header">The Mediocre 
						<span id="rgbColor" >
							<br></br>
								{this.state.color}
							<br></br>
						</span> 
						guessing game
						</h1>

					<div id="stripe">
						
						<button  
						onClick={this.resetButton.bind(this)}> NEW COLOR</button>
						<span id = "Guess" >Guess </span>
					</div>	
					<SquaresGrid n={6} 
					chosenNumber= {this.state.chosenNumber} 
					color={this.state.color}
					/>
			</div>
			);
		}
}
export default App;