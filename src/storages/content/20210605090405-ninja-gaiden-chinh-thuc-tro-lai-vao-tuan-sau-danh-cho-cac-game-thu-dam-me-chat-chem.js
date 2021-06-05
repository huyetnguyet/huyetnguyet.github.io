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

 <ContentItem title="Ninja Gaiden chính thức trở lại vào tuần sau dành cho các game thủ đam mê 'chặt chém'"\description="Ninja Gaiden đã trở lại với ba tựa game dự kiến sẽ làm khó người chơi vào tháng 6 năm nay." 
src="https://gamek.mediacdn.vn/133514250583805952/2021/6/5/photo-1-16228335521911854152638.jpg" 
alt="Ninja Gaiden, Koei Tecmo, Ninja Gaiden Master Collection, " 
category="games" 
time="05/06/2021 09:04 AM" 
link="/ninja-gaiden-chinh-thuc-tro-lai-vao-tuan-sau-danh-cho-cac-game-thu-dam-me-chat-chem"/>

{title:"Ninja Gaiden chính thức trở lại vào tuần sau dành cho các game thủ đam mê 'chặt chém'",\description:"Ninja Gaiden đã trở lại với ba tựa game dự kiến sẽ làm khó người chơi vào tháng 6 năm nay." ,
src:"https://gamek.mediacdn.vn/133514250583805952/2021/6/5/photo-1-16228335521911854152638.jpg" ,
alt:"Ninja Gaiden, Koei Tecmo, Ninja Gaiden Master Collection, " ,
category:"games" ,
time:"05/06/2021 09:04 AM" ,
link:"/ninja-gaiden-chinh-thuc-tro-lai-vao-tuan-sau-danh-cho-cac-game-thu-dam-me-chat-chem",component:"page_20210605090405",
filepath:"../storages/content/20210605090405-ninja-gaiden-chinh-thuc-tro-lai-vao-tuan-sau-danh-cho-cac-game-thu-dam-me-chat-chem.js"},

Ninja Gaiden chính thức trở lại vào tuần sau dành cho các game thủ đam mê 'chặt chém'
Ninja Gaiden đã trở lại với ba tựa game dự kiến sẽ làm khó người chơi vào tháng 6 năm nay.
https://gamek.mediacdn.vn/133514250583805952/2021/6/5/photo-1-16228335521911854152638.jpg
Ninja Gaiden, Koei Tecmo, Ninja Gaiden Master Collection, 
games
05/06/2021
09:04 AM
/ninja-gaiden-chinh-thuc-tro-lai-vao-tuan-sau-danh-cho-cac-game-thu-dam-me-chat-chem
page_20210605090405
../storages/content/20210605090405-ninja-gaiden-chinh-thuc-tro-lai-vao-tuan-sau-danh-cho-cac-game-thu-dam-me-chat-chem.js




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
  "Ninja Gaiden chính thức trở lại vào tuần sau dành cho các game thủ đam mê 'chặt chém'";
const author = "Giang Gamek";
const source = "Trí Thức Trẻ";
const date = "05/06/2021";
const time = "09:04 AM";
const description =
  "Ninja Gaiden đã trở lại với ba tựa game dự kiến sẽ làm khó người chơi vào tháng 6 năm nay.";
const link =
  "ninja-gaiden-chinh-thuc-tro-lai-vao-tuan-sau-danh-cho-cac-game-thu-dam-me-chat-chem";
