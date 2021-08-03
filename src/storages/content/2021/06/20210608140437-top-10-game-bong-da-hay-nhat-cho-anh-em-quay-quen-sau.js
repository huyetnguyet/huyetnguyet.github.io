import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature, RelationNews } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 08/06/2021 02:04 PM",
"title": Top 10 game bóng đá hay nhất cho anh em 'quẩy' quên sầu",
"description": Hòa cùng không khí bóng đá ngập tràn, mời anh em thưởng thức những tựa game đỉnh nhất trong làng túc cầu.",
"src": https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-16231625058421802311440.png",
"alt": Game Bong Da, Game Dinh, Game Hay, Tin Tuc Game, Cong Dong Mang, ",
"category": games",
"date": 08/06/2021",
"time": 02:04 PM",
"link": "/top-10-game-bong-da-hay-nhat-cho-anh-em-quay-quen-sau",
"zcomponent": page_20210608140437",
"filepath": ./20210608140437-top-10-game-bong-da-hay-nhat-cho-anh-em-quay-quen-sau.js"
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
const title = "Top 10 game bóng đá hay nhất cho anh em 'quẩy' quên sầu";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "08/06/2021 02:04 PM";
const description =
  "Hòa cùng không khí bóng đá ngập tràn, mời anh em thưởng thức những tựa game đỉnh nhất trong làng túc cầu.";
