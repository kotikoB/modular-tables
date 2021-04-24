import { BrowserRouter as Router, Route } from 'react-router-dom';
import Users from './components/users';
import Transactions from './components/transactions';
import Navigation from './components/navigation';

function App() {
    return (
        <div className='App' styile={{ padding: '3em', margin: '3em' }}>
            <Router>
                <Navigation />
                <Route exact path='/' component={Users} />
                <Route exact path='/users' component={Users} />
                <Route exact path='/transactions' component={Transactions} />
            </Router>
        </div>
    );
}

export default App;
