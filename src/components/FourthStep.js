"use client";

import { ubuntu } from '@/app/fonts'
import { useRouter } from 'next/navigation'

const SecondStep = ({moving}) => {

    const router = useRouter();
    const handlePrev = (e) => {
        e.preventDefault();
        moving(3);
    }
    const handleNext = (e) => {
        e.preventDefault();
        router.push("/success");
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
                <form className="flex flex-col mt-[2vw] flex-1">
                    <div className="flex flex-col text-marineBlue">
                        <label>Name</label>
                        <input />
                        <label>Email Address</label>
                        <input />
                        <label>Phone Number</label>
                        <input />
                    </div>
                    <div className="flex h-full">
                        <button onClick={e => handlePrev(e)} className="flex bg-white text-gray-500 mt-auto mr-auto rounded-lg py-[.5vw] px-[1vw]">Go Back</button>
                        <button onClick={e => handleNext(e)} className="flex bg-marineBlue mt-auto ml-auto rounded-lg py-[.5vw] px-[1vw]">Confirm</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default SecondStep;
