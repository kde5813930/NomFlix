import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 15px;
  width: 100%;
`;

const Input = styled.input `
  all:unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({ movieResults, tvResults, error, searchTerm, loading, handleSubmit, updateTerm}) => (
  <>
    <Helmet>
    <title>Search | Nomflix</title>
    </Helmet>
    {
      <Container>
      <Form onSubmit={handleSubmit}>
        <Input 
        placeholder="Search Movies or TV Shows..." 
        value={searchTerm} 
        onChange={updateTerm}
        >
        </Input>
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(movie => (
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
          {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map(show => (
              <Poster 
                key={show.id} 
                id={show.id} 
                title={show.original_name} 
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section> 
        )}
        {error && <Message color="#e74c3c" text={error} />}
        {
        movieResults && 
        tvResults && 
        movieResults.length === 0 && 
        tvResults.length === 0 && 
        <Message text="Nothing found 🤷" color="#aab2b3‍" /> 
        }
        </>
      )}
    </Container>}
  </>
);


SearchPresenter.propTypes = {
  movieResults: propTypes.array,
  tvResults: propTypes.array,
  error: propTypes.string,
  searchTerm: propTypes.string,
  loading: propTypes.bool.isRequired,
  handleSubmit: propTypes.func.isRequired,
  updateTerm: propTypes.func.isRequired
}

export default SearchPresenter;