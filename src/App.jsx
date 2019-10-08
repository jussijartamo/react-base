import React from 'react';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

// https://material-ui.com/getting-started/usage/

const App = ({title}) =>
    <Router>
        <Button>
            <div>{title}</div>
        </Button>
    </Router>;

export default App;
