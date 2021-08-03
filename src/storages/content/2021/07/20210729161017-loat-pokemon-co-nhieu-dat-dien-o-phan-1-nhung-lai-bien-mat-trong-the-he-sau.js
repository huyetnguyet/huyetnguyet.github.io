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
"timestamp": '29/07/2021 04:10 PM',
"title": 'Loạt Pokémon có nhiều đất diễn ở phần 1 nhưng lại biến mất trong thế hệ sau',
"description": 'Không phải chúng yếu đi, chỉ đơn giản là các Pokémon ngày nay mạnh hơn mà thôi.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/1/photo-1-16251525412681096304439.png',
"alt": 'POKÉMON,',
"category": 'games',
"date": '29/07/2021',
"time": '04:10 PM',
"link": '/loat-pokemon-co-nhieu-dat-dien-o-phan-1-nhung-lai-bien-mat-trong-the-he-sau',
"zcomponent": 'page_20210729161017',
"filepath": './20210729161017-loat-pokemon-co-nhieu-dat-dien-o-phan-1-nhung-lai-bien-mat-trong-the-he-sau.js'
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
  "Loạt Pokémon có nhiều đất diễn ở phần 1 nhưng lại biến mất trong thế hệ sau";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:10 PM";
const description =
  "Không phải chúng yếu đi, chỉ đơn giản là các Pokémon ngày nay mạnh hơn mà thôi.";
const link =
  "loat-pokemon-co-nhieu-dat-dien-o-phan-1-nhung-lai-bien-mat-trong-the-he-sau";
const tagparam = ["POKÉMON"];
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

export default function page_20210729161017() {
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
                    <h5>1. Tauros</h5>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/1/photo-1-16251525412681096304439.png"
                      alt="1, POKÉMON,"
                      note=""
                    />
                    <p>
                      Normal ở phần game đầu tiên khá imba bởi nó thật sự "dễ
                      chơi, dễ trúng thưởng". Tauros cũng được hưởng sái nhờ sự
                      dễ chơi này, khi nó có chỉ số tấn công cao và kết hợp cùng
                      các đòn đánh mạnh như Hyper Beam. Tuy nhiên, sang tới phần
                      sau thì nhà thiết kế đã làm giảm sức mạnh của hệ Normal
                      một cách gián tiếp khi gia tăng khá nhiều cho hệ thiên
                      địch Fighting. Ngoài ra, kỹ năng Hyper Beam cũng bị tốn
                      thêm 1 lượt, từ đó Tauros trở nên phế đi nhiều.
                    </p>
                    <h5>2. Jynx</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/1/photo-1-1625153206471589984882.jpg"
                      alt="2, POKÉMON,"
                      note=""
                    />
                    <p>
                      Jynx là sự kết hợp thú vị của 2 hệ Psychic và Ice, và nó
                      cũng là <strong>Pokémon</strong> đáng để ý nhất nhì trong
                      thế hệ đầu. Jynx có khả năng khắc chế hệ Dragon nhờ Ice và
                      tiêu diệt hầu hết các hệ khác nhờ Psychic. Ngoài ra, nó
                      còn có chỉ số tấn công phép và tốc độ cực cao. Dù vậy, hệ
                      Dark đã loại bỏ Jynx hoàn toàn nhờ vào việc các Pokémon hệ
                      này có khả năng tấn công vật lý cực tốt, trong khi Jynx
                      thì thủ khá là tệ.
                    </p>
                    <h5>3. Golem</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/1/photo-4-1625152541830439839037.jpg"
                      alt="3, POKÉMON,"
                      note=""
                    />
                    <p>
                      Golem và Rhydon là 2 lựa chọn có cùng vị trí ở thế hệ 1,
                      thế nên người chơi thường chọn 1 trong 2{" "}
                      <strong>Pokémon</strong> để đưa vào đội hình. Thông
                      thường, Golem hay được chọn khi nó có chỉ số HP, tấn công
                      và phòng thủ vật lý cao hơn, đồng thời gây ra sát thương
                      lớn hơn khi dùng những đòn đánh mạnh như Earthquake và
                      Rock Slide. Dù vậy, với việc Rhydon tiếp tục tiến hóa lên
                      thành Rhyperior, nó đã vượt mặt hoàn toàn Golem khi mọi
                      thứ đều trội hơn Pokémon thế hệ 1.
                    </p>
                    <h5>4. Lapras</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/1/photo-5-1625152541371425382355.jpg"
                      alt="4, POKÉMON,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Ngoài việc được khá nhiều người chơi yêu thích, Lapras còn
                      "ăn khách" nhờ vào chỉ số tốt và khả năng học được nhiều
                      đòn kỹ năng khác nhau. Cơ mà, mọi thứ cũng chỉ đến vậy. Về
                      sau, Lapras bị counter mạnh bởi kỹ năng Stealth Rock, khi
                      mỗi lần xuất trận thì Lapras sẽ bị giảm tới 1/4 lượng máu
                      - 1 con số quá đáng kể với một Pokemon chủ yếu đóng vai
                      trò tanker.
                    </p>
                    <h5>5. Scyther</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/1/photo-7-1625152541460363382068.jpg"
                      alt="5, POKÉMON,"
                      note=""
                    />
                    <p>
                      Scyther có chỉ số tấn công vật lý tốt và tốc độ cao, thế
                      nên nó được nhiều game thủ ưa thích. Dù vậy, nó cũng bị
                      hạn chế nhiều bởi các chỉ số còn lại cũng chỉ vào dạng
                      trung bình. Dù vậy, việc tiến hóa lên thành Scizor đã giải
                      quyết được khá nhiều vấn đề cho nó. Sự bổ sung của hệ
                      Steel và các đòn kỹ năng mới khiến cho Scizor được ưa
                      chuộng hơn rất nhiều.
                    </p>
                    <h5>6. Snorlax</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/1/photo-9-1625152541544381396647.jpg"
                      alt="6, POKÉMON,"
                      note=""
                    />
                    <p>
                      Snorlax là <strong>Pokémon</strong> khá trâu chó nhờ lượng
                      HP cao, đồng thời chỉ số tấn công cũng không hề tệ. Việc
                      có thể hồi máu nhờ kỹ năng Rest cũng khiến cho Pokémon này
                      rất được ưa chuộng. Dù vậy, hệ Normal bị nerf đi cũng đồng
                      nghĩa với việc Snorlax mất đi ưu thế, đồng thời kỹ năng
                      cũng không có gì thay đổi khiến người ta tìm ra nhiều cách
                      để bắt bài nó hơn. .
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
