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
"timestamp": '12/08/2021 05:32 PM',
"title": 'Hoà Minzy hé lộ bí mật về lần đầu công khai quý tử hào môn, tung luôn ảnh khoe body nuột khó tin chỉ sau 8 tháng sinh',
"description": 'Hoà Minzy đã chia sẻ vlog chuyến đi du lịch đầu tiên của bé Bo, vô tình để lộ body mẹ bỉm sau khi bí mật sinh con.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/hoa-minzy-chinh-thuc-xac-nhan-co-con-cong-bo-hinh-anh-con-trai-af9a5ee4-16287865436941841377666.jpg',
"alt": 'hòa minzy,ca sĩ hoà minzy,gia đình Hoà Minzy,bé bo con trai hoà minzy,con sao việt,sao Việt,showbiz Việt,body của sao,Nhóc tỳ sao việt,con của sao,Hoà Minzy sinh con,',
"category": 'stars',
"date": '12/08/2021',
"time": '05:32 PM',
"link": '/hoa-minzy-he-lo-bi-mat-ve-lan-dau-cong-khai-quy-tu-hao-mon-tung-luon-anh-khoe-body-nuot-kho-tin-chi-sau-8-thang-sinh',
"zcomponent": 'page_20210812173200',
"filepath": './20210812173200-hoa-minzy-he-lo-bi-mat-ve-lan-dau-cong-khai-quy-tu-hao-mon-tung-luon-anh-khoe-body-nuot-kho-tin-chi-sau-8-thang-sinh.js'
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
  "Hoà Minzy hé lộ bí mật về lần đầu công khai quý tử hào môn, tung luôn ảnh khoe body nuột khó tin chỉ sau 8 tháng sinh";
const author = "MỘC,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "12/08/2021 05:32 PM";
const description =
  "Hoà Minzy đã chia sẻ vlog chuyến đi du lịch đầu tiên của bé Bo, vô tình để lộ body mẹ bỉm sau khi bí mật sinh con.";
const link =
  "hoa-minzy-he-lo-bi-mat-ve-lan-dau-cong-khai-quy-tu-hao-mon-tung-luon-anh-khoe-body-nuot-kho-tin-chi-sau-8-thang-sinh";
