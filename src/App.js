import './App.css';
import { useState, useMemo } from 'react';
import  CulcBody  from './Calculator/Culc-body/CulcBody';
import { CulcHeader } from './Calculator/Culc-header/CulcHeader';


function App() {
  const [accValue, setAccValue] = useState("");
  const [screenValue, setScreenValue] = useState("0");
  const state = useMemo(() => {
    return [{
      id: Math.random(),
      value: "π",
      dataType: "pi"
    }, {
      id: Math.random(),
      value: "CE",
      dataType: "deleteCompletely"
    }, {
      id: Math.random(),
      value: "C",
      dataType: "deleteCompletely"
    }, {
      id: Math.random(),
      value: "X",
      dataType: "clearOneElem"
    }, {
      id: Math.random(),
      value: "1/x",
      dataType: "fraction"
    }, {
      id: Math.random(),
      value:"x^​2",
      dataType: "xSquared"
    }, {
      id: Math.random(),
      value: "√",
      dataType: "squareRootOfNumber",
    }, {
      id: Math.random(),
      value: "/",
      dataType: "operator"
    }, {
      id: Math.random(),
      value: 7,
      dataType: "input"
    }, {
      id: Math.random(),
      value: 8,
      dataType: "input"
    }, {
      id: Math.random(),
      value: 9,
      dataType: "input"
    }, {
      id: Math.random(),
      value: "*",
      dataType: "operator"
    }, {
      id: Math.random(),
      value: 4,
      dataType: "input"
    }, {
      id: Math.random(),
      value: 5,
      dataType: "input"
    }, {
      id: Math.random(),
      value: 6,
      dataType: "input"
    }, {
      id: Math.random(),
      value: "-",
      dataType: "operator"
    }, {
      id: Math.random(),
      value: "1",
      dataType: "input"
    }, {
      id: Math.random(),
      value: "2",
      dataType: "input"
    }, {
      id: Math.random(),
      value: "3",
      dataType: "input"
    }, {
      id: Math.random(),
      value: "+",
      dataType: "operator"
    }, {
      id: Math.random(),
      value: "+/-",
      dataType: "plusOrMinus"
    }, {
      id: Math.random(),
      value: 0,
      dataType: "input"
    }, {
      id: Math.random(),
      value: ".",
      dataType: "operator"
    }, {
      id: Math.random(),
      value: "=",
      dataType: "equal"
    }]
  }, []);

  return (
    <div className="App">
      <CulcHeader accValue={accValue} screenValue={screenValue}/>
      <CulcBody state={state} accValue={accValue} 
        onChange={(number) => {     
          const limit = accValue.length < 40; 
          limit ? setAccValue(accValue + number) : setAccValue(accValue, alert("You can't use more than 40 characters"))
          setScreenValue("");
        }}
        onClearResult={() => {
          setAccValue("");
          setScreenValue("0");
        }}
        onClearElement={() => {
          setAccValue(accValue.slice(0, -1));
        }}
        onAllValue={() => {
          try {
            setAccValue(eval(accValue));
          } catch (err) {
            console.log(err);
          }
        }}
        onCalcSquared={() => {
          setAccValue(accValue * accValue);
        }}
        onSquareRootOfNumber={() => {
          setAccValue(Math.sqrt(accValue));
        }}
        onPlusOrMinus={() => {
          setAccValue(accValue ? -accValue : accValue);
        }}
        onFraction={() => {
          setAccValue(1/accValue);
        }}
        onPi={() => {
          setAccValue(3.1415926536 + accValue);
        }}
      />
    </div>
  );
}

export default App;
