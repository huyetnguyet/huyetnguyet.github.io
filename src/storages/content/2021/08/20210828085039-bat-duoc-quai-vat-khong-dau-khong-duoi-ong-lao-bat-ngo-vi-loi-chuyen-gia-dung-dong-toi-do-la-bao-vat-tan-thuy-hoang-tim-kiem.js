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
"timestamp": '28/08/2021 08:50 AM',
"title": 'Bắt được “quái vật” không đầu không đuôi, ông lão bất ngờ vì lời chuyên gia: Đừng động tới, đó là bảo vật Tần Thủy Hoàng tìm kiếm!',
"description": '“Quái vật” mà lão Dương bắt được có gì đáng sợ đến thế? Tại sao lại liên quan đến Tần Thủy Hoàng?',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-16301428360372019310079.jpg',
"alt": 'Tần Thủy Hoàng,Sông Dương Tử,dây ruy băng,người hàng xóm,phát hiện ra,thời cổ đại,gốc tự do,tế bào gốc,phòng chống ung thư,',
"category": 'news',
"date": '28/08/2021',
"time": '08:50 AM',
"link": '/bat-duoc-quai-vat-khong-dau-khong-duoi-ong-lao-bat-ngo-vi-loi-chuyen-gia-dung-dong-toi-do-la-bao-vat-tan-thuy-hoang-tim-kiem',
"zcomponent": 'page_20210828085039',
"filepath": './20210828085039-bat-duoc-quai-vat-khong-dau-khong-duoi-ong-lao-bat-ngo-vi-loi-chuyen-gia-dung-dong-toi-do-la-bao-vat-tan-thuy-hoang-tim-kiem.js'
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
  "Bắt được “quái vật” không đầu không đuôi, ông lão bất ngờ vì lời chuyên gia: Đừng động tới, đó là bảo vật Tần Thủy Hoàng tìm kiếm!";
const author = "NGUYỆT PHẠM,";
const source = "Trí Thức Trẻ";
const timestamp = "28/08/2021 08:50 AM";
const description =
  "“Quái vật” mà lão Dương bắt được có gì đáng sợ đến thế? Tại sao lại liên quan đến Tần Thủy Hoàng?";
const link =
  "bat-duoc-quai-vat-khong-dau-khong-duoi-ong-lao-bat-ngo-vi-loi-chuyen-gia-dung-dong-toi-do-la-bao-vat-tan-thuy-hoang-tim-kiem";
