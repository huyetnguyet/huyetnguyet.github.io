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
"timestamp": '19/08/2021 01:01 PM',
"title": 'Những dự án game blockchain đáng chú ý của người Việt',
"description": 'Ngoài Axie Infinity, một số dự án game blockchain kiếm tiền đang nhận được sự quan tâm của đông đảo game thủ, dù vẫn còn đang ở những giai đoạn phát triển rất sớm.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-3-16292811337451720211475.jpg',
"alt": 'dự án game,giai đoạn phát triển,lập trình viên,Game nhập vai,nhân vật ảo,nhà phát triển,',
"category": 'games',
"date": '19/08/2021',
"time": '01:01 PM',
"link": '/nhung-du-an-game-blockchain-dang-chu-y-cua-nguoi-viet',
"zcomponent": 'page_20210819130158',
"filepath": './20210819130158-nhung-du-an-game-blockchain-dang-chu-y-cua-nguoi-viet.js'
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
const title = "Những dự án game blockchain đáng chú ý của người Việt";
const author = "PHƯƠNG NGUYỄN,";
const source = "ICTNews";
const timestamp = "19/08/2021 01:01 PM";
const description =
  "Ngoài Axie Infinity, một số dự án game blockchain kiếm tiền đang nhận được sự quan tâm của đông đảo game thủ, dù vẫn còn đang ở những giai đoạn phát triển rất sớm.";
