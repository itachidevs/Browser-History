import './index.css'

const HistoryItem = props => {
  const {itemDetails, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = itemDetails
  const deletion = () => {
    deleteItem(id)
  }
  return (
    <li className="listItem-container">
      <div className="time-container">
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="history-details-container">
        <div className="listItem">
          <img className="history-logo" alt="domain logo" src={logoUrl} />
          <div className="names-container">
            <p className="history-details">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
        <button
          className="delete-container"
          type="button"
          data-testid="delete"
          onClick={deletion}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>{' '}
      </div>
    </li>
  )
}
export default HistoryItem
