import React from "react";
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import Bar from '@/components/Bar';
import Card from '@/components/Card';
import styles from '@/components/index.less'

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        active: 'All',
        repos: [],
        hasMore: false,
        page: 1,
        query: 'stars:>1',
        loading: true,
    };
  }

  componentDidMount() {
      this.getRepo(true);
  }

  handleClick = async (query) => {
    await this.setState({
        query,
        repos: [],
    })
    this.getRepo(true);
  }

  getRepo = async (clear) => {
    const { page, repos, query } = this.state;
    this.setState({
        loading: true,
    })
    const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories&page=${clear ? 1 : page}`;
    await axios.get(url)
    .then((res) => {
        const currentRepos = res.data.items;
        this.setState({
            repos: clear ? currentRepos : [...repos, ...currentRepos],
            page: clear ? 1 : page + 1,
            hasMore: !res.data.incomplete_results,
            loading: false,
        })
    })
    .catch((err) => {
        console.log(err);
        this.setState({
            loading: false,
        })
    });
  }

  render() {
    const barMenus = [
        {
            title: 'All',
            query: 'stars:>1'
        }, {
            title: 'Javascript',
            query: 'stars:>1+language:javascript'
        }, {
            title: 'Ruby',
            query: 'stars:>1+language:ruby'
        }, {
            title: 'Java',
            query: 'stars:>1+language:java'
        }, {
            title: 'CSS',
            query: 'stars:>1+language:css'
        }, {
            title: 'Python',
            query: 'stars:>1+language:python'
        }
    ];
    const { active, repos, hasMore, loading } = this.state;

    return (
      <div>
        <Bar bars={barMenus} active={active} handleClick={this.handleClick} />
        <div>
          <InfiniteScroll
            initialLoad={false}
            loadMore={() => this.getRepo(false)}
            hasMore={hasMore}
            loader={null}
          >
            <div className={styles.cardContainer}>
              {(repos && repos.length > 0) ? repos.map((repo, key) => {
                return <Card key={key} index={key + 1} repo={repo} />
              }) : ''}
            </div>
          </InfiniteScroll>
          { loading ? <div className={styles.loading} key={0}>Loading ...</div> : '' }
        </div>
      </div>
    );
  }
}

export default Popular;