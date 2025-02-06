import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AlternativePage from './AlternativePage';
import MainComponet from './MainComponet';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <Fragment>
      <header className='header'>Isso é uma aplicação multipla</header>
      <Link to="/">home</Link>
      <Link to="AlternativePage">outra pagina</Link>
      
      <div>
        <Route exatac path='/' componet={MainComponet}/>

        <Route path='/AlternativePage' componet={AlternativePage}/>
      </div>
      </Fragment>
    </Router>
  );
}

export default App;
