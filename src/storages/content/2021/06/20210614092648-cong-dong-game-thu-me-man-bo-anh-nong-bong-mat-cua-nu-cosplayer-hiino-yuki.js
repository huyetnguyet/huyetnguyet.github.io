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
"timestamp": '14/06/2021 09:26 AM',
"title": 'Cộng đồng game thủ mê mẩn bộ ảnh nóng bỏng mắt của nữ cosplayer Hiino Yuki',
"description": 'Sở hữu khuôn mặt xinh xắn, vóc dáng gợi cảm, nữ cosplayer Hiino Yuki đã trở thành cái tên nổi tiếng trong làng cosplay theo phong cách Ero bốc lửa.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210614092648--10-752028.jpg',
"alt": 'Game, Manga, Anime, Cosplay, Cosplayer, ',
"category": 'images',
"date": '14/06/2021',
"time": '09:26 AM',
"link": '/cong-dong-game-thu-me-man-bo-anh-nong-bong-mat-cua-nu-cosplayer-hiino-yuki',
"zcomponent": 'page_20210614092648',
"filepath": './20210614092648-cong-dong-game-thu-me-man-bo-anh-nong-bong-mat-cua-nu-cosplayer-hiino-yuki.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  "Cộng đồng game thủ mê mẩn bộ ảnh nóng bỏng mắt của nữ cosplayer Hiino Yuki";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "14/06/2021 09:26 AM";
const description =
  "Sở hữu khuôn mặt xinh xắn, vóc dáng gợi cảm, nữ cosplayer Hiino Yuki đã trở thành cái tên nổi tiếng trong làng cosplay theo phong cách Ero bốc lửa.";
const link =
  "cong-dong-game-thu-me-man-bo-anh-nong-bong-mat-cua-nu-cosplayer-hiino-yuki";
const tagparam = ["game", "manga", "anime", "cosplay", "cosplayer"];
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

