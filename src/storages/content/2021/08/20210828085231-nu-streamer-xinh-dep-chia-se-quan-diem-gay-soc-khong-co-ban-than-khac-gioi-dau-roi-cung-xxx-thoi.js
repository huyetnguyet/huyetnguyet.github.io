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
"timestamp": '28/08/2021 08:52 AM',
"title": 'Nữ streamer xinh đẹp chia sẻ quan điểm gây sốc: "Không có bạn thân khác giới đâu, rồi cũng XXX thôi"',
"description": 'Góc nhìn của cô nàng streamer khiến cho không ít người xem phải ngạc nhiên vì độ thẳng thắn.',
"src": '',
"alt": 'GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HWA-JEONG,',
"category": 'images',
"date": '28/08/2021',
"time": '08:52 AM',
"link": '/nu-streamer-xinh-dep-chia-se-quan-diem-gay-soc-khong-co-ban-than-khac-gioi-dau-roi-cung-xxx-thoi',
"zcomponent": 'page_20210828085231',
"filepath": './20210828085231-nu-streamer-xinh-dep-chia-se-quan-diem-gay-soc-khong-co-ban-than-khac-gioi-dau-roi-cung-xxx-thoi.js'
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
const title = 'Nữ streamer xinh đẹp chia sẻ quan điểm gây sốc: "Không có bạn thân khác giới đâu, rồi cũng XXX thôi"';
const author = 'Mặt Trứng';
const source = 'Pháp luật và bạn đọc';
const timestamp = '28/08/2021 08:52 AM';
const description = 'Góc nhìn của cô nàng streamer khiến cho không ít người xem phải ngạc nhiên vì độ thẳng thắn.';
const link = 'nu-streamer-xinh-dep-chia-se-quan-diem-gay-soc-khong-co-ban-than-khac-gioi-dau-roi-cung-xxx-thoi';
const tagparam = ["GÁI XINH","HOT GIRL","STREAMER","NỮ STREAMER","CỘNG ĐỒNG MẠNG","HWA-JEONG",];
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

export default function page_20210828085231() {
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

<p>Sở hữu gương mặt xinh đẹp, thần thái cùng làn da trắng sứ, <strong>Hwa-jeong</strong> luôn thu hút <strong>cộng đồng mạng</strong> bởi sự gợi cảm, nóng bỏng của mình những khi lên sóng. Thường xuyên mang tới những màn vũ đạo nóng bỏng, tận dụng tối đa nhan sắc của mình thế nên chẳng mất quá nhiều thời gian để cô nàng sở hữu cho mình lượng fan hâm mộ khổng lồ. Tuy vậy, Hwa-jeong cũng thường gắn liền với những lùm xùm không đáng có, và nguyên nhân lớn nhất cũng có phần xuất phát từ những phát ngôn đôi khi hơi gây sốc quá đà của cô nàng <strong>streamer</strong>.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/screenshot13-1629861951138743645937.png' alt="1, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HWA-JEONG," note='Hwa-jeong - cô nàng streamer trong câu chuyện'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/25/photo-1-1629861968111893579344.gif' alt="2, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HWA-JEONG," note='Một trong những gương mặt xinh đẹp và gợi cảm bậc nhất của AfreecaTV'/>
<p>Theo đó, gần đây trên mạng bất ngờ rộ lên chủ đề đầy thắc mắc về câu hỏi liệu có thể tồn tại khái niệm bạn trai hoặc bạn gái thân và tất cả chỉ dừng ở mức "bạn bè thân" hay không. Và khi nhận được câu hỏi như vậy, <strong>Hwa-jeong</strong> đã lựa chọn cách trả lời cực kỳ thẳng thắn bằng chính kinh nghiệm của mình: "Tin tôi đi, không có khái niệm bạn trai hay bạn gái thân quá mức đâu, rồi cũng tới bước XXX thôi".</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/25/screenshot14-1629862254490223889661.png' alt="3, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HWA-JEONG," note='Cô nàng khẳng định không bao giờ tồn tại khái niệm trên tình bạn dưới tình yêu với người khác giới'/>
<p>Cụ thể, <strong>Hwa-jeong</strong> chia sẻ: "Nếu như bạn trai của tôi bảo anh ấy đi gặp một người bạn là con gái, tôi sẽ không bao giờ đồng ý", ngoài ra, Hwa-jeong cũng nhấn mạnh rằng ngay cả với một người bạn mà cô nàng cảm thấy cực kỳ tin cậy, nữ <strong>streamer</strong> cũng sẽ không chấp nhận. Lý do đơn giản nhất có thể tới từ rượu, một bữa nhậu. "Sẽ chẳng biết chuyện gì xảy ra khi một người nam và một người nữ ngồi uống rượu với nhau" - <strong>nữ streamer</strong> chia sẻ bằng chính kinh nghiệm của bản thân.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/25/photo-1-16298624829961813939551.jpg' alt="4, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HWA-JEONG," note='Theo lời Hwa-jeong, khi một người đàn ông và phụ nữ ngồi uống rượu, chuyện tiến tới XXX là hoàn toàn có thể'/>
<RelationNewsInPage category={category} />
<p>Bên cạnh đó, cô nàng cũng thêm một lần nữa khẳng định rằng nếu như một trong hai người xinh đẹp, chắc chắn sẽ thu hút đối tượng còn lại. Và khi có hơi men, điều gì cũng có thể xảy ra trong những phút giây kiểm soát. Do đó, sẽ chẳng có khái niệm gì được gọi là bạn thân khác giới cả.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/25/photo-1-16298626962721934376404.png' alt="5, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HWA-JEONG," note='Rất nhiều người tỏ ra đồng ý với luận điểm của Hwa-jeong'/>
<p>Không thiếu những người tỏ ra đồng cảm với cô nàng <strong>streamer</strong>. Thậm chí, nhiều anh chàng còn bộc bạch rằng nếu có một bạn thân khác giới như <strong>Hwa-jeong</strong>, thật khó để coi cô chỉ dừng ở mức "bạn thân" được.</p>
<ContentImage src='https://t1.daumcdn.net/cfile/tistory/990BAB4C5F20F1DA36' alt="6, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,CỘNG ĐỒNG MẠNG,HWA-JEONG," note='Nhiều người cho rằng thật khó để qua được sức cám dỗ của Hwa-jeong'/>


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
