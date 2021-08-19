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
"timestamp": '19/08/2021 01:03 PM',
"title": 'Thả rông, cởi bung cả cúc áo khi lên sóng, nữ streamer xinh đẹp bất ngờ làm hành động đầy nhạy cảm, khó tin',
"description": 'Có lẽ cô nàng streamer cũng tự ý thức được màn phơi bày của mình sẽ mang tới hiệu ứng như thế nào.',
"src": '',
"alt": 'GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BOONG-SOON,HOT GIRL,',
"category": 'images',
"date": '19/08/2021',
"time": '01:03 PM',
"link": '/tha-rong-coi-bung-ca-cuc-ao-khi-len-song-nu-streamer-xinh-dep-bat-ngo-lam-hanh-dong-day-nhay-cam-kho-tin',
"zcomponent": 'page_20210819130329',
"filepath": './20210819130329-tha-rong-coi-bung-ca-cuc-ao-khi-len-song-nu-streamer-xinh-dep-bat-ngo-lam-hanh-dong-day-nhay-cam-kho-tin.js'
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
  "Thả rông, cởi bung cả cúc áo khi lên sóng, nữ streamer xinh đẹp bất ngờ làm hành động đầy nhạy cảm, khó tin";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "19/08/2021 01:03 PM";
const description =
  "Có lẽ cô nàng streamer cũng tự ý thức được màn phơi bày của mình sẽ mang tới hiệu ứng như thế nào.";
const link =
  "tha-rong-coi-bung-ca-cuc-ao-khi-len-song-nu-streamer-xinh-dep-bat-ngo-lam-hanh-dong-day-nhay-cam-kho-tin";
const tagparam = [
  "GÁI XINH",
  "CỘNG ĐỒNG MẠNG",
  "STREAMER",
  "NỮ STREAMER",
  "BOONG-SOON",
  "HOT GIRL",
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

export default function page_20210819130329() {
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
                      Ở thời điểm hiện tại, với nội dung phong phú tới từ các
                      nền tảng livestream, việc lên sóng chơi game dường như đã
                      trở thành thứ yếu chứ không còn là tuyến đề tài chính được
                      các <strong>streamer</strong> khai thác như trước. Thậm
                      chí, sẽ chẳng quá nếu nói rằng giờ đây, chính những màn vũ
                      đạo, các pha khoe thân gợi cảm mới là thứ dễ thu hút người
                      xem, tạo được sự chú ý cũng như hiệu ứng viral mạnh mẽ cho
                      các srteamer, đặc biệt là với những cô nàng{" "}
                      <strong>hot girl</strong> xinh đẹp, nóng bỏng. Điển hình
                      như trường hợp của cô nàng Bong-soon dưới đây, một nữ tân
                      binh vừa thành danh với màn khoe thân không thể tinh tế
                      hơn của mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/14/photo-1-1628920229940455512156.gif"
                      alt="1, GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BOONG-SOON,HOT GIRL,"
                      note="Bong-soon - cô nàng streamer dễ thương trong câu chuyện"
                    />
                    <p>
                      Mặc dù không phải là cái tên vô danh khi cũng sở hữu kênh
                      livestream và trang cá nhân có tới hàng chục nghìn lượt
                      follow, thế nhưng Bong Soon vẫn còn xa lắm mới đạt tới
                      đẳng cấp của những cái tên hàng đầu. Nổi tiếng với hình
                      tượng dễ thương, trong sáng, thế nhưng chừng đó cộng thêm
                      việc chơi các tựa game hardcore như Starcraft II hay LMHT
                      mà không quá giỏi là chưa đủ để giúp tên tuổi của cô nàng{" "}
                      <strong>Boong-soon</strong> được biết tới rộng rãi. Có lẽ
                      đó cũng là lý do để cho nàng <strong>streamer</strong> vừa
                      có màn lột xác khiến không ít người phải ngỡ ngàng dưới
                      đây.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/14/photo-1-16289202701611838115861.gif"
                      alt="2, GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BOONG-SOON,HOT GIRL,"
                      note="Trang phục lên sóng siêu táo bạo mới đây của nàng streamer"
                    />
                    <p>
                      Theo đó, trong lần lên sóng mới đây, Bong-soon khiến không
                      ít người phải bất ngờ khi rũ bỏ hoàn toàn hình tượng quen
                      thuộc của mình, chuyển sang phong cách livestream táo bạo
                      hơn rất nhiều. Diện cho mình một chiếc áo sơ mi rộng thùng
                      thình, nhưng điểm nhấn lại nằm ở chỗ nàng{" "}
                      <strong>hot girl</strong> gần như thả rông vòng một, thậm
                      chí còn thoải mái tới mức cởi cả hàng cúc dài ở giữa ngực
                      áo để phô bày đôi gò bồng đảo của mình. Điều này khiến cho
                      không ít fan của <strong>Boong-soon</strong> phải cảm thấy
                      ngạc nhiên trước màn biến hóa bất ngờ ấy.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/photo-1-16289204801061448695212.gif"
                      alt="3, GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BOONG-SOON,HOT GIRL,"
                      note="Màn vũ đạo gây sốc sau đó của Boong-soon"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/14/photo-1-16289205528501374844450.gif"
                      alt="4, GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BOONG-SOON,HOT GIRL,"
                      note="Thậm chí còn liên tục thực hiện những động tác mang tính khiêu khích người xem"
                    />
                    <p>
                      Đáng nói hơn là sau đó, cô nàng còn rất hồn nhiên thể hiện
                      những màn vũ đạo nóng bỏng ngay trên sóng. Mà nếu chỉ nhảy
                      không thôi thì dường như vẫn chưa đủ, nữ{" "}
                      <strong>streamer</strong> sau đó còn có những động thái
                      khá khiêu khích như tụt quần, vén áo khiến cho nhiều người
                      xem bắt đầu dần thấy phản cảm. Càng đáng kể hơn là kể từ
                      sau phiên lên sóng ấy, <strong>Boong-soon</strong> gần như
                      lột xác hoàn toàn với những nội dung tương tự và thật khó
                      để tìm lại cô nàng streamer dễ thương ngày nào nữa.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/14/photo-1-16289207898881977329801.gif"
                      alt="5, GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BOONG-SOON,HOT GIRL,"
                      note="Màn khỏa thân, đắp chăn xem phim ma trên sóng của Boong-soon cũng gây ra vô số tranh cãi"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/14/photo-1-16289208428461496433221.gif"
                      alt="6, GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BOONG-SOON,HOT GIRL,"
                      note="Hay bộ trang phục tập yoga này cũng vậy"
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
