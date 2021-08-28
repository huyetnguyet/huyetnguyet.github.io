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
"timestamp": '28/08/2021 08:42 AM',
"title": 'Top 15 tựa game thế giới mở hay nhất trên PC',
"description": 'Các bạn đang muốn kiếm tìm những tựa game PC thế giới mở hay nhất để trải nghiệm cho khuây khỏa? Thì đây là những ứng cử viên không thể hợp lý hơn.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/24/photo-1-16298134287782048916120.jpg',
"alt": 'GAME,GAME HAY,GAME ĐỈNH,GAME THẾ GIỚI MỞ,GAME PC,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,',
"category": 'games',
"date": '28/08/2021',
"time": '08:42 AM',
"link": '/top-15-tua-game-the-gioi-mo-hay-nhat-tren-pc',
"zcomponent": 'page_20210828084224',
"filepath": './20210828084224-top-15-tua-game-the-gioi-mo-hay-nhat-tren-pc.js'
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
const title = "Top 15 tựa game thế giới mở hay nhất trên PC";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "28/08/2021 08:42 AM";
const description =
  "Các bạn đang muốn kiếm tìm những tựa game PC thế giới mở hay nhất để trải nghiệm cho khuây khỏa? Thì đây là những ứng cử viên không thể hợp lý hơn.";
