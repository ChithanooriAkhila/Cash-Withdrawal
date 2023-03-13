// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  reduceBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="main-container">
          <div>
            <p>s</p>
            <p>Akhila Chithanoori</p>
          </div>
          <div>
            <p>Your balance</p>
            <div>
              <p>{balance}</p>
              <p>in rupees</p>
            </div>
          </div>
          <p>Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(denomination => (
              <DenominationItem
                value={denomination.value}
                reduceBalanceAmount={this.reduceBalance}
                key={denomination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
