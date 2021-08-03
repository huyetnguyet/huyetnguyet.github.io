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
"timestamp": '17/06/2021 02:04 PM',
"title": 'Những nhân vật đáng yêu bậc nhất được nhiều game thủ ưa thích',
"description": 'Không ít các tựa game đình đám sở hữu hình ảnh nhân vật được nhân cách hóa với những đường nét ngộ nghĩnh, đáng yêu để tạo sự gần gũi, yêu thích.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/6/17/photo-1-16238729975221756858983.jpg',
"alt": 'Game, Nhan Vat, ',
"category": 'games',
"date": '17/06/2021',
"time": '02:04 PM',
"link": '/nhung-nhan-vat-dang-yeu-bac-nhat-duoc-nhieu-game-thu-ua-thich',
"zcomponent": 'page_20210617140409',
"filepath": './20210617140409-nhung-nhan-vat-dang-yeu-bac-nhat-duoc-nhieu-game-thu-ua-thich.js'
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
const title = "Những nhân vật đáng yêu bậc nhất được nhiều game thủ ưa thích";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "17/06/2021 02:04 PM";
const description =
  "Không ít các tựa game đình đám sở hữu hình ảnh nhân vật được nhân cách hóa với những đường nét ngộ nghĩnh, đáng yêu để tạo sự gần gũi, yêu thích.";
const link = "nhung-nhan-vat-dang-yeu-bac-nhat-duoc-nhieu-game-thu-ua-thich";
const tagparam = ["game", "nhan-vat"];
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

