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
"timestamp": '19/08/2021 12:58 PM',
"title": 'Dragon Ball Super: Lý do thực sự khiến Grand Zeno lại yêu mến Goku đến như vậy?',
"description": 'Grand Zeno là một trong những nhân vật quyền lực nhất trong Dragon Ball Super. Là một vị Thần thế nhưng Zeno lại vô cùng yêu thích Goku, ông luôn coi anh như là bạn của mình.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/ah-1-16291008953261460905032.jpg',
"alt": 'DRAGON BALL SUPER,GIẢI ĐẤU SỨC MẠNH,THẦN HỦY DIỆT,GRAND ZENO,GOKU,',
"category": 'games',
"date": '19/08/2021',
"time": '12:58 PM',
"link": '/dragon-ball-super-ly-do-thuc-su-khien-grand-zeno-lai-yeu-men-goku-den-nhu-vay',
"zcomponent": 'page_20210819125852',
"filepath": './20210819125852-dragon-ball-super-ly-do-thuc-su-khien-grand-zeno-lai-yeu-men-goku-den-nhu-vay.js'
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
  "Dragon Ball Super: Lý do thực sự khiến Grand Zeno lại yêu mến Goku đến như vậy?";
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 12:58 PM";
const description =
  "Grand Zeno là một trong những nhân vật quyền lực nhất trong Dragon Ball Super. Là một vị Thần thế nhưng Zeno lại vô cùng yêu thích Goku, ông luôn coi anh như là bạn của mình.";
const link =
  "dragon-ball-super-ly-do-thuc-su-khien-grand-zeno-lai-yeu-men-goku-den-nhu-vay";
const tagparam = [
  "DRAGON BALL SUPER",
  "GIẢI ĐẤU SỨC MẠNH",
  "THẦN HỦY DIỆT",
  "GRAND ZENO",
  "GOKU",
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

export default function page_20210819125852() {
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
                      Nếu các bạn là fan của bộ truyện nổi tiếng Dragon Ball
                      chắc chắn không thể không biết đến cái tên Zeno. Ông được
                      cho là người sở hữu sức mạnh tối thượng vượt lên trên tất
                      cả. Không ai biết sức mạnh của Zeno thâm sâu đến đâu, chỉ
                      biết ông có thể hủy hoại toàn bộ 12 vũ trụ chỉ trong một
                      cái phẩy tay. Đó là lý do Zeno được tất cả mọi người tôn
                      kính, và run sợ trước sức mạnh của vị vua "bất khả xâm
                      phạm" và "không lường trước được".
                    </p>
                    <p>
                      Là một nhân vật quyền năng, nhận được sự tôn kính của tất
                      cả mọi người trong vũ trụ thế nhưng Zeno lại hình thành
                      một tình bạn đơn thuần với <strong>Goku</strong>. Vậy
                      chính xác thì điều gì đã khiến hai người này trở thành một
                      đôi bạn thân thiện đến như vậy?
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/ah-1-16291008953261460905032.jpg"
                      alt="1, DRAGON BALL SUPER,GIẢI ĐẤU SỨC MẠNH,THẦN HỦY DIỆT,GRAND ZENO,GOKU,"
                      note=""
                    />
                    <p>
                      Trong <strong>Dragon Ball Super</strong> thì Zeno được
                      giới thiệu sau trận chiến giữa các vũ trụ 6 và 7. Trong
                      khi ban đầu rất khó chịu vì không được mời đến quan sát
                      cuộc thi thì Zeno đã vô cùng thích thú với trận đấu cuối
                      cùng và kết bạn với <strong>Goku</strong>. Mặc dù các vị{" "}
                      <strong>Thần hủy diệt</strong> đã chỉ ra rằng một người
                      phàm là không xứng đáng để đối mặt trực tiếp với Omni
                      King, thế nhưng tình bạn giữa Goku với Zeno vẫn nảy nở
                      trong sự ngỡ ngàng của mọi người.
                    </p>
                    <p>
                      Nhiều ý kiến cho rằng "chìa khóa" cho tình bạn của{" "}
                      <strong>Goku</strong> và Zeno chính là việc anh Khỉ là
                      người đầu tiên không quan tâm đến mức độ nguy hiểm cũng
                      như sức mạnh to lớn của vị Vua tối cao này. Ngay cả những
                      người hầu cận của Zeno, lúc nào cũng tỏ ra sợ hãi và lo
                      lắng khi không biết lúc nào ông tức giận mà xóa bỏ sự tồn
                      tại của mình.
                    </p>
                    <p>
                      Thế nhưng <strong>Goku</strong> lại nói chuyện và cư xử
                      với Zeno như một người bình đẳng, thoải mái nói chuyện mà
                      không sợ sệt bất cứ điều gì, thậm chí còn đặt cho Zeno một
                      biệt danh là "Zenny". Có thể thấy Goku trái ngược hoàn
                      toàn với những người xung quanh Zeno, có lẽ điều này khiến
                      ông thấy anh đặc biệt và muốn kết bạn.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Bên cạnh đó có nhiều phân cảnh cho thấy Zeno luôn muốn tìm
                      kiếm một người bạn, ví dụ như lần <strong>Goku</strong>{" "}
                      gọi <strong>Grand Zeno</strong> từ dòng thời gian thay thế
                      của Future Trunks và ghép hai Omni Kings với nhau theo ý
                      thích của họ. Điều này cho thấy Zeno tuy ở vị trí tối cao
                      nhưng nó lại khiến ông rất cô đơn. Và Goku là người duy
                      nhất trong toàn bộ vũ trụ đã mang đến cho Zeno cảm giác ấm
                      áp và gần gũi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/anh-2-1629100895338461745947.png"
                      alt="2, DRAGON BALL SUPER,GIẢI ĐẤU SỨC MẠNH,THẦN HỦY DIỆT,GRAND ZENO,GOKU,"
                      note=""
                    />
                    <p>
                      Điều này không quá khó hiểu khi <strong>Goku</strong> là
                      một trong những nhân vật thân thiện, được chào đón nhất
                      trong suốt series. Anh có khả năng kết bạn ở mọi nơi, và
                      giờ đây khi bước vào vũ trụ rộng lớn hơn thì điều đó cũng
                      không thay đổi.
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
