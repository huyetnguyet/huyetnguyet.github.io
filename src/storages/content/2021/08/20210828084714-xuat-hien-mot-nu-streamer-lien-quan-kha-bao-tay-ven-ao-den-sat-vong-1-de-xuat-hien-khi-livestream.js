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
"timestamp": '28/08/2021 08:47 AM',
"title": 'Xuất hiện một nữ streamer Liên Quân khá bạo, tay vén áo đến sát “vòng 1” để xuất hiện khi livestream',
"description": 'Việc nhiều nữ streamer lựa chọn cách xuất hiện gợi cảm và sexy là điều không hề hiếm gặp.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/27/16300347209321645670780-16300347338122089667155.jpg',
"alt": 'LIÊN QUÂN MOBILE,LIÊN QUÂN,STREAMER,GÁI XINH,LIVESTREAM,STREAM,CĐM,CỘNG ĐỒNG MẠNG,MẠNG XÃ HỘI,MXH,',
"category": 'images',
"date": '28/08/2021',
"time": '08:47 AM',
"link": '/xuat-hien-mot-nu-streamer-lien-quan-kha-bao-tay-ven-ao-den-sat-vong-1-de-xuat-hien-khi-livestream',
"zcomponent": 'page_20210828084714',
"filepath": './20210828084714-xuat-hien-mot-nu-streamer-lien-quan-kha-bao-tay-ven-ao-den-sat-vong-1-de-xuat-hien-khi-livestream.js'
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
const title = 'Xuất hiện một nữ streamer Liên Quân khá bạo, tay vén áo đến sát “vòng 1” để xuất hiện khi livestream';
const author = 'Lee Chueng Hee';
const source = 'Pháp luật và bạn đọc';
const timestamp = '28/08/2021 08:47 AM';
const description = 'Việc nhiều nữ streamer lựa chọn cách xuất hiện gợi cảm và sexy là điều không hề hiếm gặp.';
const link = 'xuat-hien-mot-nu-streamer-lien-quan-kha-bao-tay-ven-ao-den-sat-vong-1-de-xuat-hien-khi-livestream';
const tagparam = ["LIÊN QUÂN MOBILE","LIÊN QUÂN","STREAMER","GÁI XINH","LIVESTREAM","STREAM","CĐM","CỘNG ĐỒNG MẠNG","MẠNG XÃ HỘI","MXH",];
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

export default function page_20210828084714() {
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

<p>Việc <strong><strong>stream</strong>er</strong> đã thực sự trở thành một nghề “hot” trong vài năm trở lại đây là điều không cần phải bàn cãi. Đây cũng là lý do mà nhiều bạn trẻ quyết tâm để trở thành một streamer với mong muốn đổi đời. Vừa trở thành người nổi tiếng, vừa có được thu nhập ổn định nếu không muốn nói là “cao” so với mặt bằng chung hiện tại.</p>
<p>Nhưng cái gì cũng có giá của nó, không phải ngẫu nhiên mà khi <strong>live<strong>stream</strong></strong>, các bạn trẻ đã ngay lập tức vụt sáng thành những Độ Mixi hay PewPew… Bởi lẽ trong một thời đại mà “người người <strong>streamer</strong>”, việc chọn ra cho mình một phong cách riêng cũng như khả năng thu hút được người xem ổn định là điều không hề dễ dàng.</p>
<p>Đó cũng chính là lý do mà nhiều <strong><strong>stream</strong>er</strong>, đặc biệt là các nữ streamer lựa chọn phương án “nóng bỏng” để tạo sự chú ý. Đây cũng là lúc mà nhiều chiêu trò sẽ được các công ty đào tạo streamer vạch ra để làm sao “gà nhà” của mình có được điểm nhấn và có được lượng người xem nhiều nhất có thể.</p>
<RelationNewsInPage category={category} />
<p>Bên cạnh tài năng chơi game có thể luyện tập hình hình ảnh cá nhân sẽ là điều được nhiều công ty chú trọng đến trong việc xây dựng cho “gà” của mình. Mới đây, một nữ <strong><strong>stream</strong>er</strong> mới của <strong>Liên Quân</strong> cũng vậy khi cô nàng có những hình ảnh được cho là khá “bạo” trên Fanpage cũng như trang cá nhân của mình. Đặc biệt, có cả hình ảnh phiên bản “vén áo” sát ngực cùng lời bình “Đây là ba cô Anh sẽ thay nhau on sờ trym hằng ngày”.</p>
<p>Tuy nhiên, nếu để ý các <strong>live<strong>stream</strong></strong> của nữ <strong>streamer</strong> <strong>Liên Quân</strong> này thì có thể thấy, khả năng chơi game cũng như phong cách bình luận của cô nàng cũng không đến nỗi quá tệ. Vì vậy có thể hiểu, việc tung lên những hình ảnh có phần nóng bỏng và gợi cảm của bản thân cũng chỉ là một cách để khiến cho <strong>cộng đồng mạng</strong> chú ý hơn mà thôi.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/27/16300347209321645670780-16300347338122089667155.jpg' alt="1, LIÊN QUÂN MOBILE,LIÊN QUÂN,STREAMER,GÁI XINH,LIVESTREAM,STREAM,CĐM,CỘNG ĐỒNG MẠNG,MẠNG XÃ HỘI,MXH," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/27/photo-1-16300347769411430702853.jpg' alt="2, LIÊN QUÂN MOBILE,LIÊN QUÂN,STREAMER,GÁI XINH,LIVESTREAM,STREAM,CĐM,CỘNG ĐỒNG MẠNG,MẠNG XÃ HỘI,MXH," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/27/photo-1-16300347779001218311301.jpg' alt="3, LIÊN QUÂN MOBILE,LIÊN QUÂN,STREAMER,GÁI XINH,LIVESTREAM,STREAM,CĐM,CỘNG ĐỒNG MẠNG,MẠNG XÃ HỘI,MXH," note=''/>


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
