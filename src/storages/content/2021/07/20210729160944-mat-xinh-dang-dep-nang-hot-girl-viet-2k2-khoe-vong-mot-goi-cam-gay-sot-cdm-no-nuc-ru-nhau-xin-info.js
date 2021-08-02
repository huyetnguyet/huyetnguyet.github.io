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
"timestamp": '29/07/2021 04:09 PM',
"title": 'Mặt xinh dáng đẹp, nàng hot girl Việt 2k2 khoe vòng một gợi cảm gây sốt, CĐM nô nức rủ nhau xin info',
"description": 'Cô nàng hot girl này đang gây xôn xao CĐM bởi vẻ ngoài quá ư gợi cảm của mình.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-16250268830842063902535.png',
"alt": 'HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,TRANG PHẠM,',
"category": 'images',
"date": '29/07/2021',
"time": '04:09 PM',
"link": '/mat-xinh-dang-dep-nang-hot-girl-viet-2k2-khoe-vong-mot-goi-cam-gay-sot-cdm-no-nuc-ru-nhau-xin-info',
"zcomponent": 'page_20210729160944',
"filepath": './20210729160944-mat-xinh-dang-dep-nang-hot-girl-viet-2k2-khoe-vong-mot-goi-cam-gay-sot-cdm-no-nuc-ru-nhau-xin-info.js'
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
  "Mặt xinh dáng đẹp, nàng hot girl Việt 2k2 khoe vòng một gợi cảm gây sốt, CĐM nô nức rủ nhau xin info";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:09 PM";
const description =
  "Cô nàng hot girl này đang gây xôn xao CĐM bởi vẻ ngoài quá ư gợi cảm của mình.";
const link =
  "mat-xinh-dang-dep-nang-hot-girl-viet-2k2-khoe-vong-mot-goi-cam-gay-sot-cdm-no-nuc-ru-nhau-xin-info";
const tagparam = ["HOT GIRL", "GÁI XINH", "CỘNG ĐỒNG MẠNG", "TRANG PHẠM"];
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

export default function page_20210729160944() {
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
                    Ở thời điểm hiện tại, việc các cô nàng{" "}
                    <strong>hot girl</strong>, <strong>gái xinh</strong> xuất
                    hiện nhiều như cơm bữa, từ trên mạng xã hội cho tới những
                    ngóc ngách của đường phố đã là câu chuyện không còn xa lạ.
                    Thậm chí, có những cô nàng còn chẳng biết rằng mình đã trở
                    nên nổi tiếng chỉ sau một hoặc vài bức ảnh được chụp lén
                    nữa. Và cô nàng <strong>Trang Phạm</strong> dưới đây cũng là
                    một ví dụ điển hình. Chỉ với một bộ ảnh cực kỳ xinh xắn
                    nhưng không kém phần gợi cảm mới đây, Trang Phạm bất ngờ trở
                    thành một trong những hot girl gây sốt{" "}
                    <strong>cộng đồng mạng</strong> và được tìm kiếm nhiều nhất
                    trong thời gian qua.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-162502649290992610113.png"
                    alt="1, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,TRANG PHẠM,"
                    note="Trang Phạm, cô nàng hot girl với bộ ảnh gây sốt cộng đồng mạng những ngày qua"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-16250264880651612686121.png"
                    alt="2, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,TRANG PHẠM,"
                    note="Đồng thời khiến cho cư dân mạng nô nức xin info"
                  />
                  <p>
                    Sở hữu gương mặt cực kỳ xinh đẹp với những đường nét tinh
                    tế, <strong>Trang Phạm</strong> nhanh chóng thu hút sự chú ý
                    của người xem ngay từ cái nhìn đầu tiên. Đặc biệt, với làn
                    da trắng mịn cùng vòng một vô cùng gợi cảm, bộ ảnh gần đây
                    của cô nàng khiến cho nhiều người phải dùng hai từ hoàn hảo
                    để mô tả. Và khi tìm hiểu về cô nàng, nhiều người càng bất
                    ngờ hơn nữa khi biết nàng <strong>hot girl</strong> sinh năm
                    2002, tức là năm nay mới tròn 19 tuổi và đến từ Hà Nội.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-16250266424531798525355.png"
                    alt="3, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,TRANG PHẠM,"
                    note="Nhan sắc của nàng hot girl 2k2 đang gây bão mạng"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-1625026649544906300875.png"
                    alt="4, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,TRANG PHẠM,"
                    note="Nét xinh xắn, gợi cảm nhưng không kém phần ngây thơ của cô nàng"
                  />
                  <p>
                    Hiện tại, cô nàng đang theo đuổi sự nghiệp kinh doanh cũng
                    như người mẫu ảnh. Bản thân <strong>Trang Phạm</strong> cũng
                    thẳng thắn chia sẻ rằng mình quyết định không học đại học vì
                    muốn chuyển hướng sang kinh doanh cũng như theo đuổi nghệ
                    thuật. Quyết định của cô cũng được gia đình ủng hộ. Tuy
                    nhiên, gợi cảm và xinh đẹp đôi khi cũng đi kèm với một số
                    rắc rối. Bản thân Trang Phạm cũng thường xuyên nhận phải một
                    số tin nhắn, bình luận khiếm nhã khiến cô nàng cảm thấy
                    không thoải mái. Đối mặt với vấn đề này, nàng{" "}
                    <strong>hot girl</strong> cho rằng chỉ cần những người cô
                    yêu thương thấu hiểu được những điều cô làm là được.
                  </p>
                  <p>
                    Hiện tại, cô nàng vẫn đang là một trong những nàng{" "}
                    <strong>hot girl</strong> nhận được nhiều sự chú ý nhất từ
                    phía <strong>cộng đồng mạng</strong>.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-16250268830842063902535.png"
                    alt="5, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,TRANG PHẠM,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-16250269023701513239924.png"
                    alt="6, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,TRANG PHẠM,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-16250270977671355981365.png"
                    alt="7, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,TRANG PHẠM,"
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
