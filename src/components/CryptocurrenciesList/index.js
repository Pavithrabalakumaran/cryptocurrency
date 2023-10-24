// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    return (
      <div className="currency-container">
        <h1 className="cc-heading">CryptocurrencyTracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          className="currency-image"
          alt="crypto currency"
        />
      </div>
    )
  }
}

export default CryptocurrenciesList
