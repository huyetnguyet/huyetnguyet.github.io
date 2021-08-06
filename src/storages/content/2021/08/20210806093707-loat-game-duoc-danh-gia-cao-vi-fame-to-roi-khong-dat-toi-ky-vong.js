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
"timestamp": '06/08/2021 09:37 AM',
"title": 'Loạt game được đánh giá cao vì "fame to" rồi không đạt tới kỳ vọng',
"description": 'Nhận được nhiều lời khen cũng không phải điều gì quá tích cực đối với các nhà phát triển.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628171339462307298922.jpg',
"alt": 'GAME,',
"category": 'games',
"date": '06/08/2021',
"time": '09:37 AM',
"link": '/loat-game-duoc-danh-gia-cao-vi-fame-to-roi-khong-dat-toi-ky-vong',
"zcomponent": 'page_20210806093707',
"filepath": './20210806093707-loat-game-duoc-danh-gia-cao-vi-fame-to-roi-khong-dat-toi-ky-vong.js'
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
  'Loạt game được đánh giá cao vì "fame to" rồi không đạt tới kỳ vọng';
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "06/08/2021 09:37 AM";
const description =
  "Nhận được nhiều lời khen cũng không phải điều gì quá tích cực đối với các nhà phát triển.";
const link = "loat-game-duoc-danh-gia-cao-vi-fame-to-roi-khong-dat-toi-ky-vong";
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

export default function page_20210806093707() {
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
                    <h5>1. Final Fantasy VII: Remake</h5>
                    <p>
                      Nhắc đến fame to thì thật khó có bỏ qua dòng{" "}
                      <strong>game</strong> Final Fantasy, đặc biệt là Final
                      Fantasy VII. Khi công bố bản Remake tại sự kiện E3 2015,
                      các game thủ trên khắp thế giới đã tỏ ra rất háo hức bởi
                      cuối cùng, họ cũng được tái ngộ với những nhân vật như
                      Cloud, Aerith, Tifa và cả phản diện Sephiroth ngày nào. Dù
                      vậy, mọi thứ không như những gì họ mong muốn.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628171339462307298922.jpg"
                      alt="1, GAME,"
                      note=""
                    />
                    <p>
                      Quả thực, FFVII:R có sự cải tiến vượt trội về mặt đồ họa,
                      phần lối chơi và nhiệm vụ cũng có sự thay đổi tích cực. Dù
                      vậy, mọi thứ vẫn hơi rời rạc khi các nhiệm vụ phụ chẳng
                      liên quan mấy đến cốt truyện chính và khiến nhiều{" "}
                      <strong>game</strong> thủ bối rối. May sao, FFVII:R được
                      chia làm nhiều phần, thế nên vẫn còn rất nhiều thời gian
                      để Square Enix sửa chữa những thứ chưa được hoàn hảo.{" "}
                    </p>
                    <h5>2. Bioshock Infinite</h5>
                    <p>
                      Sau 2 phần đầu, BioShock đã trở thành một trong những tên
                      tuổi nổi đình nổi đám ở thể loại bắn súng góc nhìn thứ
                      nhất và kinh dị. Sang tới phiên bản Bioshock Infinite, nhà
                      thiết kế Ken Levine lại khiến các <strong>game</strong>{" "}
                      thủ hào hứng một lần nữa khi đưa dòng game "dưới đáy đại
                      dương" tới một thế giới hoàn toàn mới - trên bầu trời. Với
                      không gian rộng mở với lối chơi đa dạng, không có gì quá
                      ngạc nhiên khi rất nhiều game thủ đã đặt hàng ngay tựa
                      game này sau khi xem trailer.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628172394536960770028.jpg"
                      alt="2, GAME,"
                      note=""
                    />
                    <p>
                      Ưu điểm của Bioshock Infinite là khá nhiều, khi nó đem tới
                      bối cảnh hoàn toàn mới cùng nhân vật đồng hành Elizabeth
                      rất rất thú vị, nhưng nó vẫn có những giới hạn khiến các{" "}
                      <strong>game</strong> thủ không hài lòng. Sự thiếu logic
                      trong cốt truyện cũng như việc bị giới hạn trong cách sáng
                      tạo lối chơi đã khiến nhiều người cảm thấy không hài lòng
                      với những gì họ từng kỳ vọng trước đó. Dĩ nhiên, Bioshock
                      Infinite không tệ, nhưng nó nên đem tới nhiều hơn cho game
                      thủ.{" "}
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>3. Evolve</h5>
                    <p>
                      Vào năm 2015, tựa <strong>game</strong> Evolve được coi
                      như một trong những dự án tiềm năng nhất của làng game.
                      Được sản xuất bởi đội ngũ Turtle Rock Studio, những người
                      làm nên tựa game nổi tiếng Left 4 Dead, thế nên Evolve
                      được kỳ vọng sẽ "chuẩn hóa" dòng game bắn súng co-op và
                      thành công hơn cả người tiền nhiệm. Cơ mà, nó lại trở
                      thành một trong những quả bom xịt lớn nhất trong làng
                      game.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628172849237437223922.jpg"
                      alt="3, GAME,"
                      note=""
                    />
                    <p>
                      Ban đầu, Evolve nhận được kha khá lời khen ngợi từ phía
                      chuyên gia. Nhưng đến khi trải nghiệm, người ta mới nhận
                      ra Evolve thiếu cân bằng hoàn toàn và lối chơi của nó vô
                      cùng tuyến tính, lặp đi lặp lại một cách nhàm chán và bị
                      các <strong>game</strong> thủ ghét bỏ. Lượng người chơi
                      Evolve cũng không hề ổn định, số người chơi liên tục giảm
                      dần. Nhằm cứu vãn tình thế, Turtle Rock Studio và 2K Games
                      quyết định đưa tựa game này sang hình thức free to play
                      vào năm 2016. Dù vậy, đến năm 2018 thì nó vẫn bị khai tử
                      bởi chẳng ai thèm chơi nữa.
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
