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
"timestamp": '21/08/2021 11:06 AM',
"title": '99 ngôi mộ của mỹ nhân trong lăng Tần Thủy Hoàng hé lộ sự thật kinh hoàng về tục tuẫn táng người sống',
"description": 'Tần Thủy Hoàng đương nhiên là người có trí tuệ anh minh nhưng cũng là người 10 phần mê tín. Ông sinh tiền đã đưa tất cả những mỹ nữ trong thiên hạ về lấp đầy hậu cung. Nhưng sau khi Tần Thủy Hoàng qua đời, những người này toàn bộ cũng biến mất. Sử sách ghi lại bọn họ đều bị tuẫn táng, sự thật là thế nào?',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/20/-1629453055644601345863.jpg',
"alt": 'Tần Thủy Hoàng,Lăng mộ Tần Thủy Hoàng,tài liệu lịch sử,mộ tập thể,',
"category": 'news',
"date": '21/08/2021',
"time": '11:06 AM',
"link": '/99-ngoi-mo-cua-my-nhan-trong-lang-tan-thuy-hoang-he-lo-su-that-kinh-hoang-ve-tuc-tuan-tang-nguoi-song',
"zcomponent": 'page_20210821110607',
"filepath": './20210821110607-99-ngoi-mo-cua-my-nhan-trong-lang-tan-thuy-hoang-he-lo-su-that-kinh-hoang-ve-tuc-tuan-tang-nguoi-song.js'
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
  "99 ngôi mộ của mỹ nhân trong lăng Tần Thủy Hoàng hé lộ sự thật kinh hoàng về tục tuẫn táng người sống";
const author = "PHẠM TRANG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "21/08/2021 11:06 AM";
const description =
  "Tần Thủy Hoàng đương nhiên là người có trí tuệ anh minh nhưng cũng là người 10 phần mê tín. Ông sinh tiền đã đưa tất cả những mỹ nữ trong thiên hạ về lấp đầy hậu cung. Nhưng sau khi Tần Thủy Hoàng qua đời, những người này toàn bộ cũng biến mất. Sử sách ghi lại bọn họ đều bị tuẫn táng, sự thật là thế nào?";
const link =
  "99-ngoi-mo-cua-my-nhan-trong-lang-tan-thuy-hoang-he-lo-su-that-kinh-hoang-ve-tuc-tuan-tang-nguoi-song";
