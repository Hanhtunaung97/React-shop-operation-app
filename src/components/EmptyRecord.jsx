import React, { useContext } from "react";
import { dataContext } from "../contexts/DataContext";

const EmptyRecord = () => {
    const{toggleCreateDrawer}=useContext(dataContext)
    const handleBtn=() => {
        toggleCreateDrawer();
    }
  return (
    <tr className=" shadow odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        colSpan={5}
        scope="row"
        className="px-6 py-4 text-center text-violet-500 whitespace-nowrap dark:text-white "
      >
        <span className=" font-semibold">There is no Play Station.</span>{" "}
        <button onClick={handleBtn} className=" text-violet-500 border border-violet-400 hover:bg-violet-100 hover:border-violet-100 focus:ring-4 focus:ring-violet-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800">
          Add New One
        </button>
      </th>
    </tr>
  );
};

export default EmptyRecord;
