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
"timestamp": '29/06/2021 09:43 PM',
"title": 'Ngày nắng ngắm gái xinh trong The Vagrant như thể muốn x2 combo nóng',
"description": 'Cô nàng Valerie trong The Vagrant nóng bỏng quá đi mất.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629214345--10-554329.jpg',
"alt": 'NGÀY NẮNG,GÁI XINH,VALERIE,THE VAGRANT,COSPLAY,COSER,',
"category": 'images',
"date": '29/06/2021',
"time": '09:43 PM',
"link": '/ngay-nang-ngam-gai-xinh-trong-the-vagrant-nhu-the-muon-x2-combo-nong',
"zcomponent": 'page_20210629214345',
"filepath": './20210629214345-ngay-nang-ngam-gai-xinh-trong-the-vagrant-nhu-the-muon-x2-combo-nong.js'
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
  "Ngày nắng ngắm gái xinh trong The Vagrant như thể muốn x2 combo nóng";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 09:43 PM";
const description = "Cô nàng Valerie trong The Vagrant nóng bỏng quá đi mất.";
const link =
  "ngay-nang-ngam-gai-xinh-trong-the-vagrant-nhu-the-muon-x2-combo-nong";
const tagparam = [
  "NGÀY NẮNG",
  "GÁI XINH",
  "VALERIE",
  "THE VAGRANT",
  "COSPLAY",
  "COSER",
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

export default function page_20210629214345() {
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
                      Game <strong>The Vagrant</strong> là sự pha trộn tinh tế
                      giữa game nhập vai với phiêu lưu hành động. Bạn sẽ bước
                      vào hành trình chinh phục thế giới thần tiên Mythrilia
                      được vẽ bằng tay cực kỳ chi tiết, khám phá sự thật về dòng
                      máu của mình và những bí ẩn động trời khác.
                    </p>
                    <p>
                      Năm 2017, <strong>The Vagrant</strong> chính thức ra mắt
                      trên hệ thống Early Access của Steam để thu hút sự chú ý
                      của cộng đồng, gây dựng số tiền cần thiết và thu thập ý
                      kiến nhằm củng cố sản phẩm. Và giờ đây, tuy những gì hiện
                      hữu trong The Vagrant lúc này có khác rất nhiều so với dự
                      định từ thuở đầu Kickstarter, nhưng ít ra, một quyết định
                      tưởng chừng táo bạo, bồng bột năm nào, cuối cùng đã tạo
                      nên một tựa game hoàn chỉnh.
                    </p>
                    <p>
                      Một điểm hay ho ở đây là <strong>The Vagrant</strong> được
                      phát triển bởi SakuraGame – Studio vốn nổi danh với những
                      tựa game 18+ được rất nhiều game thủ yêu thích như: Mirror
                      hay Dragon Knight. Do đó không lạ khi The Vagrant đã tạo
                      được sự chú ý ngay từ đầu bởi phong cách tạo hình ấn tượng
                      của mình, với nhân vật chính là một nữ anh hùng cực kỳ
                      nóng bỏng gợi cảm, đi cùng dàn NPC toàn những em gái ngực
                      bự kinh hoàng.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Đặc biệt, không chỉ nữ chính Vivian được nhiều{" "}
                      <strong>coser</strong> lựa chọn <strong>cosplay</strong>,
                      mà ngay cả dàn mỹ nữ phụ trong game cũng được tái hiện đầy
                      nóng bỏng ở đời thực. Đã nói là phải chứng minh, mời các
                      bạn ngắm ngay loạt ảnh cosplay siêu gợi cảm của nàng coser
                      Hoshilily khi hóa thân thành nhân vật{" "}
                      <strong>Valerie</strong> trong{" "}
                      <strong>The Vagrant</strong> nhé!
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214345--10-554329.jpg")
                          .default
                      }
                      alt="1, NGÀY NẮNG,GÁI XINH,VALERIE,THE VAGRANT,COSPLAY,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214345--11-981883.jpg")
                          .default
                      }
                      alt="2, NGÀY NẮNG,GÁI XINH,VALERIE,THE VAGRANT,COSPLAY,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214345--12-347207.jpg")
                          .default
                      }
                      alt="3, NGÀY NẮNG,GÁI XINH,VALERIE,THE VAGRANT,COSPLAY,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214345--13-527453.jpg")
                          .default
                      }
                      alt="4, NGÀY NẮNG,GÁI XINH,VALERIE,THE VAGRANT,COSPLAY,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214345--14-334310.jpg")
                          .default
                      }
                      alt="5, NGÀY NẮNG,GÁI XINH,VALERIE,THE VAGRANT,COSPLAY,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214345--15-148426.jpg")
                          .default
                      }
                      alt="6, NGÀY NẮNG,GÁI XINH,VALERIE,THE VAGRANT,COSPLAY,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214345--16-267445.jpg")
                          .default
                      }
                      alt="7, NGÀY NẮNG,GÁI XINH,VALERIE,THE VAGRANT,COSPLAY,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214345--17-224844.jpg")
                          .default
                      }
                      alt="8, NGÀY NẮNG,GÁI XINH,VALERIE,THE VAGRANT,COSPLAY,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214345--18-918022.jpg")
                          .default
                      }
                      alt="9, NGÀY NẮNG,GÁI XINH,VALERIE,THE VAGRANT,COSPLAY,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214345--19-419323.jpg")
                          .default
                      }
                      alt="10, NGÀY NẮNG,GÁI XINH,VALERIE,THE VAGRANT,COSPLAY,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214345--20-048659.jpg")
                          .default
                      }
                      alt="11, NGÀY NẮNG,GÁI XINH,VALERIE,THE VAGRANT,COSPLAY,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214345--21-897539.jpg")
                          .default
                      }
                      alt="12, NGÀY NẮNG,GÁI XINH,VALERIE,THE VAGRANT,COSPLAY,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214345--22-998988.jpg")
                          .default
                      }
                      alt="13, NGÀY NẮNG,GÁI XINH,VALERIE,THE VAGRANT,COSPLAY,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214345--23-795079.jpg")
                          .default
                      }
                      alt="14, NGÀY NẮNG,GÁI XINH,VALERIE,THE VAGRANT,COSPLAY,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214345--24-244317.jpg")
                          .default
                      }
                      alt="15, NGÀY NẮNG,GÁI XINH,VALERIE,THE VAGRANT,COSPLAY,COSER,"
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210629214345--25-522921.jpg")
                          .default
                      }
                      alt="16, NGÀY NẮNG,GÁI XINH,VALERIE,THE VAGRANT,COSPLAY,COSER,"
                      note=""
                    />
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
