import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '05/08/2021 08:45 AM',
"title": 'Tìm thấy “máy tính bảng” 3.700 năm tuổi của người Babylon: Minh chứng hùng hồn nhất của “xuyên không”?',
"description": 'Chiếc máy tính bảng Si.427 3.700 năm tuổi của người Babylon ẩn chứa điều kinh ngạc gì?',
"src": '',
"alt": 'máy tính bảng,nhà toán học,thế kỷ 19,khảo cổ học,Thổ Nhĩ Kỳ,New South Wales,tam giác vuông,hình chữ nhật,sử dụng thiết bị,',
"category": 'news',
"date": '05/08/2021',
"time": '08:45 AM',
"link": '/tim-thay-may-tinh-bang-3700-nam-tuoi-cua-nguoi-babylon-minh-chung-hung-hon-nhat-cua-xuyen-khong',
"zcomponent": 'page_20210805084533',
"filepath": './20210805084533-tim-thay-may-tinh-bang-3700-nam-tuoi-cua-nguoi-babylon-minh-chung-hung-hon-nhat-cua-xuyen-khong.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  "Tìm thấy “máy tính bảng” 3.700 năm tuổi của người Babylon: Minh chứng hùng hồn nhất của “xuyên không”?";
const author = "TRANG LY,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "05/08/2021 08:45 AM";
const description =
  "Chiếc máy tính bảng Si.427 3.700 năm tuổi của người Babylon ẩn chứa điều kinh ngạc gì?";
const link =
  "tim-thay-may-tinh-bang-3700-nam-tuoi-cua-nguoi-babylon-minh-chung-hung-hon-nhat-cua-xuyen-khong";
