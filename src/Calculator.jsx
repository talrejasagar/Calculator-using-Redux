import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, multiply, substract, divide, clear } from "./CalSlice";

const Calculator = () => {
  const [input1, SetInput1] = useState("");
  const [input2, SetInput2] = useState("");
  const dispatch = useDispatch();
  const result = useSelector((state) => {
    return state.CalReducer.result;
  });
  const clearState = () => {
    SetInput1("");
    SetInput2("");
    dispatch(clear());
  };

  return (
    <>
      <input
        type="number"
        value={input1}
        placeholder="Please enter Number"
        onChange={(e) => SetInput1(e.target.value)}
      />
      <br />
      <input
        type="number"
        value={input2}
        placeholder="Please enter Number"
        onChange={(e) => SetInput2(e.target.value)}
      />
      <br />
      <h1>{result}</h1>
      <button onClick={() => dispatch(add({ input1, input2 }))}>Add</button>
      <button onClick={() => dispatch(substract({ input1, input2 }))}>
        Substract
      </button>
      <button onClick={() => dispatch(multiply({ input1, input2 }))}>
        Multiply
      </button>
      <button onClick={() => dispatch(divide({ input1, input2 }))}>
        Divide
      </button>
      <button onClick={clearState}>Clear</button>
    </>
  );
};

export default Calculator;
