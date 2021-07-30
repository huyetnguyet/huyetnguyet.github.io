import React from "react";
import "components/page.css";
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
"timestamp": '30/07/2021 12:19 PM',
"title": '“Nước đến bàn phím vẫn không nhảy", game thủ mặc kệ dòng lũ, xắn quần ngồi đánh quái',
"description": 'Những hình ảnh game thủ Philippines ngồi “cày” game mặc cho dòng nước lũ dâng lên với tốc độ nhanh chóng đang thu hút sự chú ý của cộng đồng.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-16275517364501564578952.jpg',
"alt": 'GAME THỦ,CÀY GAME,PHILIPPINES,',
"category": 'games',
"date": '30/07/2021',
"time": '12:19 PM',
"link": '/nuoc-den-ban-phim-van-khong-nhay-game-thu-mac-ke-dong-lu-xan-quan-ngoi-danh-quai',
"zcomponent": 'page_20210730121934',
"filepath": './20210730121934-nuoc-den-ban-phim-van-khong-nhay-game-thu-mac-ke-dong-lu-xan-quan-ngoi-danh-quai.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  '“Nước đến bàn phím vẫn không nhảy", game thủ mặc kệ dòng lũ, xắn quần ngồi đánh quái';
const author = "Kayle";
const source = "Trí Thức Trẻ";
const timestamp = "30/07/2021 12:19 PM";
const description =
  "Những hình ảnh game thủ Philippines ngồi “cày” game mặc cho dòng nước lũ dâng lên với tốc độ nhanh chóng đang thu hút sự chú ý của cộng đồng.";
const link =
  "nuoc-den-ban-phim-van-khong-nhay-game-thu-mac-ke-dong-lu-xan-quan-ngoi-danh-quai";
const tagparam = ["GAME THỦ", "CÀY GAME", "PHILIPPINES"];
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

export default function page_20210730121934() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <p>
                    Nội dung game hay, đồ hoạ đẹp mắt, tính giải trí cao… có rất
                    nhiều lý do để lý giải sức hấp dẫn của các trò chơi, nhất là
                    với những đối tượng trẻ tuổi. Thế nhưng cuốn hút{" "}
                    <strong>game thủ</strong> đến nỗi mặc kệ dòng nước lũ đang
                    dâng lên vân có thể bình thản ngồi “combat" thì quả thực
                    chưa từng thấy.
                  </p>
                  <p>
                    Chúng mình đang nhắc đến hình ảnh về một nhóm{" "}
                    <strong>game thủ</strong> người <strong>Philippines</strong>{" "}
                    đang được lan truyền và bình luận sôi nổi của cộng đồng
                    trong thời gian gần đây. Theo đó, đa số người xem cảm thấy
                    khó hiểu với hành động này của người chơi và số khác thì lo
                    lắng nếu không may họ gặp diễn biến xấu.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-16275517039001742853417.jpg"
                    alt="2, GAME THỦ,CÀY GAME,PHILIPPINES,"
                    note="Chủ quán cà phê Internet cho biết các chàng trai đã rời đi sau khi bị quay video về họ (Ảnh: ViralPress)"
                  />
                  <p>
                    Cụ thể, đoạn video được Sio Samson - chủ quán cà phê
                    Internet ở thị trấn Cainta, tỉnh Rizal ghi lại. Tại đó, dù
                    cho anh có cố gắng đưa những bị khách oái oăm này ra khỏi
                    quán nhưng dường như bất lực. Người chơi mặc cho nước bẩn và
                    bùn tràn đến chỗ ngồi nhưng vẫn kiên quyết từ chối di chuyển
                    khỏi chiếc ghế sũng nước bất chấp nguy cơ bị điện giật.
                  </p>
                  <p>
                    Chủ quán cho biết: “Hôm đó chúng tôi không lường trước được
                    nước lũ sẽ dâng cao đến vậy nên khi nhìn thấy, tôi lập tức
                    hành động và bảo phải chuyển thiết bị lên nơi cao hơn đồng
                    thời di dời khách hàng.
                  </p>
                  <p>
                    Ban đầu họ khó lòng đứng dậy, đến khi tôi quay video này,
                    các anh chàng này mới chấp nhận tàn cuộc".
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-1627551664905263408666.jpg"
                    alt="1, GAME THỦ,CÀY GAME,PHILIPPINES,"
                    note="Nước nâu tràn đến eo của các game thủ. (Ảnh: ViralPress)"
                  />
                  <p>
                    Anh Sio Samson cũng cho biết, vì nằm trong khu vực thường
                    xuyên ngập lụt nên anh cũng đã thiết kế tất cả các ổ cắm
                    điện, dây cáp điện trong quán đều cao hơn chiều cao của đầu
                    để giảm thiểu rủi ro nếu có thiên tai.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-16275517364501564578952.jpg"
                    alt="3, GAME THỦ,CÀY GAME,PHILIPPINES,"
                    note=""
                  />
                  <p>
                    May mắn thay, vụ việc vừa qua cũng không có thiệt hại về
                    người. Tất nhiên cũng là hình ảnh cảnh báo các{" "}
                    <strong>game thủ</strong> không nên quá say sưa bởi không
                    phải lần nào cũng may mắn như vậy.
                  </p>
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
