import PropTypes from "prop-types";



const Input = ({ label, onInput, inputRef }) => {
    return (
        <>
            <div className="input_box">
                <span className="label">{label}</span>
                <input type="text" onChange={onInput} ref={inputRef} />
            </div>
        </>
    )
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    onInput: PropTypes.func,
    inputRef: PropTypes.object,
}



export default Input;