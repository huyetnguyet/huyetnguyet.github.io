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
"title": 'Những trò chơi tìm lại được thành công nhờ game thủ "mách nước"',
"description": 'Nghe lời góp ý từ các fan hâm mộ, những tựa game này dần dần tìm lại được thành công và được yêu thích.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/6/photo-1-1628259338797394301209.jpg',
"alt": 'GAME,',
"category": 'games',
"date": '06/08/2021',
"time": '04:24 PM',
"link": '/nhung-tro-choi-tim-lai-duoc-thanh-cong-nho-game-thu-mach-nuoc',
"zcomponent": 'page_20210806162439',
"filepath": './20210806162439-nhung-tro-choi-tim-lai-duoc-thanh-cong-nho-game-thu-mach-nuoc.js'
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
const title = 'Những trò chơi tìm lại được thành công nhờ game thủ "mách nước"';
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "06/08/2021 04:24 PM";
const description =
  "Nghe lời góp ý từ các fan hâm mộ, những tựa game này dần dần tìm lại được thành công và được yêu thích.";
const link = "nhung-tro-choi-tim-lai-duoc-thanh-cong-nho-game-thu-mach-nuoc";
const tagparam = ["GAME"];
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

export default function page_20210806162439() {
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
                    <h5>1. Pokémon Sun & Moon</h5>
                    <p>
                      {" "}
                      Kể từ phần Pokémon Red và Blue thì anh em đã gặp phải
                      những tình huống mà đụng cái cây không thể đi tiếp, gặp
                      dòng sông không thể bơi qua, đụng tảng đá không thể đẩy
                      chỗ khác. Để giải quyết vấn đề này thì anh em phải sử dụng
                      những chiêu HM (Hidden Machine) như cut, strength, fly,
                      surf; nhưng ngặt cái trong trận đấu thì những chiêu này
                      khá là phế (trừ những chiêu như Surf, Waterfall, Fly thì
                      vẫn hữu dụng trong một số trường hợp), mà bỏ những chiêu
                      này ra thì không thể nào qua được những khúc đó. Vấn đề
                      này đã tồn đọng xuyên suốt 6 thế hệ Pokémon.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/photo-1-1628259338797394301209.jpg"
                      alt="1, GAME,"
                      note=""
                    />
                    <p>
                      Nhưng đến phần Pokémon Sun và Moon thì HM đã bị loại bỏ
                      hoàn toàn, thay vào đó là Ridge Pager – một vật dụng
                      chuyên biệt cho phép người chơi triệu hồi nhiều Pokémon
                      khác nhau khi cần thiết, chẳng hạn như Lapras sẽ cho bạn
                      di chuyển qua sông, Machamp vừa bế bạn lên vừa đẩy đá đi
                      chỗ khác; nói chung đây là một cải tiến vô cùng đáng giá.
                    </p>
                    <h5>2. Resident Evil 7</h5>
                    <p>
                      {" "}
                      Với bộ 3 Resident Evil gốc thì dòng <strong>
                        game
                      </strong>{" "}
                      này đã tìm được công thức để tạo ra một tựa game sinh tồn
                      kinh dị thành công. Sau đó đến Resident Evil 4 xuất hiện,
                      cho thấy sự chín muồi và hoàn hảo của công thức kia. Trong
                      khi fan khen ngợi RE 4 nhờ có phối hợp hài hòa giữa các
                      yếu tố hành động và máu me, đến phần 5 và 6 thì sự hào
                      hứng của fan dần nguội lạnh vì Capcom đang dần đi chệch
                      hướng so với công thức cũ, không còn nhiều yếu tố sinh tồn
                      kinh dị nữa mà thay vào đó là yếu tố hành động rẻ tiền.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/photo-1-1628259254931963431396.jpg"
                      alt="2, GAME,"
                      note=""
                    />
                    <p>
                      May mắn thay, đến phần Resident Evil 7: Biohazard (2017)
                      thì nhà phát triển đã nhận ra sai lầm của họ và biết rằng
                      quay đầu là bờ. Kết quả là dù <strong>game</strong>play
                      vẫn tập trung vào yếu tố combat, đạn dược lại rất hiếm có
                      khó tìm và bất kì kẻ địch nào mà bạn đụng độ đều nguy hiểm
                      như nhau. Ngoài ra thì game còn chuyển sang cơ chế theo
                      góc nhìn thứ nhất, càng làm tăng yếu tố kinh dị lên thêm
                      một bậc.
                    </p>

                    <RelationNewsInPage category={category} />
                    <h5>3. Super Smash Bros. Ultimate</h5>
                    <p>
                      {" "}
                      Giá trị cốt lõi của dòng <strong>game</strong> này nằm ở
                      việc quy tụ những nhân vật trong các game khác vào trong
                      đây để choảng nhau tới hơi thở cuối cùng. Sonic the
                      Hedgehog, Solid Snake, Terry Bogard, đủ mọi nhân vật cho
                      anh em tha hồ lựa chọn. Tuy nhiên, đôi lúc một vài nhân
                      vật xuất hiện trong phần này lại mất tích trong phần sau,
                      và fan không hề thích điều này một chút nào. Nhưng đến
                      phần Super Smash Bros. Ultimate trên Nintendo Switch thì
                      nó đúng nghĩa là quần hùng hội ngộ anh em ạ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/photo-1-16282593924141232475292.jpg"
                      alt="3, GAME,"
                      note=""
                    />
                    <p>
                      Tất cả nhân vật trong các phần Smash trước đây đều xuất
                      hiện trong <strong>game</strong> này, rồi còn thêm một mớ
                      nhân vật mới nữa, cho anh em tha hồ ngồi lựa cả buổi trời
                      luôn cũng được. Mặc dù các bản mở rộng DLC đã nhận không
                      ít ý kiến trái chiều, nhưng có một điều không thể phủ nhận
                      là đấu sĩ trong game nhiều vô số kể anh em ạ.
                    </p>
                    <h5>4. Batman: Arkham Origins/Batman: Arkham Knight</h5>
                    <p>
                      {" "}
                      Dòng <strong>game</strong> Batman Arkham của Rocksteady đã
                      tạo được tiếng vang lớn ngay từ khi mở màn với Batman:
                      Arkham Asylum vào năm 2009. Trong những phần sau, thế giới
                      trong game được mở rộng, nhiều nhân vật mà fan yêu thích
                      được đưa vào game và dòng game này cứ thế mà tiếp tục phát
                      triển. Nhưng những game này không phải là hoàn hảo, nó vẫn
                      có những thứ cần được cải thiện.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/photo-1-16282592679541850437639.jpg"
                      alt="4, GAME,"
                      note=""
                    />
                    <p>
                      Trong 2 phần đầu tiên thì thế giới của nó khá là nhỏ, và
                      fan thì lại thích được tự do khám phá thành phố Gotham
                      City. Nhà phát triển đã lắng nghe điều này và cho phép{" "}
                      <strong>game</strong> thủ bay lượn xung quanh thành phố
                      trong phần Batman: Arkham Origins. Ngoài ra thì fan cũng
                      rất muốn được lái chiếc xe Batmobile của Batman vòng quanh
                      thành phố, và thế là cầu được ước thấy: fan được điều
                      khiển chiếc xe trứ danh này trong phần Batman: Arkham
                      Knight (2015).{" "}
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
