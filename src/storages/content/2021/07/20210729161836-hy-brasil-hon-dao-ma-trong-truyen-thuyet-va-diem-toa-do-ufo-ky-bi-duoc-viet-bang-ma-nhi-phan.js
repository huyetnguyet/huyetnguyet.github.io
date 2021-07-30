import React from "react";
import "components/page.css";
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
"title": 'Hy-Brasil: Hòn đảo ma trong truyền thuyết và điểm tọa độ UFO kỳ bí được viết bằng mã nhị phân',
"description": 'Câu chuyện về hòn đảo được lưu truyền khắp châu Âu trong nhiều thế kỷ. Người ta nói rằng hòn đảo là nơi sinh sống của các vị thánh hoặc là một thiên đường nơi có nền văn minh tiên tiến.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/15/binary-code-showing-the-coordinates-of-hy-brasil-1626340762537741265047.jpg',
"alt": 'KHÁM PHÁ,BÍ ẨN,TRUYỀN THUYẾT,',
"category": 'news',
"date": '29/07/2021',
"time": '04:18 PM',
"link": '/hy-brasil-hon-dao-ma-trong-truyen-thuyet-va-diem-toa-do-ufo-ky-bi-duoc-viet-bang-ma-nhi-phan',
"zcomponent": 'page_20210729161836',
"filepath": './20210729161836-hy-brasil-hon-dao-ma-trong-truyen-thuyet-va-diem-toa-do-ufo-ky-bi-duoc-viet-bang-ma-nhi-phan.js'
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
  "Hy-Brasil: Hòn đảo ma trong truyền thuyết và điểm tọa độ UFO kỳ bí được viết bằng mã nhị phân";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:18 PM";
const description =
  "Câu chuyện về hòn đảo được lưu truyền khắp châu Âu trong nhiều thế kỷ. Người ta nói rằng hòn đảo là nơi sinh sống của các vị thánh hoặc là một thiên đường nơi có nền văn minh tiên tiến.";
const link =
  "hy-brasil-hon-dao-ma-trong-truyen-thuyet-va-diem-toa-do-ufo-ky-bi-duoc-viet-bang-ma-nhi-phan";
const tagparam = ["KHÁM PHÁ", "BÍ ẨN", "TRUYỀN THUYẾT"];
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

