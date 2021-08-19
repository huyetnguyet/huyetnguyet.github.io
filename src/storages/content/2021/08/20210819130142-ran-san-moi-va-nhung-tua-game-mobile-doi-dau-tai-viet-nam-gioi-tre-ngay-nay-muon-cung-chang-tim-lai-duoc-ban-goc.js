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
"title": 'Rắn Săn Mồi và những tựa game mobile đời đầu tại Việt Nam, giới trẻ ngày nay muốn cũng chẳng tìm lại được bản gốc',
"description": 'Cái thời chưa có smartphone thì đây chính là những tựa game được chơi nhiều nhất tại Việt Nam.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628773009425905671914.jpg',
"alt": 'GAME THỦ,GAME,GAME MOBILE,TIN TỨC GAME,',
"category": 'games',
"date": '19/08/2021',
"time": '01:01 PM',
"link": '/ran-san-moi-va-nhung-tua-game-mobile-doi-dau-tai-viet-nam-gioi-tre-ngay-nay-muon-cung-chang-tim-lai-duoc-ban-goc',
"zcomponent": 'page_20210819130142',
"filepath": './20210819130142-ran-san-moi-va-nhung-tua-game-mobile-doi-dau-tai-viet-nam-gioi-tre-ngay-nay-muon-cung-chang-tim-lai-duoc-ban-goc.js'
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
  "Rắn Săn Mồi và những tựa game mobile đời đầu tại Việt Nam, giới trẻ ngày nay muốn cũng chẳng tìm lại được bản gốc";
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 01:01 PM";
const description =
  "Cái thời chưa có smartphone thì đây chính là những tựa game được chơi nhiều nhất tại Việt Nam.";
const link =
  "ran-san-moi-va-nhung-tua-game-mobile-doi-dau-tai-viet-nam-gioi-tre-ngay-nay-muon-cung-chang-tim-lai-duoc-ban-goc";
const tagparam = ["GAME THỦ", "GAME", "GAME MOBILE", "TIN TỨC GAME"];
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

export default function page_20210819130142() {
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
                      Thời nay, khi nhắc tới các tựa <strong>game</strong>{" "}
                      mobile, chắc hẳn nhiều người sẽ nghĩ ngay tới những cái
                      tên quen thuộc như PUBG Mobile, Free Fire hay Liên Quân
                      Mobile, đôi khi là cả Tốc Chiến. Đồng ý rằng đây đều là
                      những tựa game chất lượng, được đầu tư bài bản cả về
                      gameplay lẫn đồ họa thế nhưng, giới trẻ ngày nay còn lâu
                      mới biết được những tựa <strong>game mobile</strong> đời
                      đầu, tuy không hay như Free Fire hay LQMB, thậm chí có
                      phần đơn điệu nhưng lượng người chơi hồi đó thì chắc chắn
                      chẳng thua kém là bao đâu. Thậm chí bây giờ, chúng còn trở
                      thành "hàng hiếm", muốn cũng chẳng thể tìm lại phiên bản
                      gốc để chơi nữa.
                    </p>
                    <h5>Rắn Săn Mồi</h5>
                    <p>
                      Tựa <strong>game</strong> mobile kinh điển của giới{" "}
                      <strong>game thủ</strong> Việt chắc chắn chính là cái tên
                      Rắn Săn Mồi. Đồ họa đen trắng, phong cách chơi đơn giản
                      chỉ sử dụng các phím mũi tên nhưng lại khiến cho không ít
                      người say mê tới mức chơi quên cả thời gian, đồng thời còn
                      đua nhau thiết lập những kỷ lục điểm số không tưởng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628773009425905671914.jpg"
                      alt="1, GAME THỦ,GAME,GAME MOBILE,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Có thể nhiều người không biết, nhưng tựa{" "}
                      <strong>game</strong> Rắn Săn Mồi này thực chất cũng là
                      một trong những <strong>game mobile</strong> đầu tiên trên
                      thế giới khi ra mắt vào năm 1997. Luật chơi rất đơn giản,
                      chỉ cần điều khiển những chú rắn di chuyển ăn hết thức ăn
                      trên đường mà không đụng vào tường hay chính cơ thể của
                      mình là đủ để qua bàn. Nghe thì vậy thôi, nhưng tới khi
                      chú rắn của bạn tăng kích thước lên cái tầm "siêu to khổng
                      lồ" thì mọi thứ bắt đầu trở nên vô cùng phức tạp rồi đấy.
                      Đó cũng là lúc mà kỹ năng người chơi được thể hiện với vô
                      số những cách di chuyển hình chữ U hay tạo ra nhiều hình
                      chữ nhật nhỏ dần.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628773038140178351961.jpg"
                      alt="2, GAME THỦ,GAME,GAME MOBILE,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Thậm chí, chẳng quá khi nói rằng đây là một trong những
                      tựa <strong>game</strong> thành công nhất của Nokia. Tới
                      nay, có vô số những phiên bản Rắn Săn Mồi khác trên PC
                      cũng như smartphone, nhưng để tìm về được cảm giác xưa cũ
                      thì vẫn phải cầm Nokia 1200 mới là đúng chuẩn.
                    </p>
                    <h5>Bounce</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287731789921761681650.jpg"
                      alt="3, GAME THỦ,GAME,GAME MOBILE,TIN TỨC GAME,"
                      note=""
                    />

                    <p>
                      Ngay cả ở thời điểm điện thoại màu, trượt nắp bắt đầu nở
                      rộ, Nokia vẫn tiếp tục tỏ ra khá mát tay với tựa{" "}
                      <strong>game</strong> Bounce của mình.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Nhiệm vụ của người chơi với Bounce khá đơn giản, lăn bóng
                      qua những chướng ngại vật, tránh đinh, tường và tận dụng
                      địa hình cũng như bơm, thả hơi để vượt qua mọi vật cản
                      phía trước. Nghe thì dễ thế thôi, nhưng theo nhiều người,
                      độ khó của trò chơi này cũng chẳng kém gì Flappy Bird đâu.
                    </p>
                    <h5>Rapid Roll</h5>
                    <p>
                      Một trong những tựa <strong>game</strong> đòi hỏi cao ở sự
                      nhanh tay nhanh mắt của các <strong>game thủ</strong>. Chỉ
                      với hai phím mũi tên sang trái phải - người chơi sẽ phải
                      di chuyển quả bóng của mình để tránh những tấm ván có
                      đinh, đồng thời thuận lợi bước qua bàn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628773311179606611385.jpg"
                      alt="4, GAME THỦ,GAME,GAME MOBILE,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Điểm khó nhất của Rapid Roll là việc tốc độ của trò chơi
                      sẽ tăng lên theo thời gian và chắc chắn, không ít{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      ở đây từng phải hậm hực trước tựa game này đâu.
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
