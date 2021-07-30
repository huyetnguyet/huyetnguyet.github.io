import React from "react";
import "components/page.css";
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
"timestamp": '29/06/2021 10:02 PM',
"title": 'Bị lấy hình ảnh ra để quảng cáo thẩm mỹ, hot girl Việt gợi cảm bức xúc lên tiếng, chia sẻ chưa từng dao kéo bao giờ',
"description": 'Cô nàng hot girl tỏ ra rất bức xúc trước sự việc lần này.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629220247--17-42378.jpeg',
"alt": 'HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,LÊ PHƯƠNG ANH,',
"category": 'images',
"date": '29/06/2021',
"time": '10:02 PM',
"link": '/bi-lay-hinh-anh-ra-de-quang-cao-tham-my-hot-girl-viet-goi-cam-buc-xuc-len-tieng-chia-se-chua-tung-dao-keo-bao-gio',
"zcomponent": 'page_20210629220247',
"filepath": './20210629220247-bi-lay-hinh-anh-ra-de-quang-cao-tham-my-hot-girl-viet-goi-cam-buc-xuc-len-tieng-chia-se-chua-tung-dao-keo-bao-gio.js'
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
  "Bị lấy hình ảnh ra để quảng cáo thẩm mỹ, hot girl Việt gợi cảm bức xúc lên tiếng, chia sẻ chưa từng dao kéo bao giờ";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 10:02 PM";
const description = "Cô nàng hot girl tỏ ra rất bức xúc trước sự việc lần này.";
const link =
  "bi-lay-hinh-anh-ra-de-quang-cao-tham-my-hot-girl-viet-goi-cam-buc-xuc-len-tieng-chia-se-chua-tung-dao-keo-bao-gio";
const tagparam = ["HOT GIRL", "GÁI XINH", "CỘNG ĐỒNG MẠNG", "LÊ PHƯƠNG ANH"];
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

export default function page_20210629220247() {
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
                <div className="contentBody">
                  <p>
                    Câu chuyện các <strong>hot girl</strong> bị lợi dụng hình
                    ảnh để quảng cáo, đôi khi sai sự thật đã dần dần trở thành
                    một trong những vấn nạn quen thuộc ở thời điểm hiện tại. Và
                    mới đây, lại thêm một vụ việc tương tự nữa gây sốt{" "}
                    <strong>cộng đồng mạng</strong>. Nhân vật chính trong câu
                    chuyện lần này là <strong>Lê Phương Anh</strong>, một cô
                    nàng hot girl có lẽ cũng không còn quá xa lạ với cư dân mạng
                    Việt Nam.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629220247--10-34861.jpeg")
                        .default
                    }
                    alt="1, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,LÊ PHƯƠNG ANH,"
                    note="Lê Phương Anh - cô nàng hot girl trong câu chuyện"
                  />
                  <p>
                    Vốn dĩ, cái tên <strong>Lê Phương Anh</strong> bắt đầu được
                    nhắc tới nhiều sau khi hình ảnh cặp chị em{" "}
                    <strong>hot girl</strong> Hà Nội được lên báo Trung nhờ vào
                    nhan sắc xinh đẹp. Sở hữu số đo ba vòng 79-64-90, nàng hot
                    girl sở hữu thân hình chữ S cực kỳ nóng bỏng và hiện tại
                    đang theo đuổi sự nghiệp mẫu ảnh. Thời gian gần đây, Lê
                    Phương Anh càng được chú ý hơn nữa khi hình ảnh cổ vũ đội
                    tuyển Việt Nam của cô nàng bất ngờ trở nên viral rộng rãi
                    trên mạng xã hội. Tuy nhiên, sự nổi tiếng đôi khi cũng đi
                    kèm với những rắc rối khó lường.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629220247--11-378960.jpg")
                        .default
                    }
                    alt="2, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,LÊ PHƯƠNG ANH,"
                    note="Sở hữu nhan sắc xinh đẹp và thân hình gợi cảm"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629220247--12-991437.jpg")
                        .default
                    }
                    alt="3, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,LÊ PHƯƠNG ANH,"
                    note="Nàng hot girl đang sở hữu lượng follow lớn trên trang cá nhân"
                  />
                  <p>
                    Cụ thể, cách đây không lâu, trên trang cá nhân của mình,
                    nàng <strong>hot girl</strong> đã phải bức xúc lên tiếng về
                    việc hình ảnh của bản thân bất ngờ bị lấy ra để lợi dụng,
                    quảng cáo cho một thẩm mỹ viện và tất nhiên, những thông tin
                    đưa ra đa phần đều là sai sự thật. Theo cô nàng cho biết,
                    bản thân chưa từng sửa mũi hay đụng chạm dao kéo bao giờ
                    nhưng lại bị thẩm mỹ viện này lấy hình ảnh ra để chạy quảng
                    cáo một cách rất tùy tiện. Điều này khiến cho Phương Anh cực
                    kỳ tức giận.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629220247--13-95501.jpeg")
                        .default
                    }
                    alt="4, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,LÊ PHƯƠNG ANH,"
                    note="Hình ảnh của nàng hot girl bị lấy ra để quảng cáo tại thẩm mỹ viện một cách rất tùy tiện"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629220247--14-22970.jpeg")
                        .default
                    }
                    alt="5, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,LÊ PHƯƠNG ANH,"
                    note="Điều này khiến cho cô nàng cực kỳ bức xúc và phải lên tiếng"
                  />
                  <p>
                    Nàng <strong>hot girl</strong> bên cạnh việc khẳng định bản
                    thân chưa bao giờ đụng chạm dao kéo, thẩm mỹ cũng chia sẻ bí
                    kíp cho sự quyến rũ, gợi cảm của mình chủ yếu tới từ việc
                    dậy thì thành công cũng như chăm chỉ luyện tập, giữ vóc
                    dáng. Công việc chính là người mẫu ảnh, quảng cáo, thế nên
                    cô nàng cũng không ngại thử sức với những bộ trang phục có
                    phần gợi cảm, quyến rũ. Hiện tại, trang cá nhân của cô nàng
                    đang sở hữu hơn 300.000 follow.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629220247--15-309565.jpg")
                        .default
                    }
                    alt="6, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,LÊ PHƯƠNG ANH,"
                    note="Trên trang cá nhân, Phương Anh cũng rất chăm chỉ đăng tải những khoảnh khắc gợi cảm của bản thân"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629220247--16-961082.jpg")
                        .default
                    }
                    alt="7, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,LÊ PHƯƠNG ANH,"
                    note="Những hình ảnh xinh đẹp của cô nàng nhận được rất nhiều lời khen từ phía cộng đồng mạng"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629220247--17-42378.jpeg")
                        .default
                    }
                    alt="8, HOT GIRL,GÁI XINH,CỘNG ĐỒNG MẠNG,LÊ PHƯƠNG ANH,"
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