const tagparam = [
  "Tần Thủy Hoàng",
  "Lăng mộ Tần Thủy Hoàng",
  "tài liệu lịch sử",
  "mộ tập thể",
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

export default function page_20210821110607() {
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
                      Tần Thủy Hoàng đương nhiên là người có trí tuệ anh minh
                      nhưng cũng là người 10 phần mê tín. Ông sinh tiền đã đưa
                      tất cả những mỹ nữ trong thiên hạ về lấp đầy hậu cung.
                      Nhưng sau khi Tần Thủy Hoàng qua đời, những người này toàn
                      bộ cũng biến mất. Sử sách ghi lại bọn họ đều bị tuẫn táng,
                      sự thật là thế nào?
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/20/-1629453054136884164321.jpg"
                      alt="1, Tần Thủy Hoàng,Lăng mộ Tần Thủy Hoàng,tài liệu lịch sử,mộ tập thể,"
                      note="Ảnh minh họa"
                    />

                    <p>
                      Các nhà khảo cổ học phát hiện, những người phụ nữ đáng
                      thương này quả thực đã bị tuẫn táng, mà phương thức tuẫn
                      táng cũng vô cùng độc ác, không ai có thể may mắn thoát
                      ra. Những người phụ nữ đã bị nhồi nhét chết trong lăng mộ,
                      tổng cộng có đến 99 mạng người.
                    </p>
                    <h5>
                      99 ngôi mộ nhỏ đồng nhất hướng về một hầm mộ đã đóng kín
                      ngàn năm
                    </h5>
                    <p>
                      Sau 40 năm thăm dò và khai quật, trước mắt đã phát hiện
                      tổng cộng 188 lăng mộ được chôn cất cùng Tần Thủy Hoàng,
                      phần lớn vẫn chưa tiến hành khai quật. Tượng binh mã đã
                      khai quật hào số 1, 2 và 3 đã vào sâu hơn nhưng phần lớn
                      vẫn chưa hoàn thành. Khu vực tập trung nhiều lăng mộ nhất
                      chính là bên trong một khu “vườn” mộ cỡ nhỏ, được gọi là
                      “Khu mộ phụ của lăng Tần Thủy Hoàng”.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Trong khu mộ phụ này chứa 99 ngôi mộ nhỏ này đều theo một
                      đường thẳng tắp hướng về một lăng mộ lớn. Các nhà khảo cổ
                      phát tích 10 ngôi mộ trong số đó. Những điều tìm được
                      không chỉ cho thấy người bị chôn ở trong đó có bao nhiêu
                      thê thảm, mà còn chứng minh những tài liệu lịch sử nói
                      rằng Tần Thủy Hoàng tuẫn táng cả hậu cung theo cùng là
                      hoàn toàn chính xác. Đây quả nhiên là một vị vua có quan
                      niệm về việc thống trị cực mạnh.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/20/-1629453055644601345863.jpg"
                      alt="2, Tần Thủy Hoàng,Lăng mộ Tần Thủy Hoàng,tài liệu lịch sử,mộ tập thể,"
                      note=""
                    />

                    <p>
                      Theo Trương Vệ Tinh, Phó giáo đốc Viện khảo cổ Lăng mộ Tần
                      Thủy Hoàng cho hay: Trong những ngôi mộ tập thể phát hiện
                      việc số lượng lớn xương cốt không đồng nhất, lẽ ra những
                      xương cốt này đều là của những thiếu nữ, hơn nữa cũng
                      không đầy đủ các bộ phận. Điều này nói lên rằng, những
                      người này bị giết ở một địa điểm khác rồi sau đó mới mang
                      đến đây chôn cất một cách tạm bợ trong những ngôi mộ nhỏ
                      này thay vì lăng mộ. Cả một quá trình từ hành quyết đến
                      chôn xác đều vô cùng tàn nhẫn và đẫm máu.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/20/-1629453055680251936744.jpg"
                      alt="3, Tần Thủy Hoàng,Lăng mộ Tần Thủy Hoàng,tài liệu lịch sử,mộ tập thể,"
                      note=""
                    />

                    <h5>
                      9 cổng thành của Đế lăng định vị chính xác vị trí của lăng
                      tẩm
                    </h5>
                    <p>
                      Các nghiên cứu khảo cổ cho thấy lăng mộ này được xây dựng
                      dựa trên mô hình của Hàm Dương, kinh thành của nhà Tần, có
                      hai vòng thành bên trong và ngoài, rất nhiều di tích quan
                      trọng phân bố trên 2 trục chính, tổng cộng có 9 cổng thành
                      trên hai trục Bắc Nam. Mặc dù các cổng thành này không ở
                      giữa tường thành nhưng nó đều hướng về một nơi duy nhất
                      chính là trung tâm của lăng.
                    </p>
                    <h5>Diện tích của lăng tương đương 20 sân bóng đá</h5>
                    <p>
                      Công trình lăng tẩm khổng lồ này có diện tích đến 170.000
                      mét vuông, tương đương với diện tích của hơn 20 sân bóng
                      đá. Con đường được tạo thành từ di chỉ những bộ xương đã
                      được định vị chính xác trong cuộc khảo cổ, hiện lên hệ
                      thống vòng tròn và hình chữ thập được lát đá. Tất cả thể
                      hiện quan niệm về quyền uy và thứ bậc của Tần Thủy Hoàng.
                    </p>
                    <p>
                      Như chúng ta đã biết, Tần Thủy Hoàng chết trên đường tuần
                      du, không thể hạ lệnh xử chết cả hậu cung. Cho nên tất cả
                      những chuyện này có lẽ đều do một tay Tần Nhị Thế thực
                      hiện. Sự thật là thế nào, chỉ có đống xương khô đáng
                      thương kia mới hiểu rõ nhất.
                    </p>

                    <p>Theo KKnews</p>
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
