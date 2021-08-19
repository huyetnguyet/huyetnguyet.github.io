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
"title": 'Dragon Ball Super: 4 sự thật về Bản Ngã Tối Thượng - sức mạnh mới Vegeta đạt được khi đánh nhau với Granolah',
"description": 'Nếu Bản Năng Vô Cực của Goku thiên về phòng thủ thì Bản Ngã Tối Thượng của Vegeta mạnh về tấn công.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/19/photo-1-1629366956824601229100.jpg',
"alt": 'VEGETA,BẢN NGÃ TỐI TƯỢNG,GRANOLAH,ULTRA EGO,SỨC MẠNH MỚI CỦA VEGETA,DRAGON BALL SUPER CHƯƠNG 75,DRAGON BALL SUPER,',
"category": 'games',
"date": '19/08/2021',
"time": '01:04 PM',
"link": '/dragon-ball-super-4-su-that-ve-ban-nga-toi-thuong-suc-manh-moi-vegeta-dat-duoc-khi-danh-nhau-voi-granolah',
"zcomponent": 'page_20210819130419',
"filepath": './20210819130419-dragon-ball-super-4-su-that-ve-ban-nga-toi-thuong-suc-manh-moi-vegeta-dat-duoc-khi-danh-nhau-voi-granolah.js'
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
  "Dragon Ball Super: 4 sự thật về Bản Ngã Tối Thượng - sức mạnh mới Vegeta đạt được khi đánh nhau với Granolah";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "19/08/2021 01:04 PM";
const description =
  "Nếu Bản Năng Vô Cực của Goku thiên về phòng thủ thì Bản Ngã Tối Thượng của Vegeta mạnh về tấn công.";
const link =
  "dragon-ball-super-4-su-that-ve-ban-nga-toi-thuong-suc-manh-moi-vegeta-dat-duoc-khi-danh-nhau-voi-granolah";
