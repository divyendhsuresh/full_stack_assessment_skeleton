import { useFetchAllHomes } from "../apis/useHome";
import { useState } from "react";
import Card from "./Card";
import DropDown from "./DropDown";
import LoadingState from "./LoadingState";
import EmptyState from "./EmptyState";

const DashBoard = () => {
  const [userName, setUserName] = useState(undefined);

  const { data: homes, isLoading: isHomeLoading } = useFetchAllHomes(userName);

  return (
    <div className="w-full h-screen p-2">
      <div className="flex justify-end">
        <DropDown setUserName={setUserName} userName={userName} />
      </div>
      {isHomeLoading ? (
        <LoadingState />
      ) : !homes || homes?.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-flow-row auto-rows-fr gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 ">
          {homes.map((home, index) => (
            <Card
              sqft={home.sqft}
              streetAddress={home.street_address}
              state={home.state}
              zip={home.zip}
              beds={home.beds}
              baths={home.baths}
              listPrice={home.list_price}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashBoard;
