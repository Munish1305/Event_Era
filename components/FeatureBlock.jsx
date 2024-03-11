import { useState } from 'react'
import Block from "./Block"
export default function Feature() {
    const FeatureContent =[
        {
            f_img :"https://adiyogitechnosoft.com/admin/assets/img/service/3a28d2920552dfcd4141b9b9b88561fb.jpg",
            f_title : "Streamlined Ticket Sales",
            f_description : "Effortlessly sell event tickets online with a seamless experience for attendees.",
        },
        {
            f_img :"https://adiyogitechnosoft.com/admin/assets/img/service/3a28d2920552dfcd4141b9b9b88561fb.jpg",
            f_title : "Real-Time Event Updates",
            f_description : "Instantly notify attendees of any changes or updates to the event schedule or details.",
        },
        {
            f_img :"https://adiyogitechnosoft.com/admin/assets/img/service/3a28d2920552dfcd4141b9b9b88561fb.jpg",
            f_title : "Secure Payment Gateway",
            f_description : "Ensure peace of mind for both organizers and attendees with a reliable and secure payment process.",
        },
        {
            f_img :"https://adiyogitechnosoft.com/admin/assets/img/service/3a28d2920552dfcd4141b9b9b88561fb.jpg",
            f_title : "Monitor Event Analytics",
            f_description : "Gain valuable insights from detailed analytics to enhance future events.",
        },
        {
            f_img :"https://adiyogitechnosoft.com/admin/assets/img/service/3a28d2920552dfcd4141b9b9b88561fb.jpg",
            f_title : "Event Management",
            f_description : " Simplify the planning and execution process with intuitive tools for seamless event management.",
        },
        {
            f_img :"https://adiyogitechnosoft.com/admin/assets/img/service/3a28d2920552dfcd4141b9b9b88561fb.jpg",
            f_title : "Eco-Friendly Certification",
            f_description : "Achieve green event certification by implementing sustainable practices and reducing environmental impact.",
        },
    ];
    const [fBlock] = useState(FeatureContent);
  return (
    <div className='mx-8 my-7'>
        <div className='mx-80 text-center'>
            <h2 className='px-40 text-5xl font-bold text-black'>Unlock Your Vendor Potential: Where Events Meet Success.</h2>
        </div>
        <div className='mt-7'>
            <h3 className='text-black font-bold text-2xl'>Our Features</h3>
        </div>
        <div className='mx-28 py-8'>
            <div className='flex flex-wrap justify-between gap-12'>
            {fBlock.map((item, index) => (
                <Block key={index} item={item} />
            ))}
            </div>
        </div>
    </div>
  )
}
