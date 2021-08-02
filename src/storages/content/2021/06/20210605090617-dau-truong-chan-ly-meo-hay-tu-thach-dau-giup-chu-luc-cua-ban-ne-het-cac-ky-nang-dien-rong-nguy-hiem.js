import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 <ContentItem title="Đấu Trường Chân Lý: Mẹo hay từ Thách Đấu giúp chủ lực của bạn né hết các kỹ năng diện rộng nguy hiểm"\description="Game thủ Đấu Trường Chân Lý có thể áp dụng ngay lập tức những cách sắp xếp đội hình dưới đây." 
src="https://gamek.mediacdn.vn/133514250583805952/2021/6/5/volibear-16228629609371320914625.png" 
alt="Dau Truong Chan Ly, Riot Games, Cam Nang Dau Truong Chan Ly, Game, Riot, Tin Game, Teemo, Karma, Kennen, Volibear, Sett, " 
category="games" 
time="05/06/2021 09:06 AM" 
link="/dau-truong-chan-ly-meo-hay-tu-thach-dau-giup-chu-luc-cua-ban-ne-het-cac-ky-nang-dien-rong-nguy-hiem"/>

{title:"Đấu Trường Chân Lý: Mẹo hay từ Thách Đấu giúp chủ lực của bạn né hết các kỹ năng diện rộng nguy hiểm",\description:"Game thủ Đấu Trường Chân Lý có thể áp dụng ngay lập tức những cách sắp xếp đội hình dưới đây." ,
src:"https://gamek.mediacdn.vn/133514250583805952/2021/6/5/volibear-16228629609371320914625.png" ,
alt:"Dau Truong Chan Ly, Riot Games, Cam Nang Dau Truong Chan Ly, Game, Riot, Tin Game, Teemo, Karma, Kennen, Volibear, Sett, " ,
category:"games" ,
time:"05/06/2021 09:06 AM" ,
link:"/dau-truong-chan-ly-meo-hay-tu-thach-dau-giup-chu-luc-cua-ban-ne-het-cac-ky-nang-dien-rong-nguy-hiem",component:"page_20210605090617",
filepath:"../storages/content/20210605090617-dau-truong-chan-ly-meo-hay-tu-thach-dau-giup-chu-luc-cua-ban-ne-het-cac-ky-nang-dien-rong-nguy-hiem.js"},

Đấu Trường Chân Lý: Mẹo hay từ Thách Đấu giúp chủ lực của bạn né hết các kỹ năng diện rộng nguy hiểm
Game thủ Đấu Trường Chân Lý có thể áp dụng ngay lập tức những cách sắp xếp đội hình dưới đây.
https://gamek.mediacdn.vn/133514250583805952/2021/6/5/volibear-16228629609371320914625.png
Dau Truong Chan Ly, Riot Games, Cam Nang Dau Truong Chan Ly, Game, Riot, Tin Game, Teemo, Karma, Kennen, Volibear, Sett, 
games
05/06/2021
09:06 AM
/dau-truong-chan-ly-meo-hay-tu-thach-dau-giup-chu-luc-cua-ban-ne-het-cac-ky-nang-dien-rong-nguy-hiem
page_20210605090617
../storages/content/20210605090617-dau-truong-chan-ly-meo-hay-tu-thach-dau-giup-chu-luc-cua-ban-ne-het-cac-ky-nang-dien-rong-nguy-hiem.js




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
  "Đấu Trường Chân Lý: Mẹo hay từ Thách Đấu giúp chủ lực của bạn né hết các kỹ năng diện rộng nguy hiểm";
const author = "A Đồi";
const source = "Pháp luật và bạn đọc";
const date = "05/06/2021";
const time = "09:06 AM";
const description =
  "Game thủ Đấu Trường Chân Lý có thể áp dụng ngay lập tức những cách sắp xếp đội hình dưới đây.";
const link =
  "dau-truong-chan-ly-meo-hay-tu-thach-dau-giup-chu-luc-cua-ban-ne-het-cac-ky-nang-dien-rong-nguy-hiem";
const tagparam = [
  "dau-truong-chan-ly",
  "riot-games",
  "cam-nang-dau-truong-chan-ly",
  "game",
  "riot",
  "tin-game",
  "teemo",
  "karma",
  "kennen",
  "volibear",
  "sett",
];
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

