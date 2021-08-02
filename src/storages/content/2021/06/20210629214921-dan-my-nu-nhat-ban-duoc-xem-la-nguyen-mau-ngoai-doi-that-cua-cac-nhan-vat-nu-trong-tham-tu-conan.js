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
"timestamp": '29/06/2021 09:49 PM',
"title": 'Dàn mỹ nữ Nhật Bản được xem là nguyên mẫu ngoài đời thật của các nhân vật nữ trong Thám tử Conan',
"description": 'Trong cuộc phỏng vấn năm 2019, tác giả Aoyama Gosho đã bật mí nguyên mẫu ngoài đời thực của các nhân vật nữ được yêu thích nhất bộ truyện Thám tử Conan.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629214921--13-345233.jpg',
"alt": 'KHÁM PHÁ,MANGA,ANIME,GIẢI TRÍ,THÁM TỬ CONAN,XUẤT BẢN,TRUYỆN TRANH,',
"category": 'images',
"date": '29/06/2021',
"time": '09:49 PM',
"link": '/dan-my-nu-nhat-ban-duoc-xem-la-nguyen-mau-ngoai-doi-that-cua-cac-nhan-vat-nu-trong-tham-tu-conan',
"zcomponent": 'page_20210629214921',
"filepath": './20210629214921-dan-my-nu-nhat-ban-duoc-xem-la-nguyen-mau-ngoai-doi-that-cua-cac-nhan-vat-nu-trong-tham-tu-conan.js'
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
  "Dàn mỹ nữ Nhật Bản được xem là nguyên mẫu ngoài đời thật của các nhân vật nữ trong Thám tử Conan";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 09:49 PM";
const description =
  "Trong cuộc phỏng vấn năm 2019, tác giả Aoyama Gosho đã bật mí nguyên mẫu ngoài đời thực của các nhân vật nữ được yêu thích nhất bộ truyện Thám tử Conan.";
const link =
  "dan-my-nu-nhat-ban-duoc-xem-la-nguyen-mau-ngoai-doi-that-cua-cac-nhan-vat-nu-trong-tham-tu-conan";
