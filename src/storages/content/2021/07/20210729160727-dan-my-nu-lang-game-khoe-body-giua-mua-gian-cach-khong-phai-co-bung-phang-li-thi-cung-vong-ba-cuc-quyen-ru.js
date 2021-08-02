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
"timestamp": '29/07/2021 04:07 PM',
"title": 'Dàn mỹ nữ làng game khoe body giữa mùa giãn cách, không phải cơ bụng phẳng lì thì cũng vòng ba cực quyến rũ',
"description": 'Những bóng hồng làng game thi nhau khoe thân hình "bốc lửa" mùa giãn cách khiến ai nấy đều ghen tị.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/lnd-16274550923762104140693.jpg',
"alt": 'Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,',
"category": 'images',
"date": '29/07/2021',
"time": '04:07 PM',
"link": '/dan-my-nu-lang-game-khoe-body-giua-mua-gian-cach-khong-phai-co-bung-phang-li-thi-cung-vong-ba-cuc-quyen-ru',
"zcomponent": 'page_20210729160727',
"filepath": './20210729160727-dan-my-nu-lang-game-khoe-body-giua-mua-gian-cach-khong-phai-co-bung-phang-li-thi-cung-vong-ba-cuc-quyen-ru.js'
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
  "Dàn mỹ nữ làng game khoe body giữa mùa giãn cách, không phải cơ bụng phẳng lì thì cũng vòng ba cực quyến rũ";
const author = "NGOCLONG,";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:07 PM";
const description =
  'Những bóng hồng làng game thi nhau khoe thân hình "bốc lửa" mùa giãn cách khiến ai nấy đều ghen tị.';
const link =
  "dan-my-nu-lang-game-khoe-body-giua-mua-gian-cach-khong-phai-co-bung-phang-li-thi-cung-vong-ba-cuc-quyen-ru";
