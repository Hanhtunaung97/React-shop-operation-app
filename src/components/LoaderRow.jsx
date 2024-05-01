import React from "react";

const LoaderRow = () => {
  return (
    <tr className=" shadow animate-pulse odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
      >
        <div className="h-3 bg-violet-300 rounded-full dark:bg-violet-600 w-full" />
      </th>
      <td className="px-6 py-4 editable-cell record-title ">
        <div className="h-3 bg-violet-200 rounded-full dark:bg-violet-600 w-full" />
      </td>
      <td className="px-6 py-4 editable-cell record-short-name">
        <div className="h-3 bg-violet-300 rounded-full dark:bg-violet-600 w-full" />
      </td>
      <td className="px-6 py-4 editable-cell record-fee text-end">
        <div className="h-3 bg-violet-200 rounded-full dark:bg-violet-600 w-full" />
      </td>
      <td className="px-6 py-4 text-end whitespace-nowrap flex justify-end gap-2">
        <div className="h-6 bg-violet-300 rounded dark:bg-violet-600 w-8" />
        <div className="h-6 bg-violet-200 rounded dark:bg-violet-600 w-8" />
      </td>
    </tr>
  );
};

export default LoaderRow;
