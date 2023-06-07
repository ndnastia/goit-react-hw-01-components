import PropTypes from 'prop-types';
import TransanctionHistoryItem from 'components/transaction-history-item/TransactionHistoryItem';
import transactions from 'data/transactions.json';
import styles from './TransanctionHistory.module.css'

const TransanctionHistory = () => {
  return (<table className={styles['transaction-history']}>
  <thead>
    <tr >
      <th className={styles.type}>Type</th>
      <th className={styles.type}>Amount</th>
      <th className={styles.type}>Currency</th>
    </tr>
        </thead>
      {transactions.map((transaction) => <TransanctionHistoryItem {...transaction} key={transaction.id} />)}
</table>)
};

TransanctionHistory.propTypes = {
    id: PropTypes.string,
}

export default TransanctionHistory;