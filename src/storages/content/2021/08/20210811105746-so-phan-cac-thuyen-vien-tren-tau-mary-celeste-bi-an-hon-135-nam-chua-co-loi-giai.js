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
"timestamp": '11/08/2021 10:57 AM',
"title": 'Số phận các thuyền viên trên tàu Mary Celeste, bí ẩn hơn 135 năm chưa có lời giải',
"description": 'Cho đến nay, vụ án các thuyền viên tàu Mary Celeste mất tích vấn là bí ẩn lớn của nhân loại',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/10/the-missing-crew-of-the-mary-celeste-16285962245971287547253.jpg',
"alt": 'CON TÀU MA,KHÁM PHÁ,RÙNG RỢN,MARY CELESTE,',
"category": 'news',
"date": '11/08/2021',
"time": '10:57 AM',
"link": '/so-phan-cac-thuyen-vien-tren-tau-mary-celeste-bi-an-hon-135-nam-chua-co-loi-giai',
"zcomponent": 'page_20210811105746',
"filepath": './20210811105746-so-phan-cac-thuyen-vien-tren-tau-mary-celeste-bi-an-hon-135-nam-chua-co-loi-giai.js'
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
  "Số phận các thuyền viên trên tàu Mary Celeste, bí ẩn hơn 135 năm chưa có lời giải";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "11/08/2021 10:57 AM";
const description =
  "Cho đến nay, vụ án các thuyền viên tàu Mary Celeste mất tích vấn là bí ẩn lớn của nhân loại";
const link =
  "so-phan-cac-thuyen-vien-tren-tau-mary-celeste-bi-an-hon-135-nam-chua-co-loi-giai";
const tagparam = ["CON TÀU MA", "KHÁM PHÁ", "RÙNG RỢN", "MARY CELESTE"];
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

