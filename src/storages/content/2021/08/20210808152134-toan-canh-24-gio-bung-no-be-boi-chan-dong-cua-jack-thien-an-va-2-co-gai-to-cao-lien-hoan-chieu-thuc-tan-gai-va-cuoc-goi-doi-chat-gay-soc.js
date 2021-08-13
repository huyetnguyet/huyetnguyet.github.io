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
"timestamp": '08/08/2021 03:21 PM',
"title": 'Toàn cảnh 24 giờ bùng nổ bê bối chấn động của Jack: Thiên An và 2 cô gái tố cáo liên hoàn, chiêu thức tán gái và cuộc gọi đối chất gây sốc',
"description": 'Những diễn biến trong vụ bê bối tình cảm của Jack diễn ra liên hồi khiến người chơi hệ hóng chuyện chuyên nghiệp cũng phải xỉu ngang vì hít không kịp drama. Vậy sau 24 giờ diễn ra, lùm xùm này đã có những tình tiết gì?',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/fb-1628440838583422351702.png',
"alt": 'Scandal Jack bị tố ngoại tình, có con,lùm xùm của Jack,Jack bị tố ngoại tình,con gái của Jack,sao Việt,Vbiz,showbiz Việt,Jack và Thiên An,Thiên An,Jack bị bóc phốt,toàn cảnh bê bối của Jack,Jack là ai,Drama Thiên An và Jack,biến của Jack,',
"category": 'stars',
"date": '08/08/2021',
"time": '03:21 PM',
"link": '/toan-canh-24-gio-bung-no-be-boi-chan-dong-cua-jack-thien-an-va-2-co-gai-to-cao-lien-hoan-chieu-thuc-tan-gai-va-cuoc-goi-doi-chat-gay-soc',
"zcomponent": 'page_20210808152134',
"filepath": './20210808152134-toan-canh-24-gio-bung-no-be-boi-chan-dong-cua-jack-thien-an-va-2-co-gai-to-cao-lien-hoan-chieu-thuc-tan-gai-va-cuoc-goi-doi-chat-gay-soc.js'
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
  "Toàn cảnh 24 giờ bùng nổ bê bối chấn động của Jack: Thiên An và 2 cô gái tố cáo liên hoàn, chiêu thức tán gái và cuộc gọi đối chất gây sốc";
const author = "HẠ ANH/ THIẾT KẾ: MINH TRANG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "08/08/2021 03:21 PM";
const description =
  "Những diễn biến trong vụ bê bối tình cảm của Jack diễn ra liên hồi khiến người chơi hệ hóng chuyện chuyên nghiệp cũng phải xỉu ngang vì hít không kịp drama. Vậy sau 24 giờ diễn ra, lùm xùm này đã có những tình tiết gì?";
const link =
  "toan-canh-24-gio-bung-no-be-boi-chan-dong-cua-jack-thien-an-va-2-co-gai-to-cao-lien-hoan-chieu-thuc-tan-gai-va-cuoc-goi-doi-chat-gay-soc";
