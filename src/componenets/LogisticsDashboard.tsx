import React, { useState } from 'react';

import '../App.css';
import WarehouseInventory from './WarehouseInventory';
import DeliveryStatus from './DeliveryStatus';
import NewTruck from './NewTruck';
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/matchers';
import { exit } from 'process';

const LogisticsDashboard: React.FC = () => {
  const [warehouseItems, setWarehouseItems] = useState<number>(100);
  const [isTruckLeft, setIsTruckLeft] = useState<boolean>(false);

  const handleTruckDeparture = () => {
    <LogisticsDashboard />
    const items = prompt("Enter no of items");
    let noOfItems = 0;
    if(items === null){
    }
    else{
       noOfItems = parseFloat(items);
    }
    if(noOfItems<5 || noOfItems > 20)
    {
      alert("This many items not allowed");
      return;
    }
    if(warehouseItems < 21){
      alert("This many items should always be kept in warehouse");
      return;
    }
    setIsTruckLeft(true);
    setWarehouseItems(warehouseItems - noOfItems );

  };

  const handleNewTruck = () => {
    setIsTruckLeft(false);
    setWarehouseItems(warehouseItems);
  }

  return (
    <div className="dashboard">
      <h1>Logistics Dashboard</h1>
      <div className="dashboard-content">
        <WarehouseInventory itemCount={warehouseItems} />
        <DeliveryStatus isTruckLeft={isTruckLeft} onTruckDeparture={ handleTruckDeparture }/>
        <NewTruck isTruckLeft = {isTruckLeft} onAddNewTruck={handleNewTruck}/>
      </div>
    </div>
  );
};

export default LogisticsDashboard;
