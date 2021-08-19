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
"timestamp": '19/08/2021 01:04 PM',
"title": 'Dragon Ball Super 75 tiết lộ tên hình dạng mới của Vegeta, dường như là để "cà khịa" Ultra Instinct của Goku',
"description": 'Vegeta đã tiết lộ tên hình dạng mới của mình trong Dragon Ball Super chap 75.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/19/photo-1-16293438552742024791516.png',
"alt": 'DRAGON BALL SUPER,DRAGON BALL SUPER CHAP 75,GOKU,VEGETA,ULTRA EGO,ULTRA INSTINCT,GRANOLAH,',
"category": 'games',
"date": '19/08/2021',
"time": '01:04 PM',
"link": '/dragon-ball-super-75-tiet-lo-ten-hinh-dang-moi-cua-vegeta-duong-nhu-la-de-ca-khia-ultra-instinct-cua-goku',
"zcomponent": 'page_20210819130400',
"filepath": './20210819130400-dragon-ball-super-75-tiet-lo-ten-hinh-dang-moi-cua-vegeta-duong-nhu-la-de-ca-khia-ultra-instinct-cua-goku.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  'Dragon Ball Super 75 tiết lộ tên hình dạng mới của Vegeta, dường như là để "cà khịa" Ultra Instinct của Goku';
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "19/08/2021 01:04 PM";
const description =
  "Vegeta đã tiết lộ tên hình dạng mới của mình trong Dragon Ball Super chap 75.";
const link =
  "dragon-ball-super-75-tiet-lo-ten-hinh-dang-moi-cua-vegeta-duong-nhu-la-de-ca-khia-ultra-instinct-cua-goku";
