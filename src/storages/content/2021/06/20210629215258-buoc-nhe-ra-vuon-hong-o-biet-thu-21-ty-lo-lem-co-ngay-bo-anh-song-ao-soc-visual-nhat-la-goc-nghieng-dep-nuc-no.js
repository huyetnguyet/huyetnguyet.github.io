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
"title": 'Bước nhẹ ra vườn hồng ở biệt thự 21 tỷ, Lọ Lem có ngay bộ ảnh sống ảo, “sốc visual” nhất là góc nghiêng đẹp nức nở!',
"description": 'Biết là khen mãi rồi nhưng MC Quyền Linh có cô con gái Lọ Lem “đáng đồng tiền bát gạo” thật sự!',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629215258--11-099671.jpg',
"alt": 'MC Quyền Linh,sao Việt,Vbiz,showbiz Việt,Con gái MC Quyền Linh,bé lọ lem,con gái Quyền Linh,Lọ Lem con Quyền Linh,mỹ nhân gen z,',
"category": 'stars',
"date": '29/06/2021',
"time": '09:52 PM',
"link": '/buoc-nhe-ra-vuon-hong-o-biet-thu-21-ty-lo-lem-co-ngay-bo-anh-song-ao-soc-visual-nhat-la-goc-nghieng-dep-nuc-no',
"zcomponent": 'page_20210629215258',
"filepath": './20210629215258-buoc-nhe-ra-vuon-hong-o-biet-thu-21-ty-lo-lem-co-ngay-bo-anh-song-ao-soc-visual-nhat-la-goc-nghieng-dep-nuc-no.js'
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
  "Bước nhẹ ra vườn hồng ở biệt thự 21 tỷ, Lọ Lem có ngay bộ ảnh sống ảo, “sốc visual” nhất là góc nghiêng đẹp nức nở!";
const author = "HẠ ANH,";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 09:52 PM";
const description =
  "Biết là khen mãi rồi nhưng MC Quyền Linh có cô con gái Lọ Lem “đáng đồng tiền bát gạo” thật sự!";
const link =
  "buoc-nhe-ra-vuon-hong-o-biet-thu-21-ty-lo-lem-co-ngay-bo-anh-song-ao-soc-visual-nhat-la-goc-nghieng-dep-nuc-no";
