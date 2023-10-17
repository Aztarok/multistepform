"use client";

import { ubuntu } from '@/app/fonts'

const SecondStep = ({moving}) => {

    const handlePrev = (e) => {
        e.preventDefault();
        moving(1);
    }
    const handleNext = (e) => {
        e.preventDefault();
        moving(3);
    }
  return (
    <div className={`${ubuntu.className} flex items-center justify-center min-h-screen bg-gray-100`}>
        <div className="flex gap-[10%] p-4 bg-white rounded-xl shadow-lg w-[70vw] h-[40vw]">
            <div className="flex w-[30%] h-[100%] bg-red-50 rounded-md">
                <img src="./bg-sidebar-desktop.svg" alt="image for steps" className="flex-1 object-cover rounded-lg" />
            </div>
            <div className="flex flex-col flex-1 h-[85%] self-center bg-red-50">
                <p className="text-marineBlue text-[2vw] font-bold">Personal Info</p>
                <p className="text-marineBlue text-[1vw] font-medium">wow</p>
                
            </div>
        </div>
    </div>
  )
}

export default SecondStep;
