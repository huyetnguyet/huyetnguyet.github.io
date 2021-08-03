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
"timestamp": '29/07/2021 04:18 PM',
"title": 'Sau Thám Tử Đã Chết các fan anime thích thú với dàn harem trong "Có Bạn Gái Lại Thêm Bạn Gái", bắt cá 2 tay có khi lại hay',
"description": 'Thêm một siêu phẩm anime nữa được nhiều khán giả yêu thích với dàn harem vô cùng ấn tượng.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/rui3-1626497074652125518877.png',
"alt": 'RENT-A-GIRL-FRIEND,CÓ BẠN GÁI LẠI THÊM BẠN GÁI,HAREM,ANIME MỚI,DIAMOND THUÊ CHIZURU MIZUHARA,KAZUYA KINOSHITA,',
"category": 'games',
"date": '29/07/2021',
"time": '04:18 PM',
"link": '/sau-tham-tu-da-chet-cac-fan-anime-thich-thu-voi-dan-harem-trong-co-ban-gai-lai-them-ban-gai-bat-ca-2-tay-co-khi-lai-hay',
"zcomponent": 'page_20210729161845',
"filepath": './20210729161845-sau-tham-tu-da-chet-cac-fan-anime-thich-thu-voi-dan-harem-trong-co-ban-gai-lai-them-ban-gai-bat-ca-2-tay-co-khi-lai-hay.js'
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
  'Sau Thám Tử Đã Chết các fan anime thích thú với dàn harem trong "Có Bạn Gái Lại Thêm Bạn Gái", bắt cá 2 tay có khi lại hay';
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:18 PM";
const description =
  "Thêm một siêu phẩm anime nữa được nhiều khán giả yêu thích với dàn harem vô cùng ấn tượng.";
const link =
  "sau-tham-tu-da-chet-cac-fan-anime-thich-thu-voi-dan-harem-trong-co-ban-gai-lai-them-ban-gai-bat-ca-2-tay-co-khi-lai-hay";
