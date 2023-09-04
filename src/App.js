import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./moviesdata";



class App extends React.Component {

  constructor() {
    super();
    this.state = {
        movies : movies,
        cartCount : 0
    }

}

  handleIncStar =(movie)=>{

    const {movies} = this.state;
    const mid = movies.indexOf(movie);

    if(movies[mid].star >= 5){
      return;
    }
    movies[mid].star += 0.5;

    this.setState({
      movies:movies
    })
  }

  handleDecStar =(movie)=>{

    const {movies} = this.state;
    const mid = movies.indexOf(movie);

    if(movies[mid].star <= 0){
      return;
    }
    movies[mid].star -= 0.5;

    this.setState({
      movies:movies
    })
  }

  handleToggleFav = (movie) => {
    
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;

    this.setState({
      movies
    })

    // console.log("fav")
  }

  handleToggleCart = (movie) => {
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].isInCart = !movies[mid].isInCart;

    this.setState({
      movies
    })
  }

  render(){
  const {movies} = this.state;
  return (
   <>
   
   <Navbar />
  <MovieList movies={movies}
              addStars={this.handleIncStar}
              decStars={this.handleDecStar}
              toggleFav={this.handleToggleFav}
              toggleCart={this.handleToggleCart}/>
   </>
  );
}
}



export default App;
