import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 08/06/2021 02:04 PM",
"title": Đấu Trường Chân Lý: Những đội hình bá đạo đầu mùa nhưng sử dụng bây giờ là 'tự hủy cực mạnh'",
"description": Đây là những đội hình hồi đầu mùa 5 Đấu Trường Chân Lý đã tỏ ra vô cùng mạnh nhưng sử dụng ở hiện tại sẽ chỉ tụt rank không phanh.",
"src": https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/-1623132507124323700766.jpg",
"alt": Dau Truong Chan Ly, Dtcl, Game, Tin Tuc Game, Tin Dtcl, Tin Tft, Tin Game, Riot Games, Riot, ",
"category": games",
"date": 08/06/2021",
"time": 02:04 PM",
"link": "/dau-truong-chan-ly-nhung-doi-hinh-ba-dao-dau-mua-nhung-su-dung-bay-gio-la-tu-huy-cuc-manh",
"zcomponent": page_20210608140412",
"filepath": ./20210608140412-dau-truong-chan-ly-nhung-doi-hinh-ba-dao-dau-mua-nhung-su-dung-bay-gio-la-tu-huy-cuc-manh.js"
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
  "Đấu Trường Chân Lý: Những đội hình bá đạo đầu mùa nhưng sử dụng bây giờ là 'tự hủy cực mạnh'";
const author = "LộcD";
const source = "Pháp luật và bạn đọc";
const timestamp = "08/06/2021 02:04 PM";
const description =
  "Đây là những đội hình hồi đầu mùa 5 Đấu Trường Chân Lý đã tỏ ra vô cùng mạnh nhưng sử dụng ở hiện tại sẽ chỉ tụt rank không phanh.";
const link =
  "dau-truong-chan-ly-nhung-doi-hinh-ba-dao-dau-mua-nhung-su-dung-bay-gio-la-tu-huy-cuc-manh";
