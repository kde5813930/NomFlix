import axios from "axios";

const api = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  params:{
    api_key:"00af4f6e6a5a4dbdbbae42fb39658b48",
    language:"en-US"
  }
});


export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComing: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id => 
  api.get(`movie/${id}`, {
    params: {
      append_to_response:'videos'
    }
  }),
  search: term => 
  api.get("search/movie", {
    params: {
      query:encodeURIComponent(term)
      //어떤 파라미터 값을 이 함수에 넘기든지 값을 인코딩하고 그 문자열로 검색한다.
    }
  })

};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id => 
    api.get(`tv/${id}`, {
      params: {
        append_to_response:'videos'
      } //이렇게하면 showDetail을 클릭했을때 개별적으로 params를 별도로 가져올 수 있다.
    }),
    search: term => 
      api.get("search/tv", {
    params: {
      query:encodeURIComponent(term)
      //어떤 파라미터 값을 이 함수에 넘기든지 값을 인코딩하고 그 문자열로 검색한다.
    }
  })
  };

