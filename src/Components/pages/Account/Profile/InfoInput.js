import React, {useState} from 'react';

const InfoInput = ({label, value, id, type = "text", initial}) => {
    const [editing, setEditing] = useState(false);
    const [inputValue, setInputValue] = useState(initial);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const getTextColor = () => {
        if (type === "checkbox" && initial === true) return 'green-text'
        else if (type === "checkbox" && initial === false) return 'red-text';
        return '';
    }

    return (
        <div id={id} className="info-field">
            <label>{label}:</label>
            <div className='input-area'>
                {
                    editing ?
                        <input type={type} value={inputValue} onChange={handleChange}/> :
                        <span className={getTextColor()}>{value}</span>
                }
                {/*TODO: Once the backend functionality for update is ready change this to update the user*/}
                <button
                    onClick={() => setEditing(!editing)}>{editing ? "Save" : (type === "text" ? "Edit" : "Change")}</button>
            </div>
        </div>
    )
}

export default InfoInput;