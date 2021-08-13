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
"timestamp": '09/08/2021 10:54 AM',
"title": 'Hoá ra con hàu được người ta nuôi như thế này, "đột nhập" vào làng bè ở Vũng Tàu mới được mở mang tầm mắt',
"description": 'Ăn đó giờ nhưng chắc nhiều người chưa biết hàu được nuôi như thế nào.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/anh-chup-man-hinh-2021-08-09-luc-190442-1628510926073641453141.png',
"alt": 'dinh dưỡng cao,Cư dân mạng,Động vật thân mềm,hàu,con hàu,nuôi hàu,cách nuôi hàu,đánh bắt hàu,phương pháp nuôi hàu,',
"category": 'news',
"date": '09/08/2021',
"time": '10:54 AM',
"link": '/hoa-ra-con-hau-duoc-nguoi-ta-nuoi-nhu-the-nay-dot-nhap-vao-lang-be-o-vung-tau-moi-duoc-mo-mang-tam-mat',
"zcomponent": 'page_20210809105435',
"filepath": './20210809105435-hoa-ra-con-hau-duoc-nguoi-ta-nuoi-nhu-the-nay-dot-nhap-vao-lang-be-o-vung-tau-moi-duoc-mo-mang-tam-mat.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  'Hoá ra con hàu được người ta nuôi như thế này, "đột nhập" vào làng bè ở Vũng Tàu mới được mở mang tầm mắt';
const author = "MH,";
const source = "Trí Thức Trẻ";
const timestamp = "09/08/2021 10:54 AM";
const description =
  "Ăn đó giờ nhưng chắc nhiều người chưa biết hàu được nuôi như thế nào.";
const link =
  "hoa-ra-con-hau-duoc-nguoi-ta-nuoi-nhu-the-nay-dot-nhap-vao-lang-be-o-vung-tau-moi-duoc-mo-mang-tam-mat";
