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
"timestamp": '29/06/2021 09:54 PM',
"title": 'Top 10 tựa game open-world hay nhất dành cho điện thoại Android do game thủ bình chọn (P.1)',
"description": 'Những tựa game này được tạo ra cho người dùng Android với trải nghiệm cực kỳ mới lạ.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/6/24/-16245505692101933197214.jpg',
"alt": 'KHÁM PHÁ,GAME,GAME ONLINE,OPEN-WORLD GAME,GAME THẾ GIỚI MỞ,ANDROID,',
"category": 'games',
"date": '29/06/2021',
"time": '09:54 PM',
"link": '/top-10-tua-game-open-world-hay-nhat-danh-cho-dien-thoai-android-do-game-thu-binh-chon-p1',
"zcomponent": 'page_20210629215439',
"filepath": './20210629215439-top-10-tua-game-open-world-hay-nhat-danh-cho-dien-thoai-android-do-game-thu-binh-chon-p1.js'
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
  "Top 10 tựa game open-world hay nhất dành cho điện thoại Android do game thủ bình chọn (P.1)";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 09:54 PM";
const description =
  "Những tựa game này được tạo ra cho người dùng Android với trải nghiệm cực kỳ mới lạ.";
const link =
  "top-10-tua-game-open-world-hay-nhat-danh-cho-dien-thoai-android-do-game-thu-binh-chon-p1";
const tagparam = [
  "KHÁM PHÁ",
  "GAME",
  "GAME ONLINE",
  "OPEN-WORLD GAME",
  "GAME THẾ GIỚI MỞ",
  "ANDROID",
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

export default function page_20210629215439() {
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
                <div className="contentBody">
                  <p>
                    Hiện tại, thế giới mở đang được xem là một dòng{" "}
                    <strong>game</strong> riêng rẽ. Người chơi có thể thưởng
                    thức những mô phỏng gần sát với cuộc sống thực ở thành phố
                    hoặc nông thôn, tùy vào bối cảnh game. Chính vì độ chân thực
                    trong thiết lập lẫn gameplay, open-world đang ngày càng được
                    lòng các game thủ. Thậm chí, một số nhà sản xuất còn nhanh
                    nhạy bắt kịp xu hướng ưa thích sử dụng smartphone để cho ra
                    đời nhiều tựa game open-world dành riêng cho điện thoại{" "}
                    <strong>android</strong>.
                  </p>
                  <h5>Desert Skies</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/24/-16245505692101933197214.jpg"
                    alt="1, KHÁM PHÁ,GAME,GAME ONLINE,OPEN-WORLD GAME,GAME THẾ GIỚI MỞ,ANDROID,"
                    note=""
                  />
                  <p>
                    Deser Skies là một trong số những tựa <strong>game</strong>{" "}
                    open-world được đánh giá cao. Trong game, người chơi sẽ được
                    yêu cầu chế tạo vũ khi để đánh hạ các quái vật trong sa mạc.
                    Nghe có vẻ đơn giản, thế nhưng tựa game này lại là một bất
                    ngờ lớn.
                  </p>
                  <p>
                    Người chơi cần quan tâm đến sức khỏe từ những khía cạnh khác
                    nhau như nước, thức ăn… Ở trạng thái ban đầu, người chơi sẽ
                    chưa có gì ngoài một quả khinh khí cầu giúp tự vệ trước quái
                    vật trong sa mạc và để sinh tồn thì họ buộc phải bắt tay vào
                    chế tạo vũ khí. Nhìn chung đây là một <strong>game</strong>{" "}
                    có đồ họa đẹp, gọn gàng nhưng gameplay điều khiển chưa thật
                    sự thuận tiện cho người chơi.
                  </p>
                  <h5>Mad Out Open City 2</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/24/-1624550625271462706354.jpg"
                    alt="2, KHÁM PHÁ,GAME,GAME ONLINE,OPEN-WORLD GAME,GAME THẾ GIỚI MỞ,ANDROID,"
                    note=""
                  />
                  <p>
                    Mad Out Open City 2 khá giống với Grand Theft Auto khi người
                    chơi nhập vai một tên tội phạm. Họ sẽ phải lần lượt hoàn
                    thành các nhiệm vụ nhỏ và gần như không mấy quan trọng, cho
                    đến khi được thăng cấp và nhận các nhiệm vụ quan trọng hơn
                    với phần visual được cải thiện đáng kể.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Đồ họa là một điểm sáng trong <strong>game</strong>, miễn là
                    người chơi sở hữu điện thoại có cấu hình đủ cao. Tuy nhiên,
                    nếu điện thoại có cấu hình ở mức vừa phải thì người chơi vẫn
                    còn nhiều lựa chọn cấu hình thấp.
                  </p>

                  <h5>Street of Fire</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/24/-16245506400591934767879.jpg"
                    alt="3, KHÁM PHÁ,GAME,GAME ONLINE,OPEN-WORLD GAME,GAME THẾ GIỚI MỞ,ANDROID,"
                    note=""
                  />
                  <p>
                    Lại một tựa <strong>game</strong> khác có đồ họa gần giống
                    với đồ họa của Grand Theft Auto. Thế mạnh của game nằm ở bản
                    đồ mở rộng, cho phép người chơi đi bất cứ đầu, ăn trộm xe cộ
                    và làm bất cứ điều gì mình thích. Tuy nhiên, game không có
                    nhiệm vụ và cốt truyện nên người chơi sẽ nhanh chán.
                  </p>
                  <p>
                    Hiện <strong>game</strong> vẫn đang được phát triển, vì thế
                    hơn một nửa thành phố trên map trong trạng thái bị khóa.
                    Điều duy nhất người chơi có thể làm là đi lang thang đây đó
                    và <strong>khám phá</strong> thành phố mà thôi.
                  </p>
                  <h5>Cat Simulator 2020</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/24/-16245506565091273322523.jpg"
                    alt="4, KHÁM PHÁ,GAME,GAME ONLINE,OPEN-WORLD GAME,GAME THẾ GIỚI MỞ,ANDROID,"
                    note=""
                  />
                  <p>
                    Cat Simulator 2020 là trò chơi open-world mà người chơi được
                    nhập vai một chú mèo xinh đẹp và sẽ tìm được gia đình nông
                    dân ở giữa cánh rừng gần hồ Xanh rộng lớn. Bạn có thể làm
                    bất cứ điều gì mình muốn trong thế giới rộng lớn này, vì thế
                    mục tiêu chính của trò chơi này là tấn công kẻ thù một cách
                    không trực diện, giúp gia đình nông dân xây nhà, nuôi lợn và
                    bắt đầu một mái ấm.
                  </p>
                  <p>
                    Ngoài ra, người chơi cũng có thể xây dựng riêng cho mình một
                    gia đình mèo, dạy dỗ mèo con và hóa cáo nếu đã quá chán làm
                    mèo. Bên cạnh đó, người chơi cũng phải đi thu thập xu, tìm
                    thức ăn cũng như mở khóa thêm một số đặc quyền cho lũ mèo.
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
