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
"timestamp": '29/07/2021 04:13 PM',
"title": 'Khám phá "bảo tàng quỷ ám" nhà Warren cùng những giai thoại "nổi da gà"',
"description": 'Trong các phần phim thuộc vũ trụ điện ảnh Conjuring, khán giả nhiều lần "chạm trán" với những món đồ quỷ ám và cũng là chứng tích cho hành trình trừ ma của gia đình Warren.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/6/photo-1-1625567801393958335029.jpg',
"alt": 'BÚP BÊ ANNABELLE,VŨ TRỤ ĐIỆN ẢNH CONJURING,BẢO TÀNG WARREN,MÓN ĐỒ QUỶ ÁM,PHIM KINH DỊ,CHIẾC GƯƠNG TRIỆU HỒN,',
"category": 'news',
"date": '29/07/2021',
"time": '04:13 PM',
"link": '/kham-pha-bao-tang-quy-am-nha-warren-cung-nhung-giai-thoai-noi-da-ga',
"zcomponent": 'page_20210729161351',
"filepath": './20210729161351-kham-pha-bao-tang-quy-am-nha-warren-cung-nhung-giai-thoai-noi-da-ga.js'
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
  'Khám phá "bảo tàng quỷ ám" nhà Warren cùng những giai thoại "nổi da gà"';
const author = "Mèo";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:13 PM";
const description =
  'Trong các phần phim thuộc vũ trụ điện ảnh Conjuring, khán giả nhiều lần "chạm trán" với những món đồ quỷ ám và cũng là chứng tích cho hành trình trừ ma của gia đình Warren.';
const link =
  "kham-pha-bao-tang-quy-am-nha-warren-cung-nhung-giai-thoai-noi-da-ga";
