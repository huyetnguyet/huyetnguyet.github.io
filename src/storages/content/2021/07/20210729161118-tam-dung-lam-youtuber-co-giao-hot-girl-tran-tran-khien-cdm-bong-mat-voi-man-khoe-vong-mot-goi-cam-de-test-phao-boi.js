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
"timestamp": '29/07/2021 04:11 PM',
"title": 'Tạm dừng làm YouTuber, cô giáo hot girl Trân Trần khiến CĐM bỏng mắt với màn khoe vòng một gợi cảm để "test phao bơi"',
"description": 'Xinh đẹp, gợi cảm, hot girl Trân Trần luôn rất biết cách thu hút sự chú ý của cộng đồng mạng với những bộ ảnh đầy quyến rũ.',
"src": 'https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/6/30/photo-1-16250600667601909530668.jpg',
"alt": 'HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,TRÂN TRẦN,YOUTUBER,',
"category": 'images',
"date": '29/07/2021',
"time": '04:11 PM',
"link": '/tam-dung-lam-youtuber-co-giao-hot-girl-tran-tran-khien-cdm-bong-mat-voi-man-khoe-vong-mot-goi-cam-de-test-phao-boi',
"zcomponent": 'page_20210729161118',
"filepath": './20210729161118-tam-dung-lam-youtuber-co-giao-hot-girl-tran-tran-khien-cdm-bong-mat-voi-man-khoe-vong-mot-goi-cam-de-test-phao-boi.js'
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
  'Tạm dừng làm YouTuber, cô giáo hot girl Trân Trần khiến CĐM bỏng mắt với màn khoe vòng một gợi cảm để "test phao bơi"';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:11 PM";
const description =
  "Xinh đẹp, gợi cảm, hot girl Trân Trần luôn rất biết cách thu hút sự chú ý của cộng đồng mạng với những bộ ảnh đầy quyến rũ.";
const link =
  "tam-dung-lam-youtuber-co-giao-hot-girl-tran-tran-khien-cdm-bong-mat-voi-man-khoe-vong-mot-goi-cam-de-test-phao-boi";
