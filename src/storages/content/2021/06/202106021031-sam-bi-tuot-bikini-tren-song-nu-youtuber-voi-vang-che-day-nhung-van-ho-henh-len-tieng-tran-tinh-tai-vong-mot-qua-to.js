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

/* Data Input */
/*

 <ContentItem
title="Sam bị tuột bikini trên sóng, nữ YouTuber vội vàng che đậy nhưng vẫn hớ hênh, lên tiếng trần tình tại 'vòng một quá to'"
content="Tai nạn của cô nàng YouTuber đang khiến khá nhiều người cảm thấy bất ngờ."
src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/photo-1-1622604324537468863202.jpg"
alt="Streamer"
types="news"
time="02/06/2021 10:31"
link="/sam-bi-tuot-bikini-tren-song-nu-youtuber-voi-vang-che-day-nhung-van-ho-henh-len-tieng-tran-tinh-tai-vong-mot-qua-to"
/>

*/
/* ---------------------------------------------------------------- */

const category = "images";
const categoryLink = "/images";

const title =
  "Sam bị tuột bikini trên sóng, nữ YouTuber vội vàng che đậy nhưng vẫn hớ hênh, lên tiếng trần tình tại 'vòng một quá to'";
const author = "MẶT TRỨNG";
const source = "PHÁP LUẬT & BẠN ĐỌC";
const date = "02/06/2021";
const time = "10:31 AM";
const description =
  "Tai nạn của cô nàng YouTuber đang khiến khá nhiều người cảm thấy bất ngờ.";
const link =
  "sam-bi-tuot-bikini-tren-song-nu-youtuber-voi-vang-che-day-nhung-van-ho-henh-len-tieng-tran-tinh-tai-vong-mot-qua-to";

const tags = ["khoe nội y", "người đăng ký", "YouTube", "Youtuber", "bikini"];

/* ---------------------------------------------------------------- */

/* 
<ContentImage
src=""
alt="Streamer"
note=""
/>
                  */

const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tags.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function page_202106021031() {
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
              <div className="author">{author}</div> - Theo {source} | {date} -
              {time}
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
                      Lên sóng thay đồ, khoe nội y bằng việc thực hiện các clip
                      Lookbook cũng như nhiều tuyến nội dung khác đang trở thành
                      một trong những chủ đề hot và được đón nhận nhiều nhất
                      trên YouTube. Chẳng thế mà thời gian gần đây, rất nhiều
                      những streamer, YouTuber cũng tỏ ra vô cùng hào hứng khi
                      chạy theo trào lưu này, khi ít nhất, nó đã mang lại những
                      điều tích cực nhất thời như view và lượng follow trong
                      ngắn hạn. Tuy nhiên, đôi khi điều này cũng mang tới một số
                      những tai nạn với cái giá rất đắt, điển hình như trường
                      hợp của Sam, một cô nàng YouTuber dưới đây.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/photo-1-1622604324537468863202.jpg"
                      alt="Streamer"
                      note="Sam - cô nàng YouTuber đang được nhắc tới trong câu chuyện"
                    />
                    <p>
                      Theo đó, vốn dĩ cô nàng YouTuber này đã khá nổi tiếng với
                      những clip hướng dẫn tập yoga cũng như các biện pháp giữ
                      gìn, tăng sự gợi cảm về vóc dáng cho các chị em. Thế
                      nhưng, như đã đề cập ở trên, theo thời gian, các nội dung
                      của cô nàng YouTuber này cũng dần dần thiên về trào lưu
                      gợi cảm nhiều hơn, như một cách để thu hút thêm fan hâm mộ
                      cũng như lượng người đăng ký. Tuy nhiên, điều gì cũng có
                      cái giá của nó.
                    </p>
                    <RelationNewsInPage />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/photo-1-1622604326599893987695.jpg"
                      alt="Streamer"
                      note="Hình ảnh của Sam ngày càng trở nên gợi cảm hơn theo thời gian"
                    />
                    <p>
                      Cụ thể, trong lần lên sóng mới nhất, không hiểu vì lý do
                      gì mà cô nàng lại bất ngờ nghĩ tới việc thử một bộ đồ bơi
                      khá gợi cảm. Vấn đề là không hiểu có sự nhầm lẫn từ đâu,
                      mà dường như kích thước bộ đồ bơi lại có phần chật chội,
                      không quá thoải mái, để rồi dẫn tới việc dây quai của Sam
                      còn bất ngờ bị tụt ngay trên sóng, khiến cô nàng hoảng hồn
                      dùng tay che đậy để tránh đi sự hớ hênh.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/6/2/photo-2-16226043266491888177528.gif"
                      alt="Streamer"
                      note="Khoảnh khắc đầy gợi cảm trên sóng của cô nàng YouTuber"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/6/2/photo-3-16226043271871578363010.gif"
                      alt="Streamer"
                      note="Mặc dù suýt gặp sự cố hớ hênh nhưng Sam vẫn tỏ ra khá bình thản"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/6/2/photo-4-1622604327247885087532.gif"
                      alt="Streamer"
                      note="Cô nàng còn không ngần ngại chia sẻ rằng bộ bikini bị chật vì vòng một và vòng ba của cô nàng đều quá to"
                    />
                    <p>
                      Tất nhiên, vì chưa có sự cố hớ hênh đáng tiếc nào xảy ra
                      nên cô nàng YouTuber cũng chẳng phải nhận án phạt quá
                      nghiêm khắc. Nhưng đổi lại, Sam cũng đã nhận phải không ít
                      những chỉ trích từ phía fan hâm mộ - những người cho rằng
                      cô nàng càng ngày càng chiêu trò để nhận lấy sự chú ý.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/6/2/photo-5-16226043273021274672683.gif"
                      alt="Streamer"
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
