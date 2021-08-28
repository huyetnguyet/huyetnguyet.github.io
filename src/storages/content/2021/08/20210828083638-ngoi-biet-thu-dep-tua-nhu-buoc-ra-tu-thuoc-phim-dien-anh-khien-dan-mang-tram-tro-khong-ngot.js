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
"timestamp": '28/08/2021 08:36 AM',
"title": 'Ngôi biệt thự đẹp tựa như bước ra từ thước phim điện ảnh khiến dân mạng trầm trồ không ngớt',
"description": 'Căn nhà được xây với tổng diện tích 250m2, gồm 3 phòng ngủ, với kiến trúc mang phong cách Bắc Mỹ: Phóng khoáng, mạnh mẽ và hoang dã khiến ai nhìn vào cũng phải xuýt xoa.',
"src": 'https://kenh14cdn.com/thumb_w/800/pr/2021/collage-1629710248346833549437-0-0-599-958-crop-1629710256340-63765334214461.jpg',
"alt": 'Biệt thự đẹp,phim điện ảnh,đáp ứng nhu cầu,',
"category": 'life',
"date": '28/08/2021',
"time": '08:36 AM',
"link": '/ngoi-biet-thu-dep-tua-nhu-buoc-ra-tu-thuoc-phim-dien-anh-khien-dan-mang-tram-tro-khong-ngot',
"zcomponent": 'page_20210828083638',
"filepath": './20210828083638-ngoi-biet-thu-dep-tua-nhu-buoc-ra-tu-thuoc-phim-dien-anh-khien-dan-mang-tram-tro-khong-ngot.js'
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
  "Ngôi biệt thự đẹp tựa như bước ra từ thước phim điện ảnh khiến dân mạng trầm trồ không ngớt";
const author = "QUANG VŨ,";
const source = "Trí Thức Trẻ";
const timestamp = "28/08/2021 08:36 AM";
const description =
  "Căn nhà được xây với tổng diện tích 250m2, gồm 3 phòng ngủ, với kiến trúc mang phong cách Bắc Mỹ: Phóng khoáng, mạnh mẽ và hoang dã khiến ai nhìn vào cũng phải xuýt xoa.";
const link =
  "ngoi-biet-thu-dep-tua-nhu-buoc-ra-tu-thuoc-phim-dien-anh-khien-dan-mang-tram-tro-khong-ngot";
const tagparam = ["Biệt thự đẹp", "phim điện ảnh", "đáp ứng nhu cầu"];
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

