import React, { useEffect, useState } from "react";

const MultiSelect = ({ data, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    onChange(selectedOptions);
  }, [selectedOptions]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        height: "300px", // Cố định chiều cao
        overflow: "auto", // Tự động cuộn nếu nội dung dài hơn chiều cao cố định
      }}
    >
      <h3
        style={{
          fontSize: "16px",
          paddingLeft: "10px",
          fontWeight: "600",
          marginBottom: "10px",
          color: "#565656",
        }}
      >
        Bạn bè của bạn
      </h3>
      {data.map((option, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
            paddingLeft: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800&h=533&crop=1"
              alt="avatar"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "10px",
              }}
            />
            <label>{option.label}</label>
          </div>
          <input
            type="checkbox"
            value={option.value}
            checked={selectedOptions.includes(option.value)}
            style={{
              width: "20px",
              height: "20px",
              marginRight: "10px",
            }}
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
        </div>
      ))}
    </div>
  );
};

export default MultiSelect;
