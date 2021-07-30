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
"title": 'Tự gắn mác vẫn còn "cái ngàn vàng", nàng hot girl phim 18+ bị ném đá tơi tả ngay sau tác phẩm debut',
"description": 'Cô nàng hot girl đang nhận phải rất nhiều chỉ trích từ phía cộng đồng mạng.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,MAKOTO TODA,PHIM AV,AV,PHIM 18+,',
"category": 'images',
"date": '18/06/2021',
"time": '01:01 PM',
"link": '/tu-gan-mac-van-con-cai-ngan-vang-nang-hot-girl-phim-18-bi-nem-da-toi-ta-ngay-sau-tac-pham-debut',
"zcomponent": 'page_20210618130125',
"filepath": './20210618130125-tu-gan-mac-van-con-cai-ngan-vang-nang-hot-girl-phim-18-bi-nem-da-toi-ta-ngay-sau-tac-pham-debut.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  'Tự gắn mác vẫn còn "cái ngàn vàng", nàng hot girl phim 18+ bị ném đá tơi tả ngay sau tác phẩm debut';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "18/06/2021 01:01 PM";
const description =
  "Cô nàng hot girl đang nhận phải rất nhiều chỉ trích từ phía cộng đồng mạng.";
const link =
  "tu-gan-mac-van-con-cai-ngan-vang-nang-hot-girl-phim-18-bi-nem-da-toi-ta-ngay-sau-tac-pham-debut";
const tagparam = [
  "GÁI XINH",
  "HOT GIRL",
  "CỘNG ĐỒNG MẠNG",
  "MAKOTO TODA",
  "PHIM AV",
  "AV",
  "PHIM 18+",
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

export default function page_20210618130125() {
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
                    Thường thì đa số các cô nàng <strong>hot girl</strong> khi
                    lựa chọn rẽ ngang sang ngành công nghiệp{" "}
                    <strong>
                      phim <strong>AV</strong>
                    </strong>{" "}
                    Nhật Bản sẽ được các fan đón nhận một cách nhiệt liệt. Mặc
                    dù có thể chịu sự ghẻ lạnh từ gia đình, định kiến của xã hội
                    nhưng hiếm có trường hợp nào một cô nàng hot girl lại phải
                    chịu gạch đá từ chính khán giả của mình. Tuy nhiên, hiếm chứ
                    không phải là không có. Và cô nàng{" "}
                    <strong>Makoto Toda</strong> chính là nhân vật ấy.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130125--10-237022.jpg")
                        .default
                    }
                    alt="1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,MAKOTO TODA,PHIM AV,AV,PHIM 18+,"
                    note="Makoto Toda - cô nàng hot girl đang được nhắc tới trong câu chuyện"
                  />
                  <p>
                    Theo đó, <strong>Makoto Toda</strong> ban đầu nhận được rất
                    nhiều sự kỳ vọng từ phía người xem, cũng như bao nhiêu các
                    tân binh khác. Thậm chí, cô nàng còn được coi là tài năng
                    lớn cũng như gây ấn tượng nhất của SOD - một studio siêu nổi
                    tiếng trong ngành công nghiệp{" "}
                    <strong>
                      phim <strong>AV</strong>
                    </strong>{" "}
                    Nhật Bản. Điều ấn tượng nhất là trong tác phẩm debut, Makoto
                    còn được giới thiệu như một trinh nữ, vẫn còn "cái ngàn
                    vàng". Thế nhưng, chẳng ai ngờ được rằng màn PR này lại nhận
                    phải hiệu ứng ngược cực kỳ dữ dội từ phía khán giả.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130125--11-356584.jpg")
                        .default
                    }
                    alt="2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,MAKOTO TODA,PHIM AV,AV,PHIM 18+,"
                    note="Makoto Toda được giới thiệu rất hoành tráng trước khi ra mắt"
                  />
                  <p>
                    Đơn giản vì được giới thiệu như vậy, thế nhưng chất lượng
                    sản phẩm debut của Makoto lại không được như kỳ vọng. Đồng
                    thời, cái mác "trinh nữ" của cô nàng cũng bị đặt ra rất
                    nhiều nghi vấn. Thậm chí, tồi tệ hơn, không ít giả thuyết
                    được đưa ra cho rằng Makoto chẳng có tài năng nổi bật gì mà
                    chỉ đơn giản là được công ty ưu ái. Có bình luận còn cay
                    nghiệt gọi cô nàng là một kẻ đạo đức giả một cách khá tiêu
                    cực.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130125--12-455705.jpg")
                        .default
                    }
                    alt="3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,MAKOTO TODA,PHIM AV,AV,PHIM 18+,"
                    note="Sau tác phẩm debut, Makoto bất ngờ bị chỉ trích đầy dữ dội"
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Tuy nhiên, Makoto cũng không phải dạng vừa khi mà cô nàng
                    cũng tỏ ra rất cá tính. Đáp trả những bình luận tiêu cực
                    hướng về phía mình, nàng <strong>hot girl</strong> tức tối
                    tới mức còn soạn hẳn một bức tâm thư để đáp trả các fan. Cụ
                    thể, trong đó cô nàng tự cho rằng đây là tình trạng mà người
                    nổi tiếng hay gặp phải, cũng như khẳng định mình sinh ra
                    không phải để làm vừa lòng tất cả và chỉ cần sống vì bản
                    thân mà thôi. Cũng sau tuyên bố đó, Makoto gần như không hề
                    ngó ngàng tới mạng xã hội nữa. Trang cá nhân của cô nàng
                    cũng được chuyển giao cho công ty quản lý.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130125--13-259293.jpg")
                        .default
                    }
                    alt="4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,MAKOTO TODA,PHIM AV,AV,PHIM 18+,"
                    note="Cô nàng cũng đáp trả bằng một tâm thư cực kỳ dài và gay gắt"
                  />
                  <p>
                    Ở thời điểm hiện tại, bất chấp mọi thị phi,{" "}
                    <strong>Makoto Toda</strong> đang sống đúng nghĩa cho bản
                    thân mình. Bên cạnh vai trò là một diễn viên, cô nàng cũng
                    rất chăm chỉ viết các tác phẩm review{" "}
                    <strong>
                      phim <strong>AV</strong>
                    </strong>{" "}
                    Nhật Bản, phân tích cặn kẽ các chi tiết. Chưa kể, Makoto còn
                    đang bắt đầu bước chân vào con đường làm biên kịch, đạo diễn
                    cho chính các tác phẩm 18+ của mình nữa. Cũng kể từ đó, cô
                    nàng bắt đầu được nhiều người gọi tới với biệt danh "đạo
                    diễn trinh nữ" theo cách khá mỉa mai.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210618130125--14-938442.jpg")
                        .default
                    }
                    alt="5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,MAKOTO TODA,PHIM AV,AV,PHIM 18+,"
                    note="Makoto thậm chí còn đang dự định lấn sân sang cả nghiệp đạo diễn, biên kịch"
                  />
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
