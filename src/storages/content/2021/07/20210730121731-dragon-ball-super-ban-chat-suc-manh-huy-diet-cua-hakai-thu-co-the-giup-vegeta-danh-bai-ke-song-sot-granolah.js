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
"timestamp": '30/07/2021 12:17 PM',
"title": 'Dragon Ball Super: Bản chất sức mạnh hủy diệt của Hakai, thứ có thể giúp Vegeta đánh bại "Kẻ sống sót" Granolah',
"description": 'Hakai là sức mạnh của các vị Thần Hủy Diệt và dường như đã được Vegeta sử dụng trong chap mới đây.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/anh-1-1627628436774114725314.jpg',
"alt": 'DRAGON BALL SUPER,VEGETA,HOÀNG TỬ SAIYAN,THẦN HỦY DIỆT,HAKAI,SỨC MẠNH HỦY DIỆT,GRANOLAH,CHIẾN BINH MẠNH NHẤT VŨ TRỤ,',
"category": 'games',
"date": '30/07/2021',
"time": '12:17 PM',
"link": '/dragon-ball-super-ban-chat-suc-manh-huy-diet-cua-hakai-thu-co-the-giup-vegeta-danh-bai-ke-song-sot-granolah',
"zcomponent": 'page_20210730121731',
"filepath": './20210730121731-dragon-ball-super-ban-chat-suc-manh-huy-diet-cua-hakai-thu-co-the-giup-vegeta-danh-bai-ke-song-sot-granolah.js'
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
  'Dragon Ball Super: Bản chất sức mạnh hủy diệt của Hakai, thứ có thể giúp Vegeta đánh bại "Kẻ sống sót" Granolah';
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "30/07/2021 12:17 PM";
const description =
  "Hakai là sức mạnh của các vị Thần Hủy Diệt và dường như đã được Vegeta sử dụng trong chap mới đây.";
const link =
  "dragon-ball-super-ban-chat-suc-manh-huy-diet-cua-hakai-thu-co-the-giup-vegeta-danh-bai-ke-song-sot-granolah";
