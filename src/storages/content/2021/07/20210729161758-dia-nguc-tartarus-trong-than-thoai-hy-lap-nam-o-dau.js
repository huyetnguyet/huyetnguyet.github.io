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
"timestamp": '29/07/2021 04:17 PM',
"title": 'Địa ngục Tartarus trong thần thoại Hy Lạp nằm ở đâu?',
"description": 'Tartarus là vực thẳm địa ngục trong thần thoại Hy Lạp, nơi đem lại nỗi đau khổ cho các Titan bị giam giữ. Tartarus cũng là tên của một vị thần, cổ xưa và nguyên thủy, tồn tại trước cả Titan và Olympus.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/16/aion-and-gaia-162642442147914292086.jpg',
"alt": 'KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI HY LẠP,CUỘC SỐNG,',
"category": 'news',
"date": '29/07/2021',
"time": '04:17 PM',
"link": '/dia-nguc-tartarus-trong-than-thoai-hy-lap-nam-o-dau',
"zcomponent": 'page_20210729161758',
"filepath": './20210729161758-dia-nguc-tartarus-trong-than-thoai-hy-lap-nam-o-dau.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title = "Địa ngục Tartarus trong thần thoại Hy Lạp nằm ở đâu?";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:17 PM";
const description =
  "Tartarus là vực thẳm địa ngục trong thần thoại Hy Lạp, nơi đem lại nỗi đau khổ cho các Titan bị giam giữ. Tartarus cũng là tên của một vị thần, cổ xưa và nguyên thủy, tồn tại trước cả Titan và Olympus.";
const link = "dia-nguc-tartarus-trong-than-thoai-hy-lap-nam-o-dau";
const tagparam = ["KHÁM PHÁ", "THẦN THOẠI", "THẦN THOẠI HY LẠP", "CUỘC SỐNG"];
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

export default function page_20210729161758() {
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
                    Dù từng được nhắc đến với hai ý nghĩa khác nhau trong{" "}
                    <strong>thần thoại</strong> Hy Lạp, nhưng có vẻ như ý tưởng
                    Tartarus là địa ngục được biết đến nhiều hơn. Ban đầu, người
                    ta tưởng tượng Tartarus là một cái hố sâu bên dưới Trái Đất,
                    nhưng sau đó nó lại được tái tưởng tượng lại thành một kiểu
                    địa ngục, nơi những kẻ phạm tội ác nghiêm trọng khi còn sống
                    phải chịu trừng phạt ở đó.
                  </p>
                  <h5>Tartarus trong Theogony của Hesiod</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/the2btitans-16264245324331665273349.png"
                    alt="3, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI HY LẠP,CUỘC SỐNG,"
                    note=""
                  />
                  <p>
                    Trong Theogony của Hesiod, Tartarus là một trong số những
                    thực thể đầu tiên xuất hiện khi vũ trụ được tạo ra, và đối
                    nghịch với Gaia (Đất).
                  </p>
                  <p>
                    "Trước tiên ra Hang Sâu; và sau đó là Đất có bộ ngực phì
                    nhiêu, chỗ ngồi vững chắc vĩnh hằng của tất thảy các đấng
                    bất tử trên đỉnh Olympus tuyết phủ; Tartara (số nhiều của
                    Tartarus) mù sương ở trong nơi lõm sâu vào lòng đất thênh
                    thang;"
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/16/aion-and-gaia-162642442147914292086.jpg"
                    alt="2, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI HY LẠP,CUỘC SỐNG,"
                    note=""
                  />
                  <p>
                    Giống như các nhân vật nguyên thủy khác, Tartarus được xem
                    là một thực thể thuần túy hơn là các vị thần như Titan hay
                    Olympus, và được liên kết với ý tưởng về địa điểm. Tương tự
                    như Gaia không phải thần đất, mà chính là Đất. Tartarus
                    không phải thần vực thẳm, mà chính là vực thẳm.
                  </p>
                  <p>
                    Điều khác biệt giữa hai hình tượng là Gaia tham gia nhiều
                    hơn vào các sự kiện trong <strong>thần thoại</strong>, đặc
                    biệt là trong thần thoại giải thích sự nắm quyền của Kronos
                    và việc lật đổ Ouranos của vị thần này. Trong qua trình đó,
                    Gaia, vốn là một nguyên tố được biến thành hình tượng cụ thể
                    hơn, giúp cho các độc giả của Hesiod dễ liên tưởng. Gaia lập
                    mưu lật đổ Ouranos, nói chuyện với các Titan con của bà và
                    vui mừng khi Kronos thực hiện kế hoạch. Còn Tartarus thì
                    ngược lại, không được miêu tả theo cách này trong các câu
                    chuyện thần thoại.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Tartarus là nơi các vị thần giam giữ những kẻ đe dọa đến sự
                    cai trị của họ. Nguy hiểm nhất trong số này có lẽ là các
                    Titan. Việc này diễn ra sau trận đại chiến giữa Titan và các
                    thần Olympus, Titan bị đánh bại, rồi bị cầm tù trong
                    Tartarus. Theo Hesiod, nơi này sẽ do Kottos, Gyges và
                    Briareos – những cận vệ trung thành của thần Zeus canh giữ.
                  </p>
                  <h5>Tưởng tượng mới về Tartarus</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/16/hell-1626424388477921900221.jpg"
                    alt="1, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI HY LẠP,CUỘC SỐNG,"
                    note=""
                  />
                  <p>
                    Ở thời kỳ sau này, người Hy Lạp tưởng tưởng Tartarus không
                    chỉ là nơi giam giữ kẻ thù của các vị thần Olympus mà còn là
                    chốn trừng phạt những kẻ đã phạm tội ác khủng khiếp. Với vai
                    trò lãnh địa trừng phạt những kẻ ác, Tartarus lại là phiên
                    bản đối nghịch với Elysium, nơi những người ngay thẳng sinh
                    sống.
                  </p>
                  <p>
                    Một vài trong số các nhân vật được biết đến rộng rãi chịu
                    hình phạt ở Tartarus có Tantalus (phạm tội khinh bỉ các vị
                    thần), Sisyphus (tội chơi khăm các vị thần), Ixion (cố tình
                    quyến rũ nữ thần Hera) và các nàng Danaide (49 thiếu nữ mắc
                    tội sát hại chồng). Có rất nhiều tội ác khác nhau có thể đưa
                    con người đến cảnh bị giam giữ trong Tartarus. Trong sử thi
                    Aeneid của Virgil, hành trình của Aeneas băng qua minh giới
                    đã miêu tả rất chi tiết.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/16/sisyphus-myth0-1622432459987768582235-16264245710191663276535.jpg"
                    alt="4, KHÁM PHÁ,THẦN THOẠI,THẦN THOẠI HY LẠP,CUỘC SỐNG,"
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