const link = "nhung-du-an-game-blockchain-dang-chu-y-cua-nguoi-viet";
const tagparam = [
  "dự án game",
  "giai đoạn phát triển",
  "lập trình viên",
  "Game nhập vai",
  "nhân vật ảo",
  "nhà phát triển",
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

export default function page_20210819130158() {
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
                      Ngoài Axie Infinity, một số <strong>dự án game</strong>{" "}
                      blockchain kiếm tiền đang nhận được sự quan tâm của đông
                      đảo game thủ, dù vẫn còn đang ở những{" "}
                      <strong>giai đoạn phát triển</strong> rất sớm.
                    </p>
                    <p>
                      Từ trước khi Axie Infinity ra đời, các{" "}
                      <strong>lập trình viên</strong> Việt đã biết đến những
                      khái niệm như chuỗi khối (blockchain), chơi game kiếm tiền
                      (play to earn) và tác phẩm số (NFT). Nhưng phải đến khi
                      Axie Infinity gặt hái được thành công vang dội, các studio
                      Việt mới có thêm động lực và sự tự tin để nhảy vào sân
                      chơi mang quy mô toàn cầu này.
                    </p>
                    <p>
                      Dưới đây là những <strong>dự án game</strong> blockchain
                      đáng chú ý của người Việt đã, đang và sắp ra mắt:
                    </p>
                    <h5>My DeFi Pet</h5>
                    <p>
                      My DeFi Pet là một <strong>dự án game</strong> blockchain
                      Việt vừa ra mắt hồi tháng 5. Đây là game kết hợp giữa nuôi
                      thú và xây dựng vùng đất có nhiều điểm giống Axie
                      Infinity.
                    </p>
                    <p>
                      Khác biệt lớn nhất có lẽ nằm ở công nghệ, khi Axie
                      Infinity chạy trên mạng lưới Ethereum vì thế phí mua các
                      thú cưng khá đắt đỏ. Còn My DeFi Pet tích hợp trên mạng
                      lưới Binance Smart Chain nên phí tương đối rẻ cho người
                      mới bắt đầu chơi.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-1-16292811314322062890715.jpg"
                      alt="1, dự án game,giai đoạn phát triển,lập trình viên,Game nhập vai,nhân vật ảo,nhà phát triển,"
                      note="My DeFi Pet có nhiều điểm khá tương đồng với Axie Infinity"
                    />
                    <p>
                      Đây được xem là dự án lớn nhất chỉ sau Axie Infinity với
                      đội ngũ phát triển nhiều kinh nghiệm đứng đầu là CEO Trí
                      Phạm, cũng là người sáng lập nền tảng blockchain
                      KardiaChain.My DeFi Pet có đồng tiền ảo riêng gọi là DPet.
                      Đồng này đã được phát hành 6,8 triệu trên tổng cung 100
                      triệu đồng. DPet có giá trị 6,27 USD với vốn hóa là 43
                      triệu USD cùng 163.000 địa chỉ ví nắm giữ đồng này.
                    </p>
                    <p>
                      Theo lộ trình, My DeFi Pet sẽ cập nhật các tính năng mới
                      như PvP, PvE, vượt tháp, nhiệm vụ hàng ngày, boss thế giới
                      trong khoảng cuối năm nay, đầu năm sau.
                    </p>
                    <h5>Faraland</h5>
                    <p>
                      Tương đối khác biệt với hai cái tên kể trên là Faraland,
                      một <strong>game nhập vai</strong> chiến đấu theo lượt,
                      nơi người chơi xây dựng anh hùng chiến đấu chống lại kẻ
                      địch. Game hiện đang ở giai đoạn người chơi mới chỉ được
                      chọn mua các lớp nhân vật.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-1-16292811336391712817451.jpg"
                      alt="2, dự án game,giai đoạn phát triển,lập trình viên,Game nhập vai,nhân vật ảo,nhà phát triển,"
                      note="Faraland vẫn chưa ra mắt nhưng đã thu hút khá đông người chơi mua các nhân vật ảo trên chợ"
                    />
                    <p>
                      Mặc dù vẫn đang trong quá trình phát triển và chưa chơi
                      được, dự án Faraland đã thu hút được hơn 20.000 ví nắm giữ
                      đồng tiền ảo Fara. Đồng này hiện có giá trị 3,72 USD với
                      vốn hóa là 32 triệu USD. Faraland là một dự án trên
                      Binance Smart Chain có 8,8 triệu đồng đang lưu hành trên
                      tổng cung 100 triệu đồng.
                    </p>
                    <h5>MeebMaster</h5>
                    <p>
                      MeebMaster là một dự án nuôi thú vẫn còn khá mới của người
                      Việt. Trong game, người chơi cũng sẽ nuôi thú, chăm sóc và
                      xếp đội hình cho chúng để chiến đấu với người chơi khác.
                      Game được phát triển bởi studio khá nhiều kinh nghiệm là
                      Gemmob ở Hà Nội.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-2-16292811341871572936505.jpg"
                      alt="3, dự án game,giai đoạn phát triển,lập trình viên,Game nhập vai,nhân vật ảo,nhà phát triển,"
                      note="MeebMaster cũng đi theo phong cách nuôi thú giống những người tiền bối như Axie Infinity, My Defi Pet"
                    />
                    <p>
                      Được xây dựng trên mạng lưới Polygon, Meeb Token hiện có
                      giá trị 4 USD với 3 triệu đồng đã lưu hành trên tổng cung
                      21 triệu đồng.
                    </p>
                    <h5>Theta Arena</h5>
                    <p>
                      Khác biệt với phần còn lại là <strong>dự án game</strong>{" "}
                      đấu trường sinh tồn Theta Arena. Đây là dự án có gameplay
                      rõ ràng nhất so với các game blockchain hàng Việt đang
                      phát hành trên thị trường. Game hứa hẹn có các chế độ chơi
                      đơn hoặc chơi đôi chiến đấu với 21 hoặc 42 người khác.
                      Ngoài ra còn có các chế độ tổ đội 4vs4 sinh tồn và 4vs4
                      phá trụ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/photo-3-16292811337451720211475.jpg"
                      alt="4, dự án game,giai đoạn phát triển,lập trình viên,Game nhập vai,nhân vật ảo,nhà phát triển,"
                      note="Theta Arena vẫn còn rất mới nhưng đã được đánh giá khá cao ở gameplay"
                    />
                    <p>
                      Theta Arena được phát triển bởi WolfFun, một studio có
                      nhiều tiếng vang với các sản phẩm có hàng triệu lượt tải.
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
