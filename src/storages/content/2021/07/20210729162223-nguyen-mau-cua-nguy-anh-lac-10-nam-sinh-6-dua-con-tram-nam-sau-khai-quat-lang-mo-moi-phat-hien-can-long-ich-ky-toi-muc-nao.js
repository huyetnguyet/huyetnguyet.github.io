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
"timestamp": '29/07/2021 04:22 PM',
"title": 'Nguyên mẫu của Ngụy Anh Lạc: 10 năm sinh 6 đứa con, trăm năm sau khai quật lăng mộ mới phát hiện Càn Long ích kỷ tới mức nào',
"description": 'Ngụy Anh Lạc gây ấn tượng trong lòng khán giả với hình tượng là một người phụ nữ đầy lý trí và quyết đoán, nguyên mẫu của nhân vật này thực sự có số phận thế nào?',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/25/-16246007872231961607847.jpg',
"alt": 'Ngụy Anh Lạc,Càn Long,',
"category": 'news',
"date": '29/07/2021',
"time": '04:22 PM',
"link": '/nguyen-mau-cua-nguy-anh-lac-10-nam-sinh-6-dua-con-tram-nam-sau-khai-quat-lang-mo-moi-phat-hien-can-long-ich-ky-toi-muc-nao',
"zcomponent": 'page_20210729162223',
"filepath": './20210729162223-nguyen-mau-cua-nguy-anh-lac-10-nam-sinh-6-dua-con-tram-nam-sau-khai-quat-lang-mo-moi-phat-hien-can-long-ich-ky-toi-muc-nao.js'
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
  "Nguyên mẫu của Ngụy Anh Lạc: 10 năm sinh 6 đứa con, trăm năm sau khai quật lăng mộ mới phát hiện Càn Long ích kỷ tới mức nào";
const author = "PHẠM TRANG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/07/2021 04:22 PM";
const description =
  "Ngụy Anh Lạc gây ấn tượng trong lòng khán giả với hình tượng là một người phụ nữ đầy lý trí và quyết đoán, nguyên mẫu của nhân vật này thực sự có số phận thế nào?";
const link =
  "nguyen-mau-cua-nguy-anh-lac-10-nam-sinh-6-dua-con-tram-nam-sau-khai-quat-lang-mo-moi-phat-hien-can-long-ich-ky-toi-muc-nao";
const tagparam = ["Ngụy Anh Lạc", "Càn Long"];
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

