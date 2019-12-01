import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './index.less';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.item}>
          <NavLink to="/" activeClassName={styles.active} exact>Popular</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/battle" activeClassName={styles.active} exact>Battle</NavLink>
        </div>
      </div>
    );
  }
}

export default Header;