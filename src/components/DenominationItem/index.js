// Write your code here
const DenominationItem = props => {
  const {value, reduceBalanceAmount} = props

  const reduceBalance = () => {
    reduceBalanceAmount(value)
  }

  return (
    <li>
      <button type="button" onClick={reduceBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
