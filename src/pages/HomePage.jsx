import React from 'react'

const HomePage = () => {
  return (
    <div className='poppins-regular'>
      <div>
        <p className="bg-[#ff63fc] text-center py-5 text-white text-lg">Try summarizing now</p>
        {/* <input type="file" name="" id="" /> */}
      </div>
      <div className='flex md:flex-row flex-col justify-center items-center'>
        <div className="bg-white rounded-lg p-2 w-[200px] h-[200px] flex flex-col gap-3 m-5 shadow-2xl">
          <h2 className='font-bold text-lg'>Get summarized materials</h2>
          <p>Upload documents or images to get summary. </p>
        </div>
        <div className="bg-white rounded-lg p-2 w-[200px] h-[200px] flex flex-col gap-3 m-5 shadow-2xl">
          <h2 className='font-bold text-lg'>Generate Q/A from materials</h2>
          <p>Upload documents or images to generate possible questions and answers </p>
        </div>
        <div className="bg-white rounded-lg p-2 w-[200px] h-[200px] flex flex-col gap-3 m-5 shadow-2xl">
          <h2 className='font-bold text-lg'>Get summarized materials</h2>
          <p>Upload documents or images to get summary. </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage