import PropTypes from 'prop-types';
import s from './profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.box}>
      <div className={s.contact}>
        <img className={s.img} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.tag}>{location}</p>
      </div>

      <ul className={s.ul}>
        <li className={s.li}>
          <span>Followers</span>
          <span className={s.stats}>{stats.followers}</span>
        </li>
        <li className={s.views}>
          <span>Views</span>
          <span className={s.stats}>{stats.views}</span>
        </li>
        <li className={s.li}>
          <span>Likes</span>
          <span className={s.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};


Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
