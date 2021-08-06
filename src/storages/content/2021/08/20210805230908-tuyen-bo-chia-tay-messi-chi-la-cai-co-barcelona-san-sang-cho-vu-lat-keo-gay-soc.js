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
"timestamp": '05/08/2021 11:09 PM',
"title": 'Tuyên bố chia tay Messi chỉ là cái cớ, Barcelona sẵn sàng cho vụ "lật kèo" gây sốc?',
"description": 'Theo tiết lộ của nhà báo Tây Ban Nha - Toni Juanmarti, việc Barcelona tuyên bố chia tay Lionel Messi chỉ là cách để họ gây áp lực lên Ban tổ chức La Liga.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/1-16282213093631207320459.jpeg',
"alt": 'messi,barcelona,Messi rời Barca,',
"category": 'news',
"date": '05/08/2021',
"time": '11:09 PM',
"link": '/tuyen-bo-chia-tay-messi-chi-la-cai-co-barcelona-san-sang-cho-vu-lat-keo-gay-soc',
"zcomponent": 'page_20210805230908',
"filepath": './20210805230908-tuyen-bo-chia-tay-messi-chi-la-cai-co-barcelona-san-sang-cho-vu-lat-keo-gay-soc.js'
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
  'Tuyên bố chia tay Messi chỉ là cái cớ, Barcelona sẵn sàng cho vụ "lật kèo" gây sốc?';
const author = "ĐẶNG PHONG,";
const source = "Pháp luật&Bạn đọc";
const timestamp = "05/08/2021 11:09 PM";
const description =
  "Theo tiết lộ của nhà báo Tây Ban Nha - Toni Juanmarti, việc Barcelona tuyên bố chia tay Lionel Messi chỉ là cách để họ gây áp lực lên Ban tổ chức La Liga.";
const link =
  "tuyen-bo-chia-tay-messi-chi-la-cai-co-barcelona-san-sang-cho-vu-lat-keo-gay-soc";
const tagparam = ["messi", "barcelona", "Messi rời Barca"];
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

export default function page_20210805230908() {
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
                      <strong>Messi</strong> và <strong>Barcelona</strong> đều
                      muốn gắn bó với nhau, thậm chí "El Pulga" còn chấp nhận
                      giảm 50% lương để được ở lại sân Camp Nou. Tuy nhiên do
                      rào cản tài chính mà La Liga đặt ra, cả hai đã không thể
                      đi đến một cuộc ký kết hợp đồng mới.
                    </p>
                    <p>
                      La Liga quy định mỗi đội phải giảm quỹ lương xuống còn 160
                      triệu euro/năm. Điều này đồng nghĩa nếu ký hợp đồng mới
                      với <strong>Messi</strong>, quỹ lương của{" "}
                      <strong>Barcelona</strong> sẽ phình to hơn quy định. Chính
                      chủ tịch Joan Laporta còn thừa nhận đội chủ sân Camp Nou
                      hiện không tuân thủ luật Công bằng tài chính.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/1-16282213093631207320459.jpeg"
                      alt="1, messi,barcelona,Messi rời Barca,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Theo Diario Sport, sau khi biết <strong>Barcelona</strong>{" "}
                      không ký kết hợp đồng mới với mình, <strong>Messi</strong>{" "}
                      đã rất sốc và chán nản. Về phía gã khổng lồ xứ Catalan, họ
                      cũng không hề muốn mất Messi bởi lợi ích mà anh đem lại
                      cho CLB vô cùng lớn.
                    </p>
                    <p>
                      Tuy nhiên theo nhà báo Juanmarti, việc đội chủ sân Camp
                      Nou nói lời chia tay siêu sao người Argentina chính là
                      cách để họ gây áp lực lên Chủ tịch La Liga - Javier Tebas.
                      Trước đây, chính ông Javier Tebas tuyên bố "cứng" rằng
                      không vì <strong>Messi</strong> mà bẻ cong điều lệ của La
                      Liga. Vị chủ tịch này tin tưởng sân chơi La Liga cần sự
                      công bằng.
                    </p>
                    <p>
                      Nhà báo Juanmarti tin tưởng La Liga không hề muốn mất{" "}
                      <strong>Messi</strong>, người được coi như lá bùa hộ mệnh
                      của giải đấu. Chừng nào "El Pulga" còn gắn bó với{" "}
                      <strong>Barcelona</strong>, La Liga có thể thu hút được
                      rất nhiều fan theo dõi.
                    </p>
                    <p>
                      Với việc gây lên áp lực tới La Liga,{" "}
                      <strong>Barcelona</strong> rất hy vọng Chủ tịch Javier
                      Tebas sẽ đem đến sự ưu ái cho riêng <strong>Messi</strong>
                      .
                    </p>
                    <p>
                      Ngay sau khi <strong>Barcelona</strong> tuyên bố ký hợp
                      đồng mới với <strong>Messi</strong>, PSG đã lập tức nhảy
                      vào chèo kéo "El Pulga". Gã nhà giàu nước Pháp hứa hẹn đem
                      đến bản hợp đồng hậu hĩnh không thua những gì tiền đạo
                      sinh năm 1987 từng nhận ở Barcelona.
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
