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
"timestamp": '31/07/2021 01:16 PM',
"title": 'Quấn mỗi khăn tắm lên sóng, nữ streamer gây sốc với chuỗi động tác gợi cảm khiến người xem không cầm được "máu mũi"',
"description": 'Nhiều người cho rằng những hành động này của cô nàng streamer đôi khi còn chạm tới ranh giới của sự phản cảm.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-8-16277071686801105238482.jpg',
"alt": 'nhân vật chính,đáng chú ý,chảy máu mũi,streamer,nữ streamer,game,fan,cao thủ,',
"category": 'images',
"date": '31/07/2021',
"time": '01:16 PM',
"link": '/quan-moi-khan-tam-len-song-nu-streamer-gay-soc-voi-chuoi-dong-tac-goi-cam-khien-nguoi-xem-khong-cam-duoc-mau-mui',
"zcomponent": 'page_20210731131649',
"filepath": './20210731131649-quan-moi-khan-tam-len-song-nu-streamer-gay-soc-voi-chuoi-dong-tac-goi-cam-khien-nguoi-xem-khong-cam-duoc-mau-mui.js'
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
  'Quấn mỗi khăn tắm lên sóng, nữ streamer gây sốc với chuỗi động tác gợi cảm khiến người xem không cầm được "máu mũi"';
const author = "MẶT TRỨNG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "31/07/2021 01:16 PM";
const description =
  "Nhiều người cho rằng những hành động này của cô nàng streamer đôi khi còn chạm tới ranh giới của sự phản cảm.";
const link =
  "quan-moi-khan-tam-len-song-nu-streamer-gay-soc-voi-chuoi-dong-tac-goi-cam-khien-nguoi-xem-khong-cam-duoc-mau-mui";
