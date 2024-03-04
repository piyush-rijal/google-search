import React from "react";
import { ResultContext } from "../contexts/ResultContextProvider";
import { useContext, useEffect } from "react";
import SelectBar from "./SelectBar";
import { useDebounce } from "use-debounce";
function Search() {
  const { searchTerm, setSearchTerm } = useContext(ResultContext);
  const [debouncedValue] = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <div>
        <input
          value={searchTerm}
          onChange={handleOnChange}
          placeholder="haha"
          className=" dark:border-grey border-[3px] border-primary rounded-full px-2 py-1 w-[30%] "
        />
      </div>
      <SelectBar />
    </>
  );
}

export default Search;
