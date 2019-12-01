import React from "react";
import styles from '@/components/index.less';

class BattleCard extends React.Component {
  render() {
    const { repo, result } = this.props;
    return (
      <div className={styles.card}>
        <h2 className={styles.index}>{result}</h2>
        <div>
          <img src={repo.avatar_url} alt={repo.name} />
        </div>
        <h4>Score: {repo.public_repos}</h4>
        <h4 className={styles.cardTitle}>{repo.name}</h4>
        <div>
          <i
            className="fa fa-user"
            style={{ color: "rgb(255, 191, 116)" }}
          />
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
        </div>
        <div>
          <i
            className="fa fa-star"
            style={{ color: "rgb(255, 215, 0)" }}
          />
          {repo.followers} followers
        </div>
        <div>
          <i
            className="fa fa-code-fork"
            style={{ color: "rgb(129, 195, 245)" }}
          />
          {repo.following} followering
        </div>
        <div>
          <i
            className="fa fa-code"
            style={{ color: "rgb(241, 138, 147)" }}
          />
          {repo.public_repos} repositories
        </div>
      </div>
    );
  }
}

export default BattleCard;