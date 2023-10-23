import ToggleSwitch from "./Toggle";
import { useState } from "react";
import Plans from "./Plans";


const SecondStep = () => {

    const [plan, setPlan] = useState(true);

    return (
        <>
            <div className="flex flex-col gap-2 mt-[2vw]">
                <p className="text-marineBlue text-[2vw] font-bold">Select your plan</p>
                <p className="text-marineBlue text-[1vw] font-medium">You have the option of monthly or yearly billing</p>
            </div>
                <Plans plan={plan}/>
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
