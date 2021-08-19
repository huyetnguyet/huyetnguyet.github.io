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
"timestamp": '19/08/2021 12:54 PM',
"title": 'Review Free Guy: Phim có chủ đề trò chơi điện tử hay nhất từ trước đến nay?',
"description": 'Không chỉ là một bộ phim lấy chủ đề trò chơi điện tử, Free Guy thực sự là một bộ phim hay với tính giải trí cao.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16290889280931173430949.jpg',
"alt": 'TRÒ CHƠI ĐIỆN TỬ,FREE GUY,CỘNG ĐỒNG GAME,CỘNG ĐỒNG GAME THỦ,',
"category": 'games',
"date": '19/08/2021',
"time": '12:54 PM',
"link": '/review-free-guy-phim-co-chu-de-tro-choi-dien-tu-hay-nhat-tu-truoc-den-nay',
"zcomponent": 'page_20210819125458',
"filepath": './20210819125458-review-free-guy-phim-co-chu-de-tro-choi-dien-tu-hay-nhat-tu-truoc-den-nay.js'
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
  "Review Free Guy: Phim có chủ đề trò chơi điện tử hay nhất từ trước đến nay?";
const author = "Lê Hảo";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 12:54 PM";
const description =
  "Không chỉ là một bộ phim lấy chủ đề trò chơi điện tử, Free Guy thực sự là một bộ phim hay với tính giải trí cao.";
const link =
  "review-free-guy-phim-co-chu-de-tro-choi-dien-tu-hay-nhat-tu-truoc-den-nay";