export default function page_20210617140409() {
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
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <h3>1. Chocobo - Final Fantasy</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/17/photo-1-16238729975221756858983.jpg"
                      alt="1Game, Nhan Vat, "
                      note=""
                    />
                    <p>
                      Chocobo là tên giống chim (gà) hư cấu trong dòng{" "}
                      <strong>game</strong> Final Fantasy. Chúng có hai hình mẫu
                      thiết kế chính gồm: Một là kiểu cực "ngầu" theo phong cách
                      chiến đấu, hai là cực cute theo phong cách hoạt hình chibi
                      như trong series Chocobo. Chocobo là phương tiện di chuyển
                      của bạn trong thế giới Final Fantasy rộng lớn, vậy nên
                      chúng không phải là một tài sản tầm thường đâu.
                    </p>
                    <h3>2. Klee - Genshin Impact</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/17/photo-1-16238709295481987959868.jpg"
                      alt="2Game, Nhan Vat, "
                      note=""
                    />
                    <p>
                      Đối với những <strong>game</strong> thủ mới chập chững
                      phiêu lưu trong thế giới Teyvat của Genshin Impact, có lẽ
                      waifu như Ganyu, Jean hay những nhân vật có ngoại hình hầm
                      hố như Razor, Diluc là lựa chọn của nhiều người. Dù vậy,
                      Klee vẫn là một trong những lựa chọn được rất nhiều fan
                      anime lựa chọn.
                    </p>
                    <p>
                      Sở hữu ngoại hình dễ thương và nhỏ nhắn, thế nhưng Klee
                      cực kỳ "nguy hiểm" như trong nhiệm vụ của cốt truyện của
                      cô bé. Không biết rằng, liệu Klee có phải được lấy cảm
                      hứng từ nhân vật Arale trong truyện tranh Dr.Slump của họa
                      sỹ Akira Toriyama hay không?
                    </p>
                    <h3>3. Yoshi – Super Mario Bros.</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/17/photo-1-1623872909528502928581.png"
                      alt="3Game, Nhan Vat, "
                      note=""
                    />
                    <p>
                      Có thể nói Yoshi là một trong những thú nuôi lâu đời nhất
                      trong <strong>game</strong>. Chúng ta bắt gặp chú khủng
                      long đáng yêu này lần đầu khi mua chiếc máy Super Nintendo
                      về để chơi Super Mario World. Sau đó, Yoshi đã xuất hiện
                      trong vô số tựa game khác của Nintendo như Mario Kart,
                      Smash Bros. hay Yoshi World... Ai mà không muốn có một
                      người bạn đồng hành trung thành, có thể nuốt chửng kẻ thù,
                      và đặc biệt... là một con khủng long chứ!
                    </p>
                    <RelationNewsInPage category={category} />
                    <h3>4. Sackboy - LittleBigPlanet</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/16/photo-4-16237765198411149138411.jpg"
                      alt="4Game, Nhan Vat, "
                      note=""
                    />
                    <p>
                      “Cậu bé cuộn len” – Sackboy được yêu thích tới mức khiến
                      Sony từng “nhắm” cho vị trí nhân vật đại diện của cả hệ
                      máy PlayStation. Sackboy có đầy đủ những phẩm chất như dễ
                      thương, thân thiện, gần gũi với khách hàng ở mọi lứa tuổi.
                      Tuy không có vẻ ngoài nổi bật nhưng Sackboy lại là nhân
                      vật vô tư, hay cười và thu hút đám đông. Mọi vẻ mặt và
                      biểu hiện của câu đều rất đáng yêu. Sackboy đáng yêu chính
                      là yếu tố làm nên sự thành công của những phiên bản Little
                      Big Planet trên PS3.
                    </p>
                    <h3>5. Om Nom - Cut the Rope</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/16/photo-5-16237765202581882240850.jpg"
                      alt="5Game, Nhan Vat, "
                      note=""
                    />
                    <p>
                      Tựa <strong>game</strong> mobile Cut The Rope ra đời đã
                      tạo ra cơn sốt với hình ảnh chú ếch xanh Om Nom vô cùng dễ
                      thương. Hình ảnh chú ếch Om Nom háu ăn được giới trẻ vô
                      cùng yêu thích qua các hành động, điệu bộ đáng yêu của
                      mình. Chính vì được yêu thích đông đảo, chú ếch Om Nom này
                      sẽ vinh dự được hãng sản xuất Blockade Entertainment đưa
                      lên màn ảnh nhỏ.
                    </p>
                    <h3>6. Kirby - Kirby</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/16/photo-6-162377651987295891793.gif"
                      alt="6Game, Nhan Vat, "
                      note=""
                    />
                    <p>
                      Kirby là nhân vật trong tựa <strong>game</strong> cùng tên
                      nổi tiếng của Nintendo. Với đôi mắt to tròn, chiếc miệng
                      rộng, thân hình màu hồng bầu bĩnh cùng giọng nói vô cùng
                      đáng yêu của Kirby thì dù có tuổi thọ trên 20 năm, Kirby
                      vẫn là hình ảnh nhân vật huyền thoại vô cùng dễ thương và
                      nổi tiếng. Các tựa game về Kirby cũng luôn khiến người
                      chơi phải phì cười vì độ đáng yêu của nhân vật này với các
                      tuyệt chiêu như ngậm hơi để phình to ra hay nuốt chửng các
                      item tăng sức mạnh.
                    </p>
                    <h3>7. Pikachu - Pokemon</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/16/photo-7-16237765199172117682740.gif"
                      alt="7Game, Nhan Vat, "
                      note=""
                    />
                    <p>
                      Ngay khi Nintendo tung ra series Pokemon thì Pikachu đã
                      ngay lập tức trở thành người đồng hành của các{" "}
                      <strong>game</strong> thủ trên toàn thế giới. Với tạo hình
                      cực kỳ dễ thương và những biểu cảm từ khóc đến cười hay
                      tức giận đều đáng yêu khó tả, Pikachu đã chinh phục trái
                      tim của bất cứ người chơi nào và cũng trở thành đối tượng
                      mô phỏng của rất nhiều coser. Cho đến nay cũng chưa có
                      sủng vật nào vượt mặt được Pikachu trong khoản bình chọn
                      sủng vật được yêu thích nhất trong lịch sử game thế giới.
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
