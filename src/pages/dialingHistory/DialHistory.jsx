import React from "react";
import SideBarEvents from "../../components/sideBarEvents/SideBarEvents";
import EventsRight from "../../components/Events/Events";
import "./dialhistory.scss";

export default function DialHistory() {
  // Sample data for demonstration
  const dialingHistoryData = [
    //  ngày số giải thưởng trạng thái kết quả
    {
      date: "01/01/2021",
      number: "0123456",
      prize: "Lamborghini",
      status: "5000/6000",
      percent: "83%",
      time: "10:00",
      result: "KHÔNG TRÚNG",
    },
    {
      date: "01/01/2021",
      number: "0123456",
      prize: "Lamborghini",
      status: "5000/6000",
      percent: "83%",
      time: "10:00",
      result: "TRÚNG THƯỞNG",
    },
    {
      date: "01/01/2021",
      number: "0123456",
      prize: "Lamborghini",
      status: "5000/6000",
      percent: "83%",
      time: "10:00",
      result: "CHỜ KẾT QUẢ",
    },
    {
      date: "01/01/2021",
      number: "0123456",
      prize: "Lamborghini",
      status: "5000/6000",
      percent: "83%",
      time: "10:00",
      result: "CHỜ KẾT QUẢ",
    },
    {
      date: "01/01/2021",
      number: "0123456",
      prize: "Lamborghini",
      status: "5000/6000",
      percent: "83%",
      time: "10:00",
      result: "CHỜ KẾT QUẢ",
    },
    {
      date: "01/01/2021",
      number: "0123456",
      prize: "Lamborghini",
      status: "5000/6000",
      percent: "83%",
      time: "10:00",
      result: "CHỜ KẾT QUẢ",
    },
  ];

  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBarEvents />
        <div className="dialinghistory">
          <div className="dialinghistory__wrapper">
            <div className="dialinghistory__header">
              <h3>Lịch sử quay số</h3>
            </div>
            <div className="dialinghistory__table">
              <table>
                <thead>
                  <tr>
                    <th>Ngày</th>
                    <th>Số</th>
                    <th>Giải thưởng</th>
                    <th>Trạng thái</th>
                    <th>Kết quả</th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    marginTop: "20px",
                  }}
                >
                  {dialingHistoryData.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.date}</td>
                      <td>
                        {/* MỖI SỐ NẰM TRONG 1 Ô */}
                        {entry.number.split("").map((number, index) => (
                          <span key={index} className="dialinghistory__number">
                            {number}
                          </span>
                        ))}
                      </td>
                      <td
                        style={{
                          fontFamily: "Mulish",
                          fontSize: "14px",
                          fontWeight: "700",
                          lineHeight: "17.57px",
                          textAlign: "left",
                          color: "#4F4F4F",
                        }}
                      >
                        {entry.prize}
                      </td>
                      <td>
                        {entry.status}
                        <div
                          style={{
                            backgroundColor: "#ddd",
                            borderRadius: "10px",
                            height: "10px",
                            marginTop: "5px",
                          }}
                        >
                          <div
                            style={{
                              borderRadius: "10px",
                              height: "10px",
                              width: `${entry.percent}`,
                              backgroundColor: "#ED7D29",
                            }}
                          ></div>
                        </div>
                        {entry.time}
                      </td>
                      <td>
                        {entry.result === "TRÚNG THƯỞNG" ? (
                          <span
                            style={{
                              color: "#00A650",
                              fontWeight: "700",
                            }}
                          >
                            {entry.result}
                          </span>
                        ) : entry.result === "KHÔNG TRÚNG" ? (
                          <span
                            style={{
                              color: "#FF0000",
                              fontWeight: "700",
                            }}
                          >
                            {entry.result}
                          </span>
                        ) : (
                          <span
                            style={{
                              color: "#5F5F5F",
                              fontWeight: "700",
                            }}
                          >
                            {entry.result}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="topSchool__pagination">
            <div className="topSchool__paginationLeft">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="15"
                  fill="none"
                  viewBox="0 0 8 15"
                >
                  <path stroke="#939393" d="M7 14L1 7.5 7 1"></path>
                </svg>
              </i>
              <span>Trang tiếp</span>
            </div>
            <div className="topSchool__paginationRight">
              <span>Trang</span>
              <input type="text" defaultValue={1} />
              <span>của 10</span>
            </div>
          </div>
        </div>
        <EventsRight />
      </div>
    </>
  );
}
