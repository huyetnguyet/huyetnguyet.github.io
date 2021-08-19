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
"timestamp": '19/08/2021 12:59 PM',
"title": 'Những tựa game chơi đơn dài dằng dặc nhưng ai cũng muốn dài nữa',
"description": 'Lý do đơn giản cho việc này là do game quá cuốn khiến họ không thể từ bỏ.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/17/photo-1-16292170219291431767090.jpg',
"alt": 'GAME,',
"category": 'games',
"date": '19/08/2021',
"time": '12:59 PM',
"link": '/nhung-tua-game-choi-don-dai-dang-dac-nhung-ai-cung-muon-dai-nua',
"zcomponent": 'page_20210819125932',
"filepath": './20210819125932-nhung-tua-game-choi-don-dai-dang-dac-nhung-ai-cung-muon-dai-nua.js'
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
const title = "Những tựa game chơi đơn dài dằng dặc nhưng ai cũng muốn dài nữa";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 12:59 PM";
const description =
  "Lý do đơn giản cho việc này là do game quá cuốn khiến họ không thể từ bỏ.";
const link = "nhung-tua-game-choi-don-dai-dang-dac-nhung-ai-cung-muon-dai-nua";
const tagparam = ["GAME"];
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

export default function page_20210819125932() {
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
                    <h5>1. Monster Hunter 4 Ultimate</h5>
                    <p>
                      {" "}
                      Monster Hunter đã trở thành một hiện tượng mang tính toàn
                      cầu trong cỡ một thập kỷ qua. Trước khi Monster Hunter
                      World làm mưa làm gió trên khắp thế giới, Monster Hunter 4
                      Ultimate được coi là phiên bản hoàn hảo nhất của tựa{" "}
                      <strong>game</strong> này dành cho những người yêu thích
                      việc săn bắt quái vật. MH4U có thể coi là một sự khởi đầu
                      mới rất tuyệt vời dành cho những người chơi lần đầu tiên
                      đến với thế giới giả tưởng này, trong khi phiên bản 3DS
                      phát hành sau là “Generations” lại hướng tới những người
                      chơi kỳ cựu, vốn đã quen thuộc rồi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/17/photo-1-16292170219291431767090.jpg"
                      alt="1, GAME,"
                      note=""
                    />
                    <p>
                      Việc tiêu diệt từ con quái vật này đến con quái vật khác
                      tạo nên sự trải nghiệm tuyệt vời cho mọi{" "}
                      <strong>game</strong> thủ. Những con quái vật trong phiên
                      bản này đều được đánh giá là thiết kế rất tốt, từ lối chơi
                      cho tới tạo hình, đảm bảo để người chơi không thể dứt và
                      từ bỏ tựa game này trong khoảng thời gian ít hơn 80 tiếng
                      được.
                    </p>
                    <h5>2. Grand Theft Auto: San Andreas </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/17/photo-1-16292179335302011652193.jpg"
                      alt="2, GAME,"
                      note=""
                    />
                    <p>
                      {" "}
                      GTA San Andreas là phiên bản mở rộng của GTA III và được
                      Rockstar phát hành vào năm 2004. Đã 15 năm trôi qua kể từ
                      ngày ra mắt, San Andreas vẫn là một trong những phiên bản
                      GTA được yêu thích và chơi nhiều nhất. Cuộc phiêu lưu của
                      CJ và đồng bọn vẫn được nhiều người đánh giá là một trong
                      những câu chuyện về "giấc mơ Mỹ" tuyệt vời nhất Rockstar
                      mang tới cho fan hâm mộ.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Cốt truyện của <strong>game</strong> xoay quanh chỉ một
                      nhân vật chính người Mỹ gốc Phi tên Carl Johnson, người đã
                      rời khỏi những băng đảng ở quê hương Los Santos để đến làm
                      lại cuộc đời tại Liberty City. Tuy nhiên sau khi nghe tin
                      mẹ anh bị giết chết trong một vụ thanh toán đẫm máu, CJ
                      quyết định trở về Los Santos và truy tìm tung tích hung
                      thủ. Với cốt truyện cực kỳ hấp dẫn, sẽ không quá ngạc
                      nhiên khi GTA:SA ngốn của người chơi chỉ "vỏn vẹn" hơn 90
                      tiếng.{" "}
                    </p>
                    <h5>3. Final Fantasy XII</h5>
                    <p>
                      Final Fantasy XII là phần thứ 12 trong series chính Final
                      Fantasy, tựa <strong>game</strong> được phát hành vào năm
                      2006 trên PS2 và đã nhanh chóng trở thành "1 trong 4 tựa
                      game bán chạy nhất trong năm 2006". Đây là tựa game đầu
                      tiên thuộc dòng game Final Fantasy nhận điểm số 40/40 hoàn
                      hảo tới tập chí Famitsu và nhận được vô số các giải thưởng
                      tới từ cả Nhật Bản và cả nước phương Tây.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-1-16292170447892130779066.jpg"
                      alt="3, GAME,"
                      note=""
                    />
                    <p>
                      <strong>Game</strong> lấy bối cảnh ở vùng đất giả tưởng
                      Ivalice, nơi chiến tranh nổ ra liên miên giữa hai vương
                      quốc lớn là Archadia và Rozarria khiến cho những quốc gia
                      nhỏ bé nằm giữa hai thế lực này như Dalmasca phải hứng
                      chịu hậu quả nặng nề. Người chơi sẽ điều khiển công chúa
                      Ashe của Dalmasca cùng một nhóm bạn đồng hành trên hành
                      trình thiết lập lại hòa bình cho Ivalice.{" "}
                    </p>
                    <p>
                      Với chất lượng đã được đảm bảo, rõ ràng Final Fantasy XII
                      vẫn không hề gây một chút thất vọng nào cho bất kỳ ai yêu
                      thích dòng <strong>game</strong> JRPG. Tổng thời lượng
                      game lên tới 120 tiếng, để hoàn thành tựa game này chắc
                      chắn bạn sẽ tốn rất nhiều thời gian.{" "}
                    </p>
                    <p></p>
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