const tagparam = [
  "dinh dưỡng cao",
  "Cư dân mạng",
  "Động vật thân mềm",
  "hàu",
  "con hàu",
  "nuôi hàu",
  "cách nuôi hàu",
  "đánh bắt hàu",
  "phương pháp nuôi hàu",
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

export default function page_20210809105435() {
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
                      <strong>Hàu</strong> là loài động vật rất được ưa chuộng
                      trong họ hàng các loại hải sản vì chứa hàm lượng{" "}
                      <strong>dinh dưỡng cao</strong>, đặc biệt là chất kẽm. Nó
                      thường được chế biến thành nhiều món ngon như cháo hàu,
                      hàu nướng mỡ hành, nướng phô mai… Dù ăn nhiều như vậy
                      nhưng chưa chắc bạn biết chúng được nuôi trồng như thế
                      nào.
                    </p>
                    <p>
                      Mới đây, nhờ một đoạn clip được chàng trai chia sẻ trên
                      TikTok mà dân tình mới biết người ta nuôi{" "}
                      <strong>hàu</strong> bằng cách nào. Được biết, video được
                      quay tại một làng bè ở Long Sơn, Vũng Tàu.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/anh-chup-man-hinh-2021-08-09-luc-190406-16285109257591928200047.png"
                      alt="1, dinh dưỡng cao,Cư dân mạng,Động vật thân mềm,hàu,con hàu,nuôi hàu,cách nuôi hàu,đánh bắt hàu,phương pháp nuôi hàu,"
                      note="Giờ mới biết người ta nuôi hàu như thế nào (Nguồn: @tai.cui)"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/anh-chup-man-hinh-2021-08-09-luc-190442-1628510926073641453141.png"
                      alt="3, dinh dưỡng cao,Cư dân mạng,Động vật thân mềm,hàu,con hàu,nuôi hàu,cách nuôi hàu,đánh bắt hàu,phương pháp nuôi hàu,"
                      note=""
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/9/chrome-capture-16285109269671105820358.gif"
                      alt="12, dinh dưỡng cao,Cư dân mạng,Động vật thân mềm,hàu,con hàu,nuôi hàu,cách nuôi hàu,đánh bắt hàu,phương pháp nuôi hàu,"
                      note=""
                    />

                    <p>
                      Trong clip, có thể thấy cảnh những con{" "}
                      <strong>hàu</strong> treo mình trên một chiếc giàn, bám
                      vào một vật trông như mảnh đá hay xi măng. Người đàn ông
                      đứng phía trên liên tục tưới nước để "tắm mát" cho những{" "}
                      <strong>con hàu</strong>.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/anh-chup-man-hinh-2021-08-09-luc-190450-16285109261152083094847.png"
                      alt="4, dinh dưỡng cao,Cư dân mạng,Động vật thân mềm,hàu,con hàu,nuôi hàu,cách nuôi hàu,đánh bắt hàu,phương pháp nuôi hàu,"
                      note=""
                    />
                    <p>
                      Cách nuôi <strong>hàu</strong> tại một làng bè ở Long Sơn,
                      Vũng Tàu{" "}
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/hausuasong-16285109274941042670242.jpeg"
                      alt="5, dinh dưỡng cao,Cư dân mạng,Động vật thân mềm,hàu,con hàu,nuôi hàu,cách nuôi hàu,đánh bắt hàu,phương pháp nuôi hàu,"
                      note=""
                    />
                    <p>
                      Chứng kiến cảnh này, <strong>cư dân mạng</strong> không
                      giấu nổi sự thích thú:
                    </p>
                    <p>
                      - "Ăn hoài nhưng giờ mới biết nó được nuôi như thế nào!"
                    </p>
                    <p>- "Ở chỗ mình bán 20k/con, cắn răng lắm mới dám ăn!"</p>
                    <p>
                      - "Ủa mình tưởng con này phải đi săn bắt khó khăn lắm
                      chứ?"
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      - "Có ai như mình không, chẳng bao giờ ăn được con này dù
                      người khác rất ghiền…"
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/photo1603936306263-1603936306484181116053-1628510928384411896582.jpeg"
                      alt="6, dinh dưỡng cao,Cư dân mạng,Động vật thân mềm,hàu,con hàu,nuôi hàu,cách nuôi hàu,đánh bắt hàu,phương pháp nuôi hàu,"
                      note=""
                    />
                    <p>
                      <strong>Hàu</strong> có lớp vỏ rất cứng và sắc nhọn nên
                      muốn tách chúng ra khỏi vật thể, người ta phải dùng đến
                      dao và găng tay dày
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/hau-phap-1-16285109275081779354341.jpeg"
                      alt="7, dinh dưỡng cao,Cư dân mạng,Động vật thân mềm,hàu,con hàu,nuôi hàu,cách nuôi hàu,đánh bắt hàu,phương pháp nuôi hàu,"
                      note=""
                    />
                    <p>
                      Được biết, <strong>hàu</strong> cũng thuộc nhóm{" "}
                      <strong>động vật thân mềm</strong> hai mảnh vỏ trong họ
                      hàng nghêu, sò, ốc, hến. Chúng sinh sống chủ yếu ở các
                      ghềnh đá ven bờ biển hay các cửa sông, sống bám vào những
                      tảng đá hoặc vật thể cứng… Thông thường, chúng bám rất
                      chặt và vỏ thì sắc nhọn nên muốn đánh bắt, người ta phải
                      trang bị rất nhiều dụng cụ bảo hộ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/maxresdefault-1628510927762370850875.jpeg"
                      alt="8, dinh dưỡng cao,Cư dân mạng,Động vật thân mềm,hàu,con hàu,nuôi hàu,cách nuôi hàu,đánh bắt hàu,phương pháp nuôi hàu,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/9/1437557042-hau-16285109253732145240630.jpeg"
                      alt="9, dinh dưỡng cao,Cư dân mạng,Động vật thân mềm,hàu,con hàu,nuôi hàu,cách nuôi hàu,đánh bắt hàu,phương pháp nuôi hàu,"
                      note=""
                    />

                    <p>
                      Thay vì đánh bắt tự nhiên vất vả, ở Việt Nam còn có nhiều
                      phương pháp nuôi <strong>hàu</strong> phổ biến khác để
                      cung cấp sản lượng lớn. Nếu trước đây, người ta chủ yếu sử
                      dụng phương pháp nuôi đá, cọc tre, ngói mái là chính thì
                      ngày nay, phương pháp nuôi đã được cải tiến. Từ công nghệ
                      nuôi bãi, giờ hàu còn được nuôi trên các giàn treo, nuôi
                      bè, nuôi bằng đá hoặc cọc xi măng, nuôi trong lốp cao su…
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/9/anh-chup-man-hinh-2021-08-09-luc-190421-1628510925801356522288.png"
                      alt="2, dinh dưỡng cao,Cư dân mạng,Động vật thân mềm,hàu,con hàu,nuôi hàu,cách nuôi hàu,đánh bắt hàu,phương pháp nuôi hàu,"
                      note="Có rất nhiều phương pháp nuôi hàu khác nhau"
                    />
                    <p>Nguồn: Tổng hợp</p>
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
