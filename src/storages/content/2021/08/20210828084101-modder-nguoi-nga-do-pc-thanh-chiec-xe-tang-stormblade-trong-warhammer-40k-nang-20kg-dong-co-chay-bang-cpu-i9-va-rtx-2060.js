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
"timestamp": '28/08/2021 08:41 AM',
"title": 'Modder người Nga độ PC thành chiếc xe tăng Stormblade trong Warhammer 40K nặng 20kg, động cơ chạy bằng CPU i9 và RTX 2060',
"description": 'Mời các bạn chiêm ngưỡng độ đẹp và ngầu của chiếc PC Stormblade trong dòng game Warhammer 40K của một modder người Nga làm.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/24/photo-1-1629811963238840550034.jpg',
"alt": 'DÀN PC,STORMBLADE,MEGOLET,WARHAMMER 40K,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,',
"category": 'tech',
"date": '28/08/2021',
"time": '08:41 AM',
"link": '/modder-nguoi-nga-do-pc-thanh-chiec-xe-tang-stormblade-trong-warhammer-40k-nang-20kg-dong-co-chay-bang-cpu-i9-va-rtx-2060',
"zcomponent": 'page_20210828084101',
"filepath": './20210828084101-modder-nguoi-nga-do-pc-thanh-chiec-xe-tang-stormblade-trong-warhammer-40k-nang-20kg-dong-co-chay-bang-cpu-i9-va-rtx-2060.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "tech";
const categoryLink = "/tech";
const title =
  "Modder người Nga độ PC thành chiếc xe tăng Stormblade trong Warhammer 40K nặng 20kg, động cơ chạy bằng CPU i9 và RTX 2060";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "28/08/2021 08:41 AM";
const description =
  "Mời các bạn chiêm ngưỡng độ đẹp và ngầu của chiếc PC Stormblade trong dòng game Warhammer 40K của một modder người Nga làm.";
const link =
  "modder-nguoi-nga-do-pc-thanh-chiec-xe-tang-stormblade-trong-warhammer-40k-nang-20kg-dong-co-chay-bang-cpu-i9-va-rtx-2060";
