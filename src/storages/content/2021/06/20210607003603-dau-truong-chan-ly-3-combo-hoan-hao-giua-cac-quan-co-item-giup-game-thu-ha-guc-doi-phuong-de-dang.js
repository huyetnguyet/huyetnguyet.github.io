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
"timestamp": 07/06/2021 12:36 AM",
"title": Đấu Trường Chân Lý: 3 combo hoàn hảo giữa các quân cờ, item giúp game thủ hạ gục đối phương dễ dàng",
"description": Game thủ Đấu Trường Chân Lý có thể áp dụng những combo dưới đây để leo rank một cách vô cùng hiệu quả.",
"src": ",
"alt": Dau Truong Chan Ly, Cam Nang Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Kennen, Ziggs, Thresh, Syndra, Warwick, ",
"category": games",
"date": 07/06/2021",
"time": 12:36 AM",
"link": "/dau-truong-chan-ly-3-combo-hoan-hao-giua-cac-quan-co-item-giup-game-thu-ha-guc-doi-phuong-de-dang",
"zcomponent": page_20210607003603",
"filepath": ./20210607003603-dau-truong-chan-ly-3-combo-hoan-hao-giua-cac-quan-co-item-giup-game-thu-ha-guc-doi-phuong-de-dang.js"
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
  "Đấu Trường Chân Lý: 3 combo hoàn hảo giữa các quân cờ, item giúp game thủ hạ gục đối phương dễ dàng";
const author = "A Đồi";
const source = "Trí Thức Trẻ";
const timestamp = "07/06/2021 12:36 AM";
const description =
  "Game thủ Đấu Trường Chân Lý có thể áp dụng những combo dưới đây để leo rank một cách vô cùng hiệu quả.";
const link =
  "dau-truong-chan-ly-3-combo-hoan-hao-giua-cac-quan-co-item-giup-game-thu-ha-guc-doi-phuong-de-dang";
const tagparam = [
  "dau-truong-chan-ly",
  "cam-nang-dau-truong-chan-ly",
  "riot-games",
  "riot",
  "game",
  "tin-game",
  "kennen",
  "ziggs",
  "thresh",
  "syndra",
  "warwick",
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

export default function page_20210607003603() {
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
                    <p></p>
                    <p>
                      Có thể nói để vận hành đội hình Ác Quỷ thành công thì Dao
                      Điện Statikk là trang bị không thể thiếu. Bên cạnh việc
                      cung cấp năng lượng cho tướng sở hữu, khả năng trừ kháng
                      phép lên các unit tuyến sau của Dao Điện Statikk tỏ ra quá
                      phù hợp với các unit Ác Quỷ. Lý do là bởi những unit như
                      Poppy,
                      <strong>Kennen</strong>
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/4/28/-16195984600291477540285.jpg"
                      alt="Dau Truong Chan Ly, Cam Nang Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Kennen, Ziggs, Thresh, Syndra, Warwick, "
                      note="Ziggs thường là unit có trách nhiệm cầm Dao Điện Statikk"
                    />
                    <p>
                      Chính vì lý do này nên đội hình Ác Quỷ rất cần Dao Điện
                      Statikk để có thể gia tăng lượng sát thương đầu ra. Nếu
                      không thì<strong>game</strong>
                    </p>
                    <p>
                      <strong>Thresh</strong>
                    </p>
                    <p>
                      Mặc dù không có bộ tộc - hệ liên quan với nhau nhưng kỹ
                      năng của Thresh và Syndra có thể kết hợp cực kỳ tốt để hạ
                      gục nhanh chóng chủ lực phe địch. Với
                      <strong>Syndra</strong>
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/6/th-16229659375041149405810.jpg"
                      alt="Dau Truong Chan Ly, Cam Nang Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Kennen, Ziggs, Thresh, Syndra, Warwick, "
                      note="Một ví dụ về việc xây dựng đội hình dựa vào combo Thresh - Syndra"
                    />
                    <p>
                      Bạn có thể sử dụng combo này để bổ sung ngay lập tức một
                      lượng damage lớn cho đội hình khi không có nhiều unit chủ
                      lực mạnh. Game thủ Đấu Trường Chân Lý có thể áp dụng team
                      4 Hiệp Sĩ - 3 Thiên Thần ở cấp độ 6 nhằm giữ máu một cách
                      hiệu quả nhất khi chơi xoay quanh combo Thresh - Syndra.
                      Ngoài thì bạn cũng cần phải đặt Thresh và
                      <strong>Syndra</strong>
                    </p>
                    <p>
                      <strong>Warwick</strong>
                    </p>
                    <p>
                      Một trong những điểm yếu lớn nhất của đội hình Sát Thủ đó
                      là không có khả năng phòng ngự quá mạnh và dễ bị thua ở
                      giai đoạn đầu trận. Lời khuyên là bạn nên giải quyết vấn
                      đề này bằng các unit Đấu Sĩ, đặc biệt là Warwick. Về cơ
                      bản thì với sự xuất hiện của Warwick trong đội hình, game
                      thủ có thể hủy diệt tuyến sau bên phía đối phương một cách
                      dễ dàng. Hơn nữa, việc
                      <strong>Warwick</strong>
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/-1622776675669240495824.jpg"
                      alt="Dau Truong Chan Ly, Cam Nang Dau Truong Chan Ly, Riot Games, Riot, Game, Tin Game, Kennen, Ziggs, Thresh, Syndra, Warwick, "
                      note="Warwick có thể dùng kỹ năng liên tục khi tuyến sau của đối phương bị các unit Sát Thủ kéo máu từ trước"
                    />
                    <p>
                      Bí quyết ở đây đó là bạn sẽ tận dụng khả năng gây sát
                      thương lớn từ Sát Thủ để Warwick có thể dùng kỹ năng để
                      kết liễu tuyến sau của đối phương.
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
