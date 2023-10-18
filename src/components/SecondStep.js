import ToggleSwitch from "./Toggle";
import { useState } from "react";


const SecondStep = () => {

    const [plan, setPlan] = useState(true);

    return (
        <>
            <div className="flex flex-col gap-2 mt-[2vw]">
                <p className="text-marineBlue text-[2vw] font-bold">Select your plan</p>
                <p className="text-marineBlue text-[1vw] font-medium">You have the option of monthly or yearly billing</p>
            </div>
            {plan ?  
                (<div className="grid flex-1 max-h-[12vw] mt-[2vw] gap-[1vw] grid-cols-3">
                    <div className="col-span-1 border-[.15vw] border-lightGray rounded-lg pl-[1vw]">
                        <img src="./icon-arcade.svg" alt="arcade svg" className="mt-[1.5vw]" />
                        <div className="mt-[3.5vw] ">
                            <p className="text-[1.25vw] font-bold text-marineBlue">Arcade</p>
                            <p className="text-coolGray">$9/mo</p>
                        </div>
                    </div>
                    <div className="col-span-1 border-[.15vw] border-lightGray rounded-lg pl-[1vw]">
                        <img src="./icon-advanced.svg" alt="arcade svg" className="mt-[1.5vw]" />
                        <div className="mt-[3.5vw] ">
                            <p className="text-[1.25vw] font-bold text-marineBlue">Advanced</p>
                            <p className="text-coolGray">$12/mo</p>
                        </div>
                    </div>
                    <div className="col-span-1 border-[.15vw] border-lightGray rounded-lg pl-[1vw]">
                        <img src="./icon-pro.svg" alt="arcade svg" className="mt-[1.5vw]" />
                        <div className="mt-[3.5vw] ">
                            <p className="text-[1.25vw] font-bold text-marineBlue">Pro</p>
                            <p className="text-coolGray">$15/mo</p>
                        </div>
                    </div>
                </div>) : (
                    <div className="grid flex-1 max-h-[12vw] mt-[2vw] gap-[1vw] grid-cols-3">
                    <div className="col-span-1 border-[.15vw] border-lightGray rounded-lg pl-[1vw]">
                        <img src="./icon-arcade.svg" alt="arcade svg" className="mt-[1.5vw]" />
                        <div className="mt-[1.75vw] ">
                            <p className="text-[1.25vw] font-bold text-marineBlue">Arcade</p>
                            <p className="text-coolGray">$90/yr</p>
                            <p className="font-medium text-marineBlue">2 months free</p>
                        </div>
                    </div>
                    <div className="col-span-1 border-[.15vw] border-lightGray rounded-lg pl-[1vw]">
                        <img src="./icon-advanced.svg" alt="arcade svg" className="mt-[1.5vw]" />
                        <div className="mt-[1.75vw] ">
                            <p className="text-[1.25vw] font-bold text-marineBlue">Advanced</p>
                            <p className="text-coolGray">$120/yr</p>
                            <p className="font-medium text-marineBlue">2 months free</p>
                        </div>
                    </div>
                    <div className="col-span-1 border-[.15vw] border-lightGray rounded-lg pl-[1vw]">
                        <img src="./icon-pro.svg" alt="arcade svg" className="mt-[1.5vw]" />
                        <div className="mt-[1.75vw] ">
                            <p className="text-[1.25vw] font-bold text-marineBlue">Pro</p>
                            <p className="text-coolGray">$150/yr</p>
                            <p className="font-medium text-marineBlue">2 months free</p>
                        </div>
                    </div>
                </div>
                )}
            <div className="grid flex-1 max-h-[3vw] mt-[2vw] mb-auto gap-[1vw] grid-cols-3">
                <div className="flex gap-[1vw] items-center justify-center col-span-3 bg-magnolia rounded-lg">
                    <p className={`${plan ? "text-marineBlue" : "text-gray-400"} font-bold`}>
                        Monthly
                    </p>
                    <ToggleSwitch plan={setPlan} />
                    <p className={`${!plan ? "text-marineBlue" : "text-gray-400"} font-bold`}>
                        Yearly
                    </p>
                </div>
                
            </div>
        </>
    );
}

export default SecondStep;
