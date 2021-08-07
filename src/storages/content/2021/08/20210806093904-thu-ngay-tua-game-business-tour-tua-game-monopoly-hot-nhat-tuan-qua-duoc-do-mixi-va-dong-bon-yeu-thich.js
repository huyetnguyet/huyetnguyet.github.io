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
"timestamp": '06/08/2021 09:39 AM',
"title": 'Thử ngay tựa game Business Tour - tựa game Monopoly hot nhất tuần qua được Độ Mixi và đồng bọn yêu thích',
"description": 'Thể loại cờ tỷ phú đã không còn quá xa lạ đối với anh em game thủ từ trước tới nay. Tuy vậy, Business Tour vẫn mang tới một sức hút mạnh mẽ khi kết nối được bạn bè để cùng vạch ra những chiến lược tư duy đỉnh cao.',
"src": '',
"alt": 'BUSINESS TOUR,',
"category": 'games',
"date": '06/08/2021',
"time": '09:39 AM',
"link": '/thu-ngay-tua-game-business-tour-tua-game-monopoly-hot-nhat-tuan-qua-duoc-do-mixi-va-dong-bon-yeu-thich',
"zcomponent": 'page_20210806093904',
"filepath": './20210806093904-thu-ngay-tua-game-business-tour-tua-game-monopoly-hot-nhat-tuan-qua-duoc-do-mixi-va-dong-bon-yeu-thich.js'
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
  "Thử ngay tựa game Business Tour - tựa game Monopoly hot nhất tuần qua được Độ Mixi và đồng bọn yêu thích";
const author = "Thế Anh";
const source = "Trí Thức Trẻ";
const timestamp = "06/08/2021 09:39 AM";
const description =
  "Thể loại cờ tỷ phú đã không còn quá xa lạ đối với anh em game thủ từ trước tới nay. Tuy vậy, Business Tour vẫn mang tới một sức hút mạnh mẽ khi kết nối được bạn bè để cùng vạch ra những chiến lược tư duy đỉnh cao.";
const link =
  "thu-ngay-tua-game-business-tour-tua-game-monopoly-hot-nhat-tuan-qua-duoc-do-mixi-va-dong-bon-yeu-thich";
const tagparam = ["BUSINESS TOUR"];
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

export default function page_20210806093904() {
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
                      <strong>Business Tour</strong> là một trò chơi trực tuyến
                      miễn phí có mặt trên các nền tảng Android, Microsoft
                      Windows, Mac OS cổ điển. Tại đây, bạn sẽ cùng bạn bè tập
                      hợp một đội tối đa 4 người để thử sức với các chiến lược
                      tài chính trực tuyến, hoàn thành các nhiệm vụ hàng ngày,
                      tham gia các giải đấu đắt đỏ để trao đổi những phần thưởng
                      hấp dẫn. Với format của tựa game Monopoly truyền thống,
                      bạn sẽ phải khéo léo thâu tóm toàn bộ bản đồ kinh tế trong
                      sự cạnh tranh không ngừng của bạn bè và những người thân
                      yêu.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/-16282395595731630100420.jpg"
                      alt="1, BUSINESS TOUR,"
                      note="Business Tour chính là tựa game hot nhất tuần qua khi lôi kéo được sự tham gia của vô số các streamer nổi tiếng!"
                    />
                    <p>
                      Điều quan trọng nhất khiến <strong>Business Tour</strong>{" "}
                      trở nên thú vị chính là khả năng cho phép bạn chơi các trò
                      chơi trực tuyến với bạn bè. Dù rằng đây là một tựa game lý
                      tưởng với ngay cả những người mới bắt đầu nhờ bộ quy tắc
                      đơn giản, xúc tích, dẫu vậy, để làm chủ và chiến thắng lại
                      là một bài toán khó nhằn. Bạn sẽ phải sử dụng đầu óc nhạy
                      bén và tài năng kinh doanh của mình để đánh bại những
                      người chơi khác và trở thành một vị vua trong hội đồng
                      quản trị. Chính nhờ yếu tố cạnh tranh phức tạp và không
                      thể đoán trước đã khiến Business Tour hấp dẫn và tạo ra
                      nhiều lối chơi đa dạng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/-16282395643101718371967.jpg"
                      alt="2, BUSINESS TOUR,"
                      note="Bàn cờ Business Tour lấy cảm hứng từ nguyên mẫu Monopoly nổi tiếng"
                    />
                    <p>
                      Để dành chiến thắng trong trò chơi này, bạn có thể sử dụng
                      nhiều cách thức khác nhau: Là người trụ lại cuối cùng mà
                      không bị phá sản, Sở hữu cả 4 bãi biển nổi tiếng, Chiếm
                      được phần lớn bản đồ trong tay… Tuy nhiên, yếu tố may mắn
                      cũng như những chiến lược ngăn chặn của 3 đối thủ còn lại
                      sẽ không để các viễn cảnh đó xảy ra dễ dàng.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/-16282395624841545790343.jpg"
                      alt="3, BUSINESS TOUR,"
                      note="Kẻ chiến thắng là kẻ biết nắm bắt cơ hội đúng lúc"
                    />
                    <p>
                      Bên cạnh đó, bàn cờ <strong>Business Tour</strong> còn có
                      thêm một vài ô bổ trợ đặc biệt như: Đảo hoang, Giải đấu
                      Thế giới, Sân bay, Cơ hội, Đóng thuế… Tính toán từng đường
                      đi nước bước hợp lý, đầu tư tiền thông minh và trả các mức
                      phí khôn khéo… chính là những gì cần thiết để đưa bạn từ
                      một kẻ vô sản tới một doanh nhân thành đạt trong chớp mắt.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/-16282395619271030639339.jpg"
                      alt="4, BUSINESS TOUR,"
                      note="Bãi biển là một địa điểm quan trọng cần chiếm đoạt trong tựa game này"
                    />
                    <p>
                      Ngoài ra, hệ thống đồ họa thân thiện, vui nhộn cùng các
                      chi tiết được đầu tư cụ thể như: nhân vật ingame, skin xúc
                      xắc, skin bàn cờ… cũng là một yếu tố quan trọng góp phần
                      làm nên sức hút của <strong>Business Tour</strong>. Người
                      chơi cũng có thể “cày cuốc” tiền trong game để mua bán các
                      vật phẩm trang trí. Hàng tháng, danh sách 100 người chơi
                      có điểm xếp hạng cao nhất cũng sẽ được cập nhật để vinh
                      danh cũng như trao tặng những phần quà hấp dẫn trong game.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/-16282395649411776371562.jpg"
                      alt="5, BUSINESS TOUR,"
                      note="Lọt top xếp hạng sẽ cho bạn cơ hội sở hữu những phần quà vô cùng giá trị"
                    />
                    <p>
                      Còn chần chờ gì nữa mà không rủ ngay hội bạn bè vào khuấy
                      đảo <strong>Business Tour</strong> ngay hôm nay?{" "}
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