export default function page_20210729162223() {
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
                      Trong "Diên Hi công lược", nữ chính Ngụy Anh Lạc đã từng
                      nói: "Nếu ta cho ngươi ba phần, ngươi phải trả lại năm
                      phần, cho năm phần phải trả lại mười phần. Nếu cứ âm thầm
                      nhận phần thiệt về mình, sẽ chẳng ai trân trọng.”
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/25/-16246007872231961607847.jpg"
                      alt="1, Ngụy Anh Lạc,Càn Long,"
                      note=""
                    />
                    <p>
                      <strong>Ngụy Anh Lạc</strong> và Càn Long trong "Diên Hi
                      công lược"
                    </p>
                    <p>
                      Vai diễn của Ngụy Anh Lạc để lại ấn tượng sâu sắc trong
                      lòng khán giả về sự độc đoán và lý trí, để rồi trở thành
                      người thắng cuộc cuối cùng. Trong bộ phim “Hoàn Châu cách
                      cách” cũng từng nhắc đến Linh Phi (tức Ngụy Anh Lạc) được{" "}
                      <strong>Càn Long</strong> vô cùng sủng ái. Liệu nhân vật
                      này có thực sự tồn tại trong lịch sử?
                    </p>
                    <p>
                      Nguyên mẫu của Ngụy Anh Lạc là mẫu hậu của Hoàng đế Gia
                      Khánh, Hiếu Nghi Thuần Hoàng hậu Ngụy Giai Thị. Bà là
                      Hoàng hậu duy nhất dưới triều Thanh mang dòng máu Hán. Tuy
                      nhiên, vào thời <strong>Càn Long</strong>, Ngụy Giai Thị
                      vẫn chưa được phong làm Hoàng Hậu, lần tấn phong cuối cùng
                      là năm Càn Long thứ 30 với địa vị là Hoàng quý phi.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/25/-16246007891312061060421.jpg"
                      alt="2, Ngụy Anh Lạc,Càn Long,"
                      note=""
                    />
                    <p>Linh phi trong phim "Hoàn châu cách cách"</p>
                    <p>
                      Ngụy Giai Thị là con gái của Ngụy Thanh Thái, người đứng
                      đầu quản lý nội cung. Ngụy Giai Thị kém{" "}
                      <strong>Càn Long</strong> 16 tuổi, thông qua việc tuyển tú
                      của Nội vụ phủ mà vào tiến cung. Dù không có ghi chép về
                      việc Ngụy Giai Thị từng là cung nữ nhưng trong bài thơ của
                      mình, Càn Long từng viết: “Hoàng hậu chước giáo dưỡng giả
                      kim tịnh phụ đích cung” (Nhờ sự dạy bảo của hoàng hậu
                      trước kia mà nay cũng đã làm chủ hậu cung), ý nói Ngụy
                      Giai Thị và Hoàng hậu Hiếu Hiền (Phú Sát thị) từng có một
                      khoảng thời gian ở bên nhau
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/25/-16246007891601079438482.jpg"
                      alt="3, Ngụy Anh Lạc,Càn Long,"
                      note=""
                    />
                    <p>
                      Vào năm <strong>Càn Long</strong> thứ 10, Ngụy Giai Thị
                      được phong Tấn, lấy chữ “Lệnh” làm tự. Trong “Hồng xưng
                      thông dụng” (Những danh xưng đẹp phổ biến) có ghi lại, chữ
                      “Lệnh” trong tiếng Mãn mang ý nghĩa “Thông minh”. Có thể
                      thấy Hoàng đế Càn Long thích Ngụy Giai Thị tới mức nào.
                      Sau khi cha của Ngụy Giai Thị là Ngụy Thanh Thái qua đời,
                      Hoàng đế Càn Long còn phái Phó Hằng về giải quyết cho
                      huynh đệ trong nhà Ngụy Giai Thị các vấn đề liên quan đến
                      nhà cửa, công ăn việc làm, nợ nần...
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/25/-1624600789629173933389.jpg"
                      alt="4, Ngụy Anh Lạc,Càn Long,"
                      note=""
                    />
                    <p>
                      Ngoài ra, Ngụy Giai thị đã liên tiếp sinh ra 6 người con
                      trong vòng 10 năm, 4 trai 2 gái. Bà là người sinh cho
                      Hoàng đế <strong>Càn Long</strong> nhiều con nhất. Con
                      trai trưởng và thứ ba đều mất từ sớm. Con gái lớn Cố Luân
                      Hòa Tĩnh công chúa từ năm 14 tuổi đã gả cho con trai của
                      Thành Cổn Trát Bố là Lạp Vượng Đa Nhĩ Tể. Tuy nhiên, sau 6
                      năm kết hôn, Cố Luân Hòa Tĩnh công chúa vì mang bệnh nặng
                      mà qua đời.
                    </p>
                    <p>
                      Con gái thứ hai là Hòa Thạc Hòa Khác Công chúa kết hôn
                      cùng Trát Lan Thái là con trai của Nhất đẳng Vũ nghị Mưu
                      Dũng công Triệu Huệ. Tuy nhiên, Hòa Thạc Hòa Khác công
                      chúa cũng chỉ sống đến năm 23 tuổi. Con trai thứ của Ngụy
                      Giai Thị - Vĩnh Diễm sau này trở thành Hoàng đế, con trai
                      thứ tư là Vĩnh Lân sống đến năm 55 tuổi. Dưới thời Gia
                      Khánh, ông được ban cho sống tại ngôi nhà của Hòa Thân như
                      hằng mong muốn.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Sau khi Lệnh Ý Hoàng quý phi (tức Ngụy Giai thị) có thai
                      Vĩnh Lân, Càn Long đã cho người tu sửa tòa nhà phía Đông
                      Dưỡng tâm điện - nơi chỉ Hoàng hậu mới có thể ở. Sau khi
                      Lệnh phi chuyển đến ở nơi này, Hiếu Hiền Thuần hoàng hậu
                      vì lâm trọng bệnh mà qua đời, Ngụy Giai thị trở thành
                      người đứng đầu Hậu cung.
                    </p>
                    <p>
                      Sử cũ ghi lại, Lệnh phi mất năm Càn Long thứ 40 (năm 1775)
                      ở tuổi 49 và được chôn cất tại Thanh Dụ lăng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/25/-16246007891921591261730.jpg"
                      alt="5, Ngụy Anh Lạc,Càn Long,"
                      note=""
                    />
                    <p>
                      Đến năm 1928, Tôn Điện Anh đã đột nhập vào Thanh Dụ lăng
                      và Thanh Đông lăng. Ngay lập tức, Phổ Nghi cùng những
                      người khác yêu cầu phải nghiêm khắc xử phạt Tôn Điện Anh
                      cũng như cử một số người “giải quyết hậu quả”. Khi tiến
                      vào Thanh Dụ lăng, người ta phát hiện một thi thể phụ nữ,
                      đó chính là Lệnh Ý hoàng quý phi.
                    </p>
                    <p>
                      Có một điều khiến tất cả mọi người đều rất khó hiểu, bởi
                      vì có đến 6 người được chôn cất cùng trong lăng mộ nhưng
                      chỉ có thân xác Ngụy Giai Thị không hề bị phân hủy, gương
                      mặt giống như đang còn sống. Sau khi khám nghiệm, người ta
                      phát hiện trong thi thể của Ngụy Giai thị có chứa chất độc
                      mãn tính. Chính vì vậy mà nhiều người nói rằng Ngụy Giai
                      thị đã Càn Long hạ độc.
                    </p>
                    <p>
                      Nhưng cũng có người nói rằng, Ngụy Giai Thị 10 năm sinh ra
                      6 người con, lại thường cùng Càn Long đi chu du khắp nơi,
                      thân thể tự nhiên sẽ yếu ớt, quanh năm phải dùng thuốc bổ,
                      mà trong thuốc sẽ có 3 phần là độc dược, dần dần tích tụ,
                      hậu quả có thể lường trước.
                    </p>
                    <p>
                      Dù lý do nào đi chăng nữa, Càn Long là một người khá ích
                      kỷ, nếu như ông ta thực sự quan tâm Ngụy Giai Thị, sao có
                      thể mặc kệ sức khỏe của bà như vậy?
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/25/-16246007896491504749005.jpg"
                      alt="6, Ngụy Anh Lạc,Càn Long,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, dù có dùng cách nào đi chăng nữa thì thi thể
                      Ngụy Giai Thị không thể trăm năm vẫn còn nguyên vẹn,
                      nguyên nhân cái chết của bà có liên quan đến Càn Long hay
                      không vẫn còn là một bí ẩn.
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