export default function page_20210729161836() {
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
                <div className="contentBody">
                  <p>
                    Hy-Brasil là hòn đảo <strong>bí ẩn</strong> xuất hiện trên
                    bản đồ từ năm 1325 đến những năm 1800. Trong{" "}
                    <strong>truyền thuyết</strong> Ireland, người ta tin rằng nó
                    bị mây mù bao phủ và chỉ hiện rõ vào một ngày duy nhất theo
                    chu kỳ 7 năm một lần, nhưng ngay cả khi người ta có thể nhìn
                    thấy nó thì cũng không thể đến đó được.
                  </p>
                  <p>
                    Trên hầu hết bản đồ, hòn đảo nằm ở vị trí cách bờ biển phía
                    tây Ireland trên Bắc Băng Dương 321 km (khoảng 200 dặm). Một
                    trong số những đặc điểm địa lý đặc biệt của Hy-Brasil trên
                    bản đồ là nó thường xuất hiện ở dạng một đường vòng với con
                    kênh (hoặc sông) chạy từ đông sang tây.
                  </p>
                  <h5>Những cuộc thám hiểm đi tìm Hy-Brasil</h5>
                  <p>
                    Đảo Hy-Brasil có nhiều tên gọi khác nhau, nó có thể là
                    Bracile hoặc Illa de brasil. Năm 1436, một nhà bản đồ tên là
                    Andrea Bianco vẽ nó trên bản đồ với tên Sola de Brasil.
                  </p>
                  <p>
                    Trong lịch sử, đã từng có nhiều cuộc thám hiểm đi tìm hòn
                    đảo kỳ lạ này. Năm 1480, John Jay Jr. đến từ Bristol, Anh
                    Quốc đã thực hiện chuyến đi kéo dài 2 tháng như không có kết
                    quả. Năm 1481, thêm hai tàu khác là Trinity và George, xuất
                    phát từ Bristol đi tìm Hy-Brasil nhưng vẫn không thành công.
                  </p>
                  <p>
                    Tuy nhiên, năm 1497, nhà ngoại giao người Tây Ban Nha tên là
                    Pedro de Ayala lại báo cáo với vua Tây Ban Nha rằng từng có
                    người tìm ra được hòn đảo này. Gần hai thế kỷ sau, thuyền
                    trưởng người Scotland tên John Nisbet khẳng định đã phát
                    hiện thấy Hy-Brasil trong chuyến hải trình từ Pháp đến
                    Ireland vào năm 1674. Người ta đồn đại rằng ông đã cử 4
                    thuyền viên lên bờ và họ dành cả ngày ở trên đảo.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/15/strange-island-16263405834701693712543.jpg"
                    alt="1, KHÁM PHÁ,BÍ ẨN,TRUYỀN THUYẾT,"
                    note="Hải đồ năm 1473 thể hiện đảo ở hình dạng tròn"
                  />
                  <p>
                    Cũng theo lời kể của thuyền trưởng John Nisbet, các thủy thủ
                    của ông đã gặp được một ông lão thông thái, ông ta cho họ
                    vàng bạc. Kỳ lạ hơn, hòn đảo còn là nơi sinh sống của một
                    loài thỏ đen cỡ lớn và một pháp sư <strong>bí ẩn</strong>,
                    người sống một mình trong lâu đài đá. Theo sau câu chuyện
                    của Nisbet, một thuyền trưởng khác là Alexander Johnson cũng
                    khẳng định đã tìm được Hy-Brasil, xác thực những điều Nisbet{" "}
                    <strong>khám phá</strong>.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/15/hy-brasil-1626340643049212910850.jpg"
                    alt="2, KHÁM PHÁ,BÍ ẨN,TRUYỀN THUYẾT,"
                    note="Theo tưởng tượng của nhiều người, Hy-Brasil sẽ trông như thế này"
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Trong các năm sau đó, nỗ lực tìm kiếm Hy-Brasil không thành,
                    người ta dần loại bỏ hòn đảo ra khỏi các bản đồ. Địa danh
                    này xuất hiện lần cuối trên một bản đồ được vẽ vào năm 1865,
                    với ghi chú đơn giản là rặng đá Brazil. Năm 1872, hai người
                    dân là Robert O’Flaherty và T.J. Westropp tuyên bố đã nhìn
                    thấy hòn đảo ba lần, họ đưa cả gia đình đến chứng kiến tận
                    mắt. Hòn đảo tan biến vào hư vô ngay trước mắt những người
                    này.
                  </p>
                  <h5>
                    <strong>Truyền thuyết</strong> về hòn đảo Hy-Brasil
                  </h5>
                  <p>
                    Có rất nhiều <strong>truyền thuyết</strong> và thần thoại
                    xoay quanh Hy-Brasil. Một vài trong số chúng kể rằng hòn đảo
                    là nhà của các thần trong truyền thuyết Ireland. Số khác lại
                    kể đó là nơi các tu sĩ nắm giữ những hiểu biết cổ đại cho
                    phép xây dựng lên những nền văn minh tân tiến cư trú. Cũng
                    có người nghĩ rằng chuyến hải trình nổi tiếng của St.
                    Brendan đi tìm "Vùng đất hứa" thật ra chính là Hy-Brasil.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/15/nautical-chart-of-western-europe-16263406804952062363760.jpg"
                    alt="3, KHÁM PHÁ,BÍ ẨN,TRUYỀN THUYẾT,"
                    note="Bảng mã nhị phân thể hiện các tọa độ của Hy-Brasil và một số địa danh khác"
                  />
                  <p>
                    Trong cuộc chạm trán với UFO nổi tiếng, thường được gọi là
                    sự cố Rendlesham Forest, một chiếc tàu kỳ lạ được cho là đã
                    hạ cánh bên ngoài căn cứ quân sự của người Mỹ và quân nhân
                    JimPenniston khẳng định đã chạm tay vào con tàu cũng như
                    nhận được 16 trang mã nhị phân bằng thần giao cách cảm. Ngày
                    hôm sau, anh ta viết toàn bộ dãy mã ra giấy và sau đó dãy mã
                    được tiến hành dịch. Dãy mã này liệt kê khá chi tiết tọa độ
                    của Hy-Brasil và địa điểm mà các nhà bản đồ cổ đã vẽ trên
                    bản đồ. Nó cũng đề cập đến nhiều công trình khác như kim tự
                    tháp Giza và Đường Nazca. Dưới cùng của dãy mã, tọa độ
                    Hy-Brasil được liệt kê một lần nữa với năm gốc là 8100.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/15/artistic-representation-hy-brasil-16263407184471793318676.jpg"
                    alt="4, KHÁM PHÁ,BÍ ẨN,TRUYỀN THUYẾT,"
                    note="Bản đồ năm 1570 của châu Âu, hòn đảo Hy-Brasil lại được vẽ ở vị trí khác (phần chân của con ngựa mà Europa cưỡi)"
                  />
                  <p>
                    Tuy ngày nay không còn bản đồ nào ghi nhận Hy-Brasil là một
                    địa danh có thật nữa, song xung quanh nó vẫn còn nhiều{" "}
                    <strong>bí ẩn</strong> mà có lẽ người ta sẽ vẫn phải tranh
                    luận trong thời gian dài.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/15/binary-code-showing-the-coordinates-of-hy-brasil-1626340762537741265047.jpg"
                    alt="5, KHÁM PHÁ,BÍ ẨN,TRUYỀN THUYẾT,"
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/15/map-f-europe-from-1570-1626340822780214032969.jpg"
                    alt="6, KHÁM PHÁ,BÍ ẨN,TRUYỀN THUYẾT,"
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
