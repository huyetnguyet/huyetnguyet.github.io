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
"timestamp": '18/06/2021 12:59 PM',
"title": 'Đây là 10 ý tưởng thú vị về Pokémon mà fan có thể chưa biết, cái tên ban đầu cũng rất cầu kỳ',
"description": 'Trước khi có tên chính thức là Pokémon, bạn có biết thương hiệu này được gọi là gì không?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-1-16239870877751018865523.jpg',
"alt": 'POKÉMON,CAPSULE MONSTERS,POLIWHIRL,GENGAR,PIKACHU,',
"category": 'games',
"date": '18/06/2021',
"time": '12:59 PM',
"link": '/day-la-10-y-tuong-thu-vi-ve-pokemon-ma-fan-co-the-chua-biet-cai-ten-ban-dau-cung-rat-cau-ky',
"zcomponent": 'page_20210618125919',
"filepath": './20210618125919-day-la-10-y-tuong-thu-vi-ve-pokemon-ma-fan-co-the-chua-biet-cai-ten-ban-dau-cung-rat-cau-ky.js'
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
  "Đây là 10 ý tưởng thú vị về Pokémon mà fan có thể chưa biết, cái tên ban đầu cũng rất cầu kỳ";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "18/06/2021 12:59 PM";
const description =
  "Trước khi có tên chính thức là Pokémon, bạn có biết thương hiệu này được gọi là gì không?";
const link =
  "day-la-10-y-tuong-thu-vi-ve-pokemon-ma-fan-co-the-chua-biet-cai-ten-ban-dau-cung-rat-cau-ky";
