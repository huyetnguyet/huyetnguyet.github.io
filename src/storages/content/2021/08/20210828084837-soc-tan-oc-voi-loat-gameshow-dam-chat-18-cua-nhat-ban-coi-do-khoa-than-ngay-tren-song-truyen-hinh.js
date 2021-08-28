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
"timestamp": '28/08/2021 08:48 AM',
"title": 'Sốc tận óc với loạt gameshow đậm chất 18+ của Nhật Bản: Cởi đồ, khỏa thân ngay trên sóng truyền hình!',
"description": 'Nhiều gameshow Nhật Bản khiến khán giả phải đỏ mặt vì những tình tiết cực kỳ nhạy cảm.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-1-16300606420182064502388.jpg',
"alt": 'show nhật bản,tv show,gameshow 18+,Cao Thủ Cởi Đồ,Be Cute Or Get Pie,gây tranh cãi,nhạy cảm,sex,The Bum Game,Underessing Her With Your Eyes,Boiling Bath,',
"category": 'stars',
"date": '28/08/2021',
"time": '08:48 AM',
"link": '/soc-tan-oc-voi-loat-gameshow-dam-chat-18-cua-nhat-ban-coi-do-khoa-than-ngay-tren-song-truyen-hinh',
"zcomponent": 'page_20210828084837',
"filepath": './20210828084837-soc-tan-oc-voi-loat-gameshow-dam-chat-18-cua-nhat-ban-coi-do-khoa-than-ngay-tren-song-truyen-hinh.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  "Sốc tận óc với loạt gameshow đậm chất 18+ của Nhật Bản: Cởi đồ, khỏa thân ngay trên sóng truyền hình!";
const author = "BELL SHINO,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "28/08/2021 08:48 AM";
const description =
  "Nhiều gameshow Nhật Bản khiến khán giả phải đỏ mặt vì những tình tiết cực kỳ nhạy cảm.";
const link =
  "soc-tan-oc-voi-loat-gameshow-dam-chat-18-cua-nhat-ban-coi-do-khoa-than-ngay-tren-song-truyen-hinh";
