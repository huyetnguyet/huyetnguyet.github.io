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
"timestamp": '03/08/2021 11:11 AM',
"title": 'One Punch Man: "Thánh Phồng" Saitama suýt chút nữa đã rất cô độc vì quá mạnh nếu không có người này?',
"description": 'Có một câu hỏi mà nhiều độc giả One Punch Man thắc mắc đó là nhân vật nào là người tin tưởng Saitama nhất?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/hi1-1627898258668285855636.jpg',
"alt": 'MANGA ONE PUNCH MAN,TÁC GIẢ ONE PUNCH MAN,MỸ NHÂN ONE PUNCH MAN,ANIME ONE PUNCH MAN,KING ONE PUNCH MAN,FAN ONE PUNCH MAN,CỘNG ĐỒNG ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,HỌC TRÒ SAITAMA,THẦY TRÒ SAITAMA VS GENOS,FUBUKI VS BANG,',
"category": 'games',
"date": '03/08/2021',
"time": '11:11 AM',
"link": '/one-punch-man-thanh-phong-saitama-suyt-chut-nua-da-rat-co-doc-vi-qua-manh-neu-khong-co-nguoi-nay',
"zcomponent": 'page_20210803111112',
"filepath": './20210803111112-one-punch-man-thanh-phong-saitama-suyt-chut-nua-da-rat-co-doc-vi-qua-manh-neu-khong-co-nguoi-nay.js'
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
  'One Punch Man: "Thánh Phồng" Saitama suýt chút nữa đã rất cô độc vì quá mạnh nếu không có người này?';
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "03/08/2021 11:11 AM";
const description =
  "Có một câu hỏi mà nhiều độc giả One Punch Man thắc mắc đó là nhân vật nào là người tin tưởng Saitama nhất?";
const link =
  "one-punch-man-thanh-phong-saitama-suyt-chut-nua-da-rat-co-doc-vi-qua-manh-neu-khong-co-nguoi-nay";
