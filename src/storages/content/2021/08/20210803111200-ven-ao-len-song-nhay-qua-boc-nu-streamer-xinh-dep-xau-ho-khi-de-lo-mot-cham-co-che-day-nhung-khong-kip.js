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
"timestamp": '03/08/2021 11:12 AM',
"title": 'Vén áo lên sóng nhảy quá bốc, nữ streamer xinh đẹp xấu hổ khi để lộ "một chấm", cố che đậy nhưng không kịp',
"description": 'Trang phục thì lỏng lẻo trong khi lại vận động mạnh, cô nàng streamer này không hớ hênh mới lạ.',
"src": '',
"alt": 'STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,CHAE-AH,HOT GIRL,GÁI XINH,',
"category": 'images',
"date": '03/08/2021',
"time": '11:12 AM',
"link": '/ven-ao-len-song-nhay-qua-boc-nu-streamer-xinh-dep-xau-ho-khi-de-lo-mot-cham-co-che-day-nhung-khong-kip',
"zcomponent": 'page_20210803111200',
"filepath": './20210803111200-ven-ao-len-song-nhay-qua-boc-nu-streamer-xinh-dep-xau-ho-khi-de-lo-mot-cham-co-che-day-nhung-khong-kip.js'
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
  'Vén áo lên sóng nhảy quá bốc, nữ streamer xinh đẹp xấu hổ khi để lộ "một chấm", cố che đậy nhưng không kịp';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "03/08/2021 11:12 AM";
const description =
  "Trang phục thì lỏng lẻo trong khi lại vận động mạnh, cô nàng streamer này không hớ hênh mới lạ.";
const link =
  "ven-ao-len-song-nhay-qua-boc-nu-streamer-xinh-dep-xau-ho-khi-de-lo-mot-cham-co-che-day-nhung-khong-kip";
const tagparam = [
  "STREAMER",
  "NỮ STREAMER",
  "CỘNG ĐỒNG MẠNG",
  "CHAE-AH",
  "HOT GIRL",
  "GÁI XINH",
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

export default function page_20210803111200() {
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
                      Không thể phủ nhận rằng ở thời điểm hiện tại, thứ mà{" "}
                      <strong>cộng đồng mạng</strong> cũng như người xem quan
                      tâm, dành nhiều sự chú ý nhất đôi khi không nằm ở nội dung
                      mà lại chính là drama của các <strong>streamer</strong>.
                      Thế nên, không lạ khi giờ đây, thay vì cố tìm ra những ý
                      tưởng sáng tạo, mới lạ, không ít những streamer, đặc biệt
                      là các cô nàng <strong>hot girl</strong> xinh đẹp lại đang
                      chạy đua để tạo ra những chiêu trò khó đỡ trên sóng. Nổi
                      trội nhất trong đó có lẽ chính là những màn khoe thân gợi
                      cảm, thậm chí chấp nhận cả án phạt trong trường hợp vô
                      tình hớ hênh để tìm kiếm sự nổi tiếng cho bản thân. Điển
                      hình như trường hợp của Yoon <strong>Chae-Ah</strong>, một{" "}
                      <strong>nữ streamer</strong> không kém phần xinh đẹp dưới
                      đây.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/2173634584506680542688313337497221569849587n-1627609918628650781433.jpg"
                      alt="1, STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,CHAE-AH,HOT GIRL,GÁI XINH,"
                      note="Yoon Chae-Ah, nhân vật chính trong câu chuyện"
                    />
                    <p>
                      Sở hữu một thân hình siêu hoàn hảo với điểm nhấn là đôi gò
                      bồng đảo căng tràn sức sống, thế nhưng Yoon{" "}
                      <strong>Chae-Ah</strong> lại không phải là một cái tên quá
                      nổi bật trên nền tảng mà mình phát sóng. Lượng người xem
                      nhỏ giọt, số follow cũng khá nghèo nàn, do đó không lạ khi
                      cô nàng <strong>hot girl</strong> buộc phải tìm tới những
                      chiêu trò để thu hút sự chú ý cho bản thân. Từ việc luôn
                      diện các bộ đồ khoét ngực, cố ý khoe vòng một cho tới thực
                      hiện những động tác vũ đạo, tất cả đều được Chae-Ah thực
                      hiện.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-1627610047896815032592.jpeg"
                      alt="2, STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,CHAE-AH,HOT GIRL,GÁI XINH,"
                      note="Những bộ trang phục siêu gợi cảm mà cô nàng streamer này hay mặc trên sóng"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-1627610192259660027284.jpeg"
                      alt="3, STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,CHAE-AH,HOT GIRL,GÁI XINH,"
                      note="Thường xuyên khoe đôi gò bồng đảo đầy đặn của mình"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Thế nhưng, đi đêm lắm thì cũng có ngày gặp ma. Việc liên
                      tục làm các động tác khoe thân, hở da thịt thực tế cũng đã
                      mang lại không ít những tác động tích cực tới chỉ số trên
                      kênh của <strong>Chae-Ah</strong> nhưng đồng thời, nó cũng
                      có không ít rắc rối. Điển hình như gần đây, nàng{" "}
                      <strong>streamer</strong> đã bất ngờ gặp họa cũng chỉ vì
                      thực hiện combo: ăn vận gợi cảm + vũ điệu nóng bỏng cùng
                      lúc. Theo đó, trong lúc đang hào hứng vén áo khoe vòng một
                      và nhảy rất sung, Chae-Ah đã vô tình để lộ ra phần nhạy
                      cảm của vòng một. Dù là rất nhỏ thôi, nhưng cũng đã bị các
                      fan và người xem tinh mắt nhanh tay ghi lại.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/screenshot18-1627610419331190852157.png"
                      alt="4, STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,CHAE-AH,HOT GIRL,GÁI XINH,"
                      note="Màn hớ hênh khó đỡ của Chae-Ah"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/30/-162761049583397657357.jpg"
                      alt="5, STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,CHAE-AH,HOT GIRL,GÁI XINH,"
                      note="Khiến cô nàng gặp phải không ít những rắc rối"
                    />
                    <p>
                      Tất nhiên, sự việc này đã ngay lập tức đánh một đòn chí
                      mạng vào việc tăng trưởng của <strong>Chae-Ah</strong> khi
                      mà cô nàng đang có dấu hiệu phát triển tốt với hơn 45.000
                      follow trên kênh livestream. Chưa biết liệu có án phạt hay
                      cảnh cáo nào được đưa ra từ phía nền tảng không, nhưng
                      chắc chắn, sự cố của Chae-Ah sẽ khó lòng được đánh giá là
                      một tai nạn hay sự vô tình. Tai nạn sẽ chẳng diễn ra nếu
                      như cô nàng không cố tình vén áo khoe vòng một như vậy.
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