const tagparam = [
  "Scandal Jack bị tố ngoại tình, có con",
  "lùm xùm của Jack",
  "Jack bị tố ngoại tình",
  "con gái của Jack",
  "sao Việt",
  "Vbiz",
  "showbiz Việt",
  "Jack và Thiên An",
  "Thiên An",
  "Jack bị bóc phốt",
  "toàn cảnh bê bối của Jack",
  "Jack là ai",
  "Drama Thiên An và Jack",
  "biến của Jack",
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

export default function page_20210808152134() {
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
              <div className="author">{author}</div> - Theo {source} - Kenh14 |{" "}
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
                      Những ngày vừa qua, cứ lướt mạng xã hội ai cũng phải
                      choáng ngộp vì hàng loạt chi tiết liên quan đến ồn ào tình
                      ái của Jack - <strong>Thiên An</strong> và 3 cô gái ngoài
                      ngành. Drama tan vỡ của bộ đôi thông thường vốn đã căng
                      thẳng, nay nam ca sĩ Sóng Gió gặp biến liên quan đến rất
                      nhiều nhân vật, mỗi ngày đều có những tình tiết mới gây
                      chấn động showbiz.
                    </p>
                    <p>
                      Mức độ khủng của tin tức này đã thể hiện bằng việc chỉ
                      trong 24 giờ qua, từ khóa "Jack bị nghi ngoại tình" hiển
                      thị 12 triệu kết quả, "Jack có con" có 52,7 triệu kết quả
                      trên công cụ tìm kiếm Google. Có thể cho rằng vụ bê bối
                      này đã làm ảnh hưởng lớn nhất đến hình ảnh cũng như sự
                      nghiệp của Jack sau hơn 2 năm đặt chân vào làng giải trí.
                      Để hiểu rõ hơn về vụ drama này, nhìn lại toàn cảnh diễn
                      biến căng nhất trong 24 giờ qua.{" "}
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/fb-1628440838583422351702.png"
                      alt="1, Scandal Jack bị tố ngoại tình, có con,lùm xùm của Jack,Jack bị tố ngoại tình,con gái của Jack,sao Việt,Vbiz,showbiz Việt,Jack và Thiên An,Thiên An,Jack bị bóc phốt,toàn cảnh bê bối của Jack,Jack là ai,Drama Thiên An và Jack,biến của Jack,"
                      note=""
                    />
                    <h5>
                      Toàn cảnh scandal tình ái của Jack từ ngày 7/8 - 8/8
                    </h5>
                    <p>
                      Nhìn lại toàn cảnh drama của Jack, dân tình phải "xỉu
                      ngang xỉu dọc" vì những chi tiết gây bất ngờ liên quan đến
                      các cuộc đối chất giữa các cô gái, chiêu thức nghi là của
                      Jack dùng để tán gái và sốc nhất là những thông tin do{" "}
                      <strong>Thiên An</strong> lên tiếng. Vụ việc bắt đầu bùng
                      nổ từ đêm ngày 7/8 và kéo dài đến tối ngày 8/8, Jack vẫn
                      chưa có động thái đáp trả cũng như lên tiếng phản hồi về
                      sự việc này.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/9/artboard-3-16284436215581412260989.jpg"
                      alt="2, Scandal Jack bị tố ngoại tình, có con,lùm xùm của Jack,Jack bị tố ngoại tình,con gái của Jack,sao Việt,Vbiz,showbiz Việt,Jack và Thiên An,Thiên An,Jack bị bóc phốt,toàn cảnh bê bối của Jack,Jack là ai,Drama Thiên An và Jack,biến của Jack,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <h5>Mối quan hệ "bùng binh" của Jack và các cô gái</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/9/artboard-4-1628450646325603520966.png"
                      alt="3, Scandal Jack bị tố ngoại tình, có con,lùm xùm của Jack,Jack bị tố ngoại tình,con gái của Jack,sao Việt,Vbiz,showbiz Việt,Jack và Thiên An,Thiên An,Jack bị bóc phốt,toàn cảnh bê bối của Jack,Jack là ai,Drama Thiên An và Jack,biến của Jack,"
                      note=""
                    />
                    <p>
                      Lùm xùm này bắt nguồn từ việc 1 cô gái tên T.V vì quá bức
                      xúc khi phát hiện bị "cắm sừng" nên đã liên hệ với{" "}
                      <strong>Thiên An</strong> - nữ chính trong MV Sóng Gió của
                      Jack để làm rõ vào ngày 6/8. Sau đó, lần lượt các cô gái
                      số 3, số 4 lộ diện với nhiều tình tiết gây xôn xao dư
                      luận.
                    </p>
                    <p>
                      <strong>Thiên An</strong> cho biết cô và Jack yêu nhau đã
                      2 năm từ (2019-2021) và được gia đình chấp nhận, tuy nhiên
                      đã tan vỡ vào tháng 4/2021. Cùng lúc đó, theo lời nhân vật
                      T.V, cô và Jack cũng đã hẹn hò từ 3/2020 đến 8/2021, nghĩa
                      là trùng với thời điểm Thiên An đang mang thai. Về phía cô
                      gái thứ 3, L.T.Q cũng lên tiếng thừa nhận yêu đương với
                      Jack từ tháng 2/2021 đến trước khi vụ drama này bùng nổ.
                    </p>
                  </div>
                  <AdsHorizontal />
                </div>
              </div>

              <RandomFeature />

              <div className="source">Source: {source} - Kenh14</div>

              <FacebookShareButton link={facebookLinkShare} />

              <div className="tags">Tags: {updatedTags}</div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
