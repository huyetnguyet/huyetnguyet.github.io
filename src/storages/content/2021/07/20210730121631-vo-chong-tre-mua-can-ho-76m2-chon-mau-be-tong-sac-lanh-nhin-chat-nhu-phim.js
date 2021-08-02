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
"timestamp": '30/07/2021 12:16 PM',
"title": 'Vợ chồng trẻ mua căn hộ 76m2, chọn màu bê tông sắc lạnh nhìn "chất" như phim',
"description": 'Ở khu vực phòng ngủ của căn hộ sử dụng mảng tường kính liên thông với WC thông qua 1 hệ rèm chống nước.',
"src": 'https://kenh14cdn.com/thumb_w/500/203336854389633024/2021/7/30/p33-16276390927461692195962.jpg',
"alt": 'phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,',
"category": 'life',
"date": '30/07/2021',
"time": '12:16 PM',
"link": '/vo-chong-tre-mua-can-ho-76m2-chon-mau-be-tong-sac-lanh-nhin-chat-nhu-phim',
"zcomponent": 'page_20210730121631',
"filepath": './20210730121631-vo-chong-tre-mua-can-ho-76m2-chon-mau-be-tong-sac-lanh-nhin-chat-nhu-phim.js'
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
  'Vợ chồng trẻ mua căn hộ 76m2, chọn màu bê tông sắc lạnh nhìn "chất" như phim';
const author = "HÀ BÍCH NGỌC,";
const source = "Trí Thức Trẻ";
const timestamp = "30/07/2021 12:16 PM";
const description =
  "Ở khu vực phòng ngủ của căn hộ sử dụng mảng tường kính liên thông với WC thông qua 1 hệ rèm chống nước.";
const link =
  "vo-chong-tre-mua-can-ho-76m2-chon-mau-be-tong-sac-lanh-nhin-chat-nhu-phim";
