import PropTypes from 'prop-types';
import styles from './Profile.module.css';


const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (<div className={styles.profile}>
        <div className={styles.description}>
            <div className={styles['image-container']}>
                <img
                    src={avatar}
                    alt={username}
                    className={styles.avatar}
            />
            </div>
            
            <p className={styles.name}>{username}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
            <li className={styles['stats-item']}>
                <span className="label">Followers</span>
                <span className="quantity">{followers}</span>
            </li>
            <li className={styles['stats-item']}>
                <span className="label">Views</span>
                <span className="quantity">{views}</span>
            </li>
            <li className={styles['stats-item']}>
                <span className="label">Likes</span>
                <span className="quantity">{likes}</span>
            </li>
        </ul>
    </div>)
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location:PropTypes.string,
  avatar: PropTypes.string,
    stats: PropTypes.shape(
        {
          followers: PropTypes.number,
          views: PropTypes.number,
          likes: PropTypes.number
        }
    ) 
      
}

export default Profile;