const link = "top-10-game-bong-da-hay-nhat-cho-anh-em-quay-quen-sau";
const tagparam = [
  "game-bong-da",
  "game-dinh",
  "game-hay",
  "tin-tuc-game",
  "cong-dong-mang",
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

export default function page_20210608140437() {
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
                      Bóng đá đối với người Việt Nam không chỉ là sở thích
                      chung, hơn thế nữa nó là cầu nối để gắn kết mọi miền và là
                      cả một niềm tự hào dân tộc. Nếu bạn là một game thủ và mê
                      bóng đá thì mời anh em thưởng thức 10 tựa game bóng đá hay
                      nhất trên PC nhỉ. Biết đâu bạn lại tìm được một tựa game
                      chân ái đáng để gắn bó lâu dài.
                    </p>
                    <h4>FIFA Online 4 – Game bóng đá miễn phí</h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-16231625058421802311440.png"
                      alt="Game Bong Da, Game Dinh, Game Hay, Tin Tuc Game, Cong Dong Mang, "
                      note=""
                    />
                    <p>
                      FIFA Online 4 thì có lẽ không còn xa lạ gì với cộng đồng
                      game thủ Việt Nam nữa rồi. Đây là một tựa game bóng đá do
                      Spearhead cùng Electronic Arts phát triển và được phát
                      hành tại Việt Nam thông qua Garena. Tựa game không chỉ đòi
                      hỏi kỹ năng cá nhân mà còn yêu cần người chơi phải tư duy
                      chiến lược tốt để phát huy hết sức mạnh của đội hình mình
                      có trong tay. Đây là một tựa game thể thao hay, lại miễn
                      phí nên nếu ngay lúc này bạn chưa chơi mà muốn thử thì có
                      thể chiến luôn khỏi cần đắn đo. Ngoài ra thì game còn có
                      một nền đồ họa đẹp mắt, tối ưu phần cứng tốt và tùy chỉnh
                      linh động, muốn nhẹ có nhẹ, muốn đẹp cũng có đẹp luôn. Đặc
                      biệt, còn một điểm thú vị nữa là game này cho chơi tuyển
                      Việt Nam luôn nhé.
                    </p>
                    <h4>FIFA 21 – Trùm bóng đá PC</h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-16231625269672753399.png"
                      alt="Game Bong Da, Game Dinh, Game Hay, Tin Tuc Game, Cong Dong Mang, "
                      note=""
                    />
                    <p>
                      Khi nhắc đến game thuộc thể loại game bóng đá thì chắc hẳn
                      không game thủ nào lại không biết tới FIFA – một tựa game
                      sở hữu hơn 700 đội bóng, hơn 90 sân vận động, hơn 30 giải
                      đấu khác nhau trên khắp thế giới. Và đây cũng là tựa game
                      thu hút đến hơn 17.000 người chơi cùng lúc.
                    </p>
                    <p>
                      Bên cạnh những tính năng thường thấy như FUT hay Career
                      Mode, FIFA 21 lần đầu tiên giới thiệu tới game thủ Steam
                      một tính năng hoàn toàn mới có tên là Volta Football mang
                      tới cốt lõi của bóng đá đó chính là niềm vui. Bạn có thể
                      rủ tối đa 3 người bạn hoặc tham gia cùng với các người
                      chơi Volta Football khác để trải nghiệm cảm giác bóng đá
                      đường phố là như thế nào.
                    </p>
                    <h4>eFootball PES 2021 – Trùm bóng đá console</h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-16231633282101871801852.png"
                      alt="Game Bong Da, Game Dinh, Game Hay, Tin Tuc Game, Cong Dong Mang, "
                      note=""
                    />
                    <p>
                      Pro Evolution Soccer còn gọi là PES, hoặc theo kiểu thân
                      thương Việt Nam hơn thì "Pét", là một trong những tựa game
                      bóng đá nổi tiếng nhất thế giới. Ở Việt Nam, người ta
                      thường gọi những quán hàng PS4 là "tiệm Pét", nhiêu đó
                      thôi cũng đủ để thấy tựa game này có sức ảnh hưởng trên hệ
                      máy console lớn đến mức nào rồi.
                    </p>
                    <p>
                      PES 2021 thừa hưởng những điều tốt nhất của phiên bản
                      trước như góc quay camera, cơ chế đi bóng và giao diện màn
                      hình sảnh... đồng thời sở hữu nhiều điểm khác biệt. Từ tốc
                      độ xử lý bóng của các cầu thủ trở nên nhạy hơn và tự nhiên
                      hơn, cho đến AI của máy cũng được cải thiện đáng kể khi
                      bạn chơi ở chế độ ngoại tuyến. Tất tần tật những điều trên
                      sẽ mang lại một cảm giác thích thú không chỉ dành cho game
                      thủ online mà còn dành cho game thủ offline.
                    </p>
                    <h4>Football Manager 2021 – Quản lý đội bóng</h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-1623163362430535154853.png"
                      alt="Game Bong Da, Game Dinh, Game Hay, Tin Tuc Game, Cong Dong Mang, "
                      note=""
                    />
                    <p>
                      Nếu bạn là một người đam mê bóng đá, thích suy nghĩ chiến
                      thuật và điều hành một đội bóng của riêng mình thì đây sẽ
                      là một tựa game bóng đá mà bạn không nên bỏ qua. Bởi
                      Football Manager 2021 là một tựa game mô phỏng cực kỳ thực
                      tế công việc của một huấn luyện viên bóng đá thực thụ.
                    </p>
                    <p>
                      Các bạn sẽ được trải nghiệm cảm giác suy nghĩ và điều
                      chỉnh chiến thuật sao cho phù hợp, cũng như lên lịch tập
                      luyện cho các cầu thủ, trả lời phỏng vấn, vân vân và mây
                      mây. Nói chung là tổng hợp lại tất cả những điều hay ho mà
                      một huấn luyện viên phải làm. Liệu bạn có thể đảm nhận
                      được trọng trách linh thiêng này để dẫn dắt đội bóng của
                      bạn đi tới thành công? Để trả lời cho câu hỏi này thì các
                      bạn đừng ngần ngại tải game về thử ngay nhé.
                    </p>
                    <h4>
                      Football, Tactics & Glory – Phát triển CLB bóng đá pha
                      trộn yếu tố chiến thuật theo lượt
                    </h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/8/photo-1-16231634109021769267725.png"
                      alt="Game Bong Da, Game Dinh, Game Hay, Tin Tuc Game, Cong Dong Mang, "
                      note=""
                    />
                    <p>
                      Football, Tactics & Glory là một tựa game khá độc đáo, kết
                      hợp giữa cơ chế chiến thuật theo lượt và phát triển đội
                      bóng để tạo ra trải nghiệm mới lạ cho game thủ. Bạn sẽ
                      được tạo ra đội bóng cho riêng mình, giao tranh với đội
                      bóng khác, tăng điểm kinh nghiệm, luyện kỹ năng, mở khóa
                      lớp cầu thủ mới, nâng cấp cơ sở vật chất, mua bán cầu thủ,
                      ươm mầm tài năng trẻ, và đưa ra những quyết định sáng
                      suốt... nhằm đưa đội bóng đi đến đỉnh cao của Giải bóng đá
                      Ngoại hạng Anh.
                    </p>
                    <p>
                      Game bóng đá này còn hỗ trợ modding, cho phép bạn tạo ra
                      các giải đấu của riêng mình hoặc tham gia giải đấu của
                      những người chơi khác. Bạn còn có thể rủ thêm bạn bè, cùng
                      nhau tranh đấu cả mùa giải để xem chiếc cúp vô địch sẽ
                      thuộc về ai.
                    </p>
                    <p>Theo GVN360</p>
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
