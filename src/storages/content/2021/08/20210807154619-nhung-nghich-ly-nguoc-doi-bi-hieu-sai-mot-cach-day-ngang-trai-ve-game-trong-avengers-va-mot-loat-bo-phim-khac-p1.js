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
"timestamp": '07/08/2021 03:46 PM',
"title": 'Những nghịch lý ngược đời, bị hiểu sai một cách đầy ngang trái về game trong Avengers và một loạt bộ phim khác (p1)',
"description": 'Hai người cùng chơi một tựa game single-player, điều chỉ có thể xuất hiện trên phim.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/7/screenshot27-1628329462687161582959.png',
"alt": 'GAME,GAME THỦ,TIN TỨC GAME,',
"category": 'games',
"date": '07/08/2021',
"time": '03:46 PM',
"link": '/nhung-nghich-ly-nguoc-doi-bi-hieu-sai-mot-cach-day-ngang-trai-ve-game-trong-avengers-va-mot-loat-bo-phim-khac-p1',
"zcomponent": 'page_20210807154619',
"filepath": './20210807154619-nhung-nghich-ly-nguoc-doi-bi-hieu-sai-mot-cach-day-ngang-trai-ve-game-trong-avengers-va-mot-loat-bo-phim-khac-p1.js'
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
  "Những nghịch lý ngược đời, bị hiểu sai một cách đầy ngang trái về game trong Avengers và một loạt bộ phim khác (p1)";
const author = "Illusionary";
const source = "Trí Thức Trẻ";
const timestamp = "07/08/2021 03:46 PM";
const description =
  "Hai người cùng chơi một tựa game single-player, điều chỉ có thể xuất hiện trên phim.";
const link =
  "nhung-nghich-ly-nguoc-doi-bi-hieu-sai-mot-cach-day-ngang-trai-ve-game-trong-avengers-va-mot-loat-bo-phim-khac-p1";
const tagparam = ["GAME", "GAME THỦ", "TIN TỨC GAME"];
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

