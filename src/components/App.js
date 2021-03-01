import Landing from './Landing';
import Card from './Card';
import Footer from './Footer';
import { Link, Route, Switch } from 'react-router-dom';


const App = () => {
    return (
        <>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/card" component={Card} />
        </Switch>
        <Footer path="/" />
        
        </>
    );
}

export default App;