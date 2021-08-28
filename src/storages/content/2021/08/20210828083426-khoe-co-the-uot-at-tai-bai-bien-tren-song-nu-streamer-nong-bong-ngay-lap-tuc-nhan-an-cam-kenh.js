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
"timestamp": '28/08/2021 08:34 AM',
"title": 'Khoe cơ thể ướt át tại bãi biển trên sóng, nữ streamer nóng bỏng ngay lập tức nhận án cấm kênh',
"description": 'Đây có thể nói là pha câu view "đi vào lòng đất" của nữ streamer này.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/22/photo-1-16296047438531544690358.jpg',
"alt": 'GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER,',
"category": 'images',
"date": '28/08/2021',
"time": '08:34 AM',
"link": '/khoe-co-the-uot-at-tai-bai-bien-tren-song-nu-streamer-nong-bong-ngay-lap-tuc-nhan-an-cam-kenh',
"zcomponent": 'page_20210828083426',
"filepath": './20210828083426-khoe-co-the-uot-at-tai-bai-bien-tren-song-nu-streamer-nong-bong-ngay-lap-tuc-nhan-an-cam-kenh.js'
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
const title = 'Khoe cơ thể ướt át tại bãi biển trên sóng, nữ streamer nóng bỏng ngay lập tức nhận án cấm kênh';
const author = 'A Đồi';
const source = 'Pháp luật và bạn đọc';
const timestamp = '28/08/2021 08:34 AM';
const description = 'Đây có thể nói là pha câu view "đi vào lòng đất" của nữ streamer này.';
const link = 'khoe-co-the-uot-at-tai-bai-bien-tren-song-nu-streamer-nong-bong-ngay-lap-tuc-nhan-an-cam-kenh';
const tagparam = ["GÁI XINH","HOT GIRL","STREAMER","NỮ STREAMER",];
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

export default function page_20210828083426() {
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

<p>Trong những năm vừa qua thì dạng nội dung IRL (In Real Life) đang phát triển cực kỳ mạnh mẽ trên các nền tảng phát sóng trực tiếp. Không dừng lại ở việc chơi game, các <strong>streamer</strong> giờ đây có thể làm đủ mọi thứ trên sóng như đi du lịch, ăn uống, nói chuyện với khán giả... miễn là thu hút được lượng người xem lớn. Mặc dù vậy dạng nội dung này lại đang dần bị một vài <strong>nữ streamer</strong> lợi dụng để câu view một cách khá phản cảm.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/22/photo-1-16296047086101010892946.jpg' alt="1, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER," note='Jinnytty - Nữ nhân vật chính trong câu chuyện'/>
<p>Đơn cử như trường hợp của nữ <strong>streamer</strong> Jinnytty thì cô nàng đã bị nền tảng Twitch cấm kênh vì cố tình khoe thân trên sóng. Cụ thể thì vào ngày 20/8 vừa qua, Jinnytty đã bắt đầu buổi livestream của mình tại một bãi biển như một phần trong chuyến đi du lịch. Đầu tiên thì cô nàng đặt chân của mình xuống dưới nước rồi dần dần tiến về phía biển và để cơ thể của mình ướt hoàn toàn. Điều này đã khiến chiếc áo của cô nàng dính lấy cơ thể và khoe trọn body trên sóng trực tiếp.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/22/photo-1-16296047354801403211399.jpg' alt="2, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER," note='Màn khoe thân khiến Jinnytty bị cấm sóng'/>
<p>Hành động này đã khiến cho kênh chat lúc đó trở nên cực kỳ phấn khích khi được chiêm ngưỡng toàn bộ cơ thể ướt át của Jinnytty. Tuy nhiên màn khoe thân của nữ <strong>streamer</strong> này lại vi phạm vào quy tắc cộng đồng của Twitch. Điều này dẫn tới việc kênh livestream của Jinnytty bị cấm ngay lập tức và các video cũng bị xóa hoàn toàn.</p>
<p>Kênh livestream của Jinnytty đã bị "bay màu" khỏi Twitch</p>
<RelationNewsInPage category={category} />
<p>Đây không phải là lần đầu tiên nữ <strong>streamer</strong> này gặp rắc rối với nội dung livestream của mình. Cách đây khoảng 1 tháng thì Jinnytty cũng bị khán giả ném đá vì cố tình đặt nước đá vào vòng một trên sóng trực tiếp. Có lẽ vụ việc này không khiến Jinnytty rút ra được kinh nghiệm và tiếp tục có màn cố tình khoe thân như trên. Hậu quả thì chúng ta cũng đã biết là kênh của cô nàng đã bị "bay màu" khỏi Twitch.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/22/cam-1629604797668353568040.jpg' alt="3, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER," note='Cô nàng từng có pha đặt nước đá vào vòng 1 gây tranh cãi cách đây khoảng 1 tháng'/>
<p>Mong rằng đây là một bài đắt giá với nữ <strong>streamer</strong> này và khiến cô nàng không còn lặp lại những nội dung phản cảm trong tương lai.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/22/photo-1-1629604844466191986237.jpg' alt="4, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER," note='Chưa rõ án cấm kênh mà Jinnytty phải nhận có thời hạn bao lâu'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/22/photo-1-16296047438531544690358.jpg' alt="5, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/22/photo-1-16296048830231041391725.jpg' alt="6, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/22/photo-1-16296050998071582757068.jpg' alt="7, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/22/photo-1-1629605116643802142641.jpg' alt="8, GÁI XINH,HOT GIRL,STREAMER,NỮ STREAMER," note=''/>


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
