import React from "react";
import styles from './index.less';

class Card extends React.Component {
  render() {
    const { repo, index } = this.props;
    return (
      <div className={styles.card}>
        <h2 className={styles.index}>#{index}</h2>
        <div>
          <img src={repo.owner.avatar_url} alt={repo.name} />
        </div>
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
          {repo.stargazers_count} stars
        </div>
        <div>
          <i
            className="fa fa-code-fork"
            style={{ color: "rgb(129, 195, 245)" }}
          />
          {repo.forks_count} forks
        </div>
        <div>
          <i
            className="fa fa-warning"
            style={{ color: "rgb(241, 138, 147)" }}
          />
          {repo.open_issues_count} open issues
        </div>
      </div>
    );
  }
}

export default Card;