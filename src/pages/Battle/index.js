import React from 'react';
import { Redirect } from 'react-router-dom';
import { parse } from 'qs';
import { renderRoutes } from 'react-router-config';

class Battle extends React.Component {
  render() {
    const { match, location, route } = this.props;
    const { url } = match;
    const { playerOne, playerTwo } = parse(location.search.substring(1));

    if (url !== location.pathname && !(playerOne && playerTwo)) {
      return <Redirect to={{ pathname: `${url}` }} />;
    }
    return <div>{renderRoutes(route.routes)}</div>;
  }
}

export default Battle;