const tagparam = [
  "MC Quyền Linh",
  "sao Việt",
  "Vbiz",
  "showbiz Việt",
  "Con gái MC Quyền Linh",
  "bé lọ lem",
  "con gái Quyền Linh",
  "Lọ Lem con Quyền Linh",
  "mỹ nhân gen z",
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

export default function page_20210629215258() {
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
                      Không phải đơn thuần mà 2 con Lọ Lem và Hạt Dẻ nhà{" "}
                      <strong>MC Quyền Linh</strong> có sức hút cực khủng trên
                      mạng xã hội. Đâu chỉ học giỏi, sinh ra trong hào môn, 2 ái
                      nữ của nam MC và bà xã doanh nhân Dạ Thảo còn sở hữu nhan
                      sắc trong veo, xinh xắn như Hoa hậu. Cứ mỗi lần vợ MC
                      Quyền Linh tung ảnh con gái đều gây sốt, ekip toàn "của
                      nhà trồng được" nhưng cũng rất gì và này nọ.
                    </p>
                    <p>
                      Nói đâu xa, nhân dịp cuối tuần rảnh rỗi, cả gia đình{" "}
                      <strong>MC Quyền Linh</strong> đã cùng nhau dạo vườn hồng
                      bên trong biệt thự 21 tỷ để chụp ảnh "sống ảo". Ở nhà nên
                      chỉ ăn mặc giản dị, chẳng cần son phấn mà ái nữ Lọ Lem vẫn
                      đủ sức giật trọn spotlight, nụ cười toả nắng khiến ai nhìn
                      vào cũng tan chảy. Đặc biệt, chỉ qua khoảnh khắc cận
                      visual được mẹ chụp bằng camera thường, Lọ Lem đã chứng
                      minh nhan sắc chuẩn <strong>mỹ nhân Gen Z</strong> đình
                      đám, soi cận cũng khó tìm được khuyết điểm. Choáng nhất có
                      lẽ là bức ảnh cận mặt và góc nghiêng của Lọ Lem. Ra ngoài
                      làm "MC quốc dân" nổi tiếng chứ khi về đến nhà, MC Quyền
                      Linh đành trở thành nền trong bức ảnh chụp cùng con gái
                      cưng.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215258--10-365620.jpg")
                          .default
                      }
                      alt="1, MC Quyền Linh,sao Việt,Vbiz,showbiz Việt,Con gái MC Quyền Linh,bé lọ lem,con gái Quyền Linh,Lọ Lem con Quyền Linh,mỹ nhân gen z,"
                      note="Chỉ cần bước ra vườn hồng bên trong biệt thự 21 tỷ, MC Quyền Linh và con gái cũng có bộ ảnh gây sốt"
                    />
                    <p>
                      Vợ chồng doanh nhân Dạ Thảo có cô con gái tròn 10 điểm,
                      nhan sắc này mà chinh chiến các cuộc thi nhan sắc là gây
                      "bão" cho mà xem
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215258--12-919892.jpg")
                          .default
                      }
                      alt="2, MC Quyền Linh,sao Việt,Vbiz,showbiz Việt,Con gái MC Quyền Linh,bé lọ lem,con gái Quyền Linh,Lọ Lem con Quyền Linh,mỹ nhân gen z,"
                      note="Ảnh cận visual qua camera thường khó chê của Lọ Lem, từ nụ cười đến ánh mắt đều cực cuốn hút"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Ái nữ nhà Quyền Linh sở hữu góc nghiêng và thần thái đỉnh
                      của chóp, ekip toàn của nhà trồng được nhưng xem ảnh "sống
                      ảo" xịn khác gì studio
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215258--14-641320.jpg")
                          .default
                      }
                      alt="3, MC Quyền Linh,sao Việt,Vbiz,showbiz Việt,Con gái MC Quyền Linh,bé lọ lem,con gái Quyền Linh,Lọ Lem con Quyền Linh,mỹ nhân gen z,"
                      note="Lọ Lem đích thị là mỹ nhân Gen Z khó ai vượt qua trong showbiz Việt"
                    />
                    <p>
                      Chẳng cần đi đâu xa, Lọ Lem cứ chọn bừa 1 góc bên trong
                      biệt thự 21 tỷ là cũng có bộ ảnh "sống ảo" nức nở!
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215258--11-099671.jpg")
                          .default
                      }
                      alt="4, MC Quyền Linh,sao Việt,Vbiz,showbiz Việt,Con gái MC Quyền Linh,bé lọ lem,con gái Quyền Linh,Lọ Lem con Quyền Linh,mỹ nhân gen z,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215258--13-621190.jpg")
                          .default
                      }
                      alt="5, MC Quyền Linh,sao Việt,Vbiz,showbiz Việt,Con gái MC Quyền Linh,bé lọ lem,con gái Quyền Linh,Lọ Lem con Quyền Linh,mỹ nhân gen z,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215258--15-014071.jpg")
                          .default
                      }
                      alt="6, MC Quyền Linh,sao Việt,Vbiz,showbiz Việt,Con gái MC Quyền Linh,bé lọ lem,con gái Quyền Linh,Lọ Lem con Quyền Linh,mỹ nhân gen z,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215258--16-158776.jpg")
                          .default
                      }
                      alt="7, MC Quyền Linh,sao Việt,Vbiz,showbiz Việt,Con gái MC Quyền Linh,bé lọ lem,con gái Quyền Linh,Lọ Lem con Quyền Linh,mỹ nhân gen z,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215258--17-925226.jpg")
                          .default
                      }
                      alt="8, MC Quyền Linh,sao Việt,Vbiz,showbiz Việt,Con gái MC Quyền Linh,bé lọ lem,con gái Quyền Linh,Lọ Lem con Quyền Linh,mỹ nhân gen z,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215258--18-815010.jpg")
                          .default
                      }
                      alt="9, MC Quyền Linh,sao Việt,Vbiz,showbiz Việt,Con gái MC Quyền Linh,bé lọ lem,con gái Quyền Linh,Lọ Lem con Quyền Linh,mỹ nhân gen z,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629215258--19-521208.jpg")
                          .default
                      }
                      alt="10, MC Quyền Linh,sao Việt,Vbiz,showbiz Việt,Con gái MC Quyền Linh,bé lọ lem,con gái Quyền Linh,Lọ Lem con Quyền Linh,mỹ nhân gen z,"
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
