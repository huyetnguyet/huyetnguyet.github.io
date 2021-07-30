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
"timestamp": '18/06/2021 01:01 PM',
"title": 'Bản đồ trong open-world game có thể rộng đến mức nào? Những tiết lộ khiến game thủ sửng sốt',
"description": 'Đâu là giới hạn của thế giới trong trò chơi open-world? Đôi khi game thủ sẽ phải giật mình khi biết được sự thật này.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/6/16/-16238526557041274300704.jpg',
"alt": 'KHÁM PHÁ,GAME ONLINE,GAME,TRÒ CHƠI ĐIỆN TỬ,OPEN-WORLD GAME,',
"category": 'games',
"date": '18/06/2021',
"time": '01:01 PM',
"link": '/ban-do-trong-open-world-game-co-the-rong-den-muc-nao-nhung-tiet-lo-khien-game-thu-sung-sot',
"zcomponent": 'page_20210618130145',
"filepath": './20210618130145-ban-do-trong-open-world-game-co-the-rong-den-muc-nao-nhung-tiet-lo-khien-game-thu-sung-sot.js'
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
  "Bản đồ trong open-world game có thể rộng đến mức nào? Những tiết lộ khiến game thủ sửng sốt";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "18/06/2021 01:01 PM";
const description =
  "Đâu là giới hạn của thế giới trong trò chơi open-world? Đôi khi game thủ sẽ phải giật mình khi biết được sự thật này.";
const link =
  "ban-do-trong-open-world-game-co-the-rong-den-muc-nao-nhung-tiet-lo-khien-game-thu-sung-sot";
