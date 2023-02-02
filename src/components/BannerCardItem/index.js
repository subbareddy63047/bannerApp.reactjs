// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={className}>
      <div className="subbu">
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button type="submit" className="button">
          show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
