import { Link } from 'react-router';
import useFriendsData from '../../components/hooks/useFriendsData';
import { ScaleLoader } from 'react-spinners';

const AllFriends = () => {

    const { friends, loadFriends } = useFriendsData();


    return (
        <div className='container mx-auto px-3'>
            <h1 className='text-2xl font-bold my-10 border-t border-gray-400 py-5'>Your Friends</h1>
            {loadFriends ? (
                <div className='flex justify-center items-center my-15'><ScaleLoader
                    color="#f41515"
                    height={40}
                /></div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8'>
                    {
                        friends.map((friend, ind) =>
                            <Link to={`/friendDetails/${friend.id}`} key={ind} className='shadow-2xl/20 px-3 py-8 rounded-md text-center space-y-2'>
                                <div className='flex justify-center'>
                                    <img src={friend.picture} alt="" className='rounded-full' />
                                </div>
                                <h4 className='text-xl font-bold'>{friend.name}</h4>
                                <p className='text-neutral-500 font-semibold'>{friend.days_since_contact} Day Ago</p>

                                <div className='mb-3'>
                                    {friend.tags.map((tag, ind) => <span key={ind} className='px-3 py-1 mr-2 bg-green-300 rounded-full'>{tag}</span>)}

                                </div>

                                <div>
                                    {friend.status === 'on-track' ? <span className='px-3 py-1 bg-green-300 rounded-full'>{friend.status}</span> : ''}
                                    {friend.status === 'overdue' ? <span className='px-3 py-1 bg-red-300 rounded-full'>{friend.status}</span> : ''}
                                    {friend.status === 'almost due' ? <span className='px-3 py-1 bg-amber-300 rounded-full'>{friend.status}</span> : ''}

                                </div>
                            </Link>
                        )
                    }
                </div>
            )
            }

        </div>
    );
};

export default AllFriends;