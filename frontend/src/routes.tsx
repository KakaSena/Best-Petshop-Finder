import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Results from './pages/Results';
import SearchList from './pages/SearchList';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/SearchList" component={SearchList} />
            <Route path="/Results" component={Results} />
        </BrowserRouter>
    )
}

export default Routes;