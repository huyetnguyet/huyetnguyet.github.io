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
"timestamp": '29/07/2021 04:08 PM',
"title": 'Tuyên bố "Thả rông không lo bị phạt", nữ streamer gợi cảm gây sốc khi thêm hẳn một camera chỉ để quay vòng một của mình',
"description": 'Cô nàng streamer này có màn lách luật không thể ấn tượng hơn đối với người xem.',
"src": '',
"alt": 'HOT GIRL,STREAMER,GÁI XINH,KIM YUDI,NỮ STREAMER,CỘNG ĐỒNG MẠNG,',
"category": 'images',
"date": '29/07/2021',
"time": '04:08 PM',
"link": '/tuyen-bo-tha-rong-khong-lo-bi-phat-nu-streamer-goi-cam-gay-soc-khi-them-han-mot-camera-chi-de-quay-vong-mot-cua-minh',
"zcomponent": 'page_20210729160855',
"filepath": './20210729160855-tuyen-bo-tha-rong-khong-lo-bi-phat-nu-streamer-goi-cam-gay-soc-khi-them-han-mot-camera-chi-de-quay-vong-mot-cua-minh.js'
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
  'Tuyên bố "Thả rông không lo bị phạt", nữ streamer gợi cảm gây sốc khi thêm hẳn một camera chỉ để quay vòng một của mình';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:08 PM";
const description =
  "Cô nàng streamer này có màn lách luật không thể ấn tượng hơn đối với người xem.";
const link =
  "tuyen-bo-tha-rong-khong-lo-bi-phat-nu-streamer-goi-cam-gay-soc-khi-them-han-mot-camera-chi-de-quay-vong-mot-cua-minh";
const tagparam = [
  "HOT GIRL",
  "STREAMER",
  "GÁI XINH",
  "KIM YUDI",
  "NỮ STREAMER",
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

export default function page_20210729160855() {
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
                      Trước làn sóng ngày càng tỏ ra táo bạo và đầy rẫy những
                      phân cảnh gợi cảm từ phía những nữ{" "}
                      <strong>streamer</strong> đang diễn ra như cơm bữa ở thời
                      điểm hiện tại, việc AfreecaTV - nền tảng phát sóng hàng
                      đầu tại Hàn Quốc tìm cách để siết chặt các quy định cũng
                      là điều dễ hiểu. Thế nhưng, dường như việc cấm các cô nàng
                      streamer, <strong>hot girl</strong> không được phép để lộ
                      nội y trên sóng lại có vẻ là nước đi sai lầm của nền tảng
                      này thì phải, khi mà để lách luật, đa số thường chọn cho
                      mình một phương án vô cùng táo bạo, đó chính là thả rông
                      hoàn toàn vòng một của mình trên sóng. Điển hình như
                      trường hợp của cô nàng Yudi Kim dưới đây.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/29/photo-1-1624938785764399100860.png"
                      alt="1, HOT GIRL,STREAMER,GÁI XINH,KIM YUDI,NỮ STREAMER,CỘNG ĐỒNG MẠNG,"
                      note="Yudi Kim - cô nàng streamer đang rất nổi tiếng thời gian gần đây"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/29/photo-1-16249388082171263075773.jpg"
                      alt="2, HOT GIRL,STREAMER,GÁI XINH,KIM YUDI,NỮ STREAMER,CỘNG ĐỒNG MẠNG,"
                      note="Đặc biệt là sau màn khoe thân cực kỳ táo bạo trên trang cá nhân và cả sóng livestream vừa qua"
                    />
                    <p>
                      Để nói về Yudi Kim, có lẽ chỉ hai từ gợi cảm là quá đủ. Về
                      mặt hình thức, cô nàng <strong>streamer</strong> này luôn
                      là một trong những cái tên top đầu gắn liền với phong cách
                      gợi cảm, nóng bỏng ngay từ khi mới ra mắt. Về mặt nội
                      dung, đa số các clip của Yudi Kim đều lấy tôn chỉ là cố
                      gắng khoe được tối đa sự gợi cảm cũng như số đo ba vòng
                      của cơ thể thông qua những bộ trang phục nóng bỏng, hở
                      hang và không kém phần táo bạo. Thế nên, không khó hiểu
                      khi mà cô nàng cũng thuộc những đối tượng bị AfreecaTV để
                      ý, và lệnh cấm không nội y đặc biệt được nhắm tới{" "}
                      <strong>Kim Yudi</strong> và một số người khác.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/29/photo-1-162493897810867851222.jpg"
                      alt="3, HOT GIRL,STREAMER,GÁI XINH,KIM YUDI,NỮ STREAMER,CỘNG ĐỒNG MẠNG,"
                      note="Cô nàng streamer thường xuyên lên sóng với các trang phục nóng bỏng"
                    />
                    <p>
                      Tuy nhiên, có vẻ như điều này lại vô hình chung tạo điều
                      kiện cho <strong>Kim Yudi</strong> có phần "cởi mở" hơn
                      thì phải. Cụ thể, trong những lần lên sóng gần đây, cô
                      nàng <strong>hot girl</strong> chẳng ngại ngần mà liên tục
                      phô diễn, khoe vòng một đầy nóng bỏng của mình và không
                      quên nhấn mạnh cho người xem biết rằng bản thân đang thả
                      rông 100%. "Bạn sẽ không để lộ nội y nếu như không mặc" -
                      màn lách luật công khai của cô nàng này khiến cho không ít
                      người phải bất ngờ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/29/photo-1-1624939170227390751497.png"
                      alt="4, HOT GIRL,STREAMER,GÁI XINH,KIM YUDI,NỮ STREAMER,CỘNG ĐỒNG MẠNG,"
                      note="Luật mới của AfreecaTV chẳng những không làm cải thiện tình hình"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/29/photo-1-16249391973491660927059.gif"
                      alt="5, HOT GIRL,STREAMER,GÁI XINH,KIM YUDI,NỮ STREAMER,CỘNG ĐỒNG MẠNG,"
                      note="Mà kể từ sau đó, Yudi Kim còn mặc định sẽ thả rông khi lên sóng"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/29/screenshot7-16249375334651953111141.png"
                      alt="6, HOT GIRL,STREAMER,GÁI XINH,KIM YUDI,NỮ STREAMER,CỘNG ĐỒNG MẠNG,"
                      note="Tới mức mà cô nàng còn đặt riêng hẳn một camera chỉ để quay vòng một của mình"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/29/photo-1-16249392919541029673154.jpg"
                      alt="7, HOT GIRL,STREAMER,GÁI XINH,KIM YUDI,NỮ STREAMER,CỘNG ĐỒNG MẠNG,"
                      note="Hiện tại, câu chuyện của Kim Yudi đang gây ra những phản ứng trái chiều trên mạng xã hội"
                    />
                    <p>
                      Tất nhiên, tranh cãi luôn là điều không thể tránh khỏi
                      trong trường hợp này. Tuy nhiên, có lẽ{" "}
                      <strong>Kim Yudi</strong> cũng chẳng mảy may quan tâm tới
                      vấn đề ấy, bởi đơn giản, ít nhất thì tới thời điểm này, cô
                      nàng vẫn đang trắng án 100% vì rõ ràng, không hề để lộ nội
                      y như quy định từ phía nền tảng.
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
