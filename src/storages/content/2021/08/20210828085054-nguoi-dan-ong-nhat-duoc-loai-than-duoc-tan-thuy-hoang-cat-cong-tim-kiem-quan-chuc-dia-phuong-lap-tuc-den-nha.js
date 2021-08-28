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
"title": 'Người đàn ông nhặt được loại "thần dược" Tần Thủy Hoàng cất công tìm kiếm, quan chức địa phương lập tức đến nhà',
"description": 'Được mệnh danh là "thịt cây", loại dược thảo này được săn lùng với giá cao ngất ngưởng.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/17/photo-1-16291914182371902590336.jpg',
"alt": 'vật thể lạ,trường sinh bất lão,',
"category": 'news',
"date": '28/08/2021',
"time": '08:50 AM',
"link": '/nguoi-dan-ong-nhat-duoc-loai-than-duoc-tan-thuy-hoang-cat-cong-tim-kiem-quan-chuc-dia-phuong-lap-tuc-den-nha',
"zcomponent": 'page_20210828085054',
"filepath": './20210828085054-nguoi-dan-ong-nhat-duoc-loai-than-duoc-tan-thuy-hoang-cat-cong-tim-kiem-quan-chuc-dia-phuong-lap-tuc-den-nha.js'
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
  'Người đàn ông nhặt được loại "thần dược" Tần Thủy Hoàng cất công tìm kiếm, quan chức địa phương lập tức đến nhà';
const author = "THUY ANH,";
const source = "Pháp luật và bạn đọc";
const timestamp = "28/08/2021 08:50 AM";
const description =
  'Được mệnh danh là "thịt cây", loại dược thảo này được săn lùng với giá cao ngất ngưởng.';
const link =
  "nguoi-dan-ong-nhat-duoc-loai-than-duoc-tan-thuy-hoang-cat-cong-tim-kiem-quan-chuc-dia-phuong-lap-tuc-den-nha";
const tagparam = ["vật thể lạ", "trường sinh bất lão"];
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

export default function page_20210828085054() {
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
                      Cách đây vài năm, tại một ngôi làng nhỏ ở thị trấn Trường
                      An, thành phố Đông Cương, tỉnh Liêu Ninh, Trung Quốc, một
                      người đàn ông có tên Vương Thành Đức vô tình tìm thấy một{" "}
                      <strong>vật thể lạ</strong> sần sùi trên núi. Ông tò mò
                      đưa tay sờ thì thấy nó có vân thịt đều nhau, đặc biệt nó
                      còn có một chút đàn hồi.
                    </p>
                    <p>
                      Ông Vương Thành Đức đoán đây là loại linh chi Thái tuế nên
                      đã mang về nhà, sự việc cũng nhanh chóng lan truyền khắp
                      làng, dân làng gần đó đều kéo đến xem và bàn tán xôn xao.
                      Quan chức địa phương cũng lập tức đến nhà người đàn ông
                      tìm hiểu, và sau đó xác định đây đúng là linh chi Thái
                      tuế.
                    </p>
                    <p>
                      Được biết, loại linh chi này có giá trung bình mỗi kg lên
                      tới khoảng 5.000 nhân dân tệ (tương đương 17,5 triệu VNĐ).
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/17/photo-1-16291914182371902590336.jpg"
                      alt="1, vật thể lạ,trường sinh bất lão,"
                      note="Một cây Linh chi Thái tuế được tìm thấy (Ảnh: QQ)"
                    />
                    <p>
                      Theo các lời truyền tụng, linh chi Thái tuế là một thứ
                      thần dược mà Tần Thủy Hoàng đã tìm kiếm, là một loại dược
                      liệu rất quý hiếm. Tần Thủy Hoàng luôn ám ảnh làm sao để
                      có thể đạt được trường sinh bất tử , đã không ngại làm
                      những điều kỳ quái trong đó có việc cho người đi tìm kiếm
                      Linh chi Thái tuế. Nhưng cho đến khi qua đời, ông vẫn chưa
                      có được cái gọi là thuốc trường sinh.
                    </p>
                    <p>
                      Theo nhiều ghi chép cổ thì loại linh chi Thái tuế có thể
                      ăn được và dùng để chữa bệnh, là loại thượng hạng trong
                      hàng trăm loại thuốc, được coi là "thượng phẩm trong kinh
                      này", tác dụng giúp "cơ thể nhẹ nhõm,{" "}
                      <strong>trường sinh bất lão</strong>, kéo dài tuổi thọ".
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Một số tài liệu đông y Trung Quốc có ghi: "Linh chi Thái
                      tuế vị đắng, tính bình, không độc, có tác dụng bổ tỳ vị
                      phổi, dưỡng gan thận. Ngoài ra nó còn có tác dụng rõ rệt
                      trong việc nâng cao khả năng miễn dịch, chống mệt mỏi,
                      điều hòa thể lực, đặc biệt có tác dụng đối với một số bệnh
                      khó và phức tạp, ngoài ra còn có tác dụng trấn áp khối
                      u..."
                    </p>
                    <p>
                      Theo mô tả, loại linh chi này là nấm giống như thịt. Chúng
                      được gắn vào những tảng đá lớn và có đầu và đuôi, là một
                      "loài sinh vật". Loại màu đỏ giống san hô, loại màu trắng
                      giống như mỡ, loại màu đen giống như sơn mài, loại màu
                      xanh lục giống như lông ngọc lam...
                    </p>
                    <p>
                      Ông Lưu Chí Quân, người sáng lập mạng lưới Thương mại Linh
                      chi Thái tuế của Trung Quốc, cho biết mỗi loại linh chi
                      được tìm thấy ở những nơi khác nhau thì giá cũng khác
                      nhau.
                    </p>
                    <p>
                      Đầu tiên là màu sắc, màu sắc của nấm linh chi hoang dã
                      càng nhạt thì chất lượng càng tốt và giá trị dinh dưỡng
                      càng cao. Thứ hai, theo quan điểm về độ tinh khiết, linh
                      chi hoang mọc trong đất, trong quá trình sinh trưởng
                      thường hấp thụ một số tạp chất hoặc bị ngâm trong nước giá
                      trị sẽ thấp hơn. Cuối cùng là hàm lượng nước càng thấp có
                      nghĩa là thời gian sinh trưởng càng dài và chất lượng của
                      linh chi càng tốt, vì vậy giá cả tương đối đắt.
                    </p>
                    <p>
                      Cũng theo ông Lưu Chí Quân, hiện nay linh chi Thái tuế
                      không nhiều vì đây là loài phát triển rất chậm, chỉ tăng
                      trưởng 5% một năm nên việc giá cả tăng cao lên tới hàng
                      nghìn nhân dân tệ mỗi kg cũng là điều dễ hiểu.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/17/photo-1-16291914182371902590336.jpg"
                      alt="2, vật thể lạ,trường sinh bất lão,"
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
