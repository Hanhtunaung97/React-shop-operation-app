import React, { useContext } from "react";
import RecordGroup from "./RecordGroup";
import { dataContext } from "../contexts/DataContext";

const TableGroup = () => {
    const {toggleCreateDrawer}=useContext(dataContext);
    const handleCreateDrawerBtn=() => {
        toggleCreateDrawer();
    }
  return (
    <section>
      {/* buttons */}
      <div className="flex justify-between items-center mb-5">
        <button
        onClick={handleCreateDrawerBtn}
          className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800"
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          Add New Play Station
        </button>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-violet-500 dark:text-violet-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="searchInput"
            className="bg-violet-50 border border-violet-300 text-violet-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-10 p-2.5  dark:bg-violet-700 dark:border-violet-600 dark:placeholder-violet-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
            placeholder="Search"
          />
        </div>
      </div>
      {/* table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-violet-700 uppercase bg-violet-50 dark:bg-violet-700 dark:text-violet-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Short Name
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Fee
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody id="recordGroup">
            <RecordGroup />
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableGroup;
