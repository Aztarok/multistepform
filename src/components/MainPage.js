"use client";

import { ubuntu } from '@/app/fonts'
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MainPage = () => {
    const [change, setChange] = useState(1);
    const router = useRouter();

    const handleNext = (e) => {
        e.preventDefault();
        setChange(prev => prev + 1);
    }
    const handlePrev = (e) => {
        e.preventDefault();
        setChange(prev => prev - 1);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/success");
    }

    return (
        <div className={`${ubuntu.className} flex items-center justify-center min-h-screen bg-gray-100`}>
            <div className="flex gap-[10%] p-4 bg-white rounded-xl shadow-lg w-[70vw] h-[40vw]">
                <div className="flex w-[30%] h-[100%] bg-red-50 rounded-md">
                    <img src="./bg-sidebar-desktop.svg" alt="image for steps" className="object-cover w-full h-full rounded-lg" />
                </div>
                <div className={`${ubuntu.className} flex flex-col flex-1  max-w-[35vw] min-h-[35vw] self-center`}>
                    {change === 1 ? <FirstStep /> : null}
                    {change === 2 ? <SecondStep /> : null}
                    {change === 3 ? <ThirdStep /> : null}
                    {change === 4 ? <FourthStep /> : null}
                    <div className="flex h-full">
                        {change !== 1 ? <button onClick={e => handlePrev(e)} className="flex bg-white text-gray-500 font-medium mt-auto mr-auto rounded-lg py-[.5vw] px-[1vw]">Go Back</button> : null}
                        {change < 4 && change > 0 ? <button onClick={e => handleNext(e)} className="flex bg-marineBlue font-medium text-white mt-auto ml-auto rounded-lg py-[.5vw] px-[1vw]">Next Page</button> : null}
                        {change > 3 ? <button onClick={e => handleSubmit(e)} className="flex bg-marineBlue font-bold text-white mt-auto ml-auto rounded-lg py-[.5vw] px-[1vw]">Confirm</button> : null}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default MainPage;
