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
"timestamp": '29/07/2021 04:25 PM',
"title": 'Thực hiện Body painting lên vòng 1 trên sóng trực tiếp, nữ streamer nóng bỏng khiến khán giả sốc nặng',
"description": 'Nội dung đầy táo bạo của nữ streamer này đã khiến cô nàng trở nên cực kỳ nổi tiếng.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/26/4-1627276191391850785522.jpg',
"alt": 'GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,',
"category": 'images',
"date": '29/07/2021',
"time": '04:25 PM',
"link": '/thuc-hien-body-painting-len-vong-1-tren-song-truc-tiep-nu-streamer-nong-bong-khien-khan-gia-soc-nang',
"zcomponent": 'page_20210729162522',
"filepath": './20210729162522-thuc-hien-body-painting-len-vong-1-tren-song-truc-tiep-nu-streamer-nong-bong-khien-khan-gia-soc-nang.js'
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
  "Thực hiện Body painting lên vòng 1 trên sóng trực tiếp, nữ streamer nóng bỏng khiến khán giả sốc nặng";
const author = "A Đồi";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:25 PM";
const description =
  "Nội dung đầy táo bạo của nữ streamer này đã khiến cô nàng trở nên cực kỳ nổi tiếng.";
const link =
  "thuc-hien-body-painting-len-vong-1-tren-song-truc-tiep-nu-streamer-nong-bong-khien-khan-gia-soc-nang";
const tagparam = ["GÁI XINH", "HOT GIRL", "STREAMER", "NỮ STREAMER"];
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

export default function page_20210729162522() {
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
                  <p>
                    Trong những năm trở lại đây, hình thức livestream IRL (In
                    Real Life) đã và đang phát triển một cách vô cùng nhanh
                    chóng. Thay vì giới hạn ở một tựa game nào đó, các{" "}
                    <strong>streamer</strong> IRL có thể làm mọi thứ mà mình
                    muốn từ vẽ tranh, nói chuyện với khán giả cho tới đi du
                    lịch, khám phá... Nhờ vào sự tự do sáng tạo này mà nội dung
                    IRL đã thu hút được rất nhiều khán giả, thậm chí nó còn là
                    con đường ngắn nhất để giúp các <strong>nữ streamer</strong>{" "}
                    trở nên nổi tiếng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627275591349361230744-16272756077842067842732.png"
                    alt="1, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,"
                    note="Celia - Nữ nhân vật chính trong câu chuyện"
                  />
                  <p>
                    Đơn cử như nữ <strong>streamer</strong> có biệt danh là
                    Celia tới từ Hàn Quốc, cô nàng đã được nhiều người biết tới
                    sau một buổi stream IRL. Cụ thể thì vào ngày 15/7 vừa rồi,{" "}
                    <strong>nữ streamer</strong> này đã tìm cách đổi mới nội
                    dung của mình bằng cách livestream quá trình mình đi chơi
                    tại một công viên nước. Sự thay đổi này khiến không ít khán
                    giả bất ngờ và tỏ ra vô cùng thích thú.
                  </p>
                  <p>
                    Điều đáng nói ở đây là ngay ở đầu buổi livestream, Celia đã
                    khiến nhiều khán giả sốc nặng khi thực hiện việc Body
                    painting lên vòng 1 trực tiếp trên sóng. Tuy nhiên tác phẩm
                    này không tồn tại trên cơ thể của Celia quá lâu khi nó đã bị
                    mờ đi rất nhiều vào cuối buổi livestream. Có lẽ điều này
                    xuất phát từ việc Celia đã bơi quá nhiều trong quá trình
                    khám phá công viên nước.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/1-1627275717277578244572.jpg"
                    alt="2, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,"
                    note="Ngay ở đầu buổi livestream thì Celia đã khiến nhiều người sốc nặng khi thực hiện Body painting lên vòng 1 trên sóng"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/2-1627275807033121668597.jpg"
                    alt="3, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,"
                    note="Cô nàng khoe sản phẩm cuối cùng tới khán giả"
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Nhờ vào hành động táo bạo kể trên mà kênh stream của Celia
                    đã nhanh chóng thu hút được rất nhiều khán giả và lượt theo
                    dõi. Kể cả khi buổi livestream chưa kết thúc thì nữ{" "}
                    <strong>streamer</strong> này đã có thêm hơn 10 nghìn lượt
                    theo dõi trên kênh của mình.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-1627275640762811845576.gif"
                    alt="4, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,"
                    note="Tới cuối buổi stream thì sản phẩm trên đã mờ đi khá nhiều vì nữ streamer này bơi liên tục"
                  />
                  <p>
                    Nếu các bạn chưa biết thì Celia là một trong những{" "}
                    <strong>streamer</strong> hiếm hoi tại Hàn Quốc gắn bó với
                    tựa game Starcraft. Tới thời điểm hiện tại thì cô nàng vẫn
                    hay stream tựa game tưởng chừng đã lỗi thời này. Đương nhiên
                    là bên cạnh việc chơi game, Celia cũng dần chuyển sang các
                    nội dung mới như chuyến khám phá công viên nước như trên.
                    Nếu tiếp tục khai thác nội dung này, sẽ không quá bất ngờ
                    nếu Celia trở nên nổi tiếng hơn nữa trong tương lai.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/3-1627275900778342770846.jpg"
                    alt="5, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,"
                    note="Celia hứa hẹn sẽ trở nên cực kỳ nổi tiếng trong tương lai"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/4-1627276191391850785522.jpg"
                    alt="6, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,"
                    note=""
                  />
                  <ContentImage
                    src="https://bmania.net/data/file/045/15953442635881.gif"
                    alt="7, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,"
                    note=""
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