export default function page_20210605090617() {
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>
                    Các kỹ năng gây sát thương hay khống chế diện rộng luôn là
                    vũ khí vô cùng mạnh mẽ và nguy hiểm trong Đấu Trường Chân
                    Lý. Đôi khi chủ lực của bạn có đầy đủ trang bị, cấp độ nhưng
                    vẫn không thể gây damage khi bị trúng phải những chiêu thức
                    diện rộng khó chịu của đối thủ. Nếu bạn muốn tìm cách để
                    thoát khỏi tình cảnh "bi đát" như vậy thì những hướng dẫn
                    dưới đây của kỳ thủ Thách Đấu - Mismatched Socks là vô cùng
                    hữu ích.
                  </p>
                  <p>
                    Đầu tiên, chúng ta sẽ nói tới vị tướng có kỹ năng khống chế
                    diện rộng nguy hiểm nhất - Volibear. Theo Mismatched Socks
                    chia sẻ, Volibear sẽ sử dụng kỹ năng lên mục tiêu mà unit
                    này đang tấn công. Vì vậy để tránh việc Volibear hất tung
                    chủ lực tuyến sau, game thủ nên đặt những quân cờ quan trọng
                    nhất ở khác phía so với vị thần gấu này. Hơn nữa, bạn cũng
                    phải đưa một unit chống chịu ra trước mặt Volibear để "bait"
                    chiêu thức nguy hiểm đó.
                  </p>
                  <p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/5/volibear-16228629609371320914625.png"
                      alt="Dau Truong Chan Ly, Riot Games, Cam Nang Dau Truong Chan Ly, Game, Riot, Tin Game, Teemo, Karma, Kennen, Volibear, Sett, "
                      note="
                    Một ví dụ về cách khắc chế Volibear được Mismatched Socks
                    khuyên dùng"
                    />
                  </p>
                  <p>
                    Một vị tướng gây khống chế diện rộng vô cùng khó chịu khác
                    mà bạn cũng cần phải khắc chế đó là Kennen. Nếu các bạn
                    không biết thì khi sử dụng chiêu thức, Kennen sẽ lướt ra sau
                    lưng mục tiêu đang tấn công và di chuyển về phía tướng địch
                    xa nhất. Vì vậy trái ngược với cách khắc chế Volibear, bạn
                    cần để chủ lực ở cùng phía với Kennen đối phương và đặt một
                    quân cờ khác ở góc đối diện. Khi đó thì những quân cờ chủ
                    lực của bạn sẽ được an toàn trước vị tướng này.
                  </p>
                  <p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/5/kennen1-1622862978025568864559.png"
                      alt="Dau Truong Chan Ly, Riot Games, Cam Nang Dau Truong Chan Ly, Game, Riot, Tin Game, Teemo, Karma, Kennen, Volibear, Sett, "
                      note="
                      Kennen sẽ di chuyển về mục tiêu ở xa nhất sau khi dùng chiêu
                      nên game thủ cần đặt chủ lực ở cùng phía với unit này"
                    />
                  </p>
                  <p>
                    Hơn nữa, nếu bạn sử dụng Sát Thủ thì khắc chế Kennen càng dễ
                    dàng hơn nữa. Với nội tại nhảy về phía hàng sau của đội bạn,
                    các unit Sát Thủ luôn luôn là mục tiêu xa nhất đối với
                    Kennen. Vì vậy khi sử dụng chiêu thức, Kennen sẽ lướt qua
                    mục tiêu đang tấn công và chạy ngược về phía Sát Thủ ở bên
                    kia sàn đấu.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/5/kennen2-16228629780571578030848.png"
                    alt="Dau Truong Chan Ly, Riot Games, Cam Nang Dau Truong Chan Ly, Game, Riot, Tin Game, Teemo, Karma, Kennen, Volibear, Sett, "
                    note="Bạn có thể dùng Sát Thủ để khắc chế Kennen"
                  />
                  <p>
                    Đối với các tướng gây sát thương diện rộng mạnh thì Sett có
                    lẽ là nhân vật nguy hiểm nhất hiện tại. Vị tướng này thậm
                    chí còn có thể "thổi bay" tuyến sau của bạn dù chọn mục tiêu
                    là tướng ở hàng trước. Để khắc chế khả năng này của Sett thì
                    Mismatched Socks chia sẻ rằng bạn nên để một ô trống trước
                    mặt vị tướng này và đặt unit chống chịu ở vị trí ngay bên
                    cạnh.
                  </p>
                  <p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/5/sett-16228630635181123357224.png"
                      alt="Dau Truong Chan Ly, Riot Games, Cam Nang Dau Truong Chan Ly, Game, Riot, Tin Game, Teemo, Karma, Kennen, Volibear, Sett, "
                      note="
                      Bạn nên đặt 1 ô trống trước mặt Sett để chủ lực né được
                      lượng sát thương của unit này"
                    />
                  </p>
                  <p>
                    Khi đó thì Sett sẽ tiến lên ô trống và sẽ tấn công unit
                    chống chịu của bạn theo phương ngang. Vì vậy khi Sett dùng
                    chiêu thì quân cờ này chỉ gây damage và trừ giáp các unit ở
                    hàng trước thay vì đe dọa lên chủ lực tuyến sau. Đây là cơ
                    hội để các tướng gây sát thương của team bạn hạ gục gã
                    "giang hồ xịn" này.
                  </p>
                  <p>
                    Về phần các vị tướng như Karma, Teemo, bạn nên tách đội hình
                    của mình ra để giảm thiểu lượng sát thương diện rộng mà
                    chúng có thể gây ra. Khi làm vậy thì chỉ có 1-2 unit trong
                    đội hình chịu sát thương của Karma hay Teemo mà thôi, các
                    quân cờ còn lại vẫn có đủ lượng máu để tấn công và hạ gục
                    đối thủ.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/karma-162286309522012739080.png"
                    alt="Dau Truong Chan Ly, Riot Games, Cam Nang Dau Truong Chan Ly, Game, Riot, Tin Game, Teemo, Karma, Kennen, Volibear, Sett, "
                    note="
                    Việc tách đội hình sẽ giúp game thủ hạn chế tối đa lượng
                    damage từ Teemo hay Karma"
                  />
                  <p>
                    Đương nhiên là bạn chỉ nên áp dụng cách này ở giai đoạn cuối
                    trận, khi còn ít người chơi trụ lại với trận đấu. Nếu có đối
                    thủ sử dụng đội hình Sát Thủ thì việc co cụm các unit lại là
                    phương án tốt hơn bởi chúng không thể ám sát chủ lực một
                    cách nhanh chóng.
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
