import styles from './FriendList.module.css';
import FriendListItem from 'components/friend-list-item/FriendListItem';
import PropTypes from 'prop-types';
import friends from 'data/friends.json';

const FriendList = () => {
    return (<ul className={styles['friend-list']} >
   {friends.map ((friend) => (<FriendListItem {...friend} key={friend.id}/>))}
</ul>)
};

FriendList.propTypes = {
    id: PropTypes.number,
}
export default FriendList;