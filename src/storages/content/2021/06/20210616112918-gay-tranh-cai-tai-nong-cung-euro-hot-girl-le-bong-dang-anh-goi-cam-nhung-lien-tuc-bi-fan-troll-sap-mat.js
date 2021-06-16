import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '16/06/2021 11:29 AM',
"title": 'Gây tranh cãi tại "Nóng cùng Euro", hot girl Lê Bống đăng ảnh gợi cảm nhưng liên tục bị fan troll sấp mặt',
"description": 'Cô nàng Lê Bống đang bị "troll" khá nhiều sau phát biểu có phần hơi "lủng" kiến thức bóng đá của mình.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210616112918--17-191345.jpg',
"alt": 'Gai Xinh, Hot Girl, Cong Dong Mang, Le Bong, ',
"category": 'images',
"date": '16/06/2021',
"time": '11:29 AM',
"link": '/gay-tranh-cai-tai-nong-cung-euro-hot-girl-le-bong-dang-anh-goi-cam-nhung-lien-tuc-bi-fan-troll-sap-mat',
"zcomponent": 'page_20210616112918',
"filepath": './20210616112918-gay-tranh-cai-tai-nong-cung-euro-hot-girl-le-bong-dang-anh-goi-cam-nhung-lien-tuc-bi-fan-troll-sap-mat.js'
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
  'Gây tranh cãi tại "Nóng cùng Euro", hot girl Lê Bống đăng ảnh gợi cảm nhưng liên tục bị fan troll sấp mặt';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "16/06/2021 11:29 AM";
const description =
  'Cô nàng Lê Bống đang bị "troll" khá nhiều sau phát biểu có phần hơi "lủng" kiến thức bóng đá của mình.';
const link =
  "gay-tranh-cai-tai-nong-cung-euro-hot-girl-le-bong-dang-anh-goi-cam-nhung-lien-tuc-bi-fan-troll-sap-mat";
const tagparam = ["gai-xinh", "hot-girl", "cong-dong-mang", "le-bong"];
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

export default function page_20210616112918() {
  return (
    <>
      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              >
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
                    Những ngày qua, bên cạnh những trận cầu rực lửa và đầy kịch
                    tính của Euro, các chương trình ăn theo giải đấu này cũng
                    đang là một trong những chủ đề nhận được rất nhiều sự chú ý
                    từ phía cộng đồng mạng. Và chắc chắn, chẳng ai có thể bỏ qua
                    Nóng cùng Euro, nơi góp mặt cô nàng{" "}
                    <strong>hot girl</strong> Lê Bống đình đám cùng với dàn nữ
                    cổ động viên xinh đẹp. Tuy nhiên, mới đây thôi, Lê Bống lại
                    tiếp tục trở thành chủ đề gây tranh cãi và khiến nhiều người
                    tỏ ra thất vọng sau khi cô nàng có màn trả lời bị đánh giá
                    là "lủng" kiến thức thể thao.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112918--10-117821.jpg")
                        .default
                    }
                    alt="1Gai Xinh, Hot Girl, Cong Dong Mang, Le Bong, "
                    note="Lê Bống - cô nàng hot girl luôn gây chú ý trong mỗi lần xuất hiện của mình"
                  />
                  <p>
                    Cụ thể, với phát biểu có phần hơi lúng túng và sai thuật ngữ
                    cơ bản khi được hỏi về Pháp - đội tuyển mà cô nàng cổ vũ, Lê
                    Bống đã khiến cho nhiều người cảm thấy không hề thuyết phục
                    chút nào. Đoạn clip cũng nhanh chóng trở nên viral và được
                    chia sẻ một cách chóng mặt trên nhiều diễn đàn. Và lại một
                    lần nữa, Lê Bống lại trở thành chủ đề gây tranh cãi khi tham
                    gia một gameshow. Trước đó, cô nàng cũng từng vướng phải
                    không ít thị phi, lùm xùm khi diện bộ đồ Pikachu bó sát để
                    thi một chương trình cách đây chưa lâu.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112918--11-231237.jpg")
                        .default
                    }
                    alt="2Gai Xinh, Hot Girl, Cong Dong Mang, Le Bong, "
                    note="Sau bộ trang phục Pikachu đầy tranh cãi cách đây chưa lâu"
                  />
                  <p>
                    Cô nàng lại khiến nhiều người phải thất vọng với màn trả lời
                    không được thuyết phục cho lắm
                  </p>
                  <p>
                    Mặc dù không thể phủ nhận rằng Lê Bống cũng mắc lỗi khi phát
                    biểu thật, thế nhưng phản ứng của cộng đồng mạng lại có phần
                    hơi thái quá thì phải. Thực tế, đây cũng không phải là lần
                    đầu tiên mà cô nàng phải đón nhận những chỉ trích có phần
                    gay gắt. Thậm chí gần đây, nàng <strong>hot girl</strong>{" "}
                    còn liên tục phải chịu một số bình luận tiêu cực về phong
                    cách sexy, táo bạo vốn có của mình. Tuy nhiên, Lê Bống
                    thường im lặng trước những chỉ trích.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112918--12-901924.jpg")
                        .default
                    }
                    alt="3Gai Xinh, Hot Girl, Cong Dong Mang, Le Bong, "
                    note="Lê Bống thường xuyên nhận phải những đánh giá gay gắt từ phía cộng đồng mạng"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112918--13-192388.jpg")
                        .default
                    }
                    alt="4Gai Xinh, Hot Girl, Cong Dong Mang, Le Bong, "
                    note="Tuy nhiên, cô nàng cũng thường giữ im lặng và không có phản ứng gì đáng kể"
                  />
                  <p>
                    Lần này cũng vậy, Lê Bống tiếp tục giữ im lặng trước những
                    chỉ trích hướng tới mình sau phát biểu kể trên. Thế nhưng,
                    vẫn có rất nhiều người dường như không muốn buông tha cho
                    nàng <strong>hot girl</strong>. Cụ thể, ở nhiều bài đăng mới
                    trên trang cá nhân, đã có không ít fan vào "troll" lại Lê
                    Bống bằng chính câu hỏi mà cô nàng trả lời thiếu sót trong
                    chương trình Nóng Cùng Euro.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112918--14-420822.jpg")
                        .default
                    }
                    alt="5Gai Xinh, Hot Girl, Cong Dong Mang, Le Bong, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112918--15-813765.jpg")
                        .default
                    }
                    alt="6Gai Xinh, Hot Girl, Cong Dong Mang, Le Bong, "
                    note="Lê Bống vẫn tiếp tục không có phản hồi trước những bình luận trêu chọc ấy"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112918--16-956773.png")
                        .default
                    }
                    alt="7Gai Xinh, Hot Girl, Cong Dong Mang, Le Bong, "
                    note="Cô nàng thậm chí còn tỏ ra khá hờ hững, không mấy bận tâm"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112918--17-191345.jpg")
                        .default
                    }
                    alt="8Gai Xinh, Hot Girl, Cong Dong Mang, Le Bong, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112918--18-462808.jpg")
                        .default
                    }
                    alt="9Gai Xinh, Hot Girl, Cong Dong Mang, Le Bong, "
                    note=""
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
