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
"timestamp": '06/08/2021 04:24 PM',
"title": 'Toxic, hack, không dùng tiếng Anh và những lý do khiến game thủ Việt thường xuyên phải chịu những điều tiếng tại các tựa game global',
"description": 'Không phải ngẫu nhiên mà game thủ Việt thường để lại ấn tượng không quá tích cực với bạn bè thế giới.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-16280537716561210499790.jpg',
"alt": 'GAME THỦ,GAME,TIN TỨC GAME,',
"category": 'games',
"date": '06/08/2021',
"time": '04:24 PM',
"link": '/toxic-hack-khong-dung-tieng-anh-va-nhung-ly-do-khien-game-thu-viet-thuong-xuyen-phai-chiu-nhung-dieu-tieng-tai-cac-tua-game-global',
"zcomponent": 'page_20210806162421',
"filepath": './20210806162421-toxic-hack-khong-dung-tieng-anh-va-nhung-ly-do-khien-game-thu-viet-thuong-xuyen-phai-chiu-nhung-dieu-tieng-tai-cac-tua-game-global.js'
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
  "Toxic, hack, không dùng tiếng Anh và những lý do khiến game thủ Việt thường xuyên phải chịu những điều tiếng tại các tựa game global";
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "06/08/2021 04:24 PM";
const description =
  "Không phải ngẫu nhiên mà game thủ Việt thường để lại ấn tượng không quá tích cực với bạn bè thế giới.";
const link =
  "toxic-hack-khong-dung-tieng-anh-va-nhung-ly-do-khien-game-thu-viet-thuong-xuyen-phai-chiu-nhung-dieu-tieng-tai-cac-tua-game-global";
const tagparam = ["GAME THỦ", "GAME", "TIN TỨC GAME"];
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

export default function page_20210806162421() {
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
                      Từ trước tới nay, việc các{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      Việt bị chặn IP, thậm chí là nhận phải nhiều ý kiến tiêu
                      cực khi đang chơi các tựa game nước ngoài đã không còn là
                      câu chuyện quá xa lạ đối với chúng ta. Tất nhiên, điều gì
                      cũng phải có nguyên do của nó và hãy cùng thử tìm hiểu tại
                      sao, đôi lúc các game thủ Việt để lại những ấn tượng xấu
                      tới như vậy nhé.
                    </p>
                    <h5>Toxic</h5>
                    <p>
                      Chắc chắn, toxic là một trong những yếu tố đầu tiên mà
                      nhiều người thường nhớ tới. Sự toxic, bản tính thích ăn
                      thua đã dần trở thành một trong những nét văn hóa dễ nhận
                      ra của các{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      Việt. Từ việc cố tình feed, tạo ra không khí tiêu cực
                      trong các trận đấu game MOBA cho tới vô số những lần hành
                      xử thái quá tại nhiều tựa game cày cuốc. Tất cả đã làm nên
                      một hình ảnh không lấy gì làm tốt đẹp.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-16280537435081801075327.jpg"
                      alt="1, GAME THỦ,GAME,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Tất nhiên,{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      ở đâu cũng có người này người kia và chẳng phải mỗi game
                      thủ Việt mới toxic. Tuy vậy, không thể phủ nhận rằng đây
                      cũng là một trong những lý do tạo ra nhiều ác cảm từ phía
                      các game thủ nước khác.
                    </p>
                    <h5>Hack, cheat game</h5>
                    <p>
                      Đây có lẽ là một trong những điều tiếng có phần hơi oan
                      cho các{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      Việt. Thực tế, khi nói tới vấn nạn hack cheat, nhiều người
                      sẽ thường liên tưởng ngay tới các game thủ Trung Quốc
                      nhiều hơn. Hãy cứ nhìn vào PUBG, khi từng có vô số ý kiến
                      khẩn cầu PUBG Corp mở riêng một server chỉ phục vụ cho
                      người Trung.{" "}
                    </p>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-16280537716561210499790.jpg"
                      alt="2, GAME THỦ,GAME,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Mặc dù không thường xuyên hack cheat, thế nhưng đối với
                      các{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      Việt, việc tận dụng tối đa tài nguyên trong game thông qua
                      nhiều cách như dùng bug, tạo clone cũng là một vấn nạn
                      đáng lên án.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Không dùng tiếng Anh khi giao tiếp</h5>
                    <p>
                      Hạn chế về ngoại ngữ khi chơi các tựa{" "}
                      <strong>game</strong> nước ngoài luôn là vấn đề đáng nói
                      với các <strong>game thủ</strong> Việt, đặc biệt là những
                      người thuộc thế hệ đầu 8-9x. Việc không thể giao tiếp bằng
                      tiếng Anh, thậm chí còn thường gây "rối não" hơn khi nói
                      chuyện trong party hoặc với bạn bè bằng tiếng Việt luôn
                      gây ra sự khó chịu nhất định. Hãy cứ thử tưởng tượng bạn
                      bắn CS:GO chung với một stack game thủ Trung Quốc, và
                      chẳng hiểu gì xuyên suốt từ đầu tới cuối trận đấu vậy. Đó
                      cũng là cảm giác mà các game thủ nước ngoài khác phải chịu
                      khi chơi cùng người Việt mà không dùng tiếng Anh.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-16280537951801802658325.jpg"
                      alt="3, GAME THỦ,GAME,TIN TỨC GAME,"
                      note="Chơi Among Us mà không dùng tiếng Anh thì..."
                    />
                    <p>
                      Tất nhiên, theo thời gian, vấn đề này cũng đã được khắc
                      phục dần và đã không còn xảy ra quá phổ biến nữa.
                    </p>
                    <h5>Nguyên nhân đôi khi từ chính NPH</h5>
                    <p>
                      Có một thực tế là đôi khi, các NPH cấm cửa{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      Việt ở nhiều trò chơi đơn giản chỉ vì chiến lược phát
                      triển riêng mang tính khu vực của họ. Steam từ bao lâu nay
                      vẫn luôn chặn PES và khiến các fan Việt phải mua đĩa hoặc
                      game bản quyền trên PlayStation mà thôi. Tương tự như vậy,
                      Maple Story 2 từng công khai việc họ không cho phép người
                      chơi Việt tải game vì các điều khoản đã ký với NPH ở Việt
                      Nam trước đó.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-1628053810774253784630.jpg"
                      alt="4, GAME THỦ,GAME,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Không ít những NPH tên tuổi đã rời khỏi Việt Nam, nhưng
                      mọi thứ không phải bắt nguồn từ văn hóa của{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      Việt mà đơn giản, đó chỉ là những vấn đề phức tạp về chiến
                      lược, pháp lý và doanh thu mà thôi.
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
