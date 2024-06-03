import React, { useEffect, useState } from "react";

const MultiSelect = ({ data, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    onChange(selectedOptions);
  }, [selectedOptions]);

  return (
    <div>
      {data.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={option.value}
            checked={selectedOptions.includes(option.value)}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedOptions([...selectedOptions, option.value]);
              } else {
                setSelectedOptions(
                  selectedOptions.filter(
                    (selectedOption) => selectedOption !== option.value
                  )
                );
              }
            }}
          />
          <label>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default MultiSelect;