const tagparam = [
  "DRAGON BALL SUPER",
  "VEGETA",
  "HOÀNG TỬ SAIYAN",
  "THẦN HỦY DIỆT",
  "HAKAI",
  "SỨC MẠNH HỦY DIỆT",
  "GRANOLAH",
  "CHIẾN BINH MẠNH NHẤT VŨ TRỤ",
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

export default function page_20210730121731() {
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
                    Trong <strong>Dragon Ball Super</strong>,{" "}
                    <strong>Thần Hủy Diệt</strong> tượng trưng cho sự hủy diệt,
                    chết chóc, họ lãnh nhiệm vụ phá hủy các hành tinh để duy trì
                    sự cân bằng cho vũ trụ. Và sức mạnh làm nên tên tuổi của họ
                    chính là <strong>Hakai</strong>, đây là loại sức mạnh vô
                    cùng đặc biệt, nó có sức mạnh để tiêu diệt hầu như bất cứ
                    điều gì với ít nỗ lực, thậm chí cả những con vật vô hình như
                    linh hồn. Nhưng người bị phá hủy bởi Hakai không đi đến thế
                    giới khác và chỉ đơn giản là chấm dứt tồn tại.
                  </p>
                  <p>
                    Về bản chất <strong>Hakai</strong> là như thế nhưng trong
                    manga <strong>Thần Hủy Diệt</strong> Beerus đã từng thừa
                    nhận rằng Hakai không thể tiêu diệt những sinh vật bất tử.
                    Khi một thứ gì đó bị xóa sổ bởi Hakai thì một nguồn năng
                    lượng khổng lồ sẽ được giải phóng. Cụ thể khi một thứ gì đó
                    bị phá hủy bằng cách này, nó sẽ giải phóng một lượng lớn
                    năng lượng. Ông chứng minh rằng điều này khi tạo ra một vụ
                    nổ cực mạnh với kích thước của vật thể bằng cách phá hủy một
                    tảng đá nhỏ, khiến nó phát nổ với một lực đủ mạnh để đánh
                    bật <strong>Vegeta</strong>.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/anh-1-1627628436774114725314.jpg"
                    alt="1, DRAGON BALL SUPER,VEGETA,HOÀNG TỬ SAIYAN,THẦN HỦY DIỆT,HAKAI,SỨC MẠNH HỦY DIỆT,GRANOLAH,CHIẾN BINH MẠNH NHẤT VŨ TRỤ,"
                    note=""
                  />
                  <p>
                    Đặc biệt để sử dụng <strong>Hakai</strong> đúng cách thì tâm
                    trí của kẻ sử dụng phải luôn trong tình trạng bất ổn. Trong
                    manga, những người có thể sử dụng Hakai đeo một chiếc bông
                    tai vàng riêng biệt như một biểu tượng để họ có thể sử dụng
                    năng lực. Beerus, Champa, Belmod, Rumsshi, Liquiir và mới
                    nhất <strong>Vegeta</strong> đều đeo bông tai này.
                  </p>
                  <p>
                    Nói cho dễ hiểu thì bản chất của <strong>Hakai</strong> là
                    xóa bỏ sự tồn tại của một vật hay một người nào đó. Không
                    phải đơn giản chỉ là giết mà là "tẩy" đi sự tồn tại, giống
                    như bình thường khi chúng ta xé một tờ giấy thì nó vẫn còn
                    vụn, nhưng với Hakai thì tờ giấy sẽ hoàn toàn biến mất mà
                    không giấu vết. Với <strong>sức mạnh hủy diệt</strong> kinh
                    khủng như vậy, rõ ràng Hakai là một thứ có thể khiến bất cứ
                    kẻ nào cũng phải e sợ.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/anh-22-16276284368001012102467.jpg"
                    alt="2, DRAGON BALL SUPER,VEGETA,HOÀNG TỬ SAIYAN,THẦN HỦY DIỆT,HAKAI,SỨC MẠNH HỦY DIỆT,GRANOLAH,CHIẾN BINH MẠNH NHẤT VŨ TRỤ,"
                    note=""
                  />
                  <p>
                    Và mới đây trong chapter 74 của{" "}
                    <strong>Dragon Ball Super</strong> chúng ta đã được chứng
                    kiến màn tỏa sáng của <strong>Vegeta</strong> trước trận đấu
                    với <strong>Granolah</strong>. Cho dù ban đầu có phần lép
                    vế, nhưng sau đó Vegeta đã vận khí và hóa thành một dạng mới
                    trông ngầu lòi và có vẻ mạnh mẽ hơn. Theo lời Vegeta, có vẻ
                    dạng biến hóa mới này là sự kết hợp giữa{" "}
                    <strong>sức mạnh hủy diệt</strong> và khả năng của người
                    Saiyan. Đến Granola cũng phải hoảng sợ khi nhìn thấy nên ta
                    có thể chắc chắn dạng biến hóa này có thể mạnh hơn cả Ultra
                    Instinct của Goku.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Chứng kiến cảnh tượng này nhiều fan đã đưa ra giả thuyết
                    rằng hình dạng mới của <strong>Vegeta</strong> là kết quả
                    của việc anh sử dụng sức mạnh của{" "}
                    <strong>Thần Hủy Diệt</strong>. Điều này không quá khó hiểu
                    khi trước đó Vegeta đã được đào tạo bởi Beerus, nghĩa là sức
                    mạnh của anh sẽ phát triển gần hơn với vị Thần này. Ngoài
                    ra, trước khi Vegeta rời khỏi nơi ở của Beerus, Thấn Hủy
                    Diệt cũng đã đưa cho anh đôi bông tai của mình để chứng tỏ
                    anh có thể sử dụng <strong>sức mạnh hủy diệt</strong>. Điều
                    này sẽ giải thích tại sao Goku cảm thấy hào quang của Vegeta
                    giống God Ki nhưng khác với bình thường. Vegeta có thể đã
                    đạt được God Ki giống với Thần Hủy Diệt.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/avataf-16276284368371370232577.jpg"
                    alt="3, DRAGON BALL SUPER,VEGETA,HOÀNG TỬ SAIYAN,THẦN HỦY DIỆT,HAKAI,SỨC MẠNH HỦY DIỆT,GRANOLAH,CHIẾN BINH MẠNH NHẤT VŨ TRỤ,"
                    note=""
                  />
                  <p>
                    Nếu đúng là <strong>Vegeta</strong> sử dụng hình dạng của{" "}
                    <strong>Thần Hủy Diệt</strong> thì sức của anh là vô cùng
                    lớn. Đặc biệt nếu Vegeta có thể sử dụng{" "}
                    <strong>Hakai</strong> thì chắc chắn sẽ trở thành một đối
                    thủ đáng gờm của <strong>Granolah</strong>.
                  </p>
                  <p>
                    Đọc đến đây mọi người nghĩ sao về vấn đề này? Liệu sức mạnh
                    của <strong>Vegeta</strong> có phải là của{" "}
                    <strong>Thần Hủy Diệt</strong> hay{" "}
                    <strong>hoàng tử Saiyan</strong> có thể sử dụng{" "}
                    <strong>Hakai</strong> để đánh bại <strong>Granolah</strong>{" "}
                    hay không? Chúng ta hãy cùng chờ đón những diễn biến tiếp
                    theo của bộ truyện <strong>Dragon Ball Super</strong> để
                    biết được rõ nhé!
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
