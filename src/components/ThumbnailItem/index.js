// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachItemDetails, updateImageUrl, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachItemDetails
  const thumbnailClassName = isActive ? 'thumbnail-active' : 'thumbnail'

  const onChangeItem = () => {
    updateImageUrl(id)
  }

  return (
    <li className="list-items">
      <button type="button" onClick={onChangeItem} className="button">
        <img
          alt={thumbnailAltText}
          src={thumbnailUrl}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
