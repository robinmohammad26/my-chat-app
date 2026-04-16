import React, { useEffect, useState } from 'react';

export const useFriendsData = () => {

    const [friends, setFriends] = useState([]);

    const [loadFriends, setLoadFriends] = useState(true);

    const [contactFriend, setContactFriend] = useState([]);

    useEffect(() => {
        const friendData = async () => {
            const res = await fetch('/friends.json');
            const data = await res.json();
            setTimeout(() => {
                setFriends(data)
                setLoadFriends(false)
            }, 1000);
        }
        friendData();

    }, [])

    return { friends, loadFriends,contactFriend,setContactFriend };
};

export default useFriendsData;