const tagparam = [
  "DÀN PC",
  "STORMBLADE",
  "MEGOLET",
  "WARHAMMER 40K",
  "CỘNG ĐỒNG MẠNG",
  "TIN TỨC GAME",
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

export default function page_20210828084101() {
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
                      Những bộ PC Custom đỉnh của chóp thật ra không thiếu, các
                      bạn có thể dễ dàng nhìn thấy chúng trên các hội nhóm, mạng
                      xã hội, trang tin... Tuy nhiên, không phải lúc nào các bạn
                      cũng có cơ hội được chiêm ngưỡng những bộ PC Custom được
                      lấy cảm hứng từ một series game nào đó giống như bộ PC mà
                      mình sắp giới thiệu sau đây.
                    </p>
                    <p>
                      Bộ PC này có tên là <strong>Stormblade</strong> được chế
                      tạo bởi một modder người Nga có nickname tài khoản Reddit
                      là <strong>Megolet</strong>. Đây cũng là tên của một chiếc
                      xe tăng hạng nặng trong dòng game{" "}
                      <strong>Warhammer 40K</strong>. Bộ PC Stormblade Warhammer
                      40K này hầu hết được làm từ các tấm ván ép gỗ Plywood được
                      cắt bằng laser. Chiếc "xe tăng công nghệ" này nặng khoảng
                      20 đến 25 kg, tức là nặng cỡ đâu đó bằng 3 - 4 hòn đá
                      tảng.
                    </p>
                    <p></p>
                    <p></p>
                    <p>
                      Đương nhiên, chiếc xe tăng PC <strong>Stormblade</strong>{" "}
                      <strong>Warhammer 40K</strong> không chỉ nặng về trọng
                      lượng mà còn nặng về cấu hình bên trong nữa.{" "}
                      <strong>Megolet</strong> mới đầu đã làm một cấu hình thử
                      nghiệm cho bộ case này bao gồm CPU Intel i9, GPU RTX 2060
                      và một bo mạch chủ chuẩn EATX. Tuy nhiên, sau đó thì
                      Megolet lại cảm thấy chưa có phần cứng nào xứng đáng để
                      nhét vào bộ case này để cho ra phiên bản cuối cùng cả, do
                      đó anh quyết định để trống bộ case. Ngoài ra, về vấn đề đi
                      dây thì như các bạn có thể thấy trong bức hình bên trên,
                      Megolet vẫn chưa đi dây một tí gì cả và anh ấy cũng không
                      muốn ép bản thân mình phải làm điều đó.
                    </p>
                    <p></p>
                    <p></p>
                    <p>
                      Khi được hỏi là tổng thể nguyên bộ case này đã tốn của{" "}
                      <strong>Megolet</strong> bao nhiêu tiền, thì anh trả lời
                      rằng bộ case này đã tốn 300 tiếng đồng hồ của cuộc đời
                      anh, còn tiền ở đây không phải là vấn đề gì to tát. 300
                      tiếng này bao gồm luôn cả thời gian thiết kế và cắt ghép
                      các thành phần lại với nhau.
                    </p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <RelationNewsInPage category={category} />
                    <p></p>
                    <p>Tóm tắt:</p>
                    <p>
                      - Bộ PC này có tên là <strong>Stormblade</strong> được chế
                      tạo bởi một modder người Nga có nickname trên Reddit là{" "}
                      <strong>Megolet</strong>.
                    </p>
                    <p>
                      - <strong>Stormblade</strong> cũng là tên của một chiếc xe
                      tăng hạng nặng trong dòng game{" "}
                      <strong>Warhammer 40K</strong>.
                    </p>
                    <p>
                      - Chiếc xe tăng được làm từ các tấm ván ép gỗ Plywood, cắt
                      bằng laser, nặng khoảng 20 đến 25 kg.
                    </p>
                    <p>
                      - <strong>Megolet</strong> mới đầu thử nghiệm cấu hình CPU
                      Intel Core i9, GPU RTX 2060 và bo mạch chủ chuẩn EATX. Tuy
                      nhiên, sau đó anh lại đổi ý để trống vì cảm thấy chưa có
                      linh kiện nào xứng tầm.
                    </p>
                    <p>
                      - <strong>Megolet</strong> đã tốn 300 tiếng đồng hồ để
                      thiết kế và cắt ghép mọi thứ, còn tiền thì anh nói không
                      có đáng gì.
                    </p>
                    <p>Video tóm tắt bài viết:</p>
                    <p></p>
                    <p>
                      Modder người Nga độ PC thành chiếc xe tăng{" "}
                      <strong>Stormblade</strong> trong{" "}
                      <strong>Warhammer 40K</strong> nặng 20kg, động cơ chạy
                      bằng CPU i9 và RTX 2060
                    </p>

                    <p></p>
                    <p></p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/24/photo-1-1629811963238840550034.jpg"
                      alt="1, DÀN PC,STORMBLADE,MEGOLET,WARHAMMER 40K,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/24/photo-1-16298119664101682100893.jpg"
                      alt="2, DÀN PC,STORMBLADE,MEGOLET,WARHAMMER 40K,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/24/photo-2-16298119659601344543338.jpg"
                      alt="3, DÀN PC,STORMBLADE,MEGOLET,WARHAMMER 40K,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/24/photo-3-16298119674731632020582.jpg"
                      alt="4, DÀN PC,STORMBLADE,MEGOLET,WARHAMMER 40K,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/24/photo-4-16298119669741603188751.jpg"
                      alt="5, DÀN PC,STORMBLADE,MEGOLET,WARHAMMER 40K,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/24/photo-5-1629811966461263403653.jpg"
                      alt="6, DÀN PC,STORMBLADE,MEGOLET,WARHAMMER 40K,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/24/photo-6-16298119659701134211459.jpg"
                      alt="7, DÀN PC,STORMBLADE,MEGOLET,WARHAMMER 40K,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>Nguồn PCGamer biên dịch GVN360</p>
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
