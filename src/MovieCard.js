import { Component } from "react";
import avangers from "./avengers.jpg"


class MovieCard extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         title: "The Avengers!",
    //         plot: "Supernatural powers shown in the movie.",
    //         price: 199,
    //         rating: 8.9,
    //         stars: 0,
    //         fav: false,
    //         isInCart: false
    //     }

    //     // this.addStars = this.addStars.bind(this);
    // }



    addStars = () => {

        //form 1
        // this.setState({
        //    stars: this.state.stars + 0.5
        // })

        //form2
        if (this.state.stars >= 5) {
            return;
        }
        this.setState((prevState) => {
            return {
                stars: prevState.stars + 0.5
            }
        })

        // this.state.stars += 0.5;
        // console.log("this.state.stars : ", this.state.stars);
    }

    decStars = () => {
        if (this.state.stars <= 0) {
            return;
        }
        this.setState((prevState) => {
            return {
                stars: prevState.stars - 0.5
            }
        })
    }

    handlefav = () => {
        this.setState({
            fav: !this.state.fav
        })
    }

    toggleCart = () => {
        this.setState({
            isInCart: !this.state.isInCart
        })
    }

    render() {
        console.log(this.props)
        
        const { title, plot, price, rating, stars, fav, isInCart } = this.props.movies;
        
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
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/10337/10337430.png" onClick={this.decStars} />
                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" className="stars" />
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/10337/10337471.png" onClick={this.addStars} />
                                <span>{stars}</span>
                            </div>

                            {/* {fav ? <button className="unfavourite-btn" onClick={this.handlefav}>Un-Favourite</button> :
                                <button className="favourite-btn" onClick={this.handlefav}>Favourite</button>} */}

                            <button className={fav ? "unfavourite-btn" : "favourite-btn"} onClick={this.handlefav}>
                                {fav ? "unfavourite-btn" : "favourite-btn"}</button>

                            <button className={isInCart ? "unfavourite-btn" : "cart-btn"} onClick={this.toggleCart}>
                                {isInCart ? "Remove from Cart" : "Add to Cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MovieCard;