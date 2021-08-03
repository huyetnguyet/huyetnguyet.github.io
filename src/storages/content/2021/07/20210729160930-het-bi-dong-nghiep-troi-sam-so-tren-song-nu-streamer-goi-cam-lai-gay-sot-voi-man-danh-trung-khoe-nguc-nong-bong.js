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
"timestamp": '29/07/2021 04:09 PM',
"title": 'Hết bị đồng nghiệp trói, "sàm sỡ" trên sóng, nữ streamer gợi cảm lại gây sốt với màn đánh trứng khoe ngực nóng bỏng',
"description": 'Cô nàng streamer này từ lâu đã luôn là một trong những cái tên đầy tai tiếng tại Hàn Quốc.',
"src": '',
"alt": 'cao thủ,game thủ,streamer,nữ streamer,tạp chí Maxim,dàn mỹ nhân,hot girl xinh đẹp,hình ảnh phản cảm,trang cá nhân,',
"category": 'images',
"date": '29/07/2021',
"time": '04:09 PM',
"link": '/het-bi-dong-nghiep-troi-sam-so-tren-song-nu-streamer-goi-cam-lai-gay-sot-voi-man-danh-trung-khoe-nguc-nong-bong',
"zcomponent": 'page_20210729160930',
"filepath": './20210729160930-het-bi-dong-nghiep-troi-sam-so-tren-song-nu-streamer-goi-cam-lai-gay-sot-voi-man-danh-trung-khoe-nguc-nong-bong.js'
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
  'Hết bị đồng nghiệp trói, "sàm sỡ" trên sóng, nữ streamer gợi cảm lại gây sốt với màn đánh trứng khoe ngực nóng bỏng';
const author = "MẶT TRỨNG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/07/2021 04:09 PM";
const description =
  "Cô nàng streamer này từ lâu đã luôn là một trong những cái tên đầy tai tiếng tại Hàn Quốc.";
const link =
  "het-bi-dong-nghiep-troi-sam-so-tren-song-nu-streamer-goi-cam-lai-gay-sot-voi-man-danh-trung-khoe-nguc-nong-bong";
