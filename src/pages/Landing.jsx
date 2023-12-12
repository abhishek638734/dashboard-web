import React from 'react';

import bg from '../data/bg.jpg';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

const DropDown = ({ currentMode }) => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
      <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
    </div>
  );

const Landing = () => {

  const { setSubmitButtonClicked } = useStateContext();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Perform any additional logic you need
    setSubmitButtonClicked(true);

    navigate('./Dashboard');
  };
  return (

    

    <div className="relative p-0">
    <div className="absolute inset-0 bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bg})` }}/>
    <div className="relative">

      {/* please change below div to the form when writing login logic in backend */}
    <div className='flex items-center flex-col relative top-40'>
      <div>
      <label htmlFor="" className='text-white font-medium text-base'>Email : </label>
      <input type="email" className='border-none outline-none px-2 py-1 box-border shadow-md rounded-md bg-white' />
      </div>
     <button onClick={handleButtonClick} className='my-5 bg-blue-500 focus:outline-none rounded-md px-4 py-1 cursor-pointer text-white'>Submit</button>   {/* submit button */}
    </div>

    </div>
    </div>
  )
}

export default Landing;
