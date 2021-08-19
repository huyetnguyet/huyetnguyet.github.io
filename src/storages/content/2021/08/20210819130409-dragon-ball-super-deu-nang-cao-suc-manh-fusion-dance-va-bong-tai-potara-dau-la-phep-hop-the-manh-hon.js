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
"timestamp": '19/08/2021 01:04 PM',
"title": 'Dragon Ball Super: Đều nâng cao sức mạnh, Fusion Dance và bông tai Potara đâu là phép "hợp thể" mạnh hơn?',
"description": 'Trong Dragon Ball Super có rất nhiều những phương pháp hợp thể mang đến sức mạnh lớn hơn cho người dùng.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/19/abg-1-16293436932771911374204.png',
"alt": 'DRAGON BALL SUPER,FUSION DANCE,BÔNG TAI POTARA,HỢP THỂ,GOKU,VEGETA,GOGETA,VEGITO,',
"category": 'games',
"date": '19/08/2021',
"time": '01:04 PM',
"link": '/dragon-ball-super-deu-nang-cao-suc-manh-fusion-dance-va-bong-tai-potara-dau-la-phep-hop-the-manh-hon',
"zcomponent": 'page_20210819130409',
"filepath": './20210819130409-dragon-ball-super-deu-nang-cao-suc-manh-fusion-dance-va-bong-tai-potara-dau-la-phep-hop-the-manh-hon.js'
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
  'Dragon Ball Super: Đều nâng cao sức mạnh, Fusion Dance và bông tai Potara đâu là phép "hợp thể" mạnh hơn?';
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 01:04 PM";
const description =
  "Trong Dragon Ball Super có rất nhiều những phương pháp hợp thể mang đến sức mạnh lớn hơn cho người dùng.";
const link =
  "dragon-ball-super-deu-nang-cao-suc-manh-fusion-dance-va-bong-tai-potara-dau-la-phep-hop-the-manh-hon";
