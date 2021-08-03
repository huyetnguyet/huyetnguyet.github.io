import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature, RelationNews } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 08/06/2021 02:03 PM",
"title": Đấu Trường Chân Lý: 3 đội hình bỗng nhiên được tin dùng trở lại nhờ khả năng khắc chế 'meta Thây Ma'",
"description": Những đội hình dưới đây sẽ giúp game thủ Đấu Trường Chân Lý hạ gục những team-comp xoay quanh Thây Ma khá đơn giản.",
"src": ",
"alt": Dau Truong Chan Ly, Cam Nang Dau Truong Chan Ly, Riot Games, Game, Riot, Tin Game, Mordekaiser, Trundle, Yasuo, Karma, Riven, ",
"category": games",
"date": 08/06/2021",
"time": 02:03 PM",
"link": "/dau-truong-chan-ly-3-doi-hinh-bong-nhien-duoc-tin-dung-tro-lai-nho-kha-nang-khac-che-meta-thay-ma",
"zcomponent": page_20210608140326",
"filepath": ./20210608140326-dau-truong-chan-ly-3-doi-hinh-bong-nhien-duoc-tin-dung-tro-lai-nho-kha-nang-khac-che-meta-thay-ma.js"
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
  "Đấu Trường Chân Lý: 3 đội hình bỗng nhiên được tin dùng trở lại nhờ khả năng khắc chế 'meta Thây Ma'";
const author = "A Đồi";
const source = "Trí Thức Trẻ";
const timestamp = "08/06/2021 02:03 PM";
const description =
  "Những đội hình dưới đây sẽ giúp game thủ Đấu Trường Chân Lý hạ gục những team-comp xoay quanh Thây Ma khá đơn giản.";
const link =
  "dau-truong-chan-ly-3-doi-hinh-bong-nhien-duoc-tin-dung-tro-lai-nho-kha-nang-khac-che-meta-thay-ma";
