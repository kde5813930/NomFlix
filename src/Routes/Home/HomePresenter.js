import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";


const Container = styled.div`
  padding: 20px;
`;


const HomePresenter = ({ nowPlaying, upComing, popular, error, loading}) => (

<>
  <Helmet>
    <title>Movies | Nomflix</title>
  </Helmet>
  
{  loading ? (
    <Loader /> 
    ) : (
    <Container>
    {nowPlaying && nowPlaying.length > 0 && (
      <Section title="Now playing">
        {nowPlaying.map(movie => (
          <Poster 
          key={movie.id} 
          id={movie.id} 
          title={movie.original_title} 
          imageUrl={movie.poster_path}
          rating={movie.vote_average}
          year={movie.release_date.substring(0, 4)}
          isMovie={true}
          />
        ))}
      </Section>
    )}
    {popular && popular.length > 0 && (
      <Section title="Popular Movies">
        {popular.map(movie => (
          <Poster 
          key={movie.id} 
          id={movie.id} 
          title={movie.original_title} 
          imageUrl={movie.poster_path}
          rating={movie.vote_average}
          year={movie.release_date.substring(0, 4)}
          isMovie={true}
          />
        ))}
      </Section>
    )}
    {upComing && upComing.length > 0 && (
      <Section title="UpComing Movies">
        {upComing.map(movie =>  (
          <Poster 
          key={movie.id} 
          id={movie.id} 
          title={movie.original_title} 
          imageUrl={movie.poster_path}
          rating={movie.vote_average}
          year={movie.release_date.substring(0, 4)}
          isMovie={true}
          />
        ))}
      </Section>
    )}
    {error && <Message color="#e74c3c" text={error} />}
    </Container>)} 
  </>
);


HomePresenter.propTypes = {
  nowPlaying: propTypes.array,
  upComing: propTypes.array,
  popular: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired,
}

export default HomePresenter;

