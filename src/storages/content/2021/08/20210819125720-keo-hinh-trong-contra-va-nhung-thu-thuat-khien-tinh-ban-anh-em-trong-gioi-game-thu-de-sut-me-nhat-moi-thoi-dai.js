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
"timestamp": '19/08/2021 12:57 PM',
"title": 'Kéo hình trong Contra và những thủ thuật khiến tình bạn, anh em trong giới game thủ dễ sứt mẻ nhất mọi thời đại',
"description": 'Chơi game như thế này thì có ngày "combat thật" cũng không chừng.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/13/photo-1-16288460226071099198235.jpg',
"alt": 'GAME,GAME THỦ,TIN TỨC GAME,CONTRA,LEFT 4 DEAD,D-DAY,',
"category": 'games',
"date": '19/08/2021',
"time": '12:57 PM',
"link": '/keo-hinh-trong-contra-va-nhung-thu-thuat-khien-tinh-ban-anh-em-trong-gioi-game-thu-de-sut-me-nhat-moi-thoi-dai',
"zcomponent": 'page_20210819125720',
"filepath": './20210819125720-keo-hinh-trong-contra-va-nhung-thu-thuat-khien-tinh-ban-anh-em-trong-gioi-game-thu-de-sut-me-nhat-moi-thoi-dai.js'
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
  "Kéo hình trong Contra và những thủ thuật khiến tình bạn, anh em trong giới game thủ dễ sứt mẻ nhất mọi thời đại";
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 12:57 PM";
const description =
  'Chơi game như thế này thì có ngày "combat thật" cũng không chừng.';
const link =
  "keo-hinh-trong-contra-va-nhung-thu-thuat-khien-tinh-ban-anh-em-trong-gioi-game-thu-de-sut-me-nhat-moi-thoi-dai";
const tagparam = [
  "GAME",
  "GAME THỦ",
  "TIN TỨC GAME",
  "CONTRA",
  "LEFT 4 DEAD",
  "D-DAY",
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

export default function page_20210819125720() {
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
                      <strong>Game</strong> vốn được sinh ra với mục đích giải
                      trí, mang lại những phút giây vui vẻ cho người dùng. Thế
                      nhưng theo thời gian, các tựa game dần mang tính đối
                      kháng, cạnh tranh nhiều hơn nhất là khi dòng game MOBA
                      đang trở thành xu hướng lựa chọn hàng đầu của không ít
                      người chơi. Thậm chí, chúng còn có thể khiến nhiều người
                      trở nên cáu bẳn, toxic và hủy hoại cả tình bạn đẹp với
                      chính những người anh em chung chiến tuyến của mình nữa.
                      Từ những tựa game đời cũ, cho tới những LQMB, LMHT bây
                      giờ, tất cả đều có thể tạo ra điều này theo những cách
                      khác nhau.
                    </p>
                    <h5>Kéo hình trong Contra</h5>
                    <p>
                      Nhìn thì có vẻ chẳng ai nghĩ, <strong>Contra</strong> lại
                      là tựa <strong>game</strong> mang tới những tranh cãi, bất
                      hòa được. Về cơ bản, ngay cả ở chế độ chơi hai người, các{" "}
                      <strong>game thủ</strong> cũng sẽ phải đồng tâm hiệp lực
                      để đánh boss. Thế nhưng, tựa game này có một thủ thuật,
                      hay chính xác hơn là bug thường xuyên xảy ra đặc biệt là
                      với những bản đồ yêu cầu sự leo trò.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-1628845798165770969488.jpg"
                      alt="1, GAME,GAME THỦ,TIN TỨC GAME,CONTRA,LEFT 4 DEAD,D-DAY,"
                      note="Map càng nhảy nhiều thì càng dễ kéo hình nhé"
                    />
                    <p>
                      Cụ thể, nếu như bạn leo tới một mốc thang quá cao và màn
                      hình Tivi không thể kéo tới hình ảnh của người chơi cùng
                      đang ở bên dưới, đối phương sẽ tự động lăn ra "chết" một
                      cách rất trời ơi đất hỡi. Và đây cũng là lý do chính khiến
                      cho tựa <strong>game</strong> tưởng như khá hiền lành này
                      lại có thể gây ra nhiều bất đồng như vậy.
                    </p>
                    <h5>D-DAY</h5>
                    <p>
                      Đa số những tựa <strong>game</strong> MOBA hay custom map
                      mang tính đối kháng đều có thể gây ra bất hòa - điều này
                      chắc chắn không lạ. Thế nhưng, các tựa game ngày nay lại
                      có ít tranh cãi hơn, khi mà điều luật cũng như hệ thống
                      tướng, nhân vật luôn được cân bằng theo các phiên bản. Tuy
                      vậy, điều này lại không áp dụng với <strong>D-DAY</strong>
                      , khiến cho các <strong>game thủ</strong> Việt thậm chí
                      còn phải tự ra luật riêng, thay vì áp dụng mọi thứ vật
                      phẩm, chiêu thức trong trò chơi này.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-1628845894413705428680.jpg"
                      alt="2, GAME,GAME THỦ,TIN TỨC GAME,CONTRA,LEFT 4 DEAD,D-DAY,"
                      note="Trong D-DAY có vô vàn cách để chơi xấu đối thủ nhé"
                    />
                    <p>
                      Và tất nhiên, có người ra luật thì cũng sẽ có kẻ phá luật.
                      Đã có không ít trường hợp đang từ anh em thân thiết bỗng
                      chốc huynh đệ tương tàn ngay tại quán net cỏ cũng chỉ vì
                      những thủ thuật phá luật đầy tinh quái trong{" "}
                      <strong>D-DAY</strong>. Từ việc dùng nông dân xây trụ def
                      nhà, mua hồi sinh, sử dụng bug <strong>game</strong>, tất
                      cả đều có thể kích động những cái đầu nóng cả.
                    </p>
                    <h5>Left 4 Dead</h5>
                    <p>
                      Về cơ bản, <strong>Left 4 Dead</strong> là tựa{" "}
                      <strong>game</strong> mang tính đồng đội rất cao với điểm
                      nhấn là sự phối hợp, tương thân tương ái giữa mọi người
                      chơi. Thế nhưng, cũng có không ít những tình bạn từng tan
                      rã vì trò chơi này. Một số trường hợp có thể dễ dàng kể
                      tới như cậy mạnh đi trước bỏ đồng đội, gây sự với Witch và
                      thậm chí là không san sẻ máu cho các huynh đệ của mình.
                    </p>
                    <p>
                      Thêm nữa, <strong>Left 4 Dead</strong> có chế độ Friendly
                      Fire - tức là tự tàn sát lẫn nhau giữa các người chơi. Do
                      đó, nhiều người thậm chí còn biến tựa{" "}
                      <strong>game</strong> bắn zombie sinh tồn này thành một
                      cuộc đấu súng đúng nghĩa giữa anh em với nhau.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/13/photo-1-16288460226071099198235.jpg"
                      alt="3, GAME,GAME THỦ,TIN TỨC GAME,CONTRA,LEFT 4 DEAD,D-DAY,"
                      note=""
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
