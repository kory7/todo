import React from "react";
import Activity from "./Activity";
const List = ({ activities }) => {
  return (
    <div>
      {activities.map((act, i) => {
        return <Activity element={act} key={i} />;
      })}
    </div>
  );
};

export default List;
