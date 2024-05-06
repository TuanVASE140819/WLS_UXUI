import React from "react";
import "./singlePost.scss";
import { Link } from "react-router-dom";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePost__wrapper">
        <img src={require("../../assets/images/singlePost-1.png")} alt="" />
        <h4>
          Trước khi có bài phỏng vấn này, tôi đã theo dõi vài bộ phim có “Cá Sấu
          chúa" Quỳnh Nga nhận vai và nhiều lần được đọc câu chuyện đời của cô:
          Một nữ diễn viên đam mê nghệ thuật, sân khấu, một người đẹp kinh doanh
          thời trang, phòng tập, và một người phụ nữ không may mắn trọn vẹn
          trong hôn nhân.
        </h4>
        <div className="singlePost__bar">
          <div className="singlePost__barUser">
            <img src={require("../../assets/images/user.png")} alt="" />
            <div className="singlePost__bartUserText">
              <Link to="/">
                <h4>Hoà 9x</h4>
              </Link>
              <p>08/04/2024</p>
            </div>
          </div>
          <div className="singlePost__barAside">
            <div className="singlePost__like">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                fill="none"
                viewBox="0 0 20 19"
              >
                <path
                  fill="#3D92D1"
                  d="M0 6.385v-.296c.01-.087.04-.175.04-.274.03-.678.16-1.324.42-1.925.98-2.265 2.6-3.502 4.9-3.578 1.9-.066 3.4.81 4.53 2.472.04.055.08.12.13.186.05-.065.08-.109.11-.164C11.72.388 14.55-.4 16.98.913c2.54 1.368 3.77 4.716 2.56 7.693-.65 1.597-1.63 2.921-2.75 4.125-1.98 2.123-4.22 3.852-6.61 5.384-.12.076-.21.076-.34 0a38.41 38.41 0 01-4.21-3.119c-1.47-1.258-2.85-2.615-3.98-4.257C.89 9.591.26 8.365.07 6.932.04 6.746.02 6.56 0 6.384z"
                ></path>
              </svg>
              177
            </div>
            <div className="singlePost__message">
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7646 9.42244C16.7346 13.865 13.7946 17.673 9.78462 18.428C7.82462 18.7891 5.98462 18.428 4.25462 17.3775C4.15462 17.3119 4.07462 17.3009 3.95462 17.3447C2.99462 17.7277 2.04462 18.0997 1.09462 18.4827C0.774622 18.614 0.474622 18.5921 0.224622 18.3186C-0.025378 18.045 -0.045378 17.7167 0.074622 17.3666C0.424622 16.338 0.764622 15.2985 1.11462 14.2699C1.15462 14.1386 1.15462 14.051 1.09462 13.9307C-1.60538 8.73307 0.914622 2.15673 6.18462 0.60292C10.8846 -0.786757 15.6646 2.485 16.5846 7.72638C16.6746 8.28444 16.7046 8.85344 16.7646 9.42244Z"
                  fill="#3D92D1"
                />
              </svg>
              12
            </div>
            <div className="singlePost__share">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2553 4.87359C10.2553 3.69109 10.2553 2.52847 10.2553 1.37578C10.2553 0.928618 10.4211 0.580825 10.7989 0.382086C11.1767 0.183347 11.5361 0.262843 11.8494 0.551014C11.9876 0.680195 12.1166 0.829249 12.2456 0.968366C14.3649 3.24393 16.4842 5.52943 18.6035 7.80499C19.1287 8.37139 19.1287 8.91793 18.6035 9.48433C16.392 11.8593 14.1898 14.2342 11.9784 16.6191C11.7388 16.8774 11.4716 17.0662 11.1122 17.0165C10.5962 16.9569 10.2553 16.5296 10.2461 15.9533C10.2461 14.8105 10.2461 13.6678 10.2461 12.525C10.2461 12.4356 10.2461 12.3561 10.2461 12.2567C9.51812 12.1971 8.83626 12.2965 8.16361 12.5151C6.6801 12.9921 5.44538 13.9063 4.33044 15.0292C3.36294 16.0129 2.53364 17.1258 1.79649 18.3183C1.57535 18.676 1.28049 18.8847 0.865845 18.8549C0.432771 18.8251 0.027339 18.4276 0.0181246 17.9606C-0.0187328 16.2514 -0.0740189 14.5422 0.414342 12.8828C1.45556 9.30547 3.60251 6.85104 6.85518 5.51949C7.90561 5.0922 8.99291 4.89346 10.1171 4.86365C10.1539 4.89346 10.1908 4.88352 10.2553 4.87359Z"
                  fill="#3D92D1"
                />
              </svg>
              177
            </div>
            <div className="singlePost__save">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="27"
                fill="none"
                viewBox="0 0 19 27"
              >
                <path
                  stroke="#3D92D1"
                  strokeMiterlimit="10"
                  d="M2.76 1h13.92l.03.033c1.11.328 1.63 1.061 1.63 2.32v20.626c0 .295.02.59-.01.886-.02.22-.06.46-.14.657-.2.503-.67.744-1.15.569a2.046 2.046 0 01-.69-.438c-1.94-1.794-3.88-3.6-5.81-5.405-.52-.482-1.11-.482-1.63-.011-1.44 1.335-2.88 2.68-4.33 4.016-.55.514-1.09 1.039-1.67 1.531-.81.69-1.71.318-1.89-.766C1 24.91 1 24.788 1 24.68V3.167c0-.734.28-1.324.83-1.73.27-.185.61-.284.93-.437z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <h3>
          ‘Chị đẹp' Quỳnh Nga: Tôi ước mình đang ở tuổi 20 để có thêm hơn 10 năm
          nữa tiếp tục sự nghiệps
        </h3>
        <img src={require("../../assets/images/singlePost-2.png")} alt="" />
        <h4>
          Sau chương trình “Chị đẹp đạp gió rẽ sóng”, cái tên Quỳnh Nga để lại
          nhiều ấn tượng tốt đẹp hơn trong mắt công chúng. Cảm xúc của chị ra
          sao khi đón nhận những phản ứng tích cực từ khán giả?
        </h4>
        <p>
          Được tham gia vào một sân chơi và được hết mình với đam mê khiến Nga
          rất vui, dù thời điểm bị loại tất nhiên cũng rất tiếc nuối khi chưa
          làm được hết những điều ấp ủ. Vì thế mà khi được quay trở lại với
          chương trình, tôi cố gắng mang hết tất cả những gì bản thân mong muốn
          nhất lên sân khấu để gửi tới khán giả, bởi rõ ràng là một sân chơi
          không có quá nhiều thời lượng để thể hiện, mình phải tranh thủ và tận
          dụng hết thời gian được xuất hiện trên sân khấu.
        </p>
        <h4>
          Ở hậu trường, Quỳnh Nga tập luyện đến bầm tím cả tay chân. Là một
          người đẹp rất quan trọng ngoại hình, vì sao chị sẵn sàng đánh đổi vì
          một show thực tế như vậy?
        </h4>
        <p>
          Đầu tiên là do tôi thích, tôi thích được cống hiến và tôi muốn lăn xả.{" "}
          <br />
          <br />
          Mọi người sẽ thấy Quỳnh Nga bình thường rất chỉn chu, không bao giờ để
          cơ thể bị làm sao hết. Nhưng khi vào chương trình rồi, bạn sẽ biết
          rằng để làm được cái mình mong muốn thì chắc chắn phải chăm chỉ tập
          luyện. Và dĩ nhiên điều đó tạo ra sự bầm dập nhất định trong cuộc thi.{" "}
          <br />
          <br />
          Bản thân Nga lại lựa chọn một màn biểu diễn khá là nhiều thách thức,
          nhiều động tác khó nữa nên mình phải chấp nhận việc cơ thể sẽ bầm tím.
          Mà không chỉ riêng Nga đâu, tất cả các chị em trong chương trình chắc
          ai cũng vậy thôi, chỉ là bầm dập ít hay nhiều. <br />
        </p>
        <div className="singlePost__imageText">
          <img src={require("../../assets/images/singlePost-5.png")} alt="" />
          <div className="singlePost__imageTextContent">
            <h4>
              Ngày càng nổi tiếng và được cộng đồng chú ý, chị có thấy mình
              thiếu đi những khoảnh khắc riêng tư?
            </h4>
            <p>
              Tất nhiên là nghệ sĩ đôi khi cũng sẽ thiếu một chút xíu khoảnh
              khắc riêng tư nhưng bạn phải chấp nhận điều đấy. Vì khi bạn muốn
              làm điều gì đó khác bình thường thì bạn phải chấp nhận trải qua
              những điều khác bình thường. <br /> <br />
              Tôi nghĩ rằng tất cả những người nghệ sĩ đều hài lòng với việc họ
              đang làm thì họ mới tiếp tục làm, còn nếu mà họ đã thấy không vui
              vẻ, không thoải mái thì chắc chắn sẽ không làm được. <br /> <br />
              Mặt khác nghệ sĩ cũng có những sự thu mình nhất định trong cuộc
              sống, họ có không gian riêng như là nhà riêng chẳng hạn, nên đôi
              khi cũng không cần công khai cuộc sống cá nhân ở chỗ khác, với
              nhiều người khác.
            </p>
          </div>
        </div>
        <img src={require("../../assets/images/singlePost-3.png")} alt="" />
        <h4>
          Chị nói làm nghệ sĩ có vui thì mới làm. Vậy điều khiến chị vui, hài
          lòng nhất là gì? Sự nổi tiếng hay tiền bạc?
        </h4>
        <p>
          Điều vui nhất của Nga trong hành trình làm nghệ thuật đó là khán giả
          yêu mến mình, ủng hộ mình trong những dự án, sự kiện. Ngoài ra là khi
          đứng trên sân khấu, Nga được khán giả vỗ tay, cổ vũ. <br /> <br />
          Mọi người sẽ không hiểu được cảm giác ấy nếu như không trân trọng nó.
          Như khi đứng trên sân khấu "Chị đẹp", cảm giác được khán giả vỗ tay
          ủng hộ là khoảnh khắc mà tôi nhớ mãi. Và có lẽ đó chính là thứ níu giữ
          tất cả những người làm nghệ thuật lâu năm.
        </p>
        <img src={require("../../assets/images/singlePost-4.png")} alt="" />
        <p>
          Tôi cũng không nóng ruột nên mẹ tôi lo lắng lắm, bảo người ta nóng
          ruột đi người ta còn đi tìm, đây nó chả nóng ruột, nó cứ như không thế
          thì làm sao mà có được. <br /> <br />
          Tôi luôn khuyên những đứa em của mình nên lấy chồng muộn, càng tuổi
          trẻ càng nên lấy chồng muộn, lấy chồng muộn bao nhiêu sướng bấy nhiêu.
          Tất nhiên lấy chồng sớm, có con lớn thì sẽ sướng kiểu khác, nhưng mà
          khi lấy chồng muộn thì bản thân mình sẽ là người sướng, mình còn có
          thời gian cố gắng phấn đấu cho sự nghiệp. Khi đã có gia đình thì rõ
          ràng phải lựa chọn, mà lựa chọn thì chắc chắn gia đình thắng rồi, làm
          sao sự nghiệp thắng được.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
