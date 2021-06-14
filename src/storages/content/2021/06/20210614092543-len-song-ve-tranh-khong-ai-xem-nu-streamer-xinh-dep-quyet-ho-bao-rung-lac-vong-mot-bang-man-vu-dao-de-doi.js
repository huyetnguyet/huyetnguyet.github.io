import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '14/06/2021 09:25 AM',
"title": 'Lên sóng vẽ tranh không ai xem, nữ streamer xinh đẹp quyết hở bạo, rung lắc vòng một bằng màn vũ đạo để đời',
"description": 'Không phải lúc nào những động tác vũ đạo gợi cảm của cô nàng streamer này cũng được đón nhận.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210614092543--16-754336.gif',
"alt": 'Gai Xinh, Cong Dong Mang, Streamer, Hot Girl, Grille Young, Nu Streamer, ',
"category": 'images',
"date": '14/06/2021',
"time": '09:25 AM',
"link": '/len-song-ve-tranh-khong-ai-xem-nu-streamer-xinh-dep-quyet-ho-bao-rung-lac-vong-mot-bang-man-vu-dao-de-doi',
"zcomponent": 'page_20210614092543',
"filepath": './20210614092543-len-song-ve-tranh-khong-ai-xem-nu-streamer-xinh-dep-quyet-ho-bao-rung-lac-vong-mot-bang-man-vu-dao-de-doi.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  "Lên sóng vẽ tranh không ai xem, nữ streamer xinh đẹp quyết hở bạo, rung lắc vòng một bằng màn vũ đạo để đời";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "14/06/2021 09:25 AM";
const description =
  "Không phải lúc nào những động tác vũ đạo gợi cảm của cô nàng streamer này cũng được đón nhận.";
const link =
  "len-song-ve-tranh-khong-ai-xem-nu-streamer-xinh-dep-quyet-ho-bao-rung-lac-vong-mot-bang-man-vu-dao-de-doi";
