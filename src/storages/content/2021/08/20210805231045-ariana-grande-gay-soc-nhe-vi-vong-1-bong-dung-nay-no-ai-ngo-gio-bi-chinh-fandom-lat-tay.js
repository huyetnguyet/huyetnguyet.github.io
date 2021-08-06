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
"timestamp": '05/08/2021 11:10 PM',
"title": 'Ariana Grande gây sốc nhẹ vì vòng 1 bỗng dưng nảy nở, ai ngờ giờ bị chính fandom "lật tẩy"',
"description": 'Quả là 1 màn "bóc phốt" thú vị tới từ cộng đồng fan của Ariana Grande.',
"src": 'https://kenh14cdn.com/2020/9/21/cute-16006642926101699460513.png',
"alt": 'Ariana Grande,công nghệ thẩm mỹ thời nay,sao us uk,Showbiz,dao kéo,nâng ngực,',
"category": 'stars',
"date": '05/08/2021',
"time": '11:10 PM',
"link": '/ariana-grande-gay-soc-nhe-vi-vong-1-bong-dung-nay-no-ai-ngo-gio-bi-chinh-fandom-lat-tay',
"zcomponent": 'page_20210805231045',
"filepath": './20210805231045-ariana-grande-gay-soc-nhe-vi-vong-1-bong-dung-nay-no-ai-ngo-gio-bi-chinh-fandom-lat-tay.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  'Ariana Grande gây sốc nhẹ vì vòng 1 bỗng dưng nảy nở, ai ngờ giờ bị chính fandom "lật tẩy"';
const author = "LÝ THẨM,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "05/08/2021 11:10 PM";
const description =
  'Quả là 1 màn "bóc phốt" thú vị tới từ cộng đồng fan của Ariana Grande.';
const link =
  "ariana-grande-gay-soc-nhe-vi-vong-1-bong-dung-nay-no-ai-ngo-gio-bi-chinh-fandom-lat-tay";
const tagparam = [
  "Ariana Grande",
  "công nghệ thẩm mỹ thời nay",
  "sao us uk",
  "Showbiz",
  "dao kéo",
  "nâng ngực",
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

export default function page_20210805231045() {
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
                      Cách đây hơn 1 tháng, hình ảnh{" "}
                      <strong>Ariana Grande</strong> quảng bá cho dòng nước hoa
                      God Is A Woman xuất hiện trên MXH và ngay lập tức nhận
                      được sự quan tâm của cộng đồng mạng. Trong tà váy tím cúp
                      ngực vừa chung thuỷ vừa mộng mơ, nàng lôi kéo con mắt dân
                      tình nhìn sâu vào vòng 1 phổng phao khác thường.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/20542856341750211025806544325069818059031174n-16282140665451950051075.jpeg"
                      alt="2, Ariana Grande,công nghệ thẩm mỹ thời nay,sao us uk,Showbiz,dao kéo,nâng ngực,"
                      note=""
                    />
                    <p>
                      Hình ảnh 1 bên ngực của <strong>Ariana Grande</strong>{" "}
                      bỗng "upsize" lên tới vài cỡ áo ngực, tưởng như sắp tràn
                      xuống cổ nữ ca sĩ
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/screen-shot-2021-08-06-at-084033-16282140725071660158659.png"
                      alt="3, Ariana Grande,công nghệ thẩm mỹ thời nay,sao us uk,Showbiz,dao kéo,nâng ngực,"
                      note=""
                    />
                    <p>
                      Dĩ nhiên người hâm mộ khi ấy quá đỗi xôn xao bởi với chiều
                      cao chỉ hơn 1m5 và body gầy nhẳng chẳng chút mỡ thừa, quả
                      là khó tin khi khuôn ngực của nàng lại tăng cỡ đột biến
                      tới vậy. Thậm chí có ý kiến cho rằng Ariana có "sửa sang"
                      để thay đổi vòng 1 sau khi kết hôn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/screen-shot-2021-08-06-at-083951-16282140724911791774347.png"
                      alt="4, Ariana Grande,công nghệ thẩm mỹ thời nay,sao us uk,Showbiz,dao kéo,nâng ngực,"
                      note=""
                    />
                    <p>
                      Nhưng không! Mới đây, chính fandom của nàng đã tự tay "bóc
                      mẽ" thần tượng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/sq107pp0046rhires2-16282153609741959312589.jpeg"
                      alt="5, Ariana Grande,công nghệ thẩm mỹ thời nay,sao us uk,Showbiz,dao kéo,nâng ngực,"
                      note=""
                    />
                    <p>
                      Theo đó, trong đoạn clip quảng cáo nước hoa được tung ra
                      ngày hôm qua, không khó để nhận thấy vòng 1 phổng phao kia
                      hoá ra chỉ là sản phẩm của photoshop, chứ không phải sản
                      phẩm của <strong>dao kéo</strong> như nhiều người vẫn đang
                      bán tín bán nghi.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Khuôn ngực của <strong>Ariana Grande</strong> vẫn vậy,
                      không hề có sự vụ "upsize" gì ở đây cả
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/arianagrandeaschanel2fanmadeposterbygiulio99damy1e4-fullview-16282153909721635648217.jpeg"
                      alt="6, Ariana Grande,công nghệ thẩm mỹ thời nay,sao us uk,Showbiz,dao kéo,nâng ngực,"
                      note=""
                    />
                    <p>
                      Nói tóm lại, <strong>Ariana Grande</strong> vẫn thế, khuôn
                      ngực cô nàng vẫn cân đối và nhỏ xinh như vậy, tất cả là do
                      thợ chỉnh ảnh lố tay. Quả nhiên "Nghệ thuật là ánh trăng
                      lừa dối"!
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/e70mhw6k6re11-16282153610731598966302.jpeg"
                      alt="7, Ariana Grande,công nghệ thẩm mỹ thời nay,sao us uk,Showbiz,dao kéo,nâng ngực,"
                      note=""
                    />
                    <p>
                      Vòng ngực <strong>Ariana Grande</strong> dẫu không khủng
                      bố nhưng khá cân đối, thi thoảng vẫn có những khoảnh khắc
                      nóng bỏng ra phết!
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/ariana-grande-boobs-2019-1628215360894961855199.jpeg"
                      alt="8, Ariana Grande,công nghệ thẩm mỹ thời nay,sao us uk,Showbiz,dao kéo,nâng ngực,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/banner-chan-trang-16279626969911776027069-16281808993751052935334.jpeg"
                      alt="9, Ariana Grande,công nghệ thẩm mỹ thời nay,sao us uk,Showbiz,dao kéo,nâng ngực,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/5/banner-chan-trang-16279626969911776027069-16281808993751052935334.jpeg"
                      alt="10, Ariana Grande,công nghệ thẩm mỹ thời nay,sao us uk,Showbiz,dao kéo,nâng ngực,"
                      note=""
                    />
                    <p>Ảnh: Sưu tầm</p>{" "}
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
