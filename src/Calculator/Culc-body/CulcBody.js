import './CulcBody.css'

export default function CulcBody({state, onChange, onClearResult, onClearElement, onAllValue, accValue, onCalcSquared, onSquareRootOfNumber, onPlusOrMinus, onFraction, onPi}) {
    return (
        <div className="body-container">
            {
                state.map(val => {
                    return(
                        <button key={val.id} className="body-item" value={val.value} onClick={(e) => {
                            e.preventDefault();
                            switch(val.dataType){
                                case "input":
                                    onChange(e.target.value);
                                    break;
                                case "operator":
                                    if(accValue.length !== 0) {
                                        onChange(e.target.value);
                                    }
                                    break;
                                case "deleteCompletely":
                                    onClearResult();
                                    break;
                                case "clearOneElem":
                                    onClearElement();
                                    break;
                                case "xSquared":
                                    onCalcSquared();
                                    break;
                                case "squareRootOfNumber":
                                    onSquareRootOfNumber();
                                    break;
                                case "plusOrMinus":
                                    onPlusOrMinus();
                                    break;
                                case "fraction": 
                                    onFraction();
                                    break;
                                case "pi":
                                    onPi(e.target.value);
                                    break;
                                default:  onAllValue(e.target.value);
                            }
                        }}>{val.value}</button>
                    )
                })
            }
        </div>  
    );
}