export default function page_20210811105746() {
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
                      Vào ngày 4 tháng 12 năm 1872, một con tàu có tên{" "}
                      <strong>Mary Celeste</strong> được phát hiện trôi dạt trên
                      vùng biển đầy sóng gió của Đại Tây Dương. Con tàu trong
                      tình trạng không hỏng hóc, đầy đủ buồm lẫn các vật dụng đi
                      biển cần thiết. Tuy nhiên, khi lên tàu, người ta nhận ra
                      nó hoàn toàn vắng vẻ - thủy thủ đoàn đã biến mất không dấu
                      vết. Kể từ đó, Mary Celeste trở thành bí ẩn tồn tại hơn
                      135 năm trong lịch sử nhân loại.
                    </p>
                    <p>
                      Mười ba năm sau khi được phát hiện, năm 1885, tàu{" "}
                      <strong>Mary Celeste</strong> đâm vào rạn san hô Rochelais
                      và bị đắm ngoài khơi Haiti. Thuyền trưởng Gilman Parker đã
                      bán lại quyền cứu hộ cho lãnh sứ quán Mỹ với giá 500 đô la
                      và yêu cầu bảo hiểm cho các hàng hóa giá trị được cho là
                      có trên tàu. Đây là kết cục của{" "}
                      <strong>con tàu ma</strong> khét tiếng trong giới hàng
                      hải.
                    </p>
                    <h5>Đoàn thủy thủ tàu Mary Celeste</h5>
                    <p>
                      <strong>Mary Celeste</strong> là tàu hàng được đăng ký
                      hoạt động tại Anh vào năm 1861 với tên gọi Amazon. Bảy năm
                      sau đó, nó được người Mỹ mua lại và đổi tên thành Mary
                      Celeste.
                    </p>
                    <p>
                      Tàu vẫn ra khơi yên ả cho đến đến hải trình từ New York
                      tới Genoa vào năm 1872. Trong chuyến hải trình này, tàu
                      thuộc quyền chỉ huy của thuyền trưởng Benjamin Briggs, một
                      người được đồn là không bao giờ say xỉn và rất ngoan đạo.
                      Thuyền trưởng được miêu tả như một người dũng cảm, mẫn cán
                      sẽ không bao giờ rời tàu trừ phi bị đe dọa đến tính mạng.
                      Người đồng hành đầu tiên trong đoàn là Albert Richardson,
                      cũng rất phù hợp để chỉ huy tàu và do chính thuyền trưởng
                      Briggs lựa chọn. Ngoài ra, trên tàu còn có vợ, con gái sơ
                      sinh của Briggs cùng sáu thuyền viên khác.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/mary-celeste-in-storm-1628596159663304593394.jpg"
                      alt="1, CON TÀU MA,KHÁM PHÁ,RÙNG RỢN,MARY CELESTE,"
                      note="Những người trên tàu: Albert Richardson, thuyền trưởng Briggs vợ và con gái của Briggs"
                    />
                    <p>
                      Hải trình bắt đầu từ cuối tháng 10 năm 1872, nhiệm vụ của
                      thuyền là vận chuyển 1701 thùng rượu biến tính. Ngày 7
                      tháng 11, sau khi đã bốc hàng lên khoang, tàu rời cảng New
                      York và tiến vào Đại Tây Dương. Ngày 4 tháng 12, một tàu
                      brigantine của Anh có tên Dei Gratia phát hiện ra{" "}
                      <strong>Mary Celeste</strong> đang trôi dạt không phương
                      hướng giữa Azores và Bồ Đào Nha.
                    </p>
                    <h5>Vụ mất tích bí ẩn</h5>
                    <p>
                      Khi các thuyền viên tàu Dei Gratia tiếp cận và lên tàu{" "}
                      <strong>Mary Celeste</strong>, họ nhận thấy ghi chép nhật
                      trình hàng ngày của tàu dừng lại ở ngày 24 tháng 11. Các
                      điều kiện trên tàu còn khá tốt, hàng hóa nguyên vẹn và
                      lương thực lẫn nước ngọt còn đủ cho 6 tháng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/10/mary-celeste-1872-16285962083711701881491.jpg"
                      alt="2, CON TÀU MA,KHÁM PHÁ,RÙNG RỢN,MARY CELESTE,"
                      note="Bữa ăn còn dang dở của trên tàu"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Điểm đáng ngờ duy nhất là các tẩu thuốc bị bỏ lại trên
                      tàu. Theo giải thích của David Morehouse, thuyền trưởng
                      tàu Dei Gratia, điều này cho thấy rằng các thuyền viên đã
                      rời tàu một cách vội vã và có phần bất ngờ. Ngoài ra,
                      xuồng cứu sinh cũng như thi kế và đồ dùng đo cự giác cũng
                      biến mất.
                    </p>
                    <p>
                      Một thuyền viên khác trên tàu Dei Gratia tên là Augustus
                      Anderson cũng tiết lộ trong quá trình điều tra là halyard
                      chính – một sợi dây chắc chắn có chu vi khoảng 8cm được
                      tìm thấy, dây đã bị cắt và treo lơ lửng ở mạn tàu.
                    </p>
                    <h5>Giả thuyết về vụ mất tích</h5>
                    <p>
                      Từ lời khai của các thuyền viên tàu Dei Gratia, người ta
                      đưa ra một giả thuyết về những gì đã xảy ra trên tàu{" "}
                      <strong>Mary Celeste</strong> như sau: Có một sự cố hoặc
                      sự kiện nào đó đã xảy ra trên tàu. Nó khiến cho thuyền
                      trưởng hoảng sợ, ông ra lệnh cho thủy thủ đoàn thả xuồng
                      cứu sinh và rời tàu. Sau đó họ dùng dây halyard buộc xuồng
                      cứu sinh vào tàu. Thủy thủ đoàn và gia đình thuyền trưởng
                      ngồi trên xuồng, theo sau con tàu và chờ xem chuyện gì sẽ
                      xảy đến.
                    </p>
                    <p>
                      Tuy nhiên tình trạng nguy hiểm này hóa ra lại là báo động
                      nhầm. Không may cho thuyền trưởng Briggs và những người
                      khác là dây halyard bị đứt do một cơn bão dữ dội. Họ đã
                      không thể trở về tàu <strong>Mary Celeste</strong>.
                    </p>
                    <p>
                      Dù đây là giả thuyết hợp lý nhất cho đến thời điểm hiện
                      tại, nhưng vẫn có không ít người đưa ra các giả thuyết
                      khác. Trong đó đề cập đến một cuộc nổi dậy thủy thủ đoàn,
                      một vụ cháy do các thùng rượu biến tính gây ra…
                    </p>
                    <p></p>
                    <p></p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/10/the-missing-crew-of-the-mary-celeste-16285962245971287547253.jpg"
                      alt="3, CON TÀU MA,KHÁM PHÁ,RÙNG RỢN,MARY CELESTE,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/10/abandoned-ship-crew-onboard-1628596315257494251355.jpg"
                      alt="4, CON TÀU MA,KHÁM PHÁ,RÙNG RỢN,MARY CELESTE,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/10/mary-celeste-as-amazon-16285988736613404344.jpg"
                      alt="5, CON TÀU MA,KHÁM PHÁ,RÙNG RỢN,MARY CELESTE,"
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
