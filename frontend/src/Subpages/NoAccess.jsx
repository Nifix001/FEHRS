import React from 'react'

const NoAccess = () => {
  return (
    <>
      <div className='w-[63.6vw] h-160.5 border-l pl-[12vw] ml-auto mr-auto relative flex items-center justify-center' >
            <div className=' flex flex-col items-center justify-center' >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}                   stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              <p> You do not have access to this page. Please contact the admin for more information. </p>
            </div>
      </div>
    </>
  )
}

export default NoAccess
