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
"timestamp": '29/06/2021 09:54 PM',
"title": 'Dragon Ball: Những điều ước có sức ảnh hưởng lớn nhất series, đặc biệt số 4 đã thay đổi toàn bộ vũ trụ',
"description": 'Trong series Dragon Ball có rất nhiều điều ước đã được thực hiện. Tuy nhiên, 4 điều này có thể là tác động mạnh nhất thay đổi toàn bộ cốt truyện.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/anh-1-16247820993851392773325.jpg',
"alt": 'DRAGON BALL,ĐIỀU ƯỚC,VŨ TRỤ,THẦN HỦY DIỆT,RỒNG THẦN,GIẢI ĐẤU QUYỀN LỰC,',
"category": 'games',
"date": '29/06/2021',
"time": '09:54 PM',
"link": '/dragon-ball-nhung-dieu-uoc-co-suc-anh-huong-lon-nhat-series-dac-biet-so-4-da-thay-doi-toan-bo-vu-tru',
"zcomponent": 'page_20210629215457',
"filepath": './20210629215457-dragon-ball-nhung-dieu-uoc-co-suc-anh-huong-lon-nhat-series-dac-biet-so-4-da-thay-doi-toan-bo-vu-tru.js'
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
  "Dragon Ball: Những điều ước có sức ảnh hưởng lớn nhất series, đặc biệt số 4 đã thay đổi toàn bộ vũ trụ";
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 09:54 PM";
const description =
  "Trong series Dragon Ball có rất nhiều điều ước đã được thực hiện. Tuy nhiên, 4 điều này có thể là tác động mạnh nhất thay đổi toàn bộ cốt truyện.";
const link =
  "dragon-ball-nhung-dieu-uoc-co-suc-anh-huong-lon-nhat-series-dac-biet-so-4-da-thay-doi-toan-bo-vu-tru";
