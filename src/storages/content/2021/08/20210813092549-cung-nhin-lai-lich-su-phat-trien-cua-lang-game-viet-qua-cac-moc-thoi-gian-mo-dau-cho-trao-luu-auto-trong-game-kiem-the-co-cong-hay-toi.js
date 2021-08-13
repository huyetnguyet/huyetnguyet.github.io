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
"timestamp": '13/08/2021 09:25 AM',
"title": 'Cùng nhìn lại lịch sử phát triển của làng game Việt qua các mốc thời gian - Mở đầu cho trào lưu auto trong game, Kiếm Thế có "công hay tội"?',
"description": 'Kiếm Thế có thể coi là tựa game đi tiên phong cho trào lưu game "mì ăn liền" sau này ở Việt Nam.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-1628312214490603217886.jpg',
"alt": 'GAME,GAME THỦ,KIẾM THẾ,TIN TỨC GAME,MINH CHÂU TAM QUỐC,',
"category": 'games',
"date": '13/08/2021',
"time": '09:25 AM',
"link": '/cung-nhin-lai-lich-su-phat-trien-cua-lang-game-viet-qua-cac-moc-thoi-gian-mo-dau-cho-trao-luu-auto-trong-game-kiem-the-co-cong-hay-toi',
"zcomponent": 'page_20210813092549',
"filepath": './20210813092549-cung-nhin-lai-lich-su-phat-trien-cua-lang-game-viet-qua-cac-moc-thoi-gian-mo-dau-cho-trao-luu-auto-trong-game-kiem-the-co-cong-hay-toi.js'
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
  'Cùng nhìn lại lịch sử phát triển của làng game Việt qua các mốc thời gian - Mở đầu cho trào lưu auto trong game, Kiếm Thế có "công hay tội"?';
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "13/08/2021 09:25 AM";
const description =
  'Kiếm Thế có thể coi là tựa game đi tiên phong cho trào lưu game "mì ăn liền" sau này ở Việt Nam.';
const link =
  "cung-nhin-lai-lich-su-phat-trien-cua-lang-game-viet-qua-cac-moc-thoi-gian-mo-dau-cho-trao-luu-auto-trong-game-kiem-the-co-cong-hay-toi";
