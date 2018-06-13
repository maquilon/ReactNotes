import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import Header from './header';
import Footer from './footer';
import Tags from '../tags';

const App = () => (
  <div className="container">
    <Header />

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/tags" component={Tags} />
    </main>

    <Footer />
  </div>
);

export default App;