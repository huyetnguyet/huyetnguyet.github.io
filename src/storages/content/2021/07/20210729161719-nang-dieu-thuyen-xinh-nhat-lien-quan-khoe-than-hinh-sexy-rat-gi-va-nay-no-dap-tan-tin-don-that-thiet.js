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
"timestamp": '29/07/2021 04:17 PM',
"title": 'Nàng Điêu Thuyền xinh nhất Liên Quân khoe thân hình sexy “rất gì và này nọ”, đập tan tin đồn thất thiệt',
"description": 'Mới đây, Hoàng Yến Chibi, nàng Điêu Thuyền xinh bậc nhất Liên Quân đã chứng minh rằng cô nàng không chỉ xinh mà tâm hồn cũng rất đẹp.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-1626424095083402482469.jpg',
"alt": 'LIÊN QUÂN MOBILE,LIÊN QUÂN,CỘNG ĐỒNG LIÊN QUÂN MOBILE,SEXY,GÁI XINH,HOÀNG YẾN,HOÀNG YẾN CHIBI,ĐIÊU THUYỀN,GAME THỦ,NỮ GAME THỦ,',
"category": 'images',
"date": '29/07/2021',
"time": '04:17 PM',
"link": '/nang-dieu-thuyen-xinh-nhat-lien-quan-khoe-than-hinh-sexy-rat-gi-va-nay-no-dap-tan-tin-don-that-thiet',
"zcomponent": 'page_20210729161719',
"filepath": './20210729161719-nang-dieu-thuyen-xinh-nhat-lien-quan-khoe-than-hinh-sexy-rat-gi-va-nay-no-dap-tan-tin-don-that-thiet.js'
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
  "Nàng Điêu Thuyền xinh nhất Liên Quân khoe thân hình sexy “rất gì và này nọ”, đập tan tin đồn thất thiệt";
const author = "Lee Chueng Hee";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:17 PM";
const description =
  "Mới đây, Hoàng Yến Chibi, nàng Điêu Thuyền xinh bậc nhất Liên Quân đã chứng minh rằng cô nàng không chỉ xinh mà tâm hồn cũng rất đẹp.";
const link =
  "nang-dieu-thuyen-xinh-nhat-lien-quan-khoe-than-hinh-sexy-rat-gi-va-nay-no-dap-tan-tin-don-that-thiet";
