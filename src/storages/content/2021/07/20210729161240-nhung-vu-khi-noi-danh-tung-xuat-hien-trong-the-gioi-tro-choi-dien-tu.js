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
"timestamp": '29/07/2021 04:12 PM',
"title": 'Những vũ khí nổi danh từng xuất hiện trong thế giới trò chơi điện tử',
"description": 'Không chỉ mạnh nhất, bá nhất, chúng còn là những cái tên đình đám được nhiều người chơi game biết tới.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/photo-1-16254123885261530926387.jpg',
"alt": 'VŨ KHÍ,GAME,',
"category": 'games',
"date": '29/07/2021',
"time": '04:12 PM',
"link": '/nhung-vu-khi-noi-danh-tung-xuat-hien-trong-the-gioi-tro-choi-dien-tu',
"zcomponent": 'page_20210729161240',
"filepath": './20210729161240-nhung-vu-khi-noi-danh-tung-xuat-hien-trong-the-gioi-tro-choi-dien-tu.js'
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
  "Những vũ khí nổi danh từng xuất hiện trong thế giới trò chơi điện tử";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:12 PM";
const description =
  "Không chỉ mạnh nhất, bá nhất, chúng còn là những cái tên đình đám được nhiều người chơi game biết tới.";
const link =
  "nhung-vu-khi-noi-danh-tung-xuat-hien-trong-the-gioi-tro-choi-dien-tu";
const tagparam = ["VŨ KHÍ", "GAME"];
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

export default function page_20210729161240() {
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
                  <h5>1. Blades of Chaos - God of War</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/photo-1-16254123885261530926387.jpg"
                    alt="1, VŨ KHÍ,GAME,"
                    note=""
                  />
                  <p>
                    Thanh song đao Blades of Chaos sẽ mãi mãi là một biểu tượng
                    của dòng <strong>game</strong> chặt chém huyền thoại God of
                    War khi nó đã cùng “vào sinh ra tử” với Kratos trong hành
                    trình diệt thần của mình tại Hy Lạp và sau đó là sang cả
                    vùng Bắc Âu xa xôi. Món vũ khí này cũng là cơn ác mộng của
                    không ít những vụ thần vĩ đại nhất như Ares, Zeus hay mới
                    đây nhất là Baldur của thần thoại Bắc Âu.
                  </p>
                  <h5>
                    2. Tanegashima - Metal Gear Solid 4: Guns of the Patriots
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/4/photo-1-16254127047061085461694.jpg"
                    alt="2, VŨ KHÍ,GAME,"
                    note=""
                  />
                  <p>
                    Tanegashima là một khẩu súng được ra đời vào kỷ nguyên của
                    các Samurai tại Nhật Bản. Và nếu bạn đang mong chờ một khẩu
                    súng có sát thương cực lớn thì xin lỗi, đây là một trong
                    những khẩu súng có sát thương nhỏ nhất trong Metal Gear
                    Solid 4: Guns of the Patriots. Tuy nhiên điều đặc biệt của
                    khẩu súng này là nó có 33% cơ hội tạo ra một cơn lốc có thể
                    cuốn văng mọi kẻ thù.
                  </p>
                  <h5>3. Buster Sword - Final Fantasy VII</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/photo-1-1625414287927569262064.jpg"
                    alt="3, VŨ KHÍ,GAME,"
                    note=""
                  />
                  <p>
                    {" "}
                    Biểu tượng của Final Fantasy VII, bên cạnh sự xuất hiện
                    thường xuyên của mình trong các sản phẩm mang danh Final
                    Fantasy khác – Buster Sword, một thanh trường kiếm có kích
                    thước cực kỳ lớn, luôn vượt xa tầm thước của người dùng. Nó
                    cũng là một trong những thanh kiếm nổi tiếng nhất Final
                    Fantasy, bên cạnh Gunblade, Masamune, Excalibur, cũng như
                    nhiều nhiều cái tên khác.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Buster Sword ban đầu được nắm giữ bởi Angeal Hewley, được
                    tạo ra và tặng cho anh bởi người cha nuôi khi Angeal bước
                    những bước đầu tiên vào hãng ngũ của SOLDIER. Sau đó, Buster
                    Sword còn tiếp tục qua tay Zack Fair, đồng đội của Angeal
                    khi anh buộc phải giết chết người bạn của mình. Cuối cùng,
                    Buster Sword được kế tục bởi một truyền nhân, một anh hùng,
                    người đã làm thanh kiếm này vang danh thực sự, đó là Cloud
                    Strife.
                  </p>
                  <h5>4. Dagger of Time - Prince of Persia</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/photo-1-16254141646141153283710.jpg"
                    alt="4, VŨ KHÍ,GAME,"
                    note=""
                  />
                  <p>
                    <strong>Vũ khí</strong> nổi tiếng nhất trong dòng{" "}
                    <strong>game</strong> Prince of Persia, lại là một vũ khí có
                    lai lịch hoàn toàn bí ẩn. Chỉ biết rằng, khi Sands of Time
                    được tạo ra ở Island of Time, dường như Dagger of Time cũng
                    khai sinh cùng lúc.{" "}
                  </p>
                  <p>
                    Về sau, <strong>vũ khí</strong> thần thánh này lại bị đánh
                    cắp bởi Maharajah, kẻ cai trị đất nước Ấn Độ và Vizier, cố
                    vấn dưới quyền và cũng là phản diện chính của{" "}
                    <strong>game</strong>. Dagger of Time đóng vai trò then chốt
                    trong Sands of Time và Two Thrones, mặc dù bị bỏ qua trong
                    Warrior Within, nhưng vẫn đánh dấu và một loại vũ khí cực kỳ
                    bí ẩn, có sức mạnh vô song trong Hoàng tử Ba Tư.{" "}
                  </p>
                  <h5>5. The Master Sword – The Legend of Zelda</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/photo-1-1625412490116355985400.jpg"
                    alt="5, VŨ KHÍ,GAME,"
                    note=""
                  />
                  <p>
                    The Master Sword được miêu tả là thanh kiếm duy nhất có khả
                    năng phong ấn thực thể độc ác Ganon, ác nhân truyền kiếp của
                    người hùng Link trong dòng <strong>game</strong> nổi tiếng
                    The Legend of Zelda này. Đây là thanh kiếm đại diện cho hy
                    vọng, niềm tin và sự can đảm, xét về cả sức mạnh và ý nghĩa
                    mà thanh kiếm này đại diện, đây xứng đáng là món vũ khí mạnh
                    nhất trong mọi vũ khí từng xuất hiện trong thế giới game.
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
