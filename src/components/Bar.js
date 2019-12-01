import React from "react";
import styles from './index.less';

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: props.active };
  }

  clickMenu = (menu) => {
    const { handleClick } = this.props;
    this.setState({
        item: menu.title,
    })
    handleClick(menu.query);
  }

  render() {
    const { bars } = this.props;
    const { item } = this.state;
    const links = bars.map((bar, key) => {
        return <div key={key} onClick={() => this.clickMenu(bar)} className={item === bar.title ? styles.active : ''}>{bar.title}</div>
    })
    return (
      <div className={styles.popularBar}>
        {links}
      </div>
    );
  }
}

export default Bar;