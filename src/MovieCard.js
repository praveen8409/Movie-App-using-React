
import avangers from "./avengers.jpg"


function MovieCard(props) {

   
    
        // console.log(this.props)
        const {movies,addStars,decStars,toggleCart,toggleFav} = props;
        
        const { title, plot, price, rating, star, fav, isInCart } = props.movies;
        
        
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src={avangers} alt="Poster" />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/10337/10337430.png"
                                 onClick={()=>{decStars(movies)}} />
                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" className="stars" />
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/10337/10337471.png"
                                 onClick={()=>{addStars(movies)}} />
                                <span>{star}</span>
                            </div>

                           

                            <button className={fav ? "unfavourite-btn" : "favourite-btn"} onClick={()=>{toggleFav(movies)}}>
                                {fav ? "unfavourite-btn" : "favourite-btn"}</button>

                            <button className={isInCart ? "unfavourite-btn" : "cart-btn"} onClick={()=>{toggleCart(movies)}}>
                                {isInCart ? "Remove from Cart" : "Add to Cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    

}

export default MovieCard;