const tagparam = [
  "gai-xinh",
  "cong-dong-mang",
  "streamer",
  "hot-girl",
  "grille-young",
  "nu-streamer",
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

export default function page_20210614092543() {
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
                <div className="contentBody">
                  <p>
                    Theo thời gian, ngành công nghiệp <strong>streamer</strong>{" "}
                    dần dần phát triển với vô số những nội dung, loại hình phát
                    sóng khác nhau. Đã không còn là thời kỳ mà định nghĩa
                    streamer gắn liền với những màn hình chơi game thuần túy như
                    trước. Thậm chí, những môn nghệ thuật như hội họa cũng đã
                    dần được nhiều cô nàng áp dụng trên sóng. Tuy nhiên, mới đây
                    thôi, một "họa sĩ" streamer lại vừa khiến không ít người
                    phải nóng mắt, sau khi mang yếu tố gợi cảm có phần không cần
                    thiết vào trong các phiên phát sóng của mình.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092543--10-166865.png")
                        .default
                    }
                    alt="Gai Xinh, Cong Dong Mang, Streamer, Hot Girl, Grille Young, Nu Streamer, "
                    note="Grille Young - cái tên đang gây ra vô số sự chú ý"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092543--11-330179.jpg")
                        .default
                    }
                    alt="Gai Xinh, Cong Dong Mang, Streamer, Hot Girl, Grille Young, Nu Streamer, "
                    note="Gương mặt xinh xắn và vóc dáng cũng miễn chê"
                  />
                  <p>
                    Nhân vật đang được nhắc tới ở đây chính là{" "}
                    <strong>Grille Young</strong>, một nữ{" "}
                    <strong>streamer</strong> chưa thật sự có tiếng cho lắm và
                    hiện đang hoạt động trên AfreecaTV. Sở hữu một nhan sắc xinh
                    đẹp, thân hình cũng gợi cảm, thế nhưng khá trớ trêu là bên
                    cạnh việc mặc một số bộ trang phục nóng bỏng thì Grille
                    Young lại rất hạn chế việc khoe thân trên sóng. Thay vào đó,
                    cô nàng cố gắng mang tới cho người xem những gì được coi là
                    tinh túy của hội họa. Những bức tranh, cách cầm cọ cho tới
                    việc hoàn thành một tác phẩm đơn giản, đó là những nội dung
                    ban đầu của Grille Young. Tuy nhiên, dường như nó không mang
                    lại quá nhiều tác dụng, khi mà lượng người xem của cô nàng
                    chỉ ở mức lẹt đẹt.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092543--12-683067.jpg")
                        .default
                    }
                    alt="Gai Xinh, Cong Dong Mang, Streamer, Hot Girl, Grille Young, Nu Streamer, "
                    note="Cô nàng streamer rất có năng khiếu hội họa và thường khoe những tác phẩm của mình trên sóng"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092543--13-850666.jpg")
                        .default
                    }
                    alt="Gai Xinh, Cong Dong Mang, Streamer, Hot Girl, Grille Young, Nu Streamer, "
                    note="Nhưng điều này dường như không giúp cho Grille Young cải thiện được lượng view"
                  />
                  <p>
                    Điều này được thể hiện rõ qua con số follow trang cá nhân
                    chỉ ở con số chưa tới 3.000 của cô nàng này, dẫu cho nếu xét
                    về độ gợi cảm và nhan sắc, <strong>Grille Young</strong>{" "}
                    cũng chẳng thua kém bất kỳ nữ <strong>streamer</strong> nào
                    đang nổi ở thời điểm hiện tại. Có lẽ nhận ra sai lầm ban đầu
                    của mình, gần đây, cô nàng liên tục thay đổi hướng nội dung
                    lên sóng. Không còn cầm cọ, vẽ tranh nữa, Grille Young liên
                    tục mang tới những màn vũ đạo nóng bỏng và nổi bật nhất có
                    lẽ là pha nhảy theo phong cách lái moto gần đây.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092543--14-276435.gif")
                        .default
                    }
                    alt="Gai Xinh, Cong Dong Mang, Streamer, Hot Girl, Grille Young, Nu Streamer, "
                    note="Màn vũ đạo cực kỳ nóng bỏng của cô nàng streamer"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092543--15-797986.png")
                        .default
                    }
                    alt="Gai Xinh, Cong Dong Mang, Streamer, Hot Girl, Grille Young, Nu Streamer, "
                    note="Bên cạnh đó, Grille Young cũng không ngại đăng tải những hình ảnh khoe vòng một táo bạo"
                  />
                  <p>
                    Tất nhiên, những hiệu ứng tích cực với{" "}
                    <strong>Grille Young</strong> tới ngay lập tức, khi mà lượng
                    view bỗng chốc tăng vọt và rất nhiều người thể hiện sự yêu
                    thích đối với những màn khoe dáng này của cô nàng{" "}
                    <strong>streamer</strong>. Để rồi từ đó, bên cạnh hội hoa,
                    Grille Young cũng song song phát triển hướng đi mới của bản
                    thân.
                  </p>
                  <p>
                    Cô nàng <strong>streamer</strong> giờ đây thường xuyên "làm
                    trò" trên sóng như thế này đây
                  </p>
                  <p>
                    Đứng trước sự thay đổi này, khá nhiều fan chân chính của{" "}
                    <strong>Grille Young</strong> cảm thấy không quá thoải mái
                    với thần tượng của mình. Cụ thể, những nội dung khoe thân
                    giờ đây đang tràn ngập, và Grille Young cũng không thể đứng
                    ngoài trào lưu này nếu như không muốn chỉ số cứ mãi lẹt đẹt.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092543--17-369324.jpg")
                        .default
                    }
                    alt="Gai Xinh, Cong Dong Mang, Streamer, Hot Girl, Grille Young, Nu Streamer, "
                    note="Grille Young ngày càng trở nên gợi cảm"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092543--18-1620401614")
                        .default
                    }
                    alt="Gai Xinh, Cong Dong Mang, Streamer, Hot Girl, Grille Young, Nu Streamer, "
                    note="Ngay cả trong phong cách lên sóng"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210614092543--16-754336.gif")
                        .default
                    }
                    alt="Gai Xinh, Cong Dong Mang, Streamer, Hot Girl, Grille Young, Nu Streamer, "
                    note=""
                  />
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
