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
"timestamp": '03/08/2021 11:10 AM',
"title": 'Lộ "bàn tay lạ" ngay trên sóng khi diện trang phục hở hang, nữ YouTuber nóng bỏng khiến fan đặt nghi vấn',
"description": 'Cô nàng YouTuber đang khiến rất nhiều người băn khoăn và đặt ra các câu hỏi.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-16275492913581437760126.jpg',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YOUTUBER,QINGER,NỮ YOUTUBER,',
"category": 'images',
"date": '03/08/2021',
"time": '11:10 AM',
"link": '/lo-ban-tay-la-ngay-tren-song-khi-dien-trang-phuc-ho-hang-nu-youtuber-nong-bong-khien-fan-dat-nghi-van',
"zcomponent": 'page_20210803111016',
"filepath": './20210803111016-lo-ban-tay-la-ngay-tren-song-khi-dien-trang-phuc-ho-hang-nu-youtuber-nong-bong-khien-fan-dat-nghi-van.js'
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
  'Lộ "bàn tay lạ" ngay trên sóng khi diện trang phục hở hang, nữ YouTuber nóng bỏng khiến fan đặt nghi vấn';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "03/08/2021 11:10 AM";
const description =
  "Cô nàng YouTuber đang khiến rất nhiều người băn khoăn và đặt ra các câu hỏi.";
const link =
  "lo-ban-tay-la-ngay-tren-song-khi-dien-trang-phuc-ho-hang-nu-youtuber-nong-bong-khien-fan-dat-nghi-van";
const tagparam = [
  "GÁI XINH",
  "HOT GIRL",
  "CỘNG ĐỒNG MẠNG",
  "YOUTUBER",
  "QINGER",
  "NỮ YOUTUBER",
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

export default function page_20210803111016() {
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
                      Nhân vật chính trong câu chuyện lần này là{" "}
                      <strong>Qinger</strong> - một trong những nàng{" "}
                      <strong>hot girl</strong>, <strong>YouTuber</strong> cũng
                      rất nổi tiếng, "có số má" ở thời điểm hiện tại. Sở hữu
                      gương mặt cực kỳ baby, dễ thương như học sinh thế nhưng
                      nàng hot girl lại khiến bao người phải gây thương nhớ bởi
                      thân hình siêu gợi cảm của mình. Đã thế, bản thân Qinger
                      lúc nào cũng nhận thức rõ được thế mạnh của mình khi
                      thường xuyên khiến không ít fan hâm mộ phải chảy máu mũi
                      với những hình ảnh gợi cảm.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-16275477059231538302173.jpg"
                      alt="1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YOUTUBER,QINGER,NỮ YOUTUBER,"
                      note="Qinger sở hữu gương mặt rất thánh thiện"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-16275477810471109995886.jpg"
                      alt="2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YOUTUBER,QINGER,NỮ YOUTUBER,"
                      note="Nhưng thân hình thì lại cực kỳ gợi cảm"
                    />
                    <p>
                      Tuy nhiên, bản thân <strong>Qinger</strong> cũng luôn là
                      một cái tên tạo ra vô số sự tranh cãi bởi chính phong cách
                      gợi cảm, có phần hơi khiêu khích quá mức của mình. Cụ thể,
                      cô nàng từng khiến không ít người phải chỉ trích với màn
                      quấn khăn tắm lên sóng, sau đó than thở về sự cô đơn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-16275485600601546109347.png"
                      alt="3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YOUTUBER,QINGER,NỮ YOUTUBER,"
                      note="Qinger từng than thở muốn được ôm ai đó sau khi tắm"
                    />
                    <p>
                      Những tưởng rằng mọi thứ cũng chỉ dừng lại ở đó thôi,
                      nhưng gần đây, cô nàng lại tiếp tục tạo ra không ít những
                      sóng gió. Cụ thể, trong lần livestream gần đây, giữa lúc
                      đang nằm trên giường và chỉ quấn duy nhất một chiếc khăn
                      tắm gợi cảm, nàng <strong>hot girl</strong> lại bất ngờ
                      khiến các fan tinh mắt phải đặt dấu hỏi khi soi thấy một
                      "cánh tay lạ" xuất hiện trên sóng. Hình ảnh này nhanh
                      chóng được chia sẻ, thậm chí không ít người còn cho rằng
                      đây là bạn trai của <strong>Qinger</strong> hoặc một người
                      rất thân mật. Tất nhiên, mọi thứ chỉ là suy đoán khi rõ
                      ràng, nếu chỉ nhìn cánh tay thì chẳng biết được giới tính
                      của người lạ mặt kia.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-1627548895760607930953.png"
                      alt="4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YOUTUBER,QINGER,NỮ YOUTUBER,"
                      note="Hình ảnh đang được lan truyền về lùm xùm mới nhất của cô nàng"
                    />
                    <p>
                      Nhưng vẫn chưa hết, <strong>Qinger</strong> đúng là người
                      thường xuyên tạo ra những scandal thì phải. Cách đây không
                      lâu, cô nàng lại khiến fan hâm mộ phải hoảng hồn khi đăng
                      tải bức ảnh bản thân xuất hiện vô số vết hằn đỏ ở vòng
                      một, cổ - những vị trí khiến nhiều người dễ liên tưởng tới
                      những vấn đề nhạy cảm.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-16275490819501776547597.jpg"
                      alt="5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YOUTUBER,QINGER,NỮ YOUTUBER,"
                      note="Những vết hằn đỏ nổi bật trên cổ và ngực của Qinger khiến không ít người đặt dấu hỏi"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-16275491008132029422146.jpg"
                      alt="6, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YOUTUBER,QINGER,NỮ YOUTUBER,"
                      note="Thậm chí là cảm thấy lo lắng cho cô nàng"
                    />
                    <p>
                      Rất nhiều suy đoán cũng đã được đưa ra, thậm chí không ít
                      người còn thấy lo lắng thay cho nữ{" "}
                      <strong>YouTuber</strong> này. Nhưng sau cùng, mọi thứ
                      cũng được giải thích theo cách rất đơn giản. Không cần úp
                      mở hay dài dòng gì, <strong>Qinger</strong> tự đăng tải
                      thêm một bức ảnh nữa để làm sáng tỏ mọi thứ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-1627549180769646218341.jpg"
                      alt="7, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YOUTUBER,QINGER,NỮ YOUTUBER,"
                      note="Cách mà cô nàng giải thích đây"
                    />
                    <p>
                      Hóa ra, đó chỉ là bối cảnh của một bộ ảnh mà{" "}
                      <strong>Qinger</strong> thực hiện. Thời gian gần đây, bên
                      cạnh những hình ảnh nóng bỏng được chia sẻ miễn phí trên
                      trang cá nhân, nàng <strong>hot girl</strong> cũng dần dần
                      đã biết cách kinh doanh những hình ảnh gợi cảm đặc biệt
                      của riêng mình. Và đôi khi, nó cũng đòi hỏi sự hy sinh như
                      trong concept phía trên.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-16275492593211619264346.jpg"
                      alt="8, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YOUTUBER,QINGER,NỮ YOUTUBER,"
                      note="Bên cạnh công việc bình thường"
                    />
                    <p>
                      Nàng <strong>hot girl</strong> giờ đây cũng rất chăm chỉ
                      cập nhật, bán ảnh "đặc biệt" của bản thân
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-16275492913581437760126.jpg"
                      alt="9, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YOUTUBER,QINGER,NỮ YOUTUBER,"
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
