import React from 'react';
import { withRouter } from 'react-router-dom';
import TweetBox from './tweet_box';

class Tweet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: []
        }
    }

    componenDidMount() {
        this.props.fetchTweets();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.tweets !== prevState.tweets) {
            return { tweets: nextProps.tweets };
        }
        else return null;
    }

    // componentWillReceiveProps(newState) {
    //     this.setState({ tweets: newState.tweets });
    // }

    render() {
        if (this.state.tweets.length === 0) {
            return (<div>There are no Tweets</div>)
        } else {
            return (
                <div>
                    <h2>All Tweets</h2>
                    {this.state.tweets.map(tweet => (
                        <TweetBox key={tweet._id} text={tweet.text} />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Tweet);
