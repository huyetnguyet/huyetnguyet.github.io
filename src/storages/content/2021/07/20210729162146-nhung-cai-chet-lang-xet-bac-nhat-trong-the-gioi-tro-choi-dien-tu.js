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
"timestamp": '29/07/2021 04:21 PM',
"title": 'Những cái chết lãng xẹt bậc nhất trong thế giới trò chơi điện tử',
"description": 'Không phải cái chết nào cũng vĩ đại như bạn nghĩ đâu, còn có vô số lý do khiến cho game thủ tức anh ách cho đến khi biết nguyên nhân.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/20/photo-1-16267868025941909041185.png',
"alt": 'GAME,',
"category": 'games',
"date": '29/07/2021',
"time": '04:21 PM',
"link": '/nhung-cai-chet-lang-xet-bac-nhat-trong-the-gioi-tro-choi-dien-tu',
"zcomponent": 'page_20210729162146',
"filepath": './20210729162146-nhung-cai-chet-lang-xet-bac-nhat-trong-the-gioi-tro-choi-dien-tu.js'
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
  "Những cái chết lãng xẹt bậc nhất trong thế giới trò chơi điện tử";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:21 PM";
const description =
  "Không phải cái chết nào cũng vĩ đại như bạn nghĩ đâu, còn có vô số lý do khiến cho game thủ tức anh ách cho đến khi biết nguyên nhân.";
const link = "nhung-cai-chet-lang-xet-bac-nhat-trong-the-gioi-tro-choi-dien-tu";
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

export default function page_20210729162146() {
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
                  <h5>1. Tomb Raider</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/20/photo-1-16267868025941909041185.png"
                    alt="1, GAME,"
                    note=""
                  />
                  <p>
                    Lara Croft là một trong những "nữ cường" nổi tiếng của thế
                    giới <strong>game</strong>. Cô gần như có thể làm dược tất
                    cả mọi thứ, từ truy tìm kho báu, đánh bại kẻ thù cho đến
                    vượt qua những thử thách vĩ đại nhất. Thế nhưng, điều khiến
                    cho Lara không làm được lại là một chuyện dễ dàng vô cùng -
                    nhảy đáp đất đúng chỗ.{" "}
                  </p>
                  <p>
                    Thật vậy, Lara Croft trong Tomb Raider có thể mất mạng rất
                    dễ dàng nếu như <strong>game</strong> thủ không cẩn thận
                    trong lúc nhảy. Của đáng tội, nhiều khi không phải game thủ
                    cố tình muốn nhảy hụt, mà là do họ không tính toán kỹ lưỡng
                    được điểm rơi mà thôi. Dù vậy, nó cũng trở thành trò hài
                    hước khiến các game thủ hay đùa cợt với nhau về khả năng của
                    Lara.{" "}
                  </p>
                  <h5>2. The Sims</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/20/photo-1-1626786831332294977312.jpg"
                    alt="2, GAME,"
                    note=""
                  />
                  <p>
                    The Sims là tựa <strong>game</strong> quản lý thuộc vào hàng
                    hay nhất trong lịch sử làng game từ trước tới nay. Trong
                    game, bạn có thể kiến tạo gần như tất cả mọi thứ để cho các
                    nhân vật có thể sinh sống, tương tác và xây dựng lên một gia
                    đình hay cộng đồng với nhau. Nhưng đó là khi mọi thứ tốt đẹp
                    thôi, còn khi mọi thứ dở ẹc thì lại là chuyện khác.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Thật vậy, thứ khiến cho bạn trở thành kẻ ác chính là việc...
                    xây nhà lung tung. Tưởng chừng đơn giản, thế nhưng rất dễ để
                    cho các nhân vật trong The Sims tử ẹo nếu như bạn cố tình
                    làm những trò "giết người" như... rút thang để không cho
                    người dưới hồ bơi trèo lên, hoặc là đặt pháo hoa cạnh những
                    thứ dễ gây cháy nổ. Đến lúc này thì bạn không khác gì một
                    tên sát nhân hàng loạt.{" "}
                  </p>
                  <h5>3. South Park: The Fractured But Whole</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/20/photo-1-16267868471511678951623.jpg"
                    alt="3, GAME,"
                    note=""
                  />
                  <p>
                    South Park là một tựa <strong>game</strong> thiên về cốt
                    truyện khá nhiều, khi các đoạn hội thoại mang đậm chất dí
                    dỏm và "nhiều muối". Thế nên, các NPC trong game cũng được
                    xây dựng một cách cẩn thận để đem tới sự thú vị và mới mẻ
                    cho người chơi. Dù vậy, người chơi cũng phải cẩn thận nếu
                    như không muốn bị nhận được sự trừng phạt từ các NPC{" "}
                  </p>
                  <p>
                    Trong South Park: The Fractured But Whole, có một NPC đặc
                    biệt dựa trên nam diễn viên nổi tiếng Morgan Freeman - người
                    hay đống vai chúa trong các bộ phim. Nếu như bạn cà khịa các
                    nhân vật thường? Không sao đâu. Thế nhưng, một khi bạn trêu
                    phải chúa thì lại là chuyện khác. Ông cụ này sẽ cho bạn biết
                    thế nào gọi là "tới công chuyện".
                  </p>
                  <h5>4. Resident Evil 4</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/20/photo-1-16267867462871857328338.jpg"
                    alt="4, GAME,"
                    note=""
                  />
                  <p>
                    QTE, hay còn được biết đến với cái tên Quick Time Event, là
                    một trong những tính năng rất hay của trò chơi điện tử.
                    Người chơi không nhất thiết cần phải spam các nút một cách
                    tùm lum để giết trùm, mà thay vào đó chỉ cần tuân theo chỉ
                    dẫn được đưa ra trên màn hình trong khoảng thời gian nhất
                    định là sẽ hoàn thành được màn chơi.
                  </p>
                  <p>
                    Dù vậy, không phải màn chơi QTE nào cũng được thiết kế tốt,
                    chẳng hạn như màn đối đầu với Krauser trong Resident Evil 4.
                    Người chơi sẽ bị giật mình bởi QTE xuất hiện chẳng theo một
                    quy tắc nào, khiến bạn hoàn toàn có thể bị giết chết theo
                    cách vô cùng không can tâm. Thế nên, nếu muốn qua bàn thì
                    người chơi cần phải rất chăm chú vào màn hình, bởi vì chỉ
                    cần sơ sẩy thôi là Krauser sẽ làm thịt bạn.{" "}
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