const tagparam = [
  "Tần Thủy Hoàng",
  "Sông Dương Tử",
  "dây ruy băng",
  "người hàng xóm",
  "phát hiện ra",
  "thời cổ đại",
  "gốc tự do",
  "tế bào gốc",
  "phòng chống ung thư",
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

export default function page_20210828085039() {
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
                      “Quái vật” mà lão Dương bắt được có gì đáng sợ đến thế?
                      Tại sao lại liên quan đến <strong>Tần Thủy Hoàng</strong>?
                    </p>
                    <p>
                      Vào một buổi tối đẹp trời, ông lão họ Dương đang câu cá ở
                      trên <strong>sông Dương Tử</strong> bỗng thấy lưới nặng
                      trĩu. Ông Dương mừng thầm chắc mẩm mình câu được một con
                      cá lớn rồi. Nào ngờ lúc nhấc lưới, ông chẳng thấy cá đâu
                      mà chỉ thấy một "con quái vật " không đầu không đuôi, nó
                      to như một con rùa nhưng lại không có mai.
                    </p>
                    <p>
                      "Con quái vật" trông khá giống một viên đá nhưng lại không
                      hề nặng. Trái lại, nó mềm như một viên thịt, sờ vào bề mặt
                      còn có cảm giác dẻo và dính.
                    </p>
                    <p>
                      Tuy rất sợ nhưng ông Dương vẫn mang nó về, ông còn lấy một{" "}
                      <strong>dây ruy băng</strong> đỏ buộc quanh "con quái vật"
                      này. Bởi theo tập tục ở quê ông, chỉ cần buộc dây vải đỏ
                      quanh một vật là có thể tránh xui xẻo.
                    </p>
                    <p>
                      Theo ông Dương, con "quái vật" không cứng, rất mềm, sờ vào
                      thấy dính và dẻo (Ảnh: Kknews)
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-16301428360372019310079.jpg"
                      alt="1, Tần Thủy Hoàng,Sông Dương Tử,dây ruy băng,người hàng xóm,phát hiện ra,thời cổ đại,gốc tự do,tế bào gốc,phòng chống ung thư,"
                      note=""
                    />

                    <p>
                      Sau khi ông Dương đem "con quái vật" về nhà thì rất nhiều{" "}
                      <strong>người hàng xóm</strong> kéo sang xem. Ai ai cũng
                      tò mò muốn sờ một lần vào nó. Họ{" "}
                      <strong>phát hiện ra</strong> rằng trên thân "con quái
                      vật" một vài sợi râu thò ra như rễ cây, còn lại không có
                      bất kỳ đặc điểm nào khác. Nhưng sau một hồi xem xét họ vẫn
                      không thể nghĩ được nó là gì.
                    </p>
                    <p>
                      Con trai của ông Dương cho rằng để biết được "con quái
                      vật" là cây, đá hay động vật thì chỉ có cách lấy dao cắt
                      đôi nó ra. Tuy nhiên, mọi người lại nghĩ, nếu nó thực sự
                      là một con vật thì cắt ra nhỡ nó chết mất thì sao, vì vậy,
                      họ đã thống nhất không nên hành động như vậy.
                    </p>
                    <p>
                      Cuối cùng, lão Vương hàng xóm nêu ý kiến rằng, để ông ta
                      chụp lại một vài bức ảnh của "con quái vật" rồi nhờ một
                      chuyên gia sinh học giải đáp giúp.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-1-16301428370621040552227.jpg"
                      alt="2, Tần Thủy Hoàng,Sông Dương Tử,dây ruy băng,người hàng xóm,phát hiện ra,thời cổ đại,gốc tự do,tế bào gốc,phòng chống ung thư,"
                      note=""
                    />

                    <p>
                      Nào ngờ, ngay khi vừa xem ảnh, vị chuyên gia này đã vội
                      vàng nói: "Mọi người đừng động tới nó. Đó là một loại
                      thuốc trường sinh mà <strong>Tần Thủy Hoàng</strong> tìm
                      kiếm. Hãy chờ tôi tới tận nơi xem".
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Sau khi đem con "quái vật" về, nó đã thu hút sự chú ý của
                      nhiều người xung quanh (Ảnh: Kknews)
                    </p>
                    <p>
                      Thì ra, theo vị chuyên gia sinh học này, con "quái vật" mà
                      lão Dương tìm thấy có thể là linh chi Thái Tuế trong
                      truyền thuyết. Nếu thực sự là linh chi Thái Tuế thì nó có
                      giá trị lên tới 39.000 USD/gram (khoảng 780 triệu
                      VND/gram).
                    </p>
                    <p>
                      Kể từ <strong>thời cổ đại</strong>, trong sử sách đã ghi
                      lại rằng, linh chi Thái Tuế hay còn gọi là "Thịt cỏ linh
                      chi hoang dã" được <strong>Tần Thủy Hoàng</strong> tìm
                      kiếm khắp nơi để làm nguyên liệu thuốc giúp ông trường
                      sinh bất lão, thọ ngang trời đất.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/28/photo-2-1630142837599296021119.jpg"
                      alt="3, Tần Thủy Hoàng,Sông Dương Tử,dây ruy băng,người hàng xóm,phát hiện ra,thời cổ đại,gốc tự do,tế bào gốc,phòng chống ung thư,"
                      note=""
                    />

                    <p>
                      Ngoài ra, trong "Bảo thảo cương mục" của học giả, dược giả
                      nổi tiếng Lý Thời Trân cũng ghi chép rằng, linh chi Thái
                      Tuế là một loại thuốc tiên, có thể ăn được, có thể dùng
                      làm thuốc. Nếu thường xuyên được ăn có thể trẻ mãi không
                      già, thân thể nhẹ nhàng, tuổi thọ kéo dài.
                    </p>
                    <p>
                      Theo chuyên gia sinh học, nhiều khả năng đây là "Linh chi
                      Thái Tuế" trong truyền thuyết (Ảnh: Kknews)
                    </p>
                    <p>
                      Các chuyên gia của Học viện Đông y Thiên Tân đã nghiên cứu
                      và xác nhận rằng: Loài linh chi này chứa hàm lượng lớn
                      Polysaccharides, protein, chất béo, nhiều loại axit amin
                      cũng như các nguyên tố giàu dinh dưỡng khác, giúp cải
                      thiện hệ thống tuần hoàn của cơ thể, điều tiết hormone
                      estrogen và kích thích sản sinh tế bào miễn dịch.
                    </p>
                    <p>
                      Hơn nữa, loại linh chi này đặc biệt giàu PPQ, chất có khả
                      năng điều tiết miễn dịch, ngừa các bệnh về gan, ngăn ngừa
                      tế bào <strong>gốc tự do</strong> làm tổn thương cơ thể,
                      đặc biệt có khả năng <strong>phòng chống ung thư</strong>.
                    </p>
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
