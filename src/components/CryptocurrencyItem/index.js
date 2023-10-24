// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyDetails} = props
  const {
    currencyName,
    euroValue,
    usdValue,
    currencyLogoUrl,
  } = cryptoCurrencyDetails

  return (
    <li className="cryptocurrency-item">
      <div className="logo-title-container">
        <img
          src={currencyLogoUrl}
          className="currency-image"
          alt={currencyName}
        />
        <p className="currency-name">{currencyName} </p>
      </div>
      <div className="amount-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
