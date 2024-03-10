import React, { useState } from 'react'
import Block from "../components/HostBlock"
import MusicIcon from "../assets/images/music.svg"
import CelebrationIcon from "../assets/images/celebration.svg"
import ComputerIcon from "../assets/images/computer.svg"
import SportsIcon from "../assets/images/sports.svg"
import BranchIcon from "../assets/images/branch.svg"
export default function WhoHost() {
    const HostContent =[
        {
            h_img :MusicIcon,
            h_title : "Performances",
            h_description : "Creating a lively stage for music, dance, and theater, ensuring a memorable experience for both artists and the audience.",
        },
        {
            h_img :CelebrationIcon,
            h_title : "Celebration",
            h_description : "Event hosting for festive occasions like New Year's Eve, Christmas, and festivals. Elevate celebrations with our tailored services, providing a vibrant and memorable atmosphere for your special events.",
        },
        {
            h_img : SportsIcon,
            h_title : "Sports",
            h_description : "Dynamic sports event hosting for cricket, volleyball, and more.  Our venue is equipped to elevate the excitement of every match, providing a top-notch experience for players and spectators alike.",
        },
        {
            h_img : ComputerIcon,
            h_title : "Technology",
            h_description : "Host hackathons, AI/ML conferences, and space science events. Elevate your tech gatherings with our state-of-the-art facilities, fostering innovation and collaboration.",
        },
        {
            h_img :BranchIcon,
            h_title : "Festival Celebration",
            h_description : "Host vibrant celebrations like Holi, Diwali, Uttrayan, Dandiya and many more with us. Elevate your cultural events in a dynamic and welcoming space that brings communities together in the spirit of tradition and joy.",
        },
    ];
    const [HBlock, setHBlock] = useState(HostContent);
  return (
    <div className='mx-8 my-7'>
        <div className='mt-7'>
            <h3 className='text-primary-700 font-bold text-2xl'>Who you can host</h3>
        </div>
        <div className='mx-28 py-8'>
            <div className='flex flex-wrap justify-around gap-12'>
            {HBlock.map((item, index) => (
                <Block key={index} item={item} />
            ))}
            </div>
        </div>
    </div>
  )
}
