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
"timestamp": '29/06/2021 09:50 PM',
"title": '"Thánh ké fame" Triệu Lộ Tư bùng nổ visual trên livestream: Biểu cảm, góc nghiêng đỉnh cao, bảo sao mọi lỗi lầm đều được tha thứ',
"description": 'Nhìn vào loạt khung hình xuất sắc của Triệu Lộ Tư, netizen xứ Trung càng phải công nhận cô nàng sở hữu nhan sắc ấn tượng.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210629215040--11-089240.gif',
"alt": 'Triệu Lộ Tư,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,',
"category": 'stars',
"date": '29/06/2021',
"time": '09:50 PM',
"link": '/thanh-ke-fame-trieu-lo-tu-bung-no-visual-tren-livestream-bieu-cam-goc-nghieng-dinh-cao-bao-sao-moi-loi-lam-deu-duoc-tha-thu',
"zcomponent": 'page_20210629215040',
"filepath": './20210629215040-thanh-ke-fame-trieu-lo-tu-bung-no-visual-tren-livestream-bieu-cam-goc-nghieng-dinh-cao-bao-sao-moi-loi-lam-deu-duoc-tha-thu.js'
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
  '"Thánh ké fame" Triệu Lộ Tư bùng nổ visual trên livestream: Biểu cảm, góc nghiêng đỉnh cao, bảo sao mọi lỗi lầm đều được tha thứ';
const author = "NHÃ AN,";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 09:50 PM";
const description =
  "Nhìn vào loạt khung hình xuất sắc của Triệu Lộ Tư, netizen xứ Trung càng phải công nhận cô nàng sở hữu nhan sắc ấn tượng.";
const link =
  "thanh-ke-fame-trieu-lo-tu-bung-no-visual-tren-livestream-bieu-cam-goc-nghieng-dinh-cao-bao-sao-moi-loi-lam-deu-duoc-tha-thu";
const tagparam = [
  "Triệu Lộ Tư",
  "sao Hoa ngữ",
  "Mỹ nhân Hoa ngữ",
  "nhan sắc mỹ nhân Hoa ngữ",
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

export default function page_20210629215040() {
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
                    Thời gian qua, <strong>Triệu Lộ Tư</strong> tiếp tục vướng
                    vào loạt thị phi mới, từ việc "hóng hớt" phốt của thiếu gia
                    Vương Tư Thông cho tới drama ấn like các bài viết chê bai,
                    hạ bệ đồng nghiệp Cúc Tịnh Y. Lùm xùm này khiến cho nữ diễn
                    viên bị gán danh xưng "Thánh ké fame", danh tiếng bị ảnh
                    hưởng không hề nhỏ.
                  </p>
                  <p>
                    Vậy nhưng, không thể phủ nhận được sức hút của cô nàng "trà
                    xanh" này trên bình diện MXH. Mới đây,{" "}
                    <strong>Triệu Lộ Tư</strong> khiến fandom "xỉu up xỉu down"
                    với màn livestream giao lưu cùng khán giả. Không cần make up
                    hay váy vóc cầu kỳ, chính nhan sắc lẫn biểu cảm của cô nàng
                    khiến dân tình phải xiêu lòng. Bảo sao Triệu Lộ Tư càng ngày
                    càng nổi tiếng, được tha thứ mọi lỗi lầm chỉ với visual
                    trong trẻo không tì vết này.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215040--10-41668.jpeg")
                        .default
                    }
                    alt="1, Triệu Lộ Tư,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,"
                    note="Triệu Lộ Tư thách thức camera livestream, sẵn sàng dí sát gương mặt vào ống kính mà vẫn xinh như công chúa"
                  />
                  <p>
                    Khoảnh khắc cô nàng nhăn mặt đáng yêu "muốn xỉu" làm các
                    fanboy xao xuyến
                  </p>
                  <p>
                    Cô nàng còn chiều lòng các fan bằng điệu nhảy siêu đáng yêu
                    và nhắng nhít
                  </p>
                  <p>
                    Trên Weibo, các fan dành nhiều lời ngợi khen cho nét đẹp
                    trong trẻo của <strong>Triệu Lộ Tư</strong>: "Tư Tư xinh quá
                    đi mất", "Nhan sắc khiến ai cũng phải ghen tị", "Nói gì thì
                    nói, Triệu Lộ Tư quá xinh", "Nữ thần không 'dao kéo' của
                    lòng tôi"...
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215040--12-890772.gif")
                        .default
                    }
                    alt="2, Triệu Lộ Tư,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215040--13-03256.jpeg")
                        .default
                    }
                    alt="3, Triệu Lộ Tư,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215040--14-87691.jpeg")
                        .default
                    }
                    alt="4, Triệu Lộ Tư,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,"
                    note="Gạt bỏ mọi scandal, Triệu Lộ Tư quả thật là 1 nhân vật rất có sức hút với truyền thông và người hâm mộ"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215040--11-089240.gif")
                        .default
                    }
                    alt="5, Triệu Lộ Tư,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210629215040--15-35021.jpeg")
                        .default
                    }
                    alt="6, Triệu Lộ Tư,sao Hoa ngữ,Mỹ nhân Hoa ngữ,nhan sắc mỹ nhân Hoa ngữ,"
                    note=""
                  />
                  <p>Nguồn: Sohu</p>
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
