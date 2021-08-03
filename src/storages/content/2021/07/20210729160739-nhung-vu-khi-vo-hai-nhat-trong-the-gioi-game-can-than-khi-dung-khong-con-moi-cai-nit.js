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
"timestamp": '29/07/2021 04:07 PM',
"title": 'Những vũ khí vô hại nhất trong thế giới game, cẩn thận khi dùng không còn mỗi cái nịt',
"description": 'Trò chơi điện tử thỉnh thoảng lại đẻ ra một vài những thứ vũ khí không đâu, và đây là một vài thứ ăn hại nhất trong số chúng.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/6/29/-1624984287291322107325.jpg',
"alt": 'GAME,VŨ KHÍ,VÔ DỤNG,',
"category": 'games',
"date": '29/07/2021',
"time": '04:07 PM',
"link": '/nhung-vu-khi-vo-hai-nhat-trong-the-gioi-game-can-than-khi-dung-khong-con-moi-cai-nit',
"zcomponent": 'page_20210729160739',
"filepath": './20210729160739-nhung-vu-khi-vo-hai-nhat-trong-the-gioi-game-can-than-khi-dung-khong-con-moi-cai-nit.js'
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
  "Những vũ khí vô hại nhất trong thế giới game, cẩn thận khi dùng không còn mỗi cái nịt";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:07 PM";
const description =
  "Trò chơi điện tử thỉnh thoảng lại đẻ ra một vài những thứ vũ khí không đâu, và đây là một vài thứ ăn hại nhất trong số chúng.";
const link =
  "nhung-vu-khi-vo-hai-nhat-trong-the-gioi-game-can-than-khi-dung-khong-con-moi-cai-nit";
const tagparam = ["GAME", "VŨ KHÍ", "VÔ DỤNG"];
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

export default function page_20210729160739() {
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
                    <h5>1. The Suicide Gun - Duck Game</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/29/-1624984287291322107325.jpg"
                      alt="1, GAME,VŨ KHÍ,VÔ DỤNG,"
                      note=""
                    />
                    <p>
                      Duck <strong>Game</strong> là 1 tựa game đi cảnh 2D, khi
                      người chơi sẽ dùng súng để đối đầu với các đối thủ khác
                      nhau trong trận đấu. Trò chơi này có một kho{" "}
                      <strong>vũ khí</strong> thật sự khổng lồ, nhưng không phải
                      khẩu nào cũng uy lực và giúp người chơi chiến thắng được
                      cả .Một trong những khẩu súng như vậy chính là Suicide Gun
                      - khẩu súng "tự hủy".
                    </p>
                    <p>
                      Suicide Gun không chĩa nòng vào địch mà lại chĩa vào bản
                      thân bạn. Chỉ cần nhấn bóp cò, bạn sẽ cứ thế mà xả đạn vào
                      mặt của chính mình. Dĩ nhiên, vẫn có cách để sử dụng súng
                      này giết kẻ địch, nhưng có cần thiết không khi bạn có thể
                      chọn khẩu khác dễ chơi hơn?
                    </p>
                    <h5>2. Farron Greatsword – Dark Souls 3</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/29/-162498426498748058238.jpg"
                      alt="2, GAME,VŨ KHÍ,VÔ DỤNG,"
                      note=""
                    />
                    <p>
                      Dark Souls 3 có nhiều <strong>vũ khí</strong> cực mạnh
                      giúp bạn phá đảo trò chơi này một cách dễ dàng, nhưng
                      không có nghĩa là nó không có những vũ khí "phế vật".
                      Trường hợp được nhắc đến trong bài này là cây Farron
                      Greatsword - một vũ khí khiến <strong>game</strong> thủ
                      cảm thấy bực mình và... mù mắt.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Về cơ bản, Farron Greatsword chặt chém rất đã tay và đẹp
                      mắt, thế nhưng khi dùng thì người chơi sẽ mất đi khả năng
                      né đòn khi đang chuẩn bị thi ra đòn với cây đại đao này.
                      Thêm nữa, sát thương của nó cũng chỉ bình thường chứ không
                      phải quá đáng cho lắm. Thế nên, Farron Greatsword không
                      được <strong>game</strong> thủ quá ưa chuộng trong 1 tựa
                      game mà sự sống chết chỉ trong một vài tích tắc sinh tử
                      như Dark Souls 3.{" "}
                    </p>
                    <h5>3. Killstar – Far Cry 3: Blood Dragon</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-16249842371191659373289.jpg"
                      alt="3, GAME,VŨ KHÍ,VÔ DỤNG,"
                      note=""
                    />
                    <p>
                      Far Cry 3 lấy bối cảnh khoa học viễn tưởng, thế nên nó sản
                      sinh ra khá nhiều <strong>vũ khí</strong> thú vị, trong đó
                      có thể kể tới mẫu súng Killstar. Với ngoại hình bắt mắt và
                      khá ngầu, khẩu súng này bắn ra một tia laze sáng chói lóa
                      cả mắt người chơi. Nó làm cho người chơi cảm thấy, dường
                      như đây chính là cây vũ khí họ tìm bấy lâu nay.
                    </p>
                    <p>
                      Thế nhưng, điểm yếu của Killstar không sử dụng đạn thông
                      thường. Thay vào đó, khẩu súng này sẽ sử dụng nguồn năng
                      lượng từ lượng HP có sẵn. Cứ mỗi lần bóp cò, HP của người
                      chơi sẽ giảm xuống. Thế nên, khẩu súng coi như chỉ nhá nhá
                      cho đẹp vậy thôi chứ chả ai lại muốn đùa giỡn với mạng
                      sống của chính mình được cả.
                    </p>
                    <h5>4. Kolibri – Battlefield 1</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-16249842207012068008388.jpg"
                      alt="4, GAME,VŨ KHÍ,VÔ DỤNG,"
                      note=""
                    />
                    <p>
                      Kolibri là một trong những khẩu súng quái đản nhất trong
                      Battlefield 1. Nó là khẩu súng bé nhất trong{" "}
                      <strong>game</strong>, khi người chơi game trên tay thì
                      cảm giác nó còn nằm lọt thỏm trong lòng bàn tay. Nhiều
                      người từng kỳ vọng rằng Kolibri mang tính năng gì đặc
                      biệt, thế nhưng khi dùng thì họ mới biết đã lầm.{" "}
                    </p>
                    <p>
                      Kolibri thực sự... chả có gì mạnh cả. Nó gần như chả giết
                      được ai, bởi cần tới 4 viên đạn vào đầu thì mới headshot
                      được. Sát thương của nó cũng là cực yếu, thế nên ngoài mục
                      đích làm màu làm mè và làm clip sống ảo trên TikTok hay
                      YouTube, khẩu súng này nên được vứt vào một góc thì hơn.
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
