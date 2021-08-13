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
"timestamp": '11/08/2021 10:58 AM',
"title": 'Để mặt mộc lên sóng, nữ streamer nóng bỏng bị chê nhan sắc xuống hạng, chính chủ ngao ngán phân trần',
"description": 'Cô nàng streamer khẳng định rằng, hình ảnh không được “mượt mà” là do thiết bị kém chất lượng mà thôi.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/11/anh-chup-man-hinh-2021-08-11-luc-092221-16286503253121526244614.png',
"alt": 'STREAMER,VŨ NGỌC KIM CHI,LỘ ẢNH,LIVESTREAM,MẶT MỘC,',
"category": 'images',
"date": '11/08/2021',
"time": '10:58 AM',
"link": '/de-mat-moc-len-song-nu-streamer-nong-bong-bi-che-nhan-sac-xuong-hang-chinh-chu-ngao-ngan-phan-tran',
"zcomponent": 'page_20210811105822',
"filepath": './20210811105822-de-mat-moc-len-song-nu-streamer-nong-bong-bi-che-nhan-sac-xuong-hang-chinh-chu-ngao-ngan-phan-tran.js'
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
const title = 'Để mặt mộc lên sóng, nữ streamer nóng bỏng bị chê nhan sắc xuống hạng, chính chủ ngao ngán phân trần';
const author = 'Kayle';
const source = 'Pháp luật và bạn đọc';
const timestamp = '11/08/2021 10:58 AM';
const description = 'Cô nàng streamer khẳng định rằng, hình ảnh không được “mượt mà” là do thiết bị kém chất lượng mà thôi.';
const link = 'de-mat-moc-len-song-nu-streamer-nong-bong-bi-che-nhan-sac-xuong-hang-chinh-chu-ngao-ngan-phan-tran';
const tagparam = ["STREAMER","VŨ NGỌC KIM CHI","LỘ ẢNH","LIVESTREAM","MẶT MỘC",];
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

export default function page_20210811105822() {
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

<p>Sau sự cố lần thứ hai bị rò rỉ ảnh nhạy cảm, nữ <strong>streamer</strong> đình đám một thời <strong>Vũ Ngọc Kim Chi</strong> (Chi Củ Cải) đã từng bước đối đầu với scandal và đứng dậy sau drama. Mới đây, cô nàng còn quyết định <strong>livestream</strong> vừa hướng dẫn chăm sóc da vừa trò chuyện với người hâm mộ.</p>
<p>Để truyền tải được tính chân thật và tác dụng của việc skincare, Chi không sử dụng app chỉnh hình hay make up gì khi lên sóng thế nhưng đây lại là nguồn cơn của loạt bình luận chê bai kém duyên. Quá bức xúc, cô nàng đã điều chỉnh chế độ người tiếp cận của <strong>livestream</strong> từ công khai xuống hạn chế chỉ cô nàng mới xem được.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/11/photo-1-162865021331865986583-1628650244688176714361-1628650761817611328638.jpg' alt='1, STREAMER,VŨ NGỌC KIM CHI,LỘ ẢNH,LIVESTREAM,MẶT MỘC,' note='Hiện video livestream đã được ẩn trên trang Facebook của cô nàng.'/>
<p>Không chỉ vậy, nữ <strong>streamer</strong> còn đăng tải status “ấm ức”: “Để <strong>mặt mộc</strong> <strong>livestream</strong> cũng bị soi, chê bai các kiểu. Makeup thì lại kêu ở nhà makeup chi vậy. Sống sao cho vừa lòng các bạn”. Khi có ý kiến thắc mắc về làn da trên ảnh sống ảo và trên sóng khác nhau, cô nàng còn khẳng định rằng: “Bạn mà thấy mặt tui có mụn là do máy tui đểu, tui không dùng filter để live. Chứ da tôi bạn không bới được cái mụn nào đâu ạ”.</p>
<p>Tuy mới 21 tuổi thế nhưng sau một thời gian gắn bó với nghề <strong>streamer</strong> và mẫu ảnh theo phong cách sexy, cô nàng sinh năm 1999 này có suy nghĩ gai góc và trưởng thành hơn nhiều so với tuổi thực. Nhất là khi cô nàng đã trải qua hai cú sốc <strong>lộ ảnh</strong> nhạy cảm đến từ những sai sót tai hại của đối tác và những lời chỉ trích nặng nề từ cộng đồng mạng. </p>
<RelationNewsInPage category={category} />
<p>Với Kim Chi, cô từng chia sẻ rằng, có những người hiểu, có những người không hiểu; có người tin cũng có người không tin về cô thế nhưng đến thời điểm này, nữ <strong>streamer</strong> đã quá mệt mỏi và cho biết sẽ không chạy theo làm hài lòng người khác.</p>
<p>Những dòng trạng thái tích cực, những hình ảnh vui tươi mà hot girl Hải Phòng đăng tải gần đây trên các nền tảng mạng xã hội được xem như sự bắt tay vào công cuộc tự vực dậy tinh thần của bản thân và xây dựng hình ảnh mới mẻ trong mắt người hâm mộ của cô nàng. Dẫu vậy thì có vẻ như mọi chuyện vẫn chưa thực sự suôn sẻ với nàng mẫu xinh đẹp này.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/11/anh-chup-man-hinh-2021-08-11-luc-092221-16286503253121526244614.png' alt='2, STREAMER,VŨ NGỌC KIM CHI,LỘ ẢNH,LIVESTREAM,MẶT MỘC,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-16286504206581848558428.jpg' alt='3, STREAMER,VŨ NGỌC KIM CHI,LỘ ẢNH,LIVESTREAM,MẶT MỘC,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-16286504816971971611288.jpg' alt='4, STREAMER,VŨ NGỌC KIM CHI,LỘ ẢNH,LIVESTREAM,MẶT MỘC,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-16286505155601904620246.jpg' alt='5, STREAMER,VŨ NGỌC KIM CHI,LỘ ẢNH,LIVESTREAM,MẶT MỘC,' note=''/>


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
