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
"timestamp": '13/08/2021 09:22 AM',
"title": 'Lên sóng khoe body siêu nuột, nữ streamer triệu follow bất ngờ bị fan soi ra đầu gối thâm đen, đặt nghi vấn đầy "tế nhị"',
"description": 'Bản thân cô nàng streamer có lẽ cũng chẳng thể ngờ mình lại bị để ý kỹ tới vậy.',
"src": '',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,HAN-KYUNG,NỮ STREAMER,',
"category": 'images',
"date": '13/08/2021',
"time": '09:22 AM',
"link": '/len-song-khoe-body-sieu-nuot-nu-streamer-trieu-follow-bat-ngo-bi-fan-soi-ra-dau-goi-tham-den-dat-nghi-van-day-te-nhi',
"zcomponent": 'page_20210813092217',
"filepath": './20210813092217-len-song-khoe-body-sieu-nuot-nu-streamer-trieu-follow-bat-ngo-bi-fan-soi-ra-dau-goi-tham-den-dat-nghi-van-day-te-nhi.js'
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
const title = 'Lên sóng khoe body siêu nuột, nữ streamer triệu follow bất ngờ bị fan soi ra đầu gối thâm đen, đặt nghi vấn đầy "tế nhị"';
const author = 'Mặt Trứng';
const source = 'Pháp luật và bạn đọc';
const timestamp = '13/08/2021 09:22 AM';
const description = 'Bản thân cô nàng streamer có lẽ cũng chẳng thể ngờ mình lại bị để ý kỹ tới vậy.';
const link = 'len-song-khoe-body-sieu-nuot-nu-streamer-trieu-follow-bat-ngo-bi-fan-soi-ra-dau-goi-tham-den-dat-nghi-van-day-te-nhi';
const tagparam = ["GÁI XINH","HOT GIRL","CỘNG ĐỒNG MẠNG","STREAMER","HAN-KYUNG","NỮ STREAMER",];
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

export default function page_20210813092217() {
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

<p>Nhân vật chính trong câu chuyện lần này là <strong>Han-kyung</strong>, một nữ <strong>streamer</strong> có thể nói là vô cùng gợi cảm và xinh đẹp trên AfreecaTV. Không chơi game giỏi, nói chuyện cũng chẳng duyên dáng, thế nhưng chỉ riêng nhan sắc của Han-kyung đã đủ để đáp ứng phần nhìn từ phía đông đảo người xem rồi. Thế nên không lạ khi bên cạnh lượng follow khủng trên kênh livestream, trang cá nhân - nơi Han-kyung không ngần ngại chia sẻ những hình ảnh khoe body chuẩn như người mẫu của cô nàng cũng có tới gần 750.000 lượt theo dõi. Tuy nhiên, mới đây thôi, nàng streamer xinh đẹp này lại bất ngờ gặp phải một sự cố đầy khó đỡ.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-1628572442773882559214.jpg' alt='1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,HAN-KYUNG,NỮ STREAMER,' note='Han-kyung, cô nàng streamer xinh đẹp trong câu chuyện'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-1628572471673791841161.jpg' alt='2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,HAN-KYUNG,NỮ STREAMER,' note='Đồng thời cũng sở hữu một thân hình cực kỳ gợi cảm'/>
<p>Cao 1m68, sở hữu số đo ba vòng không thể chuẩn hơn, nhiều người thậm chí còn thắc mắc tại sao cô nàng <strong>Han-kyung</strong> không theo đuổi sự nghiệp người mẫu nữa. Và như đã đề cập ở trên, nội dung chủ yếu trên kênh livestream của cô nàng khá đơn điệu khi thường xuyên chỉ nhấn mạnh vào ưu thế sắc đẹp của mình nhưng lại chưa bao giờ làm các fan thấy chán. Trong lần lên sóng mới nhất, Han-kyung lại tiếp tục phô diễn đường cong với một bộ váy bó sát nhưng bất ngờ lại bị người xem soi ra chi tiết khá nhạy cảm.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285726533111410848556.png' alt='3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,HAN-KYUNG,NỮ STREAMER,' note='Cô nàng streamer lên sóng với bộ váy ôm sát gợi cảm'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285726918131250865424.png' alt='4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,HAN-KYUNG,NỮ STREAMER,' note='Không ngại ưỡn ẹo, khoe đồi chân thon dài trên sóng'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285727052141849904695.png' alt='5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,HAN-KYUNG,NỮ STREAMER,' note='Nhưng lại để các fan soi ra chi tiết đầu gối thâm đen, nhiều vết bầm'/>
<RelationNewsInPage category={category} />
<p>Cụ thể, không ít fan của <strong>Han-kyung</strong> đã nhanh mắt soi ra những vết bầm bất thường xuất hiện nhiều ở cả hai bên đầu gối của cô nàng <strong>streamer</strong> này. Điều này cũng khiến cho khá nhiều người liên tưởng tới những chi tiết có phần nhạy cảm, đồng thời không ngừng nghi vấn, gặng hỏi cô nàng ngay trên sóng livestream bằng những bình luận không mấy tích cực. Theo đó, nhiều người thi nhau vào trêu chọc <strong>nữ streamer</strong>, cho rằng đầu gối của cô nàng là thành quả của một quá trình dài thực hiện các hành động "nhạy cảm".</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-16285730174161660398690.jpg' alt='6, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,HAN-KYUNG,NỮ STREAMER,' note='Bản thân cô nàng streamer có lẽ cũng chẳng thể ngờ được'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-1628573023768461937663.jpg' alt='7, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,HAN-KYUNG,NỮ STREAMER,' note='Mình lại bị các fan soi ra chi tiết bất thường ấy'/>
<p>Thực tế thì điều này dường như cũng chẳng có gì quá to tát, khi mà có rất nhiều lý do để giải thích cho những vết bầm tím, trầy xước trên đầu gối của <strong>Han-kyung</strong>. Tuy bản thân cô nàng không lên tiếng đính chính, giải thích thế nhưng các fan ruột của nữ <strong>streamer</strong> cũng đã bênh vực thần tượng của mình khi cho rằng đó là thành quả của những màn vũ đạo gợi cảm, có độ khó cao mà Han-kyung từng biểu diễn trên sóng. Có lẽ cũng nên suy nghĩ như vậy cho mọi thứ đơn giản.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285732677811527170852.jpeg' alt='8, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,HAN-KYUNG,NỮ STREAMER,' note='Han-kyung không lên tiếng trước sự việc lần này'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-1628573342533897057595.jpg' alt='9, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,HAN-KYUNG,NỮ STREAMER,' note='Thay vào đó, cô nàng được khá nhiều fan hâm mộ lên tiếng giải vây cho'/>


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
