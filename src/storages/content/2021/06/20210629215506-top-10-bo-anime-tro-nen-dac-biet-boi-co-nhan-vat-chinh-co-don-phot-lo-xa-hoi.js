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
"timestamp": '29/06/2021 09:55 PM',
"title": 'Top 10 bộ anime trở nên đặc biệt bởi có nhân vật chính cô đơn, phớt lờ xã hội',
"description": 'Liệu bạn có yêu thích những nhân vật chính anime kiểu này không?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/photo-1-1624774703038458926019.jpg',
"alt": 'KUROKI TOMOKO,ANIME,NHÂN VẬT CHÍNH CÔ ĐƠN,SAIKI KUSUO NO PSI-NAN,SAIKI KUSUO,HANDA-KUN,GOBLIN SLAYER,HYOUKA,',
"category": 'games',
"date": '29/06/2021',
"time": '09:55 PM',
"link": '/top-10-bo-anime-tro-nen-dac-biet-boi-co-nhan-vat-chinh-co-don-phot-lo-xa-hoi',
"zcomponent": 'page_20210629215506',
"filepath": './20210629215506-top-10-bo-anime-tro-nen-dac-biet-boi-co-nhan-vat-chinh-co-don-phot-lo-xa-hoi.js'
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
  "Top 10 bộ anime trở nên đặc biệt bởi có nhân vật chính cô đơn, phớt lờ xã hội";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/06/2021 09:55 PM";
const description =
  "Liệu bạn có yêu thích những nhân vật chính anime kiểu này không?";
const link =
  "top-10-bo-anime-tro-nen-dac-biet-boi-co-nhan-vat-chinh-co-don-phot-lo-xa-hoi";
