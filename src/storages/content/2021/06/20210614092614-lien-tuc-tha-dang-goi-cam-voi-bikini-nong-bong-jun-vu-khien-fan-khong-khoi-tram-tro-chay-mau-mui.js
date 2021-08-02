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
"timestamp": '14/06/2021 09:26 AM',
"title": 'Liên tục thả dáng gợi cảm với bikini nóng bỏng, Jun Vũ khiến fan không khỏi trầm trồ, "chảy máu mũi"',
"description": 'Những ngày gần đây, cộng đồng mạng được một phen náo loạn với những hình ảnh cực kỳ gợi cảm của Jun Vũ.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210614092614--15-324082.jpg',
"alt": 'Hot Girl, Gai Xinh, Jun Vu, Cong Dong Mang, ',
"category": 'images',
"date": '14/06/2021',
"time": '09:26 AM',
"link": '/lien-tuc-tha-dang-goi-cam-voi-bikini-nong-bong-jun-vu-khien-fan-khong-khoi-tram-tro-chay-mau-mui',
"zcomponent": 'page_20210614092614',
"filepath": './20210614092614-lien-tuc-tha-dang-goi-cam-voi-bikini-nong-bong-jun-vu-khien-fan-khong-khoi-tram-tro-chay-mau-mui.js'
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
  'Liên tục thả dáng gợi cảm với bikini nóng bỏng, Jun Vũ khiến fan không khỏi trầm trồ, "chảy máu mũi"';
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "14/06/2021 09:26 AM";
const description =
  "Những ngày gần đây, cộng đồng mạng được một phen náo loạn với những hình ảnh cực kỳ gợi cảm của Jun Vũ.";
const link =
  "lien-tuc-tha-dang-goi-cam-voi-bikini-nong-bong-jun-vu-khien-fan-khong-khoi-tram-tro-chay-mau-mui";
const tagparam = ["hot-girl", "gai-xinh", "jun-vu", "cong-dong-mang"];
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

