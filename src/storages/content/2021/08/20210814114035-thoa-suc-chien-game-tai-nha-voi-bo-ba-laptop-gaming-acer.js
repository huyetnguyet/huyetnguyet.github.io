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
"timestamp": '14/08/2021 11:40 AM',
"title": 'Thoả sức chiến game tại nhà với bộ ba laptop gaming Acer',
"description": 'Những mẫu laptop gaming từ Acer chắc chắn sẽ nâng tầm trải nghiệm của bạn khi tận hưởng các tựa game hot hiện nay.',
"src": 'https://channel.mediacdn.vn/thumb_w/640/2021/8/14/photo-1-1628918761364726630697.jpg',
"alt": 'ACER,LAPTOP,',
"category": 'tech',
"date": '14/08/2021',
"time": '11:40 AM',
"link": '/thoa-suc-chien-game-tai-nha-voi-bo-ba-laptop-gaming-acer',
"zcomponent": 'page_20210814114035',
"filepath": './20210814114035-thoa-suc-chien-game-tai-nha-voi-bo-ba-laptop-gaming-acer.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "tech";
const categoryLink = "/tech";
const title = "Thoả sức chiến game tại nhà với bộ ba laptop gaming Acer";
const author = "thinga";
const source = "Trí Thức Trẻ";
const timestamp = "14/08/2021 11:40 AM";
const description =
  "Những mẫu laptop gaming từ Acer chắc chắn sẽ nâng tầm trải nghiệm của bạn khi tận hưởng các tựa game hot hiện nay.";
const link = "thoa-suc-chien-game-tai-nha-voi-bo-ba-laptop-gaming-acer";
const tagparam = ["ACER", "LAPTOP"];
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

