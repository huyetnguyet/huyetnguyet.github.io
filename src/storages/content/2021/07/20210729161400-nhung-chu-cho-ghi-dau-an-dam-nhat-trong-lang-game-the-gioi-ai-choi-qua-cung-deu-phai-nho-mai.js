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
"timestamp": '29/07/2021 04:14 PM',
"title": 'Những chú chó ghi dấu ấn đậm nhất trong làng game thế giới, ai chơi qua cũng đều phải nhớ mãi',
"description": 'Những chú chó có cả tốt và xấu này đã từng khuynh đảo làng game thế giới.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/6/screenshot10-1625559357592580298764.png',
"alt": 'GAME,GAME THỦ,TIN TỨC GAME,',
"category": 'games',
"date": '29/07/2021',
"time": '04:14 PM',
"link": '/nhung-chu-cho-ghi-dau-an-dam-nhat-trong-lang-game-the-gioi-ai-choi-qua-cung-deu-phai-nho-mai',
"zcomponent": 'page_20210729161400',
"filepath": './20210729161400-nhung-chu-cho-ghi-dau-an-dam-nhat-trong-lang-game-the-gioi-ai-choi-qua-cung-deu-phai-nho-mai.js'
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
  "Những chú chó ghi dấu ấn đậm nhất trong làng game thế giới, ai chơi qua cũng đều phải nhớ mãi";
const author = "Illusionary";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:14 PM";
const description =
  "Những chú chó có cả tốt và xấu này đã từng khuynh đảo làng game thế giới.";
const link =
  "nhung-chu-cho-ghi-dau-an-dam-nhat-trong-lang-game-the-gioi-ai-choi-qua-cung-deu-phai-nho-mai";
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

