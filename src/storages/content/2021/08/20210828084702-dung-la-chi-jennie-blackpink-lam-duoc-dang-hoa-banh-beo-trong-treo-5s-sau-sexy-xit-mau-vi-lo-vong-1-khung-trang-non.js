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
"title": 'Đúng là chỉ Jennie (BLACKPINK) làm được: Đang hóa "bánh bèo" trong trẻo, 5s sau sexy "xịt máu" vì lộ vòng 1 khủng trắng nõn',
"description": 'Vẻ đẹp ngây thơ pha lẫn với gợi cảm của Jennie (BLACKPINK) chính là lý do khiến fan u mê cô "không lối thoát".',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/e9tu-cowyaepq1u-16300567539681572243994.jpg',
"alt": 'jennie,Jennie (BlackPink),Blackpink,sao Hàn,nhan sắc sao Hàn,nhan sắc Jennie,blackpink summer diary 2021,idol Kpop,',
"category": 'stars',
"date": '28/08/2021',
"time": '08:47 AM',
"link": '/dung-la-chi-jennie-blackpink-lam-duoc-dang-hoa-banh-beo-trong-treo-5s-sau-sexy-xit-mau-vi-lo-vong-1-khung-trang-non',
"zcomponent": 'page_20210828084702',
"filepath": './20210828084702-dung-la-chi-jennie-blackpink-lam-duoc-dang-hoa-banh-beo-trong-treo-5s-sau-sexy-xit-mau-vi-lo-vong-1-khung-trang-non.js'
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
const title = 'Đúng là chỉ Jennie (BLACKPINK) làm được: Đang hóa "bánh bèo" trong trẻo, 5s sau sexy "xịt máu" vì lộ vòng 1 khủng trắng nõn';
const author = 'HỒNG HẢI,';
const source = 'Pháp luật & Bạn đọc';
const timestamp = '28/08/2021 08:47 AM';
const description = 'Vẻ đẹp ngây thơ pha lẫn với gợi cảm của Jennie (BLACKPINK) chính là lý do khiến fan u mê cô "không lối thoát".';
const link = 'dung-la-chi-jennie-blackpink-lam-duoc-dang-hoa-banh-beo-trong-treo-5s-sau-sexy-xit-mau-vi-lo-vong-1-khung-trang-non';
const tagparam = ["jennie","Jennie (BlackPink)","Blackpink","sao Hàn","nhan sắc sao Hàn","nhan sắc Jennie","blackpink summer diary 2021","idol Kpop",];
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

