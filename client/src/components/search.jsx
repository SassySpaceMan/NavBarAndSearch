import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
class Search extends React.Component{

  constructor(props){
    super(props)
    this.state={
      activeSuggestions: 0,
      entries:[],
      showSuggestions: false,
      userInput: ''
    }
    this.changeHandler=this.changeHandler.bind(this)
  }
  changeHandler(e){
    this.setState({userInput: e.target.value}, console.log(this.state.userInput, this.state.entries))
    axios.get('/api/search',{
      params:{
        name: `${e.target.value}`
      }
    })
    .then()
    .then(res=>this.setState({entries:res.data, showSuggestions:true}))
  }

  render(){
    const {entries, showSuggestions, userInput}= this.state
    const entryList=entries.slice(0,10)
    let suggestionList;
    if(showSuggestions && userInput){
      suggestionList = (
        <ul className='suggestions'>
          {entryList.map((suggestion)=>{
            return(<li className='suggestionitem'>{suggestion.name}</li>)
          })}
        </ul>
      )
    }else{
      suggestionList = (
        <div className="empty">
          {/* <em> Nothing</em> */}
        </div>
      )
    }
     return(
      <div className= 'searchBar'>
        <form>
          <React.Fragment>
          <div className= 'searchBox' autoComplete="off">
           <input  type = 'text' class = 'search' placeholder='Search for great gear & clothing' value={this.state.userInput} onChange={this.changeHandler}/>
           <button type="submit" className = 'searchButton'><i className="fa fa-search"></i></button>
           </div>
           {suggestionList}
           </React.Fragment>
         </form>
      </div>)
  }
}

export default Search