const tagparam = [
  "cao thủ",
  "game thủ",
  "streamer",
  "nữ streamer",
  "tạp chí Maxim",
  "dàn mỹ nhân",
  "hot girl xinh đẹp",
  "hình ảnh phản cảm",
  "trang cá nhân",
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

export default function page_20210729160930() {
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
                      Không phải chơi game giỏi, cũng không cần nói chuyện
                      duyên, giờ đây, yếu tố gợi cảm mới chính là một trong
                      những nội dung được các nữ <strong>streamer</strong>{" "}
                      thường xuyên áp dụng trên sóng. Điều này kể ra cũng hợp
                      lý, khi mà nó cũng đáp ứng được đúng thị hiếu của đa số
                      người xem ở thời điểm hiện tại.
                    </p>
                    <p>
                      Thế nên, dù không muốn nhưng cũng phải thừa nhận sự thật
                      rằng giờ đây, trên sóng livestream dường như đã trở thành
                      cuộc thi giữa các cô nàng hot girl xem ai gợi cảm, chiêu
                      trò tốt hơn. Điều này càng trở nên phổ biến hơn ở Hàn
                      Quốc. Tiêu biểu trong làn sóng ấy không ai khác chính là
                      cô nàng Eddyrin - một trong những cái tên đầy tai tiếng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/3/photo-1-16253156231762009686295.jpg"
                      alt="1, cao thủ,game thủ,streamer,nữ streamer,tạp chí Maxim,dàn mỹ nhân,hot girl xinh đẹp,hình ảnh phản cảm,trang cá nhân,"
                      note="Eddyrin - cô nàng streamer gợi cảm nhưng cũng đầy rẫy chiêu trò tại Hàn Quốc"
                    />
                    <p>
                      Trên thực tế, không ai có thể phủ nhận độ xinh đẹp và gợi
                      cảm của Eddyrin khi cô nàng thậm chí còn thường xuyên được
                      mời để tham gia các bộ ảnh trên{" "}
                      <strong>tạp chí MAXIM</strong>. Tuy nhiên, điều khiến cho
                      Eddyrin mất nhiều thiện cảm nhất ở phía người xem chính là
                      cô nàng luôn chứng minh sự gợi cảm của mình mọi lúc mọi
                      nơi, ngay cả trên sóng livestream cũng vậy.
                    </p>
                    <p>
                      Thậm chí, đôi lúc Eddyrin còn chiêu trò tới mức quy tụ
                      luôn <strong>dàn mỹ nhân</strong> gồm toàn các{" "}
                      <strong>hot girl xinh đẹp</strong> để "tấu hài" cùng mình
                      và làm những động tác không thể nóng bỏng hơn.
                    </p>
                    <p>
                      Eddyrin thường xuyên quy tụ "hội bạn thân" để sáng tạo
                      chiêu trò cùng mình
                    </p>
                    <p>
                      Đôi khi là thực hiện cả những động tác mang tính phản cảm
                      như thế này trên sóng
                    </p>
                    <p>
                      Thậm chí, cách đây không lâu, Eddyrin còn từng bị khá
                      nhiều người lên án sau khi đưa dàn chị em lên sóng và chơi
                      không ít những thử thách nghe qua thì có vẻ khá đơn điệu,
                      nhưng hình phạt sau đó lại cực kỳ nóng bỏng.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Cũng trong phiên livestream ấy, phân cảnh nàng{" "}
                      <strong>streamer</strong> bị những người đồng nghiệp dùng
                      dây trói, sau đó liên tục "sàm sỡ" đã khiến cho không ít
                      người phải nhíu mày, phản cảm. Tất nhiên, điều này cũng
                      mang tới vô số phiền phức cho cô nàng streamer, mà rõ nhất
                      chính là từng có quãng thời gian, Eddyrin phải ngừng
                      livestream. Thậm chí, <strong>nữ streamer</strong> còn hé
                      lộ hình ảnh nhập viện để điều trị vì stress và thừa nhận
                      mình bị rụng tóc nghiêm trọng.
                    </p>
                    <p>
                      <strong>Hình ảnh phản cảm</strong> trong phiên livestream
                      cách đây chưa lâu
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/3/photo-1-16253156231762009686295.jpg"
                      alt="2, cao thủ,game thủ,streamer,nữ streamer,tạp chí Maxim,dàn mỹ nhân,hot girl xinh đẹp,hình ảnh phản cảm,trang cá nhân,"
                      note="Eddyrin cũng từng nhiều lần được mời chụp ảnh cho MAXIM Hàn Quốc"
                    />
                    <p>
                      Trở lại sau quãng thời gian dài, những tưởng cô nàng
                      Eddyrin đã thay đổi. Nhưng dường như sự gợi cảm, đôi khi
                      là phản cảm vẫn luôn thường trực thì phải. Điển hình là
                      mới đây thôi, trên <strong>trang cá nhân</strong>, nàng
                      hot girl lại vừa khoe khoảnh khắc đánh trứng, chế biến món
                      ăn gây tranh cãi của mình.
                    </p>
                    <p>
                      Vốn dĩ chỉ là một thao tác bình thường, nhưng qua góc nhìn
                      của Eddyrin, mọi thứ đều trở nên gợi cảm với màn "rung
                      lắc" vòng một theo nhịp chuyển động của tay khiến nhiều
                      người liên tưởng không khác gì một cơn động đất thật sự.
                    </p>
                    <p>Mới nhất lại là màn đánh trứng không thể ấn tượng hơn</p>
                    <p>
                      Tới đây thì dường như cũng chẳng còn ai quá quan tâm tới
                      Eddyrin nữa, khi có vẻ như dù có thế nào thì cô nàng cũng
                      vẫn không thay đổi đâu mà.
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
