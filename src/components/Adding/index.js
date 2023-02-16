import './index.css'

import {Component} from 'react'

import {v4} from 'uuid'

import NewPassword from '../NewPassword'

class Adding extends Component {
  state = {
    passwordsList: [],
    isChecked: false,
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
  }

  onChangeWebsite = event => {
    this.SetState({websiteInput: event.target.value})
  }

  onChangeInput = event => {
    this.SetState({searchInput: event.target.value})
  }

  onChangeUsername = event => {
    this.SetState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.SetState({passwordInput: event.target.value})
  }

  onChangeCheck = () => {
    this.SetState(preState => ({isChecked: !preState.isChecked}))
  }

  getSearchList = () => {
    const {searchInput, passwordList} = this.state
    const filterList = passwordList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return filterList
  }

  onDelete = id => {
    const {passwordList} = this.state
    const afterDeleteList = passwordList.filter(each => each.id !== id)
    this.SetState({passwordList: afterDeleteList})
  }

  onAdd = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    const newUser = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }
    this.SetState(preState => ({
      passwordList: [...preState.passwordList, newUser],
      websiteInput: '',
      username: '',
      password: '',
      searchInput: '',
    }))
  }

  render() {
    const {
      passwordsList,
      isChecked,
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
    } = this.state
    const searchResult = this.getSearchList()
    const count = passwordsList.length

    return (
      <div className="bg">
        <div className="Con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
            alt="app logo"
            className="img"
          />

          <div className="passwordCreate">
            <div className="passwordPart">
              <h1>Add New Password</h1>
              <form onSubmit={this.onAdd}>
                <div className="website">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                    alt="website"
                  />
                  <input
                    type="text"
                    value={websiteInput}
                    onChange={this.onChangeWebsite}
                    placeholder="Enter Website"
                  />
                </div>

                <div className="website">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                    alt="username"
                  />
                  <input
                    type="text"
                    value={usernameInput}
                    onChange={this.onChangeUsername}
                    placeholder="Enter Username"
                  />
                </div>

                <div className="website">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png  "
                    alt="password"
                  />
                  <input
                    type="text"
                    value={passwordInput}
                    onChange={this.onChangePassword}
                    placeholder="Enter Password"
                  />
                </div>
                <button type="submit" className="btn">
                  Add
                </button>
              </form>
            </div>

            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
              alt="password manager"
            />
          </div>

          <div className="lower">
            <div className="passwordCountAndSearch">
              <div className="count">
                <h1>Your Passwords</h1>
                <p>{count}</p>
              </div>

              <div className="searchBar">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                  alt="search"
                />
                <input
                  type="search"
                  value={searchInput}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <hr />
            <div className="passwordShower">
              <input
                type="checkbox"
                id="checkbox"
                checked={isChecked}
                onChange={this.onChangeCheck}
              />
              <label htmlFor="checkbox">Show Passwords</label>
            </div>
            <ul className="passwordCon">
              {searchResult.map(each => (
                <NewPassword
                  key={each.id}
                  details={each}
                  onDelete={this.onDelete}
                  isChecked={isChecked}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Adding
