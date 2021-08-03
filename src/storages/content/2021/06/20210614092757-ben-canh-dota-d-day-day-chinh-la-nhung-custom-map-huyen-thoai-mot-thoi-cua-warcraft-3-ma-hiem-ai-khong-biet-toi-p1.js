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
"timestamp": '14/06/2021 09:27 AM',
"title": 'Bên cạnh DOTA, D-DAY, đây chính là những custom map huyền thoại một thời của Warcraft 3 mà hiếm ai không biết tới (p1)',
"description": 'Bên cạnh hai cái tên siêu đỉnh ở trên, Warcraft 3 vẫn còn vô số những custom map thú vị khác.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/9/photo-1-16232297806691593115037.jpg',
"alt": 'Game, Game Thu, Tin Tuc Game, Warcraft 3, ',
"category": 'games',
"date": '14/06/2021',
"time": '09:27 AM',
"link": '/ben-canh-dota-d-day-day-chinh-la-nhung-custom-map-huyen-thoai-mot-thoi-cua-warcraft-3-ma-hiem-ai-khong-biet-toi-p1',
"zcomponent": 'page_20210614092757',
"filepath": './20210614092757-ben-canh-dota-d-day-day-chinh-la-nhung-custom-map-huyen-thoai-mot-thoi-cua-warcraft-3-ma-hiem-ai-khong-biet-toi-p1.js'
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
  "Bên cạnh DOTA, D-DAY, đây chính là những custom map huyền thoại một thời của Warcraft 3 mà hiếm ai không biết tới (p1)";
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "14/06/2021 09:27 AM";
const description =
  "Bên cạnh hai cái tên siêu đỉnh ở trên, Warcraft 3 vẫn còn vô số những custom map thú vị khác.";
const link =
  "ben-canh-dota-d-day-day-chinh-la-nhung-custom-map-huyen-thoai-mot-thoi-cua-warcraft-3-ma-hiem-ai-khong-biet-toi-p1";
const tagparam = ["game", "game-thu", "tin-tuc-game", "warcraft-3"];
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

export default function page_20210614092757() {
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
              >
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
                      Ngược quãng thời gian khoảng tầm hơn chục năm về trước,{" "}
                      <strong>Warcraft 3</strong> được coi là một trong những
                      tựa <strong>game</strong> không thể thiếu mà bắt buộc mọi
                      hàng net đều phải có. Đó là thời kỳ của những custom map
                      thịnh hành như D-DAY, Dota Allstar và còn vô số những cái
                      tên nổi tiếng với những phong cách đa dạng khác nhau. Cạnh
                      tranh có, co-op cùng nhau vượt ải cũng có và chắc chắn,
                      thú vị nhất phải là những màn chống cổng siêu kịch tính.
                      Và đó cũng là những custom map mà chắc chắn, tới tận thời
                      điểm hiện tại vẫn còn khá nhiều người phải nhớ tới.
                    </p>
                    <h3>X-Hero Siege</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/9/photo-1-16232297806691593115037.jpg"
                      alt="Game, Game Thu, Tin Tuc Game, Warcraft 3, "
                      note=""
                    />
                    <p>
                      Một tựa <strong>game</strong> chống cổng phong cách điều
                      khiển tướng quen thuộc. Về cơ bản, X-Hero Siege vận hành
                      với cơ chế khá đơn giản khi nhiệm vụ của bạn chỉ là chống
                      lại những đợt quái vật tấn công với độ khó tăng dần theo
                      thời gian. Tuy nhiên, điều này cũng chẳng hề đơn giản và
                      đặc biệt hơn, xen kẽ với đó là những màn tấn công của các
                      tướng địch với bộ kỹ năng khó lường.
                    </p>
                    <p>
                      Ngoài ra, cũng phải nhấn mạnh rằng X-Hero Siege về sau đã
                      đa dạng số lượng hero lên, cũng như có nhiều chế độ chơi
                      tương đối hấp dẫn. Đây chắc chắn là một trong những map
                      chống cổng mà đa phần các <strong>game</strong> thủ đều đã
                      phải chơi ít nhất một lần.
                    </p>
                    <h3>Legion TD Mega</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/9/photo-1-16232299492321649199773.jpg"
                      alt="Game, Game Thu, Tin Tuc Game, Warcraft 3, "
                      note=""
                    />
                    <p>
                      Có thể nói cùng với Green TD, Legion TD Mega được coi là
                      một trong những custom map thể lọai Tower Defense hay và
                      cân bằng nhất trong lịch sử. Với đa dạng chế độ chơi 2vs2,
                      3vs3, 4vs4 và tồn tại một số yếu tố may rủi, thế nhưng
                      Legion TD Mega yêu cầu rất cao ở khả năng tính toán, cân
                      đối tài nguyên và trên hết là đưa ra quyết định hợp lý
                      giữa việc xây thêm tower hay mua wisp farm tài nguyên để
                      duy trì lợi thế của mình.
                    </p>
                    <h3>Pokemon Defense</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/9/photo-1-16232300721261494611049.jpg"
                      alt="Game, Game Thu, Tin Tuc Game, Warcraft 3, "
                      note=""
                    />
                    <p>
                      Đây lại là một trong những map defense cực kỳ thú vị khác
                      của <strong>Warcraft 3</strong>. Về cơ bản, nhiệm vụ của
                      bạn sẽ là phải chống đỡ những đợt tấn công từ phía đối thủ
                      khác bằng mọi cách đồng thời lựa chọn việc nâng cấp
                      Pokemon, tiến hóa chúng theo thời gian để có thể đứng vững
                      trước những đợt hãm thành liên tục.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Đáng nói hơn, trò chơi này còn có yếu tố "khắc hệ", thế
                      nên việc lựa chọn, sắp xếp đội hình luôn là thử thách và
                      cũng là thứ đáng chờ đợi nhất của tựa{" "}
                      <strong>game</strong> này.
                    </p>
                    <h3>Pain's Party</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/9/photo-1-16232302537321862947388.jpg"
                      alt="Game, Game Thu, Tin Tuc Game, Warcraft 3, "
                      note=""
                    />
                    <p>
                      Một trong những custom map vui nhộn nhất của{" "}
                      <strong>Warcraft 3</strong>. Tới với Pain's Party, người
                      chơi sẽ được tham gia vào một loạt các chuỗi thử thách
                      tính điểm khá vui vẻ nhưng cũng không kém phần gay cấn. Từ
                      những màn chơi như đua lợn, nhảy Au, bắn phi thuyền cho
                      tới cả các màn marathon với vô số cạm bẫy chờ đợi. Pain's
                      Party đề cao sự thông minh, quyết đoán và cũng mang tới
                      không ít những trải nghiệm thú vị cho các{" "}
                      <strong>game</strong> thủ.
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
