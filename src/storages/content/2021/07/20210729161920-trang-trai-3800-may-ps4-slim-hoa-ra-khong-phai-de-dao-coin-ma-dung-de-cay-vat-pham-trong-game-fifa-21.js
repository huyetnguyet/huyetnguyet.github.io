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
"timestamp": '29/07/2021 04:19 PM',
"title": 'Trang trại 3.800 máy PS4 Slim hoá ra không phải để đào coin, mà dùng để "cày" vật phẩm trong game FIFA 21',
"description": 'PS4 có thể kiếm tiền, nhưng không bằng cách khai thác tiền điện tử.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/photo-1-1626707442669514919282.png',
"alt": 'COIN,CỘNG ĐỒNG MẠNG,PS4 SLIM,TIN TỨC GAME,PS4,',
"category": 'games',
"date": '29/07/2021',
"time": '04:19 PM',
"link": '/trang-trai-3800-may-ps4-slim-hoa-ra-khong-phai-de-dao-coin-ma-dung-de-cay-vat-pham-trong-game-fifa-21',
"zcomponent": 'page_20210729161920',
"filepath": './20210729161920-trang-trai-3800-may-ps4-slim-hoa-ra-khong-phai-de-dao-coin-ma-dung-de-cay-vat-pham-trong-game-fifa-21.js'
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
  'Trang trại 3.800 máy PS4 Slim hoá ra không phải để đào coin, mà dùng để "cày" vật phẩm trong game FIFA 21';
const author = "RYANKOG";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/07/2021 04:19 PM";
const description =
  "PS4 có thể kiếm tiền, nhưng không bằng cách khai thác tiền điện tử.";
const link =
  "trang-trai-3800-may-ps4-slim-hoa-ra-khong-phai-de-dao-coin-ma-dung-de-cay-vat-pham-trong-game-fifa-21";
const tagparam = ["COIN", "CỘNG ĐỒNG MẠNG", "PS4 SLIM", "TIN TỨC GAME", "PS4"];
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

export default function page_20210729161920() {
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
                    Vừa qua, chúng ta đã có thông tin rằng Cơ quan An ninh của
                    Ukraine (SSU) đóng cửa "một trang trại khai thác tiền điện
                    tử" đang ăn cắp điện trực tiếp từ một nhà máy điện nằm gần
                    đó và thu giữ hàng chục CPU, hàng trăm card đồ họa và 3.800
                    máy chơi game PlayStation 4 Slim được cho là để “khai thác
                    tiền điện tử”. Tuy nhiên, có gì đó không bình thường, vì
                    việc khai thác tiền điện tử trên{" "}
                    <strong>
                      <strong>PS4</strong> Slim
                    </strong>{" "}
                    dường như không phải là một ý tưởng hay.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Hoá ra, “trang trại” này đã dùng số{" "}
                    <strong>
                      <strong>PS4</strong> Slim
                    </strong>{" "}
                    cho việc khác: chạy bot để có được tiền tệ trong FIFA 21.
                  </p>
                  <p>
                    Như hình ảnh từ SSU đã chứng minh, các máy PlayStation 4
                    Slim ở trang trại này có đĩa trò chơi trong đó, thứ mà bạn
                    không cần khi muốn khai thác Ethereum hoặc Bit
                    <strong>coin</strong>. Hóa ra, trò chơi này là FIFA 21 và
                    trang trại được sử dụng để kiếm tiền trong trò chơi và /
                    hoặc nhận các nhân vật quý hiếm. Những người điều hành trang
                    trại sau đó có thể bán những tài khoản này để lấy tiền.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/photo-1-16267074257551725053289.jpg"
                    alt="1, COIN,CỘNG ĐỒNG MẠNG,PS4 SLIM,TIN TỨC GAME,PS4,"
                    note="Các máy PS4 Slim có chứa đĩa game"
                  />
                  <p>
                    Giống như nhiều game thể thao khác hiện nay, FIFA 21 có chế
                    độ Ultimate Team, về mặt lý thuyết cho phép game thủ xây
                    dựng một đội bóng trong mơ của họ bằng cách sử dụng các thẻ
                    cầu thủ có được từ lootbox. Lootbox có thể được mua bằng
                    tiền tệ trong trò chơi hoặc bằng tiền thật. Lưu ý là cơ hội
                    để có được một nhân vật thực sự mạnh là dưới 1%, vì vậy game
                    thủ có thể phải bỏ ra cả tấn tiền mà không kiếm được một cầu
                    thủ tử tế. Trong khi đó, việc kiếm tiền trong trò chơi mất
                    rất nhiều thời gian vì nó đòi hỏi rất nhiều công đoạn (thực
                    hiện các nhiệm vụ lặp đi lặp lại).
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/photo-1-1626707442669514919282.png"
                    alt="2, COIN,CỘNG ĐỒNG MẠNG,PS4 SLIM,TIN TỨC GAME,PS4,"
                    note=""
                  />
                  <p>
                    Các bot tự động chơi số giờ và đơn vị tiền tệ cần thiết trên
                    máy game, sau đó tài khoản được bán trong các cửa hàng trực
                    tuyến. Trong các cửa hàng như vậy, bạn có thể tìm thấy quảng
                    cáo bán tài khoản FIFA với các đội có sẵn. Ví dụ: trên một
                    trong các trang web này (hình bên dưới), một người dùng bán
                    các tài khoản khác nhau với giá 1.500 UAH (với đội trị giá
                    1,3 tỷ tiền tệ trong trò chơi) và 2.500 UAH, khoảng 50 đến
                    100 USD.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/19/photo-2-16267074421511400274836.jpg"
                    alt="3, COIN,CỘNG ĐỒNG MẠNG,PS4 SLIM,TIN TỨC GAME,PS4,"
                    note=""
                  />
                  <p>
                    “Cày” những vật phẩm hiếm rõ ràng là những gì các hệ thống
                    PlayStation 4 Slim này, được điều khiển bởi PC và mạng
                    nơ-ron, hướng đến nhằm kiếm tiền trong trò chơi. Sau đó, họ
                    có thể bán tài khoản chứa đầy tiền tệ trong game cho những
                    người muốn thử vận may và kiếm một cầu thủ hiếm bằng cách
                    mua lootbox hoặc lấy nhân vật hiếm đó để bán lại với giá cao
                    hơn. Bán tiền tệ trong game như không sinh lợi quá nhiều,
                    nhưng cố gắng có được một nhân vật hiếm thì rất khó. Vì họ
                    sử dụng điện miễn phí, thậm chí một việc như vậy cũng có thể
                    có ý nghĩa về mặt tài chính đối với họ.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-3-16267074416621466090907.jpg"
                    alt="4, COIN,CỘNG ĐỒNG MẠNG,PS4 SLIM,TIN TỨC GAME,PS4,"
                    note=""
                  />
                  <p>
                    Không chỉ <strong>PS4</strong> và CPU, trang trại này còn có
                    ước tính khoảng 500 card đồ hoạ. Với 500 card đồ họa, cùng
                    một trang trại đó cũng có thể khai thác Ethereum. Trong khi
                    đó, 500 card đồ họa cũng có thể điều khiển các nhân vật
                    trong các game khác để đào tạo chúng, nhận tiền tệ trong trò
                    chơi và / hoặc lootbox. Có vẻ như đây là một hoạt động "cày
                    cuốc" khá đa dạng, có thể được sử dụng cho cả khai thác tiền
                    điện tử cũng như các nhân vật và tiền tệ trong game.
                  </p>
                  <p>Tham khảo: Tom's Hardware</p>
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
