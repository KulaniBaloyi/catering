import React from 'react'

const ContactPage = () => {
    
  return (
    <div className='m-auto w-[90%] max-w-5xl'>
        <section className='border p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10'>
            <div className='w-full flex flex-col col-span-1'>
                <label>Name*</label>
                <input type='text' className='outline-none focus:outline-none border p-3'/>
            </div>
            <div className='flex flex-col'>
                <label>Email*</label>
                <input type='email' className='outline-none focus:outline-none border p-3'/>
            </div>
            <div className='flex flex-col'>
                <label>Phone</label>
                <input type='text' className='outline-none focus:outline-none border p-3'/>
            </div>
            <div className='flex flex-col'>
                <label>Venue</label>
                <input type='text' className='outline-none focus:outline-none border p-3'/>
            </div>
            <div className='flex flex-col'>
                <label>Event Type</label>
                <input type='text' className='outline-none focus:outline-none border p-3'/>
            </div>
            <div className='flex flex-col'>
                <label>Date</label>
                <input type='text' placeholder='mm/dd/yyyy' className='outline-none focus:outline-none border p-3'/>
            </div>
            <div className='flex flex-col'>
                <label>Number of guests</label>
                <input type='text' className='outline-none focus:outline-none border p-3'/>
            </div>
            <div className='flex flex-col'>
                <label>How did you hear about us?</label>
                <input type='text' className='outline-none focus:outline-none border p-3'/>
            </div>
            <div className='col-span-2 flex flex-col '>
                <label>Message*</label>
                <textarea name="input_4" id="input_1_4" className="border p-3" rows={10} cols={50}></textarea>
            </div>
        </section>
    </div>
  )
}

export default ContactPage