const tagparam = [
  "DRAGON BALL",
  "ĐIỀU ƯỚC",
  "VŨ TRỤ",
  "THẦN HỦY DIỆT",
  "RỒNG THẦN",
  "GIẢI ĐẤU QUYỀN LỰC",
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

export default function page_20210629215457() {
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
                    Là chủ đề chính của cả series, những{" "}
                    <strong>điều ước</strong> nhờ vào ngọc rồng đã xuất hiện khá
                    thường xuyên, bất kể là có thành công hay không, hay từ bên
                    phía phản diện lẫn chính diện. Nhưng không phải điều ước nào
                    cũng giống nhau và có tác động lớn.
                  </p>
                  <p>
                    Có những người lại muốn ước theo kiểu vô cùng lãng phí,
                    khiến người xem không thể không nghĩ: "Tại sao lại ước như
                    thế làm gì?". Nhưng cũng có những điều lại mang đến tác động
                    vô cùng lớn làm thay đổi toàn bộ cốt truyện.
                  </p>
                  <p>
                    Dưới đây chính là 4 <strong>điều ước</strong> có sức ảnh
                    hưởng lớn nhất series.
                  </p>
                  <h5>1. Porunga hồi sinh Piccolo</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/anh-1-16247820993851392773325.jpg"
                    alt="1, DRAGON BALL,ĐIỀU ƯỚC,VŨ TRỤ,THẦN HỦY DIỆT,RỒNG THẦN,GIẢI ĐẤU QUYỀN LỰC,"
                    note=""
                  />
                  <p>
                    Trong <strong>Dragon Ball</strong> việc hồi sinh các nhân
                    vật đã qua đời không phải là điều xa lạ. Tuy nhiên khi
                    Porunga hồi sinh Piccolo đã mang lại một tác động lớn. Với
                    việc Piccolo quay trở lại thì có nghĩa Kami cũng hồi sinh và
                    do đó <strong>Rồng thần</strong> của Trái đất xuất hiện.
                  </p>
                  <p>
                    Và giờ đây các anh hùng của <strong>Dragon Ball</strong> Z
                    đã tìm cách phá bỏ hạn chế lớn nhất của Porunga - chỉ một
                    người có thể được hồi sinh theo mong muốn. Mà thay vào đó
                    Rồng Shenron có thể hồi sinh toàn bộ những người đã chết
                    trên Trái đất cùng một lúc (điều này{" "}
                    <strong>Rồng thần</strong> Porunga không làm được) hay có
                    thể khôi phục lại tuổi trẻ cho một người bất kì, và hồi sinh
                    cho người đã chết sau 1 năm (quyền năng này là do được Dende
                    nâng cấp).
                  </p>
                  <h5>
                    2. Porunga phục hồi Trái đất sau khi Majin Buu hủy diệt
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/anh-2-16247820993971459505733.jpg"
                    alt="2, DRAGON BALL,ĐIỀU ƯỚC,VŨ TRỤ,THẦN HỦY DIỆT,RỒNG THẦN,GIẢI ĐẤU QUYỀN LỰC,"
                    note=""
                  />
                  <p>
                    Đến cuối <strong>Dragon Ball</strong> Z, Majin Buu (bây giờ
                    là Kid Buu) về cơ bản đã xóa sổ mọi thứ trong đó bao gồm cả
                    Trái đất đã bị phá hủy. Lúc này Vegeta đã sử dụng Dende để
                    thực hiện hai <strong>điều ước</strong> đầu tiên của mình
                    đối với Porunga đó là khôi phục Trái đất, sau đó mang lại
                    tất cả những sinh mạng mà Buu đã giết quay trở lại.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Điều này không chỉ giúp khắc phục những thiệt hại do Buu để
                    lại, mà còn tạo cơ sở cho Goku bắt đầu thực hiện được chiêu
                    Spirit Bomb của mình. Trong khi <strong>điều ước</strong>{" "}
                    thứ ba để khôi phục sức mạnh của Goku đã giúp đánh bại Buu,
                    thì nếu không có 2 điều ước trên thì tình thế sẽ không bao
                    giờ được thay đổi.
                  </p>
                  <h5>3. Shenron giải thích cách trở thành Super Saiyan God</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/anh-3-16247820994212042121530.jpg"
                    alt="3, DRAGON BALL,ĐIỀU ƯỚC,VŨ TRỤ,THẦN HỦY DIỆT,RỒNG THẦN,GIẢI ĐẤU QUYỀN LỰC,"
                    note=""
                  />
                  <p>
                    Sự tồn tại của Super Saiyan God đã thay đổi hoàn toàn quỹ
                    đạo mà <strong>Dragon Ball</strong> Super sẽ đi theo. Lời
                    giải thích của Shenron về cách đạt được Super Saiyan God đã
                    mở ra một thế giới sức mạnh mới cho các chiến binh Z. Mặc dù{" "}
                    <strong>điều ước</strong> không đặc biệt hào nhoáng hay phức
                    tạp, nhưng sự phân nhánh của nó đã dẫn đến tất cả các sự
                    kiện của các dạng Super Saiyan và hơn thế nữa.
                  </p>
                  <p>
                    Tuy nhiên, nếu không có <strong>điều ước</strong> của Rồng
                    Shenron thì điều này vẫn mãi là một bí ẩn.
                  </p>
                  <h5>4. Super Shenron hồi sinh các vũ trụ</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/anh-4-1624782099426775802973.jpg"
                    alt="4, DRAGON BALL,ĐIỀU ƯỚC,VŨ TRỤ,THẦN HỦY DIỆT,RỒNG THẦN,GIẢI ĐẤU QUYỀN LỰC,"
                    note=""
                  />
                  <p>
                    Tại hai thời điểm trong <strong>Dragon Ball</strong> Super,
                    Super Shenron đã khôi phục các <strong>vũ trụ</strong> khỏi
                    sự hủy diệt. <strong>Điều ước</strong> đầu tiên là việc vũ
                    trụ 6 được khôi phục và thay đổi, còn điều ước thứ hai được
                    thực hiện bởi Android 17, đã khôi phục các vũ trụ khác sau
                    khi chúng bị phá hủy trong{" "}
                    <strong>Giải đấu Quyền lực</strong>. Điều ước này thật sự có
                    tác động rất lớn đến cả vũ trụ.
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
