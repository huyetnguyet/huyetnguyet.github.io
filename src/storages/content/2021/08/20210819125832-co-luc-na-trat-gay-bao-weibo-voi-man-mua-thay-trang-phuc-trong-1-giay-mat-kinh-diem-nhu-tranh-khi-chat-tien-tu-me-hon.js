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
"timestamp": '19/08/2021 12:58 PM',
"title": 'Cổ Lực Na Trát gây bão Weibo với màn múa thay trang phục trong 1 giây: Mặt kinh diễm như tranh, khí chất tiên tử mê hồn',
"description": 'Sau màn trình diễn này, vô số lời ngợi khen đã được gửi tới nàng "Mỹ nhân Tân Cương" Cổ Lực Na Trát.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-1-162925109970473436377.jpeg',
"alt": 'cổ lực na trát,mỹ nhân Tân Cương,Mỹ nhân Hoa ngữ,',
"category": 'stars',
"date": '19/08/2021',
"time": '12:58 PM',
"link": '/co-luc-na-trat-gay-bao-weibo-voi-man-mua-thay-trang-phuc-trong-1-giay-mat-kinh-diem-nhu-tranh-khi-chat-tien-tu-me-hon',
"zcomponent": 'page_20210819125832',
"filepath": './20210819125832-co-luc-na-trat-gay-bao-weibo-voi-man-mua-thay-trang-phuc-trong-1-giay-mat-kinh-diem-nhu-tranh-khi-chat-tien-tu-me-hon.js'
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
const title = 'Cổ Lực Na Trát gây bão Weibo với màn múa thay trang phục trong 1 giây: Mặt kinh diễm như tranh, khí chất tiên tử mê hồn';
const author = 'NHÃ AN,';
const source = 'Trí Thức Trẻ';
const timestamp = '19/08/2021 12:58 PM';
const description = 'Sau màn trình diễn này, vô số lời ngợi khen đã được gửi tới nàng "Mỹ nhân Tân Cương" Cổ Lực Na Trát.';
const link = 'co-luc-na-trat-gay-bao-weibo-voi-man-mua-thay-trang-phuc-trong-1-giay-mat-kinh-diem-nhu-tranh-khi-chat-tien-tu-me-hon';
const tagparam = ["cổ lực na trát","mỹ nhân Tân Cương","Mỹ nhân Hoa ngữ",];
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

