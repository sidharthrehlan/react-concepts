import React from "react";

function LanguageSelector(props) {
  const onChangeHandler = (e) => {
    props.langChange(e.target.value);
  };
  return (
    <div>
      <select name="lang" id="lang" onChange={onChangeHandler}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
