import './CulcHeader.css';

export function CulcHeader({ accValue, screenValue}) {
    return(
        <div className="header-container" >
            <span className='header-item'>{accValue}{screenValue}</span>
        </div>
    );
}
