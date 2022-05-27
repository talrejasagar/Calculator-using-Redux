import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./CalSlice";

const Calculator = () => {
  const [input1, SetInput1] = useState("");
  const [input2, SetInput2] = useState("");
  const dispatch = useDispatch();
  const result = useSelector((state) => {
    return state.CalReducer.result;
  });

  return (
    <>
      <input
        type="number"
        value={input1}
        onChange={(e) => SetInput1(e.target.value)}
      />
      <input
        type="number"
        value={input2}
        onChange={(e) => SetInput2(e.target.value)}
      />
      <button onClick={() => dispatch(add({ input1, input2 }))}>Add</button>
      {result}
    </>
  );
};

export default Calculator;