export default function page_20210807154619() {
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
                      Trò chơi điện tử đã trở thành một phần của cuộc sống hiện
                      đại kể từ khi chúng xâm nhập vào các hộ gia đình vào cuối
                      những năm 70 và đầu những năm 80. Do đó,{" "}
                      <strong>game</strong> đôi khi được sử dụng trong phim để
                      thêm trang phục thực tế và thể hiện các khía cạnh trong
                      cuộc sống hoặc tính cách của nhân vật. Tuy nhiên, ngay cả
                      khi trò chơi điện tử chỉ là một phần nhỏ của bộ phim mà họ
                      tham gia, các diễn viên và đạo diễn thường mắc những sai
                      lầm ngớ ngẩn về các trò chơi đến nỗi nó có thể khiến bạn
                      đặt câu hỏi liệu có ai tham gia làm phim đã từng cầm một
                      chiếc điều khiển trước đây hay không.
                    </p>
                    <h5>
                      Bạn luôn gặp cùng một người chơi trong các ván đấu
                      Fortnite
                    </h5>
                    <p>
                      Ngay từ đầu trong Avengers: End<strong>game</strong>, một
                      Thor khác thường đã nhận được một chuyến thăm từ The Hulk
                      và Rocket để nhờ sự giúp đỡ của anh ấy trong việc lấy lại
                      các Infinity Stones. Khi đến khu định cư New Asgard ở Na
                      Uy, họ thấy Thần Sấm đang ở cùng với người tị nạn Korg.
                      Trong khi Thor dường như chủ yếu tập trung vào việc uống
                      rượu, Korg đã phát triển niềm yêu thích với Fortnite, thứ
                      mà anh ấy đang chơi khi các anh hùng đến.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/screenshot27-1628329462687161582959.png"
                      alt="1, GAME,GAME THỦ,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Korg cắt ngang cuộc trò chuyện của Hulk và Thor để thông
                      báo rằng ai đó trên mạng đã quay lại gọi tên anh ta. Thor
                      sau đó chộp lấy chiếc tai nghe để đe dọa kẻ thù mới của
                      mình, Noobmaster69. Nhìn chung, đó là một cảnh vui nhộn và
                      một lời cảm ơn thú vị đối với Fortnite. Vấn đề duy nhất là
                      bất kỳ ai quen thuộc với Fortnite đều biết rằng khả năng
                      gặp phải kẻ hành hạ ngẫu nhiên tương tự là rất nhỏ. Trên
                      thực tế, Epic gần đây đã thông báo rằng có hơn 350 triệu
                      người dùng đã đăng ký chơi Fortnite, khiến nó trở thành
                      trò chơi trực tuyến lớn nhất trên thế giới.
                    </p>
                    <h5>Hai người chơi trong trò chơi single-player</h5>
                    <p>
                      Các nhà làm phim sử dụng trò chơi điện tử như một cách dễ
                      dàng để thể hiện các nhân vật đang có khoảng thời gian vui
                      vẻ bên nhau trong một cảnh quay kín. Hiển thị hai người có
                      một cuộc đấu với nhiều bộ điều khiển thậm chí còn tốt hơn.
                      Tuy nhiên, các nhà làm phim có thể muốn chọn một trò chơi
                      có nhiều người chơi trước khi họ đặt một vài bộ điều khiển
                      vào tay diễn viên của họ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/screenshot26-1628329478914373197690.png"
                      alt="2, GAME,GAME THỦ,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Trong phần mô phỏng lại Những thiên thần của Charlie năm
                      2000, Drew Barrymore ngã qua hàng rào trong bối cảnh hai
                      cậu bé đang chơi trò chơi điện tử cùng nhau. Mỗi người đều
                      có bộ điều khiển riêng và cả hai đều có vẻ như họ đang có
                      một khoảng thời gian vui vẻ. Tuy nhiên, nếu để ý kỹ hơn
                      một chút, bạn sẽ nhận thấy rằng trò chơi mà bọn trẻ đang
                      cùng nhau thưởng thức là Final Fantasy 8. Giống như hầu
                      hết các trò chơi trong series, Final Fantasy 8 là một{" "}
                      <strong>game</strong> nhập vai một người chơi và không hỗ
                      trợ bộ điều khiển thứ hai. Ngay cả khi các chàng trai bằng
                      cách nào đó thay phiên nhau làm việc theo cách của họ
                      trong game nhập vai hoành tráng, họ sẽ phải chuyển đổi bộ
                      điều khiển để làm như vậy, điều này sẽ thật kỳ lạ.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Trò chơi điện tử chưa bao giờ tồn tại</h5>
                    <p>
                      Một số điều mà các bộ phim mắc phải trong quá trình chơi{" "}
                      <strong>game</strong> không hẳn là sai lầm, nhưng chúng
                      vẫn khiến các <strong>game thủ</strong> hơi thất vọng.
                      Thỉnh thoảng, bạn có thể phát hiện ra một trong những trò
                      chơi điện tử cổ điển yêu thích của mình được chuyển đổi
                      sang tủ arcade có kiểu dáng đẹp chưa từng tồn tại trong
                      thế giới thực.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/screenshot28-16283295940071343626480.png"
                      alt="3, GAME,GAME THỦ,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Bộ phim kinh dị - hài ăn khách Grosse Pointe Blank có
                      phiên bản trò chơi điện tử DOOM 2 thu hút sự chú ý của một
                      nhân viên đến mức anh ta không thể nhận thấy cuộc đấu súng
                      xung quanh anh ta. Chiếc tủ có hình hộp của trò chơi được
                      phóng to và trong khi người xem có thể thắc mắc làm thế
                      nào mà tiêu đề bàn phím và chuột này được chuyển đổi cho
                      các trò chơi, trông có vẻ rất thú vị! Tuy nhiên, thuyết
                      phục như nó xuất hiện, nó chỉ là một chỗ dựa. Chỉ có một
                      chiếc được thực hiện và trong nháy mắt thứ hai, bạn sẽ
                      nhận thấy rằng màn hình có khả năng hiển thị cảnh quay
                      được ghi trước của DOOM 2 trong khi nhân viên bán hàng chỉ
                      cần nhấn nút.
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
