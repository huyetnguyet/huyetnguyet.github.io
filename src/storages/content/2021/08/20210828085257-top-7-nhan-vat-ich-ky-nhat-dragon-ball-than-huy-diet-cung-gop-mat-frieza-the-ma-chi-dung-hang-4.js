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
"timestamp": '28/08/2021 08:52 AM',
"title": 'Top 7 nhân vật ích kỷ nhất Dragon Ball, Thần Hủy Diệt cũng góp mặt, Frieza thế mà chỉ đứng hạng 4',
"description": 'Tuyến nhân vật trong Dragon Ball rất đang dạng, bên cạnh những anh hùng luôn hết mình bảo vệ trái đất cũng có nhiều cá nhân bị thúc đẩy bởi lòng tham và sự ích kỷ của bản thân.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/28/photo-1-16301371086941660807152.jpg',
"alt": 'BABY,DRAGON BALL,ZAMASU,ĐỘI TRƯỞNG GINYU,FRIEZA,KID BUU,',
"category": 'games',
"date": '28/08/2021',
"time": '08:52 AM',
"link": '/top-7-nhan-vat-ich-ky-nhat-dragon-ball-than-huy-diet-cung-gop-mat-frieza-the-ma-chi-dung-hang-4',
"zcomponent": 'page_20210828085257',
"filepath": './20210828085257-top-7-nhan-vat-ich-ky-nhat-dragon-ball-than-huy-diet-cung-gop-mat-frieza-the-ma-chi-dung-hang-4.js'
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
  "Top 7 nhân vật ích kỷ nhất Dragon Ball, Thần Hủy Diệt cũng góp mặt, Frieza thế mà chỉ đứng hạng 4";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "28/08/2021 08:52 AM";
const description =
  "Tuyến nhân vật trong Dragon Ball rất đang dạng, bên cạnh những anh hùng luôn hết mình bảo vệ trái đất cũng có nhiều cá nhân bị thúc đẩy bởi lòng tham và sự ích kỷ của bản thân.";
const link =
  "top-7-nhan-vat-ich-ky-nhat-dragon-ball-than-huy-diet-cung-gop-mat-frieza-the-ma-chi-dung-hang-4";