const tagparam = [
  "BÚP BÊ ANNABELLE",
  "VŨ TRỤ ĐIỆN ẢNH CONJURING",
  "BẢO TÀNG WARREN",
  "MÓN ĐỒ QUỶ ÁM",
  "PHIM KINH DỊ",
  "CHIẾC GƯƠNG TRIỆU HỒN",
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

export default function page_20210729161351() {
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
                    Mỗi món đồ trong các phần phim thuộc{" "}
                    <strong>vũ trụ điện ảnh Conjuring</strong> lại gắn liền với
                    một huyền thoại ghê rợn khiến người tham quan chúng tại{" "}
                    <strong>bảo tàng Warren</strong> phải sởn gai ốc, nhưng đó
                    cũng chính là điểm khiến bảo tàng này càng trở nên cuốn hút
                    với những người đam mê sự kỳ bí.{" "}
                  </p>
                  <h5>1. Búp bê Annabelle</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/6/photo-1-1625567801393958335029.jpg"
                    alt="1, BÚP BÊ ANNABELLE,VŨ TRỤ ĐIỆN ẢNH CONJURING,BẢO TÀNG WARREN,MÓN ĐỒ QUỶ ÁM,PHIM KINH DỊ,CHIẾC GƯƠNG TRIỆU HỒN,"
                    note=""
                  />
                  <p>
                    <strong>Búp bê Annabelle</strong> chính là món đồ nổi tiếng
                    nhất <strong>bảo tàng Warren</strong> và sở hữu cho mình hẳn
                    3 phần phim điện ảnh riêng. Có rất nhiều truyền thuyết xoay
                    quanh búp bê Annabelle, thế nhưng giai thoại nổi tiếng nhất
                    có lẽ là câu chuyện mà đích thân Ed và Lorraine Warren chia
                    sẻ.{" "}
                  </p>
                  <p>
                    Vào năm 1968, một bà mẹ mua con búp bê vải Raggedy Ann cho
                    con gái là nữ y tá 28 tuổi tên Donna. Con búp bê bắt đầu gây
                    ra hiện tượng bất thường như di chuyển khắp nơi trong nhà và
                    để lại lời nhắn viết tay cho Donna và bạn cùng nhà. Một thầy
                    đồng được mời đến đã tuyên bố con búp bê bị ám bởi hồn ma bé
                    gái tên là Annabelle Higgins. Sau đó, nhà Warren vào cuộc và
                    cố gắng trục linh hồn quỷ ra khỏi búp bê nhưng bất thành. Vì
                    thế họ quyết định xây một tủ kính đặc biệt để phong ấn
                    Annabelle và cất giữ ở bảo tàng.
                  </p>
                  <h5>2. Chiếc gương triệu hồn</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/6/photo-1-16255678232651896319733.jpg"
                    alt="2, BÚP BÊ ANNABELLE,VŨ TRỤ ĐIỆN ẢNH CONJURING,BẢO TÀNG WARREN,MÓN ĐỒ QUỶ ÁM,PHIM KINH DỊ,CHIẾC GƯƠNG TRIỆU HỒN,"
                    note=""
                  />
                  <p>
                    Trong phần phim Annabelle: Ác Quỷ Trở Về (tựa gốc: Annabelle
                    Comes Home) xuất hiện một chiếc tivi có khả năng tự động
                    trình chiếu hình ảnh tương lai khi có người nhìn vào nó.
                    Trong <strong>bảo tàng Warren</strong> thực tế không có món
                    đồ nào như vậy nhưng chiếc tivi rất có thể được lấy cảm hứng
                    từ Gương triệu hồn - một vật trưng bày nổi tiếng không kém
                    Annabelle.
                  </p>
                  <p>
                    Tony Spera - con rể của vợ chồng Warren và cũng là quản lý
                    của <strong>bảo tàng Warren</strong> cho biết chiếc gương
                    từng thuộc về một người đàn ông ở New Jersey. Người đàn ông
                    này từng cố gắng dùng gương để triệu hồn người thân bằng
                    cách ngồi một mình trước gương hàng giờ và không ngừng tìm
                    cách nói chuyện với thế giới bên kia. Sau khoảng hai tuần,
                    một gương mặt quỷ gớm ghiếc bất ngờ xuất hiện trong gương và
                    nhìn thẳng vào mắt người đàn ông khiến anh ta phát điên. Vợ
                    chồng nhà Warren trở thành chủ sở hữu của Gương triệu hồn
                    sau khi người đàn ông bị đưa vào trại tâm thần và gia đình
                    anh ta gửi gắm lại chiếc gương cho họ.
                  </p>
                  <h5>3. Hộp nhạc nhà Perron</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/6/photo-1-1625567847119521569705.jpg"
                    alt="3, BÚP BÊ ANNABELLE,VŨ TRỤ ĐIỆN ẢNH CONJURING,BẢO TÀNG WARREN,MÓN ĐỒ QUỶ ÁM,PHIM KINH DỊ,CHIẾC GƯƠNG TRIỆU HỒN,"
                    note=""
                  />
                  <p>
                    {" "}
                    Năm 1971, Ed và Lorraine đến điều tra vụ quỷ ám gia đình
                    Perron tại Harrisville, đảo Rhode, Mỹ. Gia đình này bị hành
                    hạ bởi thế lực quỷ ám là một mụ phù thủy thờ quỷ Satan có
                    tên Bathsheba Sherman từng qua đời tại ngôi nhà của họ vào
                    thế kỷ 19. Giống như các đồ vật quỷ ám khác, hộp nhạc thường
                    đột ngột tự hoạt động và kéo theo sự xuất hiện của các linh
                    hồn oán hận. Đây cũng là chi tiết nổi bật trong phần đầu
                    tiên của The Conjuring - phần phim làm nên thương hiệu của
                    vũ trụ kinh dị đình đám nhất thế giới.{" "}
                  </p>
                  <RelationNewsInPage category={category} />
                  <h5>4. Piano quỷ ám</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/6/photo-1-1625567865409234016459.jpg"
                    alt="4, BÚP BÊ ANNABELLE,VŨ TRỤ ĐIỆN ẢNH CONJURING,BẢO TÀNG WARREN,MÓN ĐỒ QUỶ ÁM,PHIM KINH DỊ,CHIẾC GƯƠNG TRIỆU HỒN,"
                    note=""
                  />
                  <p>
                    Chiếc piano quỷ ám xuất hiện chớp nhoáng trong phần phim
                    Annabelle: Ác Quỷ Trở Về khi cô trông trẻ của con gái nhà
                    Warren tò mò khám phá căn phòng chứa đồ vật bị phong ấn.
                    Trong thực tế, piano quỷ ám được Ed Warren mang về từ một
                    căn nhà ma ám của Mục sư Eliakim Phelps tại Stratford,
                    Connecticut. Ed Warren thường xuyên nghe thấy tiếng đàn
                    piano vọng ra từ bảo tàng nhưng khi ông xuống kiểm tra thì
                    piano lại im bặt. Chiếc piano sau cùng đã ngừng tự phát ra
                    âm thanh sau khi được một thầy tu ban phước. Cho đến nay, cả{" "}
                    <strong>bảo tàng Warren</strong> vẫn được ban phước đều đặn
                    mỗi 2 hoặc 3 tháng để đảm bảo an toàn.
                  </p>
                  <h5>5. Bộ đầm của Quý Bà Trắng</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/6/photo-1-1625567884437994509377.jpg"
                    alt="5, BÚP BÊ ANNABELLE,VŨ TRỤ ĐIỆN ẢNH CONJURING,BẢO TÀNG WARREN,MÓN ĐỒ QUỶ ÁM,PHIM KINH DỊ,CHIẾC GƯƠNG TRIỆU HỒN,"
                    note=""
                  />
                  <p>
                    Bộ váy cưới bị ám từng xuất hiện trong Annabelle: Ác Quỷ Trở
                    Về là món đồ có thật trong <strong>bảo tàng Warren</strong>,
                    tuy nhiên bộ váy này không thực sự là váy cưới. Theo quản lý
                    bảo tàng Tony Spera, bộ váy trắng trong bảo tàng thuộc về
                    Quý Bà Trắng - con ma nổi tiếng của Nghĩa địa Union tại
                    Connecticut. Quý Bà Trắng được các cư dân đi ngang qua nghĩa
                    địa bắt gặp và xác nhận tồn tại trong nhiều thập kỷ. Trong
                    một lần, đội cứu hỏa khu vực lái xe qua nghĩa địa trong lúc
                    làm nhiệm vụ và vô tình tông phải một người phụ nữ mặc váy
                    trắng. Cú tông mạnh đến nỗi xe tải bị móp nhưng khi anh lính
                    cứu hóa xuống xe thì không tìm thấy người bị thương. Trung
                    tâm cứu hộ sau đó cũng không ghi nhận một tai nạn nào xảy
                    ra.
                  </p>
                  <p>
                    Mỗi phần phim thuộc vũ trụ Conjuring xuất hiện, lại có thêm
                    những giai thoại mới về những <strong>món đồ quỷ ám</strong>{" "}
                    được hé lộ. The Conjuring: Ma Xui Quỷ Khiến – phần phim mới
                    nhất thuộc thương hiệu Conjuring cũng hứa hẹn sẽ tiếp tục
                    "bổ sung" vào bảo tàng nhà Warren những đồ vật quỷ ám mới,
                    ẩn chứa những bí ẩn rùng rợn hơn và vượt lên trên bất cứ câu
                    chuyện kinh dị nào từng được kể trước đây.{" "}
                  </p>
                  <p>
                    THE CONJURING: THE DEVIL MADE ME DO IT - TỰA VIỆT: THE
                    CONJURING: MA XUI QUỶ KHIẾN - dự kiến khởi chiếu tháng 2021
                    trên toàn quốc.
                  </p>
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