const tagparam = [
  "KHÁM PHÁ",
  "GAME ONLINE",
  "GAME",
  "TRÒ CHƠI ĐIỆN TỬ",
  "OPEN-WORLD GAME",
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

export default function page_20210618130145() {
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
                    Open-world được lòng người chơi nhờ việc tạo ra một thế giới
                    rộng lớn, mô phỏng chân thực từ môi trường đến địa hình,
                    cách cảnh quan địa lý… Câu hỏi thú vị mà nhiều{" "}
                    <strong>game</strong> thủ đặt ra là kích thước của bề mặt
                    thế giới trong open-world liệu có thể rộng được đến đâu? Thế
                    giới này có gì thú vị so với một trò chơi bình thường?
                  </p>
                  <h3>Từ thế giới không có giới hạn</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/16/-16238525939851219383651.jpg"
                    alt="1, KHÁM PHÁ,GAME ONLINE,GAME,TRÒ CHƠI ĐIỆN TỬ,OPEN-WORLD GAME,"
                    note="Kích thước map game của một số tựa game đình đám"
                  />
                  <p>
                    Các <strong>game</strong> thủ đều đồng ý rằng trên lý
                    thuyết, map của một <strong>open-world game</strong> hoàn
                    toàn có thể trải rộng không giới hạn. Hai ví dụ điển hình
                    được kể đến là No Mans Sky và Elite Dangerous với các bản đồ
                    mô phỏng lại toàn bộ vũ trụ cùng thiên hà tương ứng. Điều
                    này vẫn đúng khi ngay cả trong các trò chơi được thiết lập
                    không dựa trên không gian cụ thể, kích thước bản đồ của
                    chúng không còn tồn tại yếu tố giới hạn.
                  </p>
                  <p>
                    Tuy nhiên, song song với các tựa <strong>game</strong> có
                    map không giới hạn, cũng có không ít các tựa game với map
                    giới hạn, và thường giới hạn này cũng khá lớn. Daggerfall là
                    một trong số các tựa game như vậy. Bản đồ đầy đủ của game
                    rộng 62.000 dặm vuông, tương đương với ½ kích thước của
                    Vương quốc Anh khi trò chơi ra mắt vào năm 1996. Song
                    Daggerfall cũng được xem như ví dụ cho việc không phải cứ mở
                    map to là tốt. Dù đã rất cố gắng trong việc thiết lập thế
                    giới, nhưng tựa game này vẫn gánh chịu vô số chỉ trích vì vẽ
                    ra hẳn một thế giới đồ sộ nhưng các yếu tố đều mờ nhạt,
                    trống rỗng và không mang ý nghĩa gì quan trọng trong game.
                  </p>
                  <h3>Đến cái "bẫy rộng lớn"</h3>
                  <p>
                    Có lẽ trường hợp của Daggerfall đã trở thành bài học để đời
                    cho các nhà phát triển <strong>game</strong> sau này rút
                    kinh nghiệm. Hai tựa game đình đám là Skyrim và GTA V được
                    xây dựng trong một thế giới khiêm tốn hơn nhiều, bù lại từng
                    chi tiết trong thế giới đó đều được khắc họa rất tỉ mỉ, từ
                    đó tạo cho người chơi cảm giác đó là thế giới thực và vô
                    cùng to lớn. Cách làm "liệu cơm gắp mắm" của hai tựa game
                    đều gặt hái được thành công, bởi người chơi thực sự đắm chìm
                    trong open-world, họ háo hức bẻ cua vì biết đâu đấy sẽ có
                    một trận chiến thú vị diễn ra.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Nhưng tại sao có rất ít tựa <strong>game</strong> mở map vô
                    hạn hoặc thậm chí là mô phỏng thế giới thực với tỉ lệ 1:1?
                    Câu trả lời không nằm những giới hạn trong thế giới thực chứ
                    không phải thế giới game.
                  </p>
                  <p>
                    Với mỗi một dặm vuông trong map open-world, đội ngũ thiết kế
                    phải mô phỏng lại từng cái cây ngọn cỏ, điều này đòi hỏi một
                    kinh phí khổng lồ. Thế giới càng đẹp mắt, mô phỏng cảnh
                    quan, địa danh thú vị, <strong>game</strong>play độc đáo,
                    các sinh vật tương tác chân thật… đòi hỏi cả thời gian lẫn
                    công sức.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/16/-1623852640646588668718.jpg"
                    alt="2, KHÁM PHÁ,GAME ONLINE,GAME,TRÒ CHƠI ĐIỆN TỬ,OPEN-WORLD GAME,"
                    note="Minecraf hiện đang là một trong số những tựa game có map gần như vô hạn, đơn giản vì cả cộng đồng lớn tham gia xây dựng nó"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/16/-16238526557041274300704.jpg"
                    alt="3, KHÁM PHÁ,GAME ONLINE,GAME,TRÒ CHƠI ĐIỆN TỬ,OPEN-WORLD GAME,"
                    note=""
                  />
                  <p>
                    Một tính toán nho nhỏ về kinh phí lẫn thời gian cần có để
                    Rockstar thực hiện map open-world mô phỏng tỉ lệ 1:1 nước Mỹ
                    trong GTA đã cho thấy rằng để mở bản đồ có kích thước gấp 50
                    hoặc thậm chí 200.000 lần so với bản đồ trong GTA 5, với
                    chất lượng tương đương, cần đến 1 triệu năm cùng khoảng 50
                    tỉ đô la. Mỗi tòa nhà, mỗi chiếc xe, từng NPC, con đường,
                    bụi rậm, tảng đá… trong open-world đều đòi hỏi được thiết kế
                    riêng rồi đưa vào, vì thế cần cả vốn liếng lẫn nhân lực và
                    thời gian hùng hậu để phát triển. Như vậy, có thể thấy rằng
                    không phải vô cớ mà các franchise <strong>game</strong>{" "}
                    open-world đình đám hiện nay phần lớn đều đến từ những công
                    ty game lớn.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/16/maxresdefault-16238528655761985080214.jpg"
                    alt="4, KHÁM PHÁ,GAME ONLINE,GAME,TRÒ CHƠI ĐIỆN TỬ,OPEN-WORLD GAME,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/16/minecraft-maps-wrath-of-the-fallen-1623852933372286086345.jpg"
                    alt="5, KHÁM PHÁ,GAME ONLINE,GAME,TRÒ CHƠI ĐIỆN TỬ,OPEN-WORLD GAME,"
                    note=""
                  />
                  <p>
                    Nói tóm lại, map open-world có thể mở rộng đến vô hạn nhưng
                    quá trình tạo ra map lại bị giới hạn.
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
