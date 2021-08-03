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
"timestamp": '29/07/2021 04:26 PM',
"title": 'Những tựa game 18+ không phù hợp để chơi trước mặt nhiều người',
"description": 'Có quá nhiều cảnh bạo lực và tình dục, những cảnh này không phù hợp để bạn trình chiếu và chơi trước mặt mọi người cho lắm.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/28/photo-1-1627486426479237341960.jpg',
"alt": 'GAME,',
"category": 'games',
"date": '29/07/2021',
"time": '04:26 PM',
"link": '/nhung-tua-game-18-khong-phu-hop-de-choi-truoc-mat-nhieu-nguoi',
"zcomponent": 'page_20210729162648',
"filepath": './20210729162648-nhung-tua-game-18-khong-phu-hop-de-choi-truoc-mat-nhieu-nguoi.js'
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
const title = "Những tựa game 18+ không phù hợp để chơi trước mặt nhiều người";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:26 PM";
const description =
  "Có quá nhiều cảnh bạo lực và tình dục, những cảnh này không phù hợp để bạn trình chiếu và chơi trước mặt mọi người cho lắm.";
const link = "nhung-tua-game-18-khong-phu-hop-de-choi-truoc-mat-nhieu-nguoi";
const tagparam = ["GAME"];
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

export default function page_20210729162648() {
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
                    <h5>1. Mortal Kombat</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/28/photo-1-1627486426479237341960.jpg"
                      alt="1, GAME,"
                      note=""
                    />
                    <p>
                      Mortal Kombat là một tượng đài của dòng{" "}
                      <strong>game</strong> đối kháng, và cũng là một trong
                      những tựa game bạo lực và dã man nhất từ trước tới nay. Sở
                      hữu gameplay cực kỳ ấn tượng và cân bằng tốt là một điểm
                      đáng khen của dòng game MK, tuy nhiên thứ làm cho nó nổi
                      danh và cũng tai tiếng không kém chính là phần đồ họa đầy
                      bạo lực và máu me của nó.
                    </p>
                    <p>
                      Mỗi đòn đánh trong Mortal Kombat đều cực kỳ đẫm máu, có
                      thể nói là gây ấn tượng lớn với người chơi bởi sự điên
                      loạn đó. Đặc biệt hơn cả, à cơ chế kết liễu "fatality"
                      lừng danh đã làm nên thương hiệu khiến Mortal Kombat khét
                      tiếng hơn cả khi nó vô cùng ghê rợn, và thật sự nó vô cùng
                      không phù hợp để người chơi biểu diễn trước mặt trẻ nhỏ
                      chút nào.{" "}
                    </p>
                    <h5>2. Soulcalibur</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/28/photo-1-16274864007691091601134.jpg"
                      alt="2, GAME,"
                      note=""
                    />
                    <p>
                      Đồ họa đẹp, lớp nhân vật đa dạng, <strong>game</strong>
                      play cũng siêu hay, Soulcalibur đã trở thành một trong
                      những biểu tượng của dòng game đối kháng tại Việt Nam.
                      Thậm chí, tại nhiều hàng PS còn có nguyên một club chuyên
                      trị Soulcalibur quy tụ hàng loạt các anh tài có niềm đam
                      mê với tựa game đối kháng này.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Mặc dù yếu tố đồ họa của <strong>game</strong> đối kháng
                      này ít gây tranh cãi bởi độ dã man nếu như so sánh với
                      Mortal Kombat, nhưng Soulcalibur cũng không hiếm cảnh các
                      nữ đấu sĩ khêu gợi và những bộ ngực quá khổ. Thế nên,
                      nhiều người cho rằng tựa game đối kháng này cũng không phù
                      hợp để chơi trước mặt mọi người chút nào.{" "}
                    </p>
                    <h5>3. Dead Or Alive</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/28/photo-1-16274862782081349693089.jpg"
                      alt="3, GAME,"
                      note=""
                    />
                    <p>
                      Nếu Soulcalibur mới chỉ có một vài nhân vật khêu gợi thì
                      Dead or Alive còn làm nhiều hơn như thế - toàn bộ các nhân
                      vật nữ của dòng <strong>game</strong> này luôn trong tình
                      trạng sở hữu những bộ cánh đầy nóng bỏng, gò bồng đảo cuốn
                      hút cùng hiệu ứng vật lý siêu kỳ quặc. Nếu bạn thích ngắm
                      gái, dường như Dead or Alive là lựa chọn vô cùng lý tưởng
                      vì nó rất sexy. Thế nhưng, xem xét thời gian và không gian
                      để chơi game nhé, vì DoA mà chơi trước mặt phụ huynh thì
                      kỳ quặc lắm đấy.{" "}
                    </p>
                    <h5>4. Dead Rising</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/28/photo-1-16274863778681511138737.jpg"
                      alt="4, GAME,"
                      note=""
                    />
                    <p>
                      Dead Rising không phải là một <strong>game</strong> đối
                      kháng, nhưng nó cũng gây ấn tượng với nhiều game thủ bởi
                      tựa game này mang chất bạo lực cũng ở mức "kinh người".
                      Lấy cảm hứng từ các bộ phim kinh dị - zombie kinh phí
                      thấp, Dead Rising lúc nào cũng đặt người chơi vào trạng
                      thái khát máu. Thật vậy, các vũ khí trong game dường như
                      được "cài đặt" tính năng hút máu vậy, cứ quật vào zombie
                      thì máu me sẽ bay ra tóe loe. Rõ ràng, "kháu máu" kiểu
                      Dead Rising cũng không phù hợp để chơi trước mặt nhiều
                      người được rồi.{" "}
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