export default function page_20210814114035() {
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
                      Đối với những ai đã làm và các bạn sinh viên, việc tự lắp
                      PC nhằm giải trí, chơi game tại nhà sẽ gặp nhiều bất lợi
                      bởi các linh kiện đang có giá cao. Thêm vào đó, khi tình
                      hình ổn trở lại, nhóm đối tượng này sẽ chẳng thể thường
                      xuyên sử dụng PC, từ đó dẫn đến lãng phí tiền bạc. Vậy
                      nên, sắm cho bản thân <strong>laptop</strong> gaming sẽ là
                      giải pháp tối ưu trong thời điểm này.
                    </p>
                    <p>
                      Hiện nay, trên thị trường có khá nhiều mẫu{" "}
                      <strong>laptop</strong> chơi game đang được chú ý là
                      Predator Helios 300, Nitro 5 và Gaming Aspire 7. Cùng tìm
                      hiểu về những chiếc laptop này nhé.
                    </p>
                    <h5>Predator Helios 300</h5>
                    <p>
                      Về thiết kế, Helios 300 thừa hưởng nét đặc trưng của dòng
                      Predator vốn hầm hố và đẹp theo phong cách tương lai. Tuy
                      vậy, hãng cũng đã tinh chỉnh để máy mềm mại hơn. Nhìn sang
                      cấu hình, mẫu <strong>laptop</strong> gaming này được
                      trang bị vi xử lý Intel Core i7 thế hệ mới nhất, card màn
                      hình NVIDIA GeForce RTX 30 series... Nhờ đó, máy có hiệu
                      suất cao, vận hành mượt mà.
                    </p>
                    <ContentImage
                      src="https://channel.mediacdn.vn/thumb_w/640/2021/8/14/photo-1-1628918761364726630697.jpg"
                      alt="1, ACER,LAPTOP,"
                      note=""
                    />
                    <p>
                      Ngoài ra, game thủ có thể tận hưởng trải nghiệm chơi game
                      mượt mà, không bị nhòe với tốc độ làm mới 144Hz và thời
                      gian phản hồi rất nhanh chỉ 3ms. Máy còn được trang bị hệ
                      thống tản nhiệt quạt đôi kim loại với một quạt AeroBlade
                      3D thế hệ thứ 5 với 89 lá quạt siêu mỏng, được kiểm soát
                      bằng phần mềm PredatorSense mang lại hiệu quả tản nhiệt
                      tối ưu. Có thể nói, Predator Helios 300 chính là tập hợp
                      của những gì tiên tiến nhất hiện nay. Các tác vụ công việc
                      văn phòng, giải trí đa phương tiện hay game AAA đều không
                      thể làm khó mẫu <strong>laptop</strong> gaming này.
                    </p>
                    <h5>
                      <strong>Acer</strong> Nitro 5
                    </h5>
                    <p>
                      <strong>Acer</strong> Nitro 5 mang thiết kế tinh tế cùng
                      những đường cắt đậm chất gaming. Màn hình IPS QHD lên đến
                      165Hz tràn viền mang lại trải nghiệm game nhập vai hoàn
                      hảo cùng đèn LED RGB 4 vùng thay đổi được 16,7 triệu màu
                      cho game thủ thỏa sức sáng tạo không gian riêng.
                    </p>
                    <ContentImage
                      src="https://channel.mediacdn.vn/thumb_w/640/2021/8/14/photo-1-16289187691981535580652.jpg"
                      alt="2, ACER,LAPTOP,"
                      note=""
                    />
                    <p>
                      Nitro 5 đơn giản là giúp bạn thống trị thế giới game với
                      sức mạnh tổng hợp của bộ xử lý Intel Core i7 thế hệ thứ 11
                      hoặc AMD Ryzen 5000 series và GPU NVIDIA GeForce RTX 30
                      Series. Mạnh mẽ bậc nhất phân khúc, hiệu năng "quái vật",
                      đó là cách người ta nói về chiếc <strong>laptop</strong>{" "}
                      gaming này.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Giờ đây, game thủ đã không còn nỗi sợ máy nóng khi thao
                      tác nhiều hoạt động cùng lúc bởi Nitro 5 được trang bị hệ
                      thống quạt đôi, công nghệ <strong>Acer</strong> CoolBoost
                      và thiết kế tới bốn cổng thoát khí ở đằng sau và hai bên
                      máy.
                    </p>
                    <h5>
                      <strong>Acer</strong> Gaming Aspire 7
                    </h5>
                    <p>
                      Ở phân khúc giá mềm hơn, không thể không nhắc đến{" "}
                      <strong>Acer</strong> Gaming Aspire 7. Chiếc{" "}
                      <strong>laptop</strong> gaming này thường được xem là "con
                      quái vật ẩn trong vẻ ngoài hiền lành" bởi thiết kế gọn
                      gàng, hệt như mẫu laptop văn phòng thông thường nhưng thực
                      chất lại có hiệu năng cực mạnh mẽ.
                    </p>
                    <ContentImage
                      src="https://channel.mediacdn.vn/thumb_w/640/2021/8/14/photo-2-1628918769204571976974.jpg"
                      alt="3, ACER,LAPTOP,"
                      note=""
                    />
                    <p>
                      Cụ thể, Gaming Aspire 7 sở hữu bộ xử lý AMD Ryzen 5 5500U
                      giúp máy hoạt động mượt mà, ổn định khi thực hiện mọi tác
                      vụ và chơi game. AMD Ryzen từ lâu đã trở thành ông trùm
                      hiệu năng khi có thể tối ưu rất tốt sức mạnh của máy. Thêm
                      vào đó là sự hỗ trợ của card đồ họa NVIDIA GTX1650Ti đã
                      biến Gaming Aspire 7 trở thành <strong>laptop</strong>{" "}
                      chơi game tốt nhất nhì phân khúc.
                    </p>
                    <p>
                      Tóm lại, trong thời điểm nhạy cảm hiện nay,{" "}
                      <strong>laptop</strong> gaming là sự lựa chọn tối ưu bậc
                      nhất cho các game thủ. Với những model đã được gợi ý trên,
                      bạn có thể tiếp tục thỏa mãn niềm đam mê của mình ở tầm
                      cao mới.
                    </p>
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
