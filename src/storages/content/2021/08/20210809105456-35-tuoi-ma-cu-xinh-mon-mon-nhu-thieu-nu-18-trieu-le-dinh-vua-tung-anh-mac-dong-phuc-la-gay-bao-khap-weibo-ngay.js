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
"timestamp": '09/08/2021 10:54 AM',
"title": '35 tuổi mà cứ xinh mơn mởn như thiếu nữ 18, Triệu Lệ Dĩnh vừa tung ảnh mặc đồng phục là gây bão khắp Weibo ngay',
"description": 'Trở thành diễn viên trong MV ca nhạc của nam ca sĩ Trương Kiệt, Triệu Lệ Dĩnh khiến netizen xuýt xoa với nét đẹp trong trẻo, đáng yêu.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/9/photo-1-1628513974213601470298.jpg',
"alt": 'triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,vóc dáng của sao,body của sao,',
"category": 'stars',
"date": '09/08/2021',
"time": '10:54 AM',
"link": '/35-tuoi-ma-cu-xinh-mon-mon-nhu-thieu-nu-18-trieu-le-dinh-vua-tung-anh-mac-dong-phuc-la-gay-bao-khap-weibo-ngay',
"zcomponent": 'page_20210809105456',
"filepath": './20210809105456-35-tuoi-ma-cu-xinh-mon-mon-nhu-thieu-nu-18-trieu-le-dinh-vua-tung-anh-mac-dong-phuc-la-gay-bao-khap-weibo-ngay.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = 'stars';
const categoryLink = '/stars';
const title = '35 tuổi mà cứ xinh mơn mởn như thiếu nữ 18, Triệu Lệ Dĩnh vừa tung ảnh mặc đồng phục là gây bão khắp Weibo ngay';
const author = 'NHÃ AN,';
const source = 'Trí Thức Trẻ';
const timestamp = '09/08/2021 10:54 AM';
const description = 'Trở thành diễn viên trong MV ca nhạc của nam ca sĩ Trương Kiệt, Triệu Lệ Dĩnh khiến netizen xuýt xoa với nét đẹp trong trẻo, đáng yêu.';
const link = '35-tuoi-ma-cu-xinh-mon-mon-nhu-thieu-nu-18-trieu-le-dinh-vua-tung-anh-mac-dong-phuc-la-gay-bao-khap-weibo-ngay';
const tagparam = ["triệu lệ dĩnh","Mỹ nhân Hoa ngữ","nhan sắc của sao","vóc dáng của sao","body của sao",];
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

export default function page_20210809105456() {
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

<p>Tối ngày hôm nay (9/8), dự án âm nhạc mang tên Xứng Đáng Với Điều Tốt Hơn của nam ca sĩ Trương Kiệt chính thức ra mắt. Trước giờ G, hàng loạt ảnh hậu trường của <strong>Triệu Lệ Dĩnh</strong> khi đảm nhiệm vai diễn trong dự án này được trình làng. Bộ ảnh ngay lập tức nhận được sự quan tâm và chú ý của người hâm mộ.</p>
<p>Xuất hiện với váy đồng phục cùng áo trắng tinh khôi, vợ cũ Phùng Thiệu Phong khiến netizen xuýt xoa với visual hack tuổi thần sầu, chẳng khác nào thiếu nữ mười chín đôi mươi. Hậu ly hôn, nhan sắc của người đẹp "lên hương" ngút ngàn, các đường nét trở nên hài hoà, khí chất cũng được nâng tầm hơn rất nhiều.</p>
<p><strong>Triệu Lệ Dĩnh</strong> "đốn tim" fan với loạt ảnh hậu trường của dự án âm nhạc mang tên Xứng Đáng Với Điều Tốt Hơn</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/9/photo-1-1628514224129704543291.jpg' alt='1, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,vóc dáng của sao,body của sao,' note='Cận cảnh nhan sắc người đẹp họ Triệu. Ở tuổi 35, nữ diễn viên gây thương nhớ với nét trong sáng, tinh khôi'/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/9/photo-1-1628514232067713573904.jpg' alt='2, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,vóc dáng của sao,body của sao,' note='Không thể phủ nhận rằng bộ ảnh này của Triệu Lệ Dĩnh đem lại cảm giác vô cùng khác biệt. Nếu như trước đây, người đẹp luôn chú trọng phong cách sang chảnh, đẳng cấp,...'/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/9/photo-1-1628514210658717799157.jpg' alt='3, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,vóc dáng của sao,body của sao,' note='.... thì nay, Triệu Lệ Dĩnh lại dịu dàng, ngọt ngào không kém phần năng động'/>
<p>Trên MXH, netizen xứ Trung dành nhiều lời ngợi khen cho nàng "Sam Sam": "Đúng là nữ thần của lòng tôi", "<strong>Triệu Lệ Dĩnh</strong> trẻ quá, tôi thực sự rất thích tạo hình này", "Như thiếu nữ còn ngồi trên ghế nhà trường", "Bà mẹ bỉm sữa này đỉnh ghê", "Ai nghĩ Triệu Lệ Dĩnh đã 35 tuổi rồi cơ chứ"...</p>
<RelationNewsInPage category={category} />
<p>Vóc dáng mi nhon, nhỏ nhắn của nàng "Sam Sam" càng khiến cho <strong>Triệu Lệ Dĩnh</strong> dễ dàng hoá thân vào những vai diễn học đường</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/9/photo-1-16285142496361054658617.jpg' alt='4, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,vóc dáng của sao,body của sao,' note='Cứ xinh mãi thế này, Triệu Lệ Dĩnh lại càng có thêm đông fan hơn mà thôi'/>
<p>Liệu rằng Phùng Thiệu Phong có tiếc nuối khi nhìn những khung hình này không?</p>
<p>Nguồn: Weibo</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/9/photo-1-1628513974213601470298.jpg' alt='5, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,vóc dáng của sao,body của sao,' note=''/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/9/photo-1-1628514241890520677387.jpg' alt='6, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,vóc dáng của sao,body của sao,' note=''/>
<ContentImage src='https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/photo-1-16285142614721135728855.jpg' alt='7, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,vóc dáng của sao,body của sao,' note=''/>
<ContentImage src='https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/photo-1-1628514045903348624944.jpg' alt='8, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,vóc dáng của sao,body của sao,' note=''/>
<ContentImage src='https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/photo-1-1628514045903348624944.jpg' alt='9, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,vóc dáng của sao,body của sao,' note=''/>


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
