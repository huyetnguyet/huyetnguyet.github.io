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
"timestamp": '08/08/2021 11:02 AM',
"title": 'Làng game Việt bấy lâu nay vẫn dậm chân tại chỗ chẳng thể phát triển, nguyên nhân vì đâu?',
"description": 'Vì đâu mà game Việt vẫn còn đang phải giậm chân tại chỗ với những dự án game mobile đơn giản mà chưa có nổi một cú hit?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628156685246444204171.jpg',
"alt": 'GAME,GAME THỦ,TIN TỨC GAME,',
"category": 'games',
"date": '08/08/2021',
"time": '11:02 AM',
"link": '/lang-game-viet-bay-lau-nay-van-dam-chan-tai-cho-chang-the-phat-trien-nguyen-nhan-vi-dau',
"zcomponent": 'page_20210808110255',
"filepath": './20210808110255-lang-game-viet-bay-lau-nay-van-dam-chan-tai-cho-chang-the-phat-trien-nguyen-nhan-vi-dau.js'
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
  "Làng game Việt bấy lâu nay vẫn dậm chân tại chỗ chẳng thể phát triển, nguyên nhân vì đâu?";
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "08/08/2021 11:02 AM";
const description =
  "Vì đâu mà game Việt vẫn còn đang phải giậm chân tại chỗ với những dự án game mobile đơn giản mà chưa có nổi một cú hit?";
const link =
  "lang-game-viet-bay-lau-nay-van-dam-chan-tai-cho-chang-the-phat-trien-nguyen-nhan-vi-dau";
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

export default function page_20210808110255() {
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
                      Không ai có thể phủ nhận sự phát triển mạnh mẽ cả về số
                      lượng lẫn chất lượng của làng eSports Việt trong những năm
                      vừa qua với vô số những chiến tích ghi đậm dấu ấn trong
                      mắt bạn bè thế giới. Tuy nhiên, khi nhìn về làng{" "}
                      <strong>game</strong> Việt, có lẽ nhiều người sẽ phải lắc
                      đầu ngán ngẩm khi nhìn đi nhìn lại, xung quanh chúng ta
                      gần như chẳng có một siêu phẩm nào đáng chú ý mà chỉ toàn
                      những tựa game mobile mang phong cách "mì ăn liền", đơn
                      giản. Nhìn sang những nước châu Á khác như Trung Quốc, Hàn
                      Quốc, có lẽ các <strong>game thủ</strong> Việt chỉ biết
                      ước. Nhưng chưa bàn luận đâu xa, tại Việt Nam, cũng thật
                      khó để ngành game có thể thật sự phát triển vì những lý do
                      sau.
                    </p>
                    <h5>Nền tảng ban đầu không quá tốt</h5>
                    <p>
                      Trên thế giới có rất nhiều quốc gia được coi là thủ phủ
                      của ngành <strong>game</strong> và tất nhiên, Việt Nam
                      không nằm trong số đó. Không thể phủ nhận rằng người Việt
                      cũng từng có những tựa game gây được sự chú ý lớn với bạn
                      bè thế giới, nhưng chừng đó dường như là quá ít ỏi. Lấy
                      một ví dụ dễ thấy để hình dung, tại nhiều nước, việc giảng
                      dạy thậm chí có những khóa học làm game là điều rất quen
                      thuộc nhưng tại Việt Nam, nó cực kỳ khan hiếm. Vẫn có
                      những người Việt đủ sức làm game từ khi còn trên ghế nhà
                      trường nhưng số lượng liệu được bao nhiêu.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628156685246444204171.jpg"
                      alt="1, GAME,GAME THỦ,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Chúng ta có những lớp học thiết kế 3D, có những lớp dạy về
                      triết lý thiết kế <strong>game</strong>... nhưng lại thiếu
                      đi một chiến lược nhất quán, toàn diện. Hãy cứ nhìn vào
                      các studio trẻ hiện tại ở Việt Nam. Số lượng thì rất
                      nhiều, nhưng chất lượng thì liệu có được bao nhiêu.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>
                      Thị hiếu của <strong>game</strong> thủ ngày càng dễ dãi
                    </h5>

                    <p>
                      Đây có lẽ là một trong những lý do quan trọng nhất khiến
                      cho ngành <strong>game</strong> Việt đang ngày càng đi
                      xuống. Điều này chắc cần quay lại từ sự thành công của
                      Flappy Bird - nơi mở ra kỷ nguyên phát triển mạnh mẽ của
                      những tựa game mobile "mất não". Chỉ với những lần tap
                      tap, chạm màn hình cơ bản là đủ để các{" "}
                      <strong>game thủ</strong> cảm nhận sự hay từ trò chơi.
                    </p>
                    <p>
                      Cũng từ đó, hàng loạt những tựa <strong>game</strong> mì
                      ăn liền ra đời. Từ MMORPG cho tới RPG, tất cả đều được cài
                      đặt auto tận răng và <strong>game thủ</strong> thì cũng
                      chẳng cần làm gì quá nhiều. Bản thân game thủ Việt không
                      đòi hỏi thế nên cũng dễ hiểu khi mà những năm qua chất
                      lượng các tựa game ngày càng đi xuống.
                    </p>
                    <h5>Lợi nhuận phải được đặt lên tối đa</h5>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-1628156746151333697435.jpg"
                      alt="2, GAME,GAME THỦ,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Chẳng một studio nào muốn lỗ khi ra <strong>game</strong>{" "}
                      cả, ở Việt Nam cũng vậy. Đó là lý do mà đôi khi, bạn phải
                      bỏ qua những lựa chọn chất lượng để chạy theo thị hiếu. Đã
                      từng có không ít các siêu phẩm nước ngoài được đánh giá
                      rất cao nhưng thất bại ở thị trường Việt, tất cả cũng chỉ
                      vì nằm ngoài xu hướng lựa chọn của các{" "}
                      <strong>game thủ</strong>. Thế nên, đừng hỏi tại sao mà
                      các tựa game mì ăn liền lại đang có đất phát triển như
                      hiện tại nhé, vì chính đa số các game thủ Việt lựa chọn nó
                      để chơi mà.
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
