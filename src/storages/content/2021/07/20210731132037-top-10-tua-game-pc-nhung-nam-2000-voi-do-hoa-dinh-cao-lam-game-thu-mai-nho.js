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
"timestamp": '31/07/2021 01:20 PM',
"title": 'Top 10 tựa game PC những năm 2000 với đồ họa đỉnh cao làm game thủ mãi nhớ',
"description": 'Những ấn tượng không thể nào quên với các anh em game thủ 8x 9x một thời.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-1627718538346379055070.jpg',
"alt": 'GAME,GAME HAY,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,',
"category": 'games',
"date": '31/07/2021',
"time": '01:20 PM',
"link": '/top-10-tua-game-pc-nhung-nam-2000-voi-do-hoa-dinh-cao-lam-game-thu-mai-nho',
"zcomponent": 'page_20210731132037',
"filepath": './20210731132037-top-10-tua-game-pc-nhung-nam-2000-voi-do-hoa-dinh-cao-lam-game-thu-mai-nho.js'
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
  "Top 10 tựa game PC những năm 2000 với đồ họa đỉnh cao làm game thủ mãi nhớ";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "31/07/2021 01:20 PM";
const description =
  "Những ấn tượng không thể nào quên với các anh em game thủ 8x 9x một thời.";
const link =
  "top-10-tua-game-pc-nhung-nam-2000-voi-do-hoa-dinh-cao-lam-game-thu-mai-nho";
