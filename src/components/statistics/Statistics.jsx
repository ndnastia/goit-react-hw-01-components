import PropTypes from 'prop-types';
import StatisticsItem from 'components/statistics-item/StatisticsItem';
import data from 'data/data.json'
import styles from './Statistics.module.css'

const Statistics = ({ title}) => {
    return (<section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>

        <ul className={styles['stat-list']} >
            {data.map((data) => (<StatisticsItem key={data.id} {...data} />))}
        </ul>
    </section>)
};


Statistics.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
}

export default Statistics;