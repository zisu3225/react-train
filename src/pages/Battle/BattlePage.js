import React from "react";
import BattleInput from './BattleInput';
import styles from '@/components/index.less';

class BattlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        playerOne: '',
        playerTwo: '',
    };
  }

  changePlayerOneValue = (player) => {
    this.setState({
      playerOne: player,
    })
  }

  changePlayerTwoValue = (player) => {
    this.setState({
      playerTwo: player,
    })
  }

  clickBattleButton = () => {
    const { playerOne, playerTwo } = this.state;
    const { history, match } = this.props;
    history.push(`${match.path}/result?playerOne=${playerOne}&playerTwo=${playerTwo}`);
  }

  render() {
    const { playerOne, playerTwo } = this.state;
    return (
      <div>
        <h1 className={styles.battleTitle}>Instructions</h1>
        <div className={styles.battleInstruction}>
          <div className={styles.battleItem}>
            <h4>Enter two Github users</h4>
            <div className={styles.battleItemIcon}>
              <i
                className="fa fa-users"
                style={{ color: "rgb(255, 191, 116)" }}
              />
            </div>
          </div>
          <div className={styles.battleItem}>
            <h4>Battle</h4>
            <div className={styles.battleItemIcon}>
              <i
                className="fa fa-space-shuttle"
                style={{ color: "rgb(114, 114, 114)" }}
              />
            </div>
          </div>
          <div className={styles.battleItem}>
            <h4>See the winner</h4>
            <div className={styles.battleItemIcon}>
              <i
                className="fa fa-camera-retro"
                style={{ color: "rgb(255, 215, 0)" }}
              />
            </div>
          </div>
        </div>
        <h1 className={styles.battleTitle}>Players</h1>
        <div className={styles.battleInput}>
          <BattleInput title="Player One" valueChange={this.changePlayerOneValue} />
          <BattleInput title="Player Two" valueChange={this.changePlayerTwoValue} />
        </div>
        <div>{playerOne && playerTwo && (<button className={styles.battleButton} onClick={() => this.clickBattleButton()}>Battle!!!</button>)}</div>
      </div>
    );
  }
}

export default BattlePage;