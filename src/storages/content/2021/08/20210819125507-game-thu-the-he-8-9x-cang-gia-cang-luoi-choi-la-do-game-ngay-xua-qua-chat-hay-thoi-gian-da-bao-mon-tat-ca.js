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
"timestamp": '19/08/2021 12:55 PM',
"title": 'Game thủ thế hệ 8-9x càng già càng lười chơi: Do game ngày xưa quá chất hay thời gian đã bào mòn tất cả?',
"description": 'Không thể phủ nhận một thực tế rằng, các game thủ thế hệ đầu 8-9x dường như không còn quá hào hứng với các tựa game ngày nay.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-16286774789911054554458.jpg',
"alt": 'GAME THỦ,TIN TỨC GAME,GAME,',
"category": 'games',
"date": '19/08/2021',
"time": '12:55 PM',
"link": '/game-thu-the-he-8-9x-cang-gia-cang-luoi-choi-la-do-game-ngay-xua-qua-chat-hay-thoi-gian-da-bao-mon-tat-ca',
"zcomponent": 'page_20210819125507',
"filepath": './20210819125507-game-thu-the-he-8-9x-cang-gia-cang-luoi-choi-la-do-game-ngay-xua-qua-chat-hay-thoi-gian-da-bao-mon-tat-ca.js'
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
  "Game thủ thế hệ 8-9x càng già càng lười chơi: Do game ngày xưa quá chất hay thời gian đã bào mòn tất cả?";
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 12:55 PM";
const description =
  "Không thể phủ nhận một thực tế rằng, các game thủ thế hệ đầu 8-9x dường như không còn quá hào hứng với các tựa game ngày nay.";
const link =
  "game-thu-the-he-8-9x-cang-gia-cang-luoi-choi-la-do-game-ngay-xua-qua-chat-hay-thoi-gian-da-bao-mon-tat-ca";
const tagparam = ["GAME THỦ", "TIN TỨC GAME", "GAME"];
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

export default function page_20210819125507() {
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
                      Không thể phủ nhận rằng làng <strong>game</strong> Việt
                      đang ngày càng phát triển với sự ra đời của hàng loạt
                      những tựa game có tiếng, mức độ phủ sóng cao như Liên Quân
                      Mobile, Liên Minh Huyền Thoại hay thậm chí là cả Free Fire
                      cũng như Tốc Chiến. Tuy nhiên, không thể phủ nhận một thực
                      tế rằng, lứa <strong>game thủ</strong> thế hệ 8-9x, những
                      người nay cũng đều đã ở vào giai đoạn 26-30 tuổi đang ngày
                      càng hạn chế đam mê cũng như giảm thiểu tối đa thời gian
                      chơi của mình. Phải chăng là do game ngày xưa quá chất tới
                      mức nhớ mãi không quên hay do thời gian đã bào mòn đi sự
                      đam mê của các game thủ.
                    </p>
                    <h5>
                      <strong>Game</strong> ngày xưa quá chất
                    </h5>
                    <p>
                      Đây chắc chắn là một lý do không thể phủ nhận. Khi nhắc
                      tới huyền thoại của làng <strong>game</strong> Việt, nhiều
                      người sẽ chỉ liên tưởng ngay tới MU Online, Kiếm Thế hay
                      Võ Lâm Truyền Kỳ chứ mấy ai dám liệt kê LQMB hay Free Fire
                      vào danh sách này. Quả thật, những cái tên kể trên đã gây
                      được ấn tượng mạnh mẽ, sâu đậm trong tư tưởng của các{" "}
                      <strong>game thủ</strong> thế hệ 8-9x.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-1628677446583112797040.jpg"
                      alt="1, GAME THỦ,TIN TỨC GAME,GAME,"
                      note="Càng trưởng thành, càng có nhiều thứ gọi là trách nhiệm bó buộc đam mê của các game thủ"
                    />
                    <p>
                      Hãy cứ nhìn vào việc mỗi khi có một phiên bản Kiếm Thế, Võ
                      Lâm remake hoặc được chuyển thể lên mobile, số lượng người
                      chơi luôn rất đông đảo, đột biến ở thời điểm đầu với sự
                      tham gia của không ít những{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      lớn tuổi, những người thuộc thế hệ 8-9x và đã quá quen với
                      dòng game cày cuốc truyền thống ở Việt Nam. Và đảo mắt qua
                      để tìm kiếm một tựa game PC "cày cuốc" mang phong cách
                      quen thuộc như thời xưa ở làng game Việt hiện tại thì thật
                      là khó. Quanh đi quẩn lại vẫn chỉ có LQMB hay Free Fire,
                      PUBG Mobile mà thôi.
                    </p>
                    <h5>Không còn lửa như xưa</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-16286774789911054554458.jpg"
                      alt="2, GAME THỦ,TIN TỨC GAME,GAME,"
                      note=""
                    />
                    <p>
                      Những tựa <strong>game</strong> MOBA như LMHT, DOTA 2 hay
                      Liên Quân Mobile có thể coi là phiên bản cải tiến rất
                      nhiều và là những cái tên chất lượng, duy trì độ phủ sóng
                      cao ở thời điểm hiện tại. Thế nhưng chắc chắn, trong con
                      mắt của nhiều người, đôi khi chơi D-DAY, DOTA 1 còn vui
                      hơn.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Cũng dễ lý giải cho sự hồi ức này vì mặc dù những D-DAY,
                      DOTA 1 có vẻ quá lỗi thời thế nhưng ở vào giai đoạn những
                      năm 2007, chúng chính là những "ông hoàng" ở các quán net
                      cỏ. Thời xưa cũng làm gì có giải đấu, có các streamer lên
                      sóng chơi cho chúng ta xem, và bản thân các{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      ngày ấy đôi khi cũng chẳng có nổi một dàn PC ở nhà nữa là.
                      Cái gì càng thiếu thì càng hiếm, càng đáng được trân trọng
                      và đó cũng là lý do vào những năm ấy, DOTA, D-DAY luôn là
                      đấu trường "máu lửa" nhất với các game thủ. Để rồi giờ
                      đây, khi cuộc sống đủ đầy, công nghệ phát triển, người ta
                      mới dần mong muốn tìm lại "ngọn lửa" nhiệt huyết như thời
                      nào.
                    </p>
                    <h5>Thời gian cũng đã bào mòn đi đam mê</h5>
                    <p>
                      26-30 tuổi, giai đoạn mà nhiều{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      của thế hệ 8-9x cũng đã có gia đình, có một cuộc sống ổn
                      định và đôi khi, đam mê dần phải nhường chỗ cho trách
                      nhiệm. Bên cạnh đó, sự ra đời của vô số những nền tảng
                      livestream cũng phần nào giải quyết được những nhu cầu,
                      bức bối của một bộ phận các game thủ "già". Hãy cứ nhìn
                      một số tựa game như AOE II, nhiều người có thể không hay
                      chơi, thậm chí là không biết chơi nhưng vẫn vào xem một
                      cách rất đều đặn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-162867754333434979466.jpg"
                      alt="3, GAME THỦ,TIN TỨC GAME,GAME,"
                      note=""
                    />
                    <p>
                      Kể ra, những người thuộc thế hệ 8-9x có thể coi là lứa{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      đầu tiên của làng game Việt. Và chắc chắn, dù có già đi,
                      thời gian có trôi qua thì đam mê game trong họ vẫn luôn
                      còn, nhưng là được thể hiện qua nhiều cách khác nhau thôi.
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
