import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../context/FriendsContext';
import callImg from '../../assets/call.png';
import textImg from '../../assets/text.png';
import videoImg from '../../assets/video.png';

const TimelinePage = () => {
    const { contactFriend } = useContext(FriendsContext);
    const [shortType, setShortedType] = useState('');

    const filteredData = shortType
        ? contactFriend.filter(item => item.activity === shortType)
        : contactFriend;

    if (!filteredData || filteredData.length === 0) {
        return (
            <div className='container mx-auto py-10'>
                <h1 className='text-center text-3xl font-bold'>
                    Timeline Page Empty
                </h1>
            </div>
        );
    }

    return (
        <div className='container mx-auto my-12'>
            <h1 className='text-4xl font-bold'>Timeline</h1>

            <div className="dropdown dropdown-bottom mt-4">
                <div tabIndex={0} role="button" className="btn m-1">
                    Filter ⬇️
                </div>

                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
                    <li onClick={() => setShortedType('text')}><a>Text</a></li>
                    <li onClick={() => setShortedType('call')}><a>Call</a></li>
                    <li onClick={() => setShortedType('video')}><a>Video</a></li>
                    <li onClick={() => setShortedType('')}><a>All</a></li>
                </ul>
            </div>

            <div className='my-10'>
                {filteredData.map((item, ind) => (
                    <div key={ind} className='p-4 rounded-xl border border-gray-500 mb-3 flex gap-3 items-center'>
                        <div>
                            {item.activity === 'call' && <img src={callImg} alt="" />}
                            {item.activity === 'text' && <img src={textImg} alt="" />}
                            {item.activity === 'video' && <img src={videoImg} alt="" />}
                        </div>

                        <div className='space-y-1'>
                            <h4 className='text-gray-500'>
                                <span className='text-[#244D3F] font-semibold'>
                                    {item.activity === 'call'
                                        ? 'Call With'
                                        : item.activity === 'video'
                                        ? 'Video With'
                                        : 'Text With'}
                                </span> {item.name}
                            </h4>

                            <p className='text-gray-500 text-md font-semibold'>
                                {new Date(item.time || Date.now()).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimelinePage;