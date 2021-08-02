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
"timestamp": '18/06/2021 01:01 PM',
"title": 'Dragon Ball Super: Các fan cho rằng Ultra Instinct của Goku đã "out meta" khi dễ dàng bị Granola hạ gục',
"description": 'Dragon Ball Super chap 73 chứng kiến cảnh Goku kích hoạt Ultra Instinct để đối đầu với Granola nhưng vẫn bị chiến binh mạnh nhất vũ trụ đánh gục.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/go1-16239900225751533435803.jpg',
"alt": 'ANIME DRAGON BALL SUPER,MANGA DRAGON BALL SUPER,DRAGON BALL SUPER CHAP 73,SON GOKU,KẺ SỐNG SÓT GRANOLA,GOKU VS GRANOLA,CON MẮT CỦA GRANOLAH,PERFECT ULTRA INSTINCT,ULTRA INSTINCT,THIÊN SỨ WHIS,',
"category": 'games',
"date": '18/06/2021',
"time": '01:01 PM',
"link": '/dragon-ball-super-cac-cho-rang-ultra-instinct-cua-goku-da-out-meta-khi-de-dang-bi-granola-ha-guc',
"zcomponent": 'page_20210618130116',
"filepath": './20210618130116-dragon-ball-super-cac-cho-rang-ultra-instinct-cua-goku-da-out-meta-khi-de-dang-bi-granola-ha-guc.js'
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
  'Dragon Ball Super: Các fan cho rằng Ultra Instinct của Goku đã "out meta" khi dễ dàng bị Granola hạ gục';
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "18/06/2021 01:01 PM";
const description =
  "Dragon Ball Super chap 73 chứng kiến cảnh Goku kích hoạt Ultra Instinct để đối đầu với Granola nhưng vẫn bị chiến binh mạnh nhất vũ trụ đánh gục.";
const link =
  "dragon-ball-super-cac-cho-rang-ultra-instinct-cua-goku-da-out-meta-khi-de-dang-bi-granola-ha-guc";
