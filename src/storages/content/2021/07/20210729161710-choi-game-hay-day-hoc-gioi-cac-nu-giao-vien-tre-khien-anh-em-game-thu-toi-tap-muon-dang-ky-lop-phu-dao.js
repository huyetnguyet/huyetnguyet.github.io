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
"timestamp": '29/07/2021 04:17 PM',
"title": 'Chơi game hay, dạy học giỏi, các nữ giáo viên trẻ khiến anh em game thủ tới tấp muốn đăng ký lớp phụ đạo',
"description": 'Thừa các yếu tố để thu hút cánh mày râu, các nữ giáo viên xinh đẹp sở hữu lượt fan “khủng".',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/10/photo-1-16259322309741565601941.jpg',
"alt": 'GIÁO VIÊN,CHƠI GAME,STREAMER,GAME THỦ,CỘNG ĐỒNG MẠNG,',
"category": 'games',
"date": '29/07/2021',
"time": '04:17 PM',
"link": '/choi-game-hay-day-hoc-gioi-cac-nu-giao-vien-tre-khien-anh-em-game-thu-toi-tap-muon-dang-ky-lop-phu-dao',
"zcomponent": 'page_20210729161710',
"filepath": './20210729161710-choi-game-hay-day-hoc-gioi-cac-nu-giao-vien-tre-khien-anh-em-game-thu-toi-tap-muon-dang-ky-lop-phu-dao.js'
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
  "Chơi game hay, dạy học giỏi, các nữ giáo viên trẻ khiến anh em game thủ tới tấp muốn đăng ký lớp phụ đạo";
const author = "Kayle";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:17 PM";
const description =
  'Thừa các yếu tố để thu hút cánh mày râu, các nữ giáo viên xinh đẹp sở hữu lượt fan “khủng".';
const link =
  "choi-game-hay-day-hoc-gioi-cac-nu-giao-vien-tre-khien-anh-em-game-thu-toi-tap-muon-dang-ky-lop-phu-dao";