const tagparam = [
  "POKÉMON",
  "CAPSULE MONSTERS",
  "POLIWHIRL",
  "GENGAR",
  "PIKACHU",
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

export default function page_20210618125919() {
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
                      <strong>Pokémon</strong> là thương hiệu đình đám đã gắn
                      liền với rất nhiều thế hệ từ video game, series anime,
                      phim điện ảnh cho tới đồ chơi ăn theo. Sau nhiều năm phát
                      triển, cái tên đến từ xứ sở mặt trời mọc này đã trở thành
                      một thương hiệu toàn cầu, được nhiều người yêu thích.
                    </p>
                    <p>
                      Tuy nhiên, tất cả những điều to lớn đều bắt đầu từ những
                      gì nhỏ nhặt nhất, bản thân <strong>Pokémon</strong> cũng
                      được phát triển từ những ý tưởng, bản thảo trước. Sau đây
                      cùng xem lại những trang bản thảo về Pokémon mà fan chắc
                      chắn sẽ rất yêu thích.
                    </p>
                    <h3>10. Tên gọi đầu tiên</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-1-16239870877751018865523.jpg"
                      alt="1, POKÉMON,CAPSULE MONSTERS,POLIWHIRL,GENGAR,PIKACHU,"
                      note=""
                    />
                    <p>
                      Trước khi cái tên <strong>Pokémon</strong> ra đời, loạt
                      game này được gọi là "<strong>Capsule Monsters</strong>".
                      Tuy nhiên cái tên này sau đó lại không phù hợp, nên đã
                      được đổi lại thành Pocket Monsters hay Pokémon như ngày
                      nay. Ý tưởng này từ Ken Sugimori muốn cho mọi người cảm
                      thấy tò mò về những gì mà họ cần biết về loạt game này,
                      cũng như tạo hình ban đầu của một vài Pokémon.
                    </p>
                    <h3>9. Poliwhirl</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-1-16239870909361829736745.jpg"
                      alt="2, POKÉMON,CAPSULE MONSTERS,POLIWHIRL,GENGAR,PIKACHU,"
                      note=""
                    />
                    <p>
                      Một trong những điểm thú vị nhất về{" "}
                      <strong>Pokémon</strong> chính là các ý tưởng đầu tiên,
                      khi có nét vẽ mang thiên hướng tạo nên sự rùng rợn nhất
                      định. Và <strong>Poliwhirl</strong> chính là một trong số
                      đó.
                    </p>
                    <p>
                      Ý tưởng đầu tiên cho <strong>Poliwhirl</strong> được vẽ
                      nên bởi Benimaru Ioth, với một nửa cơ thể hiện rõ chi tiết
                      các bộ phận bên trong của <strong>Pokémon</strong> này.
                      Đây là bản thảo cho một trong những thế hệ Pokémon đầu
                      tiên được rất nhiều fan yêu quý.
                    </p>
                    <h3>8. Gengar</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-2-16239870899101793484380.jpg"
                      alt="3, POKÉMON,CAPSULE MONSTERS,POLIWHIRL,GENGAR,PIKACHU,"
                      note=""
                    />
                    <p>
                      Nhắc đến yếu tố rùng rợn cũng phải kể đến ý tưởng dành cho{" "}
                      <strong>Gengar</strong>, một <strong>Pokémon</strong> hệ
                      ma. Ý tưởng này được tạo ra bởi Ken Sugimori, với khung
                      cảnh tăm tối và Gengar xuất hiện ở phía sau nhà huấn luyện
                      Pokémon. Chi tiết này tạo cảm giác như phong cách hù dọa
                      đặc trưng của dòng phim kinh dị.
                    </p>
                    <h3>7. Pikachu</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-3-1623987089393745883104.jpg"
                      alt="4, POKÉMON,CAPSULE MONSTERS,POLIWHIRL,GENGAR,PIKACHU,"
                      note=""
                    />
                    <p>
                      Tiếp theo sẽ là ý tưởng từ Sugimori với{" "}
                      <strong>Pikachu</strong>, biểu tượng của loạt{" "}
                      <strong>Pokémon</strong>. Từ bức hình này cho thấy là
                      Pikachu đang bị buộc lại với một thiết bị đo lường điện
                      năng với mục đích làm thí nghiệm. Thêm một ý tưởng như
                      toát lên nét rùng rợn cho một Pokémon.
                    </p>
                    <h3>6. Ý tưởng về cuộc phiêu lưu</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-4-16239870904271793576583.jpg"
                      alt="5, POKÉMON,CAPSULE MONSTERS,POLIWHIRL,GENGAR,PIKACHU,"
                      note=""
                    />
                    <p>
                      Một ý tưởng khác của Sugimori cho thấy{" "}
                      <strong>Pokémon</strong> là người bạn đồng hành thân thiết
                      với nhà huấn luyện, cùng nhau chu du khắp mọi nơi và tìm
                      hiểu những điều mới lạ. Chính ý tưởng này đã trở thành một
                      trong những yếu tố cốt lõi làm nên loạt Pokémon, từ video
                      game cho tới anime.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Nhà thiết kế của Gamefreak, Matsuda còn từng đề cập rằng
                      "Đầu tiên, nhân vật chính và <strong>Pokémon</strong> có
                      mối quan hệ giữa chủ với thú cưng. Nhưng khi bắt đầu thiết
                      kế trò chơi, chúng tôi đã tự hỏi rằng liệu mình có nên
                      phát triển theo hướng của tình bạn không".
                    </p>
                    <h3>5. Thêm nhiều cuộc phiêu lưu</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/18/photo-1-16239873393891129163590.jpg"
                      alt="6, POKÉMON,CAPSULE MONSTERS,POLIWHIRL,GENGAR,PIKACHU,"
                      note=""
                    />
                    <p>
                      Chuyến phiêu lưu giữa nhà huấn luyện với{" "}
                      <strong>Pokémon</strong> luôn được đề cao và xem như nhân
                      tố quan trọng hình thành nên thương hiệu game này. Và ý
                      tưởng từ Sugimori thể hiện hình ảnh chuyến du hành ở trên
                      biển với thiết kế nguyên bản của Lapras, Pokémon hệ nước
                      và băng.
                    </p>
                    <h3>4. Ý tưởng về trận đấu đầu tiên</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/18/photo-1-1623987341261780770253.jpg"
                      alt="7, POKÉMON,CAPSULE MONSTERS,POLIWHIRL,GENGAR,PIKACHU,"
                      note=""
                    />
                    <p>
                      Nhà thiết kế Ken Sugimori còn giới thiệu tới ý tưởng sơ
                      khai về hệ thống chiến đấu trong loạt game{" "}
                      <strong>Pokémon</strong> và vẫn được áp dụng cho những
                      phần game sau này. Điểm khác biệt là bản thảo này vào thời
                      điểm ban đầu chưa bổ sung thêm thanh máu cho Pokémon.
                    </p>
                    <h3>3. Phiên bản điện ảnh của Torterra</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/18/photo-2-16239873417281372696379.jpg"
                      alt="8, POKÉMON,CAPSULE MONSTERS,POLIWHIRL,GENGAR,PIKACHU,"
                      note=""
                    />
                    <p>
                      Vào năm 2019, phiên bản điện ảnh <strong>Pokémon</strong>:
                      Detective <strong>Pikachu</strong> được chuyển thể từ tựa
                      game cùng tên trên hệ máy Nintendo DS và khá thành công
                      trong thị trường phòng vé. Điều thú vị là bộ phim cũng có
                      một bản thảo về Torterra do RJ Palmer sáng tạo. Tạo hình
                      cho bản điện ảnh đem đến những nét mới cũng như biến
                      Torterra khổng lồ hơn.
                    </p>
                    <h3>2. Charizard và Gyrados</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/18/photo-3-1623987342246414843231.jpg"
                      alt="9, POKÉMON,CAPSULE MONSTERS,POLIWHIRL,GENGAR,PIKACHU,"
                      note=""
                    />
                    <p>
                      RJ Palmer còn đem tới cho <strong>Pokémon</strong>:
                      Detective <strong>Pikachu</strong> một ý tưởng cực kỳ hay
                      là phân cảnh về màn đại chiến giữa Charizard và Gyrados ở
                      trong phim. Đáng tiếc là phân cảnh này đã không được đưa
                      vào trong bộ phim khi ra mắt chính thức. Nhưng fan vẫn có
                      thể hi vọng là màn đối đầu này sẽ xuất hiện trong phần
                      phim tiếp nối.
                    </p>
                    <h3>1. Snorlax phiên bản đầu tiên</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/18/photo-4-1623987330428692846960.jpg"
                      alt="10, POKÉMON,CAPSULE MONSTERS,POLIWHIRL,GENGAR,PIKACHU,"
                      note=""
                    />
                    <p>
                      Snorlax là cái tên không còn quá đỗi xa lạ, đặc biệt với
                      những ai dõi theo các phần phim đầu tiên của loạt anime{" "}
                      <strong>Pokémon</strong>. Nhưng ít ai biết rằng, nguyên
                      bản của Snorlax trong rất khác so với hiện tại.
                    </p>
                    <p>
                      Ý tưởng thiết kế từ Koji Nishino cho thấy, phiên bản này
                      trong nhỏ gọn và đơn giản hơn rất nhiều.
                    </p>
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
