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
"timestamp": '28/08/2021 08:46 AM',
"title": 'Loạt các mỹ nhân 18+ mới nổi đang "leo rank" đáng chú ý trong năm 2021',
"description": 'Các cái tên mới đã thu hút được ít nhiều sự chú ý của fan hâm mộ trong năm 2021 này.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/meisakawakita2244376278807775391992017841227022585023356n-16298845681751525343476.jpg',
"alt": 'MINA KITANO,KANAN AMAMIYA,MEISA KAWAKITA,IDOL,',
"category": 'images',
"date": '28/08/2021',
"time": '08:46 AM',
"link": '/loat-cac-my-nhan-18-moi-noi-dang-leo-rank-dang-chu-y-trong-nam-2021',
"zcomponent": 'page_20210828084607',
"filepath": './20210828084607-loat-cac-my-nhan-18-moi-noi-dang-leo-rank-dang-chu-y-trong-nam-2021.js'
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
  'Loạt các mỹ nhân 18+ mới nổi đang "leo rank" đáng chú ý trong năm 2021';
const author = "DS";
const source = "Pháp luật và bạn đọc";
const timestamp = "28/08/2021 08:46 AM";
const description =
  "Các cái tên mới đã thu hút được ít nhiều sự chú ý của fan hâm mộ trong năm 2021 này.";
const link =
  "loat-cac-my-nhan-18-moi-noi-dang-leo-rank-dang-chu-y-trong-nam-2021";
const tagparam = ["MINA KITANO", "KANAN AMAMIYA", "MEISA KAWAKITA", "IDOL"];
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

export default function page_20210828084607() {
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
                    <h5>1. Meisa Kawakita</h5>
                    <p>
                      <strong>Meisa Kawakita</strong> sinh ngày 21/7/2000, gia
                      nhập ngành giải trí vào tháng 3/2021 với tư cách diễn viên
                      18+ của công ty Faleno. Người đẹp tới từ tỉnh Nagano này
                      sở hữu số đo 85 - 62 - 90 cm, cô nàng được ví von sở hữu
                      thân hình chuẩn chỉ không khác gì siêu mẫu và được coi là
                      một trong những cái tên tiềm năng nhất trong thế hệ sinh
                      năm 2000 của ngành công nghiệp 18+.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/meisakawakita2244376278807775391992017841227022585023356n-16298845681751525343476.jpg"
                      alt="1, MINA KITANO,KANAN AMAMIYA,MEISA KAWAKITA,IDOL,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/asianxgirls1613032333270621654313647838126079221928953n-16298845680631422205722.jpg"
                      alt="2, MINA KITANO,KANAN AMAMIYA,MEISA KAWAKITA,IDOL,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/-1629884522827268850125.jpg"
                      alt="3, MINA KITANO,KANAN AMAMIYA,MEISA KAWAKITA,IDOL,"
                      note=""
                    />

                    <p>
                      Trước đây, người đẹp trẻ tuổi rất yêu thích nấu ăn, và
                      từng có thời gian làm việc trong nhà hàng Pháp tại một
                      khách sạn nổi tiếng ở vùng Kanto. Cô nàng chuyên về các
                      món ăn như bánh mỳ cũng như bánh ngọt. Tuy nhiên, Meisa đã
                      đột ngột rẽ sang nghề mới vì cô nàng muốn trở nên nổi
                      tiếng thay vì làm đấu bếp mãi.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Trước đây, <strong>Meisa Kawakita</strong> là một người
                      rất ngây thơ và trong sáng. Cô gái trẻ đã từng nghĩ rằng
                      chỉ cần hôn bạn trai thôi thì cũng đã dính bầu rồi. Dù
                      vậy, cô nàng cũng đã từng có bạn trai trong thời gian đi
                      học lái xe và làm đầu bếp.{" "}
                    </p>
                    <h5>2. Kanan Amamiya</h5>

                    <p>
                      <strong>Kanan Amamiya</strong> sinh năm 5/8/1996 tại tỉnh
                      Kumamoto, Nhật Bản. Trước đây, cô nàng lấy nghệ danh là
                      Moko Nakagawa và bắt đầu làm việc trong nghề người mẫu áo
                      tắm kể từ năm 2018. Moko đã có ít nhiều thành tích trong
                      nghề người mẫu và từng có thời gian bộ sách ảnh của cô
                      nàng leo lên vị trí top 1 bảng xếp hạng. Dù vậy, đến tháng
                      5/2021, cô gái trẻ quyết định đổi nghệ danh và gia nhập
                      Soft on Demand - một trong những studio 18+ lớn nhất Nhật
                      Bản.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/1806615651335891787515588938809689068217699n-16298844658231977044024.jpg"
                      alt="4, MINA KITANO,KANAN AMAMIYA,MEISA KAWAKITA,IDOL,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/amamiyakanan2002302435077729304804332134895377710956462n-16298844658052061507929.jpg"
                      alt="5, MINA KITANO,KANAN AMAMIYA,MEISA KAWAKITA,IDOL,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/amamiyakanan23465522710131361728773218769265660120821770n-1629884465602713778732.jpg"
                      alt="6, MINA KITANO,KANAN AMAMIYA,MEISA KAWAKITA,IDOL,"
                      note=""
                    />

                    <p>
                      Trước đây, Kanan từng có thời gian nhiều năm học thể dục
                      dụng cụ, nên không có gì quá ngạc nhiên khi cô nàng sở hữu
                      thân hình khá chuẩn chỉ vơi số đo 3 vòng lần lượt là 88 -
                      57 - 86 cm. Dù sở hữu thân hình khá bốc lửa và quyến rũ,
                      nhưng đến năm 19 tuổi cô nàng mới lần đầu tiên có bạn trai
                      và "vượt rào". Tuy nhiên, mọi chuyện không kéo dài bao lâu
                      khi Kanan quyết định tiến vào ngành giải trí và cô quyết
                      định chia tay bạn trai để tập trung cho công việc.{" "}
                    </p>
                    <h5>3. Mina Kitano</h5>
                    <p>
                      <strong>Mina Kitano</strong> sinh ngày 20/5/2000, gia nhập
                      ngành giải trí vào tháng 4/2021 với tư cách diễn viên 18+.
                      Trước khi gia nhập ngành công nghiệp 18+, cô nàng được
                      mệnh danh là nữ phục vụ ăn khách số 1 tại khu Ginza,
                      Tokyo. Dù sở hữu số đo 3 vòng cực kỳ nóng bỏng là 92 - 59
                      - 89 cm, màn trình làng Mina Kitano chỉ được đánh giá là
                      bình thường và không quá thu hút trong khoảng thời gian
                      đầu tiên.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/-1629884312514294188712.jpg"
                      alt="7, MINA KITANO,KANAN AMAMIYA,MEISA KAWAKITA,IDOL,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/25/-16298843930921649859090.jpg"
                      alt="8, MINA KITANO,KANAN AMAMIYA,MEISA KAWAKITA,IDOL,"
                      note=""
                    />

                    <p>
                      Dù vậy, với sức hút của mình, <strong>Mina Kitano</strong>{" "}
                      đã nhanh chóng được công chúng chú ý tới. Cô nàng liên tục
                      có mặt trong các bảng xếp hạng các diễn viên 18+ ăn khách
                      nhất khi luôn có mặt trong top 10. Thậm chí, cô nàng còn
                      đạt tới con số 100 nghìn người theo dõi trên mạng xã hội
                      sau chưa đến 5 tháng hoạt động, một con số mà rất ít những
                      cái tên được đánh giá là khởi đầu chậm chạp có thể mơ tới
                      chứ đừng nói là đạt được.{" "}
                    </p>
                    <p>Bài viết được thực hiện với sự trợ giúp của AV Crush.</p>
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