const tagparam = [
  "TRÒ CHƠI ĐIỆN TỬ",
  "FREE GUY",
  "CỘNG ĐỒNG GAME",
  "CỘNG ĐỒNG GAME THỦ",
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

export default function page_20210819125458() {
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
                    <p></p>
                    <p>
                      Trong những năm gần đây, các bộ phim được sản xuất dựa
                      trên <strong>trò chơi điện tử</strong> không ít. Tuy
                      nhiên, những bộ phim có chủ đề về trò chơi điện tử nói
                      chung quả thật là một điều hiếm thấy.
                    </p>
                    <p>
                      Vào năm 2018, <strong>cộng đồng game</strong> thủ đã được
                      chứng kiến siêu phẩm Ready Player One của Steven
                      Spielberg, một bộ phim thể hiện thành công{" "}
                      <strong>trò chơi điện tử</strong> trên màn ảnh. Giờ đây,{" "}
                      <strong>Free Guy</strong> đã được ra mắt và đưa đến điều
                      tương tự cho khán giả.
                    </p>
                    <p>
                      Dù gọi là điều tương tự, song <strong>Free Guy</strong>{" "}
                      khá là khác biệt với Ready Player One. Thế giới của Free
                      Guy là một thế giới không khác với thế giới chúng ta và
                      nhân vật chính – Guy – là một NPC (Non Playable Character)
                      chứ không phải là một game thủ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16290889280931173430949.jpg"
                      alt="1, TRÒ CHƠI ĐIỆN TỬ,FREE GUY,CỘNG ĐỒNG GAME,CỘNG ĐỒNG GAME THỦ,"
                      note=""
                    />
                    <p>
                      Guy, do Ryan Reynolds thủ vai (nổi tiếng với nhân vật
                      Deadpool), là một NPC của trò chơi Free City. Đây là là
                      một trò chơi hư cấu được lấy cảm hứng từ Fortnite và GTA
                      V. Dù là vậy, nhà sản xuất Ethan Tobman cho biết Free City
                      lấy cảm hứng từ SimCity và Red Dead Redemption 2 nhiều
                      hơn.
                    </p>
                    <p>
                      Vì là một NPC, cuộc sống thường ngày của Guy theo sát một
                      lịch trình cụ thể do nhà phát triển lập trình nên. Dù là
                      vậy, anh vẫn cảm thấy sự khác biệt của thế giới xung
                      quanh. Anh nhận thấy rằng thế giới có những cá nhân đeo
                      kính đen và với họ, họ có thể làm bất cứ điều gì mà họ
                      muốn, mặc kệ luật pháp.
                    </p>
                    <p>
                      Nói đến đây, chắc hẳn chúng ta đều hiểu rằng những người
                      đeo kính đen này chính là chúng ta, các game thủ. Đây là
                      một cách kể chuyện rất thú vị, cho thấy rằng các NPC nhận
                      thức được sự tồn tại của người chơi, tuy nhiên họ không
                      thể phản ứng nhiều vì họ không được lập trình để làm điều
                      đó.
                    </p>
                    <p></p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Sau khi trải qua một vài sự kiện đáng nhớ, Guy đã tiếp cận
                      được với một cặp kính đen và anh bắt đầu nhìn thấy thế
                      giới như một trò chơi. Đây cũng là lúc mà diễn biến phim
                      trở nên phức tạp hơn, vì thế chúng tôi sẽ không đề cập
                      tiếp để tránh spoiler.
                    </p>
                    <p>
                      Diễn xuất của các diễn viên trong phim đều rất tốt. Ryan
                      Reynolds lại một lần nữa nhảy vào vai diễn có tính cách y
                      hệt anh ngoài đời, nhưng điều đó không có nghĩa anh không
                      thổi hồn riêng cho nhân vật. Jodie Comer trong vai Molotov
                      Girl, Taika Waititi trong vai Antwan và Lil Rel Howery
                      trong vai Buddy cũng đều có những khoảnh khắc đáng nhớ.
                    </p>
                    <p>
                      Dù là một bộ phim có yếu tố khoa học viễn tưởng,{" "}
                      <strong>Free Guy</strong> cũng là rất tốt trong việc gột
                      tả cảm xúc của nhân vật. Khi Guy hiểu rõ thân phận và vai
                      trò của anh là gì, anh trải qua 5 giai đoạn của sự đau khổ
                      (5 stage of grief). Đây vốn sẽ là điều không thể nếu như
                      Guy chỉ đơn thuần là những dòng lập trình trong một tựa
                      game.
                    </p>
                    <p>
                      Một điểm cộng khác của <strong>Free Guy</strong> đó là bộ
                      phim cũng bàn đến ý nghĩa thực sự của cuộc sống. Những
                      hành động giản đơn nhất đôi khi cũng làm cho cuộc sống của
                      bản thân có ý nghĩa.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16290889298291289979554.jpg"
                      alt="2, TRÒ CHƠI ĐIỆN TỬ,FREE GUY,CỘNG ĐỒNG GAME,CỘNG ĐỒNG GAME THỦ,"
                      note=""
                    />
                    <p>
                      Về các cảnh hành động, <strong>Free Guy</strong> cũng ấn
                      tượng không kém khi hầu như không sử dụng các biện pháp
                      như rung lắc camera hay cắt góc liên tục để lấp liếm diễn
                      viên đóng thế. Các cảnh hành động rất dễ theo dõi, không
                      đau mắt như Taken hay Jason Bourne.
                    </p>
                    <p>
                      Một yếu tố khác mà <strong>Free Guy</strong> đã thành công
                      đó là việc biến Free City có cảm giác như một trò chơi
                      thực sự. Trong bộ phim này, chúng ta sẽ được thấy những
                      Streamer nổi tiếng như Jacksepticeye, Ninja, Pokimane,
                      DanTDM, và LazarBeam, khiến cho trò chơi cảm thấy thực tế
                      hơn.
                    </p>
                    <p>
                      Không chỉ vậy, bộ phim cũng có sự xuất hiện của các Easter
                      Egg đến từ các series game nổi tiếng như Half Life,
                      Portal, Duke Nukem và Halo. Bên cạnh đó, vì bộ phim được
                      ra mắt sau khi Disney mua FOX, sẽ có một vài Easter Egg mà
                      độc giả sẽ không ngờ đến.
                    </p>
                    <p>
                      Nhìn chung, <strong>Free Guy</strong> là một bộ phim hay
                      và chủ đề <strong>trò chơi điện tử</strong> của phim đã
                      được tận dụng tối đa để trở thành một công cụ kể chuyện,
                      không phải chỉ là thứ dùng để hút khán giả gamer. Nếu tất
                      cả các nhà làm phim về sau tôn trọng lĩnh vực trò chơi
                      điện tử như Free Guy đã làm thì đó sẽ là điều rất đáng
                      mừng.
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
