import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Results from './pages/Results';
import SearchForm from './pages/SearchForm';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/SearchList" component={SearchForm} />
            <Route path="/Results" component={Results} />
        </BrowserRouter>
    )
}

export default Routes;