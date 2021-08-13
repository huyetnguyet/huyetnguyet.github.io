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
"timestamp": '13/08/2021 09:29 AM',
"title": 'Dragon Ball Super: Đều thuộc cấp độ Thần, thế nhưng Ultra Instinct hay Hakai kỹ thuật nào mạnh hơn?',
"description": 'Trước đó trong chapter 71 của Dragon Ball Super chúng ta đã thấy Beerus và Whis đang cạnh tranh với nhau, nhằm chứng minh Ultra Instinct hay Hakai mạnh hơn. Và đến bây giờ chúng ta tiếp tục thấy cuộc chiến giữa Goku và Vegeta cũng về vấn đề này.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/anh-1-16287495909931430819453.jpg',
"alt": 'DRAGON BALL SUPER,GOKU VS VEGETA,ULTRA INSTINCT,BẢN NĂNG VÔ CỰC,HAKAI,THẦN HỦY DIỆT,THIÊN SỨ,',
"category": 'games',
"date": '13/08/2021',
"time": '09:29 AM',
"link": '/dragon-ball-super-deu-thuoc-cap-do-than-the-nhung-ultra-instinct-hay-hakai-ky-thuat-nao-manh-hon',
"zcomponent": 'page_20210813092908',
"filepath": './20210813092908-dragon-ball-super-deu-thuoc-cap-do-than-the-nhung-ultra-instinct-hay-hakai-ky-thuat-nao-manh-hon.js'
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
  "Dragon Ball Super: Đều thuộc cấp độ Thần, thế nhưng Ultra Instinct hay Hakai kỹ thuật nào mạnh hơn?";
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "13/08/2021 09:29 AM";
const description =
  "Trước đó trong chapter 71 của Dragon Ball Super chúng ta đã thấy Beerus và Whis đang cạnh tranh với nhau, nhằm chứng minh Ultra Instinct hay Hakai mạnh hơn. Và đến bây giờ chúng ta tiếp tục thấy cuộc chiến giữa Goku và Vegeta cũng về vấn đề này.";
const link =
  "dragon-ball-super-deu-thuoc-cap-do-than-the-nhung-ultra-instinct-hay-hakai-ky-thuat-nao-manh-hon";
