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
"timestamp": '13/08/2021 09:21 AM',
"title": 'NÓNG: Seungri (BIGBANG) chính thức bị kết án 3 năm tù giam, phạt số tiền khổng lồ vì 2 tội danh',
"description": 'Vào ngày hôm nay (12/8), Tòa án đã đưa ra mức án cuối cùng dành cho Seungri sau vụ bê bối Burning Sun.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/screenshot-47-16287555137381276804635.png',
"alt": 'seungri,Seungri (BIGBANG),Bê bối tình dục chấn động của Seungri,Seungri chính thức là nghi phạm môi giới mại dâm,club của seungri dính phốt tấn công tình dục,Burning Sun,scandal burning sun,yoo in suk,bigbang,',
"category": 'stars',
"date": '13/08/2021',
"time": '09:21 AM',
"link": '/nong-seungri-chinh-thuc-bi-ket-an-3-nam-tu-giam-phat-215-ty-dong',
"zcomponent": 'page_20210813092129',
"filepath": './20210813092129-nong-seungri-chinh-thuc-bi-ket-an-3-nam-tu-giam-phat-215-ty-dong.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  "NÓNG: Seungri (BIGBANG) chính thức bị kết án 3 năm tù giam, phạt số tiền khổng lồ vì 2 tội danh";
const author = "HỒNG HẢI,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "13/08/2021 09:21 AM";
const description =
  "Vào ngày hôm nay (12/8), Tòa án đã đưa ra mức án cuối cùng dành cho Seungri sau vụ bê bối Burning Sun.";