const tagparam = [
  "MANGA ONE PUNCH MAN",
  "TÁC GIẢ ONE PUNCH MAN",
  "MỸ NHÂN ONE PUNCH MAN",
  "ANIME ONE PUNCH MAN",
  "KING ONE PUNCH MAN",
  "FAN ONE PUNCH MAN",
  "CỘNG ĐỒNG ONE PUNCH MAN",
  "THÁNH PHỒNG SAITAMA",
  "HỌC TRÒ SAITAMA",
  "THẦY TRÒ SAITAMA VS GENOS",
  "FUBUKI VS BANG",
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

export default function page_20210803111112() {
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
                      Nhắc về One Punch Man, chúng ta thường nhắc tới lũ quái
                      vật và các anh hùng. Họ đều rất mạnh nhưng chẳng ăn nhằm
                      gì với cú đấm của <strong>thánh phồng Saitama</strong>.
                      Người ta thường bảo anh hùng thường hay cô độc, liệu điều
                      này có đúng với trường hợp của Saitama? Cùng chúng tôi tìm
                      hiểu xem ai là người tin tưởng vào Saitama nhất nhé.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/hi1-1627898258668285855636.jpg"
                      alt="1, MANGA ONE PUNCH MAN,TÁC GIẢ ONE PUNCH MAN,MỸ NHÂN ONE PUNCH MAN,ANIME ONE PUNCH MAN,KING ONE PUNCH MAN,FAN ONE PUNCH MAN,CỘNG ĐỒNG ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,HỌC TRÒ SAITAMA,THẦY TRÒ SAITAMA VS GENOS,FUBUKI VS BANG,"
                      note=""
                    />
                    <p>
                      Đầu tiên là cậu học trò Genos, liệu anh có phải người tin
                      tưởng Saitama nhất hay không? Câu trả lời là không. Sau
                      quá nhiều vụ việc thì Genos vẫn chưa hề tin tưởng vào sức
                      mạnh của Saitama hoàn toàn. Trong những chap mới nhất của
                      bản ONE, Genos đã nói rằng "thầy Saitama cũng chưa chắc có
                      thể đánh bại được tên người máy điên đâu". Chưa kể trong
                      bản chính thì Genos có lần đã nghĩ đến việc tập hợp cả các
                      anh hùng và thầy Saitama để hội đồng Gouketsu vì cu cậu
                      nghĩ Gouketsu quá mạnh hơn cả Saitama.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/2/hi2-1627898474584217905472.jpg"
                      alt="2, MANGA ONE PUNCH MAN,TÁC GIẢ ONE PUNCH MAN,MỸ NHÂN ONE PUNCH MAN,ANIME ONE PUNCH MAN,KING ONE PUNCH MAN,FAN ONE PUNCH MAN,CỘNG ĐỒNG ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,HỌC TRÒ SAITAMA,THẦY TRÒ SAITAMA VS GENOS,FUBUKI VS BANG,"
                      note=""
                    />
                    <p>
                      Tiếp đến, cô nàng được cho là "người tình tin đồn" của
                      Saitama là Fubuki. Thực tế mà nói thì hiện tại cô chưa
                      biết quá nhiều điều về Saitama. Từ bản chính hay bản gốc
                      thì điều Fubuki biết chỉ là Saitama mạnh mà thôi nhưng
                      mạnh đến mức hơn người chị Tatsumaki rất rất nhiều lần thì
                      cô lại không biết. Bản chính hiện tại, Fubuki vẫn đánh giá
                      Saitama thua Tatsumaki và Mặt Nạ Mật cơ đấy. Còn về cụ
                      Bang, một nhân vật có kinh nghiệm và đánh giá khá chuẩn
                      xác về người khác thì ông cũng có những đánh giá khá đúng
                      về Saitama. Tuy vậy đã có lúc Bang đã tưởng tượng mình có
                      thể khống chế Saitama một cách dễ dàng. Có vẻ như cụ Bang
                      vẫn chưa hề nhận ra là mình hay bất cứ ai đều không có cửa
                      trước cú đấm của <strong>thánh phồng Saitama</strong>.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Người tin tưởng Saitama tuyệt đối không ai khác chính là
                      ngài King. Hãy thử tưởng tượng xem, trong tay ngài không
                      có gì, không đồ bảo hộ càng không có võ công g. Thế nhưng
                      đứng trước một quái vật cấp Rồng là Rết trưởng lão, ngài
                      King đã rất tin tưởng vào anh bạn chơi game Saitama. Cứ
                      những lúc các anh hùng cần đến ngài nhất thì King xuất
                      hiện, ngài không sợ hãi vì ngài biết rằng chỉ cần có anh
                      bạn đầu hói chơi game dở Saitama xuất hiện thôi là mọi
                      chuyện gần như sẽ được giải quyết một cách đơn giản. Chính
                      vì vậy ngài King luôn xuất hiện một cách ngầu nhất có thể,
                      làm màu nhất có thể để sau đó triệu hồi Saitama và đứng
                      xem anh chàng đầu hói giải quyết mọi chuyện.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/hi3-16278984784621032619136.jpg"
                      alt="3, MANGA ONE PUNCH MAN,TÁC GIẢ ONE PUNCH MAN,MỸ NHÂN ONE PUNCH MAN,ANIME ONE PUNCH MAN,KING ONE PUNCH MAN,FAN ONE PUNCH MAN,CỘNG ĐỒNG ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,HỌC TRÒ SAITAMA,THẦY TRÒ SAITAMA VS GENOS,FUBUKI VS BANG,"
                      note=""
                    />
                    <p>
                      Như vậy có thể khẳng định rằng trong One Punch Man, ngoài
                      chính bản thân Saitama ra thì King chính là nhân vật tin
                      tưởng vào anh chàng đầu hói Saitama nhất. Các nhân vật
                      khác nhìn chung đều đánh giá Saitama mạnh nhưng không nghĩ
                      rằng anh chàng này vô đối với cú đấm của mình. Chính vì
                      vậy người anh hùng Saitama trong One Punch Man đã không cô
                      đơn trên con đường vô đối của mình. Bài viết có tham khảo
                      các nội dung trên fanpage One Punch Man Việt Nam Fan Club.
                      Các bạn nghĩ sao về điều trên, hãy để lại ý kiến của mình
                      nhé!
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/hi4-16278984875021045087582.jpg"
                      alt="4, MANGA ONE PUNCH MAN,TÁC GIẢ ONE PUNCH MAN,MỸ NHÂN ONE PUNCH MAN,ANIME ONE PUNCH MAN,KING ONE PUNCH MAN,FAN ONE PUNCH MAN,CỘNG ĐỒNG ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,HỌC TRÒ SAITAMA,THẦY TRÒ SAITAMA VS GENOS,FUBUKI VS BANG,"
                      note=""
                    />
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
