const SecondStep = () => {    
    return (
        <>
            <div className="flex flex-col gap-2 mt-[2vw]">
                <p className="text-marineBlue text-[2vw] font-bold">Personal Info</p>
                <p className="text-marineBlue text-[1vw] font-medium">Please provide your name, email address, and phone number.</p>
            </div>
            <form className="flex flex-col mt-[2vw] flex-1">
                <div className="flex flex-col text-marineBlue gap-[1.5vw]">
                    <div className="">
                        <label>Name</label>
                        <input placeholder="e.g. Stephen King" className="w-full p-2 font-medium placeholder-black border-2 rounded-md outline-none border-purplishBlue text-marineBlue text-md" />
                    </div>
                    <div>
                        <label>Name</label>
                        <input placeholder="e.g. Stephen King" className="w-full p-2 font-medium placeholder-black border-2 rounded-md outline-none border-purplishBlue text-marineBlue text-md" />
                    </div>
                    <div>
                        <label>Name</label>
                        <input placeholder="e.g. Stephen King" className="w-full p-2 font-medium placeholder-black border-2 rounded-md outline-none border-purplishBlue text-marineBlue text-md" />
                    </div>
                </div>
            </form>
        </>
    );
}

export default SecondStep;
