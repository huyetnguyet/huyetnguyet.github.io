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
"timestamp": '07/08/2021 03:46 PM',
"title": '8 game có cốt truyện sinh ra để "lừa" game thủ (P2)',
"description": 'Những tựa game này đều có cốt truyện "hack não".',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-1628331883029848668213.jpg',
"alt": 'LIFE IS STRANGE,CỐT TRUYỆN,GAME CỐT TRUYỆN,ASSASSIN’S CREED 3,',
"category": 'games',
"date": '07/08/2021',
"time": '03:46 PM',
"link": '/8-game-co-cot-truyen-sinh-ra-de-lua-game-thu-p2',
"zcomponent": 'page_20210807154600',
"filepath": './20210807154600-8-game-co-cot-truyen-sinh-ra-de-lua-game-thu-p2.js'
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
const title = '8 game có cốt truyện sinh ra để "lừa" game thủ (P2)';
const author = "Real Madrid";
const source = "Pháp luật và bạn đọc";
const timestamp = "07/08/2021 03:46 PM";
const description = 'Những tựa game này đều có cốt truyện "hack não".';
const link = "8-game-co-cot-truyen-sinh-ra-de-lua-game-thu-p2";
const tagparam = [
  "LIFE IS STRANGE",
  "CỐT TRUYỆN",
  "GAME CỐT TRUYỆN",
  "ASSASSIN’S CREED 3",
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

export default function page_20210807154600() {
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
                      8 game có <strong>cốt truyện</strong> sinh ra để "lừa"
                      game thủ (P1)
                    </p>
                    <h5>Life is Strange</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-1628331883029848668213.jpg"
                      alt="1, LIFE IS STRANGE,CỐT TRUYỆN,GAME CỐT TRUYỆN,ASSASSIN’S CREED 3,"
                      note=""
                    />
                    <p>
                      <strong>Life is Strange</strong> là một game có{" "}
                      <strong>cốt truyện</strong> rất hay và ấn tượng, nhưng còn
                      hai cái kết của game, thì thực sự khiến game thủ cảm thấy
                      tồi tệ. Bởi vì dù có đến hai cái kết, nhưng cái kết nào
                      cũng không hoàn toàn là kết đẹp, hay nói cách khác, dù
                      chọn cái kết nào thì bạn cũng là kẻ thua cuộc mà thôi.
                      Life is Strange có hai cái kết: hoặc là hy sinh cô bạn
                      Chloe để cứu thị trấn và hàng ngàn mạng sống, hoặc cứu
                      sống cô ấy và để thị trấn bị phá hủy. Lựa chọn nào cũng
                      đều tồi tệ cả, nhưng vấn đề của game là dù trước đó bạn có
                      lựa chọn như thế nào thì cuối cùng game cũng vẫn đi về hai
                      lựa chọn đó mà thôi, không có gì khác biệt hết. Đó là điểm
                      mà khá nhiều game thủ thấy không hài lòng với Life is
                      Strange.
                    </p>
                    <h5>Assassin’s Creed 3</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-16283319539841481773760.jpg"
                      alt="2, LIFE IS STRANGE,CỐT TRUYỆN,GAME CỐT TRUYỆN,ASSASSIN’S CREED 3,"
                      note=""
                    />
                    <p>
                      Với <strong>Assassin’s Creed 3</strong>, chúng ta có hai
                      cái kết, một là ở quá khứ với Connor, hai là ở hiện đại
                      với Desmond. Và hai cái kết này, chỉ có một cái thực sự
                      tốt, và đó là cái kết của Connor. Connor đã chiến đấu và
                      giúp cuộc cách mạng thuộc địa Mỹ thành công, nhưng anh
                      nhận ra rốt cuộc chính phủ của Washington cũng chỉ là một
                      dạng "nâng cấp" của chính phủ Anh trước đây. Cuối cùng
                      Connor chiến đấu vất vả như vậy cũng chẳng để làm gì cả,
                      một cái kết thật buồn và ám ảnh.
                    </p>
                    <p>
                      Quay lại thời hiện đại với Desmond, thế giới sắp đến ngày
                      tận thế, và để cứu Trái Đất, Desmond phải kích hoạt hệ
                      thống các Đền thờ khắp thế giới để tạo ra một màn chắn bảo
                      vệ Trái Đất và Desmond phải tự hy sinh bản thân mình. Nó
                      lẽ ra là một đoạn kết cảm động nhưng cách thể hiện lại
                      không thật sự để lại ấn tượng cho người chơi. Cảm giác cứ
                      như hai người khác nhau viết hai cái kết cho game vậy, một
                      cái kết của Connor thì buồn và ám ảnh, cái kết của Desmond
                      thì lại… hơi kỳ cục và không có được sự ấn tượng cần
                      thiết.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Bioshock Infinite</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-16283320018531926568141.jpg"
                      alt="3, LIFE IS STRANGE,CỐT TRUYỆN,GAME CỐT TRUYỆN,ASSASSIN’S CREED 3,"
                      note=""
                    />
                    <p>
                      Có thể nói Bioshock Infinite là một trong những game có{" "}
                      <strong>cốt truyện</strong> hack não bậc nhất, đặc biệt là
                      cái kết của game. Để nói ngắn gọn thì, bạn tìm cách giết
                      bản thân bạn từ tương lai để ngăn cản bản thân bạn. Và kế
                      tiếp, người đồng hành Elizabeth tìm cách dìm chết bạn để
                      ngăn chặn mọi khả năng bạn có thể gây hại từ một chiều
                      không gian khác – để xóa bỏ hoàn toàn sự tồn tại của bạn.
                      Một cái kết thật sự không mấy dễ chịu.
                    </p>
                    <h5>Enslaved: Odyssey to the West</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-1628332010081119202620.jpg"
                      alt="4, LIFE IS STRANGE,CỐT TRUYỆN,GAME CỐT TRUYỆN,ASSASSIN’S CREED 3,"
                      note=""
                    />
                    <p>
                      Tựa game này là một ví dụ điển hình của thất bại trong
                      việc truyền tải <strong>cốt truyện</strong> game, dù nó đã
                      rất cố gắng để làm tốt hơn. Vấn đề của game này là nó sử
                      dụng một cú twist kinh điển đã được dùng trong bộ phim
                      "The Matrix", và lẽ dĩ nhiên là nó gần như chả có gì đột
                      phá hết. Kể cả có Andy Serkis lồng tiếng cho nhân vật
                      chính cũng không thể cứu tựa game khỏi việc bị đánh giá
                      thấp vì không có đột phá trong cốt truyện.
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
