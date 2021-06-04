import React from "react";
import "../../components/page.css";
import { AdsHorizontal, AdsVertical } from "../../components/adsMethods";
import { RandomFeature } from "../../components/methods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "../../components/content";

/* Data Input */
/*

 <ContentItem
title="One Piece: Dù đã chết nhưng sức mạnh của 6 nhân vật huyền thoại này cho đến nay vẫn chưa ai vượt qua nổi"
content="Thế hệ hải tặc mới vẫn chưa ai có thể vượt qua được những tượng đài sức mạnh trong One Piece này."
src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-1-16226084298312007960851.jpg"
alt="One Piece"
types="news"
time="02/06/2021 12:23 PM"
link="/one-piece-du-da-chet-nhung-suc-manh-cua-6-nhan-vat-huyen-thoai-nay-cho-den-nay-van-chua-ai-vuot-qua-noi"
/>

*/
/* ---------------------------------------------------------------- */

const category = "news";
const categoryLink = "/news";

const title =
  "One Piece: Dù đã chết nhưng sức mạnh của 6 nhân vật huyền thoại này cho đến nay vẫn chưa ai vượt qua nổi";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const date = "02/06/2021";
const time = "12:23 PM";

const description =
  "Thế hệ hải tặc mới vẫn chưa ai có thể vượt qua được những tượng đài sức mạnh trong One Piece này.";
const link =
  "one-piece-du-da-chet-nhung-suc-manh-cua-6-nhan-vat-huyen-thoai-nay-cho-den-nay-van-chua-ai-vuot-qua-noi";

const tags = [
  "HẢI TẶC",
  "ONE PIECE",
  "GOL D. ROGER",
  "EDWARD NEWGATE",
  "KOZUKI ODEN",
  "RYUMA",
  "ROCKS D. XEBEC",
];

/* ---------------------------------------------------------------- */

/* 
<ContentImage
src=""
alt="One Piece"
note=""
/>
                  */

