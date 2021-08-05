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
"timestamp": '04/08/2021 06:57 PM',
"title": 'Những game hậu bản dở thậm chí dở hơn cả phần trước',
"description": 'Không phải lúc nào làm ra phần sau thì cũng ăn khách như phần trước được cả.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-1-1628006300469786762825.jpg',
"alt": 'GAME,',
"category": 'games',
"date": '04/08/2021',
"time": '06:57 PM',
"link": '/nhung-phan-hau-ban-do-den-muc-lam-hong-ca-danh-tieng-game-truoc',
"zcomponent": 'page_20210804185722',
"filepath": './20210804185722-nhung-phan-hau-ban-do-den-muc-lam-hong-ca-danh-tieng-game-truoc.js'
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
const title = "Những game hậu bản dở thậm chí dở hơn cả phần trước";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "04/08/2021 06:57 PM";
const description =
  "Không phải lúc nào làm ra phần sau thì cũng ăn khách như phần trước được cả.";
const link = "nhung-phan-hau-ban-do-den-muc-lam-hong-ca-danh-tieng-game-truoc";
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

export default function page_20210804185722() {
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
                    <h5>1. Knack II</h5>
                    <p>
                      Knack là tựa <strong>game</strong> mở đầu cho tất cả các
                      game của PS4, nó giống như một tựa game để trình diễn khả
                      năng siêu hạng của cỗ máy chơi game thế hệ mới này vào
                      thời điểm đó. Dù vậy, Knack vẫn xứng đáng được khen ngợi
                      bởi lối chơi vui nhộn và mới mẻ. Tuy nhiên, nó vẫn còn rất
                      nhiều lỗi ngớ ngẩn khác. Dù vậy, Knack vẫn đủ để làm hài
                      lòng rất nhiều game thủ đang "khát game" ở thời điểm hệ
                      máy này mới ra mắt.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-1-1628006300469786762825.jpg"
                      alt="1, GAME,"
                      note=""
                    />
                    <p>
                      Đến năm 2017, Knack II được trình làng. Dù có những tiến
                      bộ đáng kể, nhưng khi các <strong>game</strong> thủ không
                      cần tới một tựa game như Knack nữa thì sự tồn tại của nó
                      cũng chẳng có ý nghĩa gì. Thậm chí tại thị trường Nhật
                      Bản, Knack II chỉ bán được vỏn vẹn 2 nghìn bản, một con số
                      quá tệ so với một tựa game độc quyền PS4.{" "}
                    </p>
                    <h5>2. Duke Nukem Forever</h5>
                    <p>
                      Duke Nukem Forever là một tựa <strong>game</strong> bị
                      "nguyền rủa", trong suy nghĩ của nhiều game thủ. Thật vậy,
                      tựa game này đã tốn tới 15 năm để phát triển và mắc phải
                      vô số drama chẳng một nhà phát triển nào muốn dính vào.
                      Sau những vụ kiện, đổi công ty phát triển và thậm chí đổi
                      cả nền tảng làm game, chẳng một game thủ nào hào hứng chờ
                      đợi nó nữa.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/photo-1-16280062678291730790249.jpg"
                      alt="2, GAME,"
                      note=""
                    />
                    <p>
                      Dù vậy, Duke Nukem Forever vẫn được ra mắt vào năm 2011
                      như một sự "trả bài" của nhà phát triển Gearbox Software.
                      Thế nhưng, chất lượng của nó thì quá tệ hại, dẫn đến mức
                      người chơi phải thất vọng cùng cực. <strong>Game</strong>
                      play lỗi thời, đồ họa cũng không tân tiến và khoảng thời
                      gian loading game cũng quá lâu. So với những đối thủ thế
                      hệ cũ thì không nói, còn nếu so với các game FPS hiện đại
                      thì Duke Nukem giống như một ông già lỗi thời vậy. Dần
                      dần, chẳng ai muốn nhắc tới dòng game này nữa.{" "}
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>3. Final Fantasy XIII-2</h5>
                    <p>
                      Công bằng mà nói, Final Fantasy XIII sở hữu nền tảng đồ
                      họa khá bắt mắt, cùng với đó là phần âm nhạc tuyệt đỉnh.
                      Dù vậy, FFXIII lại bị chê dữ dội về việc{" "}
                      <strong>game</strong> được thiết lập khá đơn giản, tuyến
                      tính khi game thủ bắt buộc phải đi theo con đường mà nhà
                      sản xuất định trước chứ không có một thế giới mở nào cả.
                      Thêm vào đó, nhân vật Lighting và bè bạn đều rất nhạt
                      nhòa, không để lại nhiều dấu ấn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/-1628006369765508032388.jpg"
                      alt="3, GAME,"
                      note=""
                    />
                    <p>
                      Để tận dụng tối đa nền tảng làm nên FFXIII, Square Enix
                      quyết định... làm phần 2 cho tựa <strong>game</strong>{" "}
                      này. Thế là, Final Fantasy XIII-2 lại tiếp tục ăn nhiều
                      gạch đá bởi thứ cốt truyện rối rắm và chẳng hiểu sao nó
                      lại có thể được các sếp của SE đồng ý để khởi động dự án.
                      Không quá khó để nhận ra Final Fantasy XIII-2 nhận vô số
                      gạch đá từ giới game thủ và được cho là phần hậu bản đáng
                      quên nhất của dòng game Final Fantasy.{" "}
                    </p>
                    <h5>4. Mass Effect Andromeda</h5>
                    <p>
                      Dù bị fan chê ít nhiều, thế nhưng Mass Effect 3 xứng đáng
                      là một kết thúc tốt đẹp dành cho Commander Shepard. Cái
                      kết ở phần 3 dù không quá hoàn hảo, nhưng coi như chuyến
                      hành trình vũ trụ và cuộc chiến của người anh hùng này với
                      bè lũ Reapers coi như đã có một cái kết đẹp.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-1-1628006403217929994163.jpg"
                      alt="4, GAME,"
                      note=""
                    />
                    <p>
                      Điều đáng tiếc là đây là một <strong>game</strong> của EA,
                      một ông trùm "vắt sữa" nổi tiếng. Thế nên, EA lại có những
                      cách khá kỳ quặc để tiếp tục kiếm tiền, chẳng hạn như tạo
                      ra phiên bản Mass Effect mới với tên gọi Andromeda, với
                      bối cảnh 600 năm sau Mass Effect 3. Không thành công như
                      bản 3, Andromeda trở thành một thảm họa khi mắc vô số sai
                      lầm nghiêm trọng về gameplay, đồ họa cho đến tạo hình nhân
                      vật.
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