export default function page_20210614092648() {
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
                  <p>
                    Hiino Yuki là nghệ danh của nữ <strong>cosplay</strong>er
                    kiêm <strong>game</strong> thủ Anh Thi. Tuy chỉ mới gia nhập
                    vào làng cosplay từ năm 2019, nhưng phong cách Ero gợi cảm,
                    cháy mắt của cô đã khiến cả cộng đồng fan hâm mộ{" "}
                    <strong>manga</strong>-<strong>anime</strong> và game xôn
                    xao.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092648--10-752028.jpg")
                        .default
                    }
                    alt="Game, Manga, Anime, Cosplay, Cosplayer, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092648--11-414232.jpg")
                        .default
                    }
                    alt="Game, Manga, Anime, Cosplay, Cosplayer, "
                    note=""
                  />
                  <h3>
                    Chào Anh Thi, bạn có thể giới thiệu qua về bạn được không?
                  </h3>
                  <p>
                    Chào mọi người mình là Thi, mình sinh năm 1999 và nghệ danh
                    của mình là Hiino Yuki. Hiện tại mình đang sống và làm việc
                    lại TP HCM.
                  </p>
                  <p>
                    Thi là một trong những coser gợi cảm, quyến rũ được nhiều
                    người yêu mến. Không biết, bạn cảm thấy thế nào khi nhận
                    được tình cảm này của fan?
                  </p>
                  <p>
                    Xuất phát điểm của bản thân vốn dĩ không phải là{" "}
                    <strong>Cosplay</strong>er, mình chỉ đơn giản là{" "}
                    <strong>game</strong>r bình thường cho đến một ngày bạn bè
                    và những người yêu mến ủng hộ mình lấn sân sang Cosplay và
                    nhận được rất nhiều sự ủng hộ của mọi người nên mình có động
                    lực cố gắng và tiếp tục trên con đường này.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092648--12-580978.jpg")
                        .default
                    }
                    alt="Game, Manga, Anime, Cosplay, Cosplayer, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092648--13-875704.jpg")
                        .default
                    }
                    alt="Game, Manga, Anime, Cosplay, Cosplayer, "
                    note=""
                  />
                  <h3>
                    Anh Thi đã bắt đầu đi <strong>cosplay</strong> từ khi nào?
                    Từ lúc nào mà cosplay từ sở thích trở thành công việc với
                    bạn?
                  </h3>
                  <p>
                    Mình tham gia <strong>cosplay</strong> vào cuối 2019, khi đó
                    mình hay đi fes và cosplay những nhân vật yêu thích và nhận
                    được nhiều phản hồi tích cực. Còn hiện tại mình là một Ero{" "}
                    <strong>Cosplayer</strong>.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092648--14-238137.jpg")
                        .default
                    }
                    alt="Game, Manga, Anime, Cosplay, Cosplayer, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092648--15-128816.jpg")
                        .default
                    }
                    alt="Game, Manga, Anime, Cosplay, Cosplayer, "
                    note=""
                  />
                  <h3>
                    Những khó khăn mà bạn gặp phải là gì? Và bạn đã khắc phục
                    như thế nào?
                  </h3>
                  <p>
                    Cũng như bao bạn khác lúc đầu mình chỉ muốn{" "}
                    <strong>cosplay</strong> những nhân vật yêu thích, dành dụm
                    tiền đi làm thêm. Sau này khi ổn định mình đầu tư hình ảnh
                    thêm một chút, tìm người dạy make up và chỉnh ảnh. Sếp của
                    mình hiện tại khiêm luôn những việc này. Mọi thứ phát triển
                    khá ổn định nên mình quyết định sẽ chau chuốt và nghiêm túc
                    với nó.
                  </p>
                  <p>
                    Khó khăn thì khoảng thời gian đầu mình bỏ khá nhiều thời
                    gian, công sức và tiền bạc cho việc này, có những lúc hầu
                    như bế tắc nhưng mà mình vẫn vượt qua được.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092648--16-158988.jpg")
                        .default
                    }
                    alt="Game, Manga, Anime, Cosplay, Cosplayer, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092648--17-192820.jpg")
                        .default
                    }
                    alt="Game, Manga, Anime, Cosplay, Cosplayer, "
                    note=""
                  />
                  <h3>
                    Chọn cos những nhân vật sexy, đây là những nhân vật và phong
                    cách mà bạn yêu thích đúng không?
                  </h3>
                  <p>
                    Những nhân vật mình cos đều là những nhân vật mình thích
                    hết, mình tìm hiểu rất kĩ biểu cảm cũng như mọi thứ về nhân
                    vật đó, và mình luôn chọn những nhân vật giống giống tính
                    mình để dễ biểu đạt được đầy đủ nhất của nhân vật đó.
                  </p>
                  <p>
                    Những nhân vật này khá "nhạy cảm" và có thể sẽ khiến cho bạn
                    gặp phiền phức, rắc rối. Vậy thực tế, bạn đã gặp phải trường
                    hợp nào khó xử chưa?
                  </p>
                  <p>
                    Mình từ bị quấy rối nhắn tin, gọi điện thậm chí có những
                    người rất thô lỗ với mình khiến mình rất mệt mỏi.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092648--18-037429.jpg")
                        .default
                    }
                    alt="Game, Manga, Anime, Cosplay, Cosplayer, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092648--19-790047.jpg")
                        .default
                    }
                    alt="Game, Manga, Anime, Cosplay, Cosplayer, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092648--20-670999.jpg")
                        .default
                    }
                    alt="Game, Manga, Anime, Cosplay, Cosplayer, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092648--21-455209.jpg")
                        .default
                    }
                    alt="Game, Manga, Anime, Cosplay, Cosplayer, "
                    note=""
                  />
                  <h3>Bạn xử lý như thế nào trong các tình huống đó?</h3>
                  <p>
                    Những tình huống như thế mình hay thường chặn, có lúc suýt
                    nữa mình đi kiện tụng vì bị làm phiền quá nhiều. Nhưng mà
                    mọi thứ vẫn trong tầm kiểm soát nên không sao.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092648--22-255444.jpg")
                        .default
                    }
                    alt="Game, Manga, Anime, Cosplay, Cosplayer, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092648--23-199049.jpg")
                        .default
                    }
                    alt="Game, Manga, Anime, Cosplay, Cosplayer, "
                    note=""
                  />
                  <h3>
                    Hiện tại, động lực và mục tiêu của bạn trong năm nay là gì?
                  </h3>
                  <p>
                    Hiện tại, động lực và mục tiêu để mình trang trải cuộc sống,
                    mua những thứ mình thích là được.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092648--24-218713.jpg")
                        .default
                    }
                    alt="Game, Manga, Anime, Cosplay, Cosplayer, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092648--25-400169.jpg")
                        .default
                    }
                    alt="Game, Manga, Anime, Cosplay, Cosplayer, "
                    note=""
                  />
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
