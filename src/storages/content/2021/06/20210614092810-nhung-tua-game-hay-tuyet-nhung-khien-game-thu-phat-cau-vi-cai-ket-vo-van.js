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
"timestamp": '14/06/2021 09:28 AM',
"title": 'Những tựa game hay tuyệt nhưng khiến game thủ phát cáu vì cái kết vớ vẩn',
"description": 'Các tựa game đình đám này từng được game thủ đánh giá rất chất lượng, thế nhưng cái kết của chúng khiến tất cả đều cảm thấy khó chịu.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/11/4863-1623403239959306092727.jpg',
"alt": 'Game, The Legend Of Zelda Majoras Mask, Super Mario Bros 2, ',
"category": 'games',
"date": '14/06/2021',
"time": '09:28 AM',
"link": '/nhung-tua-game-hay-tuyet-nhung-khien-game-thu-phat-cau-vi-cai-ket-vo-van',
"zcomponent": 'page_20210614092810',
"filepath": './20210614092810-nhung-tua-game-hay-tuyet-nhung-khien-game-thu-phat-cau-vi-cai-ket-vo-van.js'
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
  "Những tựa game hay tuyệt nhưng khiến game thủ phát cáu vì cái kết vớ vẩn";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "14/06/2021 09:28 AM";
const description =
  "Các tựa game đình đám này từng được game thủ đánh giá rất chất lượng, thế nhưng cái kết của chúng khiến tất cả đều cảm thấy khó chịu.";
const link =
  "nhung-tua-game-hay-tuyet-nhung-khien-game-thu-phat-cau-vi-cai-ket-vo-van";
const tagparam = [
  "game",
  "the-legend-of-zelda-majoras-mask",
  "super-mario-bros-2",
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

export default function page_20210614092810() {
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
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Cái kết của <strong>game</strong> cũng giống như phần kết
                    của một bộ phim. Tất nhiên, không game thủ nào muốn trò chơi
                    yêu thích lại có cái kết bất hợp lý, hoàn toàn không ăn nhập
                    với cốt truyện của cả game như những tựa game dưới đây.
                  </p>
                  <h3>1. The Legend of Zelda: Majora’s Mask</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/11/4863-1623403239959306092727.jpg"
                    alt="Game, The Legend Of Zelda Majoras Mask, Super Mario Bros 2, "
                    note=""
                  />
                  <p>
                    Tựa <strong>game</strong> này được đánh giá có cốt truyện
                    lôi cuốn, đồ họa đẹp và thiết lập dễ chơi. Thế nhưng phần
                    kết đã hủy hoại mọi thứ. Trong cả trò chơi, người chơi phải
                    thực hiện nhiệm vụ đi tìm mặt nạ hoặc đón nhận những kết quả
                    không mong muốn nếu không hoàn thành nhiệm vụ. Phần âm nhạc
                    của game không ăn nhập gì đến bối cảnh, còn phần kết quá
                    "yếu" và chưa đủ để hoàn thiện cốt truyện.
                  </p>
                  <p>
                    {" "}
                    Người chơi thậm chí còn không được nhìn thấy hình dạng của
                    nhân vật mà họ nhập vai trong cảnh hôn lễ, cũng khỏi hội ngộ
                    chiến hữu (dù chiến hữu này được ẩn ý là đóng vai trò quan
                    trọng). Tổng thể phần kết <strong>game</strong> tạo cảm giác
                    gấp rút và hoàn toàn vô nghĩa so với cả quá trình game thủ
                    đã trải qua.
                  </p>
                  <h3>2. God of War 2</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/11/photo-1-16234303754711293190129.jpg"
                    alt="Game, The Legend Of Zelda Majoras Mask, Super Mario Bros 2, "
                    note=""
                  />
                  <p>
                    {" "}
                    God of War 2 là trường hợp điển hình cho việc kết{" "}
                    <strong>game</strong> chỉ để vẽ thêm chuyện cho phần sau.
                    Nhiều game thủ đã tin tưởng rằng đây là cái kết hoàn hảo cho
                    cuộc chiến giữa Kratos và phản diện Zeus, bởi God of War 3
                    đầy lỗ hổng khó chấp nhận.{" "}
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Tuy nhiên, cái kết của God of War 2 đã bị phá hỏng khi nhà
                    phát triển thay vì để Kratos kết liễu Zeus (điều mà người
                    chơi luôn mong chờ dựa trên cốt truyện <strong>game</strong>{" "}
                    trước đó), thì họ lại cho Athena xuất hiện và ngăn người
                    chơi làm vậy. Sau cả chuyến phiêu lưu đầy điên cuồng, nguy
                    hiểm và đẫm máu, người chơi buộc phải "tha cho trùm cuối" để
                    nhà sản xuất có nội dung làm tiếp phần 3. Không ít game thủ
                    đã bị sốc với cái kết này đến mức ghét lây sang cả God of
                    War 3.
                  </p>
                  <h3>3. Super Mario Bros. 2</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/11/photo-0-1480914136413-1623403337278605609694.jpg"
                    alt="Game, The Legend Of Zelda Majoras Mask, Super Mario Bros 2, "
                    note=""
                  />
                  <p>
                    Tựa <strong>game</strong> này thực sự là món quà tri ân tuổi
                    thơ dành cho các game thủ. Mọi nhược điểm trong phần game
                    trước đều được cải thiện, đồ họa đẹp hơn, gameplay tốt hơn,
                    nhiều mở rộng và chức năng được thêm vào và những thiết lập
                    mới vô cùng thú vị. Thế nhưng người chơi lại được một phen
                    cụt hứng khi ở phần kết game, nhà sản xuất tiết lộ rằng
                    chuyến phiêu lưu họ vừa trải qua thực ra là giấc mơ của
                    Mario mà thôi.{" "}
                  </p>
                  <p>
                    Tuyên bố này đã khiến không ít người chơi dậy sóng khi có
                    hàng loạt câu hỏi đầy mâu thuẫn được đặt ra như: nếu chỉ là
                    mơ thì sao Mario không tỉnh dậy khi người chơi đã hết mạng?
                    Làm thế nào Mario không chết ngoài đời thực khi anh ta đã
                    chết trong <strong>game</strong>? Tại sao hầu hết những nhân
                    vật xuất hiện trong game này lại xuất hiện trong các game
                    Mairo khác nếu đây chỉ là một giấc mơ?
                  </p>
                  <p>4. Monkey Island 2</p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/11/monkey-island-2-special-edition-lechucks-revenge-cover-1623403377499803973538.jpg"
                    alt="Game, The Legend Of Zelda Majoras Mask, Super Mario Bros 2, "
                    note=""
                  />
                  <p>
                    Vấn đề mà phần kết <strong>game</strong> Monkey Island 2 gặp
                    không phải là quá khó hiểu, quá ngớ ngẩn hay không có nhiều
                    ý nghĩa. Ngược lại, nhiều game thủ cho rằng đó là một cái
                    kết buồn, khi LeChuck nguyền rủa Guybrush và ném hắn về tuổi
                    thơ vĩnh cửu (hoặc cái gì đó tương tự như thế). Thế nhưng,
                    sẽ có những người chơi cảm thấy không thỏa mãn với cái kết
                    này, bởi nó chẳng giải thích được bất kỳ câu hỏi lẫn bí ẩn
                    nào mà họ gặp phải trong cả trò chơi mà quá đơn giản, giống
                    như tuyên bố rằng "tất cả chỉ là mơ".
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
