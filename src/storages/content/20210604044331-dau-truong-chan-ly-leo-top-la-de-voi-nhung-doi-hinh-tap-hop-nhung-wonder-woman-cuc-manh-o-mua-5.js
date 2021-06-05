import React from "react";
import "../../components/page.css";
import { AdsHorizontal, AdsVertical } from "../../components/adsMethods";
import { RandomFeature } from "../../components/methods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "../../components/content";

/* ---------------------------------------------------------------- */

/*

 <ContentItem title="Đấu Trường Chân Lý: Leo top là dễ với những đội hình tập hợp những 'Wonder Woman' cực mạnh ở mùa 5"
content="Nếu đã cảm thấy chán những công thức đội hình truyền thống, bạn hoàn toàn có thể trải nghiệm thử thách mới với những lối chơi tiêu chuẩn của riêng mình." 
src="https://gamek.mediacdn.vn/133514250583805952/2021/6/4/-16227560516681426978234.jpg" 
alt="Dau Truong Chan Ly, Dtcl, Doi Hinh Dtcl, Game, Tin Game, Tin Tuc Game, Tin Dtcl, Tft, Cam Nang Dtcl, " 
category="games" 
time="04/06/2021 04:43 PM" 
link="/dau-truong-chan-ly-leo-top-la-de-voi-nhung-doi-hinh-tap-hop-nhung-wonder-woman-cuc-manh-o-mua-5"/>

{title="Đấu Trường Chân Lý: Leo top là dễ với những đội hình tập hợp những 'Wonder Woman' cực mạnh ở mùa 5",
content="Nếu đã cảm thấy chán những công thức đội hình truyền thống, bạn hoàn toàn có thể trải nghiệm thử thách mới với những lối chơi tiêu chuẩn của riêng mình." ,
src="https://gamek.mediacdn.vn/133514250583805952/2021/6/4/-16227560516681426978234.jpg" ,
alt="Dau Truong Chan Ly, Dtcl, Doi Hinh Dtcl, Game, Tin Game, Tin Tuc Game, Tin Dtcl, Tft, Cam Nang Dtcl, " ,
category="games" ,
time="04/06/2021 04:43 PM" ,
link="/dau-truong-chan-ly-leo-top-la-de-voi-nhung-doi-hinh-tap-hop-nhung-wonder-woman-cuc-manh-o-mua-5",component="page_20210604044331",
filepath="../storages/content/20210604044331-dau-truong-chan-ly-leo-top-la-de-voi-nhung-doi-hinh-tap-hop-nhung-wonder-woman-cuc-manh-o-mua-5.js"},

Đấu Trường Chân Lý: Leo top là dễ với những đội hình tập hợp những 'Wonder Woman' cực mạnh ở mùa 5
Nếu đã cảm thấy chán những công thức đội hình truyền thống, bạn hoàn toàn có thể trải nghiệm thử thách mới với những lối chơi tiêu chuẩn của riêng mình.
https://gamek.mediacdn.vn/133514250583805952/2021/6/4/-16227560516681426978234.jpg
Dau Truong Chan Ly, Dtcl, Doi Hinh Dtcl, Game, Tin Game, Tin Tuc Game, Tin Dtcl, Tft, Cam Nang Dtcl, 
games
04/06/2021
04:43 PM
/dau-truong-chan-ly-leo-top-la-de-voi-nhung-doi-hinh-tap-hop-nhung-wonder-woman-cuc-manh-o-mua-5
page_20210604044331
../storages/content/20210604044331-dau-truong-chan-ly-leo-top-la-de-voi-nhung-doi-hinh-tap-hop-nhung-wonder-woman-cuc-manh-o-mua-5.js




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
  "Đấu Trường Chân Lý: Leo top là dễ với những đội hình tập hợp những 'Wonder Woman' cực mạnh ở mùa 5";
const author = "LộcD";
const source = "Trí Thức Trẻ";
const date = "04/06/2021";
const time = "04:43 PM";
const description =
  "Nếu đã cảm thấy chán những công thức đội hình truyền thống, bạn hoàn toàn có thể trải nghiệm thử thách mới với những lối chơi tiêu chuẩn của riêng mình.";
const link =
  "dau-truong-chan-ly-leo-top-la-de-voi-nhung-doi-hinh-tap-hop-nhung-wonder-woman-cuc-manh-o-mua-5";
const tagparam = [
  "dau-truong-chan-ly",
  "dtcl",
  "doi-hinh-dtcl",
  "game",
  "tin-game",
  "tin-tuc-game",
  "tin-dtcl",
  "tft",
  "cam-nang-dtcl",
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

export default function page_20210604044331() {
  return (
    <>
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>
                    Với những sự điều chỉnh liên tục thông qua các bản vá nhỏ
                    hoặc những bản cập nhật chính thức, Đấu Trường Chân Lý mùa 5
                    cũng sản sinh ra rất nhiều meta mới, không chỉ mạnh mà còn
                    đảm bảo yếu tố “độc - dị”. Bên cạnh LeBlanc “thần xích” hồi
                    đầu mùa thì mới đây có thể kể đến như Hecarim 3 sao Nỏ Sét
                    Hắc Ám bất tử hay Warwick 3 Quyền Trượng cân mọi kèo đấu…
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/4/-16227560516681426978234.jpg"
                    alt="Dau Truong Chan Ly, Dtcl, Doi Hinh Dtcl, Game, Tin Game, Tin Tuc Game, Tin Dtcl, Tft, Cam Nang Dtcl, "
                    note=""
                  />
                  <p>
                    Nhưng nếu muốn đổi gió, không hứng thú với những kiểu cục
                    súc nữa thì người chơi có thể trải nghiệm đội hình gồm toàn
                    hội chân dài. Nhưng đừng nhìn thấy phái nữ mà lại tưởng
                    "liễu yếu đào tơ", khi Rell hay Leona là những cái tên lý
                    tưởng để tạo nên dàn chắn vô cùng chất lượng.
                  </p>
                  <p>
                    Ở giai đoạn đầu trận, cần phải có đầy đủ cả về mặt sát
                    thương lẫn phòng thủ. Một điểm cần lưu ý là ở giai đoạn này,
                    có tướng nữ nào thì cứ lấy hết để có thể thay qua lại khi
                    cần. Với mức giá 1 vàng, Kalista và Leona là 2 cái tên gần
                    như chắc chắn có thể lấy được, thậm chí là hoàn thành mốc 2
                    sao sớm. Sau đó, lấy thêm những cái tên như
                    Lissandra/Soraka/Syndra/LeBlanc để có sát thương đa mục tiêu
                    từ xa sẽ là lựa chọn tốt hơn hết thảy.
                  </p>
                  <p>
                    Thông thường, các game thủ rank cao sẽ không xác định đội
                    hình sớm, ít nhất là cho đến bãi Quái Đá nếu những quân cờ
                    ra thuộc nhiều Hệ/Tộc khác nhau. Một trong số những đội hình
                    nữ tướng khá mạnh ở hiện tại có thể kể đến là đội hình
                    Katarina Tiên Hắc Ám khi đã có đủ 2 cái tên để kích Ma Sứ là
                    Diana và Morgana. Sau đó, với đội hình này, game thủ có thể
                    thêm Lux (kích Bí Ẩn tăng khả năng phòng thủ) và một cái tên
                    khác (Syndra, Kayle nếu có) để kích Thiên Thần hoặc thậm chí
                    là Leona cũng được trong trường hợp muốn có sự chắc chắn
                    nhiều nhất có thể.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/-1622756052866658296722.jpg"
                    alt="Dau Truong Chan Ly, Dtcl, Doi Hinh Dtcl, Game, Tin Game, Tin Tuc Game, Tin Dtcl, Tft, Cam Nang Dtcl, "
                    note="Đội hình Sát Thủ - Tiên Hắc Ám"
                  />
                  <p>
                    Điểm yếu của kiểu đội hình này là cần phải có đồ chuẩn cho
                    Katarina cũng như các cái tên khác phải có sự cứng cáp đủ để
                    Ác Kiếm Noxus có thời gian “bay nhảy”. Tuy nhiên, đây là
                    kiểu đội hình khá mạnh, lại không phụ thuộc vào những cái
                    tên quá đắt tiền hay dễ bị tranh giành (trừ Kayle).
                  </p>
                  <p>
                    Một kiểu đội hình khác là Quân Đoàn - Thiên Thần với Riven
                    làm chủ đạo. Đây là một đội hình có đủ từ buff (Soraka,
                    Lux), khống chế cứng (Ashe, Riven, Rell, Sejuani) lại còn có
                    đủ sát thương diện rộng lẫn sát thương đơn mục tiêu. Chưa
                    kể, nếu chơi xoay quanh Riven thì không khó để lên 3 sao khi
                    vị tướng này chỉ có giá 3 vàng. Điểm yếu của đội hình này,
                    có chăng chỉ phụ thuộc vào việc Riven có thể lên 3 sao đúng
                    lúc quyết định hay không thôi vì nhìn chung, ở mốc 2 sao thì
                    vị tướng này cũng chưa đủ mạnh để gánh team.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/-16227560529241234775457.jpg"
                    alt="Dau Truong Chan Ly, Dtcl, Doi Hinh Dtcl, Game, Tin Game, Tin Tuc Game, Tin Dtcl, Tft, Cam Nang Dtcl, "
                    note="
                    Đội hình này thì phụ thuộc vào việc Riven có lên 3 sao hay
                    không"
                  />
                  <p>
                    Một team comp khác mà game thủ có thể tham khảo chính là đội
                    hình Tái Tạo - Tiên Hắc Ám xoay quanh Soraka đang được một
                    số game thủ ưa chuộng mỗi khi muốn “đổi gió” trong thời gian
                    gần đây. Tuy nhiên, điểm yếu của đội hình này chính là không
                    có một cái tên thực sự chắc chắn. Morgana và Riven làm dàn
                    chắn thì chỉ có thể đảm bảo top 4 chứ khó có thể leo cao.
                    Còn nếu phụ thuộc vào sức phòng thủ từ Bí Ấn có thể sẽ là
                    con dao 2 lưỡi nếu không sắp xếp vị trí tướng hợp lý.
                  </p>
                  <p>
                    Nhìn chung, những quân cờ nữ trong ĐTCL cũng đều khó có thể
                    so sánh về sự cứng cáp với các “đồng nghiệp” nam nên yêu cầu
                    khá nhiều về mặt trang bị, cấp độ và kỹ năng sắp xếp cờ của
                    người chơi. Dù vậy, đây đều sẽ là những cái tên chất lượng
                    nếu mục tiêu của người chơi chỉ là lọt top 4 hoặc muốn “đổi
                    gió” sau những ngày spam liên tục một vài bài đến phát chán.
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
