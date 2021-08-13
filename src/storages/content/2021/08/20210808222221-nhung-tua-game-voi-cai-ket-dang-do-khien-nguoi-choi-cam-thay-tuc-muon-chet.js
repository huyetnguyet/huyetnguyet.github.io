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
"timestamp": '08/08/2021 10:22 PM',
"title": 'Những tựa game với cái kết dang dở khiến người chơi cảm thấy tức muốn chết',
"description": 'Kết không đẹp thì thôi, nhưng kết kiểu khó chịu thế này thì đúng là bực mình.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/8/photo-1-16284418824842061273504.jpg',
"alt": 'GAME,',
"category": 'games',
"date": '08/08/2021',
"time": '10:22 PM',
"link": '/nhung-tua-game-voi-cai-ket-dang-do-khien-nguoi-choi-cam-thay-tuc-muon-chet',
"zcomponent": 'page_20210808222221',
"filepath": './20210808222221-nhung-tua-game-voi-cai-ket-dang-do-khien-nguoi-choi-cam-thay-tuc-muon-chet.js'
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
  "Những tựa game với cái kết dang dở khiến người chơi cảm thấy tức muốn chết";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "08/08/2021 10:22 PM";
const description =
  "Kết không đẹp thì thôi, nhưng kết kiểu khó chịu thế này thì đúng là bực mình.";
const link =
  "nhung-tua-game-voi-cai-ket-dang-do-khien-nguoi-choi-cam-thay-tuc-muon-chet";
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

export default function page_20210808222221() {
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
                    <h5>1. Half-Life 2: Episode Two</h5>
                    <p>
                      Với nhiều <strong>game</strong> thủ, Half-Life 2: Episode
                      Two xứng đáng là một tượng đài của làng game FPS. Cốt
                      truyện hấp dẫn, lối chơi cuốn hút biến tựa game này thành
                      một trong những sản phẩm đáng chơi bậc nhất của Valve. Tuy
                      nhiên, dính đến Valve thì game thủ lại phải chịu một nỗi
                      đau "vô bờ bến" - đến giờ studio này vẫn chưa biết đếm tới
                      số 3.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/8/photo-1-16284418824842061273504.jpg"
                      alt="1, GAME,"
                      note=""
                    />
                    <p>
                      Thật vậy, sau 14 năm cho đến bây giờ, Valve vẫn chưa thèm
                      ra phần hậu truyện trực tiếp liên quan tới Half-Life 2:
                      Episode Two. Điều này khiến người hâm mộ cứ hy vọng, khấp
                      khởi rồi lại thất vọng bởi mãi mãi không biết được kết cục
                      của Gordon Freeman sẽ ra sao. Gần đây, Valve đã cho ra đời
                      Half-Life: Alyx, thế nhưng đây lại là một phần tiền truyện
                      chứ không phải hậu bản của Episode Two. Dù vậy, nó cũng đã
                      giải thoát phần nào cơn khát của các <strong>game</strong>{" "}
                      thủ yêu thích Half-Life.{" "}
                    </p>
                    <h5>2. Mass Effect 3</h5>
                    <p>
                      Dù bị fan chê ít nhiều, thế nhưng Mass Effect 3 xứng đáng
                      là một kết thúc tốt đẹp dành cho Commander Shepard. Chuyến
                      hành trình vũ trụ và cuộc chiến của người anh hùng này với
                      bè lũ Reapers coi như đã có một cái kết đẹp. Ngoài ra,{" "}
                      <strong>game</strong> cũng đem đến những trải nghiệm tốt
                      về phần lối chơi bắn súng và RPG.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/8/photo-1-1628441799012394399114.jpg"
                      alt="2, GAME,"
                      note=""
                    />
                    <p>
                      Dù vậy, phần kết thúc của ME 3 lại không được các{" "}
                      <strong>game</strong> thủ ưa thích cho lắm. Việc đưa ra
                      các lựa chọn khác nhau thì hay đấy, nhưng nó lại chẳng ảnh
                      hưởng nhiều lắm. Thật vậy, game sẽ đưa ra 3 ending, và đó
                      cũng là 3 phần kết của game luôn, thế nên cũng chẳng thú
                      vị lắm và đem tới bất cứ điều gì khác biệt.{" "}
                    </p>
                    <h5>3. Metal Gear Solid 2</h5>
                    <RelationNewsInPage category={category} />
                    <p>
                      Nói đến nhà thiết kế đại tài Hideo Kojima, các fan hâm mộ
                      không chỉ khen ngợi về khả năng làm <strong>game</strong>{" "}
                      mà cả khả năng... làm trailer. Sau khi Metal Gear Solid
                      thành công vang dội, không quá ngạc nhiên là game sẽ sớm
                      có hậu bản. Tại sự kiện E3 2000, game thủ đã được tận mắt
                      xem trailer dài 9 phút, theo chân Snake đột nhập vào Big
                      Shell để đối đầu với Sons of Liberty. Điều này khiến cho
                      các game thủ rất mong chờ được tương ngộ Snake một lần
                      nữa.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/8/photo-1-16284417724502090247057.jpg"
                      alt="3, GAME,"
                      note=""
                    />
                    <p>
                      Cái kết của Metal Gear Solid 2 cũng là một thứ khá là...
                      kỳ cục. Nhân vật chính của <strong>game</strong> tưởng là
                      Snake mà không phải là Snake, anh ta chỉ là một chiến binh
                      bị thử thách xem có ngang tài với người anh hùng nổi danh
                      hay không. Sau khi đánh bại xong trùm cuối, người chơi lại
                      bị giảng giải giáo điều khiến những ai hiểu cốt truyện cảm
                      thấy kỳ quặc thật sự, chơi game thôi mà sao bị "hành" đến
                      thế.{" "}
                    </p>
                    <h5>4. Final Fantasy 8</h5>
                    <p>
                      Final Fantasy 8 là một trong những phần{" "}
                      <strong>game</strong> hay nhất, và cũng là phần có cái kết
                      gây tranh cãi nhiều nhất trong toàn bộ các game Final
                      Fantasy thuộc dòng game chính. Không ít người đã lên các
                      diễn đàn và mạng xã hội để tranh cãi về cái kết kỳ lạ này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/8/photo-1-16284417478641180648893.jpg"
                      alt="4, GAME,"
                      note=""
                    />
                    <p>
                      Cái chết của Squall, sự xuất hiện của cô gái bí ẩn, mối
                      quan hệ kỳ lạ của Edea và Rinoa vốn đã rất lú rồi, vậy mà,{" "}
                      <strong>game</strong> lại đưa thêm cả phần cutscene dài
                      dằng dặc khiến game trở nên rắc rối và khó hiểu với những
                      ai không chịu bám sát cốt truyện. Có lẽ Square Soft ngày
                      đó đã nghĩ rằng việc tạo nên cốt truyện "200 IQ" kiểu này
                      sẽ thành bom tấn của ngày đó chăng?
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
