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
"title": 'Dragon Ball Super: 5 người Saiyan đã có thể biến thành Super Saiyan God, số 4 là trường hợp đặc biệt',
"description": 'Không phải chỉ mình Goku mới có thể biến thành Super Saiyan God.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/20/photo-1-16267746209691819938455.jpg',
"alt": 'SUPER SAIYAN GOD,DRAGON BALL SUPER,SAIYAN,VEGETA,TRUNKS XENO,THẦN CỦA NGƯỜI SAIYAN,BLACK GOKU,',
"category": 'games',
"date": '29/07/2021',
"time": '04:21 PM',
"link": '/dragon-ball-super-5-nguoi-saiyan-da-co-the-bien-thanh-super-saiyan-god-so-4-la-truong-hop-dac-biet',
"zcomponent": 'page_20210729162156',
"filepath": './20210729162156-dragon-ball-super-5-nguoi-saiyan-da-co-the-bien-thanh-super-saiyan-god-so-4-la-truong-hop-dac-biet.js'
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
  "Dragon Ball Super: 5 người Saiyan đã có thể biến thành Super Saiyan God, số 4 là trường hợp đặc biệt";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:21 PM";
const description =
  "Không phải chỉ mình Goku mới có thể biến thành Super Saiyan God.";
const link =
  "dragon-ball-super-5-nguoi-saiyan-da-co-the-bien-thanh-super-saiyan-god-so-4-la-truong-hop-dac-biet";
