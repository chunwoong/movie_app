import React from 'react';

class Detail extends React.Component {
    componentDidMount(){
        const { location, history } = this.props;
        console.log(history);
        if(location.state === undefined) {
            // redirect
            history.push("/");
        }
        console.log(location.state);
    }
    render(){
        const { location } = this.props;
        if(location.state) {
            return<span>{location.state.title}</span>
        } else {
            return null;
        }
    }
}

export default Detail;