const tagparam = [
  "RENT-A-GIRL-FRIEND",
  "CÓ BẠN GÁI LẠI THÊM BẠN GÁI",
  "HAREM",
  "ANIME MỚI",
  "DIAMOND THUÊ CHIZURU MIZUHARA",
  "KAZUYA KINOSHITA",
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

export default function page_20210729161845() {
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
                      Như chúng ta đã biết thì anime{" "}
                      <strong>Rent-A-Girl-Friend</strong> (
                      <strong>Có Bạn Gái Lại Thêm Bạn Gái</strong>) được chuyển
                      thể từ bộ manga cùng tên được viết và vẽ minh họa bởi
                      Miyahima Reiji. Bộ anime này đã được phát sóng từ ngày 11
                      tháng 7 năm 2020 và được chuyển thể bởi TMS Entertainment.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/rui3-1626497074652125518877.png"
                      alt="1, RENT-A-GIRL-FRIEND,CÓ BẠN GÁI LẠI THÊM BẠN GÁI,HAREM,ANIME MỚI,DIAMOND THUÊ CHIZURU MIZUHARA,KAZUYA KINOSHITA,"
                      note=""
                    />
                    <p>
                      Anime "<strong>Có Bạn Gái Lại Thêm Bạn Gái</strong>" nói
                      về cựu sinh viên <strong>Kazuya Kinoshita</strong>, bị bạn
                      gái ruồng rẫy vì một chàng trai khác. Anh ấy cố gắng xoa
                      dịu khoảng trống trong lòng mình thông qua một ứng dụng di
                      động có tên <strong>Diamond thuê Chizuru Mizuhara</strong>
                      , một người bạn gái cho thuê để bản thân cảm thấy tốt hơn.
                      Từ lần gặp đầu tiên, cô ấy dường như là cô gái hoàn hảo
                      đối với anh ấy, hàng loạt những tình huống rối ren đã xuất
                      hiện giữa hai người.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/rui2-16264970715731520786731.jpg"
                      alt="2, RENT-A-GIRL-FRIEND,CÓ BẠN GÁI LẠI THÊM BẠN GÁI,HAREM,ANIME MỚI,DIAMOND THUÊ CHIZURU MIZUHARA,KAZUYA KINOSHITA,"
                      note=""
                    />
                    <p>
                      Về anh chàng nhân vật chính này thì có bề ngoài cũng bình
                      thường, trông vẻ khù khờ, dại gái, suy nghĩ chưa được xa,
                      thiếu quyết đoán và hơi ảo tưởng. Tuy vậy anh là một thanh
                      niên tốt tính, tốt bụng. Chính điểm này của thanh niên đã
                      cuốn hút được 4 mĩ nữ của chúng ta. Về 4 nhân vật nữ thì
                      được tác giả khắc họa một cách chi tiết, cụ thể qua nét
                      vẽ, lời thoại. Phần chuyển thể anime cũng được xây dựng
                      một cách trau chuốt, cẩn thận và hết sức đầu tư về trang
                      phục.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/rui5-1626497156983238423932.jpg"
                      alt="3, RENT-A-GIRL-FRIEND,CÓ BẠN GÁI LẠI THÊM BẠN GÁI,HAREM,ANIME MỚI,DIAMOND THUÊ CHIZURU MIZUHARA,KAZUYA KINOSHITA,"
                      note=""
                    />
                    <p>
                      Tác giả tập trung chủ yếu khắc họa nhân vật Chizuru vì có
                      lẽ đây là nữ chính của bộ phim này. Chizuru được vẽ với
                      thân hình vô cùng chuẩn và có một tính cách vô cùng tốt.
                      Các trạng thái cảm xúc của cô được khắc họa nhiều nhất và
                      tạo cho người xem được nhiều thiện cảm. Đối với một số anh
                      thì đây chính là hình mẫu lí tưởng nhất, một mẫu "Waifu
                      quốc dân".
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Còn với cô nàng Ruka thì hồn nhiên, vô tư, thích gì làm
                      nấy. Trong anime, Ruka được coi như là "em gái idol". Song
                      vì "main" tốt tính và cái thiết bị đo nhịp tim thì Ruka có
                      cảm tình với nhân vật chính và liên tục tấn công anh chàng
                      này. Nhưng mà anh chàng này lại thích Chizuru nên cô tuyên
                      chiến với Chizuru.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/rui4-16264970778941060959385.jpg"
                      alt="4, RENT-A-GIRL-FRIEND,CÓ BẠN GÁI LẠI THÊM BẠN GÁI,HAREM,ANIME MỚI,DIAMOND THUÊ CHIZURU MIZUHARA,KAZUYA KINOSHITA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/rui6-16264971603032007497708.jpg"
                      alt="5, RENT-A-GIRL-FRIEND,CÓ BẠN GÁI LẠI THÊM BẠN GÁI,HAREM,ANIME MỚI,DIAMOND THUÊ CHIZURU MIZUHARA,KAZUYA KINOSHITA,"
                      note=""
                    />
                    <p>
                      Nhìn chung chỉ sau 3 tập đầu tiên của phần 2 thì cùng với
                      Thám Tử Đã Chết thì anime "
                      <strong>Có Bạn Gái Lại Thêm Bạn Gái</strong>" khiến cho
                      nhiều khán giả thích thú và mong chờ những tập phim sau.
                      Trên các trang mạng xã hội về anime, chủ đề dàn{" "}
                      <strong>harem</strong> trong anime "Có Bạn Gái Lại Thêm
                      Bạn Gái" cũng được bàn tán sôi nổi. Đa số đều rất háo hức
                      và tỏ ra thích thú với các cô nàng trong bộ anime này.
                      Hiện tại thì "Có Bạn Gái Lại Thêm Bạn Gái" phần 2 đã phát
                      sóng được 3 tập và nhận về vô số đánh giá tích cực từ khán
                      giả yêu thích anime tại Việt Nam. Các bạn thấy anime "Có
                      Bạn Gái Lại Thêm Bạn Gái" như thế nào? Hãy để lại ý kiến
                      của mình nhé!
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/base64-1626497297014974717839.png"
                      alt="6, RENT-A-GIRL-FRIEND,CÓ BẠN GÁI LẠI THÊM BẠN GÁI,HAREM,ANIME MỚI,DIAMOND THUÊ CHIZURU MIZUHARA,KAZUYA KINOSHITA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/17/base64-16264973331321377881662.png"
                      alt="7, RENT-A-GIRL-FRIEND,CÓ BẠN GÁI LẠI THÊM BẠN GÁI,HAREM,ANIME MỚI,DIAMOND THUÊ CHIZURU MIZUHARA,KAZUYA KINOSHITA,"
                      note=""
                    />
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
