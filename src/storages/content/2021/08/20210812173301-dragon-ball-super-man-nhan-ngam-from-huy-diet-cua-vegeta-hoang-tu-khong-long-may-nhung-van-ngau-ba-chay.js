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
"timestamp": '12/08/2021 05:33 PM',
"title": 'Dragon Ball Super: Mãn nhãn ngắm "from hủy diệt" của Vegeta, hoàng tử không lông mày nhưng vẫn ngầu bá cháy',
"description": 'Fan Vegeta cuối cùng cũng đợi được đến ngày "anh Rau" tỏa sáng rồi!',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-162878158453327091717.jpg',
"alt": 'DRAGON BALL SUPER,DRAGON BALL,VEGETA,SUPER SAIYAN,VEGETA FROM HỦY DIỆT,',
"category": 'games',
"date": '12/08/2021',
"time": '05:33 PM',
"link": '/dragon-ball-super-man-nhan-ngam-from-huy-diet-cua-vegeta-hoang-tu-khong-long-may-nhung-van-ngau-ba-chay',
"zcomponent": 'page_20210812173301',
"filepath": './20210812173301-dragon-ball-super-man-nhan-ngam-from-huy-diet-cua-vegeta-hoang-tu-khong-long-may-nhung-van-ngau-ba-chay.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = 'games';
const categoryLink = '/games';
const title = 'Dragon Ball Super: Mãn nhãn ngắm "from hủy diệt" của Vegeta, hoàng tử không lông mày nhưng vẫn ngầu bá cháy';
const author = 'Mẹ Sề';
const source = 'Pháp luật và bạn đọc';
const timestamp = '12/08/2021 05:33 PM';
const description = 'Fan Vegeta cuối cùng cũng đợi được đến ngày "anh Rau" tỏa sáng rồi!';
const link = 'dragon-ball-super-man-nhan-ngam-from-huy-diet-cua-vegeta-hoang-tu-khong-long-may-nhung-van-ngau-ba-chay';
const tagparam = ["DRAGON BALL SUPER","DRAGON BALL","VEGETA","SUPER SAIYAN","VEGETA FROM HỦY DIỆT",];
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

export default function page_20210812173301() {
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

<p>Bước vào thế giới <strong>Dragon Ball</strong> có ai lại không bị ấn tượng khi chứng kiến những nhân vật chính mang dòng máu Saiyan biến hình theo từng cấp độ. Mỗi khi lên được một cấp mới, các <strong>Super Saiyan</strong> của chúng ta đều có sự thay đổi nhất định về hình dạng như cơ thể cường tráng hơn hay tóc chuyển màu chẳng hạn.</p>
<p>Trước đây đã có rất nhiều cấp độ <strong>Super Saiyan</strong> xuất hiện, tuy nhiên chưa có trạng thái nào thật sự mang đặc trưng riêng của <strong>Vegeta</strong>. Thế nhưng bây giờ thời thế đã khác, trong <strong><strong>Dragon Ball</strong> Super</strong> chap 74, Vegeta đã bộc lộ hình thức mới của mình mà Goku không hề có. Khi Vegeta triển khai hình dạng mới của mình, Goku cảm thấy Ki của Vegeta tương tự như God Ki nhưng có điều gì đó khác với mọi khi. Anh nhận xét rằng: "Ki của Vegeta, có vẻ khá giống God Ki nhưng lại không hề giống với bất cứ God Ki nào từ trước đến nay".</p>
<p>Theo ý kiến của nhiều fan, hình dạng mới của <strong>Vegeta</strong> là kết quả của việc Vegeta sử dụng sức mạnh của Thần Hủy Diệt, bởi trước đó anh đã được đào tạo bởi Beerus. Mà trong <strong><strong>Dragon Ball</strong> Super</strong> chap 74, Vegeta còn nói với Granolah rằng Thần Hủy Diệt đã dạy anh "sức mạnh xuất phát từ bản năng là hoàn toàn không có giới hạn".</p>
<RelationNewsInPage category={category} />
<p>Khi ở trạng thái hủy diệt, <strong>Vegeta</strong> trong chap 74 biến đổi với cơ bắp lớn hơn, rõ ràng hơn, tóc nhọn hơn và mất chân mày, có một hào quang hủy diệt màu tím bao quanh. Dường như Vegeta cũng trở nên mạnh mẽ hơn trước gấp bội và nhận được Sức mạnh Hủy diệt. Bằng chứng là theo những thông tin mới nhất ở chap 75, Vegeta đã có một màn "bón hành" cho Granolah xuất sắc mà hắn không thể phản kháng.</p>
<p>Và bây giờ hình dạng của <strong>Vegeta</strong> khi ở trạng thái hủy diệt đang khiến các fan rất hứng thú. Thậm chí đã có nhiều fan art về from mới của hoàng tử Saiyan ra đời. Dưới đây mời các bạn cùng ngắm sự ngầu của Vegeta trong dạng sức mạnh mới của mình nhé! Ngầu cực kỳ luôn đấy!</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-162878158453327091717.jpg' alt='1, DRAGON BALL SUPER,DRAGON BALL,VEGETA,SUPER SAIYAN,VEGETA FROM HỦY DIỆT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287816064221200367977.jpeg' alt='2, DRAGON BALL SUPER,DRAGON BALL,VEGETA,SUPER SAIYAN,VEGETA FROM HỦY DIỆT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-1628781612771932193081.jpg' alt='3, DRAGON BALL SUPER,DRAGON BALL,VEGETA,SUPER SAIYAN,VEGETA FROM HỦY DIỆT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287816202261927118641.jpg' alt='4, DRAGON BALL SUPER,DRAGON BALL,VEGETA,SUPER SAIYAN,VEGETA FROM HỦY DIỆT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628781629373827305223.jpg' alt='5, DRAGON BALL SUPER,DRAGON BALL,VEGETA,SUPER SAIYAN,VEGETA FROM HỦY DIỆT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628781637680313763302.jpg' alt='6, DRAGON BALL SUPER,DRAGON BALL,VEGETA,SUPER SAIYAN,VEGETA FROM HỦY DIỆT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287816446841462986545.jpg' alt='7, DRAGON BALL SUPER,DRAGON BALL,VEGETA,SUPER SAIYAN,VEGETA FROM HỦY DIỆT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628781651396947251513.jpg' alt='8, DRAGON BALL SUPER,DRAGON BALL,VEGETA,SUPER SAIYAN,VEGETA FROM HỦY DIỆT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287816604751462069770.jpg' alt='9, DRAGON BALL SUPER,DRAGON BALL,VEGETA,SUPER SAIYAN,VEGETA FROM HỦY DIỆT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-1628781684220797275555.jpg' alt='10, DRAGON BALL SUPER,DRAGON BALL,VEGETA,SUPER SAIYAN,VEGETA FROM HỦY DIỆT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628781717829505151576.jpg' alt='11, DRAGON BALL SUPER,DRAGON BALL,VEGETA,SUPER SAIYAN,VEGETA FROM HỦY DIỆT,' note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287817399972051430316.jpg' alt='12, DRAGON BALL SUPER,DRAGON BALL,VEGETA,SUPER SAIYAN,VEGETA FROM HỦY DIỆT,' note=''/>


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
