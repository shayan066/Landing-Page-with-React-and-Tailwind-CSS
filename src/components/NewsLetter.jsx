
const NewsLetter = () => {
  return (
    <div className='bg-[#2699fb] w-full p-4'>
      <div className='max-w-[1280px] md:flex mx-auto justify-between py-[50px]'>
        <div className='mx-3'>
          <h1 className='md:text-[40px] font-bold text-white my-2 '>Want to learn latest I.T Skills?</h1>
          <span className='md:text-xl text-white'>Signup to our newsletter and stay up to date.</span>
        </div>
        <div className='mx-auto mt-5 '>
          <input className='rounded-xl bg-slate-300 p-3 m-3  ' type="text" placeholder='Enter Email' />
          <button className='bg-black text-white p-3 rounded-xl m-3 '>Get Started</button>
          <br />
          <p className='text-white md:text-xl mt-1 px-3'>
            We are care about the protection of your data. Read our <br />  <span className="text-black">Privacy Policy.</span>
          </p>

        </div>
      </div>
    </div>
  )
}

export default NewsLetter