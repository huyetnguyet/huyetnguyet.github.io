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
"timestamp": '28/08/2021 08:42 AM',
"title": 'Ra mắt tác phẩm kỷ niệm hơn 3 tiếng, Yua Mikami vẫn thua xa đàn em vừa xấu vừa kém gợi cảm',
"description": 'Yua Mikami thường được đánh giá là hot girl top đầu, thế nhưng những bộ phim của cô nàng chưa hẳn đã có doanh thu quá vượt trội.',
"src": '',
"alt": 'GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YUA MIKAMI,PHIM AV,AV,PHIM 18+,',
"category": 'images',
"date": '28/08/2021',
"time": '08:42 AM',
"link": '/ra-mat-tac-pham-ky-niem-hon-3-tieng-yua-mikami-van-thua-xa-dan-em-vua-xau-vua-kem-goi-cam',
"zcomponent": 'page_20210828084235',
"filepath": './20210828084235-ra-mat-tac-pham-ky-niem-hon-3-tieng-yua-mikami-van-thua-xa-dan-em-vua-xau-vua-kem-goi-cam.js'
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
const title = 'Ra mắt tác phẩm kỷ niệm hơn 3 tiếng, Yua Mikami vẫn thua xa đàn em vừa xấu vừa kém gợi cảm';
const author = 'Mặt Trứng';
const source = 'Pháp luật và bạn đọc';
const timestamp = '28/08/2021 08:42 AM';
const description = 'Yua Mikami thường được đánh giá là hot girl top đầu, thế nhưng những bộ phim của cô nàng chưa hẳn đã có doanh thu quá vượt trội.';
const link = 'ra-mat-tac-pham-ky-niem-hon-3-tieng-yua-mikami-van-thua-xa-dan-em-vua-xau-vua-kem-goi-cam';
const tagparam = ["GÁI XINH","HOT GIRL","CỘNG ĐỒNG MẠNG","YUA MIKAMI","PHIM AV","AV","PHIM 18+",];
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

export default function page_20210828084235() {
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

<p>Nhắc tới ngành công nghiệp <strong>AV</strong> Nhật Bản, chắc hẳn nhiều người sẽ liên tưởng ngay tới <strong>Yua Mikami</strong> - nàng <strong>hot girl</strong> xinh đẹp, nổi tiếng và được nhiều người biết tới bậc nhất. Thậm chí, ngay cả những người vốn không phải là fan cứng của các bộ <strong>phim AV</strong> có lẽ cũng chẳng xa lạ với cô nàng Yua này. Ấy thế nhưng, không phải vì cứ được fan hâm mộ tung hô là top 1, mỹ nữ được ưa thích nhất mà các bộ phim của Yua Mikami lúc nào cũng có doanh thu trên đỉnh đâu. Đành rằng cũng rất ăn khách, thế nhưng gần như chưa một lần các tác phẩm của Yua Mikami leo lên đầu của bảng xếp hạng. Nửa đầu năm 2021 này cũng không phải ngoại lệ, dẫu cho lần này nàng hot girl đầu tư đến mức làm hẳn một bộ phim hơn 3 tiếng đánh dấu cột mốc kỷ niệm 6 năm làm nghề.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/20/photo-1-1629429962012576231337.jpg' alt="1, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YUA MIKAMI,PHIM AV,AV,PHIM 18+," note='Yua Mikami - nàng hot girl nổi tiếng nhất ngành công nghiệp AV Nhật Bản'/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/20/f42ab009a480e3896216444d2efcbc50-1629430745727370063544.png' alt="2, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YUA MIKAMI,PHIM AV,AV,PHIM 18+," note='Nhưng lại chẳng mấy khi đạt doanh thu cao nhất'/>
<p>Theo đó, sau khi năm 2021 trôi qua một nửa, rất nhiều những trang web chuyên về <strong>phim 18+</strong> ở Nhật đã công bố bảng xếp hạng doanh thu hai quý đầu năm của mình. Chắc chắn, rất nhiều người đinh ninh rằng không ai khác, cái tên top 1 phải thuộc về <strong>Yua Mikami</strong>. Nhưng tất cả đã nhầm. Nằm vững vàng trên đỉnh của bảng xếp hạng lại là Kazuka Matsumoto, một cô nàng mà xét về cả gương mặt, hình thể lẫn sự gợi cảm chắc chắn đều thua kém Yua cả một khoảng cách xa. Thế mới thấy, thị hiếu về cái đẹp của mỗi người là khác nhau phải không nào.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/screenshot12-1629430799020653400506.png' alt="3, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YUA MIKAMI,PHIM AV,AV,PHIM 18+," note='Nhan sắc rất bình thường của Matsumoto'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/photo-1-1629430816623211976927.jpeg' alt="4, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YUA MIKAMI,PHIM AV,AV,PHIM 18+," note='Nhưng ai mà ngờ được cô nàng này lại là người có doanh thu cao nhất nửa đầu năm 2021 chứ'/>
<RelationNewsInPage category={category} />
<p>Thậm chí, <strong>Yua Mikami</strong> chỉ đứng ở top 3 trong bảng xếp hạng doanh thu lần này. Bên cạnh Matsumoto, cô nàng cũng còn thua cả Hana Himesaki - một hậu bối khác trong nghề. Tuy nhiên, xét một cách công tâm thì Hana cũng đang là một gương mặt trẻ khá tiềm năng, nên việc Yua thua phần nào trước cái tên đang lên này cũng dễ chấp nhận.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/-16294311643661050891761.jpg' alt="5, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YUA MIKAMI,PHIM AV,AV,PHIM 18+," note='Hana Himesaki - cô nàng hot girl đứng top 2 trong bảng doanh thu'/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/-1629431248593608122749.jpg' alt="6, GÁI XINH,HOT GIRL,CỘNG ĐỒNG MẠNG,YUA MIKAMI,PHIM AV,AV,PHIM 18+," note='Cũng là một gương mặt đang lên trong ngành công nghiệp AV ở thời điểm hiện tại'/>
<p>Thế mới thấy, không ai phủ nhận <strong>Yua Mikami</strong> là một cái tên cực kỳ hào nhoáng, bóng bẩy thậm chí còn có sự nghiệp vươn xa ra khỏi ngành công nghiệp <strong>AV</strong> Nhật Bản. Thế nhưng, khi đọ về độ kiếm tiền bằng "nghề chính", Yua vẫn còn chưa bằng các đàn em, hậu bối của mình đâu.</p>


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
