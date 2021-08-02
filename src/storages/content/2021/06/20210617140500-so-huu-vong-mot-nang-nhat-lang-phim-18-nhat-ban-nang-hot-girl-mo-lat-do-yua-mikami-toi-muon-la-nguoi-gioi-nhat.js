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
"timestamp": '17/06/2021 02:05 PM',
"title": 'Sở hữu vòng một "nặng" nhất làng phim 18+ Nhật Bản, nàng hot girl mơ lật đổ Yua Mikami: "Tôi muốn là người giỏi nhất"',
"description": 'Rất nhiều người cho rằng ước mơ của cô nàng hot girl hoàn toàn có thể xảy ra.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/',
"alt": 'Gai Xinh, Cong Dong Mang, Hot Girl, images, Phim Av, Phim 18, Asuka Ada, ',
"category": 'images',
"date": '17/06/2021',
"time": '02:05 PM',
"link": '/so-huu-vong-mot-nang-nhat-lang-phim-18-nhat-ban-nang-hot-girl-mo-lat-do-yua-mikami-toi-muon-la-nguoi-gioi-nhat',
"zcomponent": 'page_20210617140500',
"filepath": './20210617140500-so-huu-vong-mot-nang-nhat-lang-phim-18-nhat-ban-nang-hot-girl-mo-lat-do-yua-mikami-toi-muon-la-nguoi-gioi-nhat.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  'Sở hữu vòng một "nặng" nhất làng phim 18+ Nhật Bản, nàng hot girl mơ lật đổ Yua Mikami: "Tôi muốn là người giỏi nhất"';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "17/06/2021 02:05 PM";
const description =
  "Rất nhiều người cho rằng ước mơ của cô nàng hot girl hoàn toàn có thể xảy ra.";
const link =
  "so-huu-vong-mot-nang-nhat-lang-phim-18-nhat-ban-nang-hot-girl-mo-lat-do-yua-mikami-toi-muon-la-nguoi-gioi-nhat";
