import React from "react";
import "components/page.css";
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
"timestamp": '29/07/2021 04:05 PM',
"title": 'Thời nào còn là "hot girl tiểu học", cô gái xinh đẹp lột xác đầy nóng bỏng khiến CĐM ngỡ ngàng',
"description": 'Hình ảnh của cô nàng hot girl sau khi trưởng thành đang khiến cho rất nhiều người phải bất ngờ.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/15/photo-1-16263272773742117286505.jpg',
"alt": 'GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,TRẦN HUYỀN CHÂU,',
"category": 'images',
"date": '29/07/2021',
"time": '04:05 PM',
"link": '/thoi-nao-con-la-hot-girl-tieu-hoc-co-gai-xinh-dep-lot-xac-day-nong-bong-khien-cdm-ngo-ngang',
"zcomponent": 'page_20210729160529',
"filepath": './20210729160529-thoi-nao-con-la-hot-girl-tieu-hoc-co-gai-xinh-dep-lot-xac-day-nong-bong-khien-cdm-ngo-ngang.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  'Thời nào còn là "hot girl tiểu học", cô gái xinh đẹp lột xác đầy nóng bỏng khiến CĐM ngỡ ngàng';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:05 PM";
const description =
  "Hình ảnh của cô nàng hot girl sau khi trưởng thành đang khiến cho rất nhiều người phải bất ngờ.";
const link =
  "thoi-nao-con-la-hot-girl-tieu-hoc-co-gai-xinh-dep-lot-xac-day-nong-bong-khien-cdm-ngo-ngang";
const tagparam = ["GÁI XINH", "CỘNG ĐỒNG MẠNG", "HOT GIRL", "TRẦN HUYỀN CHÂU"];
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

export default function page_20210729160529() {
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
                <div className="contentBody">
                  <p>
                    Nhân vật chính trong câu chuyện lần này là{" "}
                    <strong>Trần Huyền Châu</strong>, một trong những cô nàng{" "}
                    <strong>hot girl</strong> bất ngờ nổi đình nổi đám từ cách
                    đây nhiều năm về trước. Cụ thể, hình ảnh cô{" "}
                    <strong>gái xinh</strong> đẹp với nụ cười tỏa nắng trong tà
                    áo dài đã giúp cô nàng này được rất nhiều người gọi tên với
                    biệt danh "hot girl tiểu học" ở thời điểm bấy giờ. Mặc dù
                    trông gương mặt dễ thương, đáng yêu như vậy, thế nhưng ít ai
                    biết rằng lúc ấy, Huyền Châu đã là một học sinh lớp 9.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/15/photo-1-1626324491909945311156.jpg"
                    alt="1, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,TRẦN HUYỀN CHÂU,"
                    note="Bức ảnh giúp Huyền Châu trở nên nổi tiếng trong mắt cộng đồng mạng"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/15/photo-1-1626324496672331156332.jpg"
                    alt="2, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,TRẦN HUYỀN CHÂU,"
                    note="Gương mặt bầu bĩnh, baby có phần hack tuổi của cô nàng"
                  />
                  <p>
                    Bẵng đi một thời gian chẳng ai chú ý, giờ đây, cô nàng Huyền
                    Châu lại bất ngờ khiến cho <strong>cộng đồng mạng</strong>{" "}
                    phải xôn xao vì màn lột xác đáng kinh ngạc của mình. Vẫn với
                    gương mặt dễ thương như búp bê, nhưng giờ đây, nàng{" "}
                    <strong>hot girl</strong> còn khiến vô số người phải bất ngờ
                    với vóc dáng cực kỳ gợi cảm, thậm chí phong cách cũng trở
                    nên nóng bỏng, chững chạc hơn hẳn so với trước.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/15/photo-1-16263252852401321129568.jpg"
                    alt="3, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,TRẦN HUYỀN CHÂU,"
                    note="Vẫn xinh xắn dễ thương như xưa"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/15/photo-1-1626325991293621230585.jpg"
                    alt="4, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,TRẦN HUYỀN CHÂU,"
                    note="Nhưng giờ đây cô nàng Huyền Châu lại thay đổi hoàn toàn với phong cách gợi cảm"
                  />
                  <p>
                    Sự thay đổi này tất nhiên cũng đồng thời kéo theo một số hệ
                    lụy, khi như Huyền Châu thừa nhận, cô nàng sau đó đã phải
                    nhận một số lời bình luận không hay về bản thân. Tuy nhiên,
                    nàng <strong>hot girl</strong> tỏ ra không mấy bận tâm và
                    cho rằng miễn mình vẫn vui vẻ là được. Hiện tại, Huyền Châu
                    là sinh viên ngành Quản trị Kinh doanh của trường Đại học
                    Kinh doanh và Công nghệ (Hà Nội).
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/15/photo-1-16263252734411619940250.jpg"
                    alt="5, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,TRẦN HUYỀN CHÂU,"
                    note="Nhìn những hình ảnh này của Huyền Châu"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/15/page-1626326752040733543732.jpg"
                    alt="6, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,TRẦN HUYỀN CHÂU,"
                    note="Khiến cho nhiều người thậm chí còn chẳng nhận ra cô nàng hot girl nữa"
                  />
                  <p>
                    Bên cạnh việc học tại trường, Huyền Châu còn đảm nhiệm thêm
                    vai trò người mẫu ảnh cũng như hoạt động trong lĩnh vực spa,
                    làm đẹp và đó cũng chính là đam mê của cô nàng. Bản thân
                    nàng <strong>hot girl</strong> cũng chia sẻ thích mặc những
                    bộ váy ôm sát để khoe trọn vóc dáng của mình - thành quả sau
                    chuỗi ngày tập gym chăm chỉ.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/15/photo-1-16263269235481512172007.jpg"
                    alt="7, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,TRẦN HUYỀN CHÂU,"
                    note="Cô nàng đặc biệt ưa chuộng những bộ trang phục bó sát"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/15/photo-1-16263269477721298473422.jpg"
                    alt="8, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,TRẦN HUYỀN CHÂU,"
                    note="Để có thể khoe trọn vóc dáng của mình"
                  />
                  <p>
                    Một số hình ảnh về nàng <strong>hot girl</strong> xinh đẹp:
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/15/photo-1-16263272773742117286505.jpg"
                    alt="9, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,TRẦN HUYỀN CHÂU,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/15/photo-1-1626327215659587010749.jpg"
                    alt="10, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,TRẦN HUYỀN CHÂU,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/15/photo-1-1626327224009193243350.jpg"
                    alt="11, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,TRẦN HUYỀN CHÂU,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/15/photo-1-16263272312491222101566.jpg"
                    alt="12, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,TRẦN HUYỀN CHÂU,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/15/photo-1-1626327237950745492596.jpg"
                    alt="13, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,TRẦN HUYỀN CHÂU,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/15/photo-1-16263272873131559047763.jpg"
                    alt="14, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,TRẦN HUYỀN CHÂU,"
                    note=""
                  />
                  <ContentImage
                    src="https://static-cmsads.admicro.vn/cmsads/2021/01/phot-1609988157328.jpeg"
                    alt="15, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,TRẦN HUYỀN CHÂU,"
                    note=""
                  />
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