const tagparam = [
  "GAME",
  "GAME THỦ",
  "KIẾM THẾ",
  "TIN TỨC GAME",
  "MINH CHÂU TAM QUỐC",
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

export default function page_20210813092549() {
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
                      Tiếp tục với series lần trước, hãy cùng điểm qua những cột
                      mốc phát triển của làng <strong>game</strong> online Việt
                      nào.
                    </p>
                    <h5>
                      5/2009: 3 <strong>game</strong> bom tấn đều "xịt"
                    </h5>
                    <p>
                      Như đã đề cập ở phần trước, giai đoạn 2006 - 2009 thật sự
                      là quãng thời gian khó khăn với làng <strong>game</strong>{" "}
                      online Việt Nam khi nhận phải rất nhiều những định kiến
                      của xã hội. Tuy vậy, trong năm 2009 vẫn có vô số những sự
                      kiện đình đám mà một trong số đó chính là sự ra đời của ba
                      tựa game hứa hẹn sẽ trở thành bom tấn, siêu phẩm chinh
                      phục người chơi Việt. Thế nhưng, kết quả thì chỉ thấy một
                      chữ thất vọng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-16283121696101769808317.jpg"
                      alt="1, GAME,GAME THỦ,KIẾM THẾ,TIN TỨC GAME,MINH CHÂU TAM QUỐC,"
                      note="Granado Espara là bom xịt của năm 2009"
                    />
                    <p>
                      Đó chính là những Alantica, Granado Espada và thêm một tựa{" "}
                      <strong>game</strong> nữa là Độc Bá Giang Hồ. Kể ra thì
                      những tựa game này cũng khá đen đủi khi lựa chọn thời gian
                      ra mắt vào lúc làng game Việt đang khá rối ren.
                    </p>
                    <h5>
                      10/2009: Sự ra mắt của <strong>Kiếm Thế</strong> mở ra một
                      chương mới trong làng <strong>game</strong> Việt
                    </h5>
                    <p>
                      Ngay từ tháng 6, một web<strong>game</strong> online nhập
                      vai đầu tiên đã xuất hiện tại Việt Nam nhưng phải 4 tháng
                      sau, một siêu phẩm mới chính thức được trình làng. Nó mang
                      tên <strong>Kiếm Thế</strong> - tựa game tính tới thời
                      điểm này hoàn toàn có thể coi là tượng đài trong lòng của
                      các <strong>game thủ</strong> Việt.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-1628312214490603217886.jpg"
                      alt="4, GAME,GAME THỦ,KIẾM THẾ,TIN TỨC GAME,MINH CHÂU TAM QUỐC,"
                      note=""
                    />
                    <p>
                      <strong>Kiếm Thế</strong> nên được coi là có "công" hay
                      "tội"
                    </p>
                    <p>
                      Bên cạnh đó, cũng chẳng biết nên dùng từ "công" hay "tội"
                      để dành cho <strong>Kiếm Thế</strong>. Tất nhiên, độ phủ
                      sóng và thành công của nó là điều ai cũng biết nhưng đồng
                      thời, Kiếm Thế cũng đã trở thành tựa <strong>game</strong>{" "}
                      đầu tiên hợp thức hóa hành động auto có sẵn trong game, mở
                      ra một kỷ nguyên mới cho sự phát triển của các tựa game
                      theo phong cách "mì ăn liền" như thời điểm hiện tại. Điều
                      này cũng gián tiếp đẩy làng game Việt vào một thời kỳ hỗn
                      loạn khi vô số những tựa game na ná nhau xuất hiện với
                      phong cách khá nhàm chán, đơn điệu.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-16283122389302119485031.jpg"
                      alt="2, GAME,GAME THỦ,KIẾM THẾ,TIN TỨC GAME,MINH CHÂU TAM QUỐC,"
                      note="Các webgame như Tam Quốc Truyền Kỳ cũng phát triển rất thịnh thời này"
                    />
                    <p>
                      Bên cạnh đó, như đã nhắc ở trên, sự xuất hiện của các web
                      <strong>game</strong> cũng mở ra một chương mới, dần kết
                      thúc sự thống trị của các tựa game online trên nền tảng
                      Client. Tuy vậy, đó cũng là lúc mà các webgame mì ăn liền
                      cũng lên ngôi, tiếp tục khiến cho làng game Việt "chết
                      dần" theo thời gian.
                    </p>
                    <h5>
                      2011: Sự xuất hiện của <strong>game</strong> mobile online
                      đầu tiên
                    </h5>
                    <p>
                      Sự xuất hiện của smartphone dần dần thay đổi hệ thống của
                      làng <strong>game</strong> Việt và{" "}
                      <strong>Minh Châu Tam Quốc</strong> - tên của tựa game gMO
                      (game mobile online) đầu tiên trong lịch sử Việt Nam ra
                      mắt là minh chứng rõ thấy nhất. Nó cũng đồng thời mở ra
                      một chương mới cho sự phát triển của làng game Việt, nơi
                      mà game mobile đã thống trị tới tận thời điểm hiện tại.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-16283122755411312178149.jpg"
                      alt="3, GAME,GAME THỦ,KIẾM THẾ,TIN TỨC GAME,MINH CHÂU TAM QUỐC,"
                      note="Minh Châu Tam Quốc - tựa game gMO đầu tiên ở Việt Nam"
                    />
                    <p>
                      Tất nhiên, theo thời gian thì các tựa{" "}
                      <strong>game</strong> client cũng dần tìm lại chỗ đứng như
                      cách mà PUBG, Genshin Impact đã làm được. Tuy vậy, thế độc
                      tôn đã không còn và thậm chí, miếng bánh thị phần mà các
                      tựa game mobile còn áp đảo hơn nhiều lần.
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