const link = "top-15-tua-game-the-gioi-mo-hay-nhat-tren-pc";
const tagparam = [
  "GAME",
  "GAME HAY",
  "GAME ĐỈNH",
  "GAME THẾ GIỚI MỞ",
  "GAME PC",
  "TIN TỨC GAME",
  "CỘNG ĐỒNG MẠNG",
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

export default function page_20210828084224() {
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
                      Lịch sử ngành <strong>game</strong> đã trải qua hàng chục
                      năm phát triển. Từ đồ họa cho đến lối chơi, cốt truyện...
                      đều được các nhà làm game chăm chút tỉ mỉ, đồng thời mang
                      đến cho người chơi cảm giác tự do trong cách suy nghĩ và
                      khám phá riêng trong hành trình chinh phục thế giới ảo.
                      Cũng chính vì thế mà các tựa{" "}
                      <strong>game thế giới mở</strong> mọc lên ngày càng nhiều,
                      tạo thêm sự lựa chọn đa dạng cho game thủ khi họ muốn trải
                      nghiệm thể loại đầy thử thách này.
                    </p>
                    <p>
                      Nếu đang tìm kiếm những tựa <strong>game</strong> PC thế
                      giới mở hay nhất để trải nghiệm cho khuây khỏa, thì dưới
                      đây là những ứng cử viên không thể hợp lý hơn.
                    </p>
                    <h5>Cyberpunk 2077</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Khởi đầu bằng màn ra mắt đầy thảm họa trên console,
                      Cyberpunk 2077 lại mang đến trải nghiệm tốt hơn rất nhiều
                      trên PC dù vẫn bị vướng khá nhiều lỗi. Xét về mặt tích cực
                      thì Cyberpunk 2077 đã mang đến một thế giới mở đầy sức
                      sống cho <strong>game</strong> thủ PC khám phá. Thành phố
                      Night City ẩn chứa rất nhiều điều thú vị, bí mật mà bạn
                      phải len lỏi khắp hang cùng ngõ hẻm mới có thể khám phá
                      hết được. Nhờ vậy mà Cyberpunk 2077 cũng trở nên chân thực
                      và thuyết phục hơn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/24/photo-1-16298134287782048916120.jpg"
                      alt="1, GAME,GAME HAY,GAME ĐỈNH,GAME THẾ GIỚI MỞ,GAME PC,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />

                    <p>
                      Cốt truyện trong <strong>game</strong> cũng được đầu tư kỹ
                      lưỡng, có nhiều trường đoạn hấp dẫn, và nhân vật cũng rất
                      có hồn. Tuy chưa đạt đến tầm siêu phẩm The Witcher 3: Wild
                      Hunt nhưng nó cũng đã trên cơ rất nhiều tựa game khác rồi.
                      Ngoài ra, chủ đề cyberpunk trước đây cũng từng được khai
                      thác nhiều lần, nhưng Cyberpunk 2077 đã nâng nó lên một
                      tầm cao mới và mở rộng quy mô nó thêm nhiều nữa. Bên cạnh
                      nhiệm vụ chính thì game còn có khá nhiều nhiệm vụ phụ giúp
                      thổi hồn vào mọi ngóc ngách của Night City.
                    </p>
                    <h5>Valheim</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Ngay từ giai đoạn Early Access trên Steam, Valheim đã tạo
                      ra được tiếng vang lớn chỉ trong vài tháng đầu năm 2021.
                      Đây là một tựa <strong>game</strong> thế giới mở trên PC
                      với yếu tố sandbox, đưa người chơi vào vai Viking cố gắng
                      tìm cách sinh tồn trong nhiều quần xã sinh vật khác nhau,
                      song song đó là nắm lấy vinh quang để tiến vào lâu đài
                      Valhalla.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/24/photo-1-16298134305071433637995.jpg"
                      alt="2, GAME,GAME HAY,GAME ĐỈNH,GAME THẾ GIỚI MỞ,GAME PC,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />

                    <p>
                      Để khuyến khích người chơi chủ động khám phá thế giới xung
                      quanh, Valheim cung cấp cho <strong>game</strong> thủ một
                      số công cụ để xây nhà, săn bắt thú vật và đánh bại kẻ
                      địch. Ngoài ra, game còn cho phép bạn bắt tay hợp tác và
                      liên minh với những Vikings khác để tăng khả năng sinh
                      tồn. Tuy game vẫn còn đang trong giai đoạn phát triển
                      nhưng với tình hình hiện tại thì nó đã mang đến cho người
                      chơi vô vàn thứ hay ho để mò mẫm.
                    </p>
                    <h5>Far Cry 5</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Ba phần gần đây nhất của Far Cry đều xứng đáng có tên
                      trong danh sách này, nhưng Far Cry 5 nổi bật hơn hẳn nhờ
                      bối cảnh mà Ubisoft đã tạo ra cho nó. Hope County được lấy
                      cảm hứng từ bang Montana, mang một vẻ bề ngoài đầy thu hút
                      nhưng bên trong lại đầy rẫy những mối nguy hiểm.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/24/photo-2-1629813430525324622727.jpg"
                      alt="3, GAME,GAME HAY,GAME ĐỈNH,GAME THẾ GIỚI MỞ,GAME PC,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />

                    <p>
                      Cứ đi được một chút là bạn sẽ bắt gặp bè lũ tay sai của
                      Joseph Seed – nhân vật phản diện trong{" "}
                      <strong>game</strong> – và chúng sẽ không ngần ngại trong
                      việc tặng bạn một loạt "kẹo đồng".
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Có thể khi Far Cry 6 ra mắt, phần 5 này sẽ dần chìm vào
                      quên lãng, nhưng bản thân nó vẫn là một tựa{" "}
                      <strong>game</strong> bắn súng FPS thế giới mở mang đến
                      cho game thủ PC bản đồ rộng lớn để khám phá, những màn đọ
                      súng quyết liệt, và đặc biệt là các nhân vật tràn đầy năng
                      lượng.
                    </p>
                    <h5>Metal Gear Solid 5: The Phantom Pain</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Kojima Productions đã chọn một cách tiếp cận khác trong
                      phần 5 của dòng <strong>game</strong> Metal Gear Solid
                      huyền thoại. Cụ thể, họ đã tập trung tạo ra một thế giới
                      mở, cho phép game thủ PC thực hiện những pha hành động lén
                      lút tùy theo trí tưởng tượng của bản thân. Metal Gear
                      Solid 5: The Phantom Pain có gameplay phải nói là thuộc
                      hàng nhất nhì trong series, đưa người chơi vào vai Venom
                      Snake với hàng tá vũ khí, vật dụng tối tân để bạn lên kế
                      hoạch xâm nhập vào căn cứ địch để hoàn thành mục tiêu.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/24/photo-3-1629813432570322450334.jpg"
                      alt="4, GAME,GAME HAY,GAME ĐỈNH,GAME THẾ GIỚI MỞ,GAME PC,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />

                    <p>
                      Đồng thời, nhờ cảnh quan hoang sơ và cằn cỗi mà cốt truyện
                      lại càng được làm nổi bật hơn nữa. The Phantom Pain khá là
                      khác biệt so với những phần trước, phần lớn là do nhà phát
                      triển tập trung vào <strong>game</strong>play hơn là cốt
                      truyện. Tuy nhiên, nếu chỉ xét riêng bản thân nó thì đây
                      sẽ là một trong những tựa{" "}
                      <strong>game thế giới mở</strong> xuất sắc nhất trên PC.
                    </p>
                    <h5>Genshin Impact</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Nhiều <strong>game</strong> thủ ví von Genshin Impact như
                      là trò The Legend of Zelda: Breath of the Wild phiên bản
                      "waifu", và có lẽ cũng nhờ vậy mà game này đã trở thành
                      một hiện tượng luôn các bạn ạ. Sau mỗi bản cập nhật,
                      Genshin Impact lại càng chứng minh rằng bản thân nó xứng
                      đáng với sự quan tâm của nhiều game thủ. Dù vẫn đang được
                      hoàn thiện dần nhưng bản thân Teyvat trong game đã là một
                      thế giới hoàn mỹ chứa đựng vô vàn câu chuyện thú vị, những
                      bí mật đầy huyền ảo, và hàng tá nhân vật với tính cách rất
                      độc đáo. Kiểu gì bạn cũng sẽ cảm thấy choáng ngợp khi mới
                      bước vào Genshin Impact.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/24/photo-4-16298134320552140291464.jpg"
                      alt="5, GAME,GAME HAY,GAME ĐỈNH,GAME THẾ GIỚI MỞ,GAME PC,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />

                    <p>
                      Ngoài ra, trong <strong>game</strong> còn có nhiều danh
                      lam thắng cảnh rất đẹp, chẳng hạn như khu rừng đá Guyun
                      Stone Forest đầy mê hoặc, hay như lữ quán Wangshu Inn đầy
                      thơ mộng. Tất cả đã giúp tạo ra một thế giới mở vô cùng đa
                      dạng, liên tục thôi thúc game thủ PC khám phá.
                    </p>

                    <p></p>

                    <p>
                      Nguồn <strong>Game</strong>Rant biên dịch GVN360
                    </p>
                    <p></p>
                    <p></p>
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
