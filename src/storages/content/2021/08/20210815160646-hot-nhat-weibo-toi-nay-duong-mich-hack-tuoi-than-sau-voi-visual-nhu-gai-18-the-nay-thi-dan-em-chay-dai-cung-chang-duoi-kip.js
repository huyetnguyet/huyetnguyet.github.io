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
"timestamp": '15/08/2021 04:06 PM',
"title": 'Hot nhất Weibo tối nay: Dương Mịch hack tuổi thần sầu với visual như gái 18, thế này thì đàn em chạy dài cũng chẳng đuổi kịp',
"description": 'Vẫn biết Dương Mịch cực kỳ biết cách chăm chút hình ảnh nhưng Cnet vẫn phải trầm trồ trước nét đẹp như "lão hoá ngược" của cô nàng.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-16290432169391833182506.jpg',
"alt": 'Dương Mịch,nhan sắc của sao,vóc dáng của sao,sao trên sóng livestream,nhan sắc thật của sao,',
"category": 'stars',
"date": '15/08/2021',
"time": '04:06 PM',
"link": '/hot-nhat-weibo-toi-nay-duong-mich-hack-tuoi-than-sau-voi-visual-nhu-gai-18-the-nay-thi-dan-em-chay-dai-cung-chang-duoi-kip',
"zcomponent": 'page_20210815160646',
"filepath": './20210815160646-hot-nhat-weibo-toi-nay-duong-mich-hack-tuoi-than-sau-voi-visual-nhu-gai-18-the-nay-thi-dan-em-chay-dai-cung-chang-duoi-kip.js'
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
const title = 'Hot nhất Weibo tối nay: Dương Mịch hack tuổi thần sầu với visual như gái 18, thế này thì đàn em chạy dài cũng chẳng đuổi kịp';
const author = 'NHÃ AN,';
const source = 'Trí Thức Trẻ';
const timestamp = '15/08/2021 04:06 PM';
const description = 'Vẫn biết Dương Mịch cực kỳ biết cách chăm chút hình ảnh nhưng Cnet vẫn phải trầm trồ trước nét đẹp như "lão hoá ngược" của cô nàng.';
const link = 'hot-nhat-weibo-toi-nay-duong-mich-hack-tuoi-than-sau-voi-visual-nhu-gai-18-the-nay-thi-dan-em-chay-dai-cung-chang-duoi-kip';
const tagparam = ["Dương Mịch","nhan sắc của sao","vóc dáng của sao","sao trên sóng livestream","nhan sắc thật của sao",];
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

export default function page_20210815160646() {
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

<p>Vẫn biết <strong>Dương Mịch</strong> cực kỳ biết cách chăm chút hình ảnh nhưng Cnet vẫn phải trầm trồ trước nét đẹp như "lão hoá ngược" của cô nàng.</p>
<p>Tối ngày hôm nay (15/8), <strong>Dương Mịch</strong> nhận lời mời tham dự 1 sự kiện livestream giao lưu cùng với fan. Thời gian gần đây, người đẹp Tam Sinh Tam Thế liên tục gây bão với visual ngày càng sexy và táo bạo, vậy nhưng, xuất hiện tại sự kiện ngày hôm nay, cô nàng gây bão toàn cõi mạng với hình ảnh ngọt ngào, trẻ trung tựa thiếu nữ 18.</p>
<p>Lựa chọn cho mình chiếc áo khoác xanh cùng kiểu tóc xoăn nhẹ, <strong>Dương Mịch</strong> khiến các fan xuýt xoa vì visual tươi tắn, tràn đầy sức sống. Loạt khoảnh khắc chụp từ livestream của nàng "Bạch Thiển" đang được truyền tay nhau với tốc độ chóng mặt trên Weibo, chứng minh cho sức hút của nàng "gái độc thân" đắt giá nhất nhì showbiz này.</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-16290432047091286273022.jpg' alt='1, Dương Mịch,nhan sắc của sao,vóc dáng của sao,sao trên sóng livestream,nhan sắc thật của sao,' note='Dương Mịch dịu dàng và ngọt ngào trong sự kiện tối ngày hôm nay'/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-162904321032867799701.jpg' alt='2, Dương Mịch,nhan sắc của sao,vóc dáng của sao,sao trên sóng livestream,nhan sắc thật của sao,' note='Năm nay 35 tuổi nhưng người đẹp nhận được rất nhiều lời ngợi khen vì visual như thiếu nữ đôi mươi. Lớp trang điểm nhẹ nhàng làm nổi bật những đường nét thanh tú, đôi mắt to tròn của Dương Mịch'/>
<p>Không chỉ vậy, cô nàng còn lí lắc với loạt biểu cảm siêu cưng. Các fan còn đùa nhau rằng, <strong>Dương Mịch</strong> như bé 3,5 tuổi chứ không phải 35 tuổi nữa</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16290434294961413668497.gif' alt='3, Dương Mịch,nhan sắc của sao,vóc dáng của sao,sao trên sóng livestream,nhan sắc thật của sao,' note='Thử thách xâu chuỗi vòng tay khiến các fan hứng thú bởi lần đầu tiên các fan mới thấy thần tượng tỉ mỉ và vui tính đến vậy'/>
<RelationNewsInPage category={category} />
<ContentImage src='https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-162904341898083166353.gif' alt='4, Dương Mịch,nhan sắc của sao,vóc dáng của sao,sao trên sóng livestream,nhan sắc thật của sao,' note='Góc nghiêng khoe sống mũi cao cùng làn môi quyến rũ của Dương Mịch'/>
<p>Bên cạnh đó, studio của nữ diễn viên cũng đã chia sẻ thêm về bộ ảnh tiết lộ tạo hình của <strong>Dương Mịch</strong> khi tham gia sự kiện này. Cô nàng tiếp tục diện phong cách mặc quần ngắn khoe triệt để vóc dáng và đôi chân siêu "mlem".</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16290434101521988583669.gif' alt='5, Dương Mịch,nhan sắc của sao,vóc dáng của sao,sao trên sóng livestream,nhan sắc thật của sao,' note='Dương Mịch siêu xinh và trẻ trung trong set đồ năng động, thoải mái'/>
<ContentImage src='https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16290433691751280750524.gif' alt='6, Dương Mịch,nhan sắc của sao,vóc dáng của sao,sao trên sóng livestream,nhan sắc thật của sao,' note='Tỷ lệ cơ thể hoàn hảo cùng đôi chân thon nhỏ của cô nàng là ước mơ của bao chị em'/>
<p>Nguồn: Weibo</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-16290432169391833182506.jpg' alt='7, Dương Mịch,nhan sắc của sao,vóc dáng của sao,sao trên sóng livestream,nhan sắc thật của sao,' note=''/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-162904319190346995211.jpg' alt='8, Dương Mịch,nhan sắc của sao,vóc dáng của sao,sao trên sóng livestream,nhan sắc thật của sao,' note=''/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-1629043198003540344938.jpg' alt='9, Dương Mịch,nhan sắc của sao,vóc dáng của sao,sao trên sóng livestream,nhan sắc thật của sao,' note=''/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-1629043198003540344938.jpg' alt='10, Dương Mịch,nhan sắc của sao,vóc dáng của sao,sao trên sóng livestream,nhan sắc thật của sao,' note=''/>
<ContentImage src='https://kenh14cdn.com/203336854389633024/2021/8/15/photo-1-1629044252757607719795.gif' alt='11, Dương Mịch,nhan sắc của sao,vóc dáng của sao,sao trên sóng livestream,nhan sắc thật của sao,' note=''/>


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
