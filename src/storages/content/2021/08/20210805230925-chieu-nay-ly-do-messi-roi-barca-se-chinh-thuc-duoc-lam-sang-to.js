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
"timestamp": '05/08/2021 11:09 PM',
"title": 'Chiều nay, lý do Messi rời Barca sẽ chính thức được làm sáng tỏ',
"description": 'Đích thân Chủ tịch Joan Laporta sẽ lý giải nguyên nhân vì sao Barcelona để siêu sao Lionel Messi ra đi.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-1-16282219122042139531664.jpg',
"alt": 'Messi rời Barca,messi,barcelona,barca,',
"category": 'news',
"date": '05/08/2021',
"time": '11:09 PM',
"link": '/chieu-nay-ly-do-messi-roi-barca-se-chinh-thuc-duoc-lam-sang-to',
"zcomponent": 'page_20210805230925',
"filepath": './20210805230925-chieu-nay-ly-do-messi-roi-barca-se-chinh-thuc-duoc-lam-sang-to.js'
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
const title = "Chiều nay, lý do Messi rời Barca sẽ chính thức được làm sáng tỏ";
const author = "THÀNH AN,";
const source = "Nhịp Sống Việt";
const timestamp = "05/08/2021 11:09 PM";
const description =
  "Đích thân Chủ tịch Joan Laporta sẽ lý giải nguyên nhân vì sao Barcelona để siêu sao Lionel Messi ra đi.";
const link = "chieu-nay-ly-do-messi-roi-barca-se-chinh-thuc-duoc-lam-sang-to";
const tagparam = ["Messi rời Barca", "messi", "barcelona", "barca"];
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

export default function page_20210805230925() {
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
                      Đội chủ sân Camp Nou thông báo, Chủ tịch Joan Laporta sẽ
                      tổ chức cuộc họp báo vào lúc 11h00 ngày 6/8 (16h00 giờ Hà
                      Nội) để chính thức công bố lý do không ký hợp đồng với
                      Lionel <strong>Messi</strong>. Đông đảo giới truyền thông
                      Tây Ban Nha đã đăng ký tham dự sự kiện này. Tuy nhiên,
                      siêu sao người Argentina sẽ không góp mặt.
                    </p>
                    <p>
                      Rạng sáng 6/8, thông tin <strong>Messi</strong> chia tay{" "}
                      <strong>Barcelona</strong> sau 21 năm gắn bó thực sự tạo
                      nên cú sốc lớn, với không chỉ các culé (fan{" "}
                      <strong>Barca</strong>). Truyền thông thế giới và người
                      hâm mộ trung lập tỏ ra vô cùng tiếc nuối trước viễn cảnh
                      không còn thấy Leo khoác lên mình chiếc áo đấu đã đi vào
                      huyền thoại. Tất cả đều đinh ninh tiền đạo 34 tuổi sẽ tái
                      ký hợp đồng với Blaugrana khi những cuộc đàm phán gia hạn
                      hợp đồng trước đó diễn ra suôn sẻ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-1-1628221910168327182593.jpg"
                      alt="1, Messi rời Barca,messi,barcelona,barca,"
                      note="Messi sẽ không còn khoác áo Barcelona ở mùa giải tới (Ảnh: Getty)"
                    />
                    <p>
                      Theo tờ Sport.es, bản thân <strong>Messi</strong> cũng rất
                      sốc và buồn bã. Ngôi sao xứ tango cùng gia đình trở lại{" "}
                      <strong>Barcelona</strong> chiều 4/8 sau chuyến đi nghỉ
                      tại Ibiza và dự định sẽ ký hợp đồng vào 5/8, trước khi hội
                      quân cùng các đồng đội để chuẩn bị cho trận tranh cúp Joan
                      Gamper với Juventus cuối tuần này.
                    </p>
                    <p>
                      Tuy nhiên, vào phút chót, đội chủ sân Camp Nou quyết định
                      "quay xe". Theo tiết lộ từ giới truyền thông Tây Ban Nha,{" "}
                      <strong>Barca</strong> buộc phải chia tay{" "}
                      <strong>Messi</strong> vì kế hoạch cắt giảm quỹ lương để
                      phù hợp với luật công bằng tài chính, vốn chưa thể tìm ra
                      phương án tháo gỡ.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Kể từ khi đại dịch Covid-19 bùng phát, doanh thu của
                      Blaugrana thâm hụt nghiêm trọng, chỉ còn 878 triệu euro.
                      Điều này cũng đồng nghĩa quỹ lương và chi tiêu phình lên
                      chiếm đến hơn 80% tổng doanh thu. Cùng với khoản nợ khổng
                      lồ gánh trên lưng trước đó, ban lãnh đạo{" "}
                      <strong>Barca</strong> phải chịu sức ép cực lớn về mặt tài
                      chính.
                    </p>
                    <p>
                      Ngay cả khi <strong>Messi</strong> chấp nhận giảm sâu mức
                      lương xuống dưới 50% so với trước đó,{" "}
                      <strong>Barca</strong> vẫn không thể kham nổi. Bởi nếu cố
                      giữ Messi, đội chủ sân Camp Nou sẽ không thể đáp ứng quy
                      định mức trần lương và chi tiêu của La Liga - Một CLB
                      không thể chi tiêu hay trả lương quá 60% số tiền họ kiếm
                      được trong mùa giải.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-1-16282219122042139531664.jpg"
                      alt="2, Messi rời Barca,messi,barcelona,barca,"
                      note="Bộ sưu tập danh hiệu đồ sộ của Messi trong màu áo Barcelona: 778 trận, 682 bàn thắng, 305 kiến tạo, 6 Quả bóng Vàng, 10 La Liga, 4 Champions League, 3 Club World Cup, 7 Copa del Rey, 3 Siêu cúp châu Âu, 8 Siêu cúp Tây Ban Nha và rất nhiều danh hiệu cá nhân khác"
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
