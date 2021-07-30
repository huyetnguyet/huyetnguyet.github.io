import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/*
<ContentItem
            title="Đấu Trường Chân Lý: Học hỏi những mẹo độc khi chơi Sett 'One Punch Man' từ kỳ thủ top 8 Thách Đấu"
            content="Những mẹo dưới đây sẽ giúp game thủ Đấu Trường Chân Lý leo
          rank hiệu quả hơn với việc chơi xoay quanh Sett."
            src="https://gamek.mediacdn.vn/133514250583805952/2021/6/2/sett-1622624730224552537391.jpg"
            alt="Đấu Trường Chân Lý"
            types="Games"
            time="02/06/2021 11:59 PM"
            link="/dau-truong-chan-ly-hoc-hoi-nhung-meo-doc-khi-choi-sett-one-punch-man-tu-ky-thu-top-8-thach-dau"
          />
*/
const category = "games";
const categoryLink = "/games";

const title =
  "Đấu Trường Chân Lý: Học hỏi những mẹo độc khi chơi Sett 'One Punch Man' từ kỳ thủ top 8 Thách Đấu";
const author = "A Đồi";
const source = "Trí Thức Trẻ";
const date = "02/06/2021";
const time = "11:59 PM";
const description =
  "Những mẹo dưới đây sẽ giúp game thủ Đấu Trường Chân Lý leo rank hiệu quả hơn với việc chơi xoay quanh Sett.";
const link =
  "dau-truong-chan-ly-hoc-hoi-nhung-meo-doc-khi-choi-sett-one-punch-man-tu-ky-thu-top-8-thach-dau";

const tags = [
  "đấu trường chân lý",
  "cẩm nang đấu trường chân lý",
  "riot games",
  "riot",
  "game",
  "tin game",
  "ashe",
  "zyra",
  "heimerdinger",
  "sett",
];

