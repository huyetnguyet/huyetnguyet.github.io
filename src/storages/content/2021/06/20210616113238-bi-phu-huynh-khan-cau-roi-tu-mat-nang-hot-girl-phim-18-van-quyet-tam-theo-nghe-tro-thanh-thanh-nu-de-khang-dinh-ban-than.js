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
"timestamp": '16/06/2021 11:32 AM',
"title": 'Bị phụ huynh khẩn cầu rồi từ mặt, nàng hot girl phim 18+ vẫn quyết tâm theo nghề, trở thành "thánh nữ" để khẳng định bản thân',
"description": 'Cô nàng hot girl đã chứng minh rằng mình không hề sai khi lựa chọn con đường này.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/',
"alt": 'Gai Xinh, Hot Girl, Cong Dong Mang, Kana Momonogi, images, Phim Av, Phim 18, ',
"category": 'images',
"date": '16/06/2021',
"time": '11:32 AM',
"link": '/bi-phu-huynh-khan-cau-roi-tu-mat-nang-hot-girl-phim-18-van-quyet-tam-theo-nghe-tro-thanh-thanh-nu-de-khang-dinh-ban-than',
"zcomponent": 'page_20210616113238',
"filepath": './20210616113238-bi-phu-huynh-khan-cau-roi-tu-mat-nang-hot-girl-phim-18-van-quyet-tam-theo-nghe-tro-thanh-thanh-nu-de-khang-dinh-ban-than.js'
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
  'Bị phụ huynh khẩn cầu rồi từ mặt, nàng hot girl phim 18+ vẫn quyết tâm theo nghề, trở thành "thánh nữ" để khẳng định bản thân';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "16/06/2021 11:32 AM";
const description =
  "Cô nàng hot girl đã chứng minh rằng mình không hề sai khi lựa chọn con đường này.";
const link =
  "bi-phu-huynh-khan-cau-roi-tu-mat-nang-hot-girl-phim-18-van-quyet-tam-theo-nghe-tro-thanh-thanh-nu-de-khang-dinh-ban-than";
const tagparam = [
  "gai-xinh",
  "hot-girl",
  "cong-dong-mang",
  "kana-momonogi",
  "av",
  "phim-av",
  "phim-18",
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

export default function page_20210616113238() {
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
                      Không ai có thể phủ nhận rằng ngành công nghiệp{" "}
                      <strong>AV</strong> Nhật Bản đang phát triển cực kỳ mạnh
                      mẽ trong những năm gần đây. Và đối với các diễn viên top
                      đầu, bên cạnh danh tiếng và tiền bạc, họ cũng đồng thời sở
                      hữu lượng fan hâm mộ khổng lồ nhưng bên cạnh đó, cũng phải
                      đánh đổi khá nhiều thứ mà dễ thấy nhất chính là những cái
                      nhìn không mấy thiện chí từ phía xã hội, đôi khi là từ
                      chính gia đình của mình nữa. Điển hình như trường hợp của{" "}
                      <strong>Kana Momonogi</strong>, người đang là một trong
                      những cái tên top đầu với sức hút không thua kém gì Yua
                      Mikami. Nhưng ẩn sau đó lại là một câu chuyện đầy khó khăn
                      trong hành trình khởi nghiệp.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113238--10-043133.jpg")
                          .default
                      }
                      alt="1Gai Xinh, Hot Girl, Cong Dong Mang, Kana Momonogi, images, Phim Av, Phim 18, "
                      note="Kana Momonogi - cô nàng hot girl trong câu chuyện"
                    />
                    <p>
                      Bắt đầu gia nhập ngành công nghiệp <strong>AV</strong>{" "}
                      Nhật Bản vào năm 2015, ít ai ngờ được rằng cô nàng nhỏ
                      nhắn này lại có sức hút mãnh liệt như thế. Quả thật, với
                      gương mặt ngây thơ xinh đẹp, thấp bé như học sinh cấp 3
                      nhưng vòng một thì lại siêu gợi cảm, Kana không mất quá
                      nhiều thời gian để bước chân vào hàng ngũ những ngôi sao
                      hàng đầu của ngành công nghiệp. Thế nhưng, suýt chút nữa
                      thì chúng ta đã không biết tới cái tên{" "}
                      <strong>Kana Momonogi</strong>, nếu như nàng{" "}
                      <strong>hot girl</strong> không quyết đoán và mạnh mẽ ngay
                      từ thời điểm bắt đầu.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113238--11-796188.jpg")
                          .default
                      }
                      alt="2Gai Xinh, Hot Girl, Cong Dong Mang, Kana Momonogi, images, Phim Av, Phim 18, "
                      note="Gương mặt ngây thơ nhưng Kana lại gây chú ý với vòng một căng tràn sức sống"
                    />
                    <p>
                      Cụ thể, trong một lần chia sẻ với fan hâm mộ mới đây, Kana
                      đã khiến rất nhiều người phải bất ngờ khi chia sẻ về việc
                      mình đã từ lâu không còn gặp bố mẹ nữa. Nguyên nhân không
                      phải vì khoảng cách, bận rộn mà bắt nguồn từ chính công
                      việc của cô nàng. Theo đó, sau khi giấu diếm cha mẹ để
                      đóng phim <strong>AV</strong>, Kana cuối cùng cũng bị phát
                      hiện. Ban đầu, phụ huynh của cô tìm mọi cách để thuyết
                      phục con gái bỏ nghề nhưng không thành, và cuối cùng biện
                      pháp cứng rắn hơn được đưa ra. Hoặc bỏ nghề và trở về cuộc
                      sống bình thường, hoặc đóng phim tiếp và bị bố mẹ từ mặt.
                      Kana chọn phương án số 2.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113238--12-678930.jpg")
                          .default
                      }
                      alt="3Gai Xinh, Hot Girl, Cong Dong Mang, Kana Momonogi, images, Phim Av, Phim 18, "
                      note="Quyết tâm gia nhập ngành công nghiệp AV Nhật Bản, Kana chấp nhận bị phụ huynh từ mặt"
                    />
                    <p>
                      Hiện tại, Kana đã không liên lạc với phụ huynh từ lâu, tuy
                      nhiên cô vẫn về thăm ông bà của mình. Còn về con đường sự
                      nghiệp, nàng <strong>hot girl</strong> vẫn đang rất thành
                      công với lựa chọn của mình. Đặc biệt trong bối cảnh mà
                      ngành công nghiệp đang có dấu hiệu đóng băng, việc Kana
                      vẫn ra tác phẩm mới đều đặn càng khiến cô được các fan yêu
                      thích hơn nữa. Song song với công việc đóng phim, cô nàng
                      cũng đang hoạt động ở nhiều lĩnh vực khác như ca hát, lồng
                      tiếng, livestream.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113238--13-517972.jpg")
                          .default
                      }
                      alt="4Gai Xinh, Hot Girl, Cong Dong Mang, Kana Momonogi, images, Phim Av, Phim 18, "
                      note="Bên cạnh công việc đóng phim"
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113238--14-113577.jpg")
                          .default
                      }
                      alt="5Gai Xinh, Hot Girl, Cong Dong Mang, Kana Momonogi, images, Phim Av, Phim 18, "
                      note="Kana cũng chứng tỏ mình rất đa tài khi đảm nhiệm thêm cả việc lồng tiếng"
                    />
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
