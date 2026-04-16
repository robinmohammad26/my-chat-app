import { useParams } from 'react-router';
import { ScaleLoader } from 'react-spinners';
import { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContext';
import { toast } from 'react-toastify';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoMdText } from 'react-icons/io';
import { FaVideo } from 'react-icons/fa';

const FriendDetails = () => {


    const { id } = useParams();

    const { friends, loadFriends, contactFriend, setContactFriend } = useContext(FriendsContext);

    const expectedFriend = friends.find((friend) => String(friend.id) === id);

    // const [contactFriend, setContactFriend] = useState([]);

    const contactFdHandle = (type) => {

        const updataFriend = {
            ...expectedFriend,
            activity: type
        }

        setContactFriend([...contactFriend, updataFriend])

        if(type === "call"){
            toast.success(`${updataFriend.name} Calling Now`)
        }
        else if(type === "text"){
            toast.success(`${updataFriend.name} Text Now`)
        }
        else if(type === "video"){
            toast.success(`${updataFriend.name} Video Calling Now`)
        }


    }


    return (
        <div className=''>
            {loadFriends ? (<div className='flex justify-center items-center my-15'><ScaleLoader
                color="#f41515"
                height={40}
            /></div>) :

                (<div className=" bg-gray-100 p-6 flex justify-center">
                    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">


                        <div className="bg-white rounded-2xl shadow p-6 text-center space-y-4">
                            <img
                                src={expectedFriend.picture}
                                className="w-20 h-20 rounded-full mx-auto"
                            />

                            <h2 className="text-lg font-semibold">{expectedFriend.name}</h2>

                            <div className="flex justify-center gap-2">
                                <span>
                                    {expectedFriend.status === 'on-track' ? <span className='px-3 py-1 bg-green-300 rounded-full'>{expectedFriend.status}</span> : ''}
                                    {expectedFriend.status === 'overdue' ? <span className='px-3 py-1 bg-red-300 rounded-full'>{expectedFriend.status}</span> : ''}
                                    {expectedFriend.status === 'almost due' ? <span className='px-3 py-1 bg-amber-300 rounded-full'>{expectedFriend.status}</span> : ''}
                                </span>
                                <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                                    {expectedFriend.tags}
                                </span>
                            </div>

                            <p className="text-sm text-gray-500 italic">
                                "Former colleague, great mentor"
                            </p>

                            <p className="text-sm text-gray-400">Preferred: email</p>


                            <div className="space-y-2 pt-4">
                                <button className="w-full border rounded-lg py-2 text-sm hover:bg-gray-50">
                                    Snooze 2 Weeks
                                </button>
                                <button className="w-full border rounded-lg py-2 text-sm hover:bg-gray-50">
                                    Archive
                                </button>
                                <button className="w-full border rounded-lg py-2 text-sm text-red-500 hover:bg-red-50">
                                    Delete
                                </button>
                            </div>
                        </div>

                        <div className="md:col-span-2 space-y-6">


                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="bg-white p-5 rounded-xl shadow text-center">
                                    <h3 className="text-2xl font-semibold text-gray-800">{expectedFriend.days_since_contact}</h3>
                                    <p className="text-sm text-gray-500">Days Since Contact</p>
                                </div>

                                <div className="bg-white p-5 rounded-xl shadow text-center">
                                    <h3 className="text-2xl font-semibold text-gray-800">{expectedFriend.goal}</h3>
                                    <p className="text-sm text-gray-500">Goal (Days)</p>
                                </div>

                                <div className="bg-white p-5 rounded-xl shadow text-center">
                                    <h3 className="text-lg font-semibold text-gray-800">{expectedFriend.next_due_date}</h3>
                                    <p className="text-sm text-gray-500">Next Due</p>
                                </div>
                            </div>


                            <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
                                <div>
                                    <h3 className="font-semibold text-gray-700">Relationship Goal</h3>
                                    <p className="text-gray-500 text-sm">
                                        Connect every <span className="font-semibold text-gray-800">30 days</span>
                                    </p>
                                </div>
                                <button className="border px-4 py-1 rounded-lg text-sm hover:bg-gray-50">
                                    Edit
                                </button>
                            </div>


                            <div className="bg-white p-6 rounded-xl shadow">
                                <h3 className="font-semibold text-gray-700 mb-4">Quick Check-In</h3>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <button onClick={() => contactFdHandle('call')} className="border rounded-xl py-6 flex flex-col items-center hover:bg-gray-50 cursor-pointer">
                                        <BiSolidPhoneCall />
                                        <span className="mt-2 text-sm">Calls Nows</span>
                                    </button>

                                    <button onClick={() => contactFdHandle('text')} className="border rounded-xl py-6 flex flex-col items-center hover:bg-gray-50 cursor-pointer">
                                        <IoMdText />
                                        <span className="mt-2 text-sm">Text</span>
                                    </button>

                                    <button onClick={() => contactFdHandle('video')} className="border rounded-xl py-6 flex flex-col items-center hover:bg-gray-50 cursor-pointer">
                                        <FaVideo />
                                        <span className="mt-2 text-sm">Video</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>)

            }


        </div>
    );
};

export default FriendDetails;