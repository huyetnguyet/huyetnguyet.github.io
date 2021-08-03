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
"timestamp": '29/07/2021 04:26 PM',
"title": 'Mua căn hộ tập thể 40m2, trai độc thân đắp thêm 420 triệu để "thay máu" toàn bộ, đơn giản nhưng đẹp hết chỗ chê',
"description": 'Căn hộ được cải tạo với style trẻ trung, hiện đại, phù hợp với cuộc sống độc thân.',
"src": 'https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/27/hi-10-16274015583131737337430.jpg',
"alt": 'Cải tạo nhà,Đồ nội thất,nhà vệ sinh,kiến trúc sư,phòng làm việc,Phòng ngủ nhỏ,phong cách Nhật Bản,căn hộ nhỏ,house n home,',
"category": 'life',
"date": '29/07/2021',
"time": '04:26 PM',
"link": '/mua-can-ho-tap-the-40m2-trai-doc-than-dap-them-420-trieu-de-thay-mau-toan-bo-don-gian-nhung-dep-het-cho-che',
"zcomponent": 'page_20210729162620',
"filepath": './20210729162620-mua-can-ho-tap-the-40m2-trai-doc-than-dap-them-420-trieu-de-thay-mau-toan-bo-don-gian-nhung-dep-het-cho-che.js'
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
  'Mua căn hộ tập thể 40m2, trai độc thân đắp thêm 420 triệu để "thay máu" toàn bộ, đơn giản nhưng đẹp hết chỗ chê';
const author = "HÀ BÍCH NGỌC,";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:26 PM";
const description =
  "Căn hộ được cải tạo với style trẻ trung, hiện đại, phù hợp với cuộc sống độc thân.";
const link =
  "mua-can-ho-tap-the-40m2-trai-doc-than-dap-them-420-trieu-de-thay-mau-toan-bo-don-gian-nhung-dep-het-cho-che";
