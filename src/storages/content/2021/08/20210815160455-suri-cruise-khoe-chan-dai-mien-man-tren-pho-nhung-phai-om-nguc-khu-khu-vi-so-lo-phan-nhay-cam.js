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
"timestamp": '15/08/2021 04:04 PM',
"title": 'Suri Cruise khoe chân dài miên man trên phố, nhưng phải ôm ngực khư khư vì sợ lộ phần nhạy cảm',
"description": 'Suri Cruise chăm diện đồ ngắn dạo phố nhưng đôi khi trang phục thoải mái lại đẩy cô công chúa nhà Tom Cruise vào tình huống khó xử, ngượng ngùng.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-16290342517302050187624.jpg',
"alt": 'suri cruise,tom cruise,katie holmes,sao us uk,sao hollywood,con gái Tom Cruise,',
"category": 'stars',
"date": '15/08/2021',
"time": '04:04 PM',
"link": '/suri-cruise-khoe-chan-dai-mien-man-tren-pho-nhung-phai-om-nguc-khu-khu-vi-so-lo-phan-nhay-cam',
"zcomponent": 'page_20210815160455',
"filepath": './20210815160455-suri-cruise-khoe-chan-dai-mien-man-tren-pho-nhung-phai-om-nguc-khu-khu-vi-so-lo-phan-nhay-cam.js'
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
const title = 'Suri Cruise khoe chân dài miên man trên phố, nhưng phải ôm ngực khư khư vì sợ lộ phần nhạy cảm';
const author = 'CHIZ,';
const source = 'Pháp luật & Bạn đọc';
const timestamp = '15/08/2021 04:04 PM';
const description = 'Suri Cruise chăm diện đồ ngắn dạo phố nhưng đôi khi trang phục thoải mái lại đẩy cô công chúa nhà Tom Cruise vào tình huống khó xử, ngượng ngùng.';
const link = 'suri-cruise-khoe-chan-dai-mien-man-tren-pho-nhung-phai-om-nguc-khu-khu-vi-so-lo-phan-nhay-cam';
const tagparam = ["suri cruise","tom cruise","katie holmes","sao us uk","sao hollywood","con gái Tom Cruise",];
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

export default function page_20210815160455() {
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

<p><strong>Suri Cruise</strong> chăm diện đồ ngắn dạo phố nhưng đôi khi trang phục thoải mái lại đẩy cô công chúa nhà <strong>Tom Cruise</strong> vào tình huống khó xử, ngượng ngùng.</p>
<p>Ở tuổi 15, cô con gái ruột duy nhất của <strong>Tom Cruise</strong> và <strong>Katie Holmes</strong> đã lớn phổng phao và "trổ mã" xinh đẹp. Không chỉ thừa hưởng những nét đẹp từ bố mẹ, <strong>Suri Cruise</strong> còn có chiều cao lý tưởng hơn hẳn bạn bè cùng tuổi. Cô "công chúa Hollywood" nhiều lần gây sốt MXH dù chỉ ăn mặc giản dị, đi dép lên trên phố.</p>
<p>Tuy nhiên đến ngày 13/8, nữ diễn viên Katie và con gái gây náo loạn đường phố New York khi cùng nhau đi ăn tối. Sẽ không có gì đáng nói nếu Suri không diện áo 2 dây xẻ sâu cùng quần ngắn khoe đôi chân dài miên man. Trang phục thiếu vải cũng khiến cô công chúa nhà Katie gặp bất tiện trong việc di chuyển, phải dùng 2 tay che trước ngực để tránh sự cố lộ hàng vì xung quanh có quá nhiều thợ săn ảnh.</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-16290335395591799628650.jpg' alt='1, suri cruise,tom cruise,katie holmes,sao us uk,sao hollywood,con gái Tom Cruise,' note='Càng lớn, Suri càng xinh xắn và toát ra khí chất cuốn hút. Mái tóc dài chấm lưng giúp cô nàng trông càng dịu dàng, nữ tính'/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-16290344540561601276140.jpg' alt='2, suri cruise,tom cruise,katie holmes,sao us uk,sao hollywood,con gái Tom Cruise,' note='Chiếc áo 2 dây xẻ sâu khiến cô nàng không thể di chuyển thoải mái, phải dùng tay che ngực để tránh hớ hênh trước ống kính của paparazzi Hollywood'/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-1629033581292881320656.jpg' alt='3, suri cruise,tom cruise,katie holmes,sao us uk,sao hollywood,con gái Tom Cruise,' note='Nữ diễn viên diện cả cây trắng nổi bật nhưng vẫn bị con gái cưng chiếm hết spotlight'/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-1629033587824391065190.jpg' alt='4, suri cruise,tom cruise,katie holmes,sao us uk,sao hollywood,con gái Tom Cruise,' note='Bị nhiều thợ săn ảnh vây quanh, Suri khá ngại ngùng và phải che chắn cẩn thận'/>
<RelationNewsInPage category={category} />
<p>Nhan sắc và vóc dáng của cô "công chúa Hollywood" khiến nhiều khán giả trầm trồ và dành lời khen ngợi</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-1629033687077444244902.jpg' alt='5, suri cruise,tom cruise,katie holmes,sao us uk,sao hollywood,con gái Tom Cruise,' note='Dù mới 15 tuổi nhưng Suri Cruise đã xinh đẹp đến mức lấn át cả Katie Holmes đi bên cạnh'/>
<p>Đây không phải lần đầu tiên <strong>Suri Cruise</strong> cảm thấy bất an vì sợ hớ hênh trước ống kính paparazzi. Fan hi vọng rằng <strong>Katie Holmes</strong> có thể cho con gái ăn diện kín đáo hơn để vừa khoe được nhan sắc vượt trội và vừa không bị soi quá nhiều. Với nhan sắc và vóc dáng cực phẩm thế này, nhiều netizen hi vọng Suri sẽ nối tiếp sự nghiệp của bố mẹ và trở thành diễn viên.</p>
<p>Những chiếc áo 2 dây, quần ngắn trở thành trang phục yêu thích giúp <strong>Suri Cruise</strong> khoe được ưu điểm chân dài và thân hình cân đối</p>
<p>Nguồn: Splash</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-16290342517302050187624.jpg' alt='6, suri cruise,tom cruise,katie holmes,sao us uk,sao hollywood,con gái Tom Cruise,' note=''/>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/photo-1-16290336206991496628756.jpg' alt='7, suri cruise,tom cruise,katie holmes,sao us uk,sao hollywood,con gái Tom Cruise,' note=''/>
<ContentImage src='https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16290349100622014239687.jpg' alt='8, suri cruise,tom cruise,katie holmes,sao us uk,sao hollywood,con gái Tom Cruise,' note=''/>
<ContentImage src='https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-1629034868952890548188.jpg' alt='9, suri cruise,tom cruise,katie holmes,sao us uk,sao hollywood,con gái Tom Cruise,' note=''/>
<ContentImage src='https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16290348529661237486285.jpg' alt='10, suri cruise,tom cruise,katie holmes,sao us uk,sao hollywood,con gái Tom Cruise,' note=''/>
<ContentImage src='https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16290346032531491313562.jpg' alt='11, suri cruise,tom cruise,katie holmes,sao us uk,sao hollywood,con gái Tom Cruise,' note=''/>
<ContentImage src='https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/15/photo-1-16290346032531491313562.jpg' alt='12, suri cruise,tom cruise,katie holmes,sao us uk,sao hollywood,con gái Tom Cruise,' note=''/>


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
