import React, { useContext, useEffect, useState } from "react";
import Record from "./Record";
import { dataContext } from "../contexts/DataContext";
import LoaderRow from "./LoaderRow";

const RecordGroup = () => {
  const { consoles, setConsole } = useContext(dataContext);
  const [ready, setReady] = useState(false);
  const loaderRowArray = Array.from({ length: 5 }, (_, index) => index);
  useEffect(() => {
    const fetchConsoles = async () => {
      const res = await fetch("http://localhost:5173/api/consoles");
      const json = await res.json();
      setConsole(json);
      setReady(true);
    };
    fetchConsoles();
  }, []);
  return (
    <>
      {!ready && loaderRowArray.map((el, index) => <LoaderRow key={index} />)}
      {consoles.map((console) => (
        <Record key={console.id} console={console} />
      ))}
    </>
  );
};

export default RecordGroup;
