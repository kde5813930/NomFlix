import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from 'api';


export default class extends React.Component {
  state = {
    movieResults:null,
    tvResults:null,
    searchTerm: "",
    error: null,
    loading: false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if(searchTerm !== ""){
      this.searchByTerm();
    }
  };

  updateTerm = event => {
    const { target:{value} } = event;
    console.log(value)
    this.setState({
      searchTerm: value
    })
  };

   searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading:true }); // 첫째로 로딩을 해주고
    try{
      const {                                            // 결과값이 일치하면 try로 반환
        data:{results: movieResults}
      } = await moviesApi.search(searchTerm);
      const {
        data:{results: tvResults}              
      } = await tvApi.search(searchTerm);

      this.setState({movieResults,tvResults });
      
    }catch{
      this.setState({error:"Cant't find results."});      // 일치하지 않으면 에러 
          
    }finally{
      this.setState({ loading: false });                  // 결과가 try든 catch든 마지막엔 finally로 반환
    }
  }

  render(){
    const {movieResults,tvResults,searchTerm,error,loading} = this.state;
    return(
    <SearchPresenter 
    movieResults={movieResults}
    tvResults={tvResults}
    error={error}
    searchTerm={searchTerm}
    loading={loading}
    handleSubmit={this.handleSubmit}
    updateTerm={this.updateTerm}
    />
    );
  }

}