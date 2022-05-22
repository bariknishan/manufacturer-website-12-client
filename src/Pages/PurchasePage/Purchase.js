import React, { useState } from 'react';
import AvailableItems from './AvailableItems';
import PurchaseBanner from './PurchaseBanner';



const Purchase = () => {
    const [date ,setDate]= useState( new Date())

    return (
        <div>
          <PurchaseBanner date={date} setDate={setDate}></PurchaseBanner>
          <AvailableItems date={date}></AvailableItems>

        </div>
    );
};

export default Purchase;