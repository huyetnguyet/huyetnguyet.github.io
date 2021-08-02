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
"timestamp": '17/06/2021 02:03 PM',
"title": 'Top game “kinh điển” hay nhất trên Mobile, có một phần Final Fantasy huyền thoại',
"description": 'Nếu bạn đang tìm kiếm những tựa game thuộc thể loại “kinh điển” trên nền tảng di động thì đừng bỏ qua những cái tên dưới đây.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/16/photo-1-16238616599652048581583.jpg',
"alt": 'Top Game Mobile, Top Game, Tin Tuc Game, Final Fantasy, Final Fantasy Vii, Android, Ios, Titan Quest, ',
"category": 'games',
"date": '17/06/2021',
"time": '02:03 PM',
"link": '/top-game-kinh-dien-hay-nhat-tren-mobile-co-mot-phan-final-fantasy-huyen-thoai',
"zcomponent": 'page_20210617140357',
"filepath": './20210617140357-top-game-kinh-dien-hay-nhat-tren-mobile-co-mot-phan-final-fantasy-huyen-thoai.js'
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
  "Top game “kinh điển” hay nhất trên Mobile, có một phần Final Fantasy huyền thoại";
const author = "Lee Chueng Hee";
const source = "Pháp luật và bạn đọc";
const timestamp = "17/06/2021 02:03 PM";
const description =
  "Nếu bạn đang tìm kiếm những tựa game thuộc thể loại “kinh điển” trên nền tảng di động thì đừng bỏ qua những cái tên dưới đây.";
const link =
  "top-game-kinh-dien-hay-nhat-tren-mobile-co-mot-phan-final-fantasy-huyen-thoai";
