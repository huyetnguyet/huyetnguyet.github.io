import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "components/content";

import { Helmet } from "react-helmet";



/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '28/08/2021 08:49 AM',
"title": 'Lăn lộn trên sóng rồi tự vạch áo cho người xem ngực, nữ streamer còn tự tin tuyên bố đang thả rông gây sốc',
"description": 'Khó mà đỡ nổi với độ phản cảm của cô nàng streamer này.',
"src": '',
"alt": 'HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,HAN-KYUNG,',
"category": 'images',
"date": '28/08/2021',
"time": '08:49 AM',
"link": '/lan-lon-tren-song-roi-tu-vach-ao-cho-nguoi-xem-nguc-nu-streamer-con-tu-tin-tuyen-bo-dang-tha-rong-gay-soc',
"zcomponent": 'page_20210828084932',
"filepath": './20210828084932-lan-lon-tren-song-roi-tu-vach-ao-cho-nguoi-xem-nguc-nu-streamer-con-tu-tin-tuyen-bo-dang-tha-rong-gay-soc.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = 'images';
const categoryLink = '/images';
const title = 'Lăn lộn trên sóng rồi tự vạch áo cho người xem ngực, nữ streamer còn tự tin tuyên bố đang thả rông gây sốc';
const author = 'Mặt Trứng';
const source = 'Pháp luật và bạn đọc';
const timestamp = '28/08/2021 08:49 AM';
const description = 'Khó mà đỡ nổi với độ phản cảm của cô nàng streamer này.';
const link = 'lan-lon-tren-song-roi-tu-vach-ao-cho-nguoi-xem-nguc-nu-streamer-con-tu-tin-tuyen-bo-dang-tha-rong-gay-soc';
const tagparam = ["HOT GIRL","GÁI XINH","CỘNG ĐỒNG MẠNG","STREAMER","NỮ STREAMER","HAN-KYUNG",];
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

export default function page_20210828084932() {
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
              <div className="author">{author}</div> - Theo {source} | {timestamp}
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

<p>Nhân vật chính trong câu chuyện lần này là <strong>Han-kyung</strong>, một nữ <strong>streamer</strong> có thể nói là vô cùng gợi cảm và xinh đẹp trên AfreecaTV. Không chơi game giỏi, nói chuyện cũng chẳng duyên dáng, thế nhưng chỉ riêng nhan sắc của Han-kyung đã đủ để đáp ứng phần nhìn từ phía đông đảo người xem rồi. Thế nên không lạ khi bên cạnh lượng follow khủng trên kênh livestream, trang cá nhân của cô cũng có tới hơn 750.000 follow. Nổi tiếng với hình ảnh ngoan hiền, không quá tai tiếng nhưng mới đây, Han-kyung lại bất ngờ khiến không ít người phải sốc với độ táo bạo của mình.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/27/photo-1-1630045923885216777320.jpg' alt="1, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,HAN-KYUNG," note='Han-kyung, gương mặt xinh đẹp và rất hồn nhiên của làng streamer'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/27/photo-1-16300461573021146677967.gif' alt="2, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,HAN-KYUNG," note='Tuy nhiên, cô nàng đôi khi cũng khiến không ít người phải ngỡ ngàng với những khoảnh khắc nóng bỏng của mình'/>
<p>Vốn miễn nhiễm với những scandal, thế nhưng trong lần lên sóng mới đây, <strong>Han-kyung</strong> lại khiến cho không ít người sốc nặng với những hành động, cử chỉ được cho là táo bạo quá mức, tới nỗi phản cảm của mình. Cụ thể, chẳng những lăn lê, livestream trong trạng thái nằm với người xem, cô nàng <strong>streamer</strong> còn rất hồn nhiên đùa nghịch với chiếc áo ngoài của mình khi lặp lại combo "giữ + thả" để có những màn lấp ló vòng một cực kỳ khêu gợi. Cộng thêm tư thế livestream chẳng giống ai, Han-kyung càng khiến cho không ít người phải phát sốt. Đó là chưa nói tới, chẳng cần quá tinh mắt cũng nhận ra nàng <strong>hot girl</strong> đang "thả rông" hoàn toàn đôi gò bồng đảo của mình nữa.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/27/photo-1-16300463338101705772929.gif' alt="3, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,HAN-KYUNG," note='Những động tác bị cho là gợi cảm tới mức phản cảm của nàng streamer'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/27/photo-1-163004634886074125261.jpg' alt="4, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,HAN-KYUNG," note='Đang khiến cho cô nàng gặp phải vô số những chỉ trích'/>
<p>Quả thật, rất nhiều khán giả đã phải ngỡ ngàng trước sự lột xác lần này của cô nàng <strong>streamer</strong>. Không còn giữ hình tượng ngây thơ, ngoan hiền như trước, <strong>Han-kyung</strong> lột xác chóng mặt trong lần xuất hiện lại lần này. Tuy nhiên, những ý kiến tiêu cực dành cho hình ảnh lần này của Han-kyung cũng là rất nhiều. Tới mức mà cô nàng thậm chí còn phải khóa trang cá nhân. Hiện tại, Han-kyung cũng không còn livestream trên AfreecaTV nữa mà tạm thời chuyển qua Twitch.</p>
<RelationNewsInPage category={category} />
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/27/photo-1-16300466678291828865987.jpg' alt="5, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,HAN-KYUNG," note='Han-kyung đã tạm khóa trang cá nhân'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/27/photo-1-1630046604344992265587.jpg' alt="6, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,HAN-KYUNG," note='Cô nàng cũng đồng thời chuyển qua livestream trên Twitch'/>
<p>Thực tế, đây cũng không phải là lần đầu tiên mà <strong>Han-kyung</strong> thay đổi hình tượng, trở nên táo bạo hơn. Nhưng phiên livestream vừa rồi dường như cũng là lần đầu tiên mà các fan thấy nàng <strong>streamer</strong> có phần vượt quá ranh giới giữa sự gợi cảm và phản cảm thì phải.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/27/photo-1-1630046852603884714594.jpg' alt="7, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,HAN-KYUNG," note='Đây cũng không phải lần đầu tiên mà cô nàng streamer có những màn khoe thân như vậy'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/27/photo-1-16300467795291040060570.gif' alt="8, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,HAN-KYUNG," note='Nhiều đoạn vũ đạo trước đây của Han-kyung cũng được dân mạng tìm lại'/>


                    </div>
                  <AdsHorizontal />
                </div></div>

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
