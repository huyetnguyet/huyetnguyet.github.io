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
"timestamp": '31/07/2021 01:17 PM',
"title": 'Chỉ bằng 1 lời nói chân thành, Ronaldo đã thay đổi số phận của cậu bé Nhật Bản từng bị đám đông chế giễu: Đẳng cấp thực thụ của một ngôi sao lớn!',
"description": 'Được đích thân Cristiano Ronaldo bảo vệ và khuyên nhủ, cậu bé 12 tuổi từng bị đám đông chế giễu năm nào giờ đã trở thành nhà vô địch bóng đá quốc gia ở cấp độ trung học.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-1-16277387120352048380142.jpg',
"alt": 'ronaldo,Nhật Bản,',
"category": 'news',
"date": '31/07/2021',
"time": '01:17 PM',
"link": '/chi-bang-1-loi-noi-chan-thanh-ronaldo-da-thay-doi-so-phan-cua-cau-be-nhat-ban-tung-bi-dam-dong-che-gieu-dang-cap-thuc-thu-cua-mot-ngoi-sao-lon',
"zcomponent": 'page_20210731131713',
"filepath": './20210731131713-chi-bang-1-loi-noi-chan-thanh-ronaldo-da-thay-doi-so-phan-cua-cau-be-nhat-ban-tung-bi-dam-dong-che-gieu-dang-cap-thuc-thu-cua-mot-ngoi-sao-lon.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  "Chỉ bằng 1 lời nói chân thành, Ronaldo đã thay đổi số phận của cậu bé Nhật Bản từng bị đám đông chế giễu: Đẳng cấp thực thụ của một ngôi sao lớn!";
const author = "LINH HÂN,";
const source = "Trí thức trẻ";
const timestamp = "31/07/2021 01:17 PM";
const description =
  "Được đích thân Cristiano Ronaldo bảo vệ và khuyên nhủ, cậu bé 12 tuổi từng bị đám đông chế giễu năm nào giờ đã trở thành nhà vô địch bóng đá quốc gia ở cấp độ trung học.";
const link =
  "chi-bang-1-loi-noi-chan-thanh-ronaldo-da-thay-doi-so-phan-cua-cau-be-nhat-ban-tung-bi-dam-dong-che-gieu-dang-cap-thuc-thu-cua-mot-ngoi-sao-lon";
const tagparam = ["ronaldo", "Nhật Bản"];
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

