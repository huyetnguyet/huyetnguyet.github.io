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
"timestamp": '08/08/2021 10:22 PM',
"title": 'Iron Man chính thức trở lại dù đã chết trong Endgame, hướng giải quyết của Marvel khiến ai cũng phải thán phục',
"description": 'Dù Iron Man đã hy sinh trong Avengers: Endgame, Marvel đã tìm cách để chính thức đưa nhân vật này quay trở lại.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/9/photo-1-16284760850321848111665.jpg',
"alt": 'TONY STARK,IRON MAN,AVENGERS: ENDGAME,MCU,WHAT IF...?,LOKI,ĐA VŨ TRỤ,',
"category": 'news',
"date": '08/08/2021',
"time": '10:22 PM',
"link": '/iron-man-chinh-thuc-tro-lai-du-da-chet-trong-endgame-huong-giai-quyet-cua-marvel-khien-ai-cung-phai-than-phuc',
"zcomponent": 'page_20210808222202',
"filepath": './20210808222202-iron-man-chinh-thuc-tro-lai-du-da-chet-trong-endgame-huong-giai-quyet-cua-marvel-khien-ai-cung-phai-than-phuc.js'
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
  "Iron Man chính thức trở lại dù đã chết trong Endgame, hướng giải quyết của Marvel khiến ai cũng phải thán phục";
const author = "HIEUTHUBA";
const source = "Trí thức trẻ";
const timestamp = "08/08/2021 10:22 PM";
const description =
  "Dù Iron Man đã hy sinh trong Avengers: Endgame, Marvel đã tìm cách để chính thức đưa nhân vật này quay trở lại.";
const link =
  "iron-man-chinh-thuc-tro-lai-du-da-chet-trong-endgame-huong-giai-quyet-cua-marvel-khien-ai-cung-phai-than-phuc";