const tagparam = [
  "dau-truong-chan-ly",
  "dtcl",
  "game",
  "tin-tuc-game",
  "tin-dtcl",
  "tin-tft",
  "tin-game",
  "riot-games",
  "riot",
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

export default function page_20210608140412() {
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
                <div className="contentBody">
                  <h4>Đội hình Ma Sứ - Cung Thủ</h4>
                  <p>
                    Ở hiện tại, những quân cờ của đội hình Ma Sứ như Lee Sin hay
                    Yasuo đã được buff ít nhiều trong khi Aphelios thì vẫn luôn
                    mạnh còn kỹ năng khống chế diện rộng của Diana là yếu tố
                    không thể thiếu của đội hình Sát Thủ nhưng những quân cờ
                    này, thực tế, lại chỉ phát huy tối đa hiệu quả khi ghép
                    chúng vào những đội hình khác, còn tựu chung lại trong đội
                    hình Ma Sứ - Cung Thủ thì lại yếu đến thảm thương.
                  </p>
                  <p>
                    Lý do lớn nhất chính là, bất kỳ cái tên nào trong đội hình
                    này cũng cần trang bị. Nếu Vladimir cần đồ phép như Quyền
                    Trượng Thiên Thần hay Quyền Trượng Hắc Ám để tối đa hóa sức
                    mạnh thì Morgana, Sejuani hay Lee Sin lại cần một chút sự
                    cứng cáp để có thể đứng ở hàng đầu. Diana cũng cần ít nhất
                    là Tim Băng để tự tin dive vào hàng sau đối phương trong khi
                    trang bị của Yasuo và Aphelios lại “dẫm chân” nhau khá
                    nhiều.
                  </p>
                  <p>
                    Chưa kể, nếu ghép với Cung Thủ (Ashe, Varus) thì đội hình
                    lại khá mỏng manh và yếu tố trang bị đã nói ở trên lại càng
                    nhức nhối khi cả Varus lẫn Ashe đều rất cần đồ. Chưa kể, để
                    đội hình này phát huy tối đa sức mạnh, thì ở giai đoạn cuối{" "}
                    <strong>game</strong>, cần phải có 3 cái tên 4 vàng
                    (Aphelios, Diana, Taric) và 2 cái tên 5 vàng (Darius,
                    Kindred). Với đòi hỏi tài chính như vậy, chẳng trách chỉ khi
                    thật xanh và “không thể không chơi”, còn lại, hầu như game
                    thủ đều bỏ qua đội hình này. Tỷ lệ lọt top 4 hiện tại của Ma
                    Sứ - Cung Thủ chỉ có 44% trong khi tỷ lệ top 1 chỉ khoảng
                    9%.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/-16231325045072147428419.jpg"
                    alt="Dau Truong Chan Ly, Dtcl, Game, Tin Tuc Game, Tin Dtcl, Tin Tft, Tin Game, Riot Games, Riot, "
                    note="Đội hình với Ma Sứ chủ lực giờ đang khá yếu so với những meta thịnh hành khác"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/-1623132508000706070334.jpg"
                    alt="Dau Truong Chan Ly, Dtcl, Game, Tin Tuc Game, Tin Dtcl, Tin Tft, Tin Game, Riot Games, Riot, "
                    note=""
                  />
                  <h4>Đội hình Đấu Sĩ - Cung Thủ</h4>
                  <p>
                    Một đội hình từng làm mưa làm gió theo kiểu bài độc dị nữa
                    chính là lối chơi xoay quanh Đấu Sĩ mà khả dĩ nhất là Đấu Sĩ
                    - Cung Thủ. Điểm mạnh nhất của đội hình này chính là dàn bao
                    “trâu bò” với cơ chế cộng thêm 1000 máu cho mỗi Đấu Sĩ nếu
                    kích từ 4 Đấu Sĩ trở lên. Chưa kể, Đấu Sĩ còn có đầy đủ các
                    kiểu chiêu thức từ sốc sát thương, trừ giáp, hồi máu… Nói
                    chung, trừ Nunu và Gragas, Volibear thì Sett và Warwick là 2
                    cái tên đã từng được chọn làm chủ lực cực mạnh hồi đầu mùa
                    kéo dài đến tận bản cập nhật 11.10.
                  </p>
                  <p>
                    Nhưng ở thời điểm hiện tại, quá nhiều meta khắc chế được sự
                    “trâu bò” của những vị tướng này. Nếu Warwick có khả năng
                    lao vào đối phương thì đã có những cái tên như Syndra để
                    khắc chế, dàn bao cứng cáp của Thiết Giáp là đủ để ngăn chặn
                    Nunu và Sett. Như vậy, khi dàn chắn không tỏ ra hiệu quả,
                    thì những cái tên mỏng manh đằng sau như Ashe hay Varus khó
                    lòng xả sát thương đủ nhiều để kết thúc đối phương.
                  </p>
                  <p>
                    Chưa kể, để kích hoạt mốc cộng thêm 1000 máu thì cần 4 Đấu
                    Sĩ nhưng chắc chắn 1 điều, Gragas hay Warwick là không đủ để
                    kéo tới cuối <strong>game</strong>, dù có thể 2 vị tướng này
                    đã lên được mốc 3 sao. Lý do đơn giản: về cuối game, các
                    tướng chủ lực thường đã được ghép đồ và game thủ đã phải
                    hoàn thiện đội hình, và như vậy, sẽ có ít đất diễn cho những
                    vị tướng giá rẻ như Warwick hay Gragas. Tỷ lệ top 1 của đội
                    hình 4 Đấu Sĩ hiện tại cũng chỉ 9% còn tỷ lệ vào top 4 chỉ
                    khoảng 38%.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/-162313250707611146066.jpg"
                    alt="Dau Truong Chan Ly, Dtcl, Game, Tin Tuc Game, Tin Dtcl, Tin Tft, Tin Game, Riot Games, Riot, "
                    note="Meta độc - dị một thời giờ chỉ còn là dĩ vãng"
                  />
                  <h4>Đội hình Long Tộc</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/-1623132507124323700766.jpg"
                    alt="Dau Truong Chan Ly, Dtcl, Game, Tin Tuc Game, Tin Dtcl, Tin Tft, Tin Game, Riot Games, Riot, "
                    note=""
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/-1623132507172885974360.jpg"
                    alt="Dau Truong Chan Ly, Dtcl, Game, Tin Tuc Game, Tin Dtcl, Tin Tft, Tin Game, Riot Games, Riot, "
                    note=""
                  />
                  <p>
                    Long Tộc ở mùa 5 từng được xem là phiên bản nâng cấp hơn so
                    với Thần Tài mùa 4 và 4.5 khi không cần phải tích chuỗi để
                    “nổ hũ” mà sau mỗi vòng đấu, người chơi đều sẽ nhận được
                    trứng rồng chứa tướng và vật phẩm. Tích càng lâu thì giá trị
                    vật phẩm càng cao và do đó, người chơi Long Tộc cũng dễ nâng
                    cấp tướng hơn bình thường. Chưa kể, Rồng Con do Heimerdinger
                    tạo ra miễn nhiễm mọi hiệu ứng khống chế và có sát thương
                    diện rộng toàn sàn đấu. Đây cũng là lý do mà lối chơi xoay
                    quanh Long Tộc từng rất được yêu thích.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/-1623132507496740628263.jpg"
                    alt="Dau Truong Chan Ly, Dtcl, Game, Tin Tuc Game, Tin Dtcl, Tin Tft, Tin Game, Riot Games, Riot, "
                    note="Long Tộc chỉ có tác dụng là cung cấp Trứng Rồng"
                  />
                  <p>
                    Tuy nhiên, ở thời điểm hiện tại, Long Tộc lại bị xem là đội
                    hình vô cùng kém hiệu quả. Trong khi những đội hình khác khi
                    kích hệ đều cung cấp chỉ số nào đó về mặt tấn công hoặc
                    phòng thủ thì những gì Long Tộc mang lại chỉ là trứng rồng
                    và… hết. Chưa kể, trừ Udyr khá yếu thì Sett sẽ tỏ ra hiệu
                    quả hơn nếu ghép với Đấu Sĩ trong khi Ashe thì Tiên Tộc -
                    Cung Thủ là đủ để vị tướng này tỏa sáng. Zyra cũng mạnh hơn
                    khi sử dụng trong đội hình Ma Pháp Sư còn Heimerdinger mãi ở
                    cấp 6 7 trở lên mới có cơ hội xuất hiện khiến{" "}
                    <strong>game</strong> thủ mất đi yếu tố quan trọng nhất để
                    hoàn thiện đội hình Long Tộc.
                  </p>
                  <p>
                    Đội hình Long Tộc hiện tại đã tuột xuống tier C với tỷ lệ
                    xuất hiện chỉ ở mức 2,2% trong rank từ Kim Cương trở lên với
                    tỷ lệ vào top 4 chỉ 35%.
                  </p>
                  <h4>Đội hình Ác Quỷ</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/-16231325072231597368588.jpg"
                    alt="Dau Truong Chan Ly, Dtcl, Game, Tin Tuc Game, Tin Dtcl, Tin Tft, Tin Game, Riot Games, Riot, "
                    note="Teemo vừa là điểm mạnh vừa là điểm yếu của người chơi đội hình Ác Quỷ"
                  />
                  <p>
                    Một trong những đội hình từng làm mưa làm gió khi vừa ra mắt
                    đã bị nerf cực mạnh chính là Ác Quỷ. Không cần ở mức rank
                    cao, ngay cả ở các bậc rank thấp, nếu bất kỳ người chơi nào
                    có ý định xây dựng đội hình Ác Quỷ thì gần như họ chắc chắn
                    sẽ out top, kể cả khi họ có được Teemo ở giai đoạn cuối{" "}
                    <strong>game</strong>.
                  </p>
                  <p>
                    Lý do đầu tiên, Ác Quỷ bây giờ không còn là đội hình def
                    khỏe khi cả Ziggs, Kled hay Lulu đều đã bị nerf rất nhiều
                    dẫn đến việc các quân cờ này cực kỳ dễ bị hạ gục. Thậm chí,
                    theo một số <strong>game</strong> thủ, Ác Quỷ không def máu
                    cho chủ sở hữu mà thực chất là def máu cho đối phương khi có
                    bị các minions của Ác Quỷ tiêu diệt thì lượng máu bị trừ chỉ
                    khoảng 1 2 giọt.
                  </p>
                  <p>
                    Lý do tiếp theo, Ác Quỷ quá phụ thuộc vào sức mạnh của Teemo
                    và những quân cờ xung quanh. Nhưng như vậy dẫn đến một điều
                    là, sẽ thiếu trang bị cũng như chơi Teemo - quân cờ mua bằng
                    máu, sẽ là vô cùng rủi ro. Nếu ở giai đoạn cuối{" "}
                    <strong>game</strong>, người chơi muốn nâng lên Teemo ít
                    nhất là 2 sao thì sẽ cần đến những 18 máu - con số vô cùng
                    lớn và có thể quyết định kết cục trận đấu.
                  </p>
                  <p>
                    Tựu chung, đây là những đội hình đã từng rất mạnh nhưng sau
                    những bản nerf liên tục của <strong>Riot</strong>, chúng dần
                    mất đi vị thế của mình. Và ở trong những bản cập nhật sắp
                    tới, nếu Riot không có bất kỳ động thái nào, rất có thể
                    những meta này sẽ dần dần bị xóa sổ vì quá yếu.
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
