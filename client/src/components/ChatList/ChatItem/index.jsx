import classNames from 'classnames';
import React from 'react';
import { getChat } from '../../../api';
import styles from './ChatItem.module.scss';
import ChatLogo from '../../ChatLogo';
import { getCurrentChat } from '../../../redux/slices/currentChatSlice';
import { useDispatch } from 'react-redux';

function ChatItem({
  chat: { _id, isPrivate, name, messages, coverImage: imgUrl },
  chatId,
}) {
  const dispatch = useDispatch();
  const lastMsg = messages.slice(-1)[0];
  const {
    author: { firstName, lastName },
    text,
  } = lastMsg || { author: {} };

  const chatItemStyle = classNames(styles.chatItem, {
    [styles.active]: _id === chatId,
  });

  const clickHandler = (chatId) => {
    dispatch(getCurrentChat(chatId));
  };

  return (
    <li key={_id} className={chatItemStyle} onClick={() => clickHandler(_id)}>
      <section className={styles.chatInfo}>
        <ChatLogo chat={{ name, imgUrl }} />
        <div>
          <h2 className={styles.chatHeader}>{name}</h2>
          {text && (
            <p className={styles.lastMessage}>
              {firstName} {lastName}: {text}
            </p>
          )}
        </div>
      </section>
    </li>
  );
}

export default ChatItem;
