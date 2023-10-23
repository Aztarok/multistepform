import React, { useState, useEffect } from 'react';

const planData = [
  {
    id: 1,
    name: 'Arcade',
    imgSrc: './icon-arcade.svg',
    price: '$9',
    annualPrice: '$90',
    discount: '2 months free',
  },
  {
    id: 2,
    name: 'Advanced',
    imgSrc: './icon-advanced.svg',
    price: '$12',
    annualPrice: '$120',
    discount: '2 months free',
  },
  {
    id: 3,
    name: 'Pro',
    imgSrc: './icon-pro.svg',
    price: '$15',
    annualPrice: '$150',
    discount: '2 months free',
  },
];

const Plans = ({ plan }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const storedPlan = localStorage.getItem('selectedPlan');
    if (storedPlan) {
      setSelectedPlan(JSON.parse(storedPlan));
    }
  }, []);

  const handlePlanClick = (planId) => {
    setSelectedPlan(planId);
    localStorage.setItem('selectedPlan', JSON.stringify(planId));
  };
  

  return (
    <>
      <div className="grid flex-1 max-h-[12vw] mt-[2vw] gap-[1vw] grid-cols-3">
        {planData.map((planItem) => (
          <div
            key={planItem.id}
            className={`col-span-1 border-[.15vw] rounded-lg pl-[1vw] box-border ${
              selectedPlan === planItem.id ? 'border-purplishBlue' : 'border-lightGray'
            }`}
            onClick={() => handlePlanClick(planItem.id)}
          >
            <img src={planItem.imgSrc} alt={`${planItem.name} svg`} className="mt-[1.5vw]" />
            <div className={`${plan ? 'mt-[3vw]' : 'mt-[1.75vw]'}`}>
              <p className="text-[1.25vw] font-bold text-marineBlue">{planItem.name}</p>
              <p className="text-coolGray">
                {plan ? `${planItem.price}/mo` : `${planItem.annualPrice}/yr`}
              </p>
              {!plan ? (
                <p className="font-bold text-marineBlue">{planItem.discount}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Plans;
