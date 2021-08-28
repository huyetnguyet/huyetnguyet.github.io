import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '28/08/2021 08:48 AM',
"title": 'Mì Hảo Hảo bị Ireland thu hồi vì chứa chất có thể gây ung thư, Acecook Việt Nam nói gì?',
"description": 'Theo Cơ quan An toàn Thực phẩm Ireland, việc tiêu thụ các sản phẩm nhiễm Ethylene Oxide tuy không gây nguy hiểm cấp tính cho sức khỏe nhưng có thể gây ung thư nếu thường xuyên sử dụng trong thời gian dài. Do đó, người tiêu dùng cần hạn chế việc tiếp xúc với chất này.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-1-16300763210751304648625.png',
"alt": 'tin nóng xã hội,Mì Hảo Hảo bị Ireland thu hồi,Mì Hảo Hảo chứa chất độc hại,',
"category": 'news',
"date": '28/08/2021',
"time": '08:48 AM',
"link": '/mi-hao-hao-bi-ireland-thu-hoi-vi-chua-chat-co-the-gay-ung-thu-acecook-viet-nam-noi-gi',
"zcomponent": 'page_20210828084852',
"filepath": './20210828084852-mi-hao-hao-bi-ireland-thu-hoi-vi-chua-chat-co-the-gay-ung-thu-acecook-viet-nam-noi-gi.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  "Mì Hảo Hảo bị Ireland thu hồi vì chứa chất có thể gây ung thư, Acecook Việt Nam nói gì?";
const author = "PV,";
const source = "Trí thức trẻ";
const timestamp = "28/08/2021 08:48 AM";
const description =
  "Theo Cơ quan An toàn Thực phẩm Ireland, việc tiêu thụ các sản phẩm nhiễm Ethylene Oxide tuy không gây nguy hiểm cấp tính cho sức khỏe nhưng có thể gây ung thư nếu thường xuyên sử dụng trong thời gian dài. Do đó, người tiêu dùng cần hạn chế việc tiếp xúc với chất này.";
const link =
  "mi-hao-hao-bi-ireland-thu-hoi-vi-chua-chat-co-the-gay-ung-thu-acecook-viet-nam-noi-gi";
const tagparam = [
  "tin nóng xã hội",
  "Mì Hảo Hảo bị Ireland thu hồi",
  "Mì Hảo Hảo chứa chất độc hại",
];
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

export default function page_20210828084852() {
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
              <div className="author">{author}</div> - Theo {source} |{" "}
              {timestamp}
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
                    <p>
                      Theo Cơ quan An toàn Thực phẩm Ireland, việc tiêu thụ các
                      sản phẩm nhiễm Ethylene Oxide tuy không gây nguy hiểm cấp
                      tính cho sức khỏe nhưng có thể gây ung thư nếu thường
                      xuyên sử dụng trong thời gian dài. Do đó, người tiêu dùng
                      cần hạn chế việc tiếp xúc với chất này.
                    </p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-1-1630076379574984892254.jpg"
                      alt="1, tin nóng xã hội,Mì Hảo Hảo bị Ireland thu hồi,Mì Hảo Hảo chứa chất độc hại,"
                      note="Cơ quan An toàn Thực phẩm Ireland (FSAI) ra thông báo thu hồi một số lô sản phẩm mì ăn liền có chứa chất Ethylene Oxide"
                    />
                    <p>
                      3 dòng sản phẩm trong danh sách thu hồi của FSAI bao gồm
                      mì Hảo Hảo vị tôm chua cay (loại 77 g, hạn sử dụng đến
                      24/9/2022), miến Good vị sườn heo (loại 56 g, hạn sử dụng
                      đến 10/11/2022), mì Yato vị hải sản (loại 120 g, hạn sử
                      dụng đến 30/11/2022).
                    </p>
                    <p>
                      2 sản phẩm là mì Hảo Hảo và miến Good do công ty Acecook
                      Việt Nam sản xuất, sản phẩm còn lại có xuất xứ từ Trung
                      Quốc.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      FSAI cho biết, thông báo thu hồi tại điểm bán hàng sẽ được
                      hiển thị trong các cửa hàng được cung cấp cùng với các lô
                      liên quan.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-1-16300763185591388385851.png"
                      alt="2, tin nóng xã hội,Mì Hảo Hảo bị Ireland thu hồi,Mì Hảo Hảo chứa chất độc hại,"
                      note="3 dòng sản phẩm trong danh sách thu hồi của FSAI bao gồm mì Hảo Hảo vị tôm chua cay, miến Good vị sườn heo, mì Yato vị hải sản"
                    />
                    <p>
                      Trả lời báo Thanh niên về vụ việc này, đại diện Acecook
                      Việt Nam khẳng định sản phẩm bị thu hồi trong thông tin
                      được đề cập là sản phẩm xuất khẩu, không cùng lô hàng sản
                      xuất với sản phẩm nội địa tại Việt Nam.
                    </p>
                    <p>
                      "Công ty Acecook Việt Nam không sử dụng công nghệ Ethylene
                      Oxide ở bất kỳ công đoạn sản xuất nào. Hiện chúng tôi đang
                      tiến hành phân tích, kiểm tra và điều tra trên diện rộng ở
                      các nguyên liệu, thiết bị, quy trình liên quan để nhận
                      định nguyên nhân và sẽ có biện pháp đối ứng kịp thời, hữu
                      hiệu nhằm đảm bảo chất lượng sản phẩm và an toàn cho sức
                      khỏe của người tiêu dùng. Đồng thời, chúng tôi cũng đã làm
                      việc với các nhà cung cấp nguyên liệu và nhà cung cấp cũng
                      khẳng định không sử dụng Ethylene Oxide trong quy trình
                      sản xuất của họ. Chúng tôi đã yêu cầu họ kiểm soát và
                      tuyệt đối không sử dụng công nghệ Ethylene Oxide trong quy
                      trình sản xuất, tuyệt đối thực hiện đúng theo các cam kết
                      này với Acecook Việt Nam" - Acecook trả lời.
                    </p>
                    <p>
                      Trước đó vào cuối năm 2020, Hàn Quốc cũng thu hồi một số
                      phở đóng gói của Công ty CP Acecook Việt Nam vì được cho
                      là có chứa hàm lượng Benzo(a)pyrene vượt quá giá trị tiêu
                      chuẩn trong dầu hương liệu có trong sản phẩm. Acecook Việt
                      Nam đã phản hồi đó là những sản phẩm phở ăn liền Peacock
                      được gia công theo đơn đặt hàng của Emart Hàn Quốc. Đây là
                      sản phẩm xuất khẩu không lưu hành tại thị trường Việt Nam.
                    </p>
                    <p>
                      Thời điểm đó, đơn vị này còn thông tin, từ quá trình rà
                      soát, hãng phát hiện chất Benzo(a)pyrene phát sinh từ thảo
                      quả sấy khô, một loại nguyên liệu gia vị thô được sử dụng
                      trong gói dầu của sản phẩm phở ăn liền, chứ hoàn toàn
                      không phát sinh trong bất kỳ công đoạn sản xuất sản phẩm
                      nào của nhà máy Acecook Việt Nam.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-1-16300763210751304648625.png"
                      alt="3, tin nóng xã hội,Mì Hảo Hảo bị Ireland thu hồi,Mì Hảo Hảo chứa chất độc hại,"
                      note=""
                    />
                  </div>
                  <AdsHorizontal />
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