const tagparam = [
  "HOT GIRL",
  "CỘNG ĐỒNG MẠNG",
  "GÁI XINH",
  "TRÂN TRẦN",
  "YOUTUBER",
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

export default function page_20210729161118() {
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
                      Có thể nhiều người đã biết tới <strong>Trân Trần</strong>{" "}
                      (Trần Nam Trân), cô giáo hot nhất trên mạng xã hội với
                      những tấm ảnh xinh đẹp và bắt mắt được nhiều người chia
                      sẻ. Nổi tiếng từ lâu, thế nhưng cái tên Trân Trần chỉ thật
                      sự tạo được sự quan tâm lớn sau khi tham gia đóng cùng Lộc
                      Fuho trong một số vlog của anh chàng này. Và mặc dù không
                      thành đôi với anh chàng <strong>Youtuber</strong> như
                      nhiều người vẫn "đẩy thuyền", thế nhưng kể từ đó, cô giáo
                      Trân Trần cũng đã trở thành một cái tên quen mặt với{" "}
                      <strong>cộng đồng mạng</strong>.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/30/1301145904110088566151106412954152456068416n-16250594575121209553669.jpg"
                      alt="1, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,TRÂN TRẦN,YOUTUBER,"
                      note="Trân Trần - cô giáo hot girl xinh đẹp được rất nhiều người biết tới"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-16250595042231810722316.jpg"
                      alt="2, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,TRÂN TRẦN,YOUTUBER,"
                      note="Trân Trần càng trở nên nổi tiếng hơn sau khi xuất hiện chung cùng Lộc Fuho trong khá nhiều video của anh chàng YouTuber này"
                    />
                    <p>
                      Sau khi dừng đóng chung với Lộc Fuho,{" "}
                      <strong>Trân Trần</strong> từng có thời gian theo đuổi sự
                      nghiệp <strong>YouTuber</strong> khi cũng rất chăm chỉ
                      tung ra một số video với tần suất khá thường xuyên. Tuy
                      nhiên, sự nghiệp YouTuber của nàng{" "}
                      <strong>hot girl</strong> cũng không quá thành công, thậm
                      chí không ít người còn cho rằng cô nàng cố tình "ăn theo"
                      Lộc Fuho, và chỉ khi nào tương tác với anh chàng này thì
                      các clip mới thật sự có lượng tương tác khủng. Sau đó một
                      thời gian, Trân Trần cũng đã không còn quá chăm chỉ update
                      các clip của mình lên YouTube nữa. Hiện tại, cô nàng đang
                      là một người mẫu ảnh, TikToker có tiếng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-16250598707081325084381.jpg"
                      alt="3, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,TRÂN TRẦN,YOUTUBER,"
                      note="Trân Trần từng có quãng thời gian theo đuổi sự nghiệp YouTuber"
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-162505984343723353392.jpg"
                      alt="4, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,TRÂN TRẦN,YOUTUBER,"
                      note="Nhưng sau đó đã chuyển hướng sang tập trung vào công việc người mẫu ảnh và là một TikToker có tiếng"
                    />
                    <p>
                      Sở hữu gương mặt xinh xắn, ngây thơ nhưng thân hình lại
                      cực kỳ nóng bỏng, <strong>Trân Trần</strong> nhanh chóng
                      thu hút được sự chú ý của <strong>cộng đồng mạng</strong>{" "}
                      mỗi khi cô nàng xuất hiện. Quả thật, với chiều cao 1m66 ấn
                      tượng cộng thêm số đo ba vòng hoàn hảo 83 – 58 – 92cm,
                      Trân Trần mới đây lại thêm một lần nữa khiến fan hâm mộ
                      phải bỏng mắt khi không ngần ngại khoe vòng một với bộ
                      bikini siêu nóng bỏng. Cô nàng cũng hài hước chia sẻ với
                      người theo dõi rằng mình đang "test phao bơi" chứ không hề
                      có ý đinh gì khác.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Những hình ảnh diện bikini nóng bỏng mới nhất trên trang
                      cá nhân của cô nàng hot girl
                    </p>
                    <p>
                      Không thường xuyên theo đuổi phong cách quá gợi cảm, thế
                      nhưng dường như mỗi lần xuất hiện,{" "}
                      <strong>Trân Trần</strong> luôn rất biết cách khiến người
                      xem phải chú ý tới mình. Bộ ảnh lần này cũng vậy, chỉ
                      trong ít giờ, cô nàng đã nhận được vô số tương tác và thậm
                      chí, không ít người còn dành tặng cho nàng{" "}
                      <strong>hot girl</strong> những lời khen tặng về sự gợi
                      cảm, nóng bỏng của mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/6/30/photo-1-16250600772981284395848.jpg"
                      alt="5, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,TRÂN TRẦN,YOUTUBER,"
                      note="Đây cũng không phải lần đầu tiên Trân Trần đốt mắt fan với những phong cách thời trang nóng bỏng"
                    />
                    <p>
                      Một số hình ảnh xinh đẹp khác của nàng{" "}
                      <strong>hot girl</strong>:
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/6/30/photo-1-16250600667601909530668.jpg"
                      alt="6, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,TRÂN TRẦN,YOUTUBER,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/6/30/photo-1-16250600589901866768484.jpg"
                      alt="7, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,TRÂN TRẦN,YOUTUBER,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/6/30/photo-1-16250600508331952107179.jpg"
                      alt="8, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,TRÂN TRẦN,YOUTUBER,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/30/photo-1-1625060237671449052661.jpg"
                      alt="9, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,TRÂN TRẦN,YOUTUBER,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/30/photo-1-1625060223578312366821.jpg"
                      alt="10, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,TRÂN TRẦN,YOUTUBER,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/30/photo-1-1625060460908393774672.jpg"
                      alt="11, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,TRÂN TRẦN,YOUTUBER,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/30/photo-1-1625060353999196270620.jpg"
                      alt="12, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,TRÂN TRẦN,YOUTUBER,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/30/photo-1-16250603764761839923039.jpg"
                      alt="13, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,TRÂN TRẦN,YOUTUBER,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/30/photo-1-16250604342962020231212.jpg"
                      alt="14, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,TRÂN TRẦN,YOUTUBER,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/30/photo-1-16250604883411173285214.jpg"
                      alt="15, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,TRÂN TRẦN,YOUTUBER,"
                      note=""
                    />
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
