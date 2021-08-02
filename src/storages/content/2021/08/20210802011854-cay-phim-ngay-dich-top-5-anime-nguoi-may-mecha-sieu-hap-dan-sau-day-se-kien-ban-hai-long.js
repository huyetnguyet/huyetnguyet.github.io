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
"timestamp": '02/08/2021 01:18 AM',
"title": 'Cày phim ngày dịch, top 5 anime người máy - mecha siêu hấp dẫn sau đây sẽ kiến bạn hài lòng',
"description": 'Cùng chúng tôi đến với 5 anime người máy - mecha cực đỉnh giúp bạn giải trí trong những ngày ở nhà chống dịch này nhé!',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/any1-16277975881851921103740.jpg',
"alt": 'SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,GAME ANIME,TV ANIME,MANGA ANIME,TOP ANIME,',
"category": 'games',
"date": '02/08/2021',
"time": '01:18 AM',
"link": '/cay-phim-ngay-dich-top-5-anime-nguoi-may-mecha-sieu-hap-dan-sau-day-se-kien-ban-hai-long',
"zcomponent": 'page_20210802011854',
"filepath": './20210802011854-cay-phim-ngay-dich-top-5-anime-nguoi-may-mecha-sieu-hap-dan-sau-day-se-kien-ban-hai-long.js'
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
  "Cày phim ngày dịch, top 5 anime người máy - mecha siêu hấp dẫn sau đây sẽ kiến bạn hài lòng";
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "02/08/2021 01:18 AM";
const description =
  "Cùng chúng tôi đến với 5 anime người máy - mecha cực đỉnh giúp bạn giải trí trong những ngày ở nhà chống dịch này nhé!";
const link =
  "cay-phim-ngay-dich-top-5-anime-nguoi-may-mecha-sieu-hap-dan-sau-day-se-kien-ban-hai-long";