export default function page_20210828083638() {
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
                      Căn nhà được xây với tổng diện tích 250m2, gồm 3 phòng
                      ngủ, với kiến trúc mang phong cách Bắc Mỹ: Phóng khoáng,
                      mạnh mẽ và hoang dã khiến ai nhìn vào cũng phải xuýt xoa.
                    </p>
                    <p>
                      Cuộc sống ngày càng phát triển, kéo theo nhu cầu hưởng thụ
                      của con người ngày càng nâng cao. Với một số gia đình có
                      điều kiện, ngoài ngôi nhà tiện nghi trong thành phố, họ
                      còn đầu tư thêm ngôi nhà ở ngoại ô để làm không gian nghỉ
                      dưỡng. Nhiều ngôi nhà được ra đời với kiến trúc "mê hoặc",
                      khiến ai nhìn vào cũng phải xuýt xoa. Căn biệt thự tại khu
                      Venus By Flamingo (Vĩnh Phúc) chính là một minh chứng.
                    </p>
                    <p>
                      Ngôi biệt thự mang hơi hướng sang trọng nhưng đơn giản
                      trong trang trí và decor. Tổng diện tích của căn nhà là
                      250m2, gồm 3 phòng ngủ, với kiến trúc mang phong cách Bắc
                      Mỹ: Phóng khoáng, mạnh mẽ và hoang dã. Nội thất trong nhà
                      được gia chủ lựa chọn rất kỹ nhằm đảm bảo sự tiện nghi,
                      sang trọng nhưng vẫn ấm cúng cho sinh hoạt.{" "}
                    </p>
                    <p>
                      Chất hoang dã và thô mộc, sự tinh tế và trong trẻo được
                      khắc họa ngay từ khi đặt chân vào căn nhà. Tầng 1 là phòng
                      khách để sinh hoạt chung và đặc biệt có thêm một bể bơi để{" "}
                      <strong>đáp ứng nhu cầu</strong> thư giãn thoải mái của
                      gia chủ.{" "}
                    </p>
                    <p>
                      Phòng khách với nội thất đơn giản, khoẻ khoắn, tone nâu gỗ
                      chủ đạo gợi nhớ những căn nhà gỗ ở miền Bắc nước Mỹ. Điểm
                      nhấn đặc biệt là bộ sofa âm sàn hình bán nguyệt vây quanh
                      một chiếc chiếc lò sưởi.{" "}
                    </p>
                    <p>
                      Cầu thang ngập tràn ánh sáng với lan can kính uốn lượn, là
                      địa điểm hoàn hảo để "thả dáng" chụp ảnh. Khu vực nấu
                      nướng đầy đủ tiện ích với khung cửa kính trong suốt tạo
                      điều kiện giúp những người "đầu bếp" của gia đình có thể
                      ngắm trọn khu vực bể bơi thác nước và phòng khách.{" "}
                    </p>
                    <p>
                      3 phòng ngủ được thiết kế rộng rãi và đầy đủ tiện nghi
                      khiến người ta phải mê tít. Không gian ngủ vừa là nơi nghỉ
                      ngơi, cân bằng tâm trạng vừa giúp mọi người có thể ngắm
                      trọn bình minh và hoàng hôn tuyệt đẹp.{" "}
                    </p>
                    <p>
                      Với cảnh sắc thiên nhiên thanh bình, đẹp như tranh, gia
                      chủ đã rất tinh tế khi thiết kế khu vực sân thượng đa chức
                      năng với một tầm view trọn vẹn. Tại đây, mọi người có thể
                      cùng nhau ngắm cảnh, mở tiệc nướng BBQ…{" "}
                    </p>
                    <p>
                      Được biết, chủ nhân của ngôi biệt thự này là chị Đỗ Trang.
                      Là một người cá tính, yêu thiên nhiên và ưa sáng tạo, chị
                      quyết định xây dựng "ốc đảo" xinh xắn để bản thân có thể
                      tận hưởng và cân bằng cuộc sống.{" "}
                    </p>

                    <p>
                      Trong thời gian Hà Nội thực hiện giãn cách xã hội, chị
                      Trang đã trở lại ngôi nhà thứ hai này và "cố thủ" ở đây -
                      "cái ốc đảo yên tĩnh xanh mướt mát này, tận hưởng một cuộc
                      sống lao động giữa thiên nhiên, rời xa thành phố, tự cung
                      tự cấp đúng nghĩa".
                    </p>
                    <p>
                      Tạm biệt khói bụi thành phố, gác lại mọi xô bồ, lo toan
                      của cuộc sống, chị Trang chia sẻ bản thân đã dành nhiều
                      thời gian để đọc sách, ca hát, đi dạo giữa thiên nhiên
                      trong lành, đầy hương thơm và tiếng chim.{" "}
                    </p>
                    <p>
                      "Trang có thể lao động trong vườn nhà như một chị nông dân
                      đích thực. Và cũng chính từ những nông phẩm tươi sạch vừa
                      tự tay thu hoạch ấy, mình lại vào bếp chế biến những món
                      ăn ngon lành cho bản thân và những người thân yêu. Tối
                      đến, sau khi ngâm mình dưới làn nước mát rượi của bể bơi,
                      mình lại dành nửa tiếng ngồi thiền giữa màu xanh cây lá,
                      đồng điệu với thiên nhiên đến từng nhịp tim, hơi thở…",
                      chị Đỗ Trang tâm sự.{" "}
                    </p>
                    <p>
                      Ở một nơi hòa mình với thiên nhiên trong lành mà vẫn đầy
                      đủ tiện nghi, nghĩ đến thôi đã khiến bao người ao ước. Đặc
                      biệt là khi cuộc sống ngày càng nhiều áp lực, stress thì
                      "chốn nương náu" như của chị Trang đích thị là "cực phẩm"!
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/800/pr/2021/collage-1629710248346833549437-0-0-599-958-crop-1629710256340-63765334214461.jpg"
                      alt="1, Biệt thự đẹp,phim điện ảnh,đáp ứng nhu cầu,"
                      note=""
                    />
                    <ContentImage
                      src="https://channel.mediacdn.vn/2021/8/23/photo-1-16297099205421106720678.jpg"
                      alt="2, Biệt thự đẹp,phim điện ảnh,đáp ứng nhu cầu,"
                      note=""
                    />
                    <ContentImage
                      src="https://channel.mediacdn.vn/2021/8/23/photo-1-16297099247961119616435.jpg"
                      alt="3, Biệt thự đẹp,phim điện ảnh,đáp ứng nhu cầu,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://channel.mediacdn.vn/2021/8/23/photo-2-16297099248031175581080.jpg"
                      alt="4, Biệt thự đẹp,phim điện ảnh,đáp ứng nhu cầu,"
                      note=""
                    />
                    <ContentImage
                      src="https://channel.mediacdn.vn/2021/8/23/photo-3-16297099248101427140904.jpg"
                      alt="5, Biệt thự đẹp,phim điện ảnh,đáp ứng nhu cầu,"
                      note=""
                    />
                    <ContentImage
                      src="https://channel.mediacdn.vn/2021/8/23/photo-4-16297099248171283798700.jpg"
                      alt="6, Biệt thự đẹp,phim điện ảnh,đáp ứng nhu cầu,"
                      note=""
                    />
                    <ContentImage
                      src="https://channel.mediacdn.vn/2021/8/23/photo-5-1629709924822477984220.jpg"
                      alt="7, Biệt thự đẹp,phim điện ảnh,đáp ứng nhu cầu,"
                      note=""
                    />
                    <ContentImage
                      src="https://channel.mediacdn.vn/2021/8/23/photo-6-16297099248282072618983.jpg"
                      alt="8, Biệt thự đẹp,phim điện ảnh,đáp ứng nhu cầu,"
                      note=""
                    />
                    <ContentImage
                      src="https://channel.mediacdn.vn/2021/8/23/photo-7-16297099248311213185953.jpg"
                      alt="9, Biệt thự đẹp,phim điện ảnh,đáp ứng nhu cầu,"
                      note=""
                    />

                    <p>Địa điểm: Venus by Flamingo Đại Lải resort</p>
                    <p>Biệt thự: TĐ A place of peace</p>
                    <p>Đơn vị thiết kế & thi công: Kieng - Architecture</p>
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
