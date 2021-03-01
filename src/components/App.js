import Landing from './Landing';
import CardGenerator from './CardGenerator';
import { Route, Switch } from 'react-router-dom';


const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/cardGenerator" component={CardGenerator} />
        </Switch>
    );
}

export default App;