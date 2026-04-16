import React from 'react';
import { FriendsContext } from './FriendsContext';
import useFriendsData from '../components/hooks/useFriendsData';

const FriendsContextProvider = ({children}) => {
    const { friends, loadFriends,contactFriend,setContactFriend } = useFriendsData();
    const data = {
        friends,
        loadFriends,
        contactFriend,
        setContactFriend
    }
    return (<FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>);
};

export default FriendsContextProvider;