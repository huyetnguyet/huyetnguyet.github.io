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
"timestamp": 07/06/2021 10:34 AM",
"title": Game Mobile của người Việt làm ra đứng top 1 BXH cổng game nổi tiếng Trung Quốc, vượt qua cả ĐTCL Mobile",
"description": Mới đây, tựa game Mobile Fanmade của Việt Nam đã xuất sắc đứng vị trí top 1 bảng xếp hạng cổng game nổi tiếng của Trung Quốc.",
"src": https://gamek.mediacdn.vn/133514250583805952/2021/6/7/photo-1-1623048377886367284082.jpg",
"alt": Hang Rong Mobile, Hang Rong Online, Hang Rong, Vng, Dau Truong Chan Ly Mobile, Dtcl Mobile, Game, Tin Tuc Game, ",
"category": games",
"date": 07/06/2021",
"time": 10:34 AM",
"link": "/game-mobile-fanmade-cua-viet-nam-dung-top-1-bxh-cong-game-noi-tieng-trung-quoc-vuot-qua-ca-dtcl-mobile",
"zcomponent": page_20210607103429",
"filepath": ./20210607103429-game-mobile-fanmade-cua-viet-nam-dung-top-1-bxh-cong-game-noi-tieng-trung-quoc-vuot-qua-ca-dtcl-mobile.js"
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
  "Game Mobile của người Việt làm ra đứng top 1 BXH cổng game nổi tiếng Trung Quốc, vượt qua cả ĐTCL Mobile";
const author = "Lee Chueng Hee";
const source = "Pháp luật và bạn đọc";
const timestamp = "07/06/2021 10:34 AM";
const description =
  "Mới đây, tựa game Mobile Fanmade của Việt Nam đã xuất sắc đứng vị trí top 1 bảng xếp hạng cổng game nổi tiếng của Trung Quốc.";
const link =
  "game-mobile-fanmade-cua-viet-nam-dung-top-1-bxh-cong-game-noi-tieng-trung-quoc-vuot-qua-ca-dtcl-mobile";
const tagparam = [
  "hang-rong-mobile",
  "hang-rong-online",
  "hang-rong",
  "vng",
  "dau-truong-chan-ly-mobile",
  "dtcl-mobile",
  "game",
  "tin-tuc-game",
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

export default function page_20210607103429() {
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
                      Nói đến TapTap thì chắc chắn <strong>game</strong> thủ
                      Việt sẽ không còn cảm thấy xa lạ. Đây là cổng game trực
                      tuyến nổi tiếng và rất thịnh hành tại thị trường Trung
                      Quốc và thậm chí cả cộng đồng quốc tế. Taptap được biết
                      đến như một nơi mà game thủ có thể theo dõi những thông
                      tin về các sản phẩm game mới nhất cũng như được tiếp cận,
                      tải về sớm các bom tấn. Ví dụ như Đấu Trường Chân Lý
                      Mobile và cả Liên Minh: Tốc Chiến.
                    </p>
                    <p>
                      Mới đây, một tựa <strong>game</strong> Fanmade của Việt
                      Nam đã xuất sắc đứng Top 1 trên bảng xếp hạng game phổ
                      biến của cổng game nổi tiếng này. Và tựa game đó chính là
                      Hàng Rong Mobile, trò chơi được chính bàn tay của một nhóm
                      phát triển tại Việt Nam thực hiện dựa trên ý tưởng của
                      Hàng Rong Online ngày trước.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/7/photo-1-1623048377886367284082.jpg"
                      alt="Hang Rong Mobile, Hang Rong Online, Hang Rong, Vng, Dau Truong Chan Ly Mobile, Dtcl Mobile, Game, Tin Tuc Game, "
                      note=""
                    />
                    <p>
                      Tưởng rằng dự án này đã phải tạm dừng vô thời hạn do liên
                      quan đến vấn đề kinh phí song bất ngờ là Hàng Rong Mobile
                      đã xuất sắc trở lại, thậm chí còn khởi động lại phiên bản
                      trên nền tảng iOS. Đó cũng chính là lý do mà tại sao Hàng
                      Rong Mobile lại bất ngờ nhận được sự quan tâm rất lớn của
                      cộng đồng <strong>game</strong> thủ Việt và phần nào giải
                      thích được nguyên nhân sản phẩm này vượt qua những tên
                      tuổi như Đấu Trường Chân Lý Mobile, Crossfire Mobile (tại
                      Trung Quốc)… trên bảng xếp hạng game nổi tiếng của Trung
                      Quốc.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/7/photo-1-1623048388223398432994.png"
                      alt="Hang Rong Mobile, Hang Rong Online, Hang Rong, Vng, Dau Truong Chan Ly Mobile, Dtcl Mobile, Game, Tin Tuc Game, "
                      note=""
                    />
                    <p>
                      Từ giai đoạn cuối năm 2020, Hàng Rong Mobile là một trong
                      những tựa <strong>game</strong> được người chơi Việt mong
                      đợi. Tuy không phải được phát triển và phát hành bởi bất
                      kỳ một ông lớn nào mà đơn giản chỉ có một đội ngũ nhỏ vì
                      yêu mến Hàng Rong Online ngày nào mà muốn tái sinh lại tựa
                      game này.
                    </p>
                    <p>
                      Việc không thể có mặt trên các kho tải chính thức tại Việt
                      Nam lý giải vì sao Hàng Rong Mobile lại nhận được sự quan
                      tâm trên cổng <strong>game</strong> TapTap. Tuy nhiên thì
                      đây cũng là một tín hiệu tích cực cho thấy Hàng Rong
                      Mobile vẫn đang đi đúng hướng và cơ hội trải nghiệm cho
                      game thủ vẫn còn rộng mở trong tương lai.
                    </p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
