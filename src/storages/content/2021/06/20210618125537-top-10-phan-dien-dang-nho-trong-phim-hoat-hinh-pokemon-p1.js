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
"timestamp": '18/06/2021 12:55 PM',
"title": 'Top 10 phản diện đáng nhớ trong phim hoạt hình Pokémon (P.1)',
"description": 'Trong anime, rất nhiều nhân vật phản diện tỏa sáng hơn so với những gì chúng được thể hiện trong game.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-1-1623947652010101484898.jpg',
"alt": 'POKÉMON,PHẢN DIỆN,',
"category": 'games',
"date": '18/06/2021',
"time": '12:55 PM',
"link": '/top-10-phan-dien-dang-nho-trong-phim-hoat-hinh-pokemon-p1',
"zcomponent": 'page_20210618125537',
"filepath": './20210618125537-top-10-phan-dien-dang-nho-trong-phim-hoat-hinh-pokemon-p1.js'
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
const title = "Top 10 phản diện đáng nhớ trong phim hoạt hình Pokémon (P.1)";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "18/06/2021 12:55 PM";
const description =
  "Trong anime, rất nhiều nhân vật phản diện tỏa sáng hơn so với những gì chúng được thể hiện trong game.";
const link = "top-10-phan-dien-dang-nho-trong-phim-hoat-hinh-pokemon-p1";
const tagparam = ["POKÉMON", "PHẢN DIỆN"];
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

export default function page_20210618125537() {
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
                  <h3>1. Hunter J</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-1-1623947652010101484898.jpg"
                    alt="1, POKÉMON,PHẢN DIỆN,"
                    note=""
                  />
                  <p>
                    {" "}
                    Hunter J là một trong những <strong>phản diện</strong> khó
                    chịu từng xuất hiện trong anime. Cô ta bắt cóc các{" "}
                    <strong>Pokémon</strong> và bán chúng đi với giá cao trên
                    thị trường chợ đen. Cô ta là một kẻ máu lạnh, sẵn sàng làm
                    tất cả để đạt được mục đích và gạt bỏ những gì cản đường
                    mình.
                  </p>
                  <p>
                    Dù vậy, J vẫn rất được ưa thích bởi những món đồ chơi công
                    nghệ cùng sự nguy hiểm của cô ta. Cô ta không phải nhân vật
                    sinh ra để tấu hài, mà là một <strong>phản diện</strong>{" "}
                    cool ngầu thật sự. Dù vậy, việc J có tiếp tục xuất hiện
                    trong anime nữa hay không vẫn là một dấu chấm hỏi, bởi người
                    xem vẫn chưa biết cô ta còn sống hay đã chết.{" "}
                  </p>
                  <h3>2. Guzma</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-1-1623948296042708221666.jpg"
                    alt="2, POKÉMON,PHẢN DIỆN,"
                    note=""
                  />
                  <p>
                    Lạnh lùng và đầy toan tính, Guzma là một trong những tay
                    chơi <strong>Pokémon</strong> thật sự đáng sợ. Hắn ta quan
                    sát và phân tích điểm yếu của đối thủ, rồi sau đó tấn công
                    thẳng vào điểm yếu của chúng. Mặc dù có biệt danh là "kẻ bất
                    bại", thế nhưng Guzma chỉ chọn những kẻ yếu hơn để nhắm vào,
                    thay vì chọn chiến đấu với những người có kinh nghiệm.{" "}
                  </p>
                  <p>
                    Trong con mắt của nhiều người, Guzma giống như một gã bắt
                    nạt hơn là một nhân vật <strong>phản diện</strong> thực sự.
                    Hắn chưa bao giờ hiểu rõ sức mạnh của Z-Ring từ khi còn nhỏ,
                    thế nên đến giờ hắn vẫn chưa được sở hữu nó. Đến khi trưởng
                    thành, hắn chỉ biết bắt nạt những kẻ yếu hơn để tự bản thân
                    cảm thấy tốt hơn.{" "}
                  </p>
                  <h3>3. Colress</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-1-1623948513651333628498.jpg"
                    alt="3, POKÉMON,PHẢN DIỆN,"
                    note=""
                  />
                  <p>
                    Khác với phiên bản game, Colress đóng một vai trò quan trọng
                    trong anime. Hắn là một trong những nhà khoa học xuất sắc
                    nhất của Team Plasma, nếu không muốn nói là tốt nhất. Dù rất
                    lịch sự và trang trọng, thế nhưng Colress khá lạnh lùng và
                    xa cách.{" "}
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Colress không hứng thú lắm với mục tiêu của Team Plasma,
                    thay vào đó hắn sử dụng những gì hắn có với biệt đội này để
                    thực hiện nghiên cứu của chính mình - thao túng tiềm thức
                    của <strong>Pokémon</strong> để đem tới sức mạnh thật sự.
                    Rất nhiều khán giả đã tò mò và muốn xem xem Colress có thể
                    thực hiện mục tiêu của mình tới mức độ nào.
                  </p>
                  <h3>4. Faba</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-1-1623948780030476119048.jpg"
                    alt="4, POKÉMON,PHẢN DIỆN,"
                    note=""
                  />
                  <p>
                    Xuất hiện ban đầu, Faba là một kẻ vô cùng drama và cũng rất
                    xấu tính. Hắn là kẻ gây nên chứng sợ{" "}
                    <strong>Pokémon</strong> với Lillie, nhưng cũng sợ hãi rằng
                    bị Lusamine phát hiện. Về sau, Faba dường như cải tà quy
                    chính và trợ giúp đáng kể cho đội của Ash. Về cuối phim, gã
                    còn trở thành một trong những nhân vật được yêu thích nhất
                    trong phần anime Sun & Moon.
                  </p>
                  <h3>5. Lysandre</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-1-1623948950715270167185.jpg"
                    alt="5, POKÉMON,PHẢN DIỆN,"
                    note=""
                  />
                  <p>
                    Theo nhiều fan, Lysandre trong anime thú vị hơn so với trong
                    game. Nếu như vai trò của hắn trong game khá mờ nhạt, mục
                    tiêu cũng khó hiểu, gần như là đáng quên thì trong anime, gã
                    tỏa sáng hơn hẳn. Gã thật sự rất nguy hiểm cùng tính cách tự
                    cao tự đại. Đồng thời, câu chuyện của hắn khiến khán giả
                    hứng thú hơn và dần dần nhận ra mục đích phía sau của gã.{" "}
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
