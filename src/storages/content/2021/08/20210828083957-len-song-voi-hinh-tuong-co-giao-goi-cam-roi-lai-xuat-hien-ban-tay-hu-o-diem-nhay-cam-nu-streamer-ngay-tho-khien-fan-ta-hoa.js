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
"timestamp": '28/08/2021 08:39 AM',
"title": 'Lên sóng với hình tượng cô giáo gợi cảm, rồi lại xuất hiện "bàn tay hư" ở điểm nhạy cảm, nữ streamer ngây thơ khiến fan tá hỏa',
"description": 'Hình ảnh của cô nàng streamer đang thu hút được sự chú ý của rất nhiều người.',
"src": '',
"alt": 'HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,NỮ STREAMER,STREAMER,HAN-KYUNG,',
"category": 'images',
"date": '28/08/2021',
"time": '08:39 AM',
"link": '/len-song-voi-hinh-tuong-co-giao-goi-cam-roi-lai-xuat-hien-ban-tay-hu-o-diem-nhay-cam-nu-streamer-ngay-tho-khien-fan-ta-hoa',
"zcomponent": 'page_20210828083957',
"filepath": './20210828083957-len-song-voi-hinh-tuong-co-giao-goi-cam-roi-lai-xuat-hien-ban-tay-hu-o-diem-nhay-cam-nu-streamer-ngay-tho-khien-fan-ta-hoa.js'
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
const title = 'Lên sóng với hình tượng cô giáo gợi cảm, rồi lại xuất hiện "bàn tay hư" ở điểm nhạy cảm, nữ streamer ngây thơ khiến fan tá hỏa';
const author = 'Mặt Trứng';
const source = 'Pháp luật và bạn đọc';
const timestamp = '28/08/2021 08:39 AM';
const description = 'Hình ảnh của cô nàng streamer đang thu hút được sự chú ý của rất nhiều người.';
const link = 'len-song-voi-hinh-tuong-co-giao-goi-cam-roi-lai-xuat-hien-ban-tay-hu-o-diem-nhay-cam-nu-streamer-ngay-tho-khien-fan-ta-hoa';
const tagparam = ["HOT GIRL","GÁI XINH","CỘNG ĐỒNG MẠNG","NỮ STREAMER","STREAMER","HAN-KYUNG",];
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

export default function page_20210828083957() {
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

<p>Nhân vật chính trong câu chuyện lần này là <strong>Han-kyung</strong>, một <strong>nữ <strong>streamer</strong></strong> có thể nói là vô cùng gợi cảm và xinh đẹp trên AfreecaTV. Không chơi game giỏi, nói chuyện cũng chẳng duyên dáng, thế nhưng chỉ riêng nhan sắc của Han-kyung đã đủ để đáp ứng phần nhìn từ phía đông đảo người xem rồi. Sở hữu gương mặt rất ngây thơ, thế nhưng chẳng ai ngờ, mới đây thôi, cô nàng Han-kyung lại vừa có màn lột xác vô cùng ấn tượng và táo bạo trên sóng.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/17/photo-1-1629197119254331812160.jpg' alt="1, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,NỮ STREAMER,STREAMER,HAN-KYUNG," note='Han-kyung - cô nàng streamer sở hữu nhan sắc mỹ miều bậc nhất tại Hàn Quốc'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/17/photo-1-1629197112253138125812.jpg' alt="2, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,NỮ STREAMER,STREAMER,HAN-KYUNG," note='Nữ streamer được cho là có gương mặt thánh thiện, xinh như búp bê'/>
<p>Theo đó, trong lần lên sóng mới nhất, <strong>Han-kyung</strong> khiến không ít fan phải bất ngờ khi rũ bỏ hoàn toàn hình tượng ngây thơ, trong sáng trước đây của mình. Thay vào đó, với bộ áo sơ mi trắng trong suốt, cộng thêm cặp kính đầy tri thức và khác biệt, nàng <strong>hot girl</strong> bất ngờ cosplay thành một cô giáo siêu gợi cảm khiến không ít fan phải chảy máu mũi. Đáng nói hơn, bộ sơ mi trong suốt còn khiến cho Han-kyung khoe được nội y và toàn bộ đôi gò bồng đảo bốc lửa của mình.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/17/photo-1-1629197413274906097354.jpg' alt="3, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,NỮ STREAMER,STREAMER,HAN-KYUNG," note='Hình ảnh trên sóng đầy táo bạo mới đây của Han-kyung'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/17/photo-1-16291975215552135591686.jpg' alt="4, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,NỮ STREAMER,STREAMER,HAN-KYUNG," note='So với những hình ảnh đằm thắm, dễ thương này thì quả là lột xác hoàn toàn'/>
<p>Tất nhiên, hiệu quả thu về đối với <strong>Han-kyung</strong> là tương đối khả quan khi mà ngay trong phiên phát sóng ấy, cô nàng đã thu hút tới hàng chục ngàn người theo dõi. Thậm chí, trong cả clip đăng sau đó trên YouTube, lượng view thu về cũng là con số đáng nể vì quả thật, hiếm khi nào mà Han-kyung, nữ thần trong mắt của nhiều fan lại tỏ ra táo bạo tới vậy. Trên trang cá nhân, mặc dù cũng khá thường xuyên quảng cáo cho các nhãn hàng, nhưng Han-kyung vẫn chỉ giữ sự gợi cảm ở mức nhất định chứ hiếm khi thoải mái như hình tượng giáo viên kia.</p>
<RelationNewsInPage category={category} />
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/17/photo-1-1629197690933576463681.jpg' alt="5, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,NỮ STREAMER,STREAMER,HAN-KYUNG," note='Trên trang cá nhân, cô nàng streamer đôi khi cũng quảng cáo cho một vài nhãn hàng'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/17/photo-1-1629197675347345315421.jpg' alt="6, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,NỮ STREAMER,STREAMER,HAN-KYUNG," note='Nhưng cũng luôn tiết chế hình ảnh và sự gợi cảm của mình ở một mức nhất định'/>
<p>Tuy nhiên, cũng phải nhấn mạnh một chi tiết là theo thời gian, độ gợi cảm của <strong>Han-kyung</strong> cũng như sự táo bạo trong phong cách lên sóng của cô nàng đang ngày càng tăng lên. Bằng chứng là sau đó, cô nàng lại tiếp tục thêm một lần nữa lên sóng với thời trang "trong suốt". Chưa kể, với màn vũ đạo sau đó, cô nàng còn khiến fan hoảng hồn khi bất ngờ xuất hiện một bàn tay hư khuất sau camera được đặt ở vị trí vô cùng nhạy cảm. Dù nhìn qua thì có vẻ là</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/17/photo-1-1629197854291464056336.gif' alt="7, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,NỮ STREAMER,STREAMER,HAN-KYUNG," note='Màn lên sóng tiếp đó của Han-kyung cũng nóng không kém'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/17/photo-1-162919823547845777135.gif' alt="8, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,NỮ STREAMER,STREAMER,HAN-KYUNG," note='Bàn tay hư trên sóng của nàng streamer'/>


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
