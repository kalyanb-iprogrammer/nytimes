import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Article from './components/Article';
import ArticleDetail from './components/ArticleDetail'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Article} />
          <Route path="/article/:id" component={ArticleDetail} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
