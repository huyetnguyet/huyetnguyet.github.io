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
"timestamp": '29/07/2021 04:24 PM',
"title": 'Đập bỏ tường, phòng khách của vợ chồng trẻ rộng đến mức chứa được 20 người, còn có góc làm việc chill hết nấc',
"description": 'Bộ sofa cực lớn trong phòng khách cũng là chi tiết khiến hội "sâu lười" thích mê đấy.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/26/d8f1c7616dc340199051e9ca7eb39097-16272931491721888550257.jpeg',
"alt": 'phòng làm việc,không gian sinh hoạt,bàn làm việc,phong cách Nhật Bản,Căn hộ chung cư,phòng ngủ,khoe nhà đẹp,house n home,',
"category": 'life',
"date": '29/07/2021',
"time": '04:24 PM',
"link": '/dap-bo-tuong-phong-khach-cua-vo-chong-tre-rong-den-muc-chua-duoc-20-nguoi-con-co-goc-lam-viec-chill-het-nac',
"zcomponent": 'page_20210729162434',
"filepath": './20210729162434-dap-bo-tuong-phong-khach-cua-vo-chong-tre-rong-den-muc-chua-duoc-20-nguoi-con-co-goc-lam-viec-chill-het-nac.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title =
  "Đập bỏ tường, phòng khách của vợ chồng trẻ rộng đến mức chứa được 20 người, còn có góc làm việc chill hết nấc";
const author = "HÀ BÍCH NGỌC,";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:24 PM";
const description =
  'Bộ sofa cực lớn trong phòng khách cũng là chi tiết khiến hội "sâu lười" thích mê đấy.';
const link =
  "dap-bo-tuong-phong-khach-cua-vo-chong-tre-rong-den-muc-chua-duoc-20-nguoi-con-co-goc-lam-viec-chill-het-nac";
const tagparam = [
  "phòng làm việc",
  "không gian sinh hoạt",
  "bàn làm việc",
  "phong cách Nhật Bản",
  "Căn hộ chung cư",
  "phòng ngủ",
  "khoe nhà đẹp",
  "house n home",
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

export default function page_20210729162434() {
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
                      Căn hộ của Jerry và Kelly có diện tích 132m2. Ban đầu ngôi
                      nhà có bốn <strong>phòng ngủ</strong>, nhưng sau khi tính
                      đến thói quen sinh hoạt, họ quyết định đập bỏ 1 phòng ngủ.
                    </p>
                    <p>
                      Bức tường ngăn cách giữa phòng khách và{" "}
                      <strong>phòng làm việc</strong> cũng được đập bỏ và thay
                      thế bằng hệ cửa kính.{" "}
                      <strong>Không gian sinh hoạt</strong> chung hiện tại rộng
                      rãi tới mức có thể chứa được 20 người.
                    </p>
                    <p>
                      Việc sử dụng cửa kính khung đen không chỉ giữ được ưu điểm
                      về hai mặt lấy sáng mà còn duy trì tính độc lập tương đối
                      cho không gian phòng khách và{" "}
                      <strong>phòng làm việc</strong>, tạo cảm giác thông
                      thoáng. Phòng làm việc cạnh cửa sổ được bố trí thêm khu
                      vực nghỉ ngơi, có thể kê gối để làm nơi thư giãn và đọc
                      sách.
                    </p>
                    <p>
                      Bức tường ở khu vực <strong>bàn làm việc</strong> được sơn
                      màu xanh lá cây đậm để mang lại cảm giác thư thái. Phía
                      bên phải là giá sách, với các ngăn lưu trữ và cây xanh
                      được đặt so le trông rất gọn gàng, ngăn nắp và cũng phù
                      hợp để trang trí.
                    </p>
                    <p>
                      Cả 2 vợ chồng đều yêu thích phong cách công nghiệp. Vì
                      vậy, tường được sơn màu trắng và kết hợp với hệ đèn chiếu
                      đơn giản nhưng vẫn cung cấp đủ ánh sáng. Ngoài ra, bức
                      tường chính của phòng khách được làm bằng gạch đỏ cũ tạo
                      cảm giác hoài niệm.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Bàn ăn được kết nối với bức tường ốp gạch màu xanh lam. Hệ
                      thống chiếu sáng gồm đèn chùm 3 màu: đỏ, xám và xanh lá
                      cây, kết hợp với đèn chiếu điểm giúp cải thiện tâm trạng.
                    </p>
                    <p>
                      <strong>Phòng ngủ</strong> được bố trí 1 tủ gỗ cửa lùa với
                      kính xám. Giường được đặt trên sàn gỗ nâng cao mang{" "}
                      <strong>phong cách Nhật Bản</strong>. Và vì chiều cao
                      chênh lệch, sàn gỗ cũng có thể được sử dụng như một mặt
                      phẳng để gấp quần áo.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/26/d8f1c7616dc340199051e9ca7eb39097-16272931491721888550257.jpeg"
                      alt="6, phòng làm việc,không gian sinh hoạt,bàn làm việc,phong cách Nhật Bản,Căn hộ chung cư,phòng ngủ,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/26/a0dbcf937eb04485999b3e0902528fa1-16272931483331225026382.jpeg"
                      alt="7, phòng làm việc,không gian sinh hoạt,bàn làm việc,phong cách Nhật Bản,Căn hộ chung cư,phòng ngủ,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/26/160205home5-16272931460842049293289.jpeg"
                      alt="8, phòng làm việc,không gian sinh hoạt,bàn làm việc,phong cách Nhật Bản,Căn hộ chung cư,phòng ngủ,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/26/160205home8-16272931461251644101909.jpeg"
                      alt="9, phòng làm việc,không gian sinh hoạt,bàn làm việc,phong cách Nhật Bản,Căn hộ chung cư,phòng ngủ,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/26/160205home9-1627293146138339379675.jpeg"
                      alt="10, phòng làm việc,không gian sinh hoạt,bàn làm việc,phong cách Nhật Bản,Căn hộ chung cư,phòng ngủ,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/26/0c2e9db2573640abae1b2429adcef2ab-16272931218081102896384.jpeg"
                      alt="11, phòng làm việc,không gian sinh hoạt,bàn làm việc,phong cách Nhật Bản,Căn hộ chung cư,phòng ngủ,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/26/160205home12-1627293146158366264782.jpeg"
                      alt="12, phòng làm việc,không gian sinh hoạt,bàn làm việc,phong cách Nhật Bản,Căn hộ chung cư,phòng ngủ,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/26/160205home11-16272931461501490391396.jpeg"
                      alt="13, phòng làm việc,không gian sinh hoạt,bàn làm việc,phong cách Nhật Bản,Căn hộ chung cư,phòng ngủ,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/26/160205home13-16272931462141523504399.jpeg"
                      alt="14, phòng làm việc,không gian sinh hoạt,bàn làm việc,phong cách Nhật Bản,Căn hộ chung cư,phòng ngủ,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/26/160205home14-16272931462301409009178.jpeg"
                      alt="15, phòng làm việc,không gian sinh hoạt,bàn làm việc,phong cách Nhật Bản,Căn hộ chung cư,phòng ngủ,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/26/photo-1-1627293502470951038120.jpg"
                      alt="16, phòng làm việc,không gian sinh hoạt,bàn làm việc,phong cách Nhật Bản,Căn hộ chung cư,phòng ngủ,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/26/160205home16-1627293147203531970270.jpeg"
                      alt="17, phòng làm việc,không gian sinh hoạt,bàn làm việc,phong cách Nhật Bản,Căn hộ chung cư,phòng ngủ,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <p>Nguồn: Decomyplace</p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
