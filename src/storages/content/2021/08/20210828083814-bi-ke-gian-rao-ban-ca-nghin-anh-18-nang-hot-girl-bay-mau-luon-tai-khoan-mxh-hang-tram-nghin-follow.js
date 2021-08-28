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
"timestamp": '28/08/2021 08:38 AM',
"title": 'Bị kẻ gian rao bán cả nghìn ảnh 18+, nàng hot girl "bay màu" luôn tài khoản MXH hàng trăm nghìn follow',
"description": 'Thậm chí sau khi nàng hot girl này lập lại tài khoản mới thì nó cũng bị xóa.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/23/photo-1-16297003717821152294862-16297003818761868140100.jpg',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,',
"category": 'images',
"date": '28/08/2021',
"time": '08:38 AM',
"link": '/bi-ke-gian-rao-ban-ca-nghin-anh-18-nang-hot-girl-bay-mau-luon-tai-khoan-mxh-hang-tram-nghin-follow',
"zcomponent": 'page_20210828083814',
"filepath": './20210828083814-bi-ke-gian-rao-ban-ca-nghin-anh-18-nang-hot-girl-bay-mau-luon-tai-khoan-mxh-hang-tram-nghin-follow.js'
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
const title = 'Bị kẻ gian rao bán cả nghìn ảnh 18+, nàng hot girl "bay màu" luôn tài khoản MXH hàng trăm nghìn follow';
const author = 'A Đồi';
const source = 'Pháp luật và bạn đọc';
const timestamp = '28/08/2021 08:38 AM';
const description = 'Thậm chí sau khi nàng hot girl này lập lại tài khoản mới thì nó cũng bị xóa.';
const link = 'bi-ke-gian-rao-ban-ca-nghin-anh-18-nang-hot-girl-bay-mau-luon-tai-khoan-mxh-hang-tram-nghin-follow';
const tagparam = ["GÁI XINH","HOT GIRL","CỘNG ĐỒNG MẠNG",];
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

export default function page_20210828083814() {
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

<p>Nếu như các bạn chưa biết thì Qing Er là một <strong>hot girl</strong> cực kỳ nổi tiếng trên mạng xã hội với hơn 270 nghìn lượt theo dõi. Điểm thu hút của Qing Er đó là dù sở hữu gương mặt vô cùng ngây thơ nhưng cô lại có một thân hình cực kỳ nóng bỏng, quyến rũ. Có lẽ cụm từ chính xác nhất để mô tả về Qing Er đó là "mặt học sinh nhưng thân hình phụ huynh".</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-16296993718892120757262.jpg' alt="1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG," note='Qing Er - Nữ nhân vật chính trong câu chuyện'/>
<p>Đương nhiên là dù có theo đuổi hình tượng gợi cảm thì Qing Er cũng chưa bao giờ đăng tải những tấm ảnh khoe thân quá lố để câu view. Cô nàng hiểu rằng việc này chỉ khiến mình gặp rất nhiều rắc rối vì sẽ vi phạm các quy tắc cộng đồng. Hậu quả sẽ là việc bị xóa tài khoản và chẳng còn chỗ để liên lạc với bạn bè cũng như thể hiện cá tính của bản thân.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-16297000924811046672606.jpg' alt="2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG," note='Dù sở hữu gương mặt dễ thương nhưng cô nàng lại theo đuổi hình tượng gợi cảm'/>
<p>Mặc dù đã cẩn thận như vậy nhưng Qing Er lại bị chính nền tảng Instagram xóa tài khoản cách đây ít ngày. Theo tìm hiểu của các "thám tử mạng" thì trong thời gian vừa qua, đã có một vài tài khoản đăng bài về việc bán cả nghìn tấm ảnh 18+ của Qing Er. Điều này khiến cho bộ phận kiểm duyệt nội dung của Instagram cho rằng Qing Er có liên quan tới hành động bị cấm này nên họ đã xóa luôn tài khoản của cô.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/23/photo-1-16297001103411169754874-1629700229855804667108.jpg' alt="3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG," note='Một trong những tài khoản rao bán ảnh 18+ của Qing Er'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/gau-1629700140963380369854-16297001930951843943025-1629700205717916049292.jpg' alt="4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG," note='Những bức ảnh nhạy cảm xuất hiện trên Instagram đã khiến tài khoản của Qing Er bị nền tảng này xóa luôn'/>
<RelationNewsInPage category={category} />
<p>Sau đó thì Qing Er cũng tạo một tài khoản mới để giải thích về những bức ảnh 18+ kia. Theo chia sẻ thì những bức ảnh đó đã được Qing Er chụp từ nhiều năm trước nhưng cô nàng đã được cam kết rằng nó sẽ không bị lan truyền ra ngoài. Tuy nhiên bằng một cách nào đó thì những tấm ảnh kia vẫn bị tung lên mạng và khiến cô nàng gặp rắc rối lớn tới như vậy.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/23/photo-1-1629700295663458906603.jpg' alt="5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG," note='Việc bị tung ảnh 18+ lên mạng xã hội khiến Qing Er gặp rắc rối lớn'/>
<p>Tính tới thời điểm hiện tại thì tài khoản Instagram thứ hai của Qing Er cũng đã bị xóa và người ta không thấy cô nàng có hoạt động nào khác trên mạng xã hội nữa.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/23/photo-1-16297003126321352649444.jpg' alt="6, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG," note='Qing Er sau khi bị xóa tài khoản Instagram thứ hai thì cũng không có hoạt động nào nữa trên mạng xã hội'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/23/photo-1-16297003717821152294862-16297003818761868140100.jpg' alt="7, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG," note=''/>


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