const tagparam = [
  "KUROKI TOMOKO",
  "ANIME",
  "NHÂN VẬT CHÍNH CÔ ĐƠN",
  "SAIKI KUSUO NO PSI-NAN",
  "SAIKI KUSUO",
  "HANDA-KUN",
  "GOBLIN SLAYER",
  "HYOUKA",
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

export default function page_20210629215506() {
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
                    Không phải tất cả các nhân vật chính trong thế giới{" "}
                    <strong>anime</strong> đều có một cuộc sống ồn ào hay được
                    nhiều người vây quanh. Cũng có những bộ anime với một nhân
                    vật chính cô độc và sống trầm lặng.
                  </p>
                  <p>Dưới đây là những trường hợp như vậy:</p>
                  <h5>
                    1. Hikigaya Hachiman - Yahari Ore no Seishun Love Come wa
                    Machigatteiru
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/photo-1-1624774703038458926019.jpg"
                    alt="1, KUROKI TOMOKO,ANIME,NHÂN VẬT CHÍNH CÔ ĐƠN,SAIKI KUSUO NO PSI-NAN,SAIKI KUSUO,HANDA-KUN,GOBLIN SLAYER,HYOUKA,"
                    note=""
                  />
                  <p>
                    Hikigaya Hachiman là một người cô độc với cái nhìn tồi tệ về
                    tuổi trẻ và tương lai sau khi học trung học. Tuy nhiên, cuộc
                    sống của anh ấy đã thay đổi sau khi học cách hiểu người
                    khác.
                  </p>
                  <h5>2. Tatsuhiro Satou - Welcome to the NHK</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/photo-1-16247747046391101407635.jpg"
                    alt="2, KUROKI TOMOKO,ANIME,NHÂN VẬT CHÍNH CÔ ĐƠN,SAIKI KUSUO NO PSI-NAN,SAIKI KUSUO,HANDA-KUN,GOBLIN SLAYER,HYOUKA,"
                    note=""
                  />
                  <p>
                    Sato Tatsuhiro, hai mươi hai tuổi, có bốn năm làm
                    hikikomori, thất nghiệp, chìm đắm trong thế giới ảo. Nhân
                    vật chính được miêu tả là thảm hại và bất lực. Sato cho rằng
                    bi kịch của cậu là do âm mưu của lũ N.H.K – Nippon
                    Hikikomori Kyokai (Hiệp hội Hikikomori Nhật Bản), cậu muốn
                    lật đổ chúng, nhưng những chuyện cậu làm chỉ có thể là ngủ,
                    dằn vặt, dùng thuốc để đánh lừa bản thân rằng mình vẫn ổn.
                    Cuộc đời của cậu chắc sẽ tiếp tục trôi qua vô định như thế,
                    trong bức bối, tuyệt vọng, và ảo giác nhờ Thuốc Trắng nếu cô
                    gái truyền đạo kỳ lạ Misaki không xuất hiện.
                  </p>
                  <h5>3. Shinji Ikari - Neon Genesis Evangelion</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/photo-2-1624774704677292073488.jpg"
                    alt="3, KUROKI TOMOKO,ANIME,NHÂN VẬT CHÍNH CÔ ĐƠN,SAIKI KUSUO NO PSI-NAN,SAIKI KUSUO,HANDA-KUN,GOBLIN SLAYER,HYOUKA,"
                    note=""
                  />
                  <p>
                    Shinji là một kẻ cô độc. Nếu số phận không hướng cậu sang 1
                    ngã rẽ đầy bất ngờ, Shinji có thể sẽ dành cuộc đời mình như
                    một nhân vật không nổi bật cho đến khi nằm xuống. Thật không
                    may, Shinji là con trai của Gendo Ikari và bị buộc phải điều
                    khiển một con rô bốt, mặc dù cậu ấy có vẻ không sẵn sàng về
                    mặt tinh thần lẫn trách nhiệm.{" "}
                  </p>
                  <h5>4. Itoshiki Nozomu - Sayonara Zetsubou Sensei</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/photo-3-16247747051521022590943.jpg"
                    alt="4, KUROKI TOMOKO,ANIME,NHÂN VẬT CHÍNH CÔ ĐƠN,SAIKI KUSUO NO PSI-NAN,SAIKI KUSUO,HANDA-KUN,GOBLIN SLAYER,HYOUKA,"
                    note=""
                  />
                  <p>
                    Là một giáo viên đau buồn và có lịch sử tự sát hụt nhiều
                    lần, chẳng ai nghĩ Itoshiki Nozomu sẽ là một người thầy tốt.
                    Tuy nhiên, chính quan điểm nhìn nhận khác biệt hoàn toàn
                    người khác đã giúp Nozomu đưa ra những lời khuyên bảo độc
                    nhất vô nhị cho học sinh của mình.
                  </p>
                  <h5>5. Oreki Houtarou - Hyouka</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/photo-4-1624774705673847421830.jpg"
                    alt="5, KUROKI TOMOKO,ANIME,NHÂN VẬT CHÍNH CÔ ĐƠN,SAIKI KUSUO NO PSI-NAN,SAIKI KUSUO,HANDA-KUN,GOBLIN SLAYER,HYOUKA,"
                    note=""
                  />
                  <p>
                    Oreki là nhân vật chính của <strong>Hyouka</strong>, là một
                    nam sinh với triết lý sống "Nếu không phải là việc của mình
                    thì sẽ không làm. Nhưng một khi đã làm thì phải kết thúc
                    thật nhanh gọn". Oreki Houtaro không thích bị quấy rầy, đặc
                    biệt là với những câu đố tò mò của Chitanda Eru, nhưng cậu
                    ta lại không thể phớt lờ cô ấy. Dưới những tác động của Eru
                    đối với cuộc sống mình, cậu dần nhận ra rằng mình đang dần
                    trở lại với cuộc sống của một học sinh cao trung.
                  </p>
                  <RelationNewsInPage category={category} />
                  <h5>
                    6. <strong>Goblin Slayer</strong> - Goblin Slayer
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/photo-5-16247747047401953422306.jpg"
                    alt="6, KUROKI TOMOKO,ANIME,NHÂN VẬT CHÍNH CÔ ĐƠN,SAIKI KUSUO NO PSI-NAN,SAIKI KUSUO,HANDA-KUN,GOBLIN SLAYER,HYOUKA,"
                    note=""
                  />
                  <p>
                    <strong>Goblin Slayer</strong> là một người đàn ông chứa đầy
                    lòng báo thù với tộc yêu tinh đã phá hủy cuộc sống của anh
                    ta khi còn nhỏ. Mặc dù thu hút rất nhiều phụ nữ nhưng Goblin
                    Slayer cho đến nay vẫn chỉ hoàn toàn tập trung vào sứ mệnh
                    tàn sát yêu tinh của mình.{" "}
                  </p>
                  <h5>7. Seishuu Handa - Handa-kun</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/photo-6-1624774706278115003432.jpg"
                    alt="7, KUROKI TOMOKO,ANIME,NHÂN VẬT CHÍNH CÔ ĐƠN,SAIKI KUSUO NO PSI-NAN,SAIKI KUSUO,HANDA-KUN,GOBLIN SLAYER,HYOUKA,"
                    note=""
                  />
                  <p>
                    Trước khi trở thành một nhà thư pháp dày dặn kinh nghiệm,
                    Handa là một học sinh trung học đơn độc và khó gần. Tác phẩm
                    đề cập đến những thăng trầm vui nhộn trong cuộc đời trung
                    học của Seishuu Handa
                  </p>
                  <h5>
                    8. <strong>Saiki Kusuo</strong> - Saiki Kusuo no PSI-nan
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/photo-7-16247747057211785294412.jpg"
                    alt="8, KUROKI TOMOKO,ANIME,NHÂN VẬT CHÍNH CÔ ĐƠN,SAIKI KUSUO NO PSI-NAN,SAIKI KUSUO,HANDA-KUN,GOBLIN SLAYER,HYOUKA,"
                    note=""
                  />
                  <p>
                    <strong>Saiki Kusuo</strong> là một học sinh trung học,
                    người được sinh ra có siêu năng lực đặc biệt có thể kể đến
                    như niệm lực và dịch chuyển tức thời. Với siêu năng lực của
                    mình, Saiki không bao giờ mở miệng ra nói chuyện vì cậu có
                    thể dùng thần giao cách cảm để nói chuyện với người khác.
                    Saiki cho rằng mình là người bất hạnh nhất thế giới vì đã sở
                    hữu năng lực khủng này khiến cho cuộc sống cậu không còn gì
                    hấp dẫn và đáng ngạc nhiên nữa. Với khả năng "bá đạo" của
                    mình, Saiki dường như không hứng thú với bất cứ thứ gì (như
                    tiệc tùng, chuyện yêu đương, chuyện bói toán...).
                  </p>
                  <h5>
                    9. <strong>Kuroki Tomoko</strong> - No Matter How I Look At
                    It, It's You Guys Fault I'm Not Popular!
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/photo-8-16247747052381702001327.jpg"
                    alt="9, KUROKI TOMOKO,ANIME,NHÂN VẬT CHÍNH CÔ ĐƠN,SAIKI KUSUO NO PSI-NAN,SAIKI KUSUO,HANDA-KUN,GOBLIN SLAYER,HYOUKA,"
                    note=""
                  />
                  <p>
                    <strong>Kuroki Tomoko</strong> một cô nàng có 50 năm kinh
                    nghiệm sống mô phỏng ở trường trung học và đã từng hẹn hò
                    với 100 chàng trai ảo trong game. Tomoko Kuroki tin rằng cô
                    đã sẵn sàng chinh phục năm đầu tiên ở trường trung học.
                    Nhưng cuộc sống không như mơ, Tomoko là một cô gái trẻ sống
                    nội tâm và vụng về, và chính cô là người duy nhất không nhận
                    ra điều đó!
                  </p>
                  <h5>10. Nishijou Takumi - ChäoS; HEAd</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/27/photo-9-1624774704772976788477.jpg"
                    alt="10, KUROKI TOMOKO,ANIME,NHÂN VẬT CHÍNH CÔ ĐƠN,SAIKI KUSUO NO PSI-NAN,SAIKI KUSUO,HANDA-KUN,GOBLIN SLAYER,HYOUKA,"
                    note=""
                  />
                  <p>
                    Nishijou Takumi, một game thủ và cũng là một otaku, thường
                    xuyên dành cả ngày tự nhốt mình trong căn nhà container của
                    cậu, thời gian duy nhất cậu bước ra ngoài là khi mua đồ và
                    đến lớp theo lịch học tối thiểu của mình, vừa đủ để không bị
                    ở lại lớp. Thế nhưng tại nơi cậu sống, Shibuya bỗng diễn ra
                    một chuỗi giết người hàng loạt làm xôn xao dự luận và không
                    biết tự lúc nào cậu nhận ra bản thân mình cũng bị kéo vào
                    chuỗi vụ án này, hé lộ những bí ẩn và một âm mưu to lớn đằng
                    sau nó.
                  </p>
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