const tagparam = [
  "TONY STARK",
  "IRON MAN",
  "AVENGERS: ENDGAME",
  "MCU",
  "WHAT IF...?",
  "LOKI",
  "ĐA VŨ TRỤ",
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

export default function page_20210808222202() {
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
                      Cái chết của nhân vật <strong>Tony Stark</strong> -{" "}
                      <strong>Iron Man</strong> là một trong những chi tiết chấn
                      động, gây bất ngờ và xót xa nhất của bom tấn{" "}
                      <strong>Avengers: Endgame</strong>. Siêu anh hùng đặt nền
                      móng cho Vũ trụ Điện ảnh Marvel (<strong>MCU</strong>) có
                      một cái kết oanh liệt, là dấu chấm hoàn hảo cho hàng chục
                      năm chinh chiến. Tuy nhiên qua đời chưa được bao lâu, nhân
                      vật này đã đang được Marvel rục rịch đưa trở lại MCU theo
                      phương thức vô cùng hợp lý và chứa đựng nhiều tiềm năng.
                    </p>
                    <p>
                      Nhờ vào series bom tấn <strong>Loki</strong> vừa ra mắt,
                      khán giả được giới thiệu tới khái niệm "
                      <strong>đa vũ trụ</strong>", khi nhiều phiên bản của một
                      vũ trụ tồn tại song song, nhưng không diễn ra giống hệt
                      nhau. Nhiều tin đồn cũng nói về việc Marvel rất nóng lòng
                      muốn 2 diễn viên kỳ cựu là Robert Downey Jr. và Chris
                      Evans quay trở lại (mặc dù cả 2 đều từ chối), chính vì
                      thế, họ đã tìm đến hướng giải quyết khác với khái niệm đa
                      vũ trụ.
                    </p>
                    <p>
                      Cụ thể trước mắt, Marvel sẽ mang nhân vật{" "}
                      <strong>Iron Man</strong> trở lại qua series hoạt hình{" "}
                      <strong>What If...?</strong> . Nhiều khán giả có thể lắc
                      đầu ngán ngẩm vì đây chỉ là hoạt hình chứ không phải người
                      đóng, thế nhưng hé lộ mới nhất từ phía nhà sản xuất của
                      phim đã thực sự khẳng định Iron Man sẽ quay trở lại.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/9/8tou-f-1628402003198211344794-16284761178081671507261.gif"
                      alt="1, TONY STARK,IRON MAN,AVENGERS: ENDGAME,MCU,WHAT IF...?,LOKI,ĐA VŨ TRỤ,"
                      note="Nhân vật Iron Man của một vũ trụ khác sẽ xuất hiện trong What If...?, tạo hình y hệt Robert Downey Jr."
                    />
                    <p>
                      Trong một bài phỏng vấn gần đây với trang/Film, nhà sản
                      xuất của <strong>What If...?</strong> là ông Brad
                      Winderbaum đã khẳng định các sự kiện diễn ra trong phim sẽ
                      có liên kết mật thiết với <strong>MCU</strong> nói chung,
                      và sẽ tạo ra ảnh hưởng trực tiếp tới các bom tấn người
                      đóng.
                    </p>
                    <p>
                      Ông Brad Winderbaum - Giám đốc sản xuất của What If...?
                    </p>
                    <p>
                      Ngoài ra, biên kịch của phim cũng khẳng định tất cả những
                      gì xảy ra trong bộ phim hoạt hình này cũng là "chính
                      thống", kết nối tới <strong>MCU</strong>.
                    </p>
                    <p>Ông AC Bradley - Biên kịch chính của What If...?</p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/9/photo-1-1628476084173163875999.jpg"
                      alt="2, TONY STARK,IRON MAN,AVENGERS: ENDGAME,MCU,WHAT IF...?,LOKI,ĐA VŨ TRỤ,"
                      note="Những khẳng định này sẽ mở ra cơ hội để hàng loạt nhân vật đã chết trong MCU được xuất hiện lại trong tương lai, điển hình chính là Iron Man"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Trong trailer của <strong>What If...?</strong>, khán giả
                      cũng nhiều lần được nhìn thấy <strong>Iron Man</strong>{" "}
                      xuất hiện, tạo hình y hệt diễn viên Robert Downey Jr.
                      Nhiều gương mặt nổi tiếng của vũ trụ <strong>MCU</strong>{" "}
                      cũng quay trở lại để lồng tiếng cho nhân vật của mình
                      trong What If...?, càng khiến khán giả tin tưởng vào tầm
                      quan trọng và mức độ ảnh hưởng của bộ phim này. Bởi lẽ
                      phim có sự xuất hiện của quá nhiều nhân vật quan trọng,
                      việc thực hiện dưới dạng hoạt hình có lẽ sẽ an toàn hơn về
                      mặt kinh phí cho Marvel.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/9/photo-1-16284760850321848111665.jpg"
                      alt="3, TONY STARK,IRON MAN,AVENGERS: ENDGAME,MCU,WHAT IF...?,LOKI,ĐA VŨ TRỤ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/9/photo-2-16284760855321096676301.jpeg"
                      alt="4, TONY STARK,IRON MAN,AVENGERS: ENDGAME,MCU,WHAT IF...?,LOKI,ĐA VŨ TRỤ,"
                      note=""
                    />

                    <p>
                      <strong>Iron Man</strong> trong{" "}
                      <strong>What If...?</strong> được hé lộ sẽ có một hành
                      trình rất khác, được giải cứu bởi Killmonger. Mặc dù chưa
                      có thông tin nào về việc bộ phim này sẽ ảnh hưởng như thế
                      nào tới nhân vật này, nhưng nó cũng là động thái rất quyết
                      liệt của Marvel để giữ hình tượng Iron Man sống mãi. Ngoài
                      ra, Marvel cũng luôn nổi tiếng với khoản giữ bí mật, nên
                      có thể họ còn đang "âm mưu" điều gì đó sẽ khiến khán giả
                      phải há hốc mồm kinh ngạc.
                    </p>
                    <p>
                      Một nhân vật đã chết khác của <strong>MCU</strong> là
                      Peggy Carter ( Hayley Atwell ) cũng trở thành gương mặt
                      chính trong <strong>What If...?</strong>, trở thành siêu
                      anh hùng thay thế Đội trưởng Mỹ. Còn có một số tin đồn cho
                      rằng bộ phim này sẽ "mở đường" cho nữ diễn viên Hayley
                      Atwell xuất hiện trở lại trong bom tấn Doctor Strange 2 .
                    </p>
                    <p>
                      <strong>What If...?</strong> chính thức ra mắt từ ngày
                      11/8 sắp tới.
                    </p>
                    <p>Nguồn ảnh: Marvel</p>
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
