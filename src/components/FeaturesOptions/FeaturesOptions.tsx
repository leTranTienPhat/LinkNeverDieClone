import "./style.scss"
import "./responsive.scss"
import { featuresOptions } from "../../mockData/mockdata"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { featuresOptionInterface } from "../../interfaces/landingPageInterface"

function FeaturesOptions() {
  return (
    <div className="features-options-wrapper">
      <ul>
        {featuresOptions.map((option: featuresOptionInterface, index: number) => {
          return (
            <li key={index}>
              <div className="feature-icon-wrapper">
                <FontAwesomeIcon icon={option.iconURL} />
              </div>
              <div className="feature-text-wrapper">
                <p>{option.name}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>

  )
}

export default FeaturesOptions
