import { Component } from "react";
import MovieCard from "./MovieCard";



class MovieList extends Component {



  render() {
    // const { title, plot, price, rating, stars, fav, isInCart } = this.state;
    const { movies  ,addStars,decStars,toggleFav,toggleCart } = this.props;
    console.log(this.props);
    return (
      <>
        {movies.map((movie,index) => (<MovieCard movies={movie}
                                          addStars ={addStars}
                                          decStars ={decStars}
                                          toggleFav ={toggleFav}
                                          toggleCart ={toggleCart}                                         
                                          key={index} />
       ) )}
      </>
    )
  }
}

export default MovieList;