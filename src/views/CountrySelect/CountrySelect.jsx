import React from "react";
import { useDispatch } from "react-redux";

import { Checkbox, Button } from "@mui/material";
import { countriesAdd } from "../../features/countrySlice/countrySlice";
import { screenNext } from "../../features/screenProgressSlice/screenProgressSlice";

const countryList = ["USA", "UK", "Canada", "Europe"];

function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele !== value;
  });
}

function CountrySelect() {
  const [countries, setCountries] = React.useState([]);
  const dispatch = useDispatch();

  function handleChange(event) {
    if (event.target.checked) {
      let tempArray = [...countries];
      tempArray.push(event.target.name);
      setCountries(tempArray);
    } else {
      let tempArray = [...countries];
      tempArray = arrayRemove(tempArray, event.target.name);
      setCountries(tempArray);
    }
  }

  function handleSubmit(event) {
    dispatch(countriesAdd({ countries: countries }));
    dispatch(screenNext());
  }

  return (
    <div className='contentWrapper'>
      <div className='headingWrapper'>
        Hi select the country of your choice.
      </div>
      <div className='optionWrapper'>
        {countryList.map((country, ind) => {
          return (
            <div className='optionPair' id={ind}>
              <Checkbox id={ind} onChange={handleChange} name={country} />{" "}
              {country}
            </div>
          );
        })}
      </div>
      <Button color='success' onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default CountrySelect;
