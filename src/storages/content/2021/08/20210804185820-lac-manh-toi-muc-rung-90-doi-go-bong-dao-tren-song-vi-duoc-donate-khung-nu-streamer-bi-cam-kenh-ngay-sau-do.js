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
"timestamp": '04/08/2021 06:58 PM',
"title": 'Lắc mạnh tới mức "rụng" 90% đôi gò bồng đảo trên sóng vì được donate khủng, nữ streamer bị cấm kênh ngay sau đó',
"description": 'Hình ảnh của cô nàng streamer này đang được phủ sóng khắp mọi nơi.',
"src": '',
"alt": 'CỘNG ĐỒNG MẠNG,NỮ STREAMER,UMJI,STREAMER,HOT GIRL,GÁI XINH,',
"category": 'images',
"date": '04/08/2021',
"time": '06:58 PM',
"link": '/lac-manh-toi-muc-rung-90-doi-go-bong-dao-tren-song-vi-duoc-donate-khung-nu-streamer-bi-cam-kenh-ngay-sau-do',
"zcomponent": 'page_20210804185820',
"filepath": './20210804185820-lac-manh-toi-muc-rung-90-doi-go-bong-dao-tren-song-vi-duoc-donate-khung-nu-streamer-bi-cam-kenh-ngay-sau-do.js'
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
const title = 'Lắc mạnh tới mức "rụng" 90% đôi gò bồng đảo trên sóng vì được donate khủng, nữ streamer bị cấm kênh ngay sau đó';
const author = 'Mặt Trứng';
const source = 'Pháp luật và bạn đọc';
const timestamp = '04/08/2021 06:58 PM';
const description = 'Hình ảnh của cô nàng streamer này đang được phủ sóng khắp mọi nơi.';
const link = 'lac-manh-toi-muc-rung-90-doi-go-bong-dao-tren-song-vi-duoc-donate-khung-nu-streamer-bi-cam-kenh-ngay-sau-do';
const tagparam = ["CỘNG ĐỒNG MẠNG","NỮ STREAMER","UMJI","STREAMER","HOT GIRL","GÁI XINH",];
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

export default function page_20210804185820() {
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
                  <div className="contentBodyLeft"><p>Được nhận tiền donate chắc chắn luôn là một trong những khoảnh khắc hạnh phúc nhất tới từ các <strong>streamer</strong>. Và nếu số tiền donate lại còn thuộc dạng "khủng" thì chắc chắn nhiều người sẽ chẳng thể kiềm chế nổi cảm xúc. Tuy nhiên, nếu như có muốn bộc phát thì cũng đừng tới mức quá khích như <strong>Umji</strong> - một <strong>nữ streamer</strong> siêu gợi cảm dưới đây.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/2/screenshot7-16279014377781101551256.png' alt='1, CỘNG ĐỒNG MẠNG,NỮ STREAMER,UMJI,STREAMER,HOT GIRL,GÁI XINH,' note='Umji - cô nàng streamer trong câu chuyện'/>
<p>Theo đó, chẳng hiểu do quá phấn khích trước số tiền donate khủng hay bản thân đã vui sẵn từ khi lên sóng mà mới đây thôi, cô nàng <strong>streamer</strong> này vừa có một màn "rung lắc" vòng một theo đúng nghĩa đen không thể gợi cảm hơn. Cụ thể, ngay khi thấy khoản donate "nổ", <strong>Umji</strong> bất ngờ giơ hai tay lên rồi lấy đà và rung vòng một của mình một cách rất nóng bỏng. Đáng chú ý, bộ trang phục của cô nàng còn khoe gần như toàn bộ đôi gò bồng đảo gợi cảm quyến rũ nữa.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-1627901503857631211449.gif' alt='2, CỘNG ĐỒNG MẠNG,NỮ STREAMER,UMJI,STREAMER,HOT GIRL,GÁI XINH,' note='Màn lắc người có phần hơi quá đà của Umji'/>
<p>Điều này khiến cho cô nàng gặp phải vô số rắc rối, khi đã phải nhận cảnh cáo và một án phạt cấm kênh từ phía nền tảng. Tuy nhiên, đối với bản thân <strong>Umji</strong> cũng như các fan ruột vốn đã quen với phong cách phát sóng của cô nàng thì dường như đây không phải là vấn đề quá lớn. Cụ thể, đây cũng không phải là lần đầu tiên mà Umji lên sóng trong các bộ trang phục trễ nải, cũng như có những hành động bột phát như vừa rồi.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/2/photo-1-16279017029441044611400.gif' alt='3, CỘNG ĐỒNG MẠNG,NỮ STREAMER,UMJI,STREAMER,HOT GIRL,GÁI XINH,' note='Những hình ảnh thường thấy trên sóng livestream của Umji'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/2/-1627902257945708599924.jpg' alt='4, CỘNG ĐỒNG MẠNG,NỮ STREAMER,UMJI,STREAMER,HOT GIRL,GÁI XINH,' note='Bản thân cô nàng chưa bao giờ có ý định giấu diếm vòng một khủng của mình'/>
<RelationNewsInPage category={category} /><p>Cao tới 1m68 và từng là người mẫu của một cuộc thi sắc đẹp, <strong>Umji</strong> gần như chẳng có gì ngoài nhan sắc gợi cảm, nóng bỏng của mình và đó cũng là nội dung chính trong những lần cô nàng lên sóng livestream. Tất nhiên, các fan của Umji thì đa phần đều là những fan nam rồi. Đa phần mỗi lần lên sóng, nàng <strong>streamer</strong> lại mang tới những vũ điệu nóng bỏng và cũng chỉ có thế mà thôi, nhưng là đủ để vươn lên hàng ngũ những streamer top đầu rồi.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/2/1ebe1c49d8059e23b34bd691171ff0d8-16279021716971460602800.gif' alt='5, CỘNG ĐỒNG MẠNG,NỮ STREAMER,UMJI,STREAMER,HOT GIRL,GÁI XINH,' note='Cứ lên sóng với những nội dung như vậy'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-2-16279022598831498875297.jpg' alt='6, CỘNG ĐỒNG MẠNG,NỮ STREAMER,UMJI,STREAMER,HOT GIRL,GÁI XINH,' note='Umji sớm muộn cũng gặp rắc rối với nền tảng'/>
<p>Lần cấm kênh này có lẽ cũng chẳng làm cô nàng <strong>streamer</strong> này bối rối, khi đây cũng không phải lần đầu tiên mà <strong>Umji</strong> phải nhận án phạt tương tự. Và chắc chắn, sau khi trở lại, cũng không có chuyện nàng streamer này thay đổi phong cách đâu.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/2/photo-1-16279023093481713888781.gif' alt='7, CỘNG ĐỒNG MẠNG,NỮ STREAMER,UMJI,STREAMER,HOT GIRL,GÁI XINH,' note='Những bộ trang phục hở trên khoét dưới luôn là style sở trường của Umji'/>
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
