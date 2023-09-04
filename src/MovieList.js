
import MovieCard from "./MovieCard";



function MovieList(props){



 
    // const { title, plot, price, rating, stars, fav, isInCart } = this.state;
    const { movies  ,addStars,decStars,toggleFav,toggleCart } = props;
    console.log(props);
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


export default MovieList;