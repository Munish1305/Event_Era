import AnalysisIcon from '../assets/images/AnalysisIcon.svg'
import CreateIcon from '../assets/images/CreateIcon.svg'
import LogOutIcon from '../assets/images/LogOutIcon.svg'
export default function Steps() {
  return (
    <div className='mx-8 my-7'>
        <div className='mx-80 text-center'>
            <h2 className='px-32 text-5xl font-bold text-black'>Dive into Event Era, Where Getting Started is as Simple as a Click!</h2>
        </div>
        <div className='mt-7'>
            <h3 className='text-black font-bold text-2xl'>Steps to Follow </h3>
        </div>
        <div className='mx-28 py-8 flex flex-wrap justify-between'>
            <div className='w-[28%] flex flex-col text-center pb-5 px-5 hover:border-black'>
                <div className="p-10 mb-4 mx-auto rounded-full bg-grey-100">
                    <img src={LogOutIcon} alt="" className="mx-auto object-cover" />
                </div>
                <div className='pb-16'>
                    <h4 className='text-xl text-black font-bold pb-2'>Login</h4>
                    <p className='text-xl  text-black'> Access your organizer account securely to manage events and track analytics.</p>
                </div>
            </div>

            <div className='w-[28%] flex flex-col text-center pb-5 px-5 hover:border-black'>
                <div className="p-10 mb-4 mx-auto rounded-full bg-grey-100">
                    <img src={CreateIcon} alt="" className="mx-auto object-cover" />
                </div>
                <div className='pb-16'>
                    <h4 className='text-xl text-black font-bold pb-2'>Create Event</h4>
                    <p className='text-xl  text-black'> Easily set up your event details, including date, location, and ticketing options, to attract attendees.</p>
                </div>
            </div>

            <div className='w-[28%] flex flex-col text-center pb-5 px-5 hover:border-black'>
                <div className="p-10 mb-4 mx-auto rounded-full bg-grey-100">
                    <img src={AnalysisIcon} alt="" className="mx-auto object-cover" />
                </div>
                <div className='pb-16'>
                    <h4 className='text-xl text-black font-bold pb-2'>Monitor Analytics</h4>
                    <p className='text-xl  text-black'> Gain insights into attendee demographics, ticket sales, and engagement metrics to optimize future events effectively.</p>
                </div>
            </div>
        </div>
        <div className='text-center'>
            <button className='border rounded-full font-semibold text-primary-500 p-5 hover:text-white hover:bg-black'>Create Event Now</button>
        </div>
    </div>
  )
}
