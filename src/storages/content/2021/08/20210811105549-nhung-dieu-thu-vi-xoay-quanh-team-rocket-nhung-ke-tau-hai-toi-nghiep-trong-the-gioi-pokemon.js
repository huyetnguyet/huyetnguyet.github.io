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
"timestamp": '11/08/2021 10:55 AM',
"title": 'Những điều thú vị xoay quanh Team Rocket, những kẻ tấu hài tội nghiệp trong thế giới Pokémon',
"description": 'Vai trò của James, Jessie và Meowth thường là tấu hài chứ ít khi làm được trò trống gì.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-1628560536284410144980.png',
"alt": 'POKÉMON,TEAM ROCKET,',
"category": 'games',
"date": '11/08/2021',
"time": '10:55 AM',
"link": '/nhung-dieu-thu-vi-xoay-quanh-team-rocket-nhung-ke-tau-hai-toi-nghiep-trong-the-gioi-pokemon',
"zcomponent": 'page_20210811105549',
"filepath": './20210811105549-nhung-dieu-thu-vi-xoay-quanh-team-rocket-nhung-ke-tau-hai-toi-nghiep-trong-the-gioi-pokemon.js'
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
  "Những điều thú vị xoay quanh Team Rocket, những kẻ tấu hài tội nghiệp trong thế giới Pokémon";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "11/08/2021 10:55 AM";
const description =
  "Vai trò của James, Jessie và Meowth thường là tấu hài chứ ít khi làm được trò trống gì.";
const link =
  "nhung-dieu-thu-vi-xoay-quanh-team-rocket-nhung-ke-tau-hai-toi-nghiep-trong-the-gioi-pokemon";
const tagparam = ["POKÉMON", "TEAM ROCKET"];
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

