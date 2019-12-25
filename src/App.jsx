import React from 'react';
import Restaurant from './components/restaurant';
import axios from 'axios';

export default class App extends React.Component{
	state={
		restaurants:[]
	}
	componentWillMount(){
		axios.get("http://192.168.0.102:5000/getrestaurants").then(response=>{
			this.setState({
				restaurants: response.data
			})
		})
	}
	render(){
		return (
			<div>
				<div class="ui blue inverted menu">
					<div class="header item">
						XSEED Restaurant Browser
					</div>
				</div>
				<h1 style={{textAlign:'center',margin:0}}>XSEED</h1>
				<h5 style={{textAlign:'center', margin:0}}>Browse hundreds of restaurants online</h5>
				<div className="ui container" style={{marginTop:'2em'}}>
					<div className="ui stackable three column grid">
						{
	this.state.restaurants.map(r=><div key={r['Restaurant ID']} className="column">
			<Restaurant 
				id={r['Restaurant ID']}
				name={r['Restaurant Name']} 
				cost={r['Average Cost for two']} 
				rating={r['Aggregate rating']} 
				color={r['Rating color'].replace(" ","").toLowerCase()}
				text={r['Rating text']}
				votes={r['Votes']}
				delivery={r['Has Online delivery']}
				booking={r['Has Table booking']}
				cuisines={r['Cuisines'].split(", ")}
				currency={r['Currency']}
				lat={r['Latitude']}
				long={r['Longitude']}
				address={r['Address']}
				/>
		</div>)
						}
					</div>
				</div>
			</div>
		)
	}
}