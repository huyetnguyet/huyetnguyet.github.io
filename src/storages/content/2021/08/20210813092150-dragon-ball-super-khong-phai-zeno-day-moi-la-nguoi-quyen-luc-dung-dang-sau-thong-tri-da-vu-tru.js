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
"timestamp": '13/08/2021 09:21 AM',
"title": 'Dragon Ball Super: Không phải Zeno, đây mới là người quyền lực đứng đằng sau thống trị đa vũ trụ?',
"description": 'Trong Dragon Ball Super, thì có vẻ như Zeno không phải là người nắm giữ quyền lực thực sự.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/anh-1-162866537721938394384.jpeg',
"alt": 'DRAGON BALL SUPER,THẦN HỦY DIỆT,ĐA VŨ TRỤ,KING ZENO,GRAND PRIEST,THIÊN SỨ,',
"category": 'games',
"date": '13/08/2021',
"time": '09:21 AM',
"link": '/dragon-ball-super-khong-phai-zeno-day-moi-la-nguoi-quyen-luc-dung-dang-sau-thong-tri-da-vu-tru',
"zcomponent": 'page_20210813092150',
"filepath": './20210813092150-dragon-ball-super-khong-phai-zeno-day-moi-la-nguoi-quyen-luc-dung-dang-sau-thong-tri-da-vu-tru.js'
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
  "Dragon Ball Super: Không phải Zeno, đây mới là người quyền lực đứng đằng sau thống trị đa vũ trụ?";
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "13/08/2021 09:21 AM";
const description =
  "Trong Dragon Ball Super, thì có vẻ như Zeno không phải là người nắm giữ quyền lực thực sự.";
const link =
  "dragon-ball-super-khong-phai-zeno-day-moi-la-nguoi-quyen-luc-dung-dang-sau-thong-tri-da-vu-tru";
const tagparam = [
  "DRAGON BALL SUPER",
  "THẦN HỦY DIỆT",
  "ĐA VŨ TRỤ",
  "KING ZENO",
  "GRAND PRIEST",
  "THIÊN SỨ",
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

export default function page_20210813092150() {
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
                      cả. Không ai biết sức mạnh của Zeno thâm sâu đến đâu. Chỉ
                      biết, Beerus nói Zeno không bao giờ tham chiến và ông sở
                      hữu sức mạnh vô biên còn Whis lại cho biết không ai trên
                      thế giới này mạnh hơn Zeno, vì ông sẽ là người sau cùng
                      loại bỏ bất cứ điều gì; từ cá nhân, các hành tinh, thiên
                      hà đến toàn bộ vũ trụ.
                    </p>
                    <p>
                      Hoang mang nhất khi Beerus nói rằng nếu Zeno cảm thấy
                      thích, ông có thể hủy hoại toàn bộ 12 vũ trụ chỉ trong một
                      cái phẩy tay. Đó là lý do Zeno được tất cả mọi người tôn
                      kính, và run sợ trước sức mạnh của vị vua "bất khả xâm
                      phạm" và "không lường trước được". Có thể nói cho đến thời
                      điểm hiện tại Zeno được xem là nhân vật mạnh nhất trong{" "}
                      <strong>Dragon Ball Super</strong>.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/anh-1-162866537721938394384.jpeg"
                      alt="1, DRAGON BALL SUPER,THẦN HỦY DIỆT,ĐA VŨ TRỤ,KING ZENO,GRAND PRIEST,THIÊN SỨ,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, trong khi Zeno có thể được công nhận là người
                      mạnh nhất nhưng có ý kiến cho rằng ông không phải là người
                      quyền lực nhất. Quyền lực thực sự có thể thực sự đang nằm
                      trong tay cố vấn trung thành của ông,{" "}
                      <strong>Grand Priest</strong>.
                    </p>
                    <p>
                      Được giới thiệu vào cuối Giải đấu sức mạnh giữa vũ trụ số
                      6 và 7, <strong>Grand Priest</strong> xuất hiện đầy ấn
                      tượng bởi màn tỷ thí giữa những kẻ mạnh nhất trong{" "}
                      <strong>đa vũ trụ</strong>. Grand Priest được biết là{" "}
                      <strong>thiên sứ</strong> mạnh nhất trong số các thiên sứ,
                      ông không chỉ là một vị thần mà còn là vị thần mạnh nhất
                      của Zen-Oh. Ông là người thứ hai trong vũ trụ có thể hủy
                      diệt mọi sự sống chỉ bằng một ý nghĩ. Grand Priest cũng là
                      cha của một nửa trong tổng số tất cả 12 thiên sứ. Whis nói
                      rằng quyền năng của mình chỉ là một phần của sức mạnh mà
                      Grand Priest nắm giữ mà thôi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/anh-2-16286653772251346905260.jpg"
                      alt="2, DRAGON BALL SUPER,THẦN HỦY DIỆT,ĐA VŨ TRỤ,KING ZENO,GRAND PRIEST,THIÊN SỨ,"
                      note=""
                    />
                    <p>
                      Trước đó Whis cũng tiết lộ rằng bản thân mạnh hơn rất
                      nhiều so với Beerus, có khả năng hạ gục{" "}
                      <strong>Thần hủy diệt</strong> vũ trụ 7 chỉ bằng một
                      chiêu. Điều này cho thấy rằng mọi{" "}
                      <strong>thiên sứ</strong> đều mạnh hơn Thần hủy diệt tương
                      ứng của họ. Vì thế <strong>Grand Priest</strong> cũng sở
                      hữu sức mạnh vượt mức thần thánh và có thể vượt qua cả
                      Zeno.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Việc ông ở bên cạnh Zeno giống như một quản gia giúp quán
                      xuyến mọi việc trong <strong>đa vũ trụ</strong> vậy, vì
                      thế có thể nói quyền lực thật sự là nằm trong tay{" "}
                      <strong>Grand Priest</strong>. Như chúng ta thấy cách
                      Grand Priest góp ý về việc Zeno cùng các{" "}
                      <strong>Thần hủy diệt</strong> đưa đa vũ trụ vào Giải đấu
                      sức mạnh để quyết định số phận của họ. Hay như việc quyết
                      định xem ai sẽ được tiếp kiến với Omni King là đều tùy
                      thuộc vào ông.
                    </p>
                    <p>
                      Tuy nhiên cũng giống như Zeno, trong khi bản thân sở hữu
                      sức mạnh khổng lồ có thể thay đổi mọi thứ thì{" "}
                      <strong>Grand Priest</strong> lại cực kỳ trẻ con và ngây
                      thơ. Ông cư xử như một đứa trẻ thích được chơi đùa hơn là
                      thực sự quản lý những công việc của{" "}
                      <strong>đa vũ trụ</strong>. Cũng chính vì điều này mà
                      không nhiều người nhận ra vai trò thực sự của Grand
                      Priest.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/anh-3-16286654003982123519748.jpg"
                      alt="3, DRAGON BALL SUPER,THẦN HỦY DIỆT,ĐA VŨ TRỤ,KING ZENO,GRAND PRIEST,THIÊN SỨ,"
                      note=""
                    />
                    <p>
                      Đọc đến đây mọi người nghĩ sao về vấn đề này, liệu{" "}
                      <strong>Grand Priest</strong> có đúng thật sự là người
                      đứng đằng sau thống trị <strong>đa vũ trụ</strong> hay
                      không? Hãy cho chúng tôi biết thêm suy nghĩ của các bạn để
                      chúng ta cùng thảo luận nhé!
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