const tagparam = [
  "hòa minzy",
  "ca sĩ hoà minzy",
  "gia đình Hoà Minzy",
  "bé bo con trai hoà minzy",
  "con sao việt",
  "sao Việt",
  "showbiz Việt",
  "body của sao",
  "Nhóc tỳ sao việt",
  "con của sao",
  "Hoà Minzy sinh con",
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

export default function page_20210812173200() {
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
                      Kể từ sau khi được mẹ công khai, bé Bo - con trai Hoà
                      Minzy nhận được tình yêu từ người hâm mộ bởi rất lém lỉnh
                      và có những màn đối đáp vô cùng thông minh. Mẹ bỉm đã giấu
                      kín bưng mọi thông tin về con trai suốt hơn 1 năm cho đến
                      mùng 3 Tết (14/2/2021), thiếu gia Minh Hải mới chính thức
                      chia sẻ hình ảnh đầu tiên của bé. Tuy nhiên, theo lời Hoà
                      Minzy, đó không phải là lần đầu tiên vợ chồng cô công bố
                      nhóc tỳ với các cô chú.
                    </p>
                    <p>
                      Chuyện là tối ngày 12/8, Hoà Minzy đã đăng tải vlog ghi
                      lại những khoảnh khắc đời thường của gia đình trên kênh
                      YouTube riêng của quý tử. Mẹ bỉm cho biết đây là chuyến du
                      lịch biển của gia đình, có ba mẹ Hoà Minzy và những người
                      em thân thiết trong gia đình Hoa Dâm Bụt.
                    </p>
                    <p>
                      Trong vlog, Hoà Minzy chia sẻ thêm nhiều thông tin liên
                      quan đến con trai, nữ ca sĩ tiết lộ khi bé Bo tròn 8 tháng
                      thì vợ chồng cô vẫn chưa có ý định công khai con. Tuy
                      nhiên, thiếu gia Minh Hải và bà xã không giấu con như lời
                      dân mạng đồn thổi. Cô nhiều lần bế bé đi làm nhưng ít ai
                      phát hiện ra: "2 mẹ con lúc nào cũng đi như vật đến nơi
                      Hoà diễn nhưng không ai để ý chứ không phải Hoà giấu em Bo
                      đâu ạ".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/bo5-16287783388081878185934.jpg"
                      alt="1, hòa minzy,ca sĩ hoà minzy,gia đình Hoà Minzy,bé bo con trai hoà minzy,con sao việt,sao Việt,showbiz Việt,body của sao,Nhóc tỳ sao việt,con của sao,Hoà Minzy sinh con,"
                      note="Lúc 8 tháng tuổi, bé Bo được mẹ bế đi khắp nơi nhưng thời điểm này cô chưa có ý định sẽ khoe con trước khán giả"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/bo7-16287783567681734437213.jpg"
                      alt="2, hòa minzy,ca sĩ hoà minzy,gia đình Hoà Minzy,bé bo con trai hoà minzy,con sao việt,sao Việt,showbiz Việt,body của sao,Nhóc tỳ sao việt,con của sao,Hoà Minzy sinh con,"
                      note="Cô cũng tiết lộ không hề có ý định giấu quý tử nhưng chỉ tại.. .cô chú không để ý thôi"
                    />
                    <p>
                      Không phải vào dịp Lễ Tình Nhân năm 2021, bé Bo thật ra đã
                      được bố mẹ cho ra mắt cô chú vào cuối năm 2020 tại 1 buổi
                      họp fan của tại Hà Nội của nữa ca sĩ. Đến nay dân tình mới
                      hiểu lý do tại sao Hoà Minzy khoe quà là món đồ chơi em bé
                      ngay khi vừa xác nhận đã hạ sinh con đầu lòng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/bo6-16287783480701806287246.jpg"
                      alt="3, hòa minzy,ca sĩ hoà minzy,gia đình Hoà Minzy,bé bo con trai hoà minzy,con sao việt,sao Việt,showbiz Việt,body của sao,Nhóc tỳ sao việt,con của sao,Hoà Minzy sinh con,"
                      note="Bé Bo đã cùng mẹ bay ra Hà Nội để dự buổi gặp gỡ thân mật với người hâm mộ"
                    />
                    <p>
                      Bé Bo nhà Hoà Minzy mới chỉ 8 tháng tuổi đã dễ thương mức
                      này, hỏi sao bố mẹ bỉm "nghiện con" chụp ảnh đến hết dung
                      lượng điện thoại
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/hoa-1628783264899897860642.jpg"
                      alt="4, hòa minzy,ca sĩ hoà minzy,gia đình Hoà Minzy,bé bo con trai hoà minzy,con sao việt,sao Việt,showbiz Việt,body của sao,Nhóc tỳ sao việt,con của sao,Hoà Minzy sinh con,"
                      note="Bức ảnh đầu tiên của 2 mẹ con được Minh Hải chia sẻ để chính thức xác nhận đã có con đầu lòng, tuy nhiên bé Bo đã được 2 vợ chồng khoe với fan ruột và bạn bè trước đó"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Trong vlog của con trai, mẹ bỉm Hoà Minzy cũng tranh thủ
                      "chiếm sóng" bởi màn diện bikini sexy, khoe vòng 1 quyến
                      rũ sau 8 tháng "vượt cạn". Lục lại những bức ảnh được Hoà
                      Minzy đăng tải trên các trang mạng xã hội cùng thời điểm
                      trên, có thể nhận ra nữ ca sĩ đã lấy lại vóc dáng nuột nà,
                      thon gọn thần tốc, đúng chuẩn "gái 1 con trông mòn con
                      mắt" khiến nhiều người không khỏi ngưỡng mộ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/2324092592288533823359793669150273412066115n-16287915555181405160798.jpg"
                      alt="5, hòa minzy,ca sĩ hoà minzy,gia đình Hoà Minzy,bé bo con trai hoà minzy,con sao việt,sao Việt,showbiz Việt,body của sao,Nhóc tỳ sao việt,con của sao,Hoà Minzy sinh con,"
                      note="Hoà Minzy khoe vòng 1 căng đầy sau 8 tháng sinh nở, bé Bo giật spotlight với biểu cảm ngơ ngác trong khi bố mẹ cười toe toét"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/img3918-2-16287835601631903458011.jpg"
                      alt="6, hòa minzy,ca sĩ hoà minzy,gia đình Hoà Minzy,bé bo con trai hoà minzy,con sao việt,sao Việt,showbiz Việt,body của sao,Nhóc tỳ sao việt,con của sao,Hoà Minzy sinh con,"
                      note="Mẹ bỉm Hoà Minzy bế con trai, khoe lưng trần quyến rũ"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/img3916-2-1628783536586246152157.jpg"
                      alt="7, hòa minzy,ca sĩ hoà minzy,gia đình Hoà Minzy,bé bo con trai hoà minzy,con sao việt,sao Việt,showbiz Việt,body của sao,Nhóc tỳ sao việt,con của sao,Hoà Minzy sinh con,"
                      note="Mặc dù đã là mẹ một con, nhưng vóc dáng của Hoà Minzy khiến hội chị em trầm trồ"
                    />
                    <p>
                      Khoảnh khắc "copy & paste" không lệch đi đâu được của Minh
                      Hải và con trai
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/photo2021-08-1300-06-05-16287880069881211396132.jpg"
                      alt="8, hòa minzy,ca sĩ hoà minzy,gia đình Hoà Minzy,bé bo con trai hoà minzy,con sao việt,sao Việt,showbiz Việt,body của sao,Nhóc tỳ sao việt,con của sao,Hoà Minzy sinh con,"
                      note="Hiện tại, bé Bo đã được gần 2 tuổi và là 1 trong những nhóc tỳ sở hữu lượng fan khủng trên MXH"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/hoa-minzy-chinh-thuc-xac-nhan-co-con-cong-bo-hinh-anh-con-trai-af9a5ee4-16287865436941841377666.jpg"
                      alt="9, hòa minzy,ca sĩ hoà minzy,gia đình Hoà Minzy,bé bo con trai hoà minzy,con sao việt,sao Việt,showbiz Việt,body của sao,Nhóc tỳ sao việt,con của sao,Hoà Minzy sinh con,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/img3917-2-16287835502881982690426.jpg"
                      alt="10, hòa minzy,ca sĩ hoà minzy,gia đình Hoà Minzy,bé bo con trai hoà minzy,con sao việt,sao Việt,showbiz Việt,body của sao,Nhóc tỳ sao việt,con của sao,Hoà Minzy sinh con,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/bo4-16287783278461181622691.jpg"
                      alt="11, hòa minzy,ca sĩ hoà minzy,gia đình Hoà Minzy,bé bo con trai hoà minzy,con sao việt,sao Việt,showbiz Việt,body của sao,Nhóc tỳ sao việt,con của sao,Hoà Minzy sinh con,"
                      note=""
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/12/aug-12-2021-22-58-27-1628787538293872451107.gif"
                      alt="13, hòa minzy,ca sĩ hoà minzy,gia đình Hoà Minzy,bé bo con trai hoà minzy,con sao việt,sao Việt,showbiz Việt,body của sao,Nhóc tỳ sao việt,con của sao,Hoà Minzy sinh con,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/12/aug-12-2021-23-05-30-162878753866797927845.gif"
                      alt="14, hòa minzy,ca sĩ hoà minzy,gia đình Hoà Minzy,bé bo con trai hoà minzy,con sao việt,sao Việt,showbiz Việt,body của sao,Nhóc tỳ sao việt,con của sao,Hoà Minzy sinh con,"
                      note=""
                    />
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
