import React from "react";
import tree from "../../data/storePreloader.json";
import { useDispatch } from "react-redux";
import { MBACourseLock } from "../../features/MBASlice/MBASlice.js";
import { MSCourseLock } from "../../features/MSSlice/MSSlice.js";
import {
  screenLockCourse,
  screenNext,
} from "../../features/screenProgressSlice/screenProgressSlice";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";

function WelcomeScreen() {
  const courseList = Object.keys(tree);
  const [selected, setSelected] = React.useState("");
  const dispatch = useDispatch();
  function handleChange(event) {
    setSelected(event.target.value);
  }
  function handleSubmit() {
    dispatch(MBACourseLock({ payload: Number(selected === "MBA") }));
    dispatch(MSCourseLock({ payload: Number(selected === "MS") }));
    dispatch(screenLockCourse({ course: selected }));
    dispatch(screenNext());
  }
  return (
    <div className='contentWrapper'>
      <div className='headingWrapper'>
        Welcome to the course finder website powered by Edlighten!
      </div>
      {courseList.map((course, ind) => {
        return (
          <>
            <div className='radioPair'>
              <Radio
                checked={selected === course}
                value={course}
                id={ind}
                onChange={handleChange}
              />
              <span className='radioLabel'>{course}</span>
            </div>
          </>
        );
      })}
      <Button variant='contained' color='success' onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default WelcomeScreen;
