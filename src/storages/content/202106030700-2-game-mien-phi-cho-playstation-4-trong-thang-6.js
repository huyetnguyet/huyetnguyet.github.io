import React from "react";
import "../../components/page.css";
import { AdsHorizontal, AdsVertical } from "../../components/adsMethods";
import { RandomFeature } from "../../components/methods";

import {
  Content,
  ContentImage,
  FacebookShareButton,
} from "../../components/content";

/* Data Input */
/*

 <ContentItem
title=""
content=""
src=""
alt=""
types=""
time=""
link="/"
/>

*/
/* ---------------------------------------------------------------- */

const category = "games";
const categoryLink = "/games";

const title = "2 game miễn phí cho PlayStation 4 trong tháng 6";
const author = "Real Madrid";
const source = "Trí Thức Trẻ";
const date = "03/06/2021";
const time = "07:00 PM";
const description =
  "Với 2 trò chơi này, game thủ PS4 sẽ thoải mái giải trí trong những ngày nghỉ hè dài sắp tới.";
const link = "2-game-mien-phi-cho-playstation-4-trong-thang-6";
const alt = "PlayStation";
const tags = [
  "GAME MIỄN PHÍ",
  "STAR WARS: SQUADRONS",
  "VIRTUA FIGHTER 5 ULTIMATE SHOWDOWN",
  "PS4",
  "PS5",
];

/* ---------------------------------------------------------------- */

/* 
<ContentImage
src=""
alt=""
note=""
/>
                  */

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

export default function page() {
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
                    Chào đón tháng 6, Sony dành tặng 2 tựa game miễn phí cực kỳ
                    hấp dẫn cho game thủ sở hữu PlayStation Plus. Đó là Star
                    Wars: Squadrons và Virtua Fighter 5 Ultimate Showdown. Với 2
                    trò chơi này, game thủ PS4 sẽ thoải mái giải trí trong những
                    ngày nghỉ hè dài sắp tới.
                  </p>
                  <p>
                    <strong>Star Wars: Squadrons</strong>
                  </p>
                  <p>
                    Phần chơi đơn của Star Wars: Squadrons đưa bạn đến với cuộc
                    chiến giữa hai lực lượng thuộc New Republic và Imperial mà
                    người chơi là thành viên một phi đội của mỗi phe. Hai bên
                    đều tung những phi thuyền chiến đấu tương xứng để đối đầu
                    nhau trong các nhiệm vụ mà bạn được tham gia. Mỗi nhiệm vụ
                    thường chỉ kéo dài khoảng 15-30 phút là tối đa với nhịp độ
                    chơi tuyệt vời, mọi tình tiết và yêu cầu nhiệm vụ đều diễn
                    ra liên tục và khá nhanh trong trải nghiệm.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-16227185193141391762015.jpg"
                    alt={alt}
                  />
                  <p>
                    Người chơi liên tục được chuyển qua lại giữa góc nhìn của
                    hai phe. Tâm điểm xoay quanh việc chế tạo Starhawk mà lực
                    lượng New Republic tin rằng có thể giúp thay đổi bản chất
                    của cuộc chiến. Đội ngũ biên kịch khá chắc tay khi xây dựng
                    các tình tiết khiến người chơi thấy đồng cảm với quan điểm
                    của mỗi bên. Giữa các phân đoạn chuyển cảnh và nhiệm vụ là
                    cơ hội để bạn trò chuyện với đồng đội và hiểu thêm về tâm tư
                    của họ.
                  </p>
                  <p>
                    Star Wars: Squadrons mang đến một trải nghiệm “chiến tranh
                    giữa các vì sao” khá đặc sắc. Cả hai phần chơi đơn và
                    multiplayer đều xuất sắc và có sự bổ trợ cho nhau rất tốt.
                    Với một tựa game miễn phí trên PS4, các bạn chắc không còn
                    mong đợi gì nhiều hơn thế.
                  </p>
                  <p>
                    <strong>Virtua Fighter 5 Ultimate Showdown</strong>
                  </p>
                  <p>
                    Không giống các phiên bản còn lại của series, Virtua Fighter
                    5 Final Showdown có một cách tiếp cận người chơi khác biệt
                    và sự chuyển trọng tâm trong các phần chơi. Thay vì tập
                    trung làm nổi bật phần chơi đơn cùng câu chuyện của các nhân
                    vật, game hướng đến những trận đấu tay đôi có tính cạnh
                    tranh cao, căng thẳng, kịch tính, đẹp mắt mà chế độ chơi
                    online rực lửa chính là hạt nhân.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/3/photo-1-1622718503123169428884.jpg"
                    alt={alt}
                  />
                  <p>
                    Hỗ trợ đắc lực cho ý đồ xây dựng thế mạnh chiến đấu đối
                    kháng của game là một chế độ training và tutorial rất đầy
                    đủ, chi tiết, đa dạng và dễ hiểu. Virtua Fighter 5 Final
                    Showdown sẽ cung cấp các phụ kiện giúp cho việc thiết kế lại
                    các nhân vật qua các gói download thay vì mang đến cho người
                    chơi thông qua quá trình chiến đấu. Game engine chứa đựng
                    sức mạnh tuyệt vời khi nó vừa dễ dàng để cho những ai mới
                    chơi tiếp cận lại vừa thể hiện được chiều sâu và sự đột phá
                    trong các trận chiến chặt chẽ, căng thẳng.
                  </p>
                  <p>
                    Trong game, mỗi nhân vật đều sở hữu những kĩ năng chiến đấu
                    đặc trưng và mang những khả năng đặc biệt bao gồm hàng tá
                    các đòn đánh, tránh né, quật ngã hay phản công. Thêm nữa,
                    những đòn thế này lại được phân loại bằng tầm đánh, tốc độ
                    cũng như chỉ số sát thương khác nhau giúp cho hệ thống chiến
                    đấu trở nên tỉ mỉ, chi tiết và vô cùng chặt chẽ. Các kĩ năng
                    ra đòn được xây dựng và thiết kế trong Virtua Fighter 5
                    Final Showdown hầu hết dựa trên võ công của những môn phái
                    trong thực tế.
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