const tagparam = [
  "DRAGON BALL SUPER",
  "FUSION DANCE",
  "BÔNG TAI POTARA",
  "HỢP THỂ",
  "GOKU",
  "VEGETA",
  "GOGETA",
  "VEGITO",
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

export default function page_20210819130409() {
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
                      <strong>Hợp thể</strong> là sự hợp nhất của hai hoặc nhiều
                      sinh vật riêng biệt thành một, kết hợp các thuộc tính của
                      chúng, từ sức mạnh và tốc độ đến phản xạ, cho tới trí
                      thông minh và trí tuệ. Khi được hợp nhất đúng cách, sinh
                      vật duy nhất được tạo ra sẽ có một mức độ sức mạnh đáng
                      kinh ngạc, vượt xa những gì mà cả hai chiến binh có thể có
                      được.
                    </p>
                    <p>
                      Nổi bật nhất trong số đó chính là{" "}
                      <strong>Fusion Dance</strong> và{" "}
                      <strong>bông tai Potara</strong>, đây là 2 phép{" "}
                      <strong>hợp thể</strong> được nhiều người sử dụng và mang
                      đến hiệu quả cao nhất. Vậy câu hỏi đặt ra ở đây là phương
                      pháp nào mạnh hơn?
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/abg-1-16293436932771911374204.png"
                      alt="1, DRAGON BALL SUPER,FUSION DANCE,BÔNG TAI POTARA,HỢP THỂ,GOKU,VEGETA,GOGETA,VEGITO,"
                      note=""
                    />
                    <p>
                      Như chúng ta biết <strong>Fusion Dance</strong> là một kỹ
                      thuật nổi tiếng và xuất hiện sớm trong Dragon Ball. Kỹ
                      thuật này <strong>Goku</strong> học được từ hành tinh
                      Metamor trong thế giới khác, ở đó nó được gọi là
                      Metamorans. Đây là chiêu thức hợp nhất 2 người thành một
                      tạo ra một cá thể khác mạnh hơn trong một thời gian nhất
                      định bằng tư thế đặc trưng nên đã gây ấn tượng mạnh khiến
                      độc giả không thể nào quên.
                    </p>
                    <p>
                      Ví dụ như khi <strong>Goku</strong> và{" "}
                      <strong>Vegeta</strong> <strong>hợp thể</strong> bằng{" "}
                      <strong>Fusion Dance</strong>, <strong>Gogeta</strong>{" "}
                      được sinh ra nhưng đã mặc định ở trạng thái Super Saiyan
                      như thể đó là trạng thái mặc định của anh ta. Gogeta Super
                      Saiyan có tốc độ và sức mạnh đáng kinh ngạc vượt qua cả
                      Super Saiyan 3 của Goku và Super Saiyan 2 của Vegeta.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/anh-2-1629343693283846092680.jpg"
                      alt="2, DRAGON BALL SUPER,FUSION DANCE,BÔNG TAI POTARA,HỢP THỂ,GOKU,VEGETA,GOGETA,VEGITO,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, để sử dụng được <strong>Fusion Dance</strong>{" "}
                      yêu cầu 2 người <strong>hợp thể</strong> phải có sức mạnh
                      ngang nhau và thực hiện theo 1 tư thế đối xứng nhau. Sau
                      khi hợp nhất thành công, người chiến binh mới xuất hiện sẽ
                      có sức mạnh to lớn hơn rất nhiều lần 2 chiến binh cũ.
                      Ngược lại, nếu thực hiện Fusion Dance không chính xác sẽ
                      tạo ra những phiên bản thất bại như gầy hoặc béo và có sức
                      mạnh yếu ớt hơn hẳn. Và nhược điểm lớn nhất của màn hợp
                      thể này là chỉ kéo dài được 30 phút mà thôi.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Còn <strong>bông tai Potara</strong> cũng là một cách{" "}
                      <strong>hợp thể</strong> ấn tượng bậc nhất Dragon Ball.
                      Đây là cách hợp thể vừa nhanh, vừa mạnh, lại còn dễ, yêu
                      cầu duy nhất là chỉ cần có đôi bông tai của Kaioshin mà
                      thôi. Khi kết hợp bằng bông tai Potara, chiến binh mới
                      được tạo ra mà chẳng cần phải mức độ sức mạnh giống nhau,
                      ai hợp thể cũng được. Đặc biệt, nếu Kaioshin là một trong
                      2 người hợp nhất thì quá trình này có thể kéo dài vĩnh
                      viễn.
                    </p>
                    <p>
                      Ví dụ khi <strong>Goku</strong> và <strong>Vegeta</strong>{" "}
                      <strong>hợp thể</strong> bằng{" "}
                      <strong>bông tai Potara</strong> đã tạo ra một chiến binh
                      mới có tên <strong>Vegito</strong>. Vegito mang cả tính
                      cách và đặc điểm của Goku lẫn Vegeta như vừa thông minh
                      giốngVegeta, vừa pha chút hài hước, dí dỏm của Goku, những
                      tuyệt chiêu, kỹ năng của cả 2 Vegito đều sử dụng được.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/19/anh-3-16293436932921470879570.jpg"
                      alt="3, DRAGON BALL SUPER,FUSION DANCE,BÔNG TAI POTARA,HỢP THỂ,GOKU,VEGETA,GOGETA,VEGITO,"
                      note=""
                    />
                    <p>
                      Tuy nhiên nó có một nhược điểm lớn là nếu sử dụng quá
                      nhiều sức mạnh thì thời gian hiệu lực sẽ không được đảm
                      bảo đầy đủ. Như lần <strong>Goku</strong> và{" "}
                      <strong>Vegeta</strong> <strong>hợp thể</strong> thành{" "}
                      <strong>Vegito</strong> chiến đấu với Fused Zamasu, lúc
                      này mặc dù là người mạnh hơn nhưng Vegito không thể hiện
                      được nhiều, vì anh sử dụng quá nhiều sức mạnh nên đã bị
                      tách ra, kết thúc hợp thể khi chưa tới 10 phút.
                    </p>
                    <p>
                      Từ những đặc điểm trên ta có thể thấy mỗi kỹ thuật{" "}
                      <strong>hợp thể</strong> đều tăng sức mạnh lên nhiều lần
                      gần giống như nhau. Trong đó tuy{" "}
                      <strong>bông tai Potara</strong> dễ sử dụng và tồn tại
                      được lâu hơn, nhưng nó lại dễ bị tách ra khi sử dụng quá
                      nhiều sức mạnh. Điều này có thể là bởi vì chúng được sử
                      dụng bởi Supreme Kai, những người không phải là chiến
                      binh. Còn về <strong>Fusion Dance</strong> thì tuy khó sử
                      dụng, sử dụng trong thời gian ngắn nhưng lại không bị tách
                      ra đột ngột khi chiến đấu. Vì thế để đánh giá phép hợp thể
                      nào mạnh hơn chúng ta phải dựa vào hoàn cảnh, đối thủ và
                      mục đích chiến đấu.
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
