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
"timestamp": '29/07/2021 04:13 PM',
"title": 'Ăn vận hớ hênh, lộ cả chi tiết "nhạy cảm" lúc ngồi xuống, nữ streamer phản pháo: "Sai hết, tôi tẩy lông mỗi ngày'',
"description": 'Cô nàng streamer sau đó cũng đã lên tiếng phân trần và xin lỗi về sự việc lần này.',
"src": '',
"alt": 'GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,HOT GIRL,NỮ STREAMER,PADAK,',
"category": 'images',
"date": '29/07/2021',
"time": '04:13 PM',
"link": '/an-van-ho-henh-lo-ca-chi-tiet-nhay-cam-luc-ngoi-xuong-nu-streamer-phan-phao-sai-het-toi-tay-long-moi-ngay',
"zcomponent": 'page_20210729161311',
"filepath": './20210729161311-an-van-ho-henh-lo-ca-chi-tiet-nhay-cam-luc-ngoi-xuong-nu-streamer-phan-phao-sai-het-toi-tay-long-moi-ngay.js'
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
  'Ăn vận hớ hênh, lộ cả chi tiết "nhạy cảm" lúc ngồi xuống, nữ streamer phản pháo: "Sai hết, tôi tẩy lông mỗi ngày"';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:13 PM";
const description =
  "Cô nàng streamer sau đó cũng đã lên tiếng phân trần và xin lỗi về sự việc lần này.";
const link =
  "an-van-ho-henh-lo-ca-chi-tiet-nhay-cam-luc-ngoi-xuong-nu-streamer-phan-phao-sai-het-toi-tay-long-moi-ngay";
const tagparam = [
  "GÁI XINH",
  "CỘNG ĐỒNG MẠNG",
  "STREAMER",
  "HOT GIRL",
  "NỮ STREAMER",
  "PADAK",
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

export default function page_20210729161311() {
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
                      Trào lưu mời "bạn tới chơi nhà" trong làng{" "}
                      <strong>streamer</strong> đang trở nên thịnh hành hơn bao
                      giờ hết. Hiểu theo một cách đơn giản, đó là những chương
                      trình phát sóng có các khách mời - thường thì cũng là các
                      streamer nổi tiếng khác tới tham dự. Đây được coi là một
                      trong những phương thức để tạo nội dung, gia tăng sự thú
                      vị cho người xem khi những streamer này sẽ có dịp kết hợp,
                      cùng tung hứng hoặc ngồi tâm sự với nhau trên sóng. Tuy
                      nhiên, chẳng ai ngờ được rằng, đôi khi chính những vị
                      khách mời này lại tiềm ẩn nguy cơ bùng nổ, khiến cho chủ
                      kênh phải nhận những án phạt đầy cay đắng. Bạn không tin
                      ư, thế hãy cùng tới với trường hợp của cô nàng{" "}
                      <strong>Padak</strong> dưới đây.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-1625455395199233021683.gif"
                      alt="1, GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,HOT GIRL,NỮ STREAMER,PADAK,"
                      note="Padak - cô nàng streamer gợi cảm trong câu chuyện"
                    />
                    <p>
                      Theo đó, vốn được biết tới như một trong những tân binh
                      siêu gợi cảm và cũng không kém phần chiêu trò thời gian
                      gần đây, <strong>Padak</strong> bất ngờ xuất hiện trên
                      sóng của một người đồng nghiệp khác, cũng là đàn anh của
                      cô trong nghề, Bong-jun. Tuy nhiên, chẳng hiểu do quá phấn
                      khích hay vẫn giữ phong cách sexy như mọi khi mà cô nàng
                      Padak bất ngờ xuất hiện với một bộ trang phục vô cùng gợi
                      cảm, thậm chí là có phần táo bạo quá đà khi trở thành
                      khách mời của chương trình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-16254557897111368652883.gif"
                      alt="2, GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,HOT GIRL,NỮ STREAMER,PADAK,"
                      note="Padak với bộ trang phục khoét trên hở dưới của mình trong phiên livestream"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-1625455811486362824303.gif"
                      alt="3, GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,HOT GIRL,NỮ STREAMER,PADAK,"
                      note="Thậm chí cô nàng còn không ngần ngại khoe những đường cong của cơ thể"
                    />
                    <p>
                      Thực chất, câu chuyện tương tác giữa các{" "}
                      <strong>streamer</strong> chẳng có gì quá đặc biệt. Thế
                      nhưng, chi tiết gây sốc sau đó cũng như khiến cho mọi thứ
                      trở nên phức tạp chính là ở khoảnh khắc mà{" "}
                      <strong>Padak</strong> ngồi xuống. Cụ thể, theo như nhiều
                      người xem cho biết, họ cảm giác như cô nàng không hề mặc
                      quần lót vậy, và còn thấy cả một vài sợi đầy nhạy cảm.
                      Điều này càng có cơ sở hơn nữa khi nên nhớ rằng rất nhiều
                      lần, Padak còn thường xuyên tiết lộ với người xem về việc
                      mình là người không hề thích mặc nội y nhất là khi lên
                      sóng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/5/photo-1-16254560030132105318388.jpg"
                      alt="4, GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,HOT GIRL,NỮ STREAMER,PADAK,"
                      note="Khoảnh khắc mà cô nàng bất ngờ hớ hênh những chi tiết nhạy cảm vì bộ váy áo gây sốc của mình"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Rất nhanh, một bản án đã được đưa ra. Tuy rằng người "gây
                      tội" là <strong>Padak</strong>, nhưng lúc đấy cô nàng lại
                      đang ở trên kênh livestream của Bong-jun, thế nên án phạt
                      cấm kênh đã ngay lập tức được dành tặng cho anh chàng xấu
                      số này. Sau đó, lời giải thích cũng đã được đưa ra, nhưng
                      là theo cách khá vụng về: "Chắc chắn không có chuyện ấy,
                      tôi đã tẩy lông từ lâu rồi, nó chỉ là phần nối giữa quần
                      tất và trông có vẻ hơi đen tối như mọi người nghĩ mà thôi.
                      Thực tế, tôi mặc quần lót màu da".
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-16254568597361830368144.gif"
                      alt="5, GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,HOT GIRL,NỮ STREAMER,PADAK,"
                      note="Padak vốn được biết tới về việc thường xuyên thả rông trên sóng"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/5/photo-1-16254569214363877739.gif"
                      alt="6, GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,HOT GIRL,NỮ STREAMER,PADAK,"
                      note="Lời thanh minh của cô nàng có lẽ là chưa đủ để khiến nhiều người tin tưởng"
                    />
                    <p>
                      <strong>Padak</strong> sau đó cũng đã gửi lời xin lỗi tới
                      Bong-jun, người mà cô cho rằng tỏ ra khá lo lắng cho Padak
                      sau khi vụ việc xảy ra.
                    </p>
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
