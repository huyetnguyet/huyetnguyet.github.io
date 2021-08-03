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
"timestamp": '29/07/2021 04:16 PM',
"title": 'Tại sao bánh quy thường có viền răng cưa? Chính nhà sản xuất lên tiếng giải đáp bí ẩn bao năm mà chưa ai nghĩ ra nổi',
"description": 'Viền răng cưa ở những chiếc bánh quy không phải để cho đẹp mà đáp án thực sự khiến hầu hết mọi người, nhất là hội mê bánh quy nghe xong đều sững sờ.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/8/newfile-8-16257365816362135614612.jpg',
"alt": 'bánh quy,giải đáp thắc mắc,bánh quy Ritz,',
"category": 'news',
"date": '29/07/2021',
"time": '04:16 PM',
"link": '/tai-sao-banh-quy-thuong-co-vien-rang-cua-chinh-nha-san-xuat-len-tieng-giai-dap-bi-an-bao-nam-khien-dan-mang-soc-vi-chua-ai-nghi-ra-noi',
"zcomponent": 'page_20210729161613',
"filepath": './20210729161613-tai-sao-banh-quy-thuong-co-vien-rang-cua-chinh-nha-san-xuat-len-tieng-giai-dap-bi-an-bao-nam-khien-dan-mang-soc-vi-chua-ai-nghi-ra-noi.js'
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
  "Tại sao bánh quy thường có viền răng cưa? Chính nhà sản xuất lên tiếng giải đáp bí ẩn bao năm mà chưa ai nghĩ ra nổi";
const author = "CHI CHI,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "29/07/2021 04:16 PM";
const description =
  "Viền răng cưa ở những chiếc bánh quy không phải để cho đẹp mà đáp án thực sự khiến hầu hết mọi người, nhất là hội mê bánh quy nghe xong đều sững sờ.";
const link =
  "tai-sao-banh-quy-thuong-co-vien-rang-cua-chinh-nha-san-xuat-len-tieng-giai-dap-bi-an-bao-nam-khien-dan-mang-soc-vi-chua-ai-nghi-ra-noi";
const tagparam = ["bánh quy", "giải đáp thắc mắc", "bánh quy Ritz"];
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

export default function page_20210729161613() {
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
                      <strong>Bánh quy</strong> là món bánh có thể ở bất kỳ hình
                      dạng nào. Nhưng chúng ta sẽ thường xuyên nhìn thấy những
                      loại bánh quy có viền răng cưa xung quanh. Lâu nay, đa
                      phần mọi người sẽ đơn giản cho rằng đây chỉ là thiết kế
                      cho đẹp, giúp miếng bánh trông bớt đơn điệu từ nhà sản
                      xuất. Hoặc cũng có "thuyết âm mưu" đưa ra suy đoán làm
                      bánh uốn lượn răng cưa ngoài viền thay vì tròn hay vuông
                      hoàn toàn sẽ phần nào giúp nhà sản xuất bánh quy "ăn gian"
                      được nguyên liệu.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/8/l-intro-1607192801-16257363617461793505190.jpg"
                      alt="1, bánh quy,giải đáp thắc mắc,bánh quy Ritz,"
                      note="Bánh quy thường có viền răng cưa, nhưng ít ai thắc mắc vì sao (Ảnh minh họa)"
                    />
                    <p>
                      Mới đây, trên trang TikTok chính thức của thương hiệu{" "}
                      <strong>bánh quy</strong> nổi tiếng toàn cầu Ritz - nhà
                      sản xuất bánh quy có viền răng cưa quen thuộc suốt hàng
                      chục năm qua đã đăng tải một video khiến dân mạng vô cùng
                      bất ngờ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/8/origin-1625736108920577896359.jpg"
                      alt="2, bánh quy,giải đáp thắc mắc,bánh quy Ritz,"
                      note="Bánh quy Ritz từ hàng chục năm qua đều có viền răng cưa như thế này, và nó không phải là ngẫu nhiên cho đẹp"
                    />
                    <p>
                      Trong clip, hãng đã giải thích "bí ẩn" về thiết kế răng
                      cưa này của mình: Đó là để người ăn dễ dàng cắt phô mai -
                      món ăn kèm chuẩn chỉnh khi thưởng thức{" "}
                      <strong>bánh quy</strong> Ritz. Đây cũng chính là mục đích
                      thiết kế viền lượn sóng của bánh quy từ xưa. Lâu dần, ngay
                      cả với những loại bánh ngọt không ăn kèm phomai, mọi người
                      cũng làm viền răng cưa như một thói quen
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/8/newfile-8-16257365816362135614612.jpg"
                      alt="3, bánh quy,giải đáp thắc mắc,bánh quy Ritz,"
                      note="Đây chính là mục đích của viền răng cưa bánh quy: giúp cắt phô mai cho dễ"
                    />
                    <p>
                      Với lời giải đáp hàng chục năm mới bật mí này, cư dân mạng
                      tất nhiên đều ngỡ ngàng vì nhìn chung hiếm ai từng nghĩ
                      mục đích của nó lại là như vậy. Nhiều người còn quyết định
                      không chịu tin tưởng và đây chỉ là lời giải thích "cho
                      vui" của Ritz mà thôi. Sau tiết lộ thú vị của thương hiệu{" "}
                      <strong>bánh quy</strong> nổi tiếng, không ít fan của hãng
                      cũng đã "đu trend" thử ứng dụng thực tế và đều cho lời
                      nhận xét: "Quả thực là rất tiện!".
                    </p>
                    <p>Nguồn: NY Post</p>
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