const tagparam = [
  "Cải tạo nhà",
  "Đồ nội thất",
  "nhà vệ sinh",
  "kiến trúc sư",
  "phòng làm việc",
  "Phòng ngủ nhỏ",
  "phong cách Nhật Bản",
  "căn hộ nhỏ",
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

export default function page_20210729162620() {
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
                      Anh Tùng Lâm (1994) hiện là huấn luyện viên môn BodyJam
                      của 1 trung tâm thể dục - thể hình tại Hà Nội. Trái ngược
                      với những gì mọi người thường hình dung về 1 huấn luyện
                      viên thể hình, anh Lâm mong muốn tổ ấm của mình sẽ là nơi
                      thật nhẹ nhàng, bình yên và có thể thoải mái thể hiện bản
                      thân.
                    </p>
                    <p>
                      Động lực để anh quyết tâm tậu nhà riêng có 1 phần bắt
                      nguồn từ tuổi thơ sinh ra và lớn lên trong 1 căn nhà vỏn
                      vẹn 8m2, khi ấy mọi sinh hoạt đều vô cùng bất tiện với
                      nhiều khó khăn, thiếu thốn. Căn hộ rộng 40m2 tại Kim Mã
                      này cũng nằm gần gia đình nên mẹ anh thi thoảng có thể ghé
                      qua nấu nướng, đồng thời lại có thể thường xuyên được tụ
                      tập bên gia đình, họ hàng.
                    </p>
                    <p>
                      Căn hộ tập thể cũ này đã có tuổi đời hơn 20 năm nên hiện
                      trạng xuống cấp trầm trọng. Tường, trần, sàn đều bị ngấm,
                      ố và bong tróc khá nhiều. Sàn gỗ thì co ngót và rộp lên.
                      Hệ thống chiếu sáng yếu ớt, thiếu thốn không đủ để cung
                      cấp ánh sáng cho toàn bộ căn nhà. Trong nhà cũng chỉ có 1
                      vài <strong>đồ nội thất</strong> cơ bản đủ để sử dụng.
                      Ngoài ra, ban công nhỏ và bị vây kín, không đủ rộng để có
                      không gian phơi phóng hay làm góc chill.
                    </p>
                    <p>
                      Vì vậy, khi tiến hành cải tạo, đơn vị thiết kế đã xử lý và
                      hoàn thiện lại trần - tường - sàn. Trần thạch cao được kết
                      hợp ốp gỗ. Trong khi đó, tường được xử lý ngấm ố, chát
                      chít và sơn lại toàn bộ. Ngoài ra, 1 số mảng tường cũ được
                      đập bỏ để cải tạo thành tường mới. Với đôn sàn ở khu vực{" "}
                      <strong>nhà vệ sinh</strong>,{" "}
                      <strong>kiến trúc sư</strong> đã xử lý chống tràn nước ra
                      các khu vực khác trong nhà, đồng thời thay sàn gạch tại
                      khu bếp và <strong>phòng làm việc</strong> để tạo sự khác
                      biệt, phân tách không gian và tạo độ thẩm mỹ. Toàn bộ khu
                      vực phòng khách - phòng ngủ cũng được ốp sàn gỗ.
                    </p>
                    <p>
                      Hệ thống chiếu sáng được nâng cấp với hệ đèn âm trần kết
                      hợp với đèn lon để tạo điểm nhấn cho{" "}
                      <strong>đồ nội thất</strong> và ánh sáng trong khi sử
                      dụng. Khu vực ban công cũ đã được cơi nới, mở rộng thêm
                      diện tích để trở thành <strong>phòng làm việc</strong> và
                      mini bar.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Trái với vẻ bí bách, tù túng của các căn hộ tập thể cũ,
                      không gian mới sau khi được cải tạo lại trở nên thoáng
                      đãng, rộng rãi hơn. Đặc biệt là nó rất phù hợp với cuộc
                      sống của 1 chàng trai độc thân với style trẻ trung, hiện
                      đại cùng tone màu sắc thiên về mệnh của chủ nhà như vàng,
                      xanh lá cây, hồng. Dù diện tích căn hộ vỏn vẹn 40m2 nhưng
                      đủ vừa vặn và ấm cúng: có <strong>phòng làm việc</strong>{" "}
                      và khu tập thể dục tích hợp, bếp nhỏ gọn nhưng tiện nghi
                      cùng bàn ăn tiện lợi theo{" "}
                      <strong>phong cách Nhật Bản</strong>.
                    </p>
                    <p>
                      Quá trình cải tạo gặp một vài khó khăn như xin giấy phép
                      xây dựng của những nhà dân xung quanh và tổ dân phố, phải
                      gia cố rất chắc chắn các tường chịu lực cũng như kết cấu
                      khung xương của căn hộ để không ảnh hưởng đến cấu trúc và
                      mức độ an toàn của toàn tòa nhà. Tuy nhiên, sau thời gian
                      90 ngày, căn hộ đã được lột xác mỹ mãn với chi phí 420
                      triệu, đúng như những gì anh Lâm đã hình dung về tổ ấm
                      trong mơ.
                    </p>
                    <p>Nguồn: Gạo Design</p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/27/hi-10-16274015583131737337430.jpg"
                      alt="6, Cải tạo nhà,Đồ nội thất,nhà vệ sinh,kiến trúc sư,phòng làm việc,Phòng ngủ nhỏ,phong cách Nhật Bản,căn hộ nhỏ,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/27/canh-tong-the-1627401210480803985930.jpg"
                      alt="7, Cải tạo nhà,Đồ nội thất,nhà vệ sinh,kiến trúc sư,phòng làm việc,Phòng ngủ nhỏ,phong cách Nhật Bản,căn hộ nhỏ,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/mot-chiec-sofa-1-16274016423031917912965.jpg"
                      alt="8, Cải tạo nhà,Đồ nội thất,nhà vệ sinh,kiến trúc sư,phòng làm việc,Phòng ngủ nhỏ,phong cách Nhật Bản,căn hộ nhỏ,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/tivi-ne-ne-ne-16274012428602059160492.jpg"
                      alt="9, Cải tạo nhà,Đồ nội thất,nhà vệ sinh,kiến trúc sư,phòng làm việc,Phòng ngủ nhỏ,phong cách Nhật Bản,căn hộ nhỏ,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/500/203336854389633024/2021/7/27/hi-07-16274015580431303080386.jpg"
                      alt="10, Cải tạo nhà,Đồ nội thất,nhà vệ sinh,kiến trúc sư,phòng làm việc,Phòng ngủ nhỏ,phong cách Nhật Bản,căn hộ nhỏ,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/27/chiec-giuong-ngang-1-1627401372954422112123.jpg"
                      alt="11, Cải tạo nhà,Đồ nội thất,nhà vệ sinh,kiến trúc sư,phòng làm việc,Phòng ngủ nhỏ,phong cách Nhật Bản,căn hộ nhỏ,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/27/hi-04-16274015580381766545094.jpg"
                      alt="12, Cải tạo nhà,Đồ nội thất,nhà vệ sinh,kiến trúc sư,phòng làm việc,Phòng ngủ nhỏ,phong cách Nhật Bản,căn hộ nhỏ,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/27/hi-11-1627401558327625960900.jpg"
                      alt="13, Cải tạo nhà,Đồ nội thất,nhà vệ sinh,kiến trúc sư,phòng làm việc,Phòng ngủ nhỏ,phong cách Nhật Bản,căn hộ nhỏ,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/go-ben-ngoai-hoi-trong-1-1627401378454748665474.jpg"
                      alt="14, Cải tạo nhà,Đồ nội thất,nhà vệ sinh,kiến trúc sư,phòng làm việc,Phòng ngủ nhỏ,phong cách Nhật Bản,căn hộ nhỏ,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/buc-seo-16274012103111576088475.jpg"
                      alt="15, Cải tạo nhà,Đồ nội thất,nhà vệ sinh,kiến trúc sư,phòng làm việc,Phòng ngủ nhỏ,phong cách Nhật Bản,căn hộ nhỏ,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/27/hi-02-1627401213119572368387.jpg"
                      alt="16, Cải tạo nhà,Đồ nội thất,nhà vệ sinh,kiến trúc sư,phòng làm việc,Phòng ngủ nhỏ,phong cách Nhật Bản,căn hộ nhỏ,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/27/1-3-1627401979363870771254.jpg"
                      alt="17, Cải tạo nhà,Đồ nội thất,nhà vệ sinh,kiến trúc sư,phòng làm việc,Phòng ngủ nhỏ,phong cách Nhật Bản,căn hộ nhỏ,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/goc-bep-rong-16274012130221978127078.jpg"
                      alt="18, Cải tạo nhà,Đồ nội thất,nhà vệ sinh,kiến trúc sư,phòng làm việc,Phòng ngủ nhỏ,phong cách Nhật Bản,căn hộ nhỏ,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/27/goc-bep-nua-ne-1627401212664491071869.jpg"
                      alt="19, Cải tạo nhà,Đồ nội thất,nhà vệ sinh,kiến trúc sư,phòng làm việc,Phòng ngủ nhỏ,phong cách Nhật Bản,căn hộ nhỏ,house n home,"
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
