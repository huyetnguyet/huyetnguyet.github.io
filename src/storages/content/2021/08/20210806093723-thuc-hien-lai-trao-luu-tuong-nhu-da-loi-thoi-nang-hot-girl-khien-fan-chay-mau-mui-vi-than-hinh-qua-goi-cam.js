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
"timestamp": '06/08/2021 09:37 AM',
"title": 'Thực hiện lại trào lưu tưởng như đã lỗi thời, nàng hot girl khiến fan chảy máu mũi vì thân hình quá gợi cảm',
"description": 'Cô nàng hot girl dường như đã làm sống lại trào lưu tưởng như đã hết trend này.',
"src": '',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,IN-KYUNG,STREAMER,NỮ STREAMER,',
"category": 'images',
"date": '06/08/2021',
"time": '09:37 AM',
"link": '/thuc-hien-lai-trao-luu-tuong-nhu-da-loi-thoi-nang-hot-girl-khien-fan-chay-mau-mui-vi-than-hinh-qua-goi-cam',
"zcomponent": 'page_20210806093723',
"filepath": './20210806093723-thuc-hien-lai-trao-luu-tuong-nhu-da-loi-thoi-nang-hot-girl-khien-fan-chay-mau-mui-vi-than-hinh-qua-goi-cam.js'
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
const title = 'Thực hiện lại trào lưu tưởng như đã lỗi thời, nàng hot girl khiến fan chảy máu mũi vì thân hình quá gợi cảm';
const author = 'Mặt Trứng';
const source = 'Pháp luật và bạn đọc';
const timestamp = '06/08/2021 09:37 AM';
const description = 'Cô nàng hot girl dường như đã làm sống lại trào lưu tưởng như đã hết trend này.';
const link = 'thuc-hien-lai-trao-luu-tuong-nhu-da-loi-thoi-nang-hot-girl-khien-fan-chay-mau-mui-vi-than-hinh-qua-goi-cam';
const tagparam = ["GÁI XINH","HOT GIRL","CỘNG ĐỒNG MẠNG","IN-KYUNG","STREAMER","NỮ STREAMER",];
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

export default function page_20210806093723() {
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
                  <p>Cách đây không lâu, mạng xã hội bất ngờ rộ lên một trào lưu vô cùng nóng bỏng và thu hút sự chú ý của rất nhiều những cô nàng <strong>hot girl</strong> xinh đẹp. Cụ thể, đó chính là trending sử dụng dây an toàn để thay thế cho áo lót. Hay nói cách khác, các cô <strong>gái xinh</strong> đẹp sẽ hoàn toàn thả rông một bên gò bồng đảo của mình, sau đó sử dụng dây an toàn trên xe ô tô để che chắn đi các bộ phận nhạy cảm. Trào lưu này đã từng nở rộ và trở nên cực kỳ hot ở thời điểm cách đây 4 tháng.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/1/photo-1-1627796707480230260030.jpg' alt='1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,IN-KYUNG,STREAMER,NỮ STREAMER,' note='Ví dụ về trào lưu cực hot đã từng được rất nhiều những cô gái xinh đẹp tham gia đây'/>
<p>Tất nhiên, một trending thì chẳng thể nào kéo dài và chỉ cần sau 1-2 tuần chứ chưa nói tới 4 tháng, trào lưu này nhanh chóng lùi vào dĩ vãng để nhường chỗ cho những điều thú vị hơn. Thế nhưng, vẫn có một nàng <strong>hot girl</strong> khá "tối cổ", người vừa vô tình làm sống dậy trào lưu này chỉ thông qua một bức ảnh mới đăng tải của mình. Đó chính là <strong>In-kyung</strong>, một trong những cô gái đang rất hot trên mạng xã hội ở thời điểm hiện tại.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/1/2278188517919115681668806419221591386473551n-16277970580041137926019.jpg' alt='2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,IN-KYUNG,STREAMER,NỮ STREAMER,' note='Bức hình đang làm dậy sóng cộng đồng mạng thời gian mới đây của In-kyung'/>
<p>Dành cho những ai muốn tìm hiểu thì cô nàng <strong>In-kyung</strong> vốn được biết tới là một trong những <strong>hot girl</strong> mạng, người mẫu ảnh nổi tiếng bậc nhất tại Hàn Quốc thời điểm hiện tại. Gần đây, cô nàng lại có dấu hiệu chuyển đổi dần sang công việc livestream như một cách để tự thử thách bản thân. Chỉ có điều, mọi thứ dường như không diễn biến tốt đẹp như Inkyung mong đợi thì phải. Bên cạnh một lượng lớn các fan trung thành luôn ủng hộ thì ở chiều ngược lại, cũng có không ít anti fan thường xuyên chĩa mũi dùi chỉ trích vào nàng hot girl xinh đẹp khi cô lên sóng.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/1/photo-1-1627797214151231047263.jpg' alt='3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,IN-KYUNG,STREAMER,NỮ STREAMER,' note='Nàng hot girl thường xuyên gây ấn tượng bởi phong cách thời trang táo bạo'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/1/photo-1-16277972245761977054131.jpg' alt='4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,IN-KYUNG,STREAMER,NỮ STREAMER,' note='Đôi khi là sexy quá đà của mình'/>
<RelationNewsInPage category={category} />
<p>Trên trang cá nhân đang có hàng triệu follow của mình, không khó để bắt gặp những khoảnh khắc mang đậm phong cách 18+ của cô nàng <strong>hot girl</strong> này. Nhưng cũng phải thừa nhận thực tế rằng, cũng chính nhờ điểm nhấn táo bạo và nóng bỏng, quyến rũ quá đỗi này mà <strong>In-kyung</strong> luôn nhận được sự chú ý tối đa từ phía <strong>cộng đồng mạng</strong>. Ngay cả một trào lưu đã lỗi thời hàng tháng vẫn có thể bất ngờ trở nên hot lại như cách mà cô nàng vừa thực hiện.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/1/photo-1-1627797383339325927780.jpg' alt='5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,IN-KYUNG,STREAMER,NỮ STREAMER,' note='Trang cá nhân của cô nàng hot girl luôn ngập tràn những khung ảnh nóng bỏng'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/1/photo-1-16277974106321213908365.jpg' alt='6, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,IN-KYUNG,STREAMER,NỮ STREAMER,' note='Cô nàng cũng rất thoải mái khoe thân mọi lúc mọi nơi'/>
<p>Hiện tại, <strong>In-kyung</strong> dường như đã chấm dứt sự nghiệp livestream của mình. Thay vào đó, cô nàng quay trở lại với công việc mẫu ảnh, đồng thời cũng bán những bức ảnh "đặc biệt" trên trang cá nhân và yêu cầu người xem phải trả phí.</p>
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
