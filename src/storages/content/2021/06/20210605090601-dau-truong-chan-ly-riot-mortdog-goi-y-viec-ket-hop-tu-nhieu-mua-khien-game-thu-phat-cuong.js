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

 <ContentItem title="Đấu Trường Chân Lý: Riot Mortdog gợi ý việc kết hợp từ nhiều mùa khiến game thủ 'phát cuồng'"\description="Sẽ khó có thể tượng tượng những quân cờ vốn đã “bá đạo” ở mùa 5 sẽ như thế nào nếu được mang những ưu điểm từ các Tộc/Hệ của chúng ở các mùa trước." 
src="https://gamek.mediacdn.vn/133514250583805952/2021/6/5/-1622870886726486206593.jpg" 
alt="Dau Truong Chan Ly, Dtcl, Riot Games, Tft, Riot, Tin Game, Tin Dtcl, " 
category="games" 
time="05/06/2021 09:06 AM" 
link="/dau-truong-chan-ly-riot-mortdog-goi-y-viec-ket-hop-tu-nhieu-mua-khien-game-thu-phat-cuong"/>

{title:"Đấu Trường Chân Lý: Riot Mortdog gợi ý việc kết hợp từ nhiều mùa khiến game thủ 'phát cuồng'",\description:"Sẽ khó có thể tượng tượng những quân cờ vốn đã “bá đạo” ở mùa 5 sẽ như thế nào nếu được mang những ưu điểm từ các Tộc/Hệ của chúng ở các mùa trước." ,
src:"https://gamek.mediacdn.vn/133514250583805952/2021/6/5/-1622870886726486206593.jpg" ,
alt:"Dau Truong Chan Ly, Dtcl, Riot Games, Tft, Riot, Tin Game, Tin Dtcl, " ,
category:"games" ,
time:"05/06/2021 09:06 AM" ,
link:"/dau-truong-chan-ly-riot-mortdog-goi-y-viec-ket-hop-tu-nhieu-mua-khien-game-thu-phat-cuong",component:"page_20210605090601",
filepath:"../storages/content/20210605090601-dau-truong-chan-ly-riot-mortdog-goi-y-viec-ket-hop-tu-nhieu-mua-khien-game-thu-phat-cuong.js"},

Đấu Trường Chân Lý: Riot Mortdog gợi ý việc kết hợp từ nhiều mùa khiến game thủ 'phát cuồng'
Sẽ khó có thể tượng tượng những quân cờ vốn đã “bá đạo” ở mùa 5 sẽ như thế nào nếu được mang những ưu điểm từ các Tộc/Hệ của chúng ở các mùa trước.
https://gamek.mediacdn.vn/133514250583805952/2021/6/5/-1622870886726486206593.jpg
Dau Truong Chan Ly, Dtcl, Riot Games, Tft, Riot, Tin Game, Tin Dtcl, 
games
05/06/2021
09:06 AM
/dau-truong-chan-ly-riot-mortdog-goi-y-viec-ket-hop-tu-nhieu-mua-khien-game-thu-phat-cuong
page_20210605090601
../storages/content/20210605090601-dau-truong-chan-ly-riot-mortdog-goi-y-viec-ket-hop-tu-nhieu-mua-khien-game-thu-phat-cuong.js




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
  "Đấu Trường Chân Lý: Riot Mortdog gợi ý việc kết hợp từ nhiều mùa khiến game thủ 'phát cuồng'";
const author = "LộcD";
const source = "Pháp luật và bạn đọc";
const date = "05/06/2021";
const time = "09:06 AM";
const description =
  "Sẽ khó có thể tượng tượng những quân cờ vốn đã “bá đạo” ở mùa 5 sẽ như thế nào nếu được mang những ưu điểm từ các Tộc/Hệ của chúng ở các mùa trước.";
const link =
  "dau-truong-chan-ly-riot-mortdog-goi-y-viec-ket-hop-tu-nhieu-mua-khien-game-thu-phat-cuong";
