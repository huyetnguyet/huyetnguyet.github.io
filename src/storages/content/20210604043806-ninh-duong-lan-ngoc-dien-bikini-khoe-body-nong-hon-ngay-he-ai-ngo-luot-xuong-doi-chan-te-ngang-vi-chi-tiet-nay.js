import React from "react";
import "../../components/page.css";
import { AdsHorizontal, AdsVertical } from "../../components/adsMethods";
import {RandomFeature} from "../../components/methods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "../../components/content";


/* ---------------------------------------------------------------- */

/*

 <ContentItem title="Ninh Dương Lan Ngọc diện bikini khoe body nóng hơn ngày hè, ai ngờ lướt xuống đôi chân 'té ngang' vì chi tiết này"
content="Mới gia nhập lại đường đua bikini chào hè nhưng Lan Ngọc đã bị netizen nhận xét thiếu đầu tư, hoặc là chỉ vì... không để ý mà thôi." 
src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/21/1602542722906584957608686882563716759127501o-1616329288396660640978.jpg" 
alt="Lan Ngoc, Ninh Duong Lan Ngoc, Sao Viet, Vbiz, Showbiz Viet, Body Cua Sao, Body Sao, " 
category="images" 
time="04/06/2021 04:38 PM" 
link="/ninh-duong-lan-ngoc-dien-bikini-khoe-body-nong-hon-ngay-he-ai-ngo-luot-xuong-doi-chan-te-ngang-vi-chi-tiet-nay"/>

{title="Ninh Dương Lan Ngọc diện bikini khoe body nóng hơn ngày hè, ai ngờ lướt xuống đôi chân 'té ngang' vì chi tiết này",
content="Mới gia nhập lại đường đua bikini chào hè nhưng Lan Ngọc đã bị netizen nhận xét thiếu đầu tư, hoặc là chỉ vì... không để ý mà thôi." ,
src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/21/1602542722906584957608686882563716759127501o-1616329288396660640978.jpg" ,
alt="Lan Ngoc, Ninh Duong Lan Ngoc, Sao Viet, Vbiz, Showbiz Viet, Body Cua Sao, Body Sao, " ,
category="images" ,
time="04/06/2021 04:38 PM" ,
link="/ninh-duong-lan-ngoc-dien-bikini-khoe-body-nong-hon-ngay-he-ai-ngo-luot-xuong-doi-chan-te-ngang-vi-chi-tiet-nay",component="page_20210604043806",
filepath="../storages/content/20210604043806-ninh-duong-lan-ngoc-dien-bikini-khoe-body-nong-hon-ngay-he-ai-ngo-luot-xuong-doi-chan-te-ngang-vi-chi-tiet-nay.js"},

Ninh Dương Lan Ngọc diện bikini khoe body nóng hơn ngày hè, ai ngờ lướt xuống đôi chân 'té ngang' vì chi tiết này
Mới gia nhập lại đường đua bikini chào hè nhưng Lan Ngọc đã bị netizen nhận xét thiếu đầu tư, hoặc là chỉ vì... không để ý mà thôi.
https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/21/1602542722906584957608686882563716759127501o-1616329288396660640978.jpg
Lan Ngoc, Ninh Duong Lan Ngoc, Sao Viet, Vbiz, Showbiz Viet, Body Cua Sao, Body Sao, 
images
04/06/2021
04:38 PM
/ninh-duong-lan-ngoc-dien-bikini-khoe-body-nong-hon-ngay-he-ai-ngo-luot-xuong-doi-chan-te-ngang-vi-chi-tiet-nay
page_20210604043806
../storages/content/20210604043806-ninh-duong-lan-ngoc-dien-bikini-khoe-body-nong-hon-ngay-he-ai-ngo-luot-xuong-doi-chan-te-ngang-vi-chi-tiet-nay.js




<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title = "Ninh Dương Lan Ngọc diện bikini khoe body nóng hơn ngày hè, ai ngờ lướt xuống đôi chân 'té ngang' vì chi tiết này";
const author = "DA,";
const source = "Trí Thức Trẻ";
const date = "04/06/2021";
const time = "04:38 PM";
const description = "Mới gia nhập lại đường đua bikini chào hè nhưng Lan Ngọc đã bị netizen nhận xét thiếu đầu tư, hoặc là chỉ vì... không để ý mà thôi.";
const link = "ninh-duong-lan-ngoc-dien-bikini-khoe-body-nong-hon-ngay-he-ai-ngo-luot-xuong-doi-chan-te-ngang-vi-chi-tiet-nay";
const tagparam = ["lan-ngoc","ninh-duong-lan-ngoc","sao-viet","vbiz","showbiz-viet","body-cua-sao","body-sao"];
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

export default function page_20210604043806() {
  return (
    <>
      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              >
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody"><p>Hè đến cũng là dịp các chị em đua nhau chào sân với những bộ bikini hở bạo, nóng bỏng nhất. Đường đua năm nay của dàn mỹ nhân Việt vẫn bất phân thắng bại, người khoe đường cong ở bể bơi, người thả dáng ở bãi biển khiến netizen chỉ biết vừa ngắm vừa xuýt xoa thôi.</p>
<p>Mới đây, Ninh Dương Lan Ngọc đã nhập cuộc với loạt ảnh gây sốt, cô diện bikini 2 mảnh khoe thần thái rạng rỡ, đặc biệt là vòng eo 54cm. Tưởng dân tình sẽ cho ngay 10 điểm khi ngắm ảnh của Lan Ngọc nhưng ai ngờ "ngọc nữ" đã bị trừ điểm vì 1 chi tiết ở đôi chân. Ở trên sexy và sang chảnh bao nhiêu, kéo đến dưới phần chân mang... dép lê và lại còn không đúng size của cô nàng, dân tình không khỏi ngã ngửa. Chi tiết này cũng khiến bộ đồ bị "phá" thấy rõ. Ngay lập tức, netizen mở ra cuộc "khẩu chiến", người thích thú để lại bình luận trêu đùa rằng body và thần sắc của Lan Ngọc đã "cứu" hết, bên cho rằng nếu Lan Ngọc chịu đầu tư phù kiện hợp bộ đồ thì sẽ cho bức ảnh "sống ảo" hoàn hảo hơn.</p>
<p>Lan Ngọc nhập cuộc đua body với hình ảnh khoe eo và lưng trần nóng bỏng mắt</p>
<p>Ai ngờ "ngọc nữ" lại bị soi đôi dép sai sai khiến bức ảnh bị nhận về điểm trừ</p>
<p>Ở khoảnh khắc này, có thể khẳng định chắc nịch Lan Ngọc đã xỏ nhầm dép, nhìn phần đuôi của đôi dép thò ra cả mảng thế kia là biết rồi!</p>
<p>Có lẽ để thuận tiện di chuyển nên Lan Ngọc đã mang tạm dép của ai đó, nhưng không sao, thần thái chị cứu lại hết!</p>
<p>Ảnh: Facebook nhân vật</p>
<ContentImage src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/21/1602542722906584957608686882563716759127501o-1616329288396660640978.jpg" alt="Lan Ngoc, Ninh Duong Lan Ngoc, Sao Viet, Vbiz, Showbiz Viet, Body Cua Sao, Body Sao, " note=""/>
<ContentImage src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/21/1602480002906584657608715601284873315919249o-16163292876962023067099.jpg" alt="Lan Ngoc, Ninh Duong Lan Ngoc, Sao Viet, Vbiz, Showbiz Viet, Body Cua Sao, Body Sao, " note=""/>
<ContentImage src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/21/2-16163297204141203148969.jpg" alt="Lan Ngoc, Ninh Duong Lan Ngoc, Sao Viet, Vbiz, Showbiz Viet, Body Cua Sao, Body Sao, " note=""/>
<ContentImage src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/3/21/1613651512904354957831684891406308301539926o-16163292880421516340284.jpg" alt="Lan Ngoc, Ninh Duong Lan Ngoc, Sao Viet, Vbiz, Showbiz Viet, Body Cua Sao, Body Sao, " note=""/>
<ContentImage src="https://nv.vi-serve.com/vis-media/136/2132/136_d8075300258d46ada5d12904144dbccc_720p.mp4" alt="Lan Ngoc, Ninh Duong Lan Ngoc, Sao Viet, Vbiz, Showbiz Viet, Body Cua Sao, Body Sao, " note=""/>
 </div>
              </div>

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