const tagparam = [
  "SHOP ANIME - MANGA",
  "PHONG CÁCH ANIME",
  "TRAILER ANIME",
  "MOVIE ANIME",
  "REVIEW ANIME",
  "ĐÁNH GIÁ ANIME",
  "GAME ANIME",
  "TV ANIME",
  "MANGA ANIME",
  "TOP ANIME",
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

export default function page_20210802011854() {
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
                  <h5>Neon Genesis Evangelion</h5>
                  <p>
                    Chắc hẳn ai yêu manga/anime cũng đã ít nhất một lần nghe đến
                    anime này rồi phải không nào? Ra mắt vào năm 1995, Neon
                    Genesis Evangelion lấy bối cảnh năm 2015 khi nhân loại đang
                    đứng trước bờ vực diệt vong. Hi vọng duy nhất của họ lúc này
                    là các Evangelion, những robot khổng lồ với khả năng chiến
                    đấu vượt trội. Trong anime, chúng ta sẽ theo chân Ikari
                    Shinji, một cậu trai 14 tuổi và là phi công của Evangelion
                    tân tiến Unit-01.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/any1-16277975881851921103740.jpg"
                    alt="1, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,GAME ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                    note=""
                  />
                  <p>
                    Với phong cách nghệ thuật đỉnh cao cùng câu chuyện đầy tính
                    nhân văn, Neon Genesis Evangelion cho đến nay vẫn là thương
                    hiệu anime mecha được khán giả Nhật Bản đánh giá là "anime
                    nổi tiếng nhất mọi thời đại". Sau hơn 25 năm, Neon Genesis
                    Evangelion đã trở thành một tượng đài trong làng anime Nhật
                    Bản đồng thời có sức ảnh hưởng đến nhiều thế hệ anime ở thời
                    điểm hiện tại.
                  </p>
                  <h5>Code Geass</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/any2-1627797588225669840014.jpg"
                    alt="2, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,GAME ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                    note=""
                  />
                  <p>
                    Nổi tiếng với nhân vật chính Lelouch, Code Geass là anime
                    mecha mang yếu tố chính trị ra mắt lần đầu tiên vào năm
                    2006. Code Geass đưa ta theo chân Lelouch, nhân vật có năng
                    lực đặc biệt "Sức mạnh của nhà vua". Điều này cho phép
                    Lelouch kiểm soát người khác làm theo ý mình. Lợi dụng sức
                    mạnh này, Lelouch tham gia vào chiến trường chính trị và gây
                    ra vô số chuyện kinh động xã hội. Nếu bạn muốn một tựa anime
                    đầy căng não thì đây là một sự lựa chọn hoàn hảo.
                  </p>
                  <h5>Koukyoushihen Eureka Seven</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/8/1/any3-16277975885441241984964.jpg"
                    alt="3, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,GAME ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                    note=""
                  />
                  <p>
                    Kéo dài 50 tập, Koukyoushihen Eureka Seven là anime kể câu
                    chuyện về Renton Thurston, một cậu bé 14 tuổi. Renton luôn
                    muốn được phiêu lưu đó đây, nhưng ước mơ của cậu lại bị áp
                    lực gia đình đè nén. Một ngày nọ, một vật thể không xác định
                    đâm vào nhà xe của Renton. Từ trong đó, cô gái trẻ Eureka
                    bước ra. Eureka nhờ Renton hãy sửa chữa cho Nirvash, cỗ máy
                    của cô. Từ đây, chuyến phiêu lưu điên rồ nhất của Renton bắt
                    đầu.
                  </p>
                  <RelationNewsInPage category={category} />
                  <h5>Alnoah.Zero</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/8/1/any4-16277975885651595497878.jpg"
                    alt="4, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,GAME ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                    note=""
                  />
                  <p>
                    Luôn nằm trong Top những anime mecha đỉnh nhất và cũng là
                    một trong những anime có kết thúc ức chế nhất, Alnoah.Zero
                    là tựa phim hoạt hình bạn sẽ không muốn bỏ qua. Anime có vô
                    vàn trận chiến đầy tính chiến lược giữa các robot khổng lồ
                    đồng thời cũng có cốt truyện vô cùng thu hút. Nói thêm một
                    chút thì Alnoah.Zero là một trong số ít anime mecha gần đây
                    gây được ấn tượng cho khán giả. Những năm tiếp đó, Nhật Bản
                    cũng có nhiều anime mecha khác ra mắt nhưng đa phần đều
                    không được khán giả đón nhận. Nếu bạn chưa xem Alnoah.Zero
                    thì những ngày giãn cách xã hội này là cơ hội tuyệt vời để
                    chúng ta thưởng thức siêu phẩm này nhé!
                  </p>
                  <h5>Full Metal Panic</h5>
                  <p>
                    Bạn cảm thấy các anime mecha thường gắn liền với chiến tranh
                    và chết chóc? Hãy xem Full Metal Panic để có góc nhìn mới
                    hơn nhé. Đây là anime được chuyển thể từ tiểu thuyết cùng
                    tên kể về Sagara Sousuke, một trung sĩ được giao nhiệm vụ
                    bảo vệ Kaname Chidori, cô bạn cùng tuổi được xem là ứng viên
                    của "The Whisper" (những người có trí tuệ và khả năng chế
                    tạo máy móc siêu phàm). Điều khó của nhiệm vụ này là Sousuke
                    phải bảo vệ Chidori tại trường học, một môi trường anh chưa
                    từng được tiếp xúc!
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/any5-16277975885741652420119.jpg"
                    alt="5, SHOP ANIME - MANGA,PHONG CÁCH ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,GAME ANIME,TV ANIME,MANGA ANIME,TOP ANIME,"
                    note=""
                  />
                  <p>
                    Với cách dẫn chuyện dí dỏm, Full Metal Panic đem đến cho
                    người xem những tràng cười vô cùng sảng khoái. Cốt truyện
                    của anime cũng được viết rất chỉn chủ, đảm bảo khi đã xem
                    thì bạn sẽ muốn theo dõi anime đến cùng. Đừng vì anime trông
                    xấu mà chê, phim thật sự rất đỉnh và có nội dung đặc biệt
                    hấp dẫn.
                  </p>
                  <p>
                    Trên đây là top 5 anime người máy - mecha siêu hấp dẫn sau
                    đây sẽ kiến bạn hài lòng vào những ngày giãn cách xã hội
                    này. Hãy ở nhà bật máy tính hoặc điện thoại lên và thưởng
                    thức những siêu phẩm này nhé!
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