const link = "nong-seungri-chinh-thuc-bi-ket-an-3-nam-tu-giam-phat-215-ty-dong";
const tagparam = [
  "seungri",
  "Seungri (BIGBANG)",
  "Bê bối tình dục chấn động của Seungri",
  "Seungri chính thức là nghi phạm môi giới mại dâm",
  "club của seungri dính phốt tấn công tình dục",
  "Burning Sun",
  "scandal burning sun",
  "yoo in suk",
  "bigbang",
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

export default function page_20210813092129() {
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
                    <h5>
                      Vào ngày hôm nay (12/8), Tòa án đã đưa ra mức án cuối cùng
                      dành cho <strong>Seungri</strong> sau vụ bê bối{" "}
                      <strong>Burning Sun</strong>.
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/unnamed-1628752605424788069266.jpeg"
                      alt="1, seungri,Seungri (BIGBANG),Bê bối tình dục chấn động của Seungri,Seungri chính thức là nghi phạm môi giới mại dâm,club của seungri dính phốt tấn công tình dục,Burning Sun,scandal burning sun,yoo in suk,bigbang,"
                      note="Cựu em út BIGBANG đang phải đối diện mức án 3 năm tù giam và mức phạt khủng"
                    />

                    <p>
                      Vào ngày hôm nay (12/8), Tòa án quân sự của Bộ chỉ huy Tác
                      chiến Mặt đất tại Yongin, Gyeonggi đã tuyên mức án dành
                      cho <strong>Seungri</strong> (<strong>BIGBANG</strong>) là
                      3 năm tù giam kèm khoản tiền phạt 1,15 tỷ won (22,5 tỷ
                      đồng) vì tội môi giới mại dâm và đánh bạc. Trước đó, em út
                      BIGBANG bị điều tra về 9 cáo buộc bao gồm: Sử dụng dịch vụ
                      mại dâm, Môi giới mại dâm, Đánh bạc, Tham ô, Vi phạm Đạo
                      luật vệ sinh thực phẩm, Vi phạm Đạo luật giao dịch ngoại
                      hối, Vi phạm Đạo luật về tội phạm tình dục do truyền bá
                      nội dung quay lén và Xúi giục bạo lực đặc biệt.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/screenshot-49-1628756198083816521945.png"
                      alt="2, seungri,Seungri (BIGBANG),Bê bối tình dục chấn động của Seungri,Seungri chính thức là nghi phạm môi giới mại dâm,club của seungri dính phốt tấn công tình dục,Burning Sun,scandal burning sun,yoo in suk,bigbang,"
                      note="Tờ Maeil chỉ rõ Seungri bị truy tố vì môi giới mại dâm và đánh bạc"
                    />
                    <p>
                      Theo đó, cựu thành viên <strong>BIGBANG</strong> bị truy
                      tố vì tội môi giới mại dâm cho các nhà đầu tư từ Đài Loan,
                      Nhật Bản, Hong Kong... từ tháng 12/2015 đến tháng 1/2016
                      để đổi lấy tiền đầu tư cho hộp đêm và các cơ sở kinh doanh
                      khác. <strong>Seungri</strong> cũng bị buộc tội chiếm đoạt
                      khoảng 528 triệu won (10,3 tỷ đồng) từ quỹ đầu tư và
                      thường xuyên đánh bạc tại Las Vegas từ tháng 12/2013 đến
                      tháng 8/2017 với tổng số tiền lên đến 2,2 tỷ won (43,1 tỷ
                      đồng).
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/screenshot-47-16287555137381276804635.png"
                      alt="3, seungri,Seungri (BIGBANG),Bê bối tình dục chấn động của Seungri,Seungri chính thức là nghi phạm môi giới mại dâm,club của seungri dính phốt tấn công tình dục,Burning Sun,scandal burning sun,yoo in suk,bigbang,"
                      note=""
                    />
                    <p>
                      Hàng loạt trang báo lớn của Hàn Quốc đã đưa tin về vụ việc
                      như "<strong>Seungri</strong> (<strong>BIGBANG</strong>)
                      bị kết án 3 năm tù giam vì tội môi giới mại dâm"
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/screenshot-46-1628752605597542322415.png"
                      alt="4, seungri,Seungri (BIGBANG),Bê bối tình dục chấn động của Seungri,Seungri chính thức là nghi phạm môi giới mại dâm,club của seungri dính phốt tấn công tình dục,Burning Sun,scandal burning sun,yoo in suk,bigbang,"
                      note=""
                    />
                    <p>
                      "<strong>Seungri</strong>, cựu thành viên{" "}
                      <strong>BIGBANG</strong>, bị kết án 3 năm tù"
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/screenshot-48-16287558074171905715679.png"
                      alt="5, seungri,Seungri (BIGBANG),Bê bối tình dục chấn động của Seungri,Seungri chính thức là nghi phạm môi giới mại dâm,club của seungri dính phốt tấn công tình dục,Burning Sun,scandal burning sun,yoo in suk,bigbang,"
                      note=""
                    />
                    <p>
                      "Tòa tuyên án <strong>Seungri</strong> (
                      <strong>BIGBANG</strong>) mức án 3 năm tù giam vì tội môi
                      giới mại dâm"
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Trong các phiên tòa trước đó, <strong>Seungri</strong>{" "}
                      liên tục phủ nhận mọi cáo buộc, cho rằng đối tác kinh
                      doanh phải chịu trách nhiệm về đường dây mại dâm, và anh
                      đến Mỹ không phải để đánh bạc. Tuy nhiên, phía Tòa án đã
                      đưa ra phán quyết: "Bị cáo đã cùng{" "}
                      <strong>Yoo In Suk</strong> lập mưu môi giới mại dâm nhiều
                      lần cho các nhà đầu tư nước ngoài và thu lợi từ việc này.
                      Việc người nổi tiếng đánh bạc cũng có tác động rất lớn,
                      làm suy yếu nhận thức lành mạnh của xã hội".{" "}
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/screenshot-49-1628756198083816521945.png"
                      alt="6, seungri,Seungri (BIGBANG),Bê bối tình dục chấn động của Seungri,Seungri chính thức là nghi phạm môi giới mại dâm,club của seungri dính phốt tấn công tình dục,Burning Sun,scandal burning sun,yoo in suk,bigbang,"
                      note=""
                    />
                    <p>
                      Tòa án còn nhấn mạnh thêm rằng "Tội ác của bị cáo đã kéo
                      dài trong nhiều năm. Vì lợi ích kinh tế của bản thân,{" "}
                      <strong>Seungri</strong> đã lợi dụng phụ nữ Hàn Quốc, cung
                      cấp dịch vụ tình dục cho các nhà đầu tư nước ngoài. Ngoài
                      ra bị cáo còn duy trì tình bạn qua cờ bạc và điều hành câu
                      lạc bộ đêm trái phép. Seungri không hề hối hận và luôn đổ
                      lỗi cho người khác, mặc dù được hưởng lợi lớn từ tội ác
                      của mình. Do đó cần phải trừng trị nghiêm khắc".
                    </p>

                    <p>Nguồn: Yonhap News, Dispatch</p>
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