const tagparam = [
  "DRAGON BALL SUPER",
  "GOKU VS VEGETA",
  "ULTRA INSTINCT",
  "BẢN NĂNG VÔ CỰC",
  "HAKAI",
  "THẦN HỦY DIỆT",
  "THIÊN SỨ",
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

export default function page_20210813092908() {
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
                      Trong suốt hành trình câu chuyện 7 viên ngọc rồng, không
                      khó để nhận ra rằng Goku và Vegeta chính là 2 nhân vật
                      mạnh nhất trong truyện. Luôn có sự so sánh giữa 2 chiến
                      binh Saiyan này, và chính sự cạnh tranh đã giúp họ ngày
                      càng trở nên mạnh mẽ hơn. Cho đến{" "}
                      <strong>Dragon Ball Super</strong> thì Goku và Vegeta đã
                      mạnh hơn rất nhiều và dường như cả 2 đang tiếp cận được
                      đến sức mạnh của các vị Thần.
                    </p>
                    <p>
                      Cụ thể Goku đang luyện tập để thành thạo{" "}
                      <strong>Ultra Instinct</strong> với Whis thì Vegeta lại
                      thực hành <strong>Hakai</strong> dưới sự hướng dẫn của
                      Beerus. Đây đều là những kỹ thuật của Thần, vậy câu hỏi
                      đặt ra là cái nào mạnh hơn?
                    </p>
                    <h5>Ultra Instict của Goku</h5>
                    <p>
                      <strong>Ultra Instinct</strong> là một kỹ thuật được dùng
                      bởi các <strong>Thiên Sứ</strong>, nó cho phép cơ thể di
                      chuyển và chiến đấu độc lập với suy nghĩ và cảm xúc. Trạng
                      thái này cho phép người sử dụng di chuyển nhanh hơn, tránh
                      các đòn tấn công và ra đòn quyết định hơn. Kỹ thuật này
                      được Whis nhắc đến nhiều lần trong anime và manga{" "}
                      <strong>Dragon Ball Super</strong>, ông đã dạy nó cho cả
                      Beerus, Goku và Vegeta. Thế nhưng để đạt được khả năng này
                      cần một trái tim bình tĩnh đó là lý do tại sao nó phù hợp
                      với Goku hơn Vegeta.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/anh-1-16287495909931430819453.jpg"
                      alt="1, DRAGON BALL SUPER,GOKU VS VEGETA,ULTRA INSTINCT,BẢN NĂNG VÔ CỰC,HAKAI,THẦN HỦY DIỆT,THIÊN SỨ,"
                      note=""
                    />
                    <p>
                      Như chúng ta cũng biết Whis luôn ở trong trạng thái{" "}
                      <strong>Ultra Instinct</strong>, còn Goku thì không. Điều
                      này cho thấy sức mạnh của Goku còn khá yếu so với các{" "}
                      <strong>Thiên Sứ</strong>, vì thế anh không thể phát huy
                      hết sức mạnh của trạng thái này vì bản thân cần phải thay
                      đổi hình dạng. Do đó, Whis đã hướng dẫn cho Goku sử dụng
                      Ultra Instinct ở trạng thái bình thường. Bằng cách này,
                      Goku sẽ thoát khỏi tình trạng chịu tác dụng phụ của việc
                      hao mòn thể lực từ các hình dạng Super Saiyan. Whis nói
                      rằng Goku nên sử dụng trạng thái này như là một phương án
                      cuối cùng khi trong một trận chiến yêu cầu anh vượt quá
                      giới hạn bản thân.
                    </p>
                    <h5>
                      <strong>Hakai</strong> của Vegeta
                    </h5>
                    <p>
                      <strong>Hakai</strong> là chiêu thức mạnh mẽ được sử dụng
                      đặc trưng bởi các <strong>Thần Hủy Diệt</strong>. Đây là
                      loại sức mạnh vô cùng đặc biệt, nó có sức mạnh để tiêu
                      diệt hầu như bất cứ điều gì với ít nỗ lực, thậm chí cả
                      những con vật vô hình như linh hồn. Nhưng người bị phá hủy
                      bởi Hakai không đi đến thế giới khác và chỉ đơn giản là
                      chấm dứt tồn tại.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/anh-2-1628749591006462818624.jpg"
                      alt="2, DRAGON BALL SUPER,GOKU VS VEGETA,ULTRA INSTINCT,BẢN NĂNG VÔ CỰC,HAKAI,THẦN HỦY DIỆT,THIÊN SỨ,"
                      note=""
                    />
                    <p>
                      Về bản chất <strong>Hakai</strong> là như thế nhưng trong
                      manga <strong>Thần Hủy Diệt</strong> Beerus đã từng thừa
                      nhận rằng Hakai không thể tiêu diệt những sinh vật bất tử.
                      Khi một thứ gì đó bị xóa sổ bởi Hakai thì một nguồn năng
                      lượng khổng lồ sẽ được giải phóng. Cụ thể khi một thứ gì
                      đó bị phá hủy bằng cách này, nó sẽ giải phóng một lượng
                      lớn năng lượng. Đặc biệt để sử dụng Hakai đúng cách thì
                      tâm trí của kẻ sử dụng phải luôn trong tình trạng bất ổn,
                      vì thế nó hợp với Vegeta hơn là Goku.
                    </p>

                    <h5>
                      <strong>Ultra Instinct</strong> với <strong>Hakai</strong>
                      , kỹ thuật nào mạnh hơn?
                    </h5>
                    <p>
                      Một trong những điều tuyệt vời nhất mà series{" "}
                      <strong>Dragon Ball Super</strong> đã làm cho nhân vật
                      Vegeta là nâng tầm sức mạnh của anh ngang hàng với Goku.
                      Giải đấu Sức mạnh là dấu hiệu đầu tiên cho thấy hoàng tử
                      Saiyan cuối cùng đã bắt đầu cuộc hành trình của riêng
                      mình, khi tuyên bố rằng Goku có thể giữ{" "}
                      <strong>Bản năng Vô cực</strong> và anh sẽ tìm thấy sức
                      mạnh của riêng mình. Sau đó, anh đã đạt được một cấp độ
                      Super Saiyan Blue mới, mạnh mẽ hơn mà Goku vẫn chưa bao
                      giờ đạt tới. Và mới đây anh lại tiếp tục làm được điều đó
                      khi chứng minh bản thân đang dần đạt được sức mạnh của
                      Thần.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Và việc so sánh <strong>Ultra Instinct</strong> với{" "}
                      <strong>Hakai</strong>, cũng là một cách xác định xem Goku
                      và Vegeta ai có tiềm năng lớn hơn. Cũng như việc Beerus
                      nhận Vegeta làm học trò để chứng minh rằng Hakai là kỹ
                      thuật mạnh mẽ. Còn Whis huấn luyện Ultra Instinct cho
                      Goku, như một cách chấp nhận lời thách thức của Beerus.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/anh-3-1628749591021425554105.png"
                      alt="3, DRAGON BALL SUPER,GOKU VS VEGETA,ULTRA INSTINCT,BẢN NĂNG VÔ CỰC,HAKAI,THẦN HỦY DIỆT,THIÊN SỨ,"
                      note=""
                    />
                    <p>
                      Trước đó <strong>Dragon Ball Super</strong> đã tập trung
                      và dành nhiều thời gian hơn vào{" "}
                      <strong>Ultra Instinct</strong>, vì vậy mức sức mạnh của{" "}
                      <strong>Hakai</strong> vẫn chưa được biết tới. Bên cạnh đó
                      việc Whis có thể dễ dàng khiến Beerus bất tỉnh, cũng như
                      việc <strong>Thiên Sứ</strong> mạnh hơn{" "}
                      <strong>Thần Hủy Diệt</strong>, thì đây là một bằng chứng
                      cho thấy Ultra Instinct có thể mạnh hơn Hakai tại thời
                      điểm trước đó. Thế nhưng mới đây với việc Vegeta đạt được
                      một trạng thái mới đối đầu với Granolah thì Hakai được
                      biết đến là một kỹ thuật thật sự đáng sợ. Nếu hoàng tử
                      Saiyan của chúng ta có thể chiến thắng gã chiến binh này
                      trước mặt Goku thì sẽ là minh chứng cho việc Hakai không
                      thua kém gì Ultra Instinct.
                    </p>
                    <p>
                      Vì thế cho đến thời điểm hiện tại chúng ta vẫn phải chờ
                      thêm một thời gian nữa mới có thể chứng minh được kỹ thuật
                      nào mạnh hơn. Và tất cả đều phụ thuộc vào Goku và Vegeta.
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
