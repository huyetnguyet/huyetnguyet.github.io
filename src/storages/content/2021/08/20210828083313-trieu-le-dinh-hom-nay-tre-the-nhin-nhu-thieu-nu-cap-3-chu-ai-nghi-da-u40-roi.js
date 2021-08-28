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
"timestamp": '28/08/2021 08:33 AM',
"title": 'Triệu Lệ Dĩnh hôm nay trẻ thế, nhìn như thiếu nữ cấp 3 chứ ai nghĩ đã U40 rồi!',
"description": 'Triệu Lệ Dĩnh khiến fan mừng điên lên bởi vẻ ngoài quá mức trẻ trung, xinh xắn.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/photo-1-16296210204131936489965.jpg',
"alt": 'star style,sao mặc gì,high teen,triệu lệ dĩnh,sao Cbiz,nữ diễn viên Trung Quốc,happy camp,',
"category": 'stars',
"date": '28/08/2021',
"time": '08:33 AM',
"link": '/trieu-le-dinh-hom-nay-tre-the-nhin-nhu-thieu-nu-cap-3-chu-ai-nghi-da-u40-roi',
"zcomponent": 'page_20210828083313',
"filepath": './20210828083313-trieu-le-dinh-hom-nay-tre-the-nhin-nhu-thieu-nu-cap-3-chu-ai-nghi-da-u40-roi.js'
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
  "Triệu Lệ Dĩnh hôm nay trẻ thế, nhìn như thiếu nữ cấp 3 chứ ai nghĩ đã U40 rồi!";
const author = "HÀ TRẦN,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "28/08/2021 08:33 AM";
const description =
  "Triệu Lệ Dĩnh khiến fan mừng điên lên bởi vẻ ngoài quá mức trẻ trung, xinh xắn.";
const link =
  "trieu-le-dinh-hom-nay-tre-the-nhin-nhu-thieu-nu-cap-3-chu-ai-nghi-da-u40-roi";
const tagparam = [
  "star style",
  "sao mặc gì",
  "high teen",
  "triệu lệ dĩnh",
  "sao Cbiz",
  "nữ diễn viên Trung Quốc",
  "happy camp",
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

export default function page_20210828083313() {
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
                      <strong>Triệu Lệ Dĩnh</strong> khiến fan mừng điên lên bởi
                      vẻ ngoài quá mức trẻ trung, xinh xắn.
                    </p>
                    <p>
                      Bên cạnh gương mặt xinh xắn cùng dáng người nhỏ nhắn, yếu
                      tố khiến <strong>Triệu Lệ Dĩnh</strong> dù đã ngoài 30
                      nhưng vẫn hóa thân vào vai thiếu nữ ngon ơ chính là gu
                      thời trang nữ sinh vô cùng trẻ trung, năng động.
                    </p>
                    <p>
                      Xuất hiện khi ghi hình <strong>Happy Camp</strong>, nữ
                      diễn viên khiến dân tình ngỡ ngàng bởi vẻ ngoài quá mức
                      xuất sắc. Phong cách nữ sinh học đường được{" "}
                      <strong>Triệu Lệ Dĩnh</strong> "cân đẹp", từ makeup, làm
                      tóc cho đến trang phục.
                    </p>
                    <p>
                      Kết hợp với chân váy tennis ngang hông là áo cardigan crop
                      top trắng cài khuy cách điệu hết sức hiện đại. Để set đồ
                      đúng chất <strong>high teen</strong>,{" "}
                      <strong>Triệu Lệ Dĩnh</strong> phối cùng 1 đôi Oxford to
                      bản, đeo thêm tất trắng cao cổ, nhìn chuẩn style thiếu nữ
                      cấp 3.
                    </p>
                    <p></p>
                    <p>
                      Về khoản phụ kiện, <strong>Triệu Lệ Dĩnh</strong> cũng rất
                      tinh tế khi nhấn nhá thêm chiếc mũ beret xanh đen ton sur
                      ton với chân váy. Ở bên trong, áo sơ mi trắng được kết hợp
                      cùng cà vạt đen giúp tổng thể outfit nhìn lôi cuốn, sang
                      chảnh hẳn lên.
                    </p>
                    <p></p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/photo-1-16296210204131936489965.jpg"
                      alt="1, star style,sao mặc gì,high teen,triệu lệ dĩnh,sao Cbiz,nữ diễn viên Trung Quốc,happy camp,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/22/2401566792897928395832934321918729030496526n-16296213226271213796002.jpg"
                      alt="2, star style,sao mặc gì,high teen,triệu lệ dĩnh,sao Cbiz,nữ diễn viên Trung Quốc,happy camp,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/22/2404371595341168679193144448420290659329276n-1629621322730644008660.jpg"
                      alt="3, star style,sao mặc gì,high teen,triệu lệ dĩnh,sao Cbiz,nữ diễn viên Trung Quốc,happy camp,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/22/23429629612534946184361907523637797258813760n-16296215026741268939230.jpg"
                      alt="4, star style,sao mặc gì,high teen,triệu lệ dĩnh,sao Cbiz,nữ diễn viên Trung Quốc,happy camp,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/22/2403249703660049818212931320835913294549647n-1629621502768229377509.jpg"
                      alt="5, star style,sao mặc gì,high teen,triệu lệ dĩnh,sao Cbiz,nữ diễn viên Trung Quốc,happy camp,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/2401566792897928395832934321918729030496526n-1-1629621816410906840868.jpg"
                      alt="6, star style,sao mặc gì,high teen,triệu lệ dĩnh,sao Cbiz,nữ diễn viên Trung Quốc,happy camp,"
                      note=""
                    />

                    <p>Ảnh: Internet</p>
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