export default function page_20210811105549() {
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
                    <h5>1. Giovanni và quan hệ sâu xa với Team Rocket</h5>
                    <p>
                      Về cơ bản, thật khó để bào chữa cho bộ ba James, Jessie và
                      Meowth, khi mất đến 20 năm rồi băng này vẫn chưa bắt được
                      Pikachu. Nếu như là vị sếp khác thì đã đuổi cả ba từ lâu,
                      nhưng Giovanni thì vẫn khá nhân từ khi chưa đuổi cổ bộ ba
                      này đi.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-1-1628560536284410144980.png"
                      alt="1, POKÉMON,TEAM ROCKET,"
                      note=""
                    />
                    <p>
                      Nếu đối chiếu lý lịch thì bộ ba này chưa bị đuổi lại là
                      điều khá tức cười và thú vị. Theo đó, Jessie là con một
                      người bạn cũ được gửi gắm cho Giovanni, còn James lại là
                      người thừa kế của gia tộc lớn. Meowth lại là con Pokemon
                      duy nhất có thể nói tiếng người và rất hâm mộ Giovanni. Có
                      lẽ đó chính là lý do nó vẫn còn được phép tồn tại trong
                      biệt đội xấu xa này.
                    </p>
                    <h5>2. Từng có lúc James và Jessie là vợ chồng</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-2-16285302770891731374263.jpg"
                      alt="2, POKÉMON,TEAM ROCKET,"
                      note=""
                    />
                    <p>
                      Ở một vũ trụ "song song" khác trong bộ truyện The Electric
                      Tale Of Pikachu, Jessie và James đã kết thành vợ chồng.
                      Đây là điều vô cùng kỳ quặc mà trước giờ chẳng một ai dám
                      nghĩ đến, chứ đừng nói là đặt điều kiện chuyện này thật sự
                      xảy ra. Hóa ra, cả hai người này không chỉ đơn giản là
                      cộng sự xấu xa hay là bạn bè. Để khẳng định điều này lại
                      có thật, tác giả truyện tranh đã vẽ Jessie lại còn mang
                      thai luôn cho cẩn thận
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>3. Mối liên hệ giữa Jessie và Mew</h5>
                    <p>
                      Mew là mục tiêu được <strong>Team Rocket</strong> săn lùng
                      từ lâu, thậm chí tổ chức này còn tạo ra cả Mewtwo dựa trên
                      DNA của Mew. Thế nên, không có gì lạ khi James và Jessie
                      được ra lệnh để truy tìm <strong>Pokémon</strong> này, mặc
                      dù biệt đội này khá vô dụng.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-5-16285302750241243949532.jpg"
                      alt="3, POKÉMON,TEAM ROCKET,"
                      note=""
                    />
                    <p>
                      Thế nhưng, ít ai ngờ rằng bộ ba tấu hài này lại có mối
                      quan hệ chặt chẽ với Mew. Theo đó, mẹ của Jessie cũng từng
                      thuộc <strong>Team Rocket</strong>, bà cũng được lệnh đi
                      tìm Mew. Trong một lần lang thang trên núi tuyết, bà đã
                      tìm thấy <strong>Pokémon</strong> số 151. Thế nhưng, cơn
                      bão quá lớn khiến mẹ Jessie thiệt mạng, Jessie lâm vào
                      cảnh mồ côi từ bé và nó cũng ảnh hưởng tới quyết định gia
                      nhập Team Rocket của cô nàng.
                    </p>
                    <h5>
                      4. Mất 20 năm để <strong>Team Rocket</strong> chiến thắng
                      Ash
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/10/photo-1-16285307392372011260466.jpg"
                      alt="4, POKÉMON,TEAM ROCKET,"
                      note=""
                    />
                    <p>
                      Ash không phải là một huấn luyện viên quá xuất sắc, nhưng
                      cậu ta cũng thuộc dạng "có trình" và từng tham gia nhiều
                      giải đấu khác nhau. Sau 20 năm, cậu ta mới giành được ngôi
                      vô địch tại giải đấu Alolan. Điều tương tự cũng xảy ra với{" "}
                      <strong>Team Rocket</strong>, chúng đã chính thức đánh bại
                      được Ash và Pikachu lần đầu tiên sau tại phần{" "}
                      <strong>Pokémon</strong> Sun & Moon. Thậm chí trong trận
                      chiến này, bộ ba phản diện còn chẳng dùng bất kỳ chiêu trò
                      xấu xí hay chuẩn bị những kế hoạch ‘đen tối’ như thường
                      lệ. Jessie, James và Meowth còn ‘mắt tròn mắt dẹt’ sau khi
                      đánh bại Ash và Pikachu đầy thuyết phục
                    </p>
                    <h5>5. Meowth đã học nói như thế nào?</h5>
                    <p>
                      Lý do khiến Meowth biết nói chuyện trong anime khá đau
                      buồn, xuất phát từ quá khứ nhiều năm bị bỏ rơi của nó. Ở
                      một đoạn hồi tưởng trong “Go West Young Meowth”, Meowth
                      vẫn chỉ là <strong>Pokémon</strong> bình thường, đi bằng
                      bốn chân, bị bỏ rơi từ lúc sinh ra và phải bới rác tìm
                      thức ăn. Sau khi xem phim về một con Meowth được chiều
                      chuộng, nó đến thành phố trong phim để tìm kiếm cuộc sống
                      mới.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/10/photo-8-16285302755491091081816.jpg"
                      alt="5, POKÉMON,TEAM ROCKET,"
                      note=""
                    />
                    <p>
                      Dù vậy, mọi thứ vẫn không khá hơn khi nó chỉ là một con
                      mèo vô gia cư. Về sau nó gia nhập vòa một băng Meowth cùng
                      hoàn cảnh và tình cờ gặp được Meowzie - tình yêu của đời
                      mình. Biết Meowzie thích con người, Meowth đã học nói để
                      có thể gây ấn tượng với cô mèo cái, nhưng vẫn thất bại.
                      Đến khi nó sụp đổ thì nó lại nhớ đến từ đầu tiên mình nói
                      được (rocket) và từ đó gia nhập{" "}
                      <strong>Team Rocket</strong>.
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
