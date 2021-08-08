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
"timestamp": '08/08/2021 11:02 AM',
"title": 'Những nghịch lý ngược đời, bị hiểu sai một cách đầy ngang trái về game trong Avengers và một loạt bộ phim khác (p2)',
"description": 'Game không phải như trong phim, cứ bấm loạn nút lên là thắng đâu nhé anh em.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/8/screenshot6-16284162234731391199138.png',
"alt": 'GAME,GAME THỦ,TIN TỨC GAME,',
"category": 'games',
"date": '08/08/2021',
"time": '11:02 AM',
"link": '/nhung-nghich-ly-nguoc-doi-bi-hieu-sai-mot-cach-day-ngang-trai-ve-game-trong-avengers-va-mot-loat-bo-phim-khac-p2',
"zcomponent": 'page_20210808110243',
"filepath": './20210808110243-nhung-nghich-ly-nguoc-doi-bi-hieu-sai-mot-cach-day-ngang-trai-ve-game-trong-avengers-va-mot-loat-bo-phim-khac-p2.js'
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
  "Những nghịch lý ngược đời, bị hiểu sai một cách đầy ngang trái về game trong Avengers và một loạt bộ phim khác (p2)";
const author = "Illusionary";
const source = "Trí Thức Trẻ";
const timestamp = "08/08/2021 11:02 AM";
const description =
  "Game không phải như trong phim, cứ bấm loạn nút lên là thắng đâu nhé anh em.";
const link =
  "nhung-nghich-ly-nguoc-doi-bi-hieu-sai-mot-cach-day-ngang-trai-ve-game-trong-avengers-va-mot-loat-bo-phim-khac-p2";
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

export default function page_20210808110243() {
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
                    <p>Tiếp nối series của kỳ trước nhé.</p>
                    <h5>Hầu hết mọi bộ phim có thực tế ảo</h5>
                    <p>
                      Thực tế ảo đã là giấc mơ của những người tiên phong về trò
                      chơi điện tử kể từ khi công nghệ này ra mắt. Mặc dù các
                      sản phẩm thực tế ảo thân thiện với người tiêu dùng mới chỉ
                      xuất hiện gần đây, nhưng khả năng của phương tiện này đã
                      cung cấp các âm mưu và sự xoay chuyển cho nhiều bộ phim
                      trong nhiều năm qua. Không khó để hiểu tại sao. Thực tế ảo
                      cho phép các nhà làm phim kể những câu chuyện tương lai và
                      giới thiệu các yếu tố kỳ lạ. Tuy nhiên, trước đây các nhà
                      phát triển phần cứng phải vật lộn để tìm ra thực tế ảo
                      trông như thế nào trong đời thực, các nhà thiết kế phim
                      trường đã phải phỏng đoán rất nhiều. Hầu hết trong số này
                      hạ cánh khá xa điểm đánh dấu.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/8/screenshot6-16284162234731391199138.png"
                      alt="1, GAME,GAME THỦ,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Một cảnh trong Hackers bắt đầu mạnh mẽ, với cảnh quay một
                      nhân vật đeo tai nghe trông rất giống những gì Oculus Rift
                      làm ngày nay. Sau đó, cảnh quay phóng to để lộ ra một loại
                      máy chạy bộ thực tế ảo chưa từng xuất hiện và người chơi
                      bình thường sẽ ngần ngại lắp đặt trong nhà của họ. Tương
                      tự như vậy, Lawnmower Man thể hiện một nhân vật với một
                      chiếc tai nghe thực tế, nếu cồng kềnh. Tuy nhiên, anh ta
                      đang đeo găng tay và ngồi trên một chiếc ghế trông không
                      thoải mái mà một lần nữa không phải là một phần trong
                      thiết lập của bất kỳ <strong>game</strong> thủ thực sự
                      nào.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Mọi người đều sở hữu một chiếc găng tay quyền lực</h5>
                    <p>
                      Trong một phút, Power Glove đã trở thành điểm tham chiếu
                      trò chơi điện tử dễ dàng cho các bộ phim. Đó là giấc mơ
                      của một nhà làm phim vào thời điểm đó; một thiết bị công
                      nghệ cao tích hợp các yếu tố thực tế ảo trong một sản phẩm
                      mà người tiêu dùng có thể mua được. Lần xuất hiện đáng nhớ
                      nhất của Power Glove là trong The Wizard năm 1989, nơi một
                      nhân vật nổi tiếng nói với Fred Savage: "Tôi yêu Power
                      Glove. Nó thật tệ". Power Glove thậm chí còn xuất hiện
                      trong bộ phim kinh dị Freddy's Dead: The Final Nightmare,
                      nơi Freddy Kruger có phiên bản điều khiển sửa đổi của
                      riêng mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/8/screenshot7-1628416257624399551979.png"
                      alt="2, GAME,GAME THỦ,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Với những lần xuất hiện đáng chú ý như vậy trong các bộ
                      phim, bạn có thể nghĩ rằng đã có một Power Glove bên cạnh
                      mọi Hệ thống Giải trí Nintendo trên thế giới. Tất nhiên,
                      điều này khác xa sự thật. Power Glove là một thất bại nổi
                      tiếng, và mặc dù nó đã bán được hơn một triệu chiếc trong
                      năm nó có sẵn, NES ban đầu đã bán được hơn 60 triệu chiếc.
                      Ngày nay, bạn có nhiều khả năng tìm thấy một chiếc Power
                      Glove được tùy chỉnh và thay thế hơn là kết nối với bảng
                      điều khiển Nintendo đang hoạt động.
                    </p>
                    <h5>Spam các nút điều khiển là bí quyết chiến thắng</h5>
                    <p>
                      Khi các <strong>game</strong> thủ lớn lên cùng với ngành
                      công nghiệp trò chơi điện tử, trò chơi điện tử không còn
                      được coi là đồ chơi và được chấp nhận nhiều hơn như một
                      phần của thế giới người lớn bình thường. Mô tả của họ
                      trong phim cũng bắt đầu phát triển và vào đầu những năm
                      2000, khán giả bắt đầu thấy nhiều nhân vật ở độ tuổi 20 và
                      30 chơi trò chơi điện tử hơn, chẳng hạn như trong Shaun of
                      the Dead. Trong khi Simon Pegg và Nick Frost làm khá tốt
                      việc làm cho nó trông giống như họ đang thực sự chơi
                      TimeSplitters 2, thì Seth Rogen và Paul Rudd lại làm kém
                      hơn một chút trong The 40-Year-Old Virgin. Cả hai được cho
                      thấy đang chơi trò chơi trông giống như Mortal Kombat bằng
                      cách trộn nút theo cách không có ý nghĩa gì đối với bất kỳ
                      ai đã từng cầm bộ điều khiển.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/8/screenshot8-16284163592561039865993.png"
                      alt="3, GAME,GAME THỦ,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Công bằng mà nói, bạn có thể đạt được một số tiến bộ khi
                      chơi các trò chơi này bằng cách nhấn các nút một cách ngẫu
                      nhiên, nhưng bất kỳ ai đã dành thời gian cho các trò chơi
                      này đều biết có một cách tốt hơn. Nó làm cho một cảnh được
                      thiết kế để cho thấy Seth Rogen và Paul Rudd như những
                      người bình thường cảm thấy khó xử, và đó là trước khi bạn
                      đưa ra lời nói đùa gây tranh cãi mà Rogen giờ dường như
                      hối hận.
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