export default function page_20210731131713() {
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
                    Trước khi trở thành siêu sao bóng đá hàng đầu thế giới như
                    hiện nay, Cristiano <strong>Ronaldo</strong> đã phải trải
                    qua những năm tháng tuổi thơ đầy dữ dội. Anh biết mình có
                    thể thay đổi số phận nếu nỗ lực không ngừng nghỉ, và cũng
                    muốn lan tỏa niềm tin tích cực này đến cho mọi người.
                  </p>
                  <p>
                    Năm 2014, Cristiano <strong>Ronaldo</strong> đã tham gia một
                    sự kiện quảng cáo tại Tokyo (<strong>Nhật Bản</strong>). Đến
                    phần giao lưu, một cậu bé 12 tuổi tên là Ryota Iwaoka được
                    mời lên để giao lưu cùng thần tượng. Ryota là 1 trong 3
                    người may mắn trúng phần thưởng này.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-1-16277387120352048380142.jpg"
                    alt="1, ronaldo,Nhật Bản,"
                    note=""
                  />
                  <p>
                    Lần đầu tiên tận mắt ngắm nhìn người mình ngưỡng mộ bấy lâu
                    nay, Ryota vô cùng hồi hộp. Cậu bé khiến cả khán phòng bất
                    ngờ khi bập bẹ chào hỏi bằng tiếng Bồ Đào Nha - ngôn ngữ mẹ
                    đẻ của <strong>Ronaldo</strong>: "Buổi chiều tốt lành, em
                    tên là Ryota".
                  </p>
                  <p>
                    Vì không nghe rõ, Cristiano <strong>Ronaldo</strong> đã hỏi
                    lại khiến Ryota trở nên lúng túng. Người dẫn chương trình
                    phải ra mặt phiên dịch, còn khán giả phía dưới bắt đầu bật
                    cười.
                  </p>
                  <p>
                    Trước cơ hội để đời này, Ryota đã nhờ huấn luyện viên người
                    Nhật lai Brazil dịch lại một số câu hỏi ra giấy bằng tiếng
                    Bồ Đào Nha.
                  </p>
                  <p>
                    "Anh là cầu thủ yêu thích của em. Ước mơ của em là được cùng
                    anh chơi bóng một ngày nào đó. Vậy làm thế nào để em có thể
                    trở thành một cầu thủ chuyên nghiệp?", cậu bé hỏi.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Dù đã cố gắng hết sức, Ryota vẫn không tránh khỏi việc lắp
                    bắp. Lúc này, những tiếng cười cợt bắt đầu vang lên trong
                    đám đông.
                  </p>
                  <p>
                    Phản ứng này khiến Cristiano <strong>Ronaldo</strong> bực
                    mình. Anh nhanh chóng nhìn xuống khán phòng, nghiêm túc hỏi:
                    "Tại sao các bạn lại cười? Cậu bé nói tiếng Bồ Đào Nha rất
                    tốt. Các bạn nên cảm thấy hạnh phúc vì cậu bé đã nỗ lực hết
                    sức mình chứ?".
                  </p>
                  <p>
                    Sau khi bảo vệ Ryota, Cristiano <strong>Ronaldo</strong>{" "}
                    quay lại trả lời câu hỏi của cậu bé về giấc mơ trở thành cầu
                    thủ bóng đá. Đó là những lời khuyên quý giá mà cậu bé 12
                    tuổi này sẽ không bao giờ quên trong đời mình.
                  </p>
                  <p>
                    "Em hãy tin tưởng vào bản thân. Cứ làm việc chăm chỉ và đừng
                    bỏ lỡ cơ hội khi nó đến", siêu sao 36 tuổi dặn dò.
                  </p>
                  <p>
                    Nhờ sự động viên của thần tượng, Ryota đã trở thành một
                    trung vệ tài năng ở trường cấp 2. Tuy nhiên, cậu bé cũng gặp
                    phải trở ngại khi một số trường từ chối nhận cậu vào chơi
                    cho đội của họ.
                  </p>
                  <p>
                    Cuối cùng, Ryota được nhận vào Học viện Yamanashi - một
                    trường đại học nằm ở thành phố Kofu, tỉnh Yamanashi. Cậu đã
                    chơi cho đội B trước khi được đôn lên đội A vào năm thứ hai
                    đại học.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-3-16277387139361360262469.jpg"
                    alt="4, ronaldo,Nhật Bản,"
                    note=""
                  />
                  <p>
                    Năm 2020, CLB Học viện Yamanashi đủ điều kiện tham dự giải
                    vô địch quốc gia cấp trường, giúp Ryota tới gần hơn ước mơ
                    chơi chuyên nghiệp. Tuy nhiên, sau một va chạm đáng tiếc với
                    đối thủ, chàng trai trẻ bị chấn thương và phải ngồi ngoài
                    băng ghế dự bị, nhìn đồng đội chơi trận tứ kết, bán kết và
                    chung kết.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-1-16277387133892104453628.jpg"
                    alt="2, ronaldo,Nhật Bản,"
                    note=""
                  />
                  <p>
                    Sau khi vượt qua đội Aomori Yamada được đánh giá cao ở trận
                    chung kết, CLB Học viện Yamanashi đã giành chức vô địch
                    trong niềm vui hân hoan của các cầu thủ. Gần 7 năm sau khi{" "}
                    <strong>Ronaldo</strong>, cậu bé gầy còm bị mọi người chê
                    bai năm nào giờ đã là nhà vô địch bóng đá.
                  </p>
                  <p>
                    Tại <strong>Nhật Bản</strong>, các giải đấu cấp trường cũng
                    quan trọng không kém giải trẻ ở nhiều quốc gia khác. Đây là
                    nơi ươm mầm cho các tài năng bóng đá xứ sở mặt trời mọc.
                    Theo truyền thông, nếu tiếp tục nỗ lực rèn luyện, Ryota hoàn
                    toàn có thể thi đấu chuyên nghiệp, thậm chí là chơi bóng ở
                    châu Âu cùng thần tượng như cậu luôn mong ước.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-2-1627738713422417698595.png"
                    alt="3, ronaldo,Nhật Bản,"
                    note=""
                  />
                  <p>
                    Sau trận chung kết, Ryota cho biết anh chưa từng quên khoảnh
                    khắc để đời cách đây 7 năm. "Lời khuyên của{" "}
                    <strong>Ronaldo</strong> luôn ở trong tâm trí tôi", chàng
                    trai trẻ khẳng định trong video gửi tới thần tượng.
                  </p>
                  <p>
                    Ngoài ra, Ryota cũng gửi lời cảm ơn đến những người đã sát
                    cánh với mình trong những năm vừa qua. Dù đối mặt với không
                    ít chấn thương và đau đớn, cậu vẫn có thể vượt qua tất cả
                    nhờ sự ủng hộ của tất cả mọi người.
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