export default function page_20210828084702() {
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

<p>Vẻ đẹp ngây thơ pha lẫn với gợi cảm của <strong>Jennie</strong> (<strong>BLACKPINK</strong>) chính là lý do khiến fan u mê cô "không lối thoát".</p>
<p>Vốn là nữ idol hot nhất nhì Kpop hiện nay, <strong>Jennie</strong> (<strong>BLACKPINK</strong>) không những tài năng mà còn sở hữu visual cực phẩm, thân hình sexy "xịt máu mũi" Jennie có gương mặt bầu bĩnh với đôi má bánh bao trứ danh, vừa đáng yêu hết nấc lại vừa có thể cá tính, quyến rũ và vô cùng sắc sảo. Và đó chính là lý do cô có thể "cân đẹp" mọi phong cách, mọi diện mạo.</p>
<p>Mới đây nhất, MXH đã được phen xôn xao với bộ ảnh mới của "công chúa YG" trong <strong>BLACKPINK</strong> SUMMER DIARY 2021. Trong loạt ảnh này, <strong>Jennie</strong> để kiểu tóc mái thưa dịu dàng, tôn lên nhan sắc ngọt ngào và vô cùng đáng yêu. Gương mặt "cưng xỉu" xen lẫn cá tính sắc sảo của Jennie khiến người xem mê đắm, không thể rời mắt. Thế nhưng đang xinh đẹp trong trẻo như mùa hè, rapper BLACKPINK bỗng có 1 màn "quay xe" khét lẹt, khoe vòng 1 khủng ngồn ngộn sexy đến "xịt máu mũi" làm dân tình không khỏi choáng váng chỉ vì thay đổi dáng sang nằm.</p>
<p>Gương mặt cực phẩm của <strong>Jennie</strong> khiến dân tình "sốc visual" vì quá xinh đẹp và ngọt ngào. Để tóc mái thưa, Jennie trở nên đáng yêu hơn bao giờ hết, khiến bức ảnh đẹp cứ như poster phim điện ảnh</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/e9tdsa6xeaqatoa-16300567540261903491732.jpg' alt="1, jennie,Jennie (BlackPink),Blackpink,sao Hàn,nhan sắc sao Hàn,nhan sắc Jennie,blackpink summer diary 2021,idol Kpop," note='Gương mặt của Jennie từng khiến các cô gái ao ước. Làn da căng bóng, đôi mắt sắc sảo, đôi má bánh bao trứ danh, đôi môi ngọt ngào, đường nét hài hòa đã giúp Jennie luôn xinh đẹp ở mọi góc độ'/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/e9tdsffx0aaxi0m-1630056754011131323078.jpg' alt="2, jennie,Jennie (BlackPink),Blackpink,sao Hàn,nhan sắc sao Hàn,nhan sắc Jennie,blackpink summer diary 2021,idol Kpop," note='Đến đây, nữ idol sinh năm 1996 đã lấp ló vòng 1 gợi cảm làm dân tình không thể rời mắt'/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/e9txr6vx0akcmb-1630056753826253144550.jpg' alt="3, jennie,Jennie (BlackPink),Blackpink,sao Hàn,nhan sắc sao Hàn,nhan sắc Jennie,blackpink summer diary 2021,idol Kpop," note='Thả mình vào những trái bóng bay, Jennie cười tươi hết cỡ, khoe vẻ đẹp ngây thơ, ngọt ngào, trong trẻo như mùa hè'/>
<RelationNewsInPage category={category} />
<p>Thế nhưng <strong>Jennie</strong> bỗng "quay xe" 180 độ, thay đổi biểu cảm gương mặt và chuyển sang tạo dáng chống tay, khoe luôn vòng 1 ngồn ngộn sexy đến "nghẹt thở". Vòng 1 căng đầy của Jennie khiến dân tình thấy "khó thở" theo, xuýt xoa khen ngợi 2 nét đẹp đối lập ngây thơ - gợi cảm trong cô</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/e9wbuanxeaikkhs-16300567536802130734440.jpg' alt="4, jennie,Jennie (BlackPink),Blackpink,sao Hàn,nhan sắc sao Hàn,nhan sắc Jennie,blackpink summer diary 2021,idol Kpop," note='Thay đổi biểu cảm 1 chút, Jennie trở nên cá tính, cực ngầu và sắc sảo. Trong bức ảnh này, Jennie còn khoe được lưng trần nuột nà và gợi cảm hết nấc'/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/e9wcbhywyay5bsr-16300567536461966254078.jpg' alt="5, jennie,Jennie (BlackPink),Blackpink,sao Hàn,nhan sắc sao Hàn,nhan sắc Jennie,blackpink summer diary 2021,idol Kpop," note='Netizen đều cảm thấy khó chọn đâu mới là điều nổi bật hơn bức ảnh, là gương mặt xinh đẹp hút hồn hay vòng 1 khủng lấp ló'/>
<p>Nguồn: Twitter</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/e9tu-cowyaepq1u-16300567539681572243994.jpg' alt="6, jennie,Jennie (BlackPink),Blackpink,sao Hàn,nhan sắc sao Hàn,nhan sắc Jennie,blackpink summer diary 2021,idol Kpop," note=''/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/e9wbtl9xiaqhimv-16300567538071683459330.jpg' alt="7, jennie,Jennie (BlackPink),Blackpink,sao Hàn,nhan sắc sao Hàn,nhan sắc Jennie,blackpink summer diary 2021,idol Kpop," note=''/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/e9wcbhywyay5bsr-16300567536461966254078.jpg' alt="8, jennie,Jennie (BlackPink),Blackpink,sao Hàn,nhan sắc sao Hàn,nhan sắc Jennie,blackpink summer diary 2021,idol Kpop," note=''/>


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