const tagparam = [
  "VEGETA",
  "BẢN NGÃ TỐI TƯỢNG",
  "GRANOLAH",
  "ULTRA EGO",
  "SỨC MẠNH MỚI CỦA VEGETA",
  "DRAGON BALL SUPER CHƯƠNG 75",
  "DRAGON BALL SUPER",
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

export default function page_20210819130419() {
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
                      Manga{" "}
                      <strong>
                        <strong>Dragon Ball Super</strong> chương 75
                      </strong>{" "}
                      đã hé lộ tên chính thức hình thái sức mạnh mới của{" "}
                      <strong>Vegeta</strong>, đó là <strong>Ultra Ego</strong>{" "}
                      (tạm dịch Bản Ngã Tối Thượng). Vậy Ultra Ego của Vegeta có
                      gì độc đáo? Cùng liệt kê những thông tin đã được tiết lộ
                      trong chương 75 ở dưới đây nhé!
                    </p>
                    <h5>
                      1. Nhờ trận chiến với <strong>Granolah</strong>, lần đầu
                      tiên <strong>Vegeta</strong> thức tỉnh được Ultra Ego
                    </h5>
                    <p>
                      Sức mạnh mới của <strong>Vegeta</strong> xuất hiện lần đầu
                      ở cuối chương 74. Trước đó Vegeta có thể đã được huấn
                      luyện bởi Thần Hủy Diệt Beerus. Nhưng từ câu chuyện của
                      Vegeta trong <strong>Dragon Ball Super</strong> 75, sức
                      mạnh mới của anh chỉ được khai phá khi chống lại{" "}
                      <strong>Granolah</strong> và anh thấy cảm ơn vì điều đó.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/19/photo-1-1629366956824601229100.jpg"
                      alt="1, VEGETA,BẢN NGÃ TỐI TƯỢNG,GRANOLAH,ULTRA EGO,SỨC MẠNH MỚI CỦA VEGETA,DRAGON BALL SUPER CHƯƠNG 75,DRAGON BALL SUPER,"
                      note=""
                    />
                    <p>
                      Cụ thể <strong>Vegeta</strong> đã nói cảm ơn{" "}
                      <strong>Granolah</strong> trong chương 75 vì nhờ hắn mà
                      sức mạnh thiên bẩm trong con người hoàng tử Saiyan đã được
                      thức tỉnh lần đầu tiên. Chính Granolah là người đã khơi
                      dậy con thú trong Vegeta và anh cũng khẳng định đây không
                      phải là sức mạnh mà Beerus ban cho mà nó thực sự là của
                      anh.
                    </p>
                    <h5>
                      2. Khác với Ultra Instinct của Goku,{" "}
                      <strong>Ultra Ego</strong> của <strong>Vegeta</strong>{" "}
                      không né đòn
                    </h5>
                    <p>
                      Với Ultra Instinct, Goku có thể né tránh và tấn công chỉ
                      dựa trên bản năng. Ngay cả khi Ultra Instinct chưa hoàn
                      hảo (tóc Goku màu đen), anh Khỉ vẫn có thể tự né được
                      nhiều đòn tấn công khác nhau theo bản năng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/19/photo-1-1629366958119185397802.png"
                      alt="2, VEGETA,BẢN NGÃ TỐI TƯỢNG,GRANOLAH,ULTRA EGO,SỨC MẠNH MỚI CỦA VEGETA,DRAGON BALL SUPER CHƯƠNG 75,DRAGON BALL SUPER,"
                      note=""
                    />
                    <p>
                      Nhưng chương 75 đã cho thấy, <strong>Ultra Ego</strong>{" "}
                      của <strong>Vegeta</strong> không né tránh các đòn tấn
                      công từ đối thủ mà tiếp nhận nó 1 cách trực diện. Như đã
                      thấy, Vegeta đã lĩnh trọn đòn tấn công của{" "}
                      <strong>Granolah</strong> khiến hắn bối rối không hiểu tại
                      sao Vegeta không né tránh.
                    </p>
                    <p>
                      Theo lời nhận xét của <strong>Granolah</strong>,{" "}
                      <strong>Vegeta</strong> thậm chí còn trở nên mạnh hơn khi
                      chịu sát thương trong trận chiến.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>
                      3. Nguồn gốc của cái tên <strong>Ultra Ego</strong>?
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/19/photo-2-1629366958609962606103.png"
                      alt="3, VEGETA,BẢN NGÃ TỐI TƯỢNG,GRANOLAH,ULTRA EGO,SỨC MẠNH MỚI CỦA VEGETA,DRAGON BALL SUPER CHƯƠNG 75,DRAGON BALL SUPER,"
                      note=""
                    />
                    <p>
                      Về cơ bản, trước mặt <strong>Granolah</strong>,{" "}
                      <strong>Vegeta</strong> đã thừa nhận rằng "cơ thể của
                      Kakarot có thể có nhận thức riêng, nhưng anh là một cái
                      tôi nguyên bản". Vậy nên có thể gọi hình thức mới của anh
                      là <strong>Ultra Ego</strong> - Bản Ngã Tối Thượng.
                    </p>
                    <h5>4. Điểm yếu của Ultra Ego</h5>
                    <p>
                      Trước khi <strong>Dragon Ball Super</strong> chap 75 ra
                      mắt chính thức, hẳn rất nhiều người đã nghĩ rằng sức mạnh
                      mới của <strong>Vegeta</strong> có thể giúp anh giành
                      chiến thắng trong cuộc chiến với <strong>Granolah</strong>
                      . Nhưng đáng tiếc, sự thật không phải như vậy, chỉ vì quá
                      đề cao nguồn năng lượng bản năng của bản thân mà anh đã
                      khiến mình gặp nguy hiểm.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/19/photo-3-16293669591041854123682.png"
                      alt="4, VEGETA,BẢN NGÃ TỐI TƯỢNG,GRANOLAH,ULTRA EGO,SỨC MẠNH MỚI CỦA VEGETA,DRAGON BALL SUPER CHƯƠNG 75,DRAGON BALL SUPER,"
                      note=""
                    />
                    <p>
                      Bởi ban đầu khi nhận các đòn tấn công liên tục của{" "}
                      <strong>Granolah</strong>, <strong>Vegeta</strong> nghĩ
                      rằng nó có thể giúp anh mạnh hơn nữa, nhưng đến cuối
                      chương 75, tầm nhìn của Vegeta bắt đầu mờ đi do nhận nhiều
                      đòn tấn công.
                    </p>
                    <p>
                      Và nếu kẻ thù của <strong>Vegeta</strong> có thể sống sót
                      sau các cuộc tấn công của anh ta, cuối cùng Vegeta sẽ gục
                      ngã, giống như điều đã xảy ra ở cuối chương 75 này.
                    </p>
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
