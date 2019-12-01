import { hot } from 'react-hot-loader/root';
import React from 'react';
import { parse } from "qs";
import axios from 'axios';
import BattleCard from '@/Components/BattleCard';
import styles from '@/components/index.less';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        playerOneResult: {},
        playerTwoResult: {},
    };
  }

  async componentDidMount() {
    const { location } = this.props;
    const { playerOne, playerTwo } = parse(location.search.substring(1));
    this.getRespo("playerOneResult", playerOne);
    this.getRespo("playerTwoResult", playerTwo);
  }

  getRespo = async (type, user) => {
    const res = await axios.get(`https://api.github.com/users/${user}`);
    this.setState({
        [type]: { ...res.data },
    });
  }

  render() {
    const { playerOneResult, playerTwoResult } = this.state;
    return (
      <div className={styles.battleResultPage}>
        <BattleCard repo={playerOneResult} result={playerOneResult.public_repos > playerTwoResult.public_repos ? 'Winner' : 'Loser'} />
        <BattleCard repo={playerTwoResult} result={playerTwoResult.public_repos > playerOneResult.public_repos ? 'Winner' : 'Loser'} />
      </div>
    );
  }
}

export default hot(Result);