const tagparam = [
  "LIÊN QUÂN MOBILE",
  "LIÊN QUÂN",
  "CỘNG ĐỒNG LIÊN QUÂN MOBILE",
  "SEXY",
  "GÁI XINH",
  "HOÀNG YẾN",
  "HOÀNG YẾN CHIBI",
  "ĐIÊU THUYỀN",
  "GAME THỦ",
  "NỮ GAME THỦ",
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

export default function page_20210729161719() {
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
                    Có lẽ nhắc tới <strong>Hoàng Yến</strong> Chibi thì phần lớn
                    sẽ nghĩ về một nữ ca sĩ, diễn viên đa tài và xinh đẹp. Tuy
                    nhiên, với <strong>game thủ</strong>{" "}
                    <strong>Liên Quân</strong> thì{" "}
                    <strong>Hoàng Yến Chibi</strong> lại là một{" "}
                    <strong>nữ game thủ</strong> nổi tiếng và vô cùng gần gũi
                    với cộng đồng. Hoàng Yến từng khoe cô nàng có hơn 4 năm kinh
                    nghiệm chơi <strong>Liên Quân Mobile</strong> và vị tướng
                    gần như là duy nhất nữ ca sĩ thường xuyên trên tay chính là{" "}
                    <strong>Điêu Thuyền</strong>.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-1626424095083402482469.jpg"
                    alt="1, LIÊN QUÂN MOBILE,LIÊN QUÂN,CỘNG ĐỒNG LIÊN QUÂN MOBILE,SEXY,GÁI XINH,HOÀNG YẾN,HOÀNG YẾN CHIBI,ĐIÊU THUYỀN,GAME THỦ,NỮ GAME THỦ,"
                    note=""
                  />
                  <p>
                    Hẳn tất cả vẫn không thể quên <strong>Hoàng Yến</strong>{" "}
                    từng khoe mình có tới 1.822 trận chơi{" "}
                    <strong>Điêu Thuyền</strong> trong{" "}
                    <strong>Liên Quân</strong> với tỉ lệ thắng là 51.7%, một con
                    số cũng không phải dạng vừa. Thống kê này được cô nàng khoe
                    vào thời điểm cách đây gần một năm. Tức là bây giờ, những
                    thành tích mà Hoàng Yến có trong Liên Quân ít nhiều cũng có
                    sự thay đổi với vị tướng Điêu Thuyền.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264241056701967776331.jpg"
                    alt="2, LIÊN QUÂN MOBILE,LIÊN QUÂN,CỘNG ĐỒNG LIÊN QUÂN MOBILE,SEXY,GÁI XINH,HOÀNG YẾN,HOÀNG YẾN CHIBI,ĐIÊU THUYỀN,GAME THỦ,NỮ GAME THỦ,"
                    note=""
                  />
                  <p>
                    <strong>Hoàng Yến</strong> Chibi cũng được biết tới là vô
                    cùng gần gũi với fan khi thường xuyên rủ người hâm mộ lập
                    team chơi <strong>Liên Quân</strong>. Dù cũng có trận thắng,
                    trận thua xong không thể phủ nhận ít có người nổi tiếng nào
                    làm được như <strong>Hoàng Yến Chibi</strong>, nhất là với
                    cộng đồng <strong>game thủ</strong>{" "}
                    <strong>Liên Quân Mobile</strong>.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Mới đây, nữ ca sĩ đã khoe những hình ảnh nóng bỏng của bản
                    thân khiến cộng đồng không khỏi bất ngờ. Hình ảnh này cho
                    thấy <strong>Hoàng Yến</strong> Chibi không chỉ xinh đẹp mà
                    còn sở hữu thân hình “rất gì và này nọ”, đập tan mọi tin đồn
                    cho rằng nữ ca sĩ “màn hình phẳng” trước đây.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-16264241191491527131263.jpg"
                    alt="3, LIÊN QUÂN MOBILE,LIÊN QUÂN,CỘNG ĐỒNG LIÊN QUÂN MOBILE,SEXY,GÁI XINH,HOÀNG YẾN,HOÀNG YẾN CHIBI,ĐIÊU THUYỀN,GAME THỦ,NỮ GAME THỦ,"
                    note=""
                  />
                  <p>
                    <strong>Hoàng Yến</strong> Chibi tên thật là Nguyễn Hoàng
                    Yến (sinh ngày 8 tháng 12 năm 1995 tại Hà Nội) là một nữ ca
                    sĩ, diễn viên, diễn viên lồng tiếng, người mẫu ảnh, người
                    dẫn chương trình người Việt Nam. Hiện nay cô sinh sống và
                    làm việc tại Thành phố Hồ Chí Minh. Cô nàng là gương mặt
                    thân quen đối với khán giả tại Việt Nam khi thường xuyên
                    xuất hiện trên sóng truyền hình. Tuy nhiên, với giới{" "}
                    <strong>game thủ</strong> thì{" "}
                    <strong>Hoàng Yến Chibi</strong> còn là một người có đam mê
                    mãnh liệt với game.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/photo-1-1626424157070266123532.jpg"
                    alt="4, LIÊN QUÂN MOBILE,LIÊN QUÂN,CỘNG ĐỒNG LIÊN QUÂN MOBILE,SEXY,GÁI XINH,HOÀNG YẾN,HOÀNG YẾN CHIBI,ĐIÊU THUYỀN,GAME THỦ,NỮ GAME THỦ,"
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
