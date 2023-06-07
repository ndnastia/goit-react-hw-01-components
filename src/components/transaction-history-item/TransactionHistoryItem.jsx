import PropTypes from 'prop-types';
import styles from './TransactionHistoryItem.module.css'
const TransanctionHistoryItem = ({ type, amount, currency }) => {
    return (
  <tbody>
      <tr>
      <td className={styles.item}>{type}</td>
      <td className={styles.item}>{amount}</td>
      <td className={styles.item}>{currency}</td>
        </tr>
            
    </tbody>)

}

TransanctionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransanctionHistoryItem;