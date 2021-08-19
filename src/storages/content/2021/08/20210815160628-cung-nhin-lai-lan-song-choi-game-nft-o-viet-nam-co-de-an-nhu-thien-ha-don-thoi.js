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
"timestamp": '15/08/2021 04:06 PM',
"title": 'Cùng nhìn lại làn sóng chơi game NFT ở Việt Nam, có "dễ ăn" như thiên hạ đồn thổi?',
"description": 'Thay vì chơi game để giải trí, giờ đây làn sóng NFT đang mang tới sức hút rất lớn cho các game thủ muốn làm giàu.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-1628672866860630037694.jpg',
"alt": 'GAME THỦ,GAME,TIN TỨC GAME,GAME NFT,',
"category": 'games',
"date": '15/08/2021',
"time": '04:06 PM',
"link": '/cung-nhin-lai-lan-song-choi-game-nft-o-viet-nam-co-de-an-nhu-thien-ha-don-thoi',
"zcomponent": 'page_20210815160628',
"filepath": './20210815160628-cung-nhin-lai-lan-song-choi-game-nft-o-viet-nam-co-de-an-nhu-thien-ha-don-thoi.js'
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
  'Cùng nhìn lại làn sóng chơi game NFT ở Việt Nam, có "dễ ăn" như thiên hạ đồn thổi?';
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "15/08/2021 04:06 PM";
const description =
  "Thay vì chơi game để giải trí, giờ đây làn sóng NFT đang mang tới sức hút rất lớn cho các game thủ muốn làm giàu.";
const link =
  "cung-nhin-lai-lan-song-choi-game-nft-o-viet-nam-co-de-an-nhu-thien-ha-don-thoi";
const tagparam = ["GAME THỦ", "GAME", "TIN TỨC GAME", "GAME NFT"];
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

export default function page_20210815160628() {
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
                      Chơi <strong>game</strong> vốn là để vui, nhưng nếu có thể
                      kiếm được tiền từ game thì chắc chắn chẳng mấy ai muốn từ
                      chối viễn cảnh này. Đó cũng là nguồn cơn, là lý do chính
                      khiến cho làn sóng NFT đang phát triển mạnh mẽ hơn bao giờ
                      hết. Đứng trước viễn cảnh chơi game ra tiền, mà lại còn là
                      con số không nhỏ, có mấy ai tránh khỏi cám dỗ chứ. Thế
                      nhưng, liệu các tựa <strong>game NFT</strong> có thật sự
                      "dễ ăn", dễ làm giàu như nhiều người vẫn đồn thổi? Vấn đề
                      này có lẽ nên xem xét lại.
                    </p>
                    <h5>
                      Kiếm tiền qua <strong>game</strong> NFT như thế nào
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-1628672866860630037694.jpg"
                      alt="1, GAME THỦ,GAME,TIN TỨC GAME,GAME NFT,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-16286728750321390537944.jpg"
                      alt="2, GAME THỦ,GAME,TIN TỨC GAME,GAME NFT,"
                      note=""
                    />
                    <p>
                      {" "}
                      Về cơ bản, có khá nhiều cách kiếm tiền thông qua các tựa{" "}
                      <strong>game</strong> NFT. Một số game cho phép người chơi
                      tận dụng luôn CPU của mình để "đào coin" trong quá trình
                      chơi. Số khác lại đưa ra những nhiệm vụ, thử thách với
                      phần thưởng không gì khác là các đồng coin tùy theo tựa
                      game của họ. Ngoài ra, người chơi cũng có thể tham gia các
                      sự kiện, hoặc bán những vật phẩm trong{" "}
                      <strong>game NFT</strong> bằng các đơn vị tiền của game
                      ấy? Nghe qua thì có vẻ dễ phải không nào.
                    </p>
                    <h5>
                      Sự nhầm lẫn tai hại của nhiều <strong>game</strong> thủ
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-16286728905351855086983.jpg"
                      alt="3, GAME THỦ,GAME,TIN TỨC GAME,GAME NFT,"
                      note=""
                    />
                    <p>
                      Thực tế, chơi <strong>game</strong> NFT cũng giống như một
                      thương vụ đầu tư vậy và nếu thiếu đi sự hiểu biết, đa số
                      các <strong>game thủ</strong> sẽ chẳng được gì ngoài việc
                      mất thời gian và tiền bạc. Đơn cử như trường hợp của Axie
                      Infinity - tựa <strong>game NFT</strong> đình đám của
                      người Việt với vốn hóa vượt ngưỡng 1 tỷ USD. Nhiều người
                      sẽ cảm thấy rất vui khi đồng AXS - đại diện cho tựa game
                      này đang tăng rất nhanh, nhưng đấy không phải là tín hiệu
                      tích cực dành cho các game thủ.
                    </p>
                    <p>
                      Vì đơn giản, khi chơi Axie Infinity, bạn sẽ nhận được phần
                      thưởng là những đồng coin mang tên SLP trong khi "vốn" ban
                      đầu bỏ ra mới cần dùng tới AXS để mua pet. Và thực tế thì
                      đồng SLP đang tụt dốc không phanh - trong khi AXS thì tăng
                      chóng mặt. Điều này dẫn tới việc các{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      mới sẽ phải đầu tư nhiều hơn để trải nghiệm Axie Infinity
                      trong khi mất nhiều thời gian hơn để thu hồi vốn khi đồng
                      SLP đang giảm giá cực mạnh.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Và đây cũng là sai lầm cơ bản mà rất nhiều{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      đã mắc phải trong suốt thời gian qua. Cũng chỉ vì thiếu
                      hiểu biết và kiến thức với các tựa{" "}
                      <strong>game NFT</strong> mà thôi.
                    </p>
                    <h5>
                      Kiếm tiền từ <strong>game</strong> NFT có dễ?
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-1628672901106433014432.jpg"
                      alt="4, GAME THỦ,GAME,TIN TỨC GAME,GAME NFT,"
                      note=""
                    />
                    <p>
                      Chắc chắn, nhiều người đã thành công trong việc kiếm tiền
                      từ các tựa <strong>game</strong> NFT, nhưng nên nhớ, rủi
                      ro cũng luôn đi kèm. Đừng nghĩ NFT là một trò chơi, không
                      mất gì mà vẫn có phần thưởng. Trên đời không có thứ hấp
                      dẫn như vậy đâu. Nếu muốn trải nghiệm thật sự, hãy coi các
                      tựa <strong>game NFT</strong> như một dự án đầu tư của
                      mình vậy.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-1628672913150188773639.jpg"
                      alt="5, GAME THỦ,GAME,TIN TỨC GAME,GAME NFT,"
                      note=""
                    />
                    <p>
                      Thông tin, kiến thức, sự tìm tòi sẽ là những yếu tố cần
                      thiết nếu như bạn thật sự muốn khám phá một tựa{" "}
                      <strong>game</strong> NFT kỹ càng. Còn nếu không, tốt nhất
                      là đừng dại dột mà mạo hiểm đầu tư, hãy cứ chơi game MOBA
                      hoặc game online đi, nhẹ đầu mà không cần phải suy nghĩ
                      nhiều. Suy cho cùng, game cũng chỉ là thú vui giải trí mà
                      thôi, còn với các tựa <strong>game NFT</strong>, sẽ là
                      chính xác hơn nếu gọi chúng như một dự án đầu tư vậy.
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