const tagparam = [
  "ANIME DRAGON BALL SUPER",
  "MANGA DRAGON BALL SUPER",
  "DRAGON BALL SUPER CHAP 73",
  "SON GOKU",
  "KẺ SỐNG SÓT GRANOLA",
  "GOKU VS GRANOLA",
  "CON MẮT CỦA GRANOLAH",
  "PERFECT ULTRA INSTINCT",
  "ULTRA INSTINCT",
  "THIÊN SỨ WHIS",
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

export default function page_20210618130116() {
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
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Như chúng ta đã biết thì{" "}
                    <strong>Dragon Ball Super chap 73</strong> chủ yếu xoay
                    quanh cuộc đối đầu giữa chiến binh mạnh nhất vũ trụ Granola
                    với chiến binh Saiyan <strong>Son Goku</strong>. Granola
                    liên tục bắn chưởng tấn công Goku và dụ anh vào một cánh
                    rừng gần đó. Trong lúc truy đuổi, Goku cố tung chưởng tấn
                    công nhưng Granola nhanh chóng tránh né. Địa hình rừng cây
                    cũng khiến việc theo dấu Granola trở nên khó khăn hơn. Được
                    một lúc, Granola thoát khỏi tầm nhìn của Goku. Ngay khi Goku
                    đang bối rối, Granola xuất hiện từ phía sau và đá bay Goku
                    đi.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/go1-16239900225751533435803.jpg"
                    alt="1, ANIME DRAGON BALL SUPER,MANGA DRAGON BALL SUPER,DRAGON BALL SUPER CHAP 73,SON GOKU,KẺ SỐNG SÓT GRANOLA,GOKU VS GRANOLA,CON MẮT CỦA GRANOLAH,PERFECT ULTRA INSTINCT,ULTRA INSTINCT,THIÊN SỨ WHIS,"
                    note=""
                  />
                  <p>
                    Sau khi bị áp đảo, Goku kích hoạt{" "}
                    <strong>Ultra Instinct</strong> phản công. Anh định vị
                    Granola rồi liên tục tấn công, không để đối thủ lẫn trốn.
                    Granola bất ngờ trước sự tăng tiến sức mạnh của Goku. Anh ta
                    bị đánh văng vào một mỏm đá. Goku dịch chuyển đến và nói
                    chuyện với Granola vài ba câu. Granola tiết lộ rằng người
                    đang chiến đấu với Goku chỉ là phân thân do Granola tạo ra.
                    Ngay sau đó, Granola tung một đòn chí mạng vào tim khiến
                    Goku văng ra xa rồi bất tỉnh.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/go2-1623990025792819568167.jpg"
                    alt="2, ANIME DRAGON BALL SUPER,MANGA DRAGON BALL SUPER,DRAGON BALL SUPER CHAP 73,SON GOKU,KẺ SỐNG SÓT GRANOLA,GOKU VS GRANOLA,CON MẮT CỦA GRANOLAH,PERFECT ULTRA INSTINCT,ULTRA INSTINCT,THIÊN SỨ WHIS,"
                    note=""
                  />
                  <p>
                    Như vậy dù đã kích hoạt được <strong>Ultra Instinct</strong>{" "}
                    tuy nhiên điều mà Goku làm được chỉ là tấn công được phân
                    thân của Granola mà thôi. Ngay lập tức thì điều này đã khiến
                    nhiều fan Dragon Ball Super cảm thấy bất ngờ. Nhiều người
                    cho rằng cách mà tác giả đang làm khiến cho Ultra Instinct
                    bị "dìm hàng" một cách trầm trọng. Trước đó với Ultra
                    Instinct chúng ta đã thấy Goku mạnh mẽ và áp đảo như thế nào
                    khi đối đầu với Moro. Sau quá trình tập luyện với{" "}
                    <strong>Thiên Sứ Whis</strong>, Ultra Instinct của Goku đã
                    được cải thiện rất nhiều, tuy nhiên khi đối đầu với Granola
                    nó lại chỉ là một thứ vô dụng. Nhiều fan Dragon Ball Super
                    hài hước cho rằng giống như trong LMHT vậy, Ultra Instinct
                    có vẻ như đã "out meta" khi đối đầu với Granola.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Trong khi đó nhiều fan Dragon Ball Super lại cho rằng việc
                    Goku bị đánh bại là kịch bản quen thuộc để tạo ra "đất diễn"
                    cho Vegeta thể hiện khả năng của mình. Đây cũng là cách quen
                    thuộc mà tác giả hay sử dụng để tạo thêm kịch tính cho
                    Dragon Ball Super. Vegeta sẽ thể hiện khả năng của mình
                    trước Granola trong khi đó Goku sau khi bình phục vẫn sẽ là
                    người tiếp tục quay trở lại trận chiến với chiến binh mạnh
                    nhất vũ trụ Granola.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/base64-1623990092685619398733.png"
                    alt="3, ANIME DRAGON BALL SUPER,MANGA DRAGON BALL SUPER,DRAGON BALL SUPER CHAP 73,SON GOKU,KẺ SỐNG SÓT GRANOLA,GOKU VS GRANOLA,CON MẮT CỦA GRANOLAH,PERFECT ULTRA INSTINCT,ULTRA INSTINCT,THIÊN SỨ WHIS,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/base64-1623990125965932156528.png"
                    alt="4, ANIME DRAGON BALL SUPER,MANGA DRAGON BALL SUPER,DRAGON BALL SUPER CHAP 73,SON GOKU,KẺ SỐNG SÓT GRANOLA,GOKU VS GRANOLA,CON MẮT CỦA GRANOLAH,PERFECT ULTRA INSTINCT,ULTRA INSTINCT,THIÊN SỨ WHIS,"
                    note=""
                  />
                  <p>
                    Các bạn nghĩ sao về việc Goku vẫn bị Granola "bón hành" dù
                    đã kích hoạt <strong>Ultra Instinct</strong> trong{" "}
                    <strong>Dragon Ball Super chap 73</strong>? Liệu điều này là
                    một kịch bản quen thuộc hay thực sự khả năng của Goku vô
                    dụng trước Granola? Hãy để lại ý kiến của mình về vấn đề này
                    nhé!
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