const tagparam = [
  "top-game-mobile",
  "top-game",
  "tin-tuc-game",
  "final-fantasy",
  "final-fantasy-vii",
  "android",
  "ios",
  "titan-quest",
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

export default function page_20210617140357() {
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
              >
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
                    Trong số tất cả các thể loại game từ trước đến nay, game
                    nhập vai hay RPG luôn là thể loại được xem là kinh điển và
                    có thời lượng chơi cao nhất. Trong một game nhập vai, người
                    chơi thường bước vào chân vào thế giới của một nhân vật và
                    tham gia vào hàng loạt các cuộc phiêu lưu, đạt cấp độ tối đa
                    về kỹ năng trên con đường khám phá thế giới.
                  </p>
                  <p>
                    Do sự phổ biến của thể loại này mà rất nhiều game nhập vai
                    đã được ra đời và thậm chí là chuyển thể từ PC sang Mobile.
                    Hãy cùng tìm xem năm cái tên được đánh giá là hấp dẫn bậc
                    nhất trên di động của thể loại game này nhé.
                  </p>
                  <h3>Titan Quest</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/16/photo-1-16238616599652048581583.jpg"
                    alt="1Top Game Mobile, Top Game, Tin Tuc Game, Final Fantasy, Final Fantasy Vii, Android, Ios, Titan Quest, "
                    note=""
                  />
                  <p>
                    Được phát hành lần đầu vào năm 2006 trên PC,{" "}
                    <strong>Titan Quest</strong> là một trong những trò chơi
                    nhập vai hành động hay nhất tương tự như Diablo 2 huyền
                    thoại , nhưng trên bối cảnh thần thoại Hy Lạp. Tiền thân của
                    các vị thần, các Titan, đã trốn thoát khỏi nhà tù và đang
                    nhắm tới việc tiêu diệt thế giới của con người. Một mình các
                    vị thần không thể ngăn cản họ - một anh hùng phải vươn lên
                    để lãnh đạo cuộc chiến và bảo vệ nhân loại.
                  </p>
                  <h3>Baldur's Gate II</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/16/photo-1-16238616747261033719967.jpg"
                    alt="2Top Game Mobile, Top Game, Tin Tuc Game, Final Fantasy, Final Fantasy Vii, Android, Ios, Titan Quest, "
                    note=""
                  />
                  <p>
                    Đây là một trong những game nhập vai cổ điển hay nhất và giờ
                    đây, toàn bộ thứ đã được chuyển sang thiết bị di động. Câu
                    chuyện tiếp tục sau các sự kiện của Baldur's Gate 1, với
                    việc nhân vật chính phải chống lại một kẻ thù mới toanh, một
                    pháp sư quyền năng tên là Jon Irenicus. Phần hay nhất của
                    trò chơi này có lẽ là độ dài của nó. Phần chơi Shadows of
                    Amn ban đầu đã có hơn 60 giờ ... và hiện tại, phiên bản này
                    có hơn ba bản mở rộng khác. Người chơi có thể tương tác với
                    môi trường, nói chuyện với NPC và tương tác với thế giới của
                    Baldur's Gate II.
                  </p>
                  <h3>Icewind Dale</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/16/photo-1-16238616981242123019726.jpg"
                    alt="3Top Game Mobile, Top Game, Tin Tuc Game, Final Fantasy, Final Fantasy Vii, Android, Ios, Titan Quest, "
                    note=""
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Được phát hành lần đầu vào năm 2000, Icewind Dale là một trò
                    chơi D & D lấy bối cảnh Forgotten Realms huyền thoại của
                    Wizards of The Coast. Trong trò chơi này, nhân vật chính sẽ
                    khám phá một vùng lãnh nguyên băng giá được gọi là Icewind
                    Dale. Nhiệm vụ của game thủ là hành trình vào dãy núi Spine
                    of the World và đối đầu với một âm mưu xấu xa đang đe dọa
                    hủy diệt khu vực. Icewind Dale cũng được thực hiện bởi nhà
                    phát triển Baldur's Gate, và vì thế, nó có lối chơi giống
                    hệt như vậy.
                  </p>
                  <h3>Eternium</h3>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/16/photo-1-1623861708186741299309.jpg"
                    alt="4Top Game Mobile, Top Game, Tin Tuc Game, Final Fantasy, Final Fantasy Vii, Android, Ios, Titan Quest, "
                    note=""
                  />
                  <p>
                    Eternium là game nhập vai đầu tiên trong danh sách này được
                    thiết kế cho di động ngay từ đầu. Nó không phải là một phiên
                    bản chuyển thể từ PC nào hết. Lối chơi trong Eternium là một
                    cuộc cách mạng và tạo nên được sự đặc biệt so với các sản
                    phẩm ARPG khác.
                  </p>
                  <h3>Final Fantasy VII</h3>
                  <p>
                    Có rất nhiều trò chơi <strong>Final Fantasy</strong> trên
                    Google Play, nhưng nếu bạn phải chọn một trò chơi đại diện
                    cho toàn bộ nhượng quyền thương mại, thì{" "}
                    <strong>Final Fantasy VII</strong> có lẽ là lựa chọn hàng
                    đầu. Và Final Fantasy VII vẫn được xem là một trong những
                    phần game huyền thoại kinh điển nhất.{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/16/photo-1-162386192326544838465.jpg"
                    alt="5Top Game Mobile, Top Game, Tin Tuc Game, Final Fantasy, Final Fantasy Vii, Android, Ios, Titan Quest, "
                    note=""
                  />
                  <p>
                    Và cũng trong phiên bản <strong>Final Fantasy</strong> này,
                    một nhân vật nổi tiếng đã trở nên thân thuộc hơn bao giờ
                    hết, đó chính là nàng Tifa đã từng khiến trái tim của biết
                    bao game thủ phải rung động.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/16/photo-1-16238619984101194719337.jpg"
                    alt="6Top Game Mobile, Top Game, Tin Tuc Game, Final Fantasy, Final Fantasy Vii, Android, Ios, Titan Quest, "
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
