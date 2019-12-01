import { hot } from 'react-hot-loader/root';
import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Popular from '@/pages/Popular';
import BattlePage from '@/pages/Battle/BattlePage';
import Battle from '@/pages/Battle/index';
import Result from '@/pages/Battle/Result';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: '50px 50px 0 50px',
        minHeight: '100vh',
        maxWidth: '1200px',
        margin: '0 auto',
    }
};

const routes = [
    {
      path: "/",
      exact: true,
      component: Popular
    },
    {
      path: "/battle",
      component: Battle,
      routes: [
        {
          path: "/battle",
          exact: true,
          component: BattlePage
        },
        {
          path: "/battle/result",
          component: Result,
          exact: true
        }
      ]
    }
  ];

class App extends React.Component {
    render() {
      return (
        <Router>
          <div style={styles.container}>
            <Header />
            {renderRoutes(routes)}
            <Footer />
          </div>
        </Router>
      );
    }
  }
  
  export default hot(App);