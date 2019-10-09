import React from 'react';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

// https://material-ui.com/getting-started/usage/

// https://github.com/HackerNews/API
// https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty


const App = ({title}) =>
    <Router>
        <Button>
            <div>{title}</div>
        </Button>
    </Router>;

export default App;
