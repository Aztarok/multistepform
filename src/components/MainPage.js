"use client";

import { ubuntu } from '@/app/fonts'
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { useState } from "react";

const MainPage = () => {
    const [change, setChange] = useState(1);

    return (
        <div>
            {change === 1 ? <FirstStep moving={setChange} /> : null}
            {change === 2 ? <SecondStep moving={setChange} /> : null}
        </div>
    );
}

export default MainPage;