const tagparam = [
  "máy tính bảng",
  "nhà toán học",
  "thế kỷ 19",
  "khảo cổ học",
  "Thổ Nhĩ Kỳ",
  "New South Wales",
  "tam giác vuông",
  "hình chữ nhật",
  "sử dụng thiết bị",
];
const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tagparam.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function page_20210805084533() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              {">"}
            </div>
            <a href={categoryLink} className="pathName">
              {category}
            </a>
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="info">
            <p>
              <div className="author">{author}</div> - Theo {source} |{" "}
              {timestamp}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <p>
                      Một <strong>nhà toán học</strong> người Australia đã phát
                      hiện ra ví dụ lâu đời nhất được biết đến về hình học ứng
                      dụng, trên một viên đất sét Babylon 3.700 năm tuổi - và
                      ông gọi đó là “<strong>máy tính bảng</strong>” cổ đại.
                    </p>
                    <p>
                      Được biết đến với cái tên Si.427, chiếc{" "}
                      <strong>máy tính bảng</strong> này mang một sơ đồ thực địa
                      đo ranh giới của một số vùng đất.
                    </p>
                    <p>
                      <strong>Máy tính bảng</strong> Si.427 có niên đại từ thời
                      Babylon Cổ giữa năm 1900 và 1600 trước Công nguyên và được
                      phát hiện vào cuối <strong>thế kỷ 19</strong> ở khu vực
                      ngày nay là Baghdad, Iraq. Nó đã được đặt trong Bảo tàng{" "}
                      <strong>Khảo cổ học</strong> Istanbul (
                      <strong>Thổ Nhĩ Kỳ</strong>) trước khi Tiến sĩ Daniel
                      Mansfield từ Đại học <strong>New South Wales</strong>{" "}
                      (Australia) lần ra nó.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/photo-1-16281517391601033572813.jpg"
                      alt="1, máy tính bảng,nhà toán học,thế kỷ 19,khảo cổ học,Thổ Nhĩ Kỳ,New South Wales,tam giác vuông,hình chữ nhật,sử dụng thiết bị,"
                      note="Tầm quan trọng của chiếc máy tính bảng này vẫn chưa được biết cho đến khi công trình của Tiến sĩ Mansfield được tiết lộ (Ảnh: UNSW Sydney)"
                    />
                    <p>
                      Trước đó, Tiến sĩ Daniel Mansfield và Norman Wildberger,
                      một phó giáo sư tại Đại học{" "}
                      <strong>New South Wales</strong> (UNSW) - Australia, đã
                      xác định một chiếc <strong>máy tính bảng</strong> khác ở
                      Babylon có chứa bảng lượng giác chính xác và lâu đời nhất
                      thế giới. Vào thời điểm đó, họ suy đoán chiếc máy tính
                      bảng này có thể đã được sử dụng trong thực tế, có thể là
                      trong khảo sát hoặc xây dựng.
                    </p>
                    <p>
                      <strong>Máy tính bảng</strong> đó có tên Plimpton 322, đã
                      mô tả các <strong>tam giác vuông</strong> bằng cách sử
                      dụng bộ ba số Pitago: Ba số nguyên trong đó tổng bình
                      phương của hai số đầu tiên bằng bình phương của số thứ ba
                      - ví dụ: 32 + 42 = 52.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/photo-1-16281517391601033572813.jpg"
                      alt="2, máy tính bảng,nhà toán học,thế kỷ 19,khảo cổ học,Thổ Nhĩ Kỳ,New South Wales,tam giác vuông,hình chữ nhật,sử dụng thiết bị,"
                      note="Hình ảnh động cho thấy ví dụ đơn giản nhất về bộ ba Pythagore (Nguồn: AmericanXplorer13 / Wikipedia / CC BY-SA 3.0)"
                    />
                    <p>
                      Sự xuất hiện của Plimpton 322 đặt Tiến sĩ Daniel Mansfield
                      vào một nhiệm vụ tìm kiếm những{" "}
                      <strong>máy tính bảng</strong> khác cùng thời kỳ có chứa
                      bộ ba Pitago [hay Pythagore, bao gồm ba số nguyên dương a,
                      b và c, sao cho a² + b² = c²]. Cuối cùng, Si.427 xuất
                      hiện!
                    </p>
                    <p>
                      "Si.427 giống như một mảnh đất được bán thu nhỏ. Trong văn
                      tự chữ hình nêm, với các vết lõm hình nêm đặc trưng,
                      Si.427 mô tả một cánh đồng có các khu vực đầm lầy, cũng
                      như sàn đập và tháp gần đó.
                    </p>
                    <p>
                      Các <strong>hình chữ nhật</strong> mô tả cánh đồng có các
                      cạnh đối diện với độ dài bằng nhau, cho thấy các nhà khảo
                      sát thời đó đã nghĩ ra cách tạo ra các đường vuông góc
                      chính xác hơn trước đây" - Tiến sĩ Daniel Mansfield nhận
                      định.
                    </p>
                    <p>
                      "Giống như chúng ta ngày nay, khi một người cố gắng tìm ra
                      ranh giới đất đai của họ, họ{" "}
                      <strong>sử dụng thiết bị</strong> GPS, còn thời xưa, họ
                      dùng bộ ba Pitago".
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>ĐIỀU KINH NGẠC</h5>
                    <p>
                      Và một sự thật khiến các nhà khoa học kinh ngạc đó là, mặc
                      dù Plimpton 322 và Si.427 đều sử dụng bộ ba Pitago, nhưng
                      CHÚNG LẠI XUẤT HIỆN TRƯỚC <strong>nhà toán học</strong> Hy
                      Lạp Pythagoras hơn 1.000 năm.
                    </p>
                    <p>
                      [Pythagoras (phiên âm tiếng Pháp là Pytago) được xem là
                      'cha đẻ của số học'. Ông nổi tiếng với Định lý Pytago của{" "}
                      <strong>tam giác vuông</strong>: a2 + b2 = c2, với c là độ
                      dài cạnh huyền, a và b là độ dài hai cạnh góc vuông].
                    </p>
                    <p>
                      Tiến sĩ Mansfield nói: "Một khi bạn hiểu bộ ba Pitago là
                      gì, xã hội của bạn đã đạt đến một mức độ tinh vi toán học
                      cụ thể. Si.427 chứa ba bộ ba Pitago: 3, 4, 5; 8, 15, 17;
                      và 5, 12, 13".
                    </p>
                    <p>
                      Người Babylon đã sử dụng hệ đếm cơ số 60 - Hệ cơ số 60 của
                      người Babylon là nền tảng để hôm nay chúng ta chia 1 phút
                      thành 60 giây, 1 giờ thành 60 phút và 1 vòng tròn có 360
                      độ - khiến việc làm việc với các số nguyên tố lớn hơn 5
                      trở nên khó khăn.
                    </p>
                    <p>
                      Chiếc <strong>máy tính bảng</strong> Si.427, được mô tả
                      trong một nghiên cứu trên tạp chí Foundations Of Science,
                      xuất hiện từ thời kỳ gia tăng sở hữu đất tư nhân.
                    </p>
                    <p>
                      Tiến sĩ Mansfield nói: "Bây giờ chúng ta biết người
                      Babylon đang cần nó để giải quyết vấn đề gì. Bạn thấy đó,
                      toán học đang được phát triển để giải quyết nhu cầu của
                      thời đại."
                    </p>
                    <p>
                      Một điều khiến Tiến sĩ Mansfield khó hiểu về Si.427 là số
                      thập phân giới tính "25:29" - tương tự như 25 phút 29 giây
                      - được khắc bằng phông chữ lớn ở mặt sau của{" "}
                      <strong>máy tính bảng</strong>.
                    </p>
                    <p>
                      "Đó có phải là một phần của phép tính mà họ đã thực hiện
                      không? Đó có phải là một lĩnh vực mà tôi chưa từng biết
                      không? Nó có phải là một phép đo của một cái gì đó không?
                      Tôi thực sự khó chịu vì có quá nhiều thứ về{" "}
                      <strong>máy tính bảng</strong> của người xưa. Bộ óc của họ
                      thật vĩ đại!", Tiến sĩ Mansfield kết luận.
                    </p>
                    <p>
                      Bài viết sử dụng nguồn: The Guardian (UK), Scienealert,
                      Scitechdaily
                    </p>
                  </div>
                  <AdsHorizontal />
                </div>
              </div>

              <RandomFeature />

              <div className="source">Source: {source}</div>

              <FacebookShareButton link={facebookLinkShare} />

              <div className="tags">Tags: {updatedTags}</div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
