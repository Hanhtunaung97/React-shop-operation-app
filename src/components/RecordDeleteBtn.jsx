import React, { useContext, useState } from "react";
import { dataContext } from "../contexts/DataContext";
import Swal from "sweetalert2";

const RecordDeleteBtn = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { deleteConsole } = useContext(dataContext);
  const handelDeleteBtn = async () => {
    setIsLoading(true);
    const res = await fetch("http://localhost:5173/api/consoles/" + id, {
      method: "DELETE",
    });
    setIsLoading(false);
    if (res.status === 204) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#5B21B6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        deleteConsole(id);
        if (result.isConfirmed) {
          const Toast = Swal.mixin({
            toast: true,
            position: "bottom-start",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Record Deleted successfully!",
          });
        }
      });
    }
  };
  return (
    <button
      onClick={handelDeleteBtn}
      disabled={isLoading}
      type="button"
      className="record-delete-btn disabled:opacity-75 disabled:pointer-events-none group px-3 py-2 text-xs font-medium text-center text-violet-700 bg-violet-100 rounded-lg hover:bg-violet-200 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
    >
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-3 h-3 pointer-events-none block group-disabled:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-3 h-3 hidden group-disabled:block animate-spin"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    </button>
  );
};

export default RecordDeleteBtn;
