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
"timestamp": '16/06/2021 11:33 AM',
"title": 'Lộ danh tính nàng hot girl gợi cảm đăng ảnh cổ vũ tuyển Việt Nam gây bão mạng, hóa ra là gương mặt quen thuộc',
"description": 'Cô nàng hot girl đang gây bão mạng hóa ra là một cái tên cũng đã không còn xa lạ với chúng ta.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210616113329--13-06039.jpeg',
"alt": 'Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, ',
"category": 'images',
"date": '16/06/2021',
"time": '11:33 AM',
"link": '/lo-danh-tinh-nang-hot-girl-goi-cam-dang-anh-co-vu-tuyen-viet-nam-gay-bao-mang-hoa-ra-la-guong-mat-quen-thuoc',
"zcomponent": 'page_20210616113329',
"filepath": './20210616113329-lo-danh-tinh-nang-hot-girl-goi-cam-dang-anh-co-vu-tuyen-viet-nam-gay-bao-mang-hoa-ra-la-guong-mat-quen-thuoc.js'
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
  "Lộ danh tính nàng hot girl gợi cảm đăng ảnh cổ vũ tuyển Việt Nam gây bão mạng, hóa ra là gương mặt quen thuộc";
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "16/06/2021 11:33 AM";
const description =
  "Cô nàng hot girl đang gây bão mạng hóa ra là một cái tên cũng đã không còn xa lạ với chúng ta.";
const link =
  "lo-danh-tinh-nang-hot-girl-goi-cam-dang-anh-co-vu-tuyen-viet-nam-gay-bao-mang-hoa-ra-la-guong-mat-quen-thuoc";
const tagparam = ["gai-xinh", "hot-girl", "cong-dong-mang", "le-phuong-anh"];
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

export default function page_20210616113329() {
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
              >
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
                      Trong thời đại mà mạng xã hội cũng như Internet đang phổ
                      cập và phát triển với một tốc độ chóng mặt như hiện nay,
                      câu chuyện về các cô nàng <strong>hot girl</strong> xinh
                      đẹp xuất hiện đã dần trở thành một điều gì đó khá quen
                      thuộc đối với cộng đồng mạng. Và mới đây thôi, chỉ với một
                      bức ảnh cổ động tuyển Việt Nam một cách rất đơn giản, thế
                      nhưng cô nàng hot girl này lại nhanh chóng trở thành tâm
                      điểm của mọi sự chú ý, đồng thời tạo ra một cơn sốt không
                      hề nhỏ trên mạng xã hội.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--10-733809.jpg")
                          .default
                      }
                      alt="1Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note="Hình ảnh đang gây bão mạng trong suốt thời gian gần đây"
                    />
                    <p>
                      Chỉ sau ít phút đăng tải, hình ảnh đơn giản này bỗng chốc
                      nhận được cơn bão like share một cách chóng mặt. Thậm chí,
                      không ít người còn rất năng nổ trong việc tìm ra info của
                      cô gái xinh đẹp, trắng trẻo trong khung hình. Tất nhiên,
                      cũng không mất quá nhiều thời gian để danh tính của cô
                      nàng được tìm ra. Tưởng ai xa lạ, hóa ra đó chính là Lê
                      Phương Anh, một <strong>hot girl</strong> sinh năm 1997
                      tại Hà Nội. Sở dĩ nói không xa lạ bởi vì mức độ nổi tiếng
                      của nàng hot girl cũng không phải dạng vừa với gần 300.000
                      lượt theo dõi trên Facebook cá nhân trong khi con số tương
                      tự trên Instagram thậm chí còn tiệm cận con số 300.000.
                    </p>
                    <p>
                      Lê Phương Anh cũng đã từng gây bão cộng đồng mạng với bộ
                      ảnh cực kỳ xinh đẹp của mình
                    </p>
                    <p>
                      Sở hữu nhan sắc cực kỳ đáng yêu, mật ngọt nhưng lại cũng
                      không kém phần gợi cảm với số đo ba vòng 79-65-89 cân đối
                      và hoàn hảo, Phương Anh thậm chí còn được ví như "thần
                      tiên tỷ tỷ". Và dành cho những ai chưa biết thì cô nàng
                      từng xuất hiện trên báo nước ngoài và cũng được ca ngợi
                      nhờ nhan sắc cực kỳ ấn tượng của mình cùng với em gái. Bản
                      thân nàng <strong>hot girl</strong> cũng từng chia sẻ rằng
                      đó chỉ là những con số, cũng như việc nổi tiếng vì sự xinh
                      đẹp, gợi cảm cũng mang lại vô số phiền toái khác, nhưng
                      Phương Anh tự coi đó là những thử thách cần phải vượt qua
                      mà thôi.
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--11-685371.jpg")
                          .default
                      }
                      alt="2Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note="Cặp chi em Phương Anh (phải), Phương Uyên từng được báo nước ngoài ca ngợi vì vẻ đẹp của mình"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--12-019184.jpg")
                          .default
                      }
                      alt="3Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note="Nhan sắc cực kỳ ngọt ngào nhưng không kém phần gợi cảm của Phương Anh"
                    />
                    <p>
                      Không ngại khoe vóc dáng với những bộ trang phục gợi cảm
                    </p>
                    <p>
                      Hiện tại, cô nàng đang theo đuổi sự nghiệp người mẫu ảnh
                      và mọi thứ tới khá tình cờ khi chỉ với việc đăng ảnh lên
                      trang cá nhân như bao cô gái bình thường khác, Lê Phương
                      Anh bất ngờ nhận được vô số lời đề nghị chụp quảng cáo.
                      Hiện tại, cô nàng vẫn đang trung thành với phong cách gợi
                      cảm trong các bộ ảnh của mình.
                    </p>
                    <p>
                      Một số hình ảnh đời thường của cô nàng{" "}
                      <strong>hot girl</strong> xinh đẹp
                    </p>
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--13-06039.jpeg")
                          .default
                      }
                      alt="4Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--14-55590.jpeg")
                          .default
                      }
                      alt="5Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--15-54414.jpeg")
                          .default
                      }
                      alt="6Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--16-29050.jpeg")
                          .default
                      }
                      alt="7Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--17-61333.jpeg")
                          .default
                      }
                      alt="8Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--18-745398.png")
                          .default
                      }
                      alt="9Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--19-312368.png")
                          .default
                      }
                      alt="10Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--20-523499.png")
                          .default
                      }
                      alt="11Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--21-431969.png")
                          .default
                      }
                      alt="12Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--22-127056.png")
                          .default
                      }
                      alt="13Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--23-056959.jpg")
                          .default
                      }
                      alt="14Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--24-517133.jpg")
                          .default
                      }
                      alt="15Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--25-737015.jpg")
                          .default
                      }
                      alt="16Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--26-170431.jpg")
                          .default
                      }
                      alt="17Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--27-414319.png")
                          .default
                      }
                      alt="18Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
                      note=""
                    />
                    <ContentImage
                      src={
                        require("storages/images/content/2021/20210616113329--28-241524.png")
                          .default
                      }
                      alt="19Gai Xinh, Hot Girl, Cong Dong Mang, Le Phuong Anh, "
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