export default function page_20210614092614() {
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
                    Nổi lên từ một trong những "nữ thần" của làng DOTA 2 Việt
                    Nam, cái tên Jun Vũ giờ đây có lẽ đã chẳng còn quá xa lạ với
                    cộng đồng mạng. Gương mặt xinh xắn, dễ thương theo một cách
                    rất riêng, đặc biệt, cô nàng còn trở nên cực kỳ gợi cảm sau
                    khi "nâng cấp" vòng một của mình. Đặc biệt, sau khi chuyển
                    hình tượng ngây thơ, dễ thương sang phong cách có phần mặn
                    mà, gợi cảm hơn, cái tên Jun Vũ lại càng được nhắc tới nhiều
                    hơn nữa. Mới đây thôi, cô nàng <strong>hot girl</strong> này
                    lại thêm một lần đốt mắt các fan hâm mộ cũng như khiến cộng
                    đồng mạng xôn xao khi liên tục đăng tải những hình ảnh
                    bikini gợi cảm của mình.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092614--10-079517.jpg")
                        .default
                    }
                    alt="Hot Girl, Gai Xinh, Jun Vu, Cong Dong Mang, "
                    note="Jun Vũ giờ đây thường xuyên theo đuổi phong cách thời trang gợi cảm"
                  />
                  <p>
                    Theo đó, trên trang cá nhân, Jun Vũ vừa đăng tải một lèo rất
                    nhiều những hình ảnh quyến rũ của bản thân trong nhiều bộ
                    bikini, áo tắm khác nhau. Đặc biệt, bên cạnh nhan sắc thượng
                    hạng, vòng một rất gợi cảm của nàng{" "}
                    <strong>hot girl</strong> cũng khiến cho không ít fan phải
                    thừa nhận "chảy máu mũi" cũng như dành rất nhiều lời khen
                    ngợi cho cô nàng hot girl này.
                  </p>
                  <p>
                    Những hình ảnh cực kỳ nóng bỏng của Jun Vũ trên trang cá
                    nhân những ngày qua
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092614--11-733159.jpg")
                        .default
                    }
                    alt="Hot Girl, Gai Xinh, Jun Vu, Cong Dong Mang, "
                    note="Đây cũng không phải là lần đầu tiên mà Jun Vũ thực hiện những bộ ảnh gợi cảm như vậy"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092614--12-924945.jpg")
                        .default
                    }
                    alt="Hot Girl, Gai Xinh, Jun Vu, Cong Dong Mang, "
                    note="Jun Vũ vẫn rất nổi bật với gương mặt xinh xắn"
                  />{" "}
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092614--13-039316.jpg")
                        .default
                    }
                    alt="Hot Girl, Gai Xinh, Jun Vu, Cong Dong Mang, "
                    note="Nàng hot girl DOTA 2 thuở nào hiện đang rất thành công trong sự nghiệp"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092614--14-061878.jpg")
                        .default
                    }
                    alt="Hot Girl, Gai Xinh, Jun Vu, Cong Dong Mang, "
                    note="Cô nàng đôi lúc cũng gặp phải một số những lời mời gọi khiếm nhã"
                  />
                  <p>
                    Cô nàng cực kỳ tự tin khoe những đường cong gợi cảm và số đo
                    3 vòng chuẩn chỉnh của mình
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092614--15-324082.jpg")
                        .default
                    }
                    alt="Hot Girl, Gai Xinh, Jun Vu, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092614--16-775295.jpg")
                        .default
                    }
                    alt="Hot Girl, Gai Xinh, Jun Vu, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092614--17-870876.jpg")
                        .default
                    }
                    alt="Hot Girl, Gai Xinh, Jun Vu, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092614--18-734624.jpg")
                        .default
                    }
                    alt="Hot Girl, Gai Xinh, Jun Vu, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092614--19-633228.jpg")
                        .default
                    }
                    alt="Hot Girl, Gai Xinh, Jun Vu, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092614--20-037627.jpg")
                        .default
                    }
                    alt="Hot Girl, Gai Xinh, Jun Vu, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092614--21-772483.jpg")
                        .default
                    }
                    alt="Hot Girl, Gai Xinh, Jun Vu, Cong Dong Mang, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092614--22-965570.jpg")
                        .default
                    }
                    alt="Hot Girl, Gai Xinh, Jun Vu, Cong Dong Mang, "
                    note=""
                  />
                  <p>
                    Loạt chùm ảnh của Jun Vũ nhanh chóng nhận được rất nhiều lời
                    khen ngợi, đồng thời điều này cũng chứng minh rằng cô nàng
                    vẫn kiên định theo đuổi phong cách trưởng thành của mình.
                    Được biết, trước đó Jun Vũ cũng từng không ít lần cảm thấy
                    bức xúc sau những chỉ trích về việc cô nàng thường xuyên mặc
                    hay chụp những bộ ảnh có phần hơi nóng bỏng, gợi cảm. Trong
                    quá khứ, cô nàng cũng từng không ít lần khiến cho các fan
                    choáng ngợp với các bộ ảnh bikini táo bạo của mình.
                  </p>
                  <p>
                    Khởi đầu và được biết tới như một trong những{" "}
                    <strong>hot girl</strong> mạng nổi tiếng xinh đẹp, giờ đây,
                    Jun Vũ đang rất thành công với sự nghiệp của mình. Chẳng
                    những theo đuổi nghiệp diễn xuất, cô nàng còn đang là một
                    người mẫu ảnh với lượng fan hùng hậu. Bên cạnh nghệ thuật,
                    Jun Vũ cũng đang bắt đầu có những dự án kinh doanh riêng của
                    bản thân. Đôi lúc, cũng chính vì sự xinh đẹp và gợi cảm, Jun
                    Vũ cũng gặp phải một số phiền toái và những lời mời chào
                    khiếm nhã.
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
