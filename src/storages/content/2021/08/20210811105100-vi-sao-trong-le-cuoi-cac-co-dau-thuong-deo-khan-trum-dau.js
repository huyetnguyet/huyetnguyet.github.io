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
"timestamp": '11/08/2021 10:51 AM',
"title": 'Vì sao trong lễ cưới, các cô dâu thường đeo khăn trùm đầu?',
"description": 'Hơn cả một món phụ kiện, chiếc khăn trùm đầu của cô dâu còn có ý nghĩa vô cùng lớn lao.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/elora1-16285882056331409566607.jpg',
"alt": 'khăn trùm đầu,lễ cưới,ý nghĩa,cô dâu,phụ kiện,',
"category": 'life',
"date": '11/08/2021',
"time": '10:51 AM',
"link": '/vi-sao-trong-le-cuoi-cac-co-dau-thuong-deo-khan-trum-dau',
"zcomponent": 'page_20210811105100',
"filepath": './20210811105100-vi-sao-trong-le-cuoi-cac-co-dau-thuong-deo-khan-trum-dau.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title = "Vì sao trong lễ cưới, các cô dâu thường đeo khăn trùm đầu?";
const author = "HÀ TRẦN,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "11/08/2021 10:51 AM";
const description =
  "Hơn cả một món phụ kiện, chiếc khăn trùm đầu của cô dâu còn có ý nghĩa vô cùng lớn lao.";
const link = "vi-sao-trong-le-cuoi-cac-co-dau-thuong-deo-khan-trum-dau";
const tagparam = ["khăn trùm đầu", "lễ cưới", "ý nghĩa", "cô dâu", "phụ kiện"];
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

export default function page_20210811105100() {
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
                      Bên cạnh váy cưới, có 1 <strong>phụ kiện</strong> quan
                      trọng không kém, luôn song hành cùng{" "}
                      <strong>cô dâu</strong> trên lễ đường, chính là{" "}
                      <strong>khăn trùm đầu</strong>. Ở mỗi nền văn hóa, khăn
                      trùm đầu lại có một phiên bản khác nhau. Ví dụ như ở Trung
                      Quốc, Ấn Độ khăn trùm đầu thường có màu đỏ nhưng ở phương
                      Tây, khăn trùm đầu sẽ làm từ vải voan, xuyên thấu. Vậy,
                      khăn trùm đầu có <strong>ý nghĩa</strong> gì mà nó lại
                      quan trọng với cô dâu đến thế?
                    </p>
                    <h5>Xua đuổi tà ma</h5>
                    <p>
                      <strong>Khăn trùm đầu</strong> có rất nhiều{" "}
                      <strong>ý nghĩa</strong> nhưng nguyên thủy, căn bản nhất
                      chính là để xua đuổi tà ma. Theo quan niệm của người xưa,{" "}
                      <strong>cô dâu</strong> cần phải được bảo vệ bằng 1 chiếc
                      khăn trùm đầu trong ngày đại hỉ, nhằm tránh những những tà
                      niệm, điều không may còn tồn dư xung quanh. Cô dâu khi che
                      kín mặt bằng bằng 1 chiếc khăn tượng trưng cho việc đang
                      được nâng niu, bảo vệ, che chở. Điều này càng tăng thêm ý
                      nghĩa của ngày trọng đại nhất cuộc đời.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/elora1-16285882056331409566607.jpg"
                      alt="1, khăn trùm đầu,lễ cưới,ý nghĩa,cô dâu,phụ kiện,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/velo-da-sposa-storia-moda-kate-middleton-1628588309337533880146.jpg"
                      alt="2, khăn trùm đầu,lễ cưới,ý nghĩa,cô dâu,phụ kiện,"
                      note=""
                    />
                    <h5>Nhắc nhở chú rể không yêu vì nhan sắc</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/o1cn012wxidz2jg2lv4edbf1077769393-1628588010650283650703.gif"
                      alt="3, khăn trùm đầu,lễ cưới,ý nghĩa,cô dâu,phụ kiện,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/1420517931-b9-1230-16285880107391602672532.jpg"
                      alt="4, khăn trùm đầu,lễ cưới,ý nghĩa,cô dâu,phụ kiện,"
                      note=""
                    />

                    <p>
                      Thời xưa, <strong>cô dâu</strong> - chú rể đa phần đều
                      không biết mặt nhau cho đến khi <strong>lễ cưới</strong>{" "}
                      hoàn thành. Chiếc <strong>khăn trùm đầu</strong> che đi
                      khuôn mặt của cô dâu như 1 hình thức nhắc nhở chú rể rằng
                      không nên yêu người phụ nữ của mình chỉ vì vẻ đẹp bên
                      ngoài. Người đàn ông đừng chỉ coi trọng nhan sắc mà hãy
                      yêu thương người vợ của mình bằng cả tấm lòng chân thật.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Giảm bớt sự chú ý</h5>
                    <p>
                      Bên cạnh những <strong>ý nghĩa</strong> trên,{" "}
                      <strong>khăn trùm đầu</strong> còn giúp{" "}
                      <strong>cô dâu</strong> tránh đi ánh nhìn xung quanh. Vào
                      ngày cưới, cô dâu là người lộng lẫy, xinh đẹp nhất. Bởi
                      vậy, cô muốn người chồng của mình là người đầu tiên được
                      thấy vẻ đẹp ấy sau khi cô vén khăn lên.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/soft-drop-wedding-veil-single-layer-tulle7721024x1024-1628588410910689516649.jpg"
                      alt="5, khăn trùm đầu,lễ cưới,ý nghĩa,cô dâu,phụ kiện,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/10/ilfullxfull1145851308orwn07e531ea-f256-4996-b896-d5eca7b8b4692048x-16285884109962119210469.jpg"
                      alt="6, khăn trùm đầu,lễ cưới,ý nghĩa,cô dâu,phụ kiện,"
                      note=""
                    />

                    <p>Nguồn: Brides</p>
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