export default function page_20210819125832() {
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

<p>Sau màn trình diễn này, vô số lời ngợi khen đã được gửi tới nàng "<strong>Mỹ nhân Tân Cương</strong>" <strong>Cổ Lực Na Trát</strong>.</p>
<p>Tối ngày 17/8, <strong>Cổ Lực Na Trát</strong> nhận lời mời tham dự chương trình nghệ thuật của đài truyền hình Hồ Nam. Đặc biệt nhất, nàng "<strong>Mỹ nhân Tân Cương</strong>" đã đem đến màn trình diễn múa trong trang phục truyền thống cực kỳ cuốn hút. Tuy nhiên, khoảnh khắc ấn tượng nhất của bài múa chính là giây phút cô nàng thay trang phục chỉ trong nháy mắt. Hiện tại, clip trình diễn của Na Trát đang được chia sẻ rất nhiều trên MXH.</p>
<p></p>
<p>Bài múa của <strong>Cổ Lực Na Trát</strong> gây bão cõi mạng</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-1-16292510936271341731307.jpeg' alt='1, cổ lực na trát,mỹ nhân Tân Cương,Mỹ nhân Hoa ngữ,' note='Na Trát thoả sức đem đến màn trình diễn cực kỳ xuất sắc, khiến bao người hâm mộ xuýt xoa trầm trồ'/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-1-16292511061801345021527.jpeg' alt='2, cổ lực na trát,mỹ nhân Tân Cương,Mỹ nhân Hoa ngữ,' note='Giây phút gây bão toàn cõi mạng của người đẹp Tân Cương khi thay trang phục chỉ trong vòng 1 giây chớp nhoáng'/>
<p>Những động tác múa uyển chuyển của Na Trát khiến người hâm mộ không thể rời mắt. Mang vẻ đẹp sắc sảo và quyến rũ, mỹ nhân Hộc Châu Phu Nhân gây bão nhờ loạt khoảnh khắc khoe visual đỉnh cao. Trên MXH, netizen xứ Trung dành nhiều lời ngợi khen cho cô nàng, nhiều ý kiến khẳng định rằng, Na Trát đã khắc hoạ được nét đẹp khuynh quốc khuynh thành của mỹ nhân năm xưa với trang phục truyền thống.</p>
<p>Cận cảnh nhan sắc của nàng "<strong>Mỹ nhân Tân Cương</strong>" Cổ Lực Na Trát</p>
<RelationNewsInPage category={category} />
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-1-1629251155613166265141.jpeg' alt='3, cổ lực na trát,mỹ nhân Tân Cương,Mỹ nhân Hoa ngữ,' note='Góc nghiêng kiều diễm, đẹp không tì vết của nàng tiểu Hoa đán sở hữu sắc vóc đình đám xứ Trung'/>
<p>Hàng ngàn lời bình luận gửi tới người đẹp sinh năm 1992: "Đã lâu không được thấy Na Trát múa, quả thật vô cùng mãn nhãn", "Trang phục đã đẹp, người còn đẹp hơn, một màn trình diễn không thể chê ở bất cứ điểm nào", "Tôi vốn rất thích những màn múa truyền thống thế này, Na Trát khiến tôi mê mẩn bởi vẻ đẹp của cô ấy",...</p>
<p>Những khoảnh khắc "phiêu" với từng động tác múa uyển chuyển khiến visual của Na Trát ma mị, quyến rũ đến mức không thể rời mắt</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-1-1629251114334798013526.jpeg' alt='4, cổ lực na trát,mỹ nhân Tân Cương,Mỹ nhân Hoa ngữ,' note='Vóc dáng mảnh mai, gương mặt rạng ngời với nụ cười quyến rũ đã khiến cho bài trình diễn như có mê lực'/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-1-16292511216151676282724.jpeg' alt='5, cổ lực na trát,mỹ nhân Tân Cương,Mỹ nhân Hoa ngữ,' note='Có thể nói, đã lâu lắm rồi, Na Trát mới có màn trình diễn bùng nổ đến như vậy'/>
<p>Nguồn: Weibo, Sohu</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-1-162925109970473436377.jpeg' alt='6, cổ lực na trát,mỹ nhân Tân Cương,Mỹ nhân Hoa ngữ,' note=''/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-1-16292511590551955752674.jpeg' alt='7, cổ lực na trát,mỹ nhân Tân Cương,Mỹ nhân Hoa ngữ,' note=''/>
<ContentImage src='https://p2.itc.cn/q_70/images01/20210818/fcf300df8e92467197a3c05bb8e7369e.jpeg' alt='8, cổ lực na trát,mỹ nhân Tân Cương,Mỹ nhân Hoa ngữ,' note=''/>
<ContentImage src='https://p2.itc.cn/q_70/images01/20210818/fcf300df8e92467197a3c05bb8e7369e.jpeg' alt='9, cổ lực na trát,mỹ nhân Tân Cương,Mỹ nhân Hoa ngữ,' note=''/>
<ContentImage src='https://kenh14cdn.com/203336854389633024/2021/8/18/animation-1-16292521645882142079507.gif' alt='10, cổ lực na trát,mỹ nhân Tân Cương,Mỹ nhân Hoa ngữ,' note=''/>
<ContentImage src='https://kenh14cdn.com/203336854389633024/2021/8/18/animation-2-16292521646101071473992.gif' alt='11, cổ lực na trát,mỹ nhân Tân Cương,Mỹ nhân Hoa ngữ,' note=''/>
<ContentImage src='https://kenh14cdn.com/203336854389633024/2021/8/18/animation-3-16292521646261286812125.gif' alt='12, cổ lực na trát,mỹ nhân Tân Cương,Mỹ nhân Hoa ngữ,' note=''/>


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
