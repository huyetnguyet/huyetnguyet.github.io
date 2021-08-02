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
"title": 'Loạt ending khiến người chơi ức chế trong các game đa lựa chọn',
"description": 'Có những bad-ending trong các tựa game nhiều lựa chọn, và cũng có cả những worst-ending chỉ để người chơi "tức ói máu".',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/photo-1-1625370979166885029656.jpg',
"alt": 'GAME,',
"category": 'games',
"date": '29/07/2021',
"time": '04:10 PM',
"link": '/loat-ending-khien-nguoi-choi-uc-che-trong-cac-game-da-lua-chon',
"zcomponent": 'page_20210729161058',
"filepath": './20210729161058-loat-ending-khien-nguoi-choi-uc-che-trong-cac-game-da-lua-chon.js'
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
const title = "Loạt ending khiến người chơi ức chế trong các game đa lựa chọn";
const author = "Jessie Mai";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:10 PM";
const description =
  'Có những bad-ending trong các tựa game nhiều lựa chọn, và cũng có cả những worst-ending chỉ để người chơi "tức ói máu".';
const link = "loat-ending-khien-nguoi-choi-uc-che-trong-cac-game-da-lua-chon";
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

export default function page_20210729161058() {
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
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Choice-based <strong>game</strong> là những trò chơi nhiều
                    lựa chọn và thường là nhiều kết cục (ending). Trong đó,
                    người chơi có thể tự quyết định câu chuyện dựa trên quyết
                    định của mình, và vì vậy mỗi người chơi lại đi đến một kết
                    cục riêng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/photo-1-1625370979166885029656.jpg"
                    alt="1, GAME,"
                    note=""
                  />
                  <p>
                    Thông thường, kết cục tốt đẹp là khó đạt được nhất, nhưng
                    cũng đáng để bạn nỗ lực. Nhưng cũng có một số trò chơi chỉ
                    có ending xấu và ending cực kỳ xấu.
                  </p>
                  <h5>
                    1. Heavy Rain - Kẻ sát nhân hàng loạt Origami thoát tội
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/photo-1-16253709811191615718039.jpg"
                    alt="2, GAME,"
                    note=""
                  />
                  <p>
                    Trong <strong>game</strong> Heavy Rain, một trong những
                    ending có thể xảy ra là để tên sát nhân hàng loạt Origami
                    thoát tội giết người. Kết thúc này được gọi là "Bất lực",
                    rất khó đạt được vì yêu cầu người chơi thất bại trong nhiều
                    nhiệm vụ ở những chương trước. Nhưng điều này không làm khó
                    được những player tâm huyết muốn tìm ra mọi kết thúc trong
                    game.
                  </p>
                  <p>
                    Không chỉ để Origami Killer thoát tội, nhân vật chính Ethan
                    còn phải vào tù sau khi bị phán tội giết người. Bị tra tấn
                    vì mất con trai và không thể chịu đựng thêm bất kỳ đau khổ
                    nào nữa, ông đã treo cổ tự vẫn trong phòng giam của mình.
                    Đây là một kết thúc mà người chơi thấy là một trong những
                    điều đáng buồn nhất trong toàn bộ trò chơi, và hầu hết người
                    chơi đã làm tất cả những gì có thể để tránh nó.
                  </p>
                  <h5>
                    2. Nier: Automata – Kết thúc "máu lạnh" của R: Mave[R]Ick
                  </h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/photo-2-16253709826611506729428.jpg"
                    alt="3, GAME,"
                    note=""
                  />
                  <p>
                    Có rất nhiều ending trong Nier: Automata, hầu hết đều là kết
                    cục xấu cả. Tuy nhiên, ending có tên R, Mave[R]Ick, bị người
                    hâm mộ cho là máu lạnh nhất và tồi tệ hơn cả. Kết thúc này
                    có thể đạt được theo hai cách: người chơi phải tấn công
                    những người máy bên cạnh Pascal trong Chương 14 hoặc tấn
                    công cả Pascal và lũ trẻ. Hầu hết người chơi cố gắng tránh
                    ending này, và nếu có gắng đạt được thì chỉ để hoàn thành
                    trò chơi trọn vẹn mà thôi.
                  </p>
                  <h5>3. Man Of Medan – Cách để giết hết nhân vật</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/photo-3-1625370982128777600925.jpg"
                    alt="4, GAME,"
                    note=""
                  />
                  <p>
                    The Dark Pictures: Man Of Medan là một trò chơi khác mà tất
                    cả các nhân vật có thể chết và chết như thế nào tùy vào lựa
                    chọn của người chơi. Một trong những kết thúc tồi tệ nhất có
                    thể dẫn đến việc các nhân vật bị chính phủ bắt giữ hoặc giết
                    vì lý do liên quan đến an ninh.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Tuy nhiên, một trong những kết thúc tồi tệ khác là không
                    nhân vật nào được giải cứu và con tàu của họ bị mắc cạn giữa
                    đại dương, không còn hy vọng nào về việc được giải cứu.
                  </p>
                  <h5>4. Until Dawn – Khi các nhân vật đều bỏ mạng</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/4/photo-4-16253709816271079298426.jpg"
                    alt="5, GAME,"
                    note=""
                  />
                  <p>
                    Until Dawn là một trò chơi thể loại bí ẩn, kinh dị. Dựa vào
                    các lựa chọn trong <strong>game</strong>, người chơi kích
                    hoạt "hiệu ứng cánh bướm" và có thể đạt được ending khác
                    nhau, trong đó tất cả nhân vật đều sống hoặc một số nhân vật
                    sẽ chết. Kết cục tồi tệ nhất là mọi nhân vật đều chết một
                    cách tàn nhẫn.
                  </p>
                  <p>
                    Làm thế nào và khi nào những nhân vật này chết phụ thuộc vào
                    các lựa chọn cụ thể được thực hiện trong quá trình chơi. Ví
                    dụ, việc đưa cho nhân vật A vũ khí thay vì nhân vật B có thể
                    dẫn đến cái chết của nhân vật B sau này.
                  </p>
                  <p>
                    Việc bỏ lỡ một số manh mối trong <strong>game</strong> cũng
                    có thể dẫn đến cái chết của nhân vật. Trong ending tệ nhất,
                    người chơi sẽ được nhìn thấy tên và cách nhân vật chết trong
                    đoạn credit cuối game.
                  </p>
                  <h5>5. Undertale – Vứt mọi ending có hậu qua cửa sổ</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/4/photo-5-16253709811721502582346.jpg"
                    alt="6, GAME,"
                    note=""
                  />
                  <p>
                    Trong <strong>game</strong> Undertale, một route có tên
                    Genocide sẽ khiến nhân vật chính giết tất cả mọi người. Điều
                    này không chỉ dẫn đến cái chết của nhiều nhân vật được fan
                    yêu thích, mà thậm chí phá hủy kết cục tổng thể của trò
                    chơi. Route Genocide sẽ thay đổi vĩnh viễn các ending của
                    route khác. Vì vậy, khi chơi Undertale, người chơi cố gắng
                    được trải nghiệm những kết thúc có hậu như True Pacifist hay
                    Neutral trước khi đạt được ending Genocide.
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