const tagparam = [
  "dau-truong-chan-ly",
  "dtcl",
  "riot-games",
  "tft",
  "riot",
  "tin-game",
  "tin-dtcl",
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

export default function page_20210605090601() {
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
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
                      Tiến hành những bản chỉnh sửa, những cải tiến… để tựa game
                      ngày càng tốt lên chính là nhiệm vụ của đội ngũ kỹ sư
                      Riot, đặc biệt là với một tựa game luôn tồn tại nhiều biến
                      số như Đấu Trường Chân Lý.
                    </p>
                    <p>
                      Trải qua 5 mùa, tựa game ngày càng thu hút sự chú ý của
                      đông đảo người chơi hơn và thậm chí, đôi khi còn thu hút
                      hơn Liên Minh Huyền Thoại ở một số đặc điểm, nhất là những
                      game thủ chưa từng tiếp xúc LMHT cũng có thể chơi ĐTCL dễ
                      dàng. Mỗi mùa ĐTCL đều mang những chủ đề khác nhau và mới
                      đây, Riot Mortdog - kỹ sư trưởng dự án ĐTCL của Riot đã
                      “nhá hàng” một ý tưởng vô cùng táo bạo: những vị tướng của
                      mùa 5 có thể mang những đặc điểm từ tộc hệ của chúng ở các
                      mùa trước.
                    </p>
                    <RelationNewsInPage />
                    <p>
                      Cụ thể, Riot đăng hình của 4 vị tướng là Nocturne, Riven,
                      Volibear và Katarina với 4 Tộc/Hệ của chúng ở các mùa
                      trước là Kiếm Khách (Nocturne), U Hồn (Riven), Điện
                      (Volibear) và Thần Tài (Katarina).
                    </p>
                    <p>
                      <ContentImage
                        src="https://gamek.mediacdn.vn/133514250583805952/2021/6/5/-1622870886726486206593.jpg"
                        alt="Dau Truong Chan Ly, Dtcl, Riot Games, Tft, Riot, Tin Game, Tin Dtcl, "
                        note="
                      Ý tưởng của Riot Mortdog nhận về rất nhiều tương tác"
                      />
                    </p>
                    <p>
                      Nếu Nocturne bổ sung thêm Kiếm Khách, đây chính là phiên
                      bản nâng cấp hoàn hảo nhất của Blender Nocturne trứ danh
                      năm nào khi vị tướng này sẽ vừa có sát thương mà còn có
                      thể kích hoạt khả năng hồi phục cực nhanh, kết hợp với
                      Cuồng Đao thì sẽ gần như bất tử. Cùng tộc hệ Tà Thần với
                      Nocturne chính là Volibear. Vị tướng vốn đã vô cùng cứng
                      cáp, có khống chế cứng ở mùa 5 lại tăng thêm khả năng sát
                      thương diện rộng từ hệ Điện thì dĩ nhiên sẽ là quân cờ bị
                      tranh giành số 1.
                    </p>
                    <p>
                      <ContentImage
                        src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/-1622870888340639607816.jpg"
                        alt="Dau Truong Chan Ly, Dtcl, Riot Games, Tft, Riot, Tin Game, Tin Dtcl, "
                        note="
                      Nocturne mùa 5 có thêm Kiếm Khách sẽ là bản nâng cấp cực
                      mạnh của Blender Nocturne"
                      />
                    </p>
                    <p>
                      Riven U Hồn thì không cần phải bàn nữa khi mùa 4 chính là
                      thời điểm vị tướng này tỏa sáng nhất cho đến khi bị Riot
                      xóa sổ ở mùa 4.5. Cộng Sát Thương Kỹ Năng từ U Hồn, Tốc Độ
                      Đánh từ Quân Đoàn và khả năng Hồi Phục với Thần Sứ, Riven
                      thực sự sẽ là một lựa chọn rất mạnh.
                    </p>
                    <p>
                      <ContentImage
                        src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/-1622870888405278762933.jpg"
                        alt="Dau Truong Chan Ly, Dtcl, Riot Games, Tft, Riot, Tin Game, Tin Dtcl, "
                        note="Có lẽ khó ai quên được Riven U Hồn gánh team ở mùa 4"
                      />
                    </p>
                    <p>
                      Ít có tác dụng nhất có lẽ là ghép Thần Tài vào Katarina
                      khi cơ chế “nổ hũ” bây giờ đã được nâng cấp hơn với Long
                      Tộc. Tuy nhiên, nếu vị tướng đang khá mạnh ở meta hiện tại
                      này được kết hợp cùng những “đồng tộc hệ” của mình trước
                      đây thì không thể tưởng tượng nổi khi hũ nổ sẽ mang lại
                      nhiều lợi tức đến mức nào.
                    </p>
                    <p>
                      Dĩ nhiên, đây chỉ là lý thuyết và ý tưởng của riêng Riot
                      Mortdog vì có một thực tế rằng, ĐTCL mùa 5 vẫn còn tồn tại
                      nhiều meta bá đạo hơn bình thường và việc ghép thêm các
                      tộc hệ từ mùa trước sẽ chỉ khiến Riot thêm đau đầu mà
                      thôi.
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
