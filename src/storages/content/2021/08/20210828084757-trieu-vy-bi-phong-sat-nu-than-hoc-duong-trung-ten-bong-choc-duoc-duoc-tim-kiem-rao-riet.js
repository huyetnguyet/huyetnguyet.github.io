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
"title": 'Triệu Vy bị "phong sát", nữ thần học đường trùng tên bỗng chốc được được tìm kiếm ráo riết',
"description": 'Cô nữ sinh Triệu Vy đình đám giới học đường, hiện đang chuẩn bị bước vào cuộc sống sinh viên năm 2 của một trường đại học ở TP.HCM.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/27/photo-1-1630061573861854895731.jpg',
"alt": 'HOT GIRL,HỌC ĐƯỜNG,TRIỆU VY,',
"category": 'images',
"date": '28/08/2021',
"time": '08:47 AM',
"link": '/trieu-vy-bi-phong-sat-nu-than-hoc-duong-trung-ten-bong-choc-duoc-duoc-tim-kiem-rao-riet',
"zcomponent": 'page_20210828084757',
"filepath": './20210828084757-trieu-vy-bi-phong-sat-nu-than-hoc-duong-trung-ten-bong-choc-duoc-duoc-tim-kiem-rao-riet.js'
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
const title = 'Triệu Vy bị "phong sát", nữ thần học đường trùng tên bỗng chốc được được tìm kiếm ráo riết';
const author = 'Kayle';
const source = 'Pháp luật và bạn đọc';
const timestamp = '28/08/2021 08:47 AM';
const description = 'Cô nữ sinh Triệu Vy đình đám giới học đường, hiện đang chuẩn bị bước vào cuộc sống sinh viên năm 2 của một trường đại học ở TP.HCM.';
const link = 'trieu-vy-bi-phong-sat-nu-than-hoc-duong-trung-ten-bong-choc-duoc-duoc-tim-kiem-rao-riet';
const tagparam = ["HOT GIRL","HỌC ĐƯỜNG","TRIỆU VY",];
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

export default function page_20210828084757() {
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

<p>Được biết đến là đàn em khóa dưới của <strong>hot girl</strong> Võ Ngọc Trân, Trần Nguyễn <strong>Triệu Vy</strong> (2002) cũng sở hữu nét đẹp ngoại hình nổi bật, cuốn hút người đối diện trong lần gặp gỡ đầu tiên. Thậm chí vì quá xinh đẹp, cô còn bị đồn là phẫu thuật thẩm mỹ khi chưa đến 20 tuổi.</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/27/photo-1-16300615061021308606080.jpg' alt="1, HOT GIRL,HỌC ĐƯỜNG,TRIỆU VY," note='Triệu Vy gây bão MXH với những bức hình diện áo dài trắng.'/>
<p>Nói về cái tên gây chú ý, <strong>Triệu Vy</strong> từng lý giải được mẹ đặt tên này vì quá đam mê phim Hoàn Châu Cách Cách. Có điều so với phiên bản sao Trung, cô nữ sinh Việt sở hữu sống mũi cao và thẳng, gương mặt góc cạnh, đặc biệt dáng chuẩn người mẫu, gợi cảm khiến người xem “bỏng mắt”.</p>
<p><strong>Hot girl</strong> 2K này đã khoe trọn body hoàn hảo S-line vạn người mê dù nữ sinh này mới chỉ 19 tuổi.</p>
<RelationNewsInPage category={category} />
<p>Sinh ra trong những gia đình khá giả, bố mẹ <strong>Triệu Vy</strong> đều là các doanh nhân thành đạt. Sau khi tốt nghiệp THPT, dù bố mẹ hướng đi theo con đường du học thế nhưng với tình hình dịch bệnh ở nước ngoài, cô nàng chọn tiếp tục sự nghiệp học hành với một trường đại học ở TP.HCM. Cô nàng vừa hoàn thành chương trình sinh viên năm nhất.</p>
<p>Bất ngờ được tìm kiếm trở lại sau vụ sao Trung lùm xùm bị "phong sát", cộng đồng mạng phải "thất vọng" khi <strong>hot girl</strong> <strong>học đường</strong> một thời khá kín tiếng, không chia sẻ nhiều cuộc sống riêng trên mạng xã hội. </p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/27/photo-1-1630061573861854895731.jpg' alt="2, HOT GIRL,HỌC ĐƯỜNG,TRIỆU VY," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/27/photo-1-1630061541049227453012.jpg' alt="3, HOT GIRL,HỌC ĐƯỜNG,TRIỆU VY," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/27/anh-chup-man-hinh-2021-08-27-luc-175437-1630061752516875810420.png' alt="4, HOT GIRL,HỌC ĐƯỜNG,TRIỆU VY," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/27/anh-chup-man-hinh-2021-08-27-luc-175400-1630061752500148147518.png' alt="5, HOT GIRL,HỌC ĐƯỜNG,TRIỆU VY," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/27/anh-chup-man-hinh-2021-08-27-luc-175422-1630061752186441632771.png' alt="6, HOT GIRL,HỌC ĐƯỜNG,TRIỆU VY," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/27/anh-chup-man-hinh-2021-08-27-luc-175427-16300617524312022065847.png' alt="7, HOT GIRL,HỌC ĐƯỜNG,TRIỆU VY," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/27/anh-chup-man-hinh-2021-08-27-luc-175417-1630061752301202698611.png' alt="8, HOT GIRL,HỌC ĐƯỜNG,TRIỆU VY," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/27/anh-chup-man-hinh-2021-08-27-luc-175447-16300617525411018432798.png' alt="9, HOT GIRL,HỌC ĐƯỜNG,TRIỆU VY," note=''/>


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