const tagparam = [
  "SUPER SAIYAN GOD",
  "DRAGON BALL SUPER",
  "SAIYAN",
  "VEGETA",
  "TRUNKS XENO",
  "THẦN CỦA NGƯỜI SAIYAN",
  "BLACK GOKU",
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

export default function page_20210729162156() {
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
                    <strong>
                      Super <strong>Saiyan</strong> God
                    </strong>{" "}
                    là 1 trạng thái cực mạnh xuất hiện trong{" "}
                    <strong>Dragon Ball Super</strong>. Dưới sự trợ giúp của
                    rồng thần, Goku lần đầu tiên đã có thể đạt tới sức mạnh{" "}
                    <strong>Thần của người Saiyan</strong> thông qua 1 nghi thức
                    với 5 người Saiyan có trái tim thuần khiết khác.
                  </p>
                  <p>
                    Dưới đây là 5 người <strong>Saiyan</strong> đã có thể biến
                    thành <strong>Super Saiyan God</strong>:
                  </p>
                  <h5>1. Son Goku</h5>
                  <p>
                    Tất nhiên, người đầu tiên trong danh sách này là nhân vật
                    chính, Son Goku. Son Goku lần đầu tiên đạt được hình dạng
                    này với sự giúp đỡ của năm người <strong>Saiyan</strong>{" "}
                    khác, mặc dù có 1 người vẫn còn đang nằm trong bụng mẹ. Goku
                    sau đó đã sử dụng hình dạng{" "}
                    <strong>Super Saiyan God</strong> của mình để chiến đấu với
                    Beerus.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/20/photo-1-16267746209691819938455.jpg"
                    alt="1, SUPER SAIYAN GOD,DRAGON BALL SUPER,SAIYAN,VEGETA,TRUNKS XENO,THẦN CỦA NGƯỜI SAIYAN,BLACK GOKU,"
                    note=""
                  />
                  <p>
                    Sau một thời gian dài huấn luyện dưới sự hướng dẫn của Whis,
                    Goku có thể biến thành{" "}
                    <strong>
                      Super <strong>Saiyan</strong> God
                    </strong>{" "}
                    mà không cần sự trợ giúp của bất kỳ ai.
                  </p>
                  <h5>2. Vegeta</h5>
                  <p>
                    Trong khi luyện tập với Goku dưới sự hướng dẫn của Whis,{" "}
                    <strong>Vegeta</strong> cũng đã đạt được trạng thái{" "}
                    <strong>
                      Super <strong>Saiyan</strong> God
                    </strong>{" "}
                    bằng chính sức mạnh của mình. Trên thực tế, Vegeta đã được
                    đào tạo đủ để sử dụng Super Saiyan God và Super Saiyan Blue
                    thay thế cho nhau để lấp đầy những khuyết điểm của từng dạng
                    biến đổi này.
                  </p>
                  <ContentImage
                    src="https://cdn.idntimes.com/content-images/duniaku/post/20200313/vegeta-super-saiyan-god-dragon-ball-xenoverse-2-d5a25311e116081381886d8e9d302cec.jpg"
                    alt="2, SUPER SAIYAN GOD,DRAGON BALL SUPER,SAIYAN,VEGETA,TRUNKS XENO,THẦN CỦA NGƯỜI SAIYAN,BLACK GOKU,"
                    note=""
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    <strong>Vegeta</strong> thường sử dụng{" "}
                    <strong>
                      Super <strong>Saiyan</strong> God
                    </strong>{" "}
                    để di chuyển bình thường và biến thành Super Saiyan Blue
                    ngay lập tức khi anh ta tấn công hoặc phòng thủ.
                  </p>
                  <h5>3. Trunks Xeno</h5>
                  <p>
                    Xeno Trunks là phiên bản Trunks của một dòng thời gian khác,
                    nơi Trunks tham gia đội Tuần tra Thời gian. Xeno Trunks biến
                    thành{" "}
                    <strong>
                      Super <strong>Saiyan</strong> God
                    </strong>{" "}
                    trước trận chiến chống lại Mechikabura trong trò chơi và
                    anime chuyển thể của Super Dragon Ball Heroes. Bản thân
                    Mechikabura là một nhân vật phản diện đã hủy hoại lịch sử
                    trong câu chuyện quá khứ của Goku và những người khác.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/20/photo-1-1626774623493249962707.jpg"
                    alt="3, SUPER SAIYAN GOD,DRAGON BALL SUPER,SAIYAN,VEGETA,TRUNKS XENO,THẦN CỦA NGƯỜI SAIYAN,BLACK GOKU,"
                    note=""
                  />
                  <p>
                    Nhờ sự giúp đỡ của năm người <strong>Saiyan</strong> khác
                    của Time Patrol, Xeno Trunks đã trở thành{" "}
                    <strong>Super Saiyan God</strong>.
                  </p>
                  <h5>4. Black Goku</h5>
                  <p>
                    Hơi khác so với những người khác,{" "}
                    <strong>Black Goku</strong> hay còn gọi là Zamasu trong cơ
                    thể của Goku thực sự là một vị thần ngay từ đầu.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/20/photo-2-16267746239761637241816.jpg"
                    alt="4, SUPER SAIYAN GOD,DRAGON BALL SUPER,SAIYAN,VEGETA,TRUNKS XENO,THẦN CỦA NGƯỜI SAIYAN,BLACK GOKU,"
                    note=""
                  />
                  <p>
                    Theo <strong>Black Goku</strong> trong phiên bản manga, nếu
                    dân tộc <strong>Saiyan</strong> ngay từ đầu đã có linh khí
                    của một vị thần và biến thành Super Saiyan thì anh ta có thể
                    biến thành phiên bản <strong>Super Saiyan God</strong> Super
                    Saiyan của Black Goku. Dạng này sau đó được Black Goku đặt
                    cho cái tên là Super Saiyan Rose, một dạng Super Saiyan có
                    cấp độ tương đương với Super Saiyan Blue và chắc chắn mạnh
                    hơn Super Saiyan God.
                  </p>
                  <h5>5. Yamoshi</h5>
                  <p>
                    Yamoshi được gọi là "Super <strong>Saiyan</strong> trong
                    truyền thuyết", là người Saiyan đầu tiên biến thành Super
                    Saiyan trong quá khứ.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/20/photo-3-1626774623529445071346.jpg"
                    alt="5, SUPER SAIYAN GOD,DRAGON BALL SUPER,SAIYAN,VEGETA,TRUNKS XENO,THẦN CỦA NGƯỜI SAIYAN,BLACK GOKU,"
                    note=""
                  />
                  <p>
                    Dựa trên câu chuyện truyền lại, Yamoshi không chỉ có thể trở
                    thành Super <strong>Saiyan</strong> mà còn từng biến thành{" "}
                    <strong>Super Saiyan God</strong> với sự giúp đỡ của năm
                    người bạn Saiyan của mình, để chiến đấu chống lại những gã
                    Saiyan độc ác. Tức là Yamoshi không chỉ là người có thể biến
                    thành Super Saiyan đầu tiên mà còn là Super Saiyan God đầu
                    tiên.
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