const tagparam = [
  "dau-truong-chan-ly",
  "cam-nang-dau-truong-chan-ly",
  "riot-games",
  "game",
  "riot",
  "tin-game",
  "mordekaiser",
  "trundle",
  "yasuo",
  "karma",
  "riven",
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

export default function page_20210608140326() {
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
                    <h4>
                      <strong>Yasuo</strong> - Ma Sứ
                    </h4>
                    <p>
                      Tại giai đoạn đầu của bản 11.11, có quá nhiều đội hình
                      reroll ở cấp 6 đã trở nên vô cùng mạnh mẽ và thống trị
                      meta. Vì vậy việc giữ được lượng vàng, máu lớn để tìm kiếm{" "}
                      <strong>Yasuo</strong> 3 sao tại level 7 là cực kỳ khó nên
                      đội hình này không được <strong>game</strong> thủ Đấu
                      Trường Chân Lý quá trọng dụng. Tuy nhiên tới khi meta
                      chuyển dần về việc chơi xoay quanh Thây Ma thì đội hình
                      này lại có dấu hiệu hot trở lại. Thậm chí tỷ lệ lọt top 4
                      của team Yasuo - Thây Ma hiện đang ở mức vô cùng cao.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/yasuo-16231430857111318751965.png"
                      alt="Dau Truong Chan Ly, Cam Nang Dau Truong Chan Ly, Riot Games, Game, Riot, Tin Game, Mordekaiser, Trundle, Yasuo, Karma, Riven, "
                      note="Đội hình Yasuo - Ma Sứ đang có tới 56,8% tỷ lệ lọt vào top 4"
                    />
                    <p>
                      Với việc sử dụng <strong>Trundle</strong> như một đơn vị
                      chống chịu chính, <strong>game</strong> thủ có thể khắc
                      chế Thây Ma Biến Dị một cách cực kỳ hiệu quả ở cuối trận.
                      Khả năng đánh cắp máu, sát thương và chỉ số phòng ngự từ
                      kỹ năng của Trundle có thể khiến Thây Ma Biến Dị trở nên
                      "mềm" và dễ bị hạ gục hơn hẳn. Hơn nữa, đội hình{" "}
                      <strong>Yasuo</strong> - Ma Sứ không hề sử dụng chủ lực
                      hàng sau, vì vậy Thây Ma Biến Dị chỉ có thể lao vào những
                      unit chống chịu như Trundle, <strong>Mordekaiser</strong>{" "}
                      hay Pantheon mà thôi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/yasuo1-16231432139321133308341.png"
                      alt="Dau Truong Chan Ly, Cam Nang Dau Truong Chan Ly, Riot Games, Game, Riot, Tin Game, Mordekaiser, Trundle, Yasuo, Karma, Riven, "
                      note="Đội hình Yasuo - Ma Sứ hoàn chỉnh"
                    />
                    <h4>6 Thần Sứ</h4>
                    <p>
                      Những tưởng đã biến mất hoàn toàn khỏi meta thì team 6
                      Thần Sứ lại có một pha trở lại khá ngoạn mục ở cuối phiên
                      bản 11.11. Về cơ bản thì đội hình này không hề khác biệt
                      so với giai đoạn đầu mùa khi <strong>Karma</strong> vẫn là
                      chủ lực chính và được hỗ trợ bởi 2 unit Tà Thần gồm
                      Volibear và Ivern. Điều khiến cho team Thần Sứ được sử
                      dụng nhiều trở lại đó là hiệu ứng hồi phục quá mạnh, vượt
                      ra khỏi khả năng gây sát thương bùng nổ của Thây Ma Biến
                      Dị.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/5/16/karma-16211343482622013261634.jpg"
                      alt="Dau Truong Chan Ly, Cam Nang Dau Truong Chan Ly, Riot Games, Game, Riot, Tin Game, Mordekaiser, Trundle, Yasuo, Karma, Riven, "
                      note="Khả năng hồi phục của tộc Thần Sứ vượt ra khỏi khả năng gây sát thương của Thây Ma Biến Dị"
                    />
                    <p>
                      Để tận dụng tốc độ đánh lớn của Thây Ma Biến Dị sau khi
                      lao tới mục tiêu, <strong>game</strong> thủ thường ghép
                      các item như Vô Cực Kiếm hay Cuồng Cung Runaan. Tuy nhiên,
                      với hiệu ứng hồi 90% máu tối đa ở mốc 6 tướng thì cả đội
                      hình Thần Sứ không hề ngại lượng sát thương lớn từ Thây Ma
                      Biến Dị. Sau khi sống sót qua lần dùng chiêu đầu tiên thì
                      những đơn vị như <strong>Karma</strong>,{" "}
                      <strong>Riven</strong> có thể dễ dàng "làm gỏi" đội hình
                      Thây Ma với lượng sát thương lớn của mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/karma-16231432807611906818847.png"
                      alt="Dau Truong Chan Ly, Cam Nang Dau Truong Chan Ly, Riot Games, Game, Riot, Tin Game, Mordekaiser, Trundle, Yasuo, Karma, Riven, "
                      note="Đội hình 6 Ma Sứ ở cấp 8"
                    />
                    <h4>Quân Đoàn - Tiên Tộc</h4>
                    <p>
                      Tương tự như đội hình <strong>Yasuo</strong> - Ma Sứ, team
                      Quân Đoàn - Tiên Tộc cũng không hề ngại khả năng lao vào
                      tuyến sau của Thây Ma Biến Dị. Về cơ bản thì những chủ lực
                      của đội hình này như <strong>Mordekaiser</strong>, Yasuo,{" "}
                      <strong>Riven</strong> đều là các tướng cận chiến và bạn
                      có thể dùng Draven như một unit để "bait" Thây Ma Biến Dị.
                      Nếu bạn có thể kích hoạt hiệu ứng Tiên Tộc từ sớm thì
                      Draven cũng không hề ngại tộc Thây Ma bởi đã có sẵn khả
                      năng miễn nhiễm khống chế rồi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/-16231433259551745768821.jpg"
                      alt="Dau Truong Chan Ly, Cam Nang Dau Truong Chan Ly, Riot Games, Game, Riot, Tin Game, Mordekaiser, Trundle, Yasuo, Karma, Riven, "
                      note="Các chủ lực cận chiến như Mordekaiser không hề ngại Thây Ma Biến Dị"
                    />
                    <p>
                      Chúng ta cần nhớ rằng hầu hết các đội hình dựa vào tộc
                      Thây Ma đều không có tuyến trước quá "trâu bò". Với lượng
                      tốc độ đánh lớn và sát thương khủng thì team Quân Đoàn có
                      thể dọn dẹp đội hình Thây Ma một cách cực kỳ nhanh chóng,
                      đặc biệt là <strong>Riven</strong> với lối lên đồ dựa vào
                      Cuồng Cung Runaan. Khi đó thì dù Thây Ma Biến Dị của team
                      bạn có bá đạo tới đâu thì cũng không thể một mình hạ gục
                      hết tất cả các unit còn lại.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/quan-doan-16231434801441002679467.png"
                      alt="Dau Truong Chan Ly, Cam Nang Dau Truong Chan Ly, Riot Games, Game, Riot, Tin Game, Mordekaiser, Trundle, Yasuo, Karma, Riven, "
                      note="Đội hình 6 Quân Đoàn tỏ ra cực kỳ mạnh khi được các unit Tiên Tộc hỗ trợ"
                    />
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