const tagparam = [
  "Tập thể dục",
  "khoe thân hình",
  "Chúc Anh",
  "Linh Ngọc Đàm",
  "Thảo Trang",
  "Ngân Sát Thủ",
  "game thủ",
  "streamer",
  "MC",
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

export default function page_20210729160727() {
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
                    Ngoài việc lên sóng livestream, các nữ{" "}
                    <strong>streamer</strong>, hot girl làng game Việt cũng
                    không quên chia sẻ những sở thích cá nhân trong mùa giãn
                    cách với cộng đồng mạng. Bên cạnh thú vui đơn giản như đọc
                    sách, nấu ăn… các cô nàng xinh đẹp cũng rất hay đăng tải
                    những hình ảnh <strong>tập thể dục</strong> tại gia khiến
                    fan "nóng mặt" khi ngắm nhìn.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/lnd-16274550923762104140693.jpg"
                    alt="1, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <p>
                    Là một trong những <strong>streamer</strong> tiên phong
                    trong việc lựa chọn lối sống "healthy",{" "}
                    <strong>Linh Ngọc Đàm</strong> luôn lan tỏa năng lượng tích
                    cực trong việc ăn uống, <strong>tập thể dục</strong> đến
                    fan. Mỗi ngày, cô đều đăng tải những bức ảnh tập thể dục
                    buổi sáng, thiền hoặc các món ăn đơn giản lên Instagram cá
                    nhân.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/lnd-16274550924091565098648.png"
                    alt="2, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <p>
                    <strong>Linh Ngọc Đàm</strong> rất chăm chỉ{" "}
                    <strong>tập thể dục</strong> mỗi sáng
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/base64-16274552028171802340721.png"
                    alt="3, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/base64-1627455176864514439170.png"
                    alt="4, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <p>
                    Không những vậy, người hâm mộ còn dành nhiều lời khen có
                    cánh cho nữ <strong>streamer</strong> xinh đẹp bởi thân hình
                    vừa mạnh mẽ lại vô cùng quyến rũ. Ngoài cơ bụng 11 mang tính
                    thương hiệu, <strong>Linh Ngọc Đàm</strong> dạo gần đây còn
                    "khoe khéo" vòng ba nóng bỏng, thân hình thon gọn khiến ai
                    nấy đều hâm mộ.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/base64-16274551905511756421679.png"
                    alt="5, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <p>
                    Chiến tích của <strong>Linh Ngọc Đàm</strong> thu được mùa
                    giãn cách
                  </p>
                  <p>
                    Dù là một trong những nữ <strong>MC</strong> mới gia nhập
                    làng game thế nhưng <strong>Chúc Anh</strong> đã để lại rất
                    nhiều ấn tượng cho người hâm mộ. Với vẻ ngoài xinh xắn, ưa
                    nhìn, nụ cười để lộ má lúm đặc trưng, Chúc Anh làm "đốn tim"
                    fan mỗi khi lên sóng phỏng vấn.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/chuc-anh-16274550923351573010388.jpg"
                    alt="6, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/ca-16274555967151984337687.jpg"
                    alt="7, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <p>
                    <strong>MC</strong> <strong>Chúc Anh</strong>{" "}
                    <strong>khoe thân hình</strong> nóng bỏng
                  </p>{" "}
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/chuc-anh2-162745509237217975753.png"
                    alt="8, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <p>
                    Không những vậy, ở ngoài đời <strong>Chúc Anh</strong> cũng
                    rất chú trọng vào <strong>tập thể dục</strong> và chăm chút
                    thân hình. Cô nàng thường xuyên đăng tải những bức ảnh tập
                    thể dục lên mạng xã hội và để lộ ra thân hình săn chắc và
                    đầy quyến rũ.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/chuc-anh1-1627455092366776240210.png"
                    alt="9, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/chuc-anh-1627455092362786421427.png"
                    alt="10, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <p>
                    Cũng không chịu thua nhiều đồng nghiệp khác,{" "}
                    <strong>Ngân Sát Thủ</strong> trong mùa giãn cách cũng đã
                    quyết tâm tập Yoga để nâng cao sức khỏe và chăm chút thân
                    hình.
                  </p>{" "}
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/28/ngan-sat-thu-1627455092431627236757.png"
                    alt="11, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/nst-1627455092437736188833.png"
                    alt="12, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <p>
                    Cô nàng cũng rất hay đăng ảnh luyện tập Yoga lên mạng xã hội
                    để hạ quyết tâm có được thân hình quyến rũ. Thậm chí, nhiều
                    lần <strong>Ngân Sát Thủ</strong> cũng "khoe nhẹ" chiến công
                    tập luyện như vòng ba căng tròn, nóng bỏng khiến ai nấy đều
                    "nóng mặt" khi ngước nhìn.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/nst2-16274550924421049844783.png"
                    alt="13, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/nst3-16274550924951498347061.png"
                    alt="14, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <p>
                    <strong>Ngân Sát Thủ</strong> rất chăm chỉ luyện tập Yoga
                  </p>
                  <p>
                    Là một trong những bóng hồng duyên dáng của làng PUBG
                    Mobile, <strong>MC</strong> <strong>Thảo Trang</strong> cũng
                    khiến các fan phải "đứng ngồi không yên" mỗi khi ngắm nhìn.
                    Không chỉ sở hữu gương mặt dễ thương, giọng nói ngọt ngào,
                    Thảo Trang còn ghi điểm trong mắt cộng đồng mạng bởi thân
                    hình cũng "rất gì và này nọ".
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/tt6-16274560136351963505932.jpg"
                    alt="15, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/tt4-16274559990417196800.jpg"
                    alt="16, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <p>
                    Được biết, <strong>Thảo Trang</strong> cũng rất chú trọng và
                    việc luyện <strong>tập thể dục</strong>. Cô thường xuyên
                    "chiều lòng" các fan khi đăng tải nhiều bức ảnh tập gym tại
                    gia khoe trọn thân hình chuẩn "đồng hồ cát". Không những
                    vậy, Thảo Trang còn khiến người hâm mộ phải mê mẩn khi hay
                    tạo dáng "bạo" trong những bộ đồ tập bó sát.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/tt2-16274550926352119732063.jpg"
                    alt="17, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/28/tt3-162745509267143619350.jpg"
                    alt="18, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <p>
                    <strong>Thảo Trang</strong> tạo dáng bạo trong bộ đồ tập thể
                    dục
                  </p>
                  <p>
                    Vừa xinh đẹp lại còn quyến rũ thế này, bảo sao các fan cứ
                    "đổ đứ đừ" khi <strong>Thảo Trang</strong> lên sóng.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/28/base64-16274560959771591437201-16274661474711428963475.png"
                    alt="19, Tập thể dục,khoe thân hình,Chúc Anh,Linh Ngọc Đàm,Thảo Trang,Ngân Sát Thủ,game thủ,streamer,MC,"
                    note=""
                  />
                  <p>Cô nàng cũng "khoe nhẹ" chiến tích luyện tập</p>
                  <p>Ảnh: Internet</p>
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
