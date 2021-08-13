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
"timestamp": '13/08/2021 09:28 AM',
"title": 'Bỏ nghề streamer đi quảng cáo nội y, cô gái xinh đẹp bất ngờ lột xác, tái xuất siêu gợi cảm khiến người xem bất ngờ',
"description": 'Màn tái xuất của cô nàng streamer này khiến không ít người ngỡ ngàng.',
"src": '',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BITNARA,',
"category": 'images',
"date": '13/08/2021',
"time": '09:28 AM',
"link": '/bo-nghe-streamer-di-quang-cao-noi-y-co-gai-xinh-dep-bat-ngo-lot-xac-tai-xuat-sieu-goi-cam-khien-nguoi-xem-bat-ngo',
"zcomponent": 'page_20210813092816',
"filepath": './20210813092816-bo-nghe-streamer-di-quang-cao-noi-y-co-gai-xinh-dep-bat-ngo-lot-xac-tai-xuat-sieu-goi-cam-khien-nguoi-xem-bat-ngo.js'
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
const title = 'Bỏ nghề streamer đi quảng cáo nội y, cô gái xinh đẹp bất ngờ lột xác, tái xuất siêu gợi cảm khiến người xem bất ngờ';
const author = 'Mặt Trứng';
const source = 'Pháp luật và bạn đọc';
const timestamp = '13/08/2021 09:28 AM';
const description = 'Màn tái xuất của cô nàng streamer này khiến không ít người ngỡ ngàng.';
const link = 'bo-nghe-streamer-di-quang-cao-noi-y-co-gai-xinh-dep-bat-ngo-lot-xac-tai-xuat-sieu-goi-cam-khien-nguoi-xem-bat-ngo';
const tagparam = ["GÁI XINH","HOT GIRL","CỘNG ĐỒNG MẠNG","STREAMER","NỮ STREAMER","BITNARA",];
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

export default function page_20210813092816() {
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

<p>Ở thời điểm hiện tại, sẽ chẳng quá nếu nói rằng các <strong>streamer</strong>, YouTuber nổi tiếng cũng có tầm ảnh hưởng chẳng khác gì các ngôi sao showbiz vậy. Cũng có fan, anti fan và thậm chí là đôi khi còn bị soi mói, chịu nhiều sức ép nặng nề hơn hẳn với công việc chẳng khác gì nghề làm dâu trăm họ. Đơn cử như trường hợp của <strong>Bitnara</strong>, một <strong>nữ streamer</strong> - YouTuber nổi tiếng dưới đây cũng đang khiến cho <strong>cộng đồng mạng</strong> cảm thấy khá đau đầu. Cụ thể, khi còn chăm chỉ phát sóng, Bitnara gặp phải khá nhiều gạch đá nhưng tới khi cô nàng hé lộ dự định giải nghệ, những chỉ trích gần như biến mất mà chỉ còn lại sự níu kéo từ phía fan hâm mộ.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-1628338845821341964555.jpg' alt='1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BITNARA,' note='Bitnara là một trong những cô nàng streamer xinh đẹp nhất tại Hàn Quốc'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-1628338859528574770049.jpg' alt='2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BITNARA,' note='Chỉ tiếc rằng nàng hot girl đã giải nghệ và đi theo con đường người mẫu ảnh'/>
<p>Bẵng đi một thời gian, với chỉ đôi lần thực hiện các clip Lookbook, gần như ai cũng nhìn nhận <strong>Bitnara</strong> như một trong những <strong>hot girl</strong>, người mẫu ảnh nổi tiếng thay vì <strong>streamer</strong> như trước. Tuy vậy, mới đây thôi, nàng hot girl này vừa có màn bất ngờ tái xuất sóng livestream và đặc biệt, mang tới một trang phục hầu gái không thể ấn tượng, gợi cảm hơn được nữa.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-162833944651118472453.jpg' alt='3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BITNARA,' note='Bộ trang phục hầu gái cùng chiếc chổi lâu nhà cực kỳ gợi cảm của Bitnara'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/7/2266436398886610883889591404489087864526632n-1628339485613854361437.jpg' alt='4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BITNARA,' note='Khiến cho khá nhiều người phải trầm trồ trước nhan sắc thăng hạng của cô nàng hot girl'/>
<p>Có vẻ như theo thời gian, nhan sắc cũng như sự gợi cảm của <strong>Bitnara</strong> ngày càng thăng tiến thì phải. Nếu như nhìn lại thời còn trên sóng livestream, có thể thấy nàng <strong>hot girl</strong> đã gần như lột xác vậy.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/7/page-16283396214311297596010.jpg' alt='5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BITNARA,' note='Nhan sắc của cô nàng Bitnara thời còn là streamer'/>
<RelationNewsInPage category={category} />
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-1628339638638224139872.jpg' alt='6, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BITNARA,' note='Còn đây là nhan sắc thăng hạng đáng nể ở thời điểm hiện tại'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-1628339675438911245348.jpg' alt='7, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BITNARA,' note='Cả về độ gợi cảm, nóng bỏng, Bitnara cũng chẳng thua kém tên tuổi nào'/>
<p>Tất nhiên, thời gian gần đây, <strong>Bitnara</strong> tương đối bận rộn với công việc mẫu ảnh của mình. Tuy vậy, trong thời gian dịch bệnh đang diễn biến phức tạp, cô nàng <strong>hot girl</strong> cũng rất nhanh trí trở về với nghề sáng tạo nội dung, nhưng là YouTuber thay vì <strong>streamer</strong> như trước. Có vẻ như Bitnara vẫn chưa quên được những áp lực cũng như sự khó khăn mà cô nàng gặp phải trong quá khứ thì phải. Cũng hợp lý, khi mà công việc YouTuber đang được cô nàng vận hành tương đối ổn, đặc biệt là với những clip Lookbook cả triệu view của mình.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-16283398768471519493159.jpg' alt='8, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BITNARA,' note='Bên cạnh công việc người mẫu ảnh'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-16283398231941961990118.jpg' alt='9, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BITNARA,' note='Kim Bitnara cũng đang cực kỳ thành công với những clip Lookbook của mình'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-16283399391212095373279.jpg' alt='10, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,STREAMER,NỮ STREAMER,BITNARA,' note='Trên trang cá nhân, cô nàng cũng thường xuyên đăng tải những hình ảnh nóng bỏng'/>


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
