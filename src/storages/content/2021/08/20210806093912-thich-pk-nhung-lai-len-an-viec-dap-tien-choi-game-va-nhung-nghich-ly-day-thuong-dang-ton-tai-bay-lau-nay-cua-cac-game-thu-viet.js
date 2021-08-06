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
"timestamp": '06/08/2021 09:39 AM',
"title": 'Thích PK nhưng lại lên án việc "đập tiền" và những nghịch lý đầy thượng đẳng tồn tại bấy lâu nay của game thủ Việt',
"description": 'Thế mới thấy các game thủ Việt thượng đẳng như thế nào.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-16278822524001697710181.jpg',
"alt": 'GAME,TIN TỨC GAME,GAME THỦ,',
"category": 'games',
"date": '06/08/2021',
"time": '09:39 AM',
"link": '/thich-pk-nhung-lai-len-an-viec-dap-tien-choi-game-va-nhung-nghich-ly-day-thuong-dang-ton-tai-bay-lau-nay-cua-cac-game-thu-viet',
"zcomponent": 'page_20210806093912',
"filepath": './20210806093912-thich-pk-nhung-lai-len-an-viec-dap-tien-choi-game-va-nhung-nghich-ly-day-thuong-dang-ton-tai-bay-lau-nay-cua-cac-game-thu-viet.js'
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
  'Thích PK nhưng lại lên án việc "đập tiền" và những nghịch lý đầy thượng đẳng tồn tại bấy lâu nay của game thủ Việt';
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "06/08/2021 09:39 AM";
const description = "Thế mới thấy các game thủ Việt thượng đẳng như thế nào.";
const link =
  "thich-pk-nhung-lai-len-an-viec-dap-tien-choi-game-va-nhung-nghich-ly-day-thuong-dang-ton-tai-bay-lau-nay-cua-cac-game-thu-viet";
const tagparam = ["GAME", "TIN TỨC GAME", "GAME THỦ"];
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

export default function page_20210806093912() {
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
                      Tất nhiên, không phải tất cả các <strong>game</strong> thủ
                      Việt đều thượng đẳng, toxic như nhiều người vẫn nói. Tuy
                      nhiên, chỉ một bộ phận thôi - và cũng là những thành phần
                      hoạt động nổi bật nhất, chịu khó tương tác, "phàn nàn"
                      nhất đôi khi lại khiến cho nhiều người dễ hiểu nhầm văn
                      hóa của người chơi. Và nếu là tín đồ của các dòng game cày
                      cuốc, chắc hẳn bạn sẽ rất dễ gặp được những nghịch lý sau.
                    </p>
                    <h5>
                      Thích PK nhưng lại lên án đại gia đập tiền chơi game
                    </h5>
                    <p>
                      Chắc chắn, PK là một trong những nét văn hóa, đặc trưng
                      của mọi <strong>game</strong> thủ Việt mà chẳng ai muốn
                      thiếu trong các tựa game mà họ chơi. Genshin Impact không
                      có PK, thế nên đó cũng không phải là mảnh đất "lành" dành
                      cho người chơi hệ cày cuốc - những người vốn đã quá quen
                      thuộc với thời của Kiếm Thế, Võ Lâm Truyền Kỳ rồi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-1627882074458410072106.jpg"
                      alt="1, GAME,TIN TỨC GAME,GAME THỦ,"
                      note="Đối với các dân cày thì một máy hàng chục tài khoản là chuyện bình thường"
                    />
                    <p>
                      Thực tế, PK cũng là một cách để phân định kỹ năng, thắng
                      thua và thể hiện sức mạnh của mình trong{" "}
                      <strong>game</strong>. Vì vậy, các{" "}
                      <strong>game thủ</strong> Việt ưa thích cũng chẳng có gì
                      lạ. Tuy nhiên, không ít người rõ là ưa thích PK nhưng lại
                      cực kỳ lên án việc các "đại gia" đập tiền phá game, vì
                      theo họ, sự vượt trội quá nhiều về đồ đạc làm mất đi sự
                      công bằng của một tựa game, đôi khi chẳng cần kỹ năng cũng
                      có thể PK thắng. Tiêu chuẩn kép như vậy thì khó chiều
                      thật.
                    </p>
                    <h5>
                      Chỉ trích Boss server PK bừa bãi nhưng bản thân lại đi PK
                      những tài khoản yếu hơn mình
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-16278822524001697710181.jpg"
                      alt="2, GAME,TIN TỨC GAME,GAME THỦ,"
                      note=""
                    />
                    <p>
                      {" "}
                      Đây có lẽ cũng là thực trạng chung của mọi tựa{" "}
                      <strong>game</strong> cày cuốc từng xuất hiện ở Việt Nam.
                      Việc đứng cửa thành, chặn đường đồ sát đã không còn là
                      những thuật ngữ xa lạ. Xét cho cùng, ở trong thế giới của
                      các tựa game online cày cuốc, mọi thứ được vận hành theo
                      quy luật cá lớn nuốt cá bé mà thôi. Và nếu bạn đã từng vác
                      dao đồ sát những tài khoản yếu hơn mình thì có lẽ cũng
                      không nên oán trách khi trở thành nạn nhân trong những vụ
                      việc tương tự.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>
                      Lên án dân cày làm hỏng <strong>game</strong> nhưng bản
                      thân vẫn có clone
                    </h5>
                    <p>
                      Chắc chắn, dân cày là một trong những yếu tố làm suy yếu
                      đi làng <strong>game</strong> online cày cuốc ở Việt Nam.
                      Hãy thử tưởng tượng một server mà ở đó toàn những party
                      clone đi KS bãi train, quest và đôi khi là cả boss nữa,
                      làm gì còn mấy ai thích chơi chứ. Đối với các{" "}
                      <strong>game thủ</strong> chân chính, việc lên án dân cày
                      là đúng. Tuy nhiên, sẽ chẳng có nghĩa lý gì nếu như bạn
                      cũng có vô số các clone để làm tăng lợi nhuận cho mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/2/photo-1-16278822031291642281359.jpg"
                      alt="3, GAME,TIN TỨC GAME,GAME THỦ,"
                      note=""
                    />
                    <p>
                      Thực trạng này cũng không hiếm, vì phần nhiều các{" "}
                      <strong>game</strong> thủ thời xưa luôn có từ 1-2 acc phụ
                      để hỗ trợ cho tài khoản chính. Thế nên, gọi những người
                      như vậy là dân cày cũng chẳng sai. Và khi hai dân cày lên
                      án nhau thì chỉ có duy nhất một lý do mà thôi, bạn cày
                      được ít hơn, log được ít clone hơn đối thủ.
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
