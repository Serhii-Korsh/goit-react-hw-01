// import React from 'react';
import PropTypes from 'prop-types';
// import clsx from "clsx";
// import css from "./friendlistItem.module.css";
// import './FriendListItem.css'; // Импортируем стили
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.div}>
      <img className={s.img} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p className={`${s.status} ${isOnline ? s.online : s.offline}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
