import React from "react";

const EditDrawer = () => {
  return (
    <div
      id="recordEditDrawer"
      className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-violet-800 translate-x-full"
      tabIndex={-1}
      aria-labelledby="drawer-right-label"
      aria-modal="true"
      role="dialog"
    >
      <h5
        id="drawer-right-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-violet-500 dark:text-violet-400"
      >
        <svg
          className="w-4 h-4 me-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        Edit New Courses
      </h5>
      <button
        type="button"
        data-drawer-hide="recordEditDrawer"
        aria-controls="recordEditDrawer"
        className="text-violet-400 bg-transparent hover:bg-violet-200 hover:text-violet-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-violet-600 dark:hover:text-white"
      >
        <svg
          className="w-3 h-3 pointer-events-none"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <form  id="editCourseForm">
        <div className="mb-5">
          <input type="text" className="hidden" name="id" id="editCourseId" />
        </div>
        <div className="mb-5">
          <label
            htmlFor="editCourseTitle"
            className="block mb-2 text-sm font-medium text-violet-900 dark:text-white"
          >
            Course Title
          </label>
          <input
            type="text"
            id="editCourseTitle"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500 disabled:opacity-75"
            placeholder="eg. Premium Ui Design"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="editShortName"
            className="block mb-2 text-sm font-medium text-violet-900 dark:text-white"
          >
            ShortName
          </label>
          <input
            type="text"
            id="editShortName"
            name="short_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500 disabled:opacity-75"
            placeholder="eg.BUD"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="editFee"
            className="block mb-2 text-sm font-medium text-violet-900 dark:text-white"
          >
           Fee
          </label>
          <input
            type="number"
            id="editFee"
            name="fee"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500 disabled:opacity-75"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center ">
            <input
              id="default-checkbox"
              type="checkbox"
              defaultValue
              className="w-4 h-4 text-violet-600 bg-gray-100 border-gray-300 rounded focus:ring-violet-500 dark:focus:ring-violet-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm  text-violet-900 dark:text-gray-300 "
            >
             AutoClose after save !
            </label>
          </div>
          <button
            type="submit"
            className="group flex items-center gap-2 text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800 disabled:opacity-75 disabled:before:w-4 disabled:before:h-4 disabled:before:rounded-full disabled:before:border-2 disabled:before:border-violet-100 disabled:before:border-l-violet-400 disabled:before:animate-spin"
          >
            <span className="hidden group-disabled:inline">loading..</span>
            <span className="inline group-disabled:hidden">Update</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDrawer;
