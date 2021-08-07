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
"timestamp": '07/08/2021 03:44 PM',
"title": 'Ngọc Trinh đăng clip hậu trường bộ ảnh hở đến gây bão, ai dè để lộ body trơ xương khác hẳn ảnh đã chỉnh sửa',
"description": 'Thân hình của Ngọc Trinh vào khoảng đầu năm 2021 đã gây tranh cãi rất nhiều vì quá gầy.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/128764309102149734589304838208032571802860702o-1607039468229384161398-1628324409876313351228.jpeg',
"alt": 'sao Việt,showbiz Việt,nữ hoàng nội y,Ngọc Trinh,body sao,',
"category": 'stars',
"date": '07/08/2021',
"time": '03:44 PM',
"link": '/ngoc-trinh-dang-clip-hau-truong-bo-anh-ho-den-gay-bao-ai-de-de-lo-body-tro-xuong-khac-han-anh-da-chinh-sua',
"zcomponent": 'page_20210807154418',
"filepath": './20210807154418-ngoc-trinh-dang-clip-hau-truong-bo-anh-ho-den-gay-bao-ai-de-de-lo-body-tro-xuong-khac-han-anh-da-chinh-sua.js'
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
  "Ngọc Trinh đăng clip hậu trường bộ ảnh hở đến gây bão, ai dè để lộ body trơ xương khác hẳn ảnh đã chỉnh sửa";
const author = "MYA,";
const source = "Trí Thức Trẻ";
const timestamp = "07/08/2021 03:44 PM";
const description =
  "Thân hình của Ngọc Trinh vào khoảng đầu năm 2021 đã gây tranh cãi rất nhiều vì quá gầy.";
const link =
  "ngoc-trinh-dang-clip-hau-truong-bo-anh-ho-den-gay-bao-ai-de-de-lo-body-tro-xuong-khac-han-anh-da-chinh-sua";
const tagparam = [
  "sao Việt",
  "showbiz Việt",
  "nữ hoàng nội y",
  "Ngọc Trinh",
  "body sao",
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

export default function page_20210807154418() {
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
                      Thân hình của <strong>Ngọc Trinh</strong> vào khoảng đầu
                      năm 2021 đã gây tranh cãi rất nhiều vì quá gầy.
                    </p>
                    <p>
                      <strong>Ngọc Trinh</strong> vốn nổi tiếng là mỹ nhân gợi
                      cảm nhất nhì Vbiz. Không chỉ sở hữu số đo ba vòng đạt
                      chuẩn, cô còn rất chăm khoe hình thể qua những bộ ảnh
                      nude, bikini, nội y... Sáng cuối tuần 7/8, Ngọc Trinh còn
                      tự tin đăng tải clip ghi lại hậu trường một buổi chụp ảnh
                      nóng bỏng một thời làm cư dân mạng dậy sóng. Thế nhưng,
                      trong một vài khoảnh khắc, netizen phát hiện ra thân hình
                      của "<strong>nữ hoàng nội y</strong>" có phần khác biệt so
                      với ảnh đã được chỉnh sửa kỹ càng. Theo đó, khi thiếu vắng
                      đi phần mềm chỉnh ảnh, Ngọc Trinh để lộ cơ thể gầy đến trơ
                      xương ngực, tay chân khẳng khiu.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/base64-16283240826541059834968.png"
                      alt="1, sao Việt,showbiz Việt,nữ hoàng nội y,Ngọc Trinh,body sao,"
                      note="Từng có một khoảng thời gian, Ngọc Trinh liên tục gây sốc vì thân hình gầy gò của mình"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/127956071102149734582504667635113874705043327o-1607039468171102123511-16283240601101852845637.jpeg"
                      alt="2, sao Việt,showbiz Việt,nữ hoàng nội y,Ngọc Trinh,body sao,"
                      note="Trong thời gian nghỉ dịch ở nhà, Ngọc Trinh đã tăng cân và lấy lại body đầy đặn"
                    />
                    <p>
                      Bên cạnh những bình luận soi khuyết điểm của cô nàng, cũng
                      có nhiều ý kiến bênh vực và cho rằng rất có thể do góc
                      chụp nên <strong>Ngọc Trinh</strong> mới lộ hình thể ốm
                      như vậy. Được biết, đây là clip được quay vào khoảng đầu
                      năm 2021. Bây giờ cô nàng trông đầy đặn và tràn đầy sức
                      sống hơn nhờ có thời gian nghỉ ngơi và ăn uống điều độ nên
                      người hâm mộ cũng không cần lo lắng quá nhiều.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/128764309102149734589304838208032571802860702o-1607039468229384161398-1628324409876313351228.jpeg"
                      alt="3, sao Việt,showbiz Việt,nữ hoàng nội y,Ngọc Trinh,body sao,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/5c25842a-1144-4e9d-9aa9-4fc85158785f-16283244099331680930839.jpeg"
                      alt="4, sao Việt,showbiz Việt,nữ hoàng nội y,Ngọc Trinh,body sao,"
                      note=""
                    />

                    <p>
                      <strong>Ngọc Trinh</strong> tung clip hậu trường buổi chụp
                      hình nhưng để lộ thân hình gầy trơ xương, khác xa ảnh đã
                      chỉnh (Nguồn: Instagram nhân vật)
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/ngoc-trinh3-1618-1628324183970653000555.jpeg"
                      alt="5, sao Việt,showbiz Việt,nữ hoàng nội y,Ngọc Trinh,body sao,"
                      note=""
                    />
                    <p>
                      So với ảnh được chỉnh sửa kỹ càng,{" "}
                      <strong>Ngọc Trinh</strong> trong clip hậu trường trông
                      kém đầy đặn hơn hẳn
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/ngoc-trinh1-1618-16283241840111610629695.jpeg"
                      alt="6, sao Việt,showbiz Việt,nữ hoàng nội y,Ngọc Trinh,body sao,"
                      note=""
                    />
                    <p>Bộ ảnh gây bão một thời của Ngọc Trinh</p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-16283242279791362137323.png"
                      alt="7, sao Việt,showbiz Việt,nữ hoàng nội y,Ngọc Trinh,body sao,"
                      note=""
                    />
                    <p>Ảnh: Instagram nhân vật</p>
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
