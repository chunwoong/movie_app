import React from 'react';
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        console.log(location);
        if (location.state) {
            return <div className="movie-detail">

                <form>
                    <div className="">
                        <label className="movie-title"> Title: </label>
                        <span className="movie-title-content"> {location.state.title} </span>
                    </div>
                    <div className="movie-poster">
                        <img src={location.state.poster} alt={location.state.title}></img>
                    </div>
                </form>

            </div>
        } else {
            return null;
        }
    }
}

export default Detail;