const tagparam = [
  "ninja-gaiden",
  "koei-tecmo",
  "ninja-gaiden-master-collection",
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

export default function page_20210605090405() {
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
                    Sau một thời gian với những tin đồn rằng Koei Tecmo đang
                    chuẩn bị ra mắt phần chơi chung của game Ninja Gaiden thì
                    nay, Ninja Gaiden sẽ chính thức trở lại và là phiên bản làm
                    lại từ ba tựa game đã phát hành trước đó. Do đó, dự án mang
                    tên Ninja Gaiden: Master Collection sẽ bao gồm Ninja Gaiden
                    Sigma, Ninja Gaiden Sigma 2 và Ninja Gaiden 3: Razor's Edge.
                  </p>
                  <p>
                    Phần game Ninja Gaiden Sigma được phát hành vào năm 2007 cho
                    nền tảng PS3. Đây là phiên bản nâng cấp của Ninja Gaiden
                    Black và đương nhiên độ khó thì cũng tăng theo. Ninja Gaiden
                    Sigma 2 cũng được phát triển tương tự như Ninja Gaiden Sigma
                    vì đây cũng là bản nâng cấp của Ninja Gaiden II. Phần game
                    này được phát hành vào năm 2009 cho PS3 và năm 2013 cho PS
                    Vita. Và cuối cùng, Ninja Gaiden 3: Razor's Edge được phát
                    hành năm 2012 dưới dạng nâng cấp của Ninja Gaiden 3.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/5/photo-1-16228335521911854152638.jpg"
                    alt="Ninja Gaiden, Koei Tecmo, Ninja Gaiden Master Collection, "
                    note=""
                  />
                  <p>
                    Cả ba trò chơi đều là tựa game độc quyền của hệ máy Xbox 360
                    từ đó cho đến nay và hai phần đầu đều được đánh giá là trò
                    chơi hành động ưa thích và có độ khó cực kì cao (mặc dù
                    người hâm mộ sẽ không ngừng tranh luận về những thay đổi
                    được thực hiện đối với trò chơi Sigma so với phiên bản gốc).
                  </p>
                  <p>
                    Ninja Gaiden là một trò chơi phiêu lưu hành động được phát
                    triển bởi Team Ninja cho Xbox và được phát hành bởi Tecmo
                    vào năm 2004. Người chơi sẽ điều khiển ninja Ryu Hayabusa đi
                    tìm lại thanh kiếm bị đánh cắp và báo thù cho gia tộc của
                    mình. Trò chơi được lấy cảm hứng từ series Ninja Gaiden của
                    Tecmo và lấy bối cảnh giống với trò chơi đối kháng Team
                    Ninja's Dead or Alive. Tecmo đã phát triển Ninja Gaiden được
                    5 năm, chủ yếu dành cho khán giả ở thị trường phương Tây.
                    Tính bạo lực của trò chơi khiến nội dung khó được xếp hạng
                    và có thể bị kiểm duyệt ở một số khu vực.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/5/photo-1-16228335550591516498418.jpg"
                    alt="Ninja Gaiden, Koei Tecmo, Ninja Gaiden Master Collection, "
                    note=""
                  />
                  <p>
                    Tận dụng khả năng kết nối internet của Xbox, Tecmo đã quảng
                    bá Ninja Gaiden với một loạt các cuộc thi trực tuyến quốc
                    tế; số lượng người chơi kỷ lục đã cạnh tranh cho các vị trí
                    trong trận chung kết trực tiếp được tổ chức tại Tokyo Game
                    Show 2004. Ninja Gaiden được giới phê bình đánh giá cao và
                    bán được 362.441 bản ở Bắc Mỹ trong tháng đầu tiên phát
                    hành; tuy nhiên, doanh số bán hàng của Nhật Bản kém Team
                    Ninja đã phát hành hai gói nội dung có thể tải xuống, cũng
                    được đưa vào phiên bản làm lại, Ninja Gaiden Black (2005).
                  </p>
                  <p>
                    Năm 2007, Ninja Gaiden được chuyển sang PlayStation 3 với
                    tên gọi Ninja Gaiden Sigma, với những cải tiến về nội dung
                    và đồ họa; này đã được phát hành trên PlayStation Vita di
                    động với tên gọi Ninja Gaiden Sigma Plus. Ninja Gaiden được
                    tiếp nối bởi Ninja Gaiden II (2008) và Ninja Gaiden 3
                    (2012). Ninja Gaiden Sigma sẽ được phát hành cho Microsoft
                    Windows, Nintendo Switch, PlayStation 4 và Xbox One như một
                    phần của Ninja Gaiden: Master Collection vào tháng 6 năm
                    2021.
                  </p>
                  <p>
                    Ninja Gaiden: Master Collection sẽ ra mắt ngày 10/6/2021
                    trên PC, PS4, Nintendo Switch và Xbox One.
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
