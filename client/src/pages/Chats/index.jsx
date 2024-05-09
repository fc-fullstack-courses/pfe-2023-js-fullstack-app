import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ChatList from '../../components/ChatList';
import { getChats } from '../../api';
import ChatArea from '../../components/ChatArea';
import styles from './Chats.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllChats } from '../../redux/slices/chatsSlice';

function ChatsPage() {
  const {
    chats: { chats },
    chat: { chat },
    user: { _id: userId },
  } = useSelector((state) => ({
    chats: state.chats,
    chat: state.currentChat,
    user: state.user.user,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllChats(userId));
  }, []);

  return (
    <>
      <Header />
      <div className={styles.asideMainWrapper}>
        <aside className={styles.chatListWrapper}>
          {/* <button>Add Chat</button> */}
          <ChatList chats={chats} chatId={chat?._id} />
        </aside>
        <main className={styles.chatAreaWrapper}>
          <ChatArea chat={chat} userId={userId} />
        </main>
      </div>
    </>
  );
}

export default ChatsPage;
