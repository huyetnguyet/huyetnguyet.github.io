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
"timestamp": '28/08/2021 08:49 AM',
"title": 'Bộ Công thương xác minh thông tin mì Hảo Hảo bị Ireland thu hồi vì chứa chất cấm',
"description": 'Bộ Công thương cho hay, đang khẩn trương xác minh thông tin liên quan đến cảnh báo của Cơ quan An toàn thực phẩm Ireland về sản phẩm mì Hảo Hảo và miến Good của Acecook.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-16301136604021718582260.jpeg',
"alt": 'Bộ Công Thương,an toàn thực phẩm,mì ăn liền,Acecook Việt Nam,',
"category": 'news',
"date": '28/08/2021',
"time": '08:49 AM',
"link": '/bo-cong-thuong-xac-minh-thong-tin-mi-hao-hao-bi-ireland-thu-hoi-vi-chua-chat-cam',
"zcomponent": 'page_20210828084908',
"filepath": './20210828084908-bo-cong-thuong-xac-minh-thong-tin-mi-hao-hao-bi-ireland-thu-hoi-vi-chua-chat-cam.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = 'news';
const categoryLink = '/news';
const title = 'Bộ Công thương xác minh thông tin mì Hảo Hảo bị Ireland thu hồi vì chứa chất cấm';
const author = 'HOÀNG ĐAN,';
const source = 'Trí thức trẻ';
const timestamp = '28/08/2021 08:49 AM';
const description = 'Bộ Công thương cho hay, đang khẩn trương xác minh thông tin liên quan đến cảnh báo của Cơ quan An toàn thực phẩm Ireland về sản phẩm mì Hảo Hảo và miến Good của Acecook.';
const link = 'bo-cong-thuong-xac-minh-thong-tin-mi-hao-hao-bi-ireland-thu-hoi-vi-chua-chat-cam';
const tagparam = ["Bộ Công Thương","an toàn thực phẩm","mì ăn liền","Acecook Việt Nam",];
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

export default function page_20210828084908() {
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

<p><strong>Bộ Công thương</strong> cho hay, đang khẩn trương xác minh thông tin liên quan đến cảnh báo của Cơ quan <strong>An toàn thực phẩm</strong> Ireland về sản phẩm mì Hảo Hảo và miến Good của Acecook.</p>
<p>Ngày 20/8, Cơ quan <strong>An toàn thực phẩm</strong> Ireland (FSAI) đã ra thông báo thu hồi một số lô sản phẩm <strong>mì ăn liền</strong> có chứa chất Ethylene Oxide, trong đó, bao gồm mì Hảo Hảo vị tôm chua cay (loại 77 g, hạn sử dụng đến 24/9/2022), miến Good vị sườn heo (loại 56 g, hạn sử dụng đến 10/11/2022).</p>
<p>2 sản phẩm là mì Hảo Hảo và miến Good do Công ty <strong>Acecook Việt Nam</strong> sản xuất.</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-16301136604021718582260.jpeg' alt="1, Bộ Công Thương,an toàn thực phẩm,mì ăn liền,Acecook Việt Nam," note='Mì tôm chua cay Hảo Hảo bị thu hồi do chứa chất Ethylene Oxide (Ảnh: FSAI)'/>
<p>Theo <strong>Bộ Công thương</strong>, ngay khi nắm được thông tin cảnh báo, Bộ đã đề nghị Công ty cổ phần <strong>Acecook Việt Nam</strong> khẩn trương báo cáo về quy trình sản xuất cũng như sự khác biệt giữa lô sản phẩm tiêu thụ trong nước và xuất khẩu đối với 2 sản phẩm mì Hảo Hảo, miến Good do công ty sản xuất, để đánh giá sự xuất hiện chất Ethylene Oxide (là chất không thuộc danh mục được quy định về giới hạn tối đa dư lượng thuốc bảo vệ thực vật trong thực phẩm theo Thông tư 50 của Bộ Y tế) trong sản phẩm như cảnh báo nêu.</p>
<p>Đồng thời, Bộ chỉ đạo các đơn vị chức năng phối hợp rà soát toàn bộ danh mục sản phẩm do Công ty cổ phần <strong>Acecook Việt Nam</strong> hiện đang phân phối trong nước, kiểm tra xác minh làm rõ quy trình sản xuất và xác định các vi phạm nếu có để bảo vệ quyền lợi người tiêu dùng.</p>
<p>Bộ cũng cho hay, theo quy định của Luật <strong>An toàn thực phẩm</strong> Việt Nam, các tổ chức, cá nhân sản xuất, kinh doanh thực phẩm vi phạm pháp luật về an toàn thực phẩm thì tùy theo tính chất, mức độ vi phạm mà bị xử lý vi phạm hành chính hoặc bị truy cứu trách nhiệm hình sự, nếu gây thiệt hại thì phải bồi thường và khắc phục hậu quả theo quy định của pháp luật.</p>
<p>Trước đó, theo FSAI, việc tiêu thụ các sản phẩm nhiễm Ethylene Oxide tuy không gây nguy hiểm cấp tính cho sức khỏe nhưng có thể gây ung thư nếu thường xuyên sử dụng trong thời gian dài. Do đó, người tiêu dùng cần hạn chế việc tiếp xúc với chất này.</p>
<RelationNewsInPage category={category} />
<p>FSAI cho biết, thông báo thu hồi tại điểm bán hàng sẽ được hiển thị trong các cửa hàng được cung cấp cùng với các lô liên quan.</p>
<p>Trả lời báo chí sau đó, đại diện <strong>Acecook Việt Nam</strong> khẳng định sản phẩm bị thu hồi trong thông tin được đề cập là sản phẩm xuất khẩu, không cùng lô hàng sản xuất với sản phẩm nội địa tại Việt Nam.</p>
<p>"Công ty <strong>Acecook Việt Nam</strong> không sử dụng công nghệ Ethylene Oxide ở bất kỳ công đoạn sản xuất nào.</p>
<p>Hiện chúng tôi đang tiến hành phân tích, kiểm tra và điều tra trên diện rộng ở các nguyên liệu, thiết bị, quy trình liên quan để nhận định nguyên nhân và sẽ có biện pháp đối ứng kịp thời, hữu hiệu nhằm đảm bảo chất lượng sản phẩm và an toàn cho sức khỏe của người tiêu dùng.</p>
<p>Đồng thời, chúng tôi cũng đã làm việc với các nhà cung cấp nguyên liệu và nhà cung cấp cũng khẳng định không sử dụng Ethylene Oxide trong quy trình sản xuất của họ.</p>
<p>Chúng tôi đã yêu cầu họ kiểm soát và tuyệt đối không sử dụng công nghệ Ethylene Oxide trong quy trình sản xuất, tuyệt đối thực hiện đúng theo các cam kết này với <strong>Acecook Việt Nam</strong>", đại diện Acecook trả lời.</p>
<ContentImage src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-16301136604021718582260.jpeg' alt="2, Bộ Công Thương,an toàn thực phẩm,mì ăn liền,Acecook Việt Nam," note=''/>


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