const tagparam = [
  "gai-xinh",
  "cong-dong-mang",
  "hot-girl",
  "av",
  "phim-av",
  "phim-18",
  "asuka-ada",
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

export default function page_20210617140500() {
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
              >
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
                    Theo thời gian, với sự phát triển của ngành công nghiệp{" "}
                    <strong>AV</strong> Nhật Bản, ngày càng nhiều cô gái xinh
                    đẹp, thậm chí là các nàng <strong>hot girl</strong>, idol
                    lựa chọn dấn thân vào con đường này như một cơ hội để đổi
                    đời, leo lên đỉnh vinh quang của danh vọng cũng như tiền
                    bạc. Làn sóng tân binh cũng đang ngày càng phát triển rực
                    rỡ, và nổi bật trong số đó, chắc chắn không thể bỏ qua Asuka
                    Aka - một cô nàng hot girl sinh năm 1998 và hiện đang làm
                    mưa làm gió tại nhiều bảng xếp hạng <strong>phim 18</strong>
                    + Nhật Bản.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140500--10-049292.jpg")
                        .default
                    }
                    alt="1Gai Xinh, Cong Dong Mang, Hot Girl, images, Phim Av, Phim 18, Asuka Ada, "
                    note="Asuka Aka - nữ tân binh đầy tiềm năng của ngành công nghiệp AV Nhật Bản"
                  />
                  <p>
                    Gương mặt xinh đẹp với mái tóc ngắn cá tính, Asuka nhanh
                    chóng thu hút được rất nhiều sự quan tâm từ phía cộng đồng
                    ngay từ những ngày đầu xuất hiện. Tuy nhiên, điều khiến cô
                    nàng tạo nên sự khác biệt lại nằm ở chính vòng một siêu
                    khủng của mình. Cụ thể, số đo ba vòng của cô nàng{" "}
                    <strong>hot girl</strong> mới đây đã bị rò rỉ, đó là 105 -
                    59 - 88, chuẩn hình mẫu của sự nóng bỏng. Và cũng vì đôi gò
                    bồng đảo khổng lồ của mình, đối lập hoàn toàn với gương mặt
                    xinh xắn, ngây thơ mà Asuka Aka thậm chí còn được nhiều
                    người đặt cho biệt danh Big Baby. Hiện tại, cô nàng đang là
                    diễn viên nổi bật của S1 Studio.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140500--11-527047.jpg")
                        .default
                    }
                    alt="2Gai Xinh, Cong Dong Mang, Hot Girl, images, Phim Av, Phim 18, Asuka Ada, "
                    note="Vòng một khổng ồ của Asuka Aka luôn là điểm nhấn trong mọi tác phẩm mà cô nàng tham gia"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140500--12-531497.jpg")
                        .default
                    }
                    alt="3Gai Xinh, Cong Dong Mang, Hot Girl, images, Phim Av, Phim 18, Asuka Ada, "
                    note="Và biệt danh Big Baby cũng từ đó mà xuất hiện"
                  />
                  <p>
                    Tất nhiên, khi đã là một phần của ngành công nghiệp{" "}
                    <strong>AV</strong> Nhật Bản, chắc hẳn chẳng ai có thể hài
                    lòng với vị trí hiện tại của mình, và Asuka Aka cũng vậy.
                    Mặc dù được đánh giá là rất tiềm năng, thế nhưng cô nàng vẫn
                    luôn muốn tiến tới hàng ngũ ngôi sao, phổ cập tên tuổi của
                    mình như những gì mà các bậc tiền bối Yua Mikami, Karen
                    Kaede đã và đang làm được. Đó là lý do mà bên cạnh việc cực
                    kỳ chăm chỉ đóng phim, ra mắt tác phẩm mới liên tục, Asuka
                    cũng cực kỳ tâm huyết trong việc phát triển trang cá nhân và
                    hình ảnh bên ngoài của mình.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140500--13-473384.jpg")
                        .default
                    }
                    alt="4Gai Xinh, Cong Dong Mang, Hot Girl, images, Phim Av, Phim 18, Asuka Ada, "
                    note="Asuka đang cố gắng để trở nên thành công nhanh nhất có thể"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140500--14-470116.jpg")
                        .default
                    }
                    alt="5Gai Xinh, Cong Dong Mang, Hot Girl, images, Phim Av, Phim 18, Asuka Ada, "
                    note="Và sự chăm chỉ của cô nàng cũng đã được đền đáp"
                  />
                  <p>
                    Để rồi liên tiếp trong những tháng ngày vừa qua, dựa trên
                    các bảng xếp hạng diễn viên phim <strong>AV</strong> Nhật
                    Bản ăn khách nhất trong tháng, cô nàng Asuka lúc nào cũng
                    đứng ở vị trí trên cao, thậm chí là cao hơn so với cả Yua
                    Mikami. Có tháng, cô nàng còn leo hẳn lên ngôi vị top đầu
                    một cách đầy xứng đáng. Nói về vòng một của mình, Asuka chia
                    sẻ: "Dù sao thì tôi cũng tận dụng được điều này. Và vì đã
                    quyết định theo đuổi một cách nghiêm túc, thế nên tôi sẽ là
                    người giỏi nhất trong ngành". Chưa kể, cô nàng còn có dự
                    định viết một cuốn tự truyện trong tương lai nữa.{" "}
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140500--15-658738.jpg")
                        .default
                    }
                    alt="6Gai Xinh, Cong Dong Mang, Hot Girl, images, Phim Av, Phim 18, Asuka Ada, "
                    note="Nhan sắc cực kỳ nổi bật của Asuka Aka"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210617140500--16-745259.jpg")
                        .default
                    }
                    alt="7Gai Xinh, Cong Dong Mang, Hot Girl, images, Phim Av, Phim 18, Asuka Ada, "
                    note="Cô nàng tự tin muốn vươn tới đỉnh cao nhất"
                  />
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