const tagparam = [
  "GAME",
  "GAME HAY",
  "GAME ĐỈNH",
  "CỘNG ĐỒNG MẠNG",
  "TIN TỨC GAME",
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

export default function page_20210731132037() {
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
                    Có thể nói, những năm 2000 là thời kỳ hoàng kim của làng{" "}
                    <strong>game</strong> PC, đánh dấu sự chuyển mình trong
                    nhiều khía cạnh khác nhau. Và một trong số những điểm nhấn
                    dễ thấy nhất chính là phần đồ họa. Nó không chỉ đưa PC
                    gaming lên một tầm cao mới mà còn giúp tạo ra những trò chơi
                    với hình ảnh rất ấn tượng vào thời bấy giờ, từ đó làm tiền
                    đề để phát triển các series siêu đình đám sau này.
                  </p>
                  <p>
                    Để cùng nhìn lại chặng đường đầy huy hoàng này, mời các bạn
                    cùng điểm qua top 10 tựa <strong>game</strong> PC những năm
                    2000 với đồ họa đỉnh cao làm game thủ mãi nhớ.
                  </p>
                  <h5>Half Life 2 (2004)</h5>

                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-1627718538346379055070.jpg"
                    alt="1, GAME,GAME HAY,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />

                  <p>
                    Lấy bối cảnh vài năm sau sự kiện thảm họa xảy ra ở phần 1,
                    Half Life 2 đưa các bạn tiếp tục vào vai nhân vật chính
                    Gordon Freeman sau khi được đánh thức bởi một người đàn ông
                    bị ẩn có tên là G-Man trong tình cảnh thế giới đã bị bọn
                    người ngoài hành tinh Combine xâm lược. Cũng bởi vì cốt
                    truyện thỏa mãn lòng fan hâm mộ sau cái kết của Half Life 1,
                    tựa <strong>game</strong> này đã nhận được rất nhiều lời
                    bình luận khen ngợi, hay thậm chí được vinh danh như tựa
                    game FPS có cốt truyện hay nhất mọi thời đại. Tuy nhiên,
                    công sức để giúp cho tựa game Half Life 2 có thể thành công
                    trong mắt game thủ PC vào những năm 2000 không chỉ đến từ
                    cốt truyện, mà còn đến từ sự đánh giá cao về mặt đồ họa vào
                    thời điểm bấy giờ.
                  </p>
                  <p>
                    Không chỉ sở hữu cơ chế <strong>game</strong>play từ hệ
                    thống vũ khí, lượng máu, và các màn giải đố... giống như
                    phần trước để game thủ dễ dàng làm quen, Half Life 2 còn
                    mang tới cho người chơi một trải nghiệm hoàn toàn mới về mặt
                    đồ họa khi Valve quyết định phát triển trò chơi này bằng
                    công cụ Source mới, cải tiến hình ảnh trong game. Đây là một
                    công nghệ engine độc quyền của Valve cho phép các nhà phát
                    triển tạo ra những môi trường tuyệt đẹp và sống động nhất,
                    và cũng nhờ nó mà các yếu tố họa của Half Life 2 trở nên
                    hoàn thiện hơn rất nhiều.
                  </p>
                  <h5>Star Wars: Knight of The Old Republic (2003)</h5>

                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-1-16277185396491467178807.jpg"
                    alt="2, GAME,GAME HAY,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />

                  <p>
                    Sẽ thật là thiếu sót nếu nói về những tựa{" "}
                    <strong>game</strong> PC có đồ họa đẹp vào những năm 2000 mà
                    lại bỏ qua một tựa game mà cho tới bây giờ vẫn được nhiều
                    người nhắc đến. Và đó không phải là ai khác ngoài Star Wars:
                    Knight of The Old Republic.
                  </p>
                  <p>
                    Có thể nói, vào thời điểm đó, Knight of The Old Republic
                    mang tới một trải nghiệm đồ họa đẹp đến mức khiến nhiều
                    người không nghĩ rằng một tựa <strong>game</strong> như thế
                    có thể chào đời. Đương nhiên, điều này càng củng cố cho lý
                    do vì sao mà BioWare lại có thể thống trị thế giới game PC
                    vào những năm 2000.
                  </p>
                  <p>
                    Môi trường và các mô hình nhân vật của Knight of The Old
                    Republic được làm rất chi tiết, các pha hành động chiến đấu
                    cũng được đầu tư animation cực kỳ ấn tượng. Đây cũng chính
                    là những điểm mạnh đã xoa dịu <strong>game</strong> thủ bỏ
                    qua những vấn đề về tốc độ khung hình mà trò chơi gặp phải.{" "}
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Về bản thân mình đánh giá các địa điểm trong Knight of The
                    Old Republic được làm rất đẹp, đặc biệt là hình ảnh những
                    ngọn cỏ trên hành tinh Dantooine và Kashyyk đung đưa, uốn
                    cong khi bạn chạm vào. Hoặc trên hành tinh Tatooine, nơi bạn
                    có thể thấy những vòng xoáy của cát bụi quay thành những cơn
                    lốc nhỏ rồi tan biến đi. Ngay cả khi bạn đi đến rìa của bản
                    đồ thì <strong>game</strong> sẽ cho bạn chiêm ngưỡng những
                    bức tranh phông nền với mức độ chi tiết cao khiến cho bạn bị
                    đắm chìm vào vẻ đẹp của hành tinh này, có khi quên mất nhiệm
                    vụ ban đầu của mình là gì.
                  </p>
                  <h5>Need for Speed Underground (2003)</h5>

                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-2-1627718540180655100840.jpg"
                    alt="3, GAME,GAME HAY,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Thật khó có thể bàn cãi khi cho rằng Need for Speed
                    Underground là một trong những tựa <strong>game</strong> PC
                    đua xe có đồ họa đẹp nhất vào những năm 2000. Bên cạnh
                    gameplay thì yếu tố cũng khiến cho người chơi ấn tượng nhất
                    lúc bấy giờ khi trải nghiệm tựa game này chính là sự phản
                    chiếu ánh sáng tạo ra một mảng màu trên các vũng nước trên
                    đường đua đẹp một cách rất chân thật. Cũng khó mà không
                    ngưỡng mộ được khi EA đã thuê một chuyên gia về hiệu ứng
                    từng đoạt giải Oscar để tư vấn về đồ họa và ánh sáng cho
                    game. Và kết quả thì kinh ngạc miễn bàn: Ánh sáng mặt trời,
                    ánh đèn ban đêm phản chiếu từ các xe đua hay những vũng nước
                    trên mặt đường có lượng texture được hoàn thiện rất tốt làm
                    cho khung cảnh tổng thể trở nên chói lóa.
                  </p>
                  <p>
                    Các mô hình xe đua cũng được đầu tư chi tiết, đặc biệt là
                    khi bạn nâng cấp chúng. Ngoài ra, các hiệu ứng cháy nổ, các
                    tia lửa xuất hiện và bắn ra khắp đường phố khi các xe va
                    chạm với nhau... cũng được làm rất đẹp. Kết hợp với đó là
                    tính vật lý của <strong>game</strong> cho phép tạo ra các
                    chuỗi va chạm được thu hình chậm khiến cho mắt bạn như được
                    "rửa bằng mật ong vậy".
                  </p>
                  <h5>World of Warcraft (2004)</h5>

                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/31/photo-3-16277185396682001596577.png"
                    alt="4, GAME,GAME HAY,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                    note=""
                  />

                  <p>
                    Ra mắt vào năm 2003 bởi Blizzard, tựa <strong>game</strong>{" "}
                    MMORPG này là phiên bản Warcraft thứ 4 được phát hành. World
                    of Warcraft lấy bối cảnh ở thế giới Azeroth, đúng 4 năm sau
                    hồi kết của Warcraft III: The Frozen Throne. Đến nay thì WoW
                    đã có kha khá bản DLC được tung ra với nhiều nội dung cập
                    nhật rất hay và cuốn hút.
                  </p>
                  <p>
                    Tuy <strong>game</strong>play được khen nhiều hơn, nhưng đồ
                    họa trong WoW vào thời điểm đó, nhất là khi so với game PC
                    vào những năm 2000, cũng không phải dạng vừa đâu các bạn ạ.
                    Mỗi lần cưỡi con Gryphon vượt qua những ngọn cây tại thị
                    trấn Goldshire là biết bao game thủ đã phải há hốc vì được
                    chiêm ngưỡng khung cảnh vô cùng choáng ngợp. Chưa hết,
                    Azeroth còn có những địa điểm khiến game thủ nhớ mãi không
                    quên, từ lâu đài Ironforge được xây ngay trên vách núi, cho
                    đến ốc đảo Gadgetzan trên sa mạc Kalimdor, rồi còn thành phố
                    Thunder Bluff the Tauren được xây trên đỉnh của một cao
                    nguyên nữa. Azeroth đã truyền cảm hứng cho hàng triệu game
                    thủ thông qua vẻ đẹp của nó, và vẻ đẹp đó vẫn đang trường
                    tồn cho đến tận ngày hôm nay.
                  </p>
                  <p>Theo GVN360</p>
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
