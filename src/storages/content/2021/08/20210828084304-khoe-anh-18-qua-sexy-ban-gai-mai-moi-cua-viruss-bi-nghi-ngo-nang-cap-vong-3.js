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
"timestamp": '28/08/2021 08:43 AM',
"title": 'Khoe ảnh 18+ quá sexy, bạn gái mai mối của ViruSs bị nghi ngờ nâng cấp vòng 3',
"description": 'Đây không phải lần đầu tiên hot girl được mai mối với ViruSs bị đồn can thiệp dao kéo.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/photo-1-1629866594960135006910.jpg',
"alt": 'VIRUSS,BẠN GÁI,SUNNA,HOT GIRL,CỘNG ĐỒNG MẠNG,',
"category": 'images',
"date": '28/08/2021',
"time": '08:43 AM',
"link": '/khoe-anh-18-qua-sexy-ban-gai-mai-moi-cua-viruss-bi-nghi-ngo-nang-cap-vong-3',
"zcomponent": 'page_20210828084304',
"filepath": './20210828084304-khoe-anh-18-qua-sexy-ban-gai-mai-moi-cua-viruss-bi-nghi-ngo-nang-cap-vong-3.js'
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
const title = 'Khoe ảnh 18+ quá sexy, bạn gái mai mối của ViruSs bị nghi ngờ nâng cấp vòng 3';
const author = 'Kayle';
const source = 'Pháp luật và bạn đọc';
const timestamp = '28/08/2021 08:43 AM';
const description = 'Đây không phải lần đầu tiên hot girl được mai mối với ViruSs bị đồn can thiệp dao kéo.';
const link = 'khoe-anh-18-qua-sexy-ban-gai-mai-moi-cua-viruss-bi-nghi-ngo-nang-cap-vong-3';
const tagparam = ["VIRUSS","BẠN GÁI","SUNNA","HOT GIRL","CỘNG ĐỒNG MẠNG",];
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

export default function page_20210828084304() {
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

<p>Wilson Nhật Anh hay còn được biết đến với tên gọi <strong>Sunna</strong>. <strong>Hot girl</strong> lai Việt – Mỹ sở hữu gương mặt xinh đẹp và body hoàn hảo. Với số đo ba vòng 90-66-95, ngay từ sớm, cô nàng đã định hình cho bản thân phong cách thời trang sexy, bốc lửa, quyến rũ và có phần táo bạo. Trên các tài khoản mạng xã hội của mình, Sunna không ngại “khoe” thân, đường cong của cô khiến người xem “bỏng mắt" ngay khi vừa lướt qua.</p>
<p>Vóc dáng nở nang được <strong>bạn gái</strong> mai mối của streamer <strong>ViruSs</strong> nhiều lần lý giải là do cơ địa, theo gen ba người Mỹ nên có phần “lớn” hơn những cô bạn cùng tuổi. Nhưng cô nàng cũng không lấy làm gì ngại ngùng mà thay vào đó tự hào với những gì mình có. <strong>Sunna</strong> mới đây còn đăng tải tấm hình chia sẻ lại khoảnh khắc khi vừa qua 18 tuổi của mình.</p>
<p>Đường cong “bốc lửa" này được dân mạng không ngớt lời ngợi khen, có người còn ganh tỵ với số đo chẳng kém gì dân mẫu chuyên nghiệp. Bên cạnh đó, có những bình luận mà sự duyên dáng rớt xuống chỉ số âm. Người này cho rằng đây là hình ảnh mà nữ <strong>hot girl</strong> chưa sửa mông, chứ bây giờ vòng 3 đã to gấp 10 lần rồi.</p>
<RelationNewsInPage category={category} />
<p>Đây không phải lần đầu tiên mà bông hồng lai bị đồn đại can thiệp nâng cấp số đo cơ thể. Trước đó, <strong>Sunna</strong> cũng bị cho rằng vòng 1 “khủng" bây giờ cũng là do "dao kéo" mà có được. <strong>Hot girl</strong> 2k2 đã từng khẳng định chắc nịch rằng tất cả là tự nhiên và bộ phận mà cô “sửa" một chút là môi, có tiêm filler để môi căng mọng hơn mà thôi.</p>
<p>Cùng nhìn lại những lần <strong>hot girl</strong> này khoe vòng 3 "bá cháy" nhé:</p>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/photo-1-1629866594960135006910.jpg' alt="1, VIRUSS,BẠN GÁI,SUNNA,HOT GIRL,CỘNG ĐỒNG MẠNG," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/photo-1-1629866641071554939761-16298666719421167056646.jpg' alt="2, VIRUSS,BẠN GÁI,SUNNA,HOT GIRL,CỘNG ĐỒNG MẠNG," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/photo-1-16298666959042057229237-1629866735193848601983.jpg' alt="3, VIRUSS,BẠN GÁI,SUNNA,HOT GIRL,CỘNG ĐỒNG MẠNG," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/2395194628905057682316712992176772512547332n-1629866790901550242158.jpg' alt="4, VIRUSS,BẠN GÁI,SUNNA,HOT GIRL,CỘNG ĐỒNG MẠNG," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/2361857043988465384589417395390728905123595n-16298667908881144913803.jpg' alt="5, VIRUSS,BẠN GÁI,SUNNA,HOT GIRL,CỘNG ĐỒNG MẠNG," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/235832699379718177003715273225669998874734n-1629866790860970812333.jpg' alt="6, VIRUSS,BẠN GÁI,SUNNA,HOT GIRL,CỘNG ĐỒNG MẠNG," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/2401982372049905050116702110299639119931695n-1629866790920954817296.jpg' alt="7, VIRUSS,BẠN GÁI,SUNNA,HOT GIRL,CỘNG ĐỒNG MẠNG," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/2404663465331442013264483660746855716647738n-16298667909281501316422.jpg' alt="8, VIRUSS,BẠN GÁI,SUNNA,HOT GIRL,CỘNG ĐỒNG MẠNG," note=''/>


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