const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tags.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function Templates() {
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
              <div className="author">{author}</div> - Theo {source} | {date} -
              {time}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>
                    Trong One Piece, có 6 nhân vật huyền thoại được xem là biểu
                    tượng sức mạnh đã qua đời nhưng cho đến nay chưa ai có thể
                    vượt qua. Nếu họ vẫn còn sống, sức mạnh của họ có thể làm
                    rung chuyển thế hệ hải tặc mới, cùng điểm qua những cái tên
                    này nhé!
                  </p>
                  <h5>1. Gol D. Roger</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-1-16226084298312007960851.jpg"
                    alt="One Piece"
                    note=""
                  />
                  <p>
                    Chỉ có hai tên cướp biển trong lịch sử One Piece có giá trị
                    tiền thưởng trên 5 tỷ Belly, Gol D. Roger là một trong số
                    đó. Điều này không có gì lạ, bởi vì anh ta là thuyền trưởng
                    hải tặc duy nhất đã từng chinh phục Grand Line và đến được
                    hòn đảo Laugh Tale. Xét về sức mạnh, Roger là một người phi
                    thường. Kẻ thù lớn đầu tiên mà Roger phải đối mặt một mình
                    là Rocks D. Xebec huyền thoại và băng nhóm của hắn. Trong
                    One Piece Stampede, Roger thậm chí có thể đánh bại Douglas
                    Bullet trong một trận đấu tay đôi một cách dễ dàng.{" "}
                  </p>
                  <h5>2. Edward Newgate</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-1-16226084311371279046874.jpg"
                    alt="One Piece"
                    note=""
                  />
                  <p>
                    Edward Newgate, hay còn gọi là Râu Trắng là người thứ hai có
                    số tiền thưởng vượt qua 5 tỷ Belly. Với số tiền thưởng như
                    vậy, anh ta dường như được Hải quân và Chính phủ Thế giới
                    "sợ hãi" hơn cả Kaido và Big Mom. Ngay cả khi đã già và ốm
                    yếu, Râu Trắng vẫn bị đánh hội đồng và tấn công bằng nhiều
                    loại vũ khí thì mới có thể kết thúc được mạng sống của Tứ
                    Hoàng này.
                  </p>
                  <h5>3. Kozuki Oden</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-2-16226084321491726335211.jpg"
                    alt="One Piece"
                    note=""
                  />
                  <p>
                    Kozuki Oden là một trong những samurai mạnh nhất từng sống.
                    Oden là chủ nhân của hai thanh kiếm: Ame no Habakiri và
                    Enma. Đây là 2 danh kiếm thuộc 21 thanh Đại Bảo Kiếm, và mỗi
                    thanh đều cực kỳ mạnh mẽ. Bản thân Oden cũng có nhiều thành
                    tích. Anh ấy là một trong những người đã đến Laugh Tale với
                    Roger. Anh cũng là người duy nhất để lại vết sẹo trên cơ thể
                    Kaido. Thậm chí anh còn từng suýt giết chết Kaido, nếu không
                    bị Kurozumi Higurashi làm mất sự tập trung. Ngay cả bản thân
                    Kaido cũng khó chịu vì cuộc chiến của mình bị kẻ khác làm
                    gián đoạn. Oden cũng có Haoshoku Haki và từng ở trên tàu của
                    hai băng hải tặc huyền thoại là Râu Trắng và Roger.{" "}
                  </p>
                  <h5>4. Ryuma</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/2/photo-3-1622608431648235768256.png"
                    alt="One Piece"
                    note=""
                  />
                  <p>
                    Ryuma được biết đến như một anh hùng ở Wano, với thành tích
                    vĩ đại nhất là chém rồng. Anh là chủ nhân của thanh kiếm
                    Shusui, và đã sử dụng nó đến mức biến thành một thanh kiếm
                    đen. Khi còn sống ông nổi danh là một kiếm sĩ có kỹ năng
                    siêu việt với phong cách chiến đấu pha trộn giữa Kenjutsu và
                    Battojutsu. Bản thân Zombie Ryuma được tăng cường sức mạnh
                    bởi cái bóng của Brook thực sự rất mạnh.
                  </p>
                  <h5>5. Oars</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-4-16226084321881480923772.jpg"
                    alt="One Piece"
                    note=""
                  />
                  <p>
                    Oars to lớn hơn những người khổng lồ trung bình tới 4 lần
                    bởi vì hắn đến từ một bộ tộc người khổng lồ quỷ chứ không
                    phải từ Elbaf. Thế nên cũng giống như những người ngoại cỡ
                    có lợi thế hơn người bình thường, Oars có lợi thế rất lớn so
                    với người khổng lồ trung bình. Oars được đồn đại là có thể
                    di chuyển cả một lục địa nên đã có những cáo buộc rằng Wano
                    được tạo ra từ những vùng đất do Oars tạo ra và thu thập.{" "}
                  </p>
                  <h5>6. Rocks D. Xebec</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-5-16226084327151652574792.jpg"
                    alt="One Piece"
                    note=""
                  />
                  <p>
                    Theo như Sengoku chia sẻ thì Rocks là kẻ thù đầu tiên và có
                    thể là kẻ thù lớn nhất của cựu Vua hải tặc Roger. Trong quá
                    khứ, vì Rocks muốn trở thành bá chủ thế giới mà ông đã cùng
                    phi hành đoàn của mình tàn phá và tấn công nhiều địa điểm
                    trên Tân thế giới và để lại sự hủy diệt hàng loạt. Thậm chí
                    người đàn ông này còn là thuyền trưởng cũ của những hải tặc
                    cộm cán là Kaido, Shiki, Râu Trắng và Big Mom. Hiện tại mặc
                    dù sức mạnh và khả năng thật sự của Rocks vẫn chưa được tiết
                    lộ thế nhưng với những gì đã thể hiện thì rõ rằng ông là một
                    trong những nhân vật mạnh mẽ nhất truyện từ trước đến nay.
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
