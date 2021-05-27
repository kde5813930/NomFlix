import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";


export default class extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loading: true
  };

async componentDidMount(){
  try{
    const {
      data: { results: nowPlaying } 
    } =  await moviesApi.nowPlaying();
    const {
      data: { results: upComing } 
    } =  await moviesApi.upComing();
    const {
      data: { results: popular } 
    } =  await moviesApi.popular();


    this.setState({
      nowPlaying,
      upComing,
      popular
    })

    //자바스크립트는 해당 api 데이터를 가져오기까지 기다려주지않고 다음단계를 바로 실행하기 때문에
    //async,await 로 해당 api 데이터를 모두 불러올때까지 기다려 달라고 해야한다.
  }catch{
    this.setState({
      error: "Can't find movie information."
    })
  }finally{
    this.setState({
      loading: false
    })
  }
}

//try 실행하고 뭔가 작동하지 않으면 error를 catch하는거야 그리고 설사 성공했거나 실패해도
//finally 마지막에는 뭔가를 해준다.

  render() {
    const { nowPlaying, upComing, popular, error, loading } = this.state;
    return(
      <HomePresenter 
      nowPlaying={nowPlaying} 
      upComing={upComing} 
      popular={popular} 
      error={error}
      loading={loading}
      />
    );
  }
}


