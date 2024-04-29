import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import UserContext from '../../contexts/userContext';
import ChatList from '../../components/ChatList';
import { getChats } from '../../api';
import ChatArea from '../../components/ChatArea';
import styles from './Chats.module.scss';

function ChatsPage() {
  const [
    {
      user: { _id: userId },
    },
    dispatch,
  ] = useContext(UserContext);

  const [chats, setChats] = useState([]);
  const [chat, setChat] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    getChats(userId).then((res) => {
      setChats(res.data.data);
    });
  }, []);

  return (
    <>
      <Header />
      <div className={styles.asideMainWrapper}>
        <aside className={styles.chatListWrapper}>
          {/* <button>Add Chat</button> */}
          <ChatList chats={chats} chatId={chat?._id} setChat={setChat} />
        </aside>
        <main className={styles.chatAreaWrapper}>
          <ChatArea chat={chat} userId={userId} />
        </main>
      </div>
    </>
  );
}

export default ChatsPage;
