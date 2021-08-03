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
"timestamp": '29/06/2021 09:52 PM',
"title": '“Khoe” nét lai Tây từ bé, Xoài Non bị anti-fan chọc tức đến “uất nghẹn”',
"description": 'Xoài Non bị dân mạng nghi ngờ can thiệp dao kéo từ khi mới 14 tuổi.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629215235--10-81303.jpeg',
"alt": 'XOÀI NON,XEMESIS,CỘNG ĐỒNG MẠNG,PHẪU THUẬT,',
"category": 'stars',
"date": '29/06/2021',
"time": '09:52 PM',
"link": '/khoe-net-lai-tay-tu-be-xoai-non-bi-anti-fan-choc-tuc-den-uat-nghen',
"zcomponent": 'page_20210629215235',
"filepath": './20210629215235-khoe-net-lai-tay-tu-be-xoai-non-bi-anti-fan-choc-tuc-den-uat-nghen.js'
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
  "“Khoe” nét lai Tây từ bé, Xoài Non bị anti-fan chọc tức đến “uất nghẹn”";
const author = "Kayle";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 09:52 PM";
const description =
  "Xoài Non bị dân mạng nghi ngờ can thiệp dao kéo từ khi mới 14 tuổi.";
const link =
  "khoe-net-lai-tay-tu-be-xoai-non-bi-anti-fan-choc-tuc-den-uat-nghen";
const tagparam = ["XOÀI NON", "XEMESIS", "CỘNG ĐỒNG MẠNG", "PHẪU THUẬT"];
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

export default function page_20210629215235() {
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
                      Là một hot girl mạng nổi danh, <strong>Xoài Non</strong>,
                      tên thật là Phạm Thuỳ Trang sở hữu nhan sắc xinh đẹp được
                      ví như con lai.{" "}
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215235--10-81303.jpeg")
                          .default
                      }
                      alt="1, XOÀI NON,XEMESIS,CỘNG ĐỒNG MẠNG,PHẪU THUẬT,"
                      note=""
                    />
                    <p>
                      Không chỉ sở hữu vẻ đẹp lai tây xinh xắn, cô nàng còn có
                      làn da trắng hồng cùng vóc dáng quyến rũ nên đã có khá
                      nhiều người theo dõi trên Instagram cá nhân từ sớm. Cũng
                      nhờ vậy, nàng hot girl này trở thành gương mặt quen thuộc
                      giới thiệu sản phẩm cho các nhãn hàng và mẫu ảnh. Cô được
                      ví như bản sao của Phanh Lee - hot girl đời đầu rất nổi
                      tiếng.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215235--11-28689.jpeg")
                          .default
                      }
                      alt="2, XOÀI NON,XEMESIS,CỘNG ĐỒNG MẠNG,PHẪU THUẬT,"
                      note=""
                    />
                    <p>
                      Mới đây, vợ trẻ của nam streamer giàu nhất Việt Nam đã bất
                      ngờ "đào" lại ảnh thời cấp 2 của mình, chứng tỏ nét đẹp
                      lai Tây chuẩn hot girl từ bé. Trên trang Instagram cá
                      nhân, nàng mẫu đã chia sẻ lại tấm hình cô chụp vào năm 14
                      tuổi. Vẻ đẹp tự nhiên, thần thái rạng ngời của nữ sinh
                      thời bấy giờ là bằng chứng đập tan ý kiến cho rằng{" "}
                      <strong>Xoài Non</strong> <strong>phẫu thuật</strong> thẩm
                      mỹ.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215235--12-88944.jpeg")
                          .default
                      }
                      alt="3, XOÀI NON,XEMESIS,CỘNG ĐỒNG MẠNG,PHẪU THUẬT,"
                      note=""
                    />
                    <p>
                      Ngỡ tưởng là vậy, thế nhưng đối với những người có “hiềm
                      khích" với nàng dâu của <strong>Xemesis</strong> thì
                      “giọng” nào cũng nói được. Anti-fan thẳng thừng bình luận
                      rằng, hoá ra cô nàng tác động "dao kéo" sớm như thế này
                      khiến cho hot girl 18 tuổi tức nghẹn.{" "}
                    </p>{" "}
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215235--13-363847.jpg")
                          .default
                      }
                      alt="4, XOÀI NON,XEMESIS,CỘNG ĐỒNG MẠNG,PHẪU THUẬT,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215235--14-866784.png")
                          .default
                      }
                      alt="5, XOÀI NON,XEMESIS,CỘNG ĐỒNG MẠNG,PHẪU THUẬT,"
                      note=""
                    />
                    <p>
                      Hình ảnh hồi còn đi học của <strong>Xoài Non</strong>n.
                    </p>{" "}
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215235--15-90406.jpeg")
                          .default
                      }
                      alt="6, XOÀI NON,XEMESIS,CỘNG ĐỒNG MẠNG,PHẪU THUẬT,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215235--16-54987.jpeg")
                          .default
                      }
                      alt="7, XOÀI NON,XEMESIS,CỘNG ĐỒNG MẠNG,PHẪU THUẬT,"
                      note=""
                    />
                    <p>
                      Trước đó, cô nàng đã nhiều lần khẳng định mình không hề
                      sửa gì trên khuôn mặt, cô bật mí rằng chiếc mũi của mình
                      đẹp như vậy là do được thừa hưởng từ người bố và những nét
                      còn lại “nhặt" từ nhan sắc của mẹ.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215235--17-019404.jpg")
                          .default
                      }
                      alt="8, XOÀI NON,XEMESIS,CỘNG ĐỒNG MẠNG,PHẪU THUẬT,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215235--18-268520.jpg")
                          .default
                      }
                      alt="9, XOÀI NON,XEMESIS,CỘNG ĐỒNG MẠNG,PHẪU THUẬT,"
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
