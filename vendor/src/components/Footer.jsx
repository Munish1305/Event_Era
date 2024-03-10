import Rights from '../assets/images/copyright.svg'
export default function Footers() {
  return (
    <div className='items-center py-6 bg-grey-100'>
      <div className='flex justify-center'>
        <img src={Rights} alt="copyright" className='pr-2'></img>
        <h4 className='text-primary-700 pt-1 text-xl'> Copyright 2024. All rights reserved</h4>
      </div>
    </div>
  )
}
