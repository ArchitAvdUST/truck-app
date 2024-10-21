interface NewTruck {
    isTruckLeft: boolean;
    onAddNewTruck: () => void;
}

const NewTruck: React.FC<NewTruck> = ({ isTruckLeft, onAddNewTruck }) => {
    return (
      <div >
        {isTruckLeft && <button onClick={onAddNewTruck}>Add new truck</button>}
      </div>
    );
};

export default NewTruck;