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
"timestamp": '19/08/2021 12:54 PM',
"title": 'Mặc bikini xuống phố chơi điện tử xèng, nữ streamer từng bị "fan boy lớp 6" quấy rối nhận vô số chỉ trích',
"description": 'Trong quá khứ, cô nàng streamer từng không ít lần có những hành động đầy nhạy cảm như vậy.',
"src": '',
"alt": 'HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,SHIN JAE EUN,NỮ STREAMER,',
"category": 'images',
"date": '19/08/2021',
"time": '12:54 PM',
"link": '/mac-bikini-xuong-pho-choi-dien-tu-xeng-nu-streamer-tung-bi-fan-boy-lop-6-quay-roi-nhan-vo-so-chi-trich',
"zcomponent": 'page_20210819125435',
"filepath": './20210819125435-mac-bikini-xuong-pho-choi-dien-tu-xeng-nu-streamer-tung-bi-fan-boy-lop-6-quay-roi-nhan-vo-so-chi-trich.js'
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
const title = 'Mặc bikini xuống phố chơi điện tử xèng, nữ streamer từng bị "fan boy lớp 6" quấy rối nhận vô số chỉ trích';
const author = 'Mặt Trứng';
const source = 'Pháp luật và bạn đọc';
const timestamp = '19/08/2021 12:54 PM';
const description = 'Trong quá khứ, cô nàng streamer từng không ít lần có những hành động đầy nhạy cảm như vậy.';
const link = 'mac-bikini-xuong-pho-choi-dien-tu-xeng-nu-streamer-tung-bi-fan-boy-lop-6-quay-roi-nhan-vo-so-chi-trich';
const tagparam = ["HOT GIRL","GÁI XINH","CỘNG ĐỒNG MẠNG","STREAMER","SHIN JAE EUN","NỮ STREAMER",];
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

export default function page_20210819125435() {
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

<p>Mặc dù không phải là cái tên quá đình đám, cũng như tham gia hoạt động nhiều trong showbiz, thế nhưng cô nàng <strong>gái xinh</strong> <strong>Shin Jae Eun</strong> hiện vẫn đang là một trong những tên tuổi nhận được nhiều sự chú ý lớn từ phía cư dân mạng Hàn Quốc. Điều này cũng không lạ, khi mà cô nàng này sở hữu một combo cực kỳ hợp mắt với tiêu chí tuyển chọn người yêu của đa phần cánh mày râu Á Đông. Xinh đẹp, Shin Jae Eun cũng tương đối đa tài khi bên cạnh công việc người mẫu ảnh, cô nàng còn có tình yêu đặc biệt to lớn với game cũng như công việc <strong>streamer</strong>. Trong quá khứ, nàng <strong>hot girl</strong> cũng từng không ít lần khiến các fan phải "bỏng mắt" với những màn chơi game đầy quyến rũ của mình.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-1628593083666267539706.jpg' alt='1, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,SHIN JAE EUN,NỮ STREAMER,' note='Shin Jae Eun - cô nàng streamer gợi cảm trong câu chuyện'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-16285926119501958104388.jpg' alt='2, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,SHIN JAE EUN,NỮ STREAMER,' note='Rất tài năng và xinh đẹp, Shin Jae Eun còn đang hoạt động như một hot girl, người mẫu ảnh có tiếng'/>
<p>Chơi game mà cũng quyến rũ thì tất nhiên, phần nhiều nằm ở yếu tố trang phục. Cụ thể, gần như chẳng bao giờ các fan của <strong>Shin Jae Eun</strong> được chứng kiến nữ thần tượng của mình diện những bộ trang phục kín đáo. Nếu như không phải là những bộ bikini nhỏ xíu thì cũng là các bộ đồ trễ nải, cắt trên hở dưới. Ngay cả lúc cô nàng chơi game cũng vậy.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-1628592705610638733924.jpg' alt='3, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,SHIN JAE EUN,NỮ STREAMER,' note='Nếu ai đó còn tò mò về sự gợi cảm khi chơi game của Shin Jae Eun'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-1628592690849737928244.jpg' alt='4, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,SHIN JAE EUN,NỮ STREAMER,' note='Thì đây có lẽ là câu trả lời dễ dàng nhất'/>
<p>Và mới đây, <strong>Shin Jae Eun</strong> lại khiến các fan của mình thêm một lần phải sốc nặng khi bất ngờ xuất hiện tại một trung tâm điện tử xèng, nhưng là với bộ bikini nhỏ xíu siêu nóng bỏng. Theo ý kiến của nhiều người, đây nhiều khả năng lại là một concept của buổi chụp hình nào đó chăng. Nhưng chính Shin Jae Eun đã lên tiếng: "Tôi thích điện tử xèng" - một cách ngắn gọn để khẳng định đây đơn giản chỉ là sở thích của cô nàng.</p>
<RelationNewsInPage category={category} />
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-16285928310091824055570.jpg' alt='5, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,SHIN JAE EUN,NỮ STREAMER,' note='Hình ảnh mới đây của Shin Jae Eun'/>
<p>Tất nhiên, bên cạnh rất nhiều lời khen như mọi khi, không ít người cũng dành cho <strong>Shin Jae Eun</strong> vô số chỉ trích. Cụ thể, không ít người cho rằng cô nàng có thể gợi cảm, sexy ở nhà riêng hay các bối cảnh quay chụp thoải mái, nhưng không nên là ở nơi công cộng như vậy. Nhưng có lẽ, bản thân Shin Jae Eun cũng chẳng quá quan tâm tới những bình luận này khi đây cũng không phải lần đầu tiên cô nàng có những pha "hành động" sốc như vậy. Trên sóng livestream, Shin Jae Eun thậm chí còn từng quấn mỗi tạp dề để dạy nấu ăn cơ mà. Có lẽ đó cũng là lý do mà cô nàng thậm chí còn từng bị một fan lớp 6 gửi tin nhắn quấy rối.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285930681962070411254.jpg' alt='6, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,SHIN JAE EUN,NỮ STREAMER,' note='Cô nàng còn từng quấn mỗi tạp dề lên sóng cơ mà'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-1628593264974434995175.jpg' alt='7, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,SHIN JAE EUN,NỮ STREAMER,' note='Shin Jae Eun từng có thời điểm bó bột vẫn mặc bikini cơ mà'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-1628593130567346185441.jpg' alt='8, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,STREAMER,SHIN JAE EUN,NỮ STREAMER,' note='Shin Jae Eun cũng từng gây ồn ào khi công khai tin nhắn quấy rối được cho là từ một fan boy lớp 6'/>


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