const tagparam = [
  "GIÁO VIÊN",
  "CHƠI GAME",
  "STREAMER",
  "GAME THỦ",
  "CỘNG ĐỒNG MẠNG",
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

export default function page_20210729161710() {
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
                    <h5>
                      Nữ <strong>giáo viên</strong> Esports
                    </h5>
                    <p>
                      Sinh ra ở thành phố Trùng Khánh (Trung Quốc), lần đầu tiên
                      Fu Han tiếp xúc Esports khi mới 15 tuổi, cô gia nhập cộng
                      đồng <strong>game thủ</strong>. Tham gia giải đấu LMHT
                      Trùng Khánh cùng bạn bè và giành ngôi vô địch. Sau đó, cô
                      nàng theo đuổi sự nghiệp game thủ chuyên nghiệp và trở
                      thành bình luận viên Esports.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/10/photo-1-16259321437761016486407.jpg"
                      alt="1, GIÁO VIÊN,CHƠI GAME,STREAMER,GAME THỦ,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Năm 2019, mong muốn truyền cảm hứng cho giới trẻ hiểu đúng
                      và yêu thích bộ môn này, Fu Han chọn cách trở thành{" "}
                      <strong>giáo viên</strong> dạy <strong>chơi game</strong>{" "}
                      tại trường nghề ở địa phương. Cô hạnh phúc khi có thể biến
                      đam mê thể thao điện tử trở thành phần công việc hàng
                      ngày.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/10/photo-1-16259322309741565601941.jpg"
                      alt="2, GIÁO VIÊN,CHƠI GAME,STREAMER,GAME THỦ,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Với mức độ phổ biến và ảnh hưởng của Esports tại Trung
                      Quốc, ngày càng nhiều sinh viên đăng ký học môn này.
                    </p>
                    <h5>
                      Nữ <strong>giáo viên</strong> tiếng Anh sexy{" "}
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/10/photo-1-1625932260297222584981.jpg"
                      alt="3, GIÁO VIÊN,CHƠI GAME,STREAMER,GAME THỦ,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Dịch bệnh đã tác động lên nhiều ngành nghề, trong đó các
                      trung tâm giáo dục chịu nhiều ảnh hưởng. Cũng vì thế, loại
                      hình dạy và học trực tuyến, nơi các{" "}
                      <strong>giáo viên</strong> đôi khi phải trở thành các{" "}
                      <strong>streamer</strong> bất đắc dĩ đang được ưa chuộng.
                      Từ đây, hai cô nàng giáo việc dạy tiếng Anh đã bất ngờ nổi
                      lên vì cực kỳ sexy và nóng bỏng.
                    </p>
                    <p>
                      Là một <strong>giáo viên</strong> dạy tiếng Anh, đồng thời
                      cũng là một <strong>game thủ</strong> cực kỳ đam mê, Chloe
                      nhanh chóng trở nên nổi tiếng ngay sau khi tung ra chương
                      trình học tiếng Anh trực tuyến của mình.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Dễ hiểu khi mà mỗi lần lên sóng, Chloe luôn thu hút được
                      một lượng học viên đông đảo. Được biết, sau khi du học tại
                      Vancouver, cô nàng đã bắt đầu trở thành một{" "}
                      <strong>giáo viên</strong> dạy tiếng Anh kể từ đó. Bên
                      cạnh việc phát sóng các buổi dạy trực tuyến, Chloe còn
                      thường xuyên chơi LMHT trên Twitch và cũng khiến không ít
                      người phải thán phục trước kỹ năng cá nhân của mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/10/photo-1-1625932352605268379186.jpg"
                      alt="4, GIÁO VIÊN,CHƠI GAME,STREAMER,GAME THỦ,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Game hay, mặt xinh, dáng đẹp lại còn tri thức, Chloe được
                      nhiều người cho là mẫu bạn gái trong mơ của mọi người. Nữ{" "}
                      <strong>giáo viên</strong> sở hữu lượng view khổng lồ, các
                      fan cầu khẩn "mở lớp 1vs1".
                    </p>
                    <h5>Giảng viên hot girl xứ kim chi</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/10/photo-1-16259323343421743643730.jpg"
                      alt="5, GIÁO VIÊN,CHƠI GAME,STREAMER,GAME THỦ,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Ngày đi dạy học, tối về làm nữ <strong>streamer</strong>,
                      cô nàng xinh đẹp Park Hyun Seo gây bão mạng một thời gian
                      dài. Tốt nghiệp đại học Busan, từ khi còn là sinh viên,
                      Hyun Seo đã là một hot girl đa tài, một ngôi sao radio có
                      rất nhiều tương tác trên mạng xã hội, người mẫu bán thời
                      gian có tiếng.
                    </p>
                    <p>
                      Trên giảng đường, Park Hyun Seo diện trang phục vest ngắn,
                      đứng trên giảng đường khoe đôi chân dài miên man và ba
                      vòng nóng bỏng, cô nàng mới thực sự trở nên nổi tiếng,
                      được cư dân mạng phong tặng là "Nữ giảng viên nóng bỏng
                      nhất Hàn Quốc".
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/10/photo-1-16259324146531036392980.jpg"
                      alt="6, GIÁO VIÊN,CHƠI GAME,STREAMER,GAME THỦ,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Đối với những ai quan tâm thì Park Hyun Seo thường xuyên
                      stream trên AfreecaTV. Thậm chí, những hình ảnh của Park
                      Hyun Seo ngoài đời thường cũng nhận được sự khen ngợi của
                      không ít cư dân mạng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/10/photo-1-1625932386232987887346.jpg"
                      alt="7, GIÁO VIÊN,CHƠI GAME,STREAMER,GAME THỦ,CỘNG ĐỒNG MẠNG,"
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