const tagparam = [
  "nhân vật chính",
  "đáng chú ý",
  "chảy máu mũi",
  "streamer",
  "nữ streamer",
  "game",
  "fan",
  "cao thủ",
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

export default function page_20210731131649() {
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
                      Với sự phát triển của công nghệ, theo thời gian, ngành{" "}
                      <strong>streamer</strong> cũng dần thay đổi. Thậm chí,
                      theo góc nhìn của nhiều người, nó đã "biến chất" rất
                      nhiều, không còn đơn thuần là sân chơi, nơi giải trí giao
                      lưu giữa các <strong>game</strong> thủ như trước.
                    </p>
                    <p>
                      Sự xuất hiện của vô số cô nàng hot girl xinh đẹp nhưng
                      không biết chơi <strong>game</strong> mà lại thiên hướng
                      tận dụng tối đa sự gợi cảm, nóng bỏng của bản thân để nổi
                      tiếng đã góp phần làm công việc <strong>streamer</strong>{" "}
                      trở nên phổ biến hơn rất nhiều ở thời điểm hiện tại. Nhưng
                      đi kèm với đó cũng là không ít những tín hiệu tiêu cực,
                      điển hình như câu chuyện dưới đây.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-1-1627357873793227201263-1627707212198318625019.jpg"
                      alt="1, nhân vật chính,đáng chú ý,chảy máu mũi,streamer,nữ streamer,game,fan,cao thủ,"
                      note="Mi Danzhi - nữ streamer xinh đẹp và cũng là nhân vật chính trong câu chuyện"
                    />
                    <p>
                      Thường xuyên lên sóng vào lúc đêm muộn, Mi Danzhi được
                      biết tới như một trong những nữ <strong>streamer</strong>{" "}
                      cực kỳ xinh đẹp và sở hữu lượng <strong>fan</strong> đông
                      đảo theo dõi thường ngày. Vốn nổi tiếng với các điệu nhảy
                      vô cùng sexy của mình, nhưng mới đây, Mi Danzhi lại khiến
                      không ít người phải sốc hơn nữa khi thêm thắt một chút gia
                      vị vào trong nội dung vốn dĩ đã có thừa sự gợi cảm.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-1-1627707166683261797825.jpg"
                      alt="2, nhân vật chính,đáng chú ý,chảy máu mũi,streamer,nữ streamer,game,fan,cao thủ,"
                      note="Nữ streamer sở hữu gương mặt xinh xắn, dễ thương không tì vết"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-1-16277071675811808957647.jpg"
                      alt="3, nhân vật chính,đáng chú ý,chảy máu mũi,streamer,nữ streamer,game,fan,cao thủ,"
                      note="Cộng thêm nụ cười ngọt ngào rất quyến rũ"
                    />
                    <p>
                      Theo đó, nhìn những hình ảnh bên trên, có thể nhiều người
                      vẫn chưa thật sự phát hiện ra chi tiết lạ lùng cho lắm.
                      Nhưng rồi sau đó, khi nữ <strong>streamer</strong> này
                      đứng lên, lùi ra xa khỏi camera để có cái nhìn toàn cảnh,
                      số đông người xem mới cảm thấy bất ngờ.
                    </p>
                    <p>
                      Cụ thể, dường như phần trên của Danzhi chỉ được che đậy
                      bằng duy nhất một tấm khăn có phần "hờ hững". Sau đó, cô
                      nàng còn thản nhiên kéo lùi camera và mang tới những góc
                      nhìn có phần khá phản cảm.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-2-1627707169164152075402.jpg"
                      alt="4, nhân vật chính,đáng chú ý,chảy máu mũi,streamer,nữ streamer,game,fan,cao thủ,"
                      note="Màn quấn khăn lên sóng gây choáng váng của Danzhi"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-3-16277071685971811064397.jpg"
                      alt="5, nhân vật chính,đáng chú ý,chảy máu mũi,streamer,nữ streamer,game,fan,cao thủ,"
                      note="Cô nàng vẫn thản nhiên thực hiện các màn vũ đạo nhạy cảm"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-4-16277071680811876897204.jpg"
                      alt="6, nhân vật chính,đáng chú ý,chảy máu mũi,streamer,nữ streamer,game,fan,cao thủ,"
                      note="Ngay cả khi về chỗ ngồi cũng tạo dáng cực kỳ sexy, khêu gợi"
                    />
                    <p>
                      <strong>Đáng chú ý</strong> hơn, nếu như lục lại quá khứ,
                      các phiên livestream của Danzhi cũng đều diễn ra theo kịch
                      bản tương tự với điểm chung là sự nóng bỏng luôn thường
                      trực và được nữ <strong>streamer</strong> cố tình tạo ra
                      giữa đêm khuya thông qua nhiều biện pháp khác nhau.
                    </p>
                    <p>
                      Thậm chí, không ít lần cô nàng còn tự luồn tay vào trong
                      áo, massage vòng một của bản thân - biện pháp mà Danzhi
                      cho rằng sẽ giúp đôi gò bồng đảo của cô phát triển tốt nếu
                      như thực hiện mỗi ngày.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-5-16277071696921813364661.jpg"
                      alt="7, nhân vật chính,đáng chú ý,chảy máu mũi,streamer,nữ streamer,game,fan,cao thủ,"
                      note="Cô nàng streamer còn từng có lúc gây sốc hơn"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-6-1627707167618357637289.jpg"
                      alt="8, nhân vật chính,đáng chú ý,chảy máu mũi,streamer,nữ streamer,game,fan,cao thủ,"
                      note="Khi thực hiện một chuỗi những hành động gợi cảm"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-7-1627707168116710622665.jpg"
                      alt="9, nhân vật chính,đáng chú ý,chảy máu mũi,streamer,nữ streamer,game,fan,cao thủ,"
                      note="Khiến cho không ít fan đỏ mặt, chảy máu mũi"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-8-16277071686801105238482.jpg"
                      alt="10, nhân vật chính,đáng chú ý,chảy máu mũi,streamer,nữ streamer,game,fan,cao thủ,"
                      note="Nhưng đồng thời cũng mang tới những cái nhìn rất phản cảm"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/31/photo-8-16277071686801105238482.jpg"
                      alt="11, nhân vật chính,đáng chú ý,chảy máu mũi,streamer,nữ streamer,game,fan,cao thủ,"
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
