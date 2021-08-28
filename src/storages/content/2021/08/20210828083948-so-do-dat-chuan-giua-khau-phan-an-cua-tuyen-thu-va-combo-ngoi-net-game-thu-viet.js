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
"timestamp": '28/08/2021 08:39 AM',
"title": 'So độ "đạt chuẩn" giữa khẩu phần ăn của tuyển thủ và “combo" ngồi net game thủ Việt?',
"description": 'Ở Việt Nam, chế độ dinh dưỡng tuyển thủ vẫn chưa thấy sự chuyên nghiệp hoá.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/23/photo-1-16297298156421040147421.jpg',
"alt": 'BÀI VIẾT ĐÁNG CHÚ Ý,GAME THỦ,KHẨU PHẦN ĂN,TUYỂN THỦ,COMBO NGỒI NET,',
"category": 'games',
"date": '28/08/2021',
"time": '08:39 AM',
"link": '/so-do-dat-chuan-giua-khau-phan-an-cua-tuyen-thu-va-combo-ngoi-net-game-thu-viet',
"zcomponent": 'page_20210828083948',
"filepath": './20210828083948-so-do-dat-chuan-giua-khau-phan-an-cua-tuyen-thu-va-combo-ngoi-net-game-thu-viet.js'
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
const title = 'So độ "đạt chuẩn" giữa khẩu phần ăn của tuyển thủ và “combo" ngồi net game thủ Việt?';
const author = 'Kayle';
const source = 'Trí Thức Trẻ';
const timestamp = '28/08/2021 08:39 AM';
const description = 'Ở Việt Nam, chế độ dinh dưỡng tuyển thủ vẫn chưa thấy sự chuyên nghiệp hoá.';
const link = 'so-do-dat-chuan-giua-khau-phan-an-cua-tuyen-thu-va-combo-ngoi-net-game-thu-viet';
const tagparam = ["BÀI VIẾT ĐÁNG CHÚ Ý","GAME THỦ","KHẨU PHẦN ĂN","TUYỂN THỦ","COMBO NGỒI NET",];
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

export default function page_20210828083948() {
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

<p>Việc ngồi một chỗ chơi game nhiều giờ liền đòi hỏi cơ thể <strong>tuyển thủ</strong> cần được cung cấp một lượng năng lượng vừa đủ, đồng thời tránh thực phẩm khó tiêu. </p>
<p>Trong một lần chia sẻ, ông Andrew Tye, bếp trưởng và là chuyên gia dinh dưỡng của các <strong>tuyển thủ</strong> đội Counter Logic Gaming, ông cho biết, <strong>khẩu phần ăn</strong> của các <strong>game thủ</strong> thường là những thực phẩm giàu đạm, ít tinh bột vì bữa ăn quá nhiều tinh bột sẽ gây ra cảm giác uể oải và buồn ngủ. Ngoài ra sẽ có nhiều hoa quả tươi và món ăn từ bột yến mạch.</p>
<p>Khác với các <strong>game thủ</strong> phương Tây ăn uống kỹ lưỡng, game thủ khu vực Châu Á có xu hướng ưa chuộng những món mặn, nhiều tinh bột và truyền thống hơn. Ở Việt Nam, do điều kiện thi đấu và đầu tư chưa mạnh mẽ như các khu vực khác nên đa phần khi có lịch đấu dày đặc, các <strong>tuyển thủ</strong> đều tranh thủ ăn những món ăn nhanh như bánh mì để giữ sức.</p>
<p>Điều này, fan game liên tưởng ra hình ảnh quen thuộc ngoài quán net. Những "combo" chữa đói này, ngon, bổ thì không biết nhưng giá rất bình dân, có thể kể đến gồm những loại nước tăng lực và mì gói là những lựa chọn ưa chuộng để <strong>game thủ</strong> tiếp sức chiến đấu cho mình.</p>
<p>Trong những quán nét cao cấp, thức ăn và nước uống được chăm chút kỹ lưỡng, ngon không kém gì nhà hàng với thực đơn đa dạng. Trong đó, có vẻ như <strong>game thủ</strong> Việt vẫn ưa chuộng những món ăn truyền thống dễ ăn như cơm với đồ mặn/cơm chiên, mì gói, mì xào,... nước uống thì đa dạng, từ nước ngọt đóng chai tới nước pha tại quán.</p>
<RelationNewsInPage category={category} />
<p></p>
<p>Tuy vậy, vẫn nên nhớ rằng mì gói là món ăn nhanh tiện dụng, phổ biến nhưng lại có nguy cơ dẫn đến hàng loạt bệnh. Thức ăn nhanh giải quyết cơn đói tức thời. Nước giải khát thỏa mãn cảm giác tại chỗ nhưng đó chẳng qua chỉ là những cái lợi trước mắt. Thực tế, các loại đồ ăn này tiềm ẩn hàng loạt bệnh như béo phì, gan nhiễm mỡ, hư thận, hại xương, đau bao tử, giảm trí nhớ… </p>
<p>Tuy rằng có quá nhiều tác hại tới sức khỏe nếu ăn mỳ gói, bánh mỳ hoặc uống nước có ga quá nhiều, nhưng không thể phủ nhận một điều rằng, đây vẫn là những món ăn được ưa chuộng bậc nhất tại những quán net Việt.</p>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/23/photo-1-16297298156421040147421.jpg' alt="1, BÀI VIẾT ĐÁNG CHÚ Ý,GAME THỦ,KHẨU PHẦN ĂN,TUYỂN THỦ,COMBO NGỒI NET," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-162972983991382171726.jpg' alt="2, BÀI VIẾT ĐÁNG CHÚ Ý,GAME THỦ,KHẨU PHẦN ĂN,TUYỂN THỦ,COMBO NGỒI NET," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/23/photo-1-16297298542701183232428.jpg' alt="3, BÀI VIẾT ĐÁNG CHÚ Ý,GAME THỦ,KHẨU PHẦN ĂN,TUYỂN THỦ,COMBO NGỒI NET," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-16297299218181329268133.jpg' alt="4, BÀI VIẾT ĐÁNG CHÚ Ý,GAME THỦ,KHẨU PHẦN ĂN,TUYỂN THỦ,COMBO NGỒI NET," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-1629729907579189092771.jpg' alt="5, BÀI VIẾT ĐÁNG CHÚ Ý,GAME THỦ,KHẨU PHẦN ĂN,TUYỂN THỦ,COMBO NGỒI NET," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-16297299344391642751994.jpg' alt="6, BÀI VIẾT ĐÁNG CHÚ Ý,GAME THỦ,KHẨU PHẦN ĂN,TUYỂN THỦ,COMBO NGỒI NET," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-16297299875452004503009.jpg' alt="7, BÀI VIẾT ĐÁNG CHÚ Ý,GAME THỦ,KHẨU PHẦN ĂN,TUYỂN THỦ,COMBO NGỒI NET," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/133514250583805952/2021/8/23/photo-1-1629730018829550818520.jpg' alt="8, BÀI VIẾT ĐÁNG CHÚ Ý,GAME THỦ,KHẨU PHẦN ĂN,TUYỂN THỦ,COMBO NGỒI NET," note=''/>
<ContentImage src='https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-162973004788568925826.jpg' alt="9, BÀI VIẾT ĐÁNG CHÚ Ý,GAME THỦ,KHẨU PHẦN ĂN,TUYỂN THỦ,COMBO NGỒI NET," note=''/>


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
