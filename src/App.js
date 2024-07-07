import {Component} from 'react'

import './App.css'

import HistoryItem from './components/HistoryItem'

import EmptyList from './components/EmptyList'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {searchInput: '', historyList: initialHistoryList}

  onInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  ondelete = id => {
    const {historyList} = this.state
    const filteredhystory = historyList.filter(each => each.id !== id)
    this.setState({historyList: filteredhystory})
  }

  render() {
    const {searchInput, historyList} = this.state
    const searchResults = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    let result
    if (searchResults.length === 0) {
      result = <EmptyList />
    } else {
      result = searchResults.map(each => (
        <HistoryItem
          itemDetails={each}
          key={each.id}
          deleteItem={this.ondelete}
        />
      ))
    }
    return (
      <div className="container">
        {console.log(historyList)}
        <nav className="nav-bar">
          {console.log()}
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            className="app-logo"
            alt="app logo"
          />
          <div className="search-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png "
                className="search-icon"
                alt="search"
              />
            </div>
            <input
              className="search-bar"
              type="search"
              value={searchInput}
              placeholder="Search  History"
              onChange={this.onInputChange}
            />
          </div>
        </nav>

        <ul className="search-history-container">{result}</ul>
      </div>
    )
  }
}

export default App