const tagparam = [
  "phong cách hiện đại",
  "phòng vệ sinh",
  "kiến trúc sư",
  "Phòng ngủ nhỏ",
  "không gian sinh hoạt",
  "Không gian bếp",
  "Tủ quần áo",
  "bàn trang điểm",
  "bàn làm việc",
  "khoe nhà đẹp",
  "house n home",
  "căn hộ",
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

export default function page_20210730121631() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Sau khi mua <strong>căn hộ</strong> rộng 76m2 tại khu chung
                    cư Palm Heights - Quận 2, cặp vợ chồng trẻ đã quyết định
                    thiết kế tổ ấm theo <strong>phong cách hiện đại</strong>,
                    đồng thời kết hợp một vài chi tiết theo sở thích cá nhân.
                  </p>
                  <p>
                    Công năng của <strong>căn hộ</strong> gồm 2 phòng ngủ và 2{" "}
                    <strong>phòng vệ sinh</strong>. Ngoài ra, dựa trên nhu cầu
                    sử dụng của gia đình, <strong>kiến trúc sư</strong> đã thay
                    đổi một vài chi tiết về mặt công năng, điển hình là thu ngắn
                    lại khu vực hành lang để <strong>phòng ngủ nhỏ</strong> có
                    tầm nhìn tốt hơn, mang lại không gian thoáng hơn cho cả khu
                    vực khách bếp. Bên cạnh đó team thiết kế còn quyết định đập
                    bỏ 1 mảng tường giữa phòng khách và khu giặt phơi để không
                    gian đón được nhiều ánh sáng hơn, đồng thời đây cũng là 1
                    điểm nhấn cho hệ vách sofa.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/30/p24-16276390925862129018366.jpg"
                    alt="1, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note="Mảng kính giúp không gian sinh hoạt chung trở nên thoáng đãng hơn"
                  />
                  <p>
                    <strong>Căn hộ</strong> được thiết kế dựa trên những tone
                    màu yêu thích của chủ nhà, đó là tone màu trầm, gỗ tối màu,
                    đặc biệt là màu bê tông. Ngoài ra còn kết hợp với hệ cửa đi
                    màu bê tông, sơn hiệu ứng, giấy dán tường, kèm những mảng
                    màu xám đậm để không gian thêm phần đa dạng. Những gam màu
                    và chi tiết này vừa phù hợp với sở thích của chủ nhà, đồng
                    thời tạo vẻ cá tính, độc đáo cho không gian.
                  </p>
                  <p>
                    Khu vực đầu tiên là tủ giày kết hợp ghế bench và 1 mảng
                    gương lớn. Đây là nơi để chủ nhà chuẩn bị trước khi ra khỏi
                    nhà, cũng như là 1 điểm nhấn gây ấn tượng khi bước vào nhà.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/30/p40-16276390927801537458500.jpg"
                    alt="2, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note="Gương và ghế bench dùng để đi giày ở gần cửa vào"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/30/p26-1627639092640444318607.jpg"
                    alt="3, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note="Không gian ấn tượng với các màu đen, trắng, bê tông"
                  />

                  <p>
                    <strong>Không gian bếp</strong> được chia làm 2 khu vực: khu
                    vực bếp chính và khu vực bếp đảo thay vì làm 1 hệ bếp chữ L.
                    Thiết kế này giúp không gian bếp trở nên sang trọng hơn. Bên
                    cạnh đó, người sử dụng cũng có thể thoải mái hơn khi nấu ăn,
                    soạn chia, và đưa đến khu vực bàn ăn.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/p31-16276390926611261064273.jpg"
                    alt="4, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note="Hệ bếp chữ L thoải mái, tiện nghi"
                  />

                  <RelationNewsInPage category={category} />
                  <p>
                    Ở không gian <strong>phòng ngủ nhỏ</strong>, Ptd concept sử
                    dụng 1 vách kính lớn kèm hệ rèm sáo. Đây là sự kết hợp giữa
                    đặc và rỗng cho <strong>căn hộ</strong> để mang đến sự thoải
                    mái, nhẹ nhàng, nhất là khi xung quanh đã sử dụng các vật
                    liệu như bê tông và các mảng trang trí mạnh mẽ khác.
                  </p>

                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/p32-16276390927411734293606.jpg"
                    alt="5, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note="Phòng ngủ nhỏ sử dụng hệ rèm sáo để làm tăng cảm giác thoải mái, nhẹ nhàng"
                  />
                  <p>
                    Phòng ngủ master được thiết kế đơn giản nhưng công năng vẫn
                    được đảm bảo đầy đủ với các hạng mục:{" "}
                    <strong>tủ quần áo</strong>, giường ngủ,{" "}
                    <strong>bàn trang điểm</strong>,{" "}
                    <strong>bàn làm việc</strong>, bay window. Điểm đặc biệt ở
                    khu vực này là việc sử dụng mảng tường kính liên thông với
                    WC thông qua 1 hệ rèm chống nước, đem lại cảm giác rộng rãi,
                    thông thoáng, phù hợp với gia đình trẻ. Hai WC cũng được ốp
                    gạch giả bê tông kết hợp gạch thẻ ốp theo kiểu xương cá tạo
                    sự thống nhất với toàn nhà.
                  </p>

                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/500/203336854389633024/2021/7/30/p33-16276390927461692195962.jpg"
                    alt="6, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/30/p36-16276390927521151863883.jpg"
                    alt="7, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/30/p37-1627639092762626448334.jpg"
                    alt="8, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/p39-162763909276943037205.jpg"
                    alt="9, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/p30-1627639092645823170206.jpg"
                    alt="10, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/p50-16276390927851423176408.jpg"
                    alt="11, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/p52-16276390927902058548315.jpg"
                    alt="12, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/30/p56-16276390927962124736264.jpg"
                    alt="13, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/p11--1627639092006414695841.jpg"
                    alt="14, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/p11b-16276390920241497879936.jpg"
                    alt="15, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/p19-16276390920981397902441.jpg"
                    alt="16, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/p01-1627639090745674490639.jpg"
                    alt="17, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/p05-16276390912931783566253.jpg"
                    alt="18, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/p06-16276390917321323809577.jpg"
                    alt="19, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/p12-16276390920602140459702.jpg"
                    alt="20, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/p13-16276390920752044592639.jpg"
                    alt="21, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/p17-16276390920851762738904.jpg"
                    alt="22, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/30/p25-1627639092636826027138.jpg"
                    alt="23, phong cách hiện đại,phòng vệ sinh,kiến trúc sư,Phòng ngủ nhỏ,không gian sinh hoạt,Không gian bếp,Tủ quần áo,bàn trang điểm,bàn làm việc,khoe nhà đẹp,house n home,căn hộ,"
                    note=""
                  />

                  <p>Nguồn: Ptd Concept</p>
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
