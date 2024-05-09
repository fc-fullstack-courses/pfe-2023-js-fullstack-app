import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './ChatArea.module.scss';
import ChatLogo from '../ChatLogo';
import { addNewMessage } from '../../api/ws';

function ChatArea({ chat, user }) {
  const inputPlaceholder = 'Enter your text';

  const [message, setMessage] = useState('');

  const chatAreaClassNames = classNames(styles.chatArea, {
    [styles.chatAreaNoChat]: !chat,
  });

  if (!chat)
    return (
      <article className={chatAreaClassNames}>
        <h2 className={styles.selectChatMsg}>Select chat to start.</h2>
      </article>
    );

  return (
    <article className={chatAreaClassNames}>
      <header className={styles.chatHeader}>
        <h2 className={styles.chatName}>{chat.name}</h2>
        <p>users: {chat.users.length}</p>
      </header>
      <section className={styles.messagesWrapper}>
        <ul className={styles.messageList}>
          {chat.messages.map((m) => {
            const styleMessageItem = classNames(styles.messageItem, {
              [styles.own]: m.author?._id === user?._id,
            });

            return (
              <li key={m._id} className={styleMessageItem}>
                <ChatLogo chat={{ name: m.author?.firstName }} />
                <div className={styles.textSection}>
                  <h3 className={styles.author}>{m.author?.firstName}</h3>
                  <p className={styles.text}>{m.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className={styles.inputArea}>
        <input
          className={styles.messageInput}
          type='text'
          placeholder={inputPlaceholder}
          autoFocus
          value={message}
          onChange={({target: {value}}) => setMessage(value)}
        />
        <button className={styles.messageSendBtn} onClick={() => {
          addNewMessage({
            text: message,
            author: user,
            chat: chat._id
          });

          setMessage('');
        }}>Send</button>
      </section>
    </article>
  );
} //textbox

export default ChatArea;
