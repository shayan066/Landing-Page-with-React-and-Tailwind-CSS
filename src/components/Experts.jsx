import Image from '../assets/image1.jpg';

const Experts = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto p-3 my-10 md:grid grid-cols-3">
        <div className=" col-span-1 md:w-[100%]">
          <img src={Image} alt="" />
        </div>
        <div className=" col-span-2 flex flex-col justify-center items-center">
          <h1 className='text-[#00df9a] font-semibold text-2xl m-3 '>Learn From Experts</h1>
          <p className='m-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eligendi itaque consequuntur obcaecati, exercitationem voluptate quae quibusdam odio cum nemo.</p>
          <button className='bg-black text-white p-3 rounded-xl m-3 md:w-[20%]'>Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Experts;
