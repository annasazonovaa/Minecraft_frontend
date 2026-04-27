
const InputField = ({ type = "text", placeholder, value, onChange, error }) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error ? "input error" : "input"}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default InputField;