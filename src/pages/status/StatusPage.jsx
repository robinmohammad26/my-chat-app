import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendsContext } from '../../context/FriendsContext';
import { Link } from 'react-router';

const StatusPage = () => {

    const { contactFriend } = useContext(FriendsContext);

    const filterFriendCall = contactFriend.filter(filData => filData.activity === "call")
    const filterFriendText = contactFriend.filter(filData => filData.activity === "text")
    const filterFriendVideo = contactFriend.filter(filData => filData.activity === "video")


    let data = [
        { name: 'Text', value: filterFriendText.length, fill: '#0088FE' },
        { name: 'Voice Call', value: filterFriendCall.length, fill: '#00C49F' },
        { name: 'Video Call', value: filterFriendVideo.length, fill: '#FFBB28' },
    ];

    if (!contactFriend.length > 0) {
        return <div className='container mx-auto my-10 text-center'>
            <h1 className='text-2xl font-bold mb-5'>Empty Page</h1>
            <button className='btn btn-warning text-white'><Link to={'/'}>Go To Home</Link></button>
        </div>
    } else {
        return (
            <div>
                <div className='container mx-auto'>
                    <h1 className='text-3xl font-bold my-8 text-center'>Friendship Analytics</h1>
                    <div className='my-10'>
                        <PieChart style={{ width: '100%', maxWidth: '400px', margin: 'auto', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="50%"
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            <Legend />
                            <Tooltip />
                        </PieChart>
                    </div>
                </div>
            </div>
        );
    }
};

export default StatusPage;