const tagparam = [
  "BABY",
  "DRAGON BALL",
  "ZAMASU",
  "ĐỘI TRƯỞNG GINYU",
  "FRIEZA",
  "KID BUU",
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

export default function page_20210828085257() {
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
                    <h5>1. Baby</h5>
                    <p>
                      Toàn bộ sự tồn tại của <strong>Baby</strong> được dành để
                      chiếm đoạt mọi người hắn có một tâm địa ác độc và nếu
                      không được kiểm soát, Baby có thể khiến cả một hành tinh
                      tuân theo mệnh lệnh của mình. Trong{" "}
                      <strong>Dragon Ball</strong> GT, Baby đã từng hợp thể với
                      hầu hết mọi người trên Trái Đất, và trong số đó thì đáng
                      kể nhất có lẽ chính là dạng hợp thể với Vegeta, tạo ra một
                      vài sự thay đổi trên cơ thể của anh chàng này và cũng đặt
                      cơ thể Vegeta dưới sự điều khiển của hắn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/28/photo-1-16301371086941660807152.jpg"
                      alt="1, BABY,DRAGON BALL,ZAMASU,ĐỘI TRƯỞNG GINYU,FRIEZA,KID BUU,"
                      note=""
                    />

                    <p>
                      Đây được coi là dạng hợp thể tốt nhất mà{" "}
                      <strong>Baby</strong> có được để đấu lại Goku. Bởi so với
                      tất cả các nhân vật thì có lẽ chỉ có mỗi Vegeta là đủ sức
                      đuổi kịp với Goku mà thôi. Thậm chí, mối đe dọa đến từ
                      Baby Vegeta đã trở nên đáng sợ đến mức một số nhân vật
                      khác cần phải can thiệp và thể hiện những gì họ có thể làm
                      để ngăn cản.
                    </p>
                    <h5>2. Zamasu</h5>
                    <p>
                      <strong>Zamasu</strong> là một nhân vật phản diện nổi bật
                      của series <strong>Dragon Ball</strong> Super với sức mạnh
                      bá đạo cùng tư tưởng không giống ai. Zamasu vốn là người
                      học việc cũ của Kaioshin vũ trụ 10, trước đó hắn là Bắc
                      Kaio. Zamasu ban đầu là 1 người điềm tĩnh nhưng luôn coi
                      thường con người, coi họ là loài hạ đẳng thấp kém.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/28/photo-1-16301374779651576093814.jpg"
                      alt="2, BABY,DRAGON BALL,ZAMASU,ĐỘI TRƯỞNG GINYU,FRIEZA,KID BUU,"
                      note=""
                    />

                    <p>
                      Có điều, sau khi gặp Goku thái độ và tính cách của{" "}
                      <strong>Zamasu</strong> có sự thay đổi rõ rệt theo chiều
                      hướng xấu. Hắn cho rằng một con người bình thường như Goku
                      lại dám khiêu chiến với 1 vị thần là điều xúc phạm ghê
                      gớm. Hơn nữa, một con người lại đạt được sức mạnh lớn như
                      vậy là điều không thể chấp nhận. Sau khi biết được bí mật
                      về ngọc rồng siêu cấp qua Zuno, Zamasu đã nung nấu và thực
                      hiện ý đồ tiêu diệt loài người.
                    </p>
                    <h5>3. Đội trưởng Ginyu</h5>
                    <p>
                      Sự xuất hiện của đội Ginyu là 1 trong những cảnh kinh điển
                      của <strong>Dragon Ball</strong>. Vào lúc đó, một nhân vật
                      mạnh như Vegeta cũng còn phải e sợ đội Ginyu làm cho người
                      xem nghĩ rằng, chắc hẳn những kẻ này phải thực sự nguy
                      hiểm nên mới hoàng tử Saiyan sợ thế. Tuy nhiên sự xuất
                      hiện của chúng chẳng khác gì trò cười cả. Cả đội Ginyu làm
                      dáng chẳng khác gì diễn hài, và thậm chí còn làm đi làm
                      lại liên tục, khiến cho người xem cảm thấy ngớ ngẩn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/28/photo-1-1630137819198490338339.jpg"
                      alt="3, BABY,DRAGON BALL,ZAMASU,ĐỘI TRƯỞNG GINYU,FRIEZA,KID BUU,"
                      note=""
                    />

                    <p>
                      Tuy nhiên, <strong>đội trưởng Ginyu</strong> có một kỹ
                      năng đặc biệt là hoán đổi thân xác với kẻ khác. Hắn đã
                      dùng kỹ năng này với Goku, nhưng cuối cùng đã thua trận vì
                      không biết dùng kỹ năng Kaio-ken. Theo cuốn sách{" "}
                      <strong>Dragon Ball</strong> Z: Super Saiya Densetsu,
                      Ginyu đã từng hoán đổi tâm trí với đứa nhóc giàu có nhất
                      lớp để thu hút con gái.
                    </p>
                    <h5>4. Frieza</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/28/photo-1-1630138009386713958021.jpg"
                      alt="4, BABY,DRAGON BALL,ZAMASU,ĐỘI TRƯỞNG GINYU,FRIEZA,KID BUU,"
                      note=""
                    />

                    <p>
                      <strong>Dragon Ball</strong> đã tạo ra vô số những nhân
                      vật phản diện kiêu ngạo, hung hăng và không kém phần bố
                      đời. Nhưng <strong>Frieza</strong> chính là phản diện ấn
                      tượng nhất và bền bỉ nhất của Dragon Ball. Kể cả khi được
                      hồi sinh sau khi đã chết vài lần, hắn ta cũng không từ bỏ
                      tham vọng của mình mà thậm chí còn nguy hiểm hơn lúc
                      trước.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Ngoài chỉ số sức mạnh vũ trụ cao nhất vào thời điểm mà hắn
                      xuất hiện (530.000) cùng khả năng biến hình,{" "}
                      <strong>Frieza</strong> còn được biết đến như một nhân vật
                      phản diện tàn nhẫn và hiểm độc nhất vũ trụ khi chính hắn
                      là kẻ đã diệt chủng dân tộc Saiyan.
                    </p>
                    <h5>5. Kid Buu</h5>
                    <p>
                      <strong>Kid Buu</strong> là nguyên dạng ban đầu của Buu.
                      Hắn là một cỗ máy chỉ biết giết chóc, tàn sát không chút
                      nhân tính. Buu đã hủy diệt nhiều thế giới dưới mệnh lệnh
                      của Bibidi. Dưới hình dạng này, Buu tiêu diệt 4 Đại Thần
                      Tối Cao của vũ trụ, chỉ một người trong số đó trốn thoát
                      được. Có thể nói, Kid Buu chính là nguyên mẫu đáng sợ nhất
                      của Majin Buu.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/28/photo-1-163013882840925124655.jpg"
                      alt="5, BABY,DRAGON BALL,ZAMASU,ĐỘI TRƯỞNG GINYU,FRIEZA,KID BUU,"
                      note=""
                    />

                    <p>
                      May mắn là trong quá khứ <strong>Kid Buu</strong> chưa bao
                      giờ giải phóng toàn bộ sức mạnh của mình, bởi vì anh ta
                      không bao giờ nghĩ sẽ khám phá các cấp độ sức mạnh của bản
                      thân trước khi chết dưới tay Goku.
                    </p>
                    <h5>6. Thần hủy diệt Beerus</h5>
                    <p>
                      Beerus là Thần hủy diệt của vũ trụ thứ 7 trong số 12 vũ
                      trụ <strong>Dragon Ball</strong>. Đúng như tên gọi, ông ta
                      được giao trách nhiệm phá hủy các hành tinh để lấy lại cân
                      bằng vũ trụ. Tuy có tính cách vui tươi và lịch sự, nhưng
                      nhân vật này vô cùng đáng sợ khi hắn đang phẫn nộ hoặc
                      buồn chán. Beerus từng phá hủy cả nửa hành tinh chỉ vì họ
                      phục vụ hắn… món ăn quá nhiều mỡ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/28/photo-1-1630139004774771501756.jpg"
                      alt="6, BABY,DRAGON BALL,ZAMASU,ĐỘI TRƯỞNG GINYU,FRIEZA,KID BUU,"
                      note=""
                    />

                    <p>
                      Rất may, sự ích kỷ của Beerus thường tập trung nhất vào
                      thức ăn nếu không thì ông thần này thật khó lường.
                    </p>
                    <h5>7. Dolltaki</h5>
                    <p>
                      Master Dolltaki là thủ lĩnh của Giáo phái Luud, nhưng trên
                      thực tế, anh ta chỉ là một cậu bé được nuôi dưỡng bởi Tiến
                      sĩ Myuu và được thuê để đưa Luud hoàn thành bằng cách lừa
                      mọi người tôn thờ anh ta.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/28/dragon-ball-gt-dolltaki-with-pan-doll-16301394045081382183364.jpg"
                      alt="7, BABY,DRAGON BALL,ZAMASU,ĐỘI TRƯỞNG GINYU,FRIEZA,KID BUU,"
                      note=""
                    />

                    <p>
                      Dolltaki đã sử dụng sức mạnh của Luud để biến các cá nhân
                      thành búp bê - thứ đồ chơi tiêu khiển cho hắn ta. Dolltaki
                      không quan tâm đến số phận của những người bị biến thành
                      búp bê vì những thú vui bệnh hoạn của mình.
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
