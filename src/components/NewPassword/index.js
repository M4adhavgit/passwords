import './index.css'

const NewPassword = props => {
  const {onDelete, details, isChecked} = props
  const {id, username, password, website} = details

  const initial = username.slice(0, 1)
  const Deleting = () => {
    onDelete(id)
  }
  return (
    <li>
      <div className="passItems">
        <div className="initial">
          <p>{initial}</p>
        </div>
        <div className="others">
          <p>{website}</p>
          <p>{username}</p>
          {isChecked ? (
            <p>{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </div>
        <button type="button" onClick={Deleting} data-testId="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default NewPassword
