import { useState } from 'react';

const ToggleSwitch = ({plan}) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
    plan(isToggled);
  };

  return (
    <div className="relative flex items-center w-[4vw] h-[2vw] rounded-full cursor-pointer bg-marineBlue" onClick={toggleSwitch}>
      
      <div
        className="w-[1.25vw] h-[1.25vw] transition-transform duration-300 ease-in-out transform pointer-cursor rounded-full bg-white flex items-center justify-center "
        style={{
          transform: isToggled ? 'translateX(180%)' : 'translateX(40%)',
        }}
      >
        {/* You can add any content here, or leave it empty for a simple white circle */}
      </div>
    </div>
  );
};

export default ToggleSwitch;