const tagparam = [
  "show nhật bản",
  "tv show",
  "gameshow 18+",
  "Cao Thủ Cởi Đồ",
  "Be Cute Or Get Pie",
  "gây tranh cãi",
  "nhạy cảm",
  "sex",
  "The Bum Game",
  "Underessing Her With Your Eyes",
  "Boiling Bath",
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

export default function page_20210828084837() {
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
                    <h5>Cao Thủ Cởi Đồ</h5>
                    <p>
                      Là đất nước có nền công nghiệp tình dục phát triển mạnh
                      nên người dân Nhật Bản cũng có cái nhìn cởi mở hơn về vấn
                      đề này. Không chỉ phim ảnh, các gameshow tại Nhật Bản cũng
                      dần có hơi hướng "<strong>nhạy cảm</strong>" với một số
                      trò chơi gắn mác 18+ được công chiếu trên truyền hình.
                    </p>
                    <p>
                      Đến với trò chơi này, sẽ có một bảng trắc nghiệm gồm các
                      gói câu hỏi được đưa ra. Khi đó, người chơi nam bị buộc
                      đoạn chun kéo ở lưng và phải trả lời chính xác để nhận quả
                      bóng hoặc đồ vật khác. Sau đó, họ sẽ dùng đồ vật đó ném
                      các ô số trên chiếc bảng che người cô gái.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-1-16300604539221879431836.jpg"
                      alt="1, show nhật bản,tv show,gameshow 18+,Cao Thủ Cởi Đồ,Be Cute Or Get Pie,gây tranh cãi,nhạy cảm,sex,The Bum Game,Underessing Her With Your Eyes,Boiling Bath,"
                      note="Cô gái sẽ cởi dần bộ bikini theo thời gian"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-1-1630060455280977636989.jpg"
                      alt="2, show nhật bản,tv show,gameshow 18+,Cao Thủ Cởi Đồ,Be Cute Or Get Pie,gây tranh cãi,nhạy cảm,sex,The Bum Game,Underessing Her With Your Eyes,Boiling Bath,"
                      note="Con đường để có thể ném được bảng số chẳng hề dễ dàng gì"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-1-1630060461804212646391.jpg"
                      alt="3, show nhật bản,tv show,gameshow 18+,Cao Thủ Cởi Đồ,Be Cute Or Get Pie,gây tranh cãi,nhạy cảm,sex,The Bum Game,Underessing Her With Your Eyes,Boiling Bath,"
                      note="Không ngần ngại lột đồ để thực hiện trò chơi"
                    />

                    <p>
                      Điều đặc biệt là cô gái cầm bảng đang ở trong tình trạng
                      khỏa thân. Bởi thế, khi những ô số được ném trúng và dần
                      lật mở tấm bảng chính là khi các cô gái dần lộ cơ thể
                      mình. Điều này như chất xúc tác khiến người chơi bằng mọi
                      giá phải thực hiện thử thách để "mở mang tầm mắt".
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Be Cute Or Get Pie</h5>

                    <p>
                      Hẳn bạn sẽ há hốc miệng vì một trò chơi mà luật chơi của
                      nó thật vô nghĩa nhưng cũng thành một gameshow. Trò chơi
                      này có một căn phòng đầy những cô gái đang ngủ trên sàn
                      nhà. Các giám khảo (hai người mẫu nam) được đặt tên là
                      "mama" và "son" sẽ đánh thức từng người một theo bất kỳ
                      phong cách nào họ muốn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-1-16300602667351356614774.jpg"
                      alt="4, show nhật bản,tv show,gameshow 18+,Cao Thủ Cởi Đồ,Be Cute Or Get Pie,gây tranh cãi,nhạy cảm,sex,The Bum Game,Underessing Her With Your Eyes,Boiling Bath,"
                      note="Những cảnh nhạy cảm trong show"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-1-16300606420182064502388.jpg"
                      alt="5, show nhật bản,tv show,gameshow 18+,Cao Thủ Cởi Đồ,Be Cute Or Get Pie,gây tranh cãi,nhạy cảm,sex,The Bum Game,Underessing Her With Your Eyes,Boiling Bath,"
                      note=""
                    />

                    <p>
                      Tiêu chí đánh giá chính của họ là quyết định cô gái nào
                      thức dậy theo cách dễ thương nhất. Nếu theo phán quyết của
                      bộ đôi, ai đó thức dậy một cách không dễ thương thì cô ấy
                      sẽ bị úp ngay chiếc bánh lên mặt như một hình phạt.
                    </p>
                    <p>
                      Điều này khiến nhiều khán giả bất ngờ bởi bộ dạng lúc vừa
                      ngủ dậy chính là khi cô gái muốn che giấu nhất. Thế nhưng
                      trong chương trình giám khảo nam lại đi lần lượt đến từng
                      người và đánh thức họ dậy theo cách tùy ý và có thể đụng
                      chạm vào các cô gái.
                    </p>
                    <h5>Boiling Bath</h5>

                    <p>
                      Gameshow của những cô gái nhà AKB48: "AKBingo!" cũng có
                      nhiều yếu tố 18+ xuất hiện. Nhiều khán giả nước ngoài đã
                      cố gắng hiểu trò chơi này nhưng những gì họ thấy chỉ là
                      những người phụ nữ mặc bikini. Các góc máy thì cố gắng bắt
                      những góc <strong>nhạy cảm</strong> nhất của người phụ nữ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-4-15669647138321018765472-16300607957521504248241.jpeg"
                      alt="6, show nhật bản,tv show,gameshow 18+,Cao Thủ Cởi Đồ,Be Cute Or Get Pie,gây tranh cãi,nhạy cảm,sex,The Bum Game,Underessing Her With Your Eyes,Boiling Bath,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-2-16300602667772028522304.jpg"
                      alt="7, show nhật bản,tv show,gameshow 18+,Cao Thủ Cởi Đồ,Be Cute Or Get Pie,gây tranh cãi,nhạy cảm,sex,The Bum Game,Underessing Her With Your Eyes,Boiling Bath,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/27/giphy-1630060898244232334436.gif"
                      alt="10, show nhật bản,tv show,gameshow 18+,Cao Thủ Cởi Đồ,Be Cute Or Get Pie,gây tranh cãi,nhạy cảm,sex,The Bum Game,Underessing Her With Your Eyes,Boiling Bath,"
                      note=""
                    />

                    <p>
                      Sau đó, khi người phụ nữ cố gắng trèo qua bồn tắm thì liên
                      tiếp bị người chơi nam đẩy rơi xuống bồn và nhận được sự
                      tán thưởng của những người xung quanh. Không khác so với
                      người chơi nữ, người chơi nam cũng chỉ sử dụng nội y để
                      che chỗ <strong>nhạy cảm</strong>.
                    </p>
                    <h5>Underessing Her With Your Eyes</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/27/photo-1-16300611288891793637426.jpg"
                      alt="9, show nhật bản,tv show,gameshow 18+,Cao Thủ Cởi Đồ,Be Cute Or Get Pie,gây tranh cãi,nhạy cảm,sex,The Bum Game,Underessing Her With Your Eyes,Boiling Bath,"
                      note=""
                    />

                    <p>
                      Đây tiếp tục là một trò chơi liên quan đến việc cởi quần
                      áo của các cô gái. Trò chơi "nhức mắt" này yêu cầu các thí
                      sinh nam gắn nhiều kẹp khác nhau vào các bộ phận trên cơ
                      thể mình như: vai, mắt, tai… Và các kẹp có dây được gắn
                      vào quần áo của các cô gái tham gia. Vì vậy, những người
                      chơi nam phải chịu đau và cố để kéo dây cởi đồ cô gái kia.
                      Quần áo của các cô gái sẽ dần dần được lột bỏ.
                    </p>
                    <h5>The Bum Game</h5>

                    <p>
                      Gameshow này hội tụ đầy đủ yếu tố trần tục, gợi dục đến
                      mức người xem không tin nổi vào mắt mình rằng có thể loại
                      trò chơi như thế này tồn tại. Người chơi là nam giới sẽ
                      phải hôn… mông của người phía sau tấm bìa mà họ không được
                      biết trước là nam hay nữ.
                    </p>
                    <p>Ảnh: Internet</p>
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
