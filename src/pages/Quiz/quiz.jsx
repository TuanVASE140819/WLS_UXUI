import React, { useState } from "react";
import "./quiz.scss";
import { Link } from "react-router-dom";
const Quiz = () => {
  const questions = [
    {
      question:
        "Dãy nào sau đây được xếp đúng theo trật tự nhiệt độ sôi của các chất tăng dần?",
      options: ["H2O, NH3, HF, Ne", "HF, NH3, H2O, Ne", "Ne, HF, NH3, H2O"],
      answer: "HF, NH3, H2O, Ne",
    },
    {
      question: "Nguyên tố nào sau đây có độ âm điện lớn nhất?",
      options: ["Oxi (O)", "Flo (F)", "Clo (Cl)", "Brom (Br)"],
      answer: "Flo (F)",
    },
    {
      question: "Chất nào sau đây có liên kết cộng hóa trị không phân cực?",
      options: ["H2O", "NH3", "HCl", "Cl2"],
      answer: "Cl2",
    },
    {
      question: "Phản ứng nào sau đây là phản ứng oxi hóa khử?",
      options: [
        "NaOH + HCl -> NaCl + H2O",
        "2Na + Cl2 -> 2NaCl",
        "CaCO3 -> CaO + CO2",
        "AgNO3 + NaCl -> AgCl + NaNO3",
      ],
      answer: "2Na + Cl2 -> 2NaCl",
    },
    {
      question: "Công thức hóa học của axit sulfuric là gì?",
      options: ["H2SO3", "H2SO4", "H2S", "H2S2O7"],
      answer: "H2SO4",
    },
    {
      question: "Chất nào sau đây là bazơ mạnh?",
      options: ["NH3", "NaOH", "Fe(OH)3", "Al(OH)3"],
      answer: "NaOH",
    },
    {
      question: "pH của dung dịch axit là:",
      options: ["< 7", "= 7", "> 7", "Không xác định"],
      answer: "< 7",
    },
    {
      question: "Chất nào sau đây là chất điện li mạnh?",
      options: ["CH3COOH", "NH3", "C2H5OH", "NaCl"],
      answer: "NaCl",
    },
    {
      question: "Phản ứng giữa axit và bazơ tạo thành:",
      options: ["Muối và nước", "Axit và nước", "Bazơ và nước", "Muối và axit"],
      answer: "Muối và nước",
    },
    {
      question: "Số oxi hóa của Mn trong KMnO4 là:",
      options: ["+2", "+4", "+6", "+7"],
      answer: "+7",
    },
  ];
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].answer) {
        newScore++;
      }
    }
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div className="MinigamePage">
      <div className="SidbarGame"></div>
      <div className="quiz">
        <div className="quiz__header">
          <div className="quiz__header--wrapper">
            <div className="quiz__header--info">
              <div className="quiz__header--content">
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    marginRight: "20px",
                  }}
                  src={require("../../assets/images/quiz.png")}
                  alt="quiz"
                />
                <div>
                  <div className="quiz__title">Hòa Hồ</div>
                  <div className="quiz__name">
                    Bài kiểm tra: <span> 15 phút</span>
                  </div>
                  <div className="quiz__time">
                    Thời gian: <span> 15 phút</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="quiz__teacher">
              <div className="quiz__point">
                <div className="quiz__point--content">
                  <div className="quiz__title--point">Điểm thưởng</div>
                  <div className="quiz__title--content"></div>
                </div>
              </div>

              <div className="quiz__comment">
                <div className="quiz__comment--content">
                  <div className="quiz__title--comment">Lời phê</div>
                  <div className="quiz__title--content"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="quiz__wrapper">
          {questions.map((q, index) => (
            <div key={index}>
              {/* stt */}

              <div>
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Câu {index + 1}.
                </span>
                {" " + q.question}
              </div>
              {q.options.map((option, optionIndex) => (
                <div key={option}>
                  <input
                    type="radio"
                    value={option}
                    checked={answers[index] === option}
                    onChange={(e) => handleChange(e, index)}
                  />
                  {String.fromCharCode(97 + optionIndex)}. {option}
                </div>
              ))}
            </div>
          ))}

          {/* {submitted && (
            <h2>
              Your score: {score}/{questions.length}
            </h2>
          )} */}
        </div>
        <Link to="/exam-results">
          <button className="quiz__submit" onClick={handleSubmit}>
            Hoàn thành
          </button>
        </Link>
      </div>
      <div className="SidbarRole"></div>
    </div>
  );
};

export default Quiz;
