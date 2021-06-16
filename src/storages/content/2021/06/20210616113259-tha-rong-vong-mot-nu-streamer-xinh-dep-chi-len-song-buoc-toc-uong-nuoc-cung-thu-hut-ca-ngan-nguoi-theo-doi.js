import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '16/06/2021 11:32 AM',
"title": 'Thả rông vòng một, nữ streamer xinh đẹp chỉ lên sóng buộc tóc, uống nước cũng thu hút cả ngàn người theo dõi',
"description": 'Visual đỉnh cao của cô nàng streamer đã trở thành điểm nhấn lớn nhất.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/',
"alt": 'Gai Xinh, Hot Girl, Cong Dong Mang, Streamer, Nu Streamer, ',
"category": 'images',
"date": '16/06/2021',
"time": '11:32 AM',
"link": '/tha-rong-vong-mot-nu-streamer-xinh-dep-chi-len-song-buoc-toc-uong-nuoc-cung-thu-hut-ca-ngan-nguoi-theo-doi',
"zcomponent": 'page_20210616113259',
"filepath": './20210616113259-tha-rong-vong-mot-nu-streamer-xinh-dep-chi-len-song-buoc-toc-uong-nuoc-cung-thu-hut-ca-ngan-nguoi-theo-doi.js'
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
  "Thả rông vòng một, nữ streamer xinh đẹp chỉ lên sóng buộc tóc, uống nước cũng thu hút cả ngàn người theo dõi";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "16/06/2021 11:32 AM";
const description =
  "Visual đỉnh cao của cô nàng streamer đã trở thành điểm nhấn lớn nhất.";
const link =
  "tha-rong-vong-mot-nu-streamer-xinh-dep-chi-len-song-buoc-toc-uong-nuoc-cung-thu-hut-ca-ngan-nguoi-theo-doi";
const tagparam = [
  "gai-xinh",
  "hot-girl",
  "cong-dong-mang",
  "streamer",
  "nu-streamer",
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

export default function page_20210616113259() {
  return (
    <>
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
                <div className="contentBody">
                  <p>
                    <strong>Streamer</strong> giờ đây có lẽ là một trong những
                    công việc "dễ" làm nhất ở thời điểm hiện tại. Tất nhiên,
                    nhiều người có thể phản đối luận điểm này nhưng streamer
                    trên thế giới giờ đây đã biến tướng đi rất nhiều và nó không
                    còn là công việc đòi hỏi nhiều chất xám, sự sáng tạo và
                    nguồn cảm hứng mỗi ngày như trước. Thậm chí, có những cô
                    nàng lên sóng gần như chẳng làm gì nhiều, tương tác một vài
                    câu chuyện trong khung chat với fan, thể hiện một số bài vũ
                    đạo cơ bản và diện các bộ trang phục khoe thân một chút là
                    cũng đủ để hút lượng view khủng. Điển hình như Ji-eun, một
                    cô nàng cũng khá có tiếng trên AfreecaTV thời gian gần đây.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113259--10-587553.png")
                        .default
                    }
                    alt="1Gai Xinh, Hot Girl, Cong Dong Mang, Streamer, Nu Streamer, "
                    note="Ji-eun, cô nàng streamer xinh đẹp và gợi cảm của AfreecaTV"
                  />
                  <p>
                    Cái tên Ji-eun có lẽ là không thể xứng đáng hơn để lấy ra
                    làm ví dụ minh họa cho trường hợp này. Không có một kỹ năng
                    nào thật sự nổi bật, thế nhưng với gương mặt xinh đẹp cùng
                    thân hình gợi cảm của mình, cô nàng này cũng chẳng quá khó
                    khăn để sở hữu một lượng fan đông đảo. Thậm chí, như ở phiên
                    phát sóng gần đây, Ji-eun thậm chí còn chưa cần làm gì
                    nhiều, chỉ mới khởi động với các thao tác buộc tóc cũng như
                    uống nước thì đã có hàng ngàn người cũng chỉ ngồi ngắm màn
                    hình, theo dõi từng khoảnh khắc của cô nàng rồi.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113259--11-556262.jpg")
                        .default
                    }
                    alt="2Gai Xinh, Hot Girl, Cong Dong Mang, Streamer, Nu Streamer, "
                    note="Khoảnh khắc đầy quyến rũ gần đây của cô nàng streamer"
                  />
                  <p>
                    Thậm chí, dựa trên bộ trang phục của Ji-eun, không ít người
                    còn cho rằng cô nàng đã thả rông vòng một của mình để tương
                    xứng với bộ váy gợi cảm. Và quả thật, chưa cần làm gì nhiều,
                    thậm chí cũng chẳng cần nói chuyện, Ji-eun vẫn thể hiện được
                    sự nóng bỏng chết người của mình. Do đó cũng không lạ khi đa
                    số các fan của nữ <strong>streamer</strong> này đều là các
                    đấng mày râu có sở thích ngắm nhìn cái đẹp.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113259--12-919707.jpg")
                        .default
                    }
                    alt="3Gai Xinh, Hot Girl, Cong Dong Mang, Streamer, Nu Streamer, "
                    note="Ji-eun là điển hình cho trào lưu đang thịnh hành hiện nay của các nữ streamer"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113259--13-625521.jpg")
                        .default
                    }
                    alt="4Gai Xinh, Hot Girl, Cong Dong Mang, Streamer, Nu Streamer, "
                    note="Không cần làm gì nhiều nhưng cứ lên sóng là thu hút người xem với sự gợi cảm của mình"
                  />
                  <p>
                    Và có thể nói những trường hợp như Ji-eun chỉ là ví dụ điển
                    hình trong cơn sốt "hở bạo" của nhiều nữ{" "}
                    <strong>streamer</strong> hiện nay. Ở phương Tây, trào lưu
                    "bath-tube", tức là lên sóng livestream tại hồ bơi với các
                    bộ bikini nóng bỏng cũng đang là xu hướng rất thịnh hành.
                    Còn tại Nhật Bản, Hàn Quốc và nhiều quốc gia châu Á khác,
                    điều kiện cơ bản để thành công của nhiều nữ streamer giờ đơn
                    giản chỉ là đẹp, gợi cảm như Ji-eun, và các chi tiết như hớ
                    hênh nội y hay thả rông vòng một cũng chỉ được coi như một
                    chút "gia vị" tạo sự khác biệt cho từng phiên livestream mà
                    thôi. Cũng không biết nên vui hay buồn trước thực trạng này
                    nữa.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113259--14-156473.png")
                        .default
                    }
                    alt="5Gai Xinh, Hot Girl, Cong Dong Mang, Streamer, Nu Streamer, "
                    note="Những trường hợp nổi tiếng như của cô nàng Ji-eun đang xuất hiện ngày một nhiều hơn"
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
