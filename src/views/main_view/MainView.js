import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { StyledMain } from "./MainView.styled";
import { MyCard } from "components";

const MainView = () => {
  // I. Get & Create Data
  const { pathname } = useLocation();
  const mems_data = useSelector((state) => state.memReducer);
  const [state, setState] = useState([]);
  // II. Filter Fake DB
  const getData = useCallback(
    (data) => {
      switch (pathname) {
        case "/hot":
          return data.filter(
            ({ upvotes, downvotes }) => upvotes - downvotes > 5
          );
        case "/regular":
          return data.filter(
            ({ upvotes, downvotes }) => upvotes - downvotes <= 5
          );
        default:
          return data;
      }
    },
    [pathname]
  );
  // III. Mount Get Data Func
  useEffect(() => {
    const results = getData(mems_data);
    setState(results);
  }, [getData, mems_data]);
  // IV. Return Main Component
  return (
    <StyledMain>
      {state.map((mem_data) => {
        const { uuid } = mem_data;
        return <MyCard key={uuid} data={mem_data} />;
      })}
    </StyledMain>
  );
};

export default MainView;
