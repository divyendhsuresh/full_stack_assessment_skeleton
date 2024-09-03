import { EditUserModal } from "./EditUserModal";
import React, { useState } from "react";

const LableValue = ({ label, value }) => (
  <div className="flex flex:row gap-1">
    <p className="">{label}:</p>
    <p>{value}</p>
  </div>
);

const Card = ({ streetAddress, state, zip, sqft, beds, baths, listPrice }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="shadow-lg rounded-md p-2 flex-1 justify-between flex-col w">
      <div>
        <p className="font-bold">{streetAddress}</p>
        <LableValue label="List Price" value={`$${listPrice}`} />
        <LableValue label="State" value={state} />
        <LableValue label="Zip" value={zip} />
        <LableValue label="SqFt" value={sqft} />
        <LableValue label="Beds" value={beds} />
        <LableValue label="Baths" value={baths} />
      </div>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mt-4"
      >
        Edit Users
      </button>
      {isOpen && (
        <EditUserModal address={streetAddress} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Card;