const tagparam = [
  "KHÁM PHÁ",
  "MANGA",
  "ANIME",
  "GIẢI TRÍ",
  "THÁM TỬ CONAN",
  "XUẤT BẢN",
  "TRUYỆN TRANH",
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

export default function page_20210629214921() {
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
                    Ran Mori, Haibara và Sonoko là ba trong số những nhân vật nữ
                    để lại nhiều ấn tượng nhất đối với các fan của{" "}
                    <strong>Thám tử Conan</strong>. Thậm chí, với nhiều người,
                    cùng với Conan – Shinichi, họ đã trở thành một phần tuổi thơ
                    khi xuất hiện trên các trang truyện phá án gay cấn. Những
                    tưởng bộ ba nhân vật nữ hoàn hảo này chỉ có trong trí tưởng
                    tượng của tác giả Aoyama Gosho, thì trong một cuộc phỏng vấn
                    ông đã chia sẻ cho các fan được biết về hình mẫu ngoài đời
                    thật của họ. Tất nhiên, đó đều là các mỹ nhân lừng danh một
                    thời của xứ sở hoa anh đào.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214921--10-614343.jpg")
                        .default
                    }
                    alt="1, KHÁM PHÁ,MANGA,ANIME,GIẢI TRÍ,THÁM TỬ CONAN,XUẤT BẢN,TRUYỆN TRANH,"
                    note=""
                  />
                  <p>
                    Theo chia sẻ của tác giả trên tạp chí Da Vinci vào năm 2019,
                    ông cho biết mình rất thích các cô gái có cá tính độc lập.
                    Khi còn trẻ, ông thần tượng ba mỹ nhân là Kikuchi Momoko,
                    Nakamori Akina và Koizumi Kyoko. Chính vì sự yêu thích này
                    mà ông đã xây dựng các nhân vật nữ trong bộ truyện{" "}
                    <strong>Thám tử Conan</strong> theo hình mẫu ba nữ thần
                    tượng.
                  </p>
                  <h5>1. Kikuchi Momoko – Nguyên mẫu đời thật của Ran Mori</h5>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214921--11-614091.jpg")
                        .default
                    }
                    alt="2, KHÁM PHÁ,MANGA,ANIME,GIẢI TRÍ,THÁM TỬ CONAN,XUẤT BẢN,TRUYỆN TRANH,"
                    note=""
                  />
                  <p>
                    Kikuchi Momoko sinh năm 1968, là một diễn viên kiêm ca sĩ.
                    Cô được công ty <strong>giải trí</strong> tuyển chọn vào năm
                    1982 và bắt đầu xuất hiện trên truyền hình vào năm 1983.
                    Kikuchi ra mắt với tư cách thần tượng vào năm 1984, rồi
                    nhanh chóng trở thành ngôi sao nổi tiếng trong giai đoạn
                    cuối thập niên 80. Kikuchi từng tham gia lĩnh vực diễn xuất.
                  </p>
                  <p>
                    Sức ảnh hưởng của Kikuchi Momoko mạnh mẽ đến nỗi trong cuộc
                    bình chọn Top 50 thần tượng xuất sắc nhất mọi thời đại tại
                    Nhật vào năm 2011, cô đứng ở vị trí thứ 42.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214921--12-296001.jpg")
                        .default
                    }
                    alt="3, KHÁM PHÁ,MANGA,ANIME,GIẢI TRÍ,THÁM TỬ CONAN,XUẤT BẢN,TRUYỆN TRANH,"
                    note=""
                  />
                  <p>
                    Trước bài phỏng vấn của tác giả Aoyama Gosho, fan đã nhầm
                    lẫn nữ diễn viên Shizuka Kudo là hình mẫu của Ran Mori vì cô
                    có kiểu tóc khá giống với thiết kế ban đầu dành cho nhân vật
                    này. Tuy nhiên, nhầm lẫn này đã được làm rõ, bởi Shizuka
                    Kudo thực chất chỉ được nhắc đến như là ví dụ cho kiểu tóc
                    mà tác giả muốn vẽ cho Ran Mori mà thôi.
                  </p>
                  <h5>2. Nakamori Akina – Nguyên mẫu đời thật của Haibara</h5>{" "}
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214921--13-345233.jpg")
                        .default
                    }
                    alt="4, KHÁM PHÁ,MANGA,ANIME,GIẢI TRÍ,THÁM TỬ CONAN,XUẤT BẢN,TRUYỆN TRANH,"
                    note=""
                  />
                  <p>
                    Nakamori Akina sinh năm 1965, cô là ca sĩ kiêm diễn viên nổi
                    tiếng Nhật Bản trong thập niên 80. Nakamori thành danh sau
                    khi chiến thắng trong một chương trình tài năng năm 1981. Ba
                    năm sau khi ra mắt, cô đã đạt được nhiều kỷ lục về doanh số
                    bán đĩa, thậm chí còn được ví von là thiên hậu của làng nhạc
                    Nhật lúc bấy giờ.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Không chỉ nỗi tiếng trong lĩnh vực ca hát, Nakamori Akina
                    còn là diễn viên hàng đầu Nhật Bản, được mến mộ nhờ vẻ đẹp
                    xinh xắn, tươi trẻ. Rất nhiều nam giới thời đó xem Nakamori
                    Akina là người trong mộng. Tuy nhiên, chuyện tình cảm của
                    Nakamori Akina lại không suôn sẻ giống như sự nghiệp. Cô bị
                    nam diễn viên Masihako Kondo phản bội, người thân lợi dụng
                    danh tiếng. Sau những biến cố đầy đau khổ, nữ diễn viên đã
                    chọn cách tự sát, nhưng may mắn được cứu chữa kịp thời.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214921--14-771077.jpg")
                        .default
                    }
                    alt="5, KHÁM PHÁ,MANGA,ANIME,GIẢI TRÍ,THÁM TỬ CONAN,XUẤT BẢN,TRUYỆN TRANH,"
                    note=""
                  />
                  <p>
                    Hiện nay Nakamori Akina vẫn hoạt động trong làng âm nhạc,
                    song có phần lặng lẽ, tranh xa ồn ào.
                  </p>
                  <h5>
                    3. Koizumi Kyoko – Nguyên mẫu đời thật của Sonoko Suzuki
                  </h5>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214921--15-523802.jpg")
                        .default
                    }
                    alt="6, KHÁM PHÁ,MANGA,ANIME,GIẢI TRÍ,THÁM TỬ CONAN,XUẤT BẢN,TRUYỆN TRANH,"
                    note=""
                  />
                  <p>
                    Cũng giống như Kikuchi Momoko và Nakamori Akina, Koizumi
                    Kyoko là nữ diễn viên kiêm ca sĩ. Cô sinh năm 1966. Dù hoạt
                    động đồng thời cả trong lĩnh vực ca hát và diễn xuất nhưng
                    cô được biết đến nhiều nhờ các vai diễn xuất thần trong một
                    loạt tác phẩm đình đám như: Nữ thợ lặn, Bản giao hưởng
                    Tokyo, Penance, Sakuran, Blue Spring…
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629214921--16-500992.jpg")
                        .default
                    }
                    alt="7, KHÁM PHÁ,MANGA,ANIME,GIẢI TRÍ,THÁM TỬ CONAN,XUẤT BẢN,TRUYỆN TRANH,"
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