export default function page_20210729161400() {
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
                    Hiếm khi trò chơi sử dụng chó làm bạn đồng hành hoặc những
                    kẻ thù lớn vượt qua ngoài phạm vi của các NPC thông thường,
                    nhưng điều đó trở nên phổ biến hơn trong những năm qua và
                    dưới đây là một số chú chó tốt nhất hoặc xấu xa nhất trong
                    trò chơi.
                  </p>
                  <h5>Tốt: Cerberus từ Hades</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/6/screenshot10-1625559357592580298764.png"
                    alt="1, GAME,GAME THỦ,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Cerberus không thể không làm tan chảy trái tim, ngay cả khi
                    bạn đã quen thuộc với danh tiếng là chú chó bảo vệ của Địa
                    ngục. Nụ cười dễ mến của anh ta loại bỏ bất kỳ phẩm chất
                    đáng sợ nào mà ba cái đầu, bộ lông màu đỏ như máu và vòng cổ
                    hình đầu lâu có thể tạo ra. Trên thực tế, nhóm phát triển
                    của "Hades" tại Supergiant đã đặc biệt tạo ra nó để người
                    chơi có thể cưng nựng chú chó có kích thước như Clifford này
                    mỗi khi bạn chạm trán với nó.
                  </p>
                  <p>
                    Nhiều người sẽ đồng ý rằng Cerberus thực sự là một cậu bé
                    tốt, và anh ấy hầu như chỉ giúp Zagreus trong Ngôi nhà của
                    Hades. Tuy nhiên, không phải lúc nào anh ấy cũng hành xử tốt
                    nhất. Rốt cuộc, anh ta đã phá tung phòng khách - nhưng anh
                    ta chỉ làm vậy vì anh ta rất nhớ Zagreus, giống như bất kỳ
                    cậu bé ngoan nào.
                  </p>
                  <h5>Xấu: Cerberus từ God of War 3</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/6/screenshot11-16255593948421352269936.png"
                    alt="2, GAME,GAME THỦ,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Đây không phải là loại Cerberus dễ thương của "Hades". "God
                    of War" được lấy cảm hứng từ thần thoại Hy Lạp, Cerberus
                    xuất hiện như một chủng tộc quái thú trong suốt bộ truyện,
                    tấn công theo nhiều biến thể khác nhau. Chúng có thể là kẻ
                    thù tiêu chuẩn xuất hiện trong suốt cuộc hành trình, hoặc
                    những con boss cần sự khéo léo hơn một chút để đánh bại. Ví
                    dụ, Kratos phải giết con quái vật ba đầu này trong một trận
                    đánh với mini-boss trong "God of War 3".
                  </p>
                  <p>
                    Tất nhiên, nhiều trò chơi khác đã có Cerberus xấu, bao gồm
                    loạt "Devil May Cry", "Kingdom Hearts" và "Assassin’s Creed
                    Odyssey". Tương tự như bản lặp lại của "God of War", các
                    phiên bản này xuất hiện như những con chó săn ba đầu, hung
                    thần với mong muốn giết người.
                  </p>
                  <h5>Tốt: Dogmeat từ Fallout</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/6/screenshot12-16255594120811599747676.png"
                    alt="3, GAME,GAME THỦ,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Bạn có thể hỏi Dogmeat nào? Vâng, tất cả chúng. Mỗi trò chơi
                    "Fallout" đều có một chú chó khác nhau tên là Dogmeat, và
                    những chú chó con sẵn sàng chiến đấu này thường giúp nhân
                    vật chính hạ gục kẻ thù và thực hiện các nhiệm vụ.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Để đi sâu vào vấn đề này, một Redditor đã bắt đầu hỏi về một
                    chủ đề "Có phải tất cả (các) Dogmeat được kết nối với nhau
                    bằng canon không?" Sự đồng thuận chung là không, và đó chỉ
                    là một cái tên được duy trì trong suốt các trò chơi. Một số
                    người đùa cợt rằng có lẽ "Dogmeat" không phải là một cái tên
                    xa lạ trong bối cảnh ngày tận thế, vì nhiều người có thể
                    nghĩ đến việc ăn thịt chó đồng hành của mình. Nhưng tại sao
                    bạn lại có thể làm như vậy trong khi Dogmeat là con vật đáng
                    yêu với trái tim nhân hậu như vậy?
                  </p>
                  <h5>Xấu: Roc từ NieR Replicant</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/6/screenshot13-1625559427949901575075.png"
                    alt="4, GAME,GAME THỦ,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Roc xuất hiện như một con boss trong "NieR RepliCant" và
                    "NieR Gestalt." Trong thế giới của "NieR", những con quái
                    vật được gọi là Shades có thể ở bất kỳ hình thức nào. Trong
                    trường hợp này, Roc xuất hiện như một con chó hay cụ thể hơn
                    là một con sói. Anh ta được cho là đã sống như một con sói
                    trước khi bị Shade chiếm hữu và mất đi một người chủ mà anh
                    ta coi trọng như một người cha. Sau đó, Roc gia nhập một bầy
                    sói sa mạc và trở thành thủ lĩnh của chúng.
                  </p>
                  <p>
                    Ngay từ lần đầu tiên xuất hiện, Roc xuất hiện như một kẻ
                    phản diện tàn ác, người xung đột với các anh hùng. Do đó,
                    nói một cách nhẹ nhàng, anh ta là một con chó xấu. Cốt
                    truyện bi thảm của Roc thêm vào câu chuyện một chút mơ hồ về
                    đạo đức, nhưng có vẻ như Internet không thông cảm cho lắm.
                  </p>
                  <h5>Tốt: DD từ Metal Gear Solid 5</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/6/screenshot14-162555944364643649590.png"
                    alt="5, GAME,GAME THỦ,TIN TỨC GAME,"
                    note=""
                  />
                  <p>
                    Diamond Dog (còn gọi là "DD") là bạn đồng hành của Venom
                    Snake. Một trong những đặc điểm nổi bật của DD là con mắt bị
                    mất ở bên phải, giống với chủ nhân của mình. Kết quả là cả
                    DD và Snake đều đeo băng bịt mắt ở bên phải khuôn mặt.
                  </p>
                  <p>
                    DD tham gia cùng Snake trong các nhiệm vụ bằng cách sử dụng
                    hệ thống bạn thân, cho phép anh ta lấy các vật phẩm, tấn
                    công kẻ thù và thực hiện các lệnh khác. Theo nghĩa đó, anh
                    ta hoạt động giống như những con chó đồng hành khác trong
                    các trò chơi như "Fallout" và "Far Cry 5". DD xuất hiện
                    trong "Metal Gear Solid 5: The Phantom Pain", trò chơi duy
                    nhất có đồng minh động vật trong loạt series "Metal Gear
                    Solid". Không rõ liệu "MGS" có còn tiếp tục hay không vì sự
                    chia rẽ lộn xộn của công ty Konami và giám đốc Hideo Kojima,
                    điều này cũng khiến cuộc phiêu lưu trong tương lai của DD
                    gặp nguy hiểm. Dù vậy, anh vẫn là một trong những chàng trai
                    tốt nhất đối với nhiều <strong>game</strong> thủ yêu chó.
                  </p>
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