const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tags.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function page_202106021159() {
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
              <div className="author">{author}</div> - Theo {source} | {date} -
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
                    Với sự điều chỉnh về tỷ lệ roll tại bản 11.11,
                    <div className="highlight">Riot Games</div> đã mở ra cơ hội
                    thống trị meta cho rất nhiều đội hình reroll. Trong số đó
                    thì team Đấu Sĩ - Long Tộc với Sett chủ lực tỏ ra mạnh mẽ và
                    ổn định nhất với sự cân bằng giữa sát thương và chống chịu.
                    Thậm chí kỳ thủ DQA TFT còn sử dụng đội hình này để leo lên
                    tới top 8 Thách Đấu tại máy chủ Bắc Mỹ. Vậy bí quyết sử dụng
                    <div className="highlight">Sett</div> "One Punch Man" của
                    DQA TFT là gì? Hãy cùng tìm hiểu nhé.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/dqa-1622624247723759909904.png"
                    alt="Đấu Trường Chân Lý"
                    note="DQA TFT hiện đang ở vị trí top 8 Thách Đấu máy chủ Bắc Mỹ, anh cũng
từng lọt vào top 9 giải đấu CKTG Đấu Trường Chân Lý: Định Mệnh"
                  ></ContentImage>
                  <p>
                    Theo chia sẻ của DQA TFT, việc nâng cấp độ sớm là điều vô
                    cùng quan trọng khi chơi đội hình Đấu Sĩ - Long Tộc. Việc
                    này sẽ giúp bạn gia tăng tỷ lệ nhận được những unit quan
                    trọng như Sett, Ashe hay Zyra để sở hữu những quả trứng rồng
                    nhanh nhất có thể. Điều này thậm chí còn quan trọng hơn cả
                    việc giữ tiền và sở hữu những mốc lợi tức lớn.
                  </p>
                  <p>
                    Ví dụ như trước khi kết thúc round 1-3, bạn hãy mua kinh
                    nghiệm để ngay khi sang round 2-1 là game thủ đã ở cấp độ 4
                    rồi. Điều này sẽ giúp bạn có cơ hội để mua được Zyra và Ashe
                    từ rất sớm. Nếu không có được các unit Long Tộc thì bạn cũng
                    có thể sở hữu Nunu & Willump để kích hoạt hiệu ứng 4 Đấu Sĩ.
                    Bạn cũng nên làm điều tương tự trước khi vòng chọn chung thứ
                    hai diễn ra.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/4/22/-16190809019721455945527.jpg"
                    alt="Đấu Trường Chân Lý"
                    note="Việc kích hoạt mốc 3 Long Tộc sớm là điều rất quan trọng với đội
hình này"
                  ></ContentImage>
                  <p>
                    Hơn nữa, để gia tăng tối đa sát thương với Sett thì bạn phải
                    liên tục quan sát và thay đổi vị trí của unit này. Bạn cần
                    phải đặt Sett ở cùng phía với các chủ lực của đối thủ để có
                    thể gây sát thương một cách hiệu quả nhất. Lượng sát thương
                    lớn mà Sett sở hữu sẽ chẳng có ý nghĩa gì nếu bạn để quân cờ
                    này tấn công vào một unit như Rell mà không có đối thủ ở
                    ngay phía sau. Vì vậy việc thay đổi vị trí liên tục đối với
                    Sett là vô cùng quan trọng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/5/27/sett2-1622086806272620865326.png"
                    alt="Đấu Trường Chân Lý"
                    note="Vị trí đứng của Sett sẽ ảnh hưởng nhiều tới lượng sát thương mà unit
này gây ra"
                  ></ContentImage>
                  <p>
                    Vị trí đứng của Sett sẽ ảnh hưởng nhiều tới lượng sát thương
                    mà unit này gây ra Về cách xây dựng trang bị, chúng ta hẳn
                    đã quá quen thuộc với bộ đôi Vô Cực Kiếm và Huyết Kiếm rồi.
                    Tuy nhiên không phải trận đấu nào bạn cũng có đủ item để
                    ghép tất cả những món đồ mạnh nhất như vậy cho Sett. Điều
                    game thủ <div className="highlight">Đấu Trường Chân Lý</div>
                    cần làm đó là thay đổi cách ghép trang bị để phù hợp với thế
                    trận thực tế của ván đấu.
                  </p>
                  <p>
                    Theo DQA TFT chia sẻ, Diệt Khổng Lồ là trang bị cực kỳ tốt
                    nếu bạn phải đối đầu với những người chơi Đấu Sĩ khác hoặc
                    các đội hình Thây Ma. Trong khi đó, Nắm Đấm Phục Hận là item
                    có thể thay thế cho Huyết Kiếm nếu bạn không sở hữu quá
                    nhiều Kiếm B.F. Với kỹ năng gây sát thương diện rộng của
                    mình, Sett có thể giữ buff của Nắm Đấm Phục Hận vô cùng tốt.
                    Những item như Kiếm Tử Thần hay Quyền Năng Khổng Lồ cũng
                    giúp Sett gây damage vô cùng hiệu quả.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/2/sett-1622624730224552537391.jpg"
                    alt="Đấu Trường Chân Lý"
                    note="Sett có thể dùng tốt rất nhiều trang bị thay vì chỉ Vô Cực Kiếm và Huyết Kiếm"
                  ></ContentImage>
                  <p>
                    Lời khuyên cuối cùng đối với game thủ đó là Sett không phải
                    là điều kiện thắng duy nhất của đội hình này. Về cơ bản thì
                    Sett sẽ đóng vai trò chủ lực ở giữa trận và giúp game thủ
                    giữ máu, vàng nhiều nhất có thể. Từ đó bạn có thể lên cấp
                    một cách nhanh chóng và có đủ tiền mua các unit 5 vàng như
                    Volibear hay Heimerdinger.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/5/3/-16200341467352037090774.jpg"
                    alt="Đấu Trường Chân Lý"
                    note="Heimerdinger là chủ lực phép thuật cực mạnh ở cuối trận"
                  ></ContentImage>
                  <p>
                    Lời khuyên cuối cùng đối với game thủ đó là Sett không phải
                    là điều kiện thắng duy nhất của đội hình này. Về cơ bản thì
                    Sett sẽ đóng vai trò chủ lực ở giữa trận và giúp game thủ
                    giữ máu, vàng nhiều nhất có thể. Từ đó bạn có thể lên cấp
                    một cách nhanh chóng và có đủ tiền mua các unit 5 vàng như
                    Volibear hay Heimerdinger. Nếu bạn thấy có quá nhiều người
                    chơi hướng tới việc roll Sett 3 sao thì hãy học cách hài
                    lòng với quân cờ 2 sao mà mình hiện có. Hãy giữ vàng và lên
                    cấp nhanh nhất có thể và sử dụng những unit mạnh kể trên để
                    tìm cách giành chiến thắng. Đây là cách giành chiến thắng
                    hiệu quả hơn hẳn so với việc cứ roll ở cấp độ 6 mà chẳng thể
                    nâng được Sett lên 3 sao.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-1-1622624802801348238734.png"
                    alt="Đấu Trường Chân Lý"
                    note="Đội hình mà bạn nên hướng tới khi có thể lên được cấp độ 9"
                  ></ContentImage>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-1-16226248040361940894271.png"
                    alt="Đấu Trường Chân Lý"
                    note="Nếu bạn không thể sở hữu các unit Thây Ma mạnh thì có thể sử dụng Tiên Tộc để thay thế"
                  ></ContentImage>
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