const tagparam = [
  "DRAGON BALL SUPER",
  "DRAGON BALL SUPER CHAP 75",
  "GOKU",
  "VEGETA",
  "ULTRA EGO",
  "ULTRA INSTINCT",
  "GRANOLAH",
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

export default function page_20210819130400() {
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
                      Trong <strong>Dragon Ball Super</strong> chap 74,{" "}
                      <strong>Vegeta</strong> đã tiết lộ một hình dạng sức mạnh
                      mới của mình, mà anh ta tin rằng có thể chiến đấu với{" "}
                      <strong>Granolah</strong>.
                    </p>
                    <p>
                      Vậy tên của hình dạng mới này là gì?{" "}
                      <strong>Vegeta</strong> đã tiết lộ điều đó trong{" "}
                      <strong>Dragon Ball Super</strong> chap 75.
                    </p>
                    <h5>1. Ultra Ego</h5>
                    <p>
                      <strong>Vegeta</strong> nói rằng sức mạnh của anh ấy khác
                      với <strong>Ultra Instinct</strong> của{" "}
                      <strong>Goku</strong>. Anh ấy thậm chí còn nói sức mạnh
                      này đến từ bản ngã của mình, và gọi đây là năng lực{" "}
                      <strong>Ultra Ego</strong> (tạm dịch Bản Ngã Tối Thượng).
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/19/photo-1-16293438552742024791516.png"
                      alt="1, DRAGON BALL SUPER,DRAGON BALL SUPER CHAP 75,GOKU,VEGETA,ULTRA EGO,ULTRA INSTINCT,GRANOLAH,"
                      note=""
                    />
                    <p>
                      Ở dạng này, <strong>Vegeta</strong> mạnh đến mức có thể
                      nhận đòn tấn công từ <strong>Granolah</strong>, và có thể
                      phản công Granolah một cách mạnh mẽ.
                    </p>
                    <p>
                      Và bạn cần nhớ rằng <strong>Granolah</strong> lúc này
                      không còn chia sức mạnh cho phân thân của anh ta nữa như
                      cuộc chiến với <strong>Goku</strong> nữa. Theo{" "}
                      <strong>Vegeta</strong>, sức mạnh của anh tăng lên là nhờ
                      cuộc chiến chống lại Granolah.
                    </p>
                    <h5>
                      2. <strong>Ultra Ego</strong> khác với{" "}
                      <strong>Ultra Instinct</strong> như thế nào?
                    </h5>
                    <p>
                      Bạn có thể nhớ rằng, khi <strong>Goku</strong> ở dạng{" "}
                      <strong>Ultra Instinct</strong> của mình, anh thậm chí có
                      thể né tránh các đòn tấn công của kẻ thù mà không cần suy
                      nghĩ. Nhưng <strong>Ultra Ego</strong> của{" "}
                      <strong>Vegeta</strong> thì khác. Cái tôi quá lớn của
                      hoàng tử Saiyan đã khiến anh không hề lảng tránh các đòn
                      tận công mà tiếp nhận nó một cách trực diện. Mà ở đây
                      Vegeta đã hứng chịu những đòn đánh của{" "}
                      <strong>Granolah</strong>.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/19/photo-1-1629343856893535352905.png"
                      alt="2, DRAGON BALL SUPER,DRAGON BALL SUPER CHAP 75,GOKU,VEGETA,ULTRA EGO,ULTRA INSTINCT,GRANOLAH,"
                      note=""
                    />
                    <p>
                      Theo lời nhận xét của <strong>Granolah</strong>,{" "}
                      <strong>Vegeta</strong> thậm chí còn trở nên mạnh hơn khi
                      chịu sát thương trong trận chiến.
                    </p>
                    <h5>
                      3. Phong độ này của <strong>Vegeta</strong> có đủ để đánh
                      bại <strong>Granolah</strong>?
                    </h5>
                    <p>
                      Trước khi <strong>Dragon Ball Super</strong> chap 75 ra
                      mắt chính thức, hẳn rất nhiều người đã nghĩ rằng sức mạnh
                      mới của <strong>Vegeta</strong> có thể giúp anh giành
                      chiến thắng trong cuộc chiến này. Nhưng dường như không
                      phải thế! Vegeta đã bị "lật cái bàn" sau một hồi tỏa sáng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/19/photo-2-16293438574151973643552.png"
                      alt="3, DRAGON BALL SUPER,DRAGON BALL SUPER CHAP 75,GOKU,VEGETA,ULTRA EGO,ULTRA INSTINCT,GRANOLAH,"
                      note=""
                    />
                    <p>
                      Mấu chốt ở đây có vẻ như là <strong>Ultra Ego</strong> của{" "}
                      <strong>Vegeta</strong> không cho khả năng miễn nhiễm với
                      sát thương. Sau khi nhận nhiều đòn tấn công khác nhau,
                      Vegeta bắt đầu gặp vấn đề về thị lực mờ vào cuối chương
                      75. <strong>Goku</strong> cũng có thể cảm nhận được sức
                      mạnh của Vegeta từ rất xa và biết rằng người bạn của của
                      mình đang xuống sức rồi.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Vì vậy, <strong>Vegeta</strong> thực sự có thể gặp rắc rối
                      nếu kẻ thù trước mặt anh không gục ngã sau khi nhận liên
                      hoàn tấn công, như trường hợp đã xảy ra với{" "}
                      <strong>Granolah</strong> ở đây. Trên thực tế, Granolah
                      không những không gục ngã, mà đến cuối chương, anh ta bắt
                      đầu cho thấy tiềm năng mới của sức mạnh của mình. Granolah
                      nói rằng hắn cũng vượt qua giới hạn.
                    </p>
                    <p>
                      Thế nên bây giờ khi <strong>Granolah</strong> mạnh hơn,{" "}
                      <strong>Vegeta</strong> đã chậm lại. Nhưng vấn đề là, nếu
                      trận chiến này tiếp tục, người chiến thắng sẽ không phải
                      là Granolah, <strong>Goku</strong> hay Vegeta mà là lũ
                      Heeters.
                    </p>
                    <p>
                      Trong khi <strong>Granolah</strong> vẫn đang bị việc trả
                      thù làm cho ngu muội, Heeters đã bắt đầu tìm kiếm ngọc
                      rồng. Sẽ rất hỗn loạn nếu Elec cũng được tăng sức mạnh do
                      điều ước với rồng thân. Nhưng có lẽ nếu điều đó xảy ra,
                      Granolah, <strong>Vegeta</strong> và <strong>Goku</strong>{" "}
                      có thể nhận ra rằng kẻ thù thực sự là lũ Heeters và quay
                      ra hợp tác chiến đấu.
                    </p>
                    <p></p>
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
