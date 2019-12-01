import React from 'react';
import styles from './battle.less';

class BattleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        isActive: false,
        player: '',
        isClicked: false,
     };
  }

  clickButton = () => {
      const { valueChange } = this.props;
      const { player } = this.state;
      this.setState({
          isActive: true,
          isClicked: true,
      })
      valueChange(player);
  }

  handleInputChange = (value) => {
    if (value) {
        this.setState({
            player: value,
            isActive: true,
        })
    } else {
        this.setState({
            player: value,
            isActive: false,
        })
    }
  }

  clickCloseButton = () => {
      const { valueChange } = this.props;
      this.setState({
          isClicked: false,
          player: '',
      })
      valueChange('');
  }

  render() {
    const { title } = this.props;
    const { isActive, player, isClicked } = this.state;
    if (!isClicked) {
        return (
          <div className={styles.player}>
            <div>{title}</div>
            <div className={styles.inputGroup}>
              <input className={styles.input} placeholder="github name" type="text" value={player} onChange={(e) => this.handleInputChange(e.target.value)} />
              <button className={styles.button} disabled={!isActive} onClick={() => this.clickButton()}>SUBMIT</button>
            </div>
          </div>
        );
    }
    return (
      <div className={styles.player}>
        <div>{title}</div>
        <div className={styles.playerInfo}>
          <div className={styles.playerImg}>
            <img src={`https://github.com/${player}.png?size=200`} alt={player} />
            <div>{player}</div>
          </div>
          <div className={styles.playerClose} onClick={() => this.clickCloseButton()}>
            <i
              className="fa fa-close"
              style={{ color: "rgb(255, 191, 116)" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BattleInput;