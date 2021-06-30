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
"timestamp": '29/06/2021 10:00 PM',
"title": 'Những con trùm đòi hỏi game thủ "dùng não" mới có thể vượt qua',
"description": 'Không phải lúc nào bạo lực cũng sẽ là phương án xử lý chính xác cho được.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/28/photo-1-1624813965384935059512.jpg',
"alt": 'GAME,TRÙM,BOSS,',
"category": 'games',
"date": '29/06/2021',
"time": '10:00 PM',
"link": '/nhung-con-trum-doi-hoi-game-thu-dung-nao-moi-co-the-vuot-qua',
"zcomponent": 'page_20210629220000',
"filepath": './20210629220000-nhung-con-trum-doi-hoi-game-thu-dung-nao-moi-co-the-vuot-qua.js'
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
const title = 'Những con trùm đòi hỏi game thủ "dùng não" mới có thể vượt qua';
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/06/2021 10:00 PM";
const description =
  "Không phải lúc nào bạo lực cũng sẽ là phương án xử lý chính xác cho được.";
const link = "nhung-con-trum-doi-hoi-game-thu-dung-nao-moi-co-the-vuot-qua";
const tagparam = ["GAME", "TRÙM", "BOSS"];
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

export default function page_20210629220000() {
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
                  <h5>1. The Sorrow - Metal Gear Solid 3: Snake Eater</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/28/photo-1-1624813965384935059512.jpg"
                    alt="1, GAME,TRÙM,BOSS,"
                    note=""
                  />
                  <p>
                    Dưới bàn tay của nhà thiết kế đại tài Hideo Kojima, Metal
                    Gear Solid sản sinh ra rất nhiều những cơ chế{" "}
                    <strong>game</strong>play và những con <strong>trùm</strong>{" "}
                    đầy tính sáng tạo. The Sorrow chính là một ví dụ như vậy,
                    khi hắn không phải là một đối thủ "dễ chơi". Khó nhằn không
                    phải vì hắn đòi hỏi kỹ năng cao hay máu trâu, mà đơn giản
                    The Sorrow troll người chơi một cách đầy khó chịu.
                  </p>
                  <p>
                    Người chơi cần phải lội một con sông dài ngoằng và đối mặt
                    với hình ảnh của tất cả những người đã bị Snake giết trong{" "}
                    <strong>game</strong>. Tới lúc gần kết thúc, The Sorrow sẽ
                    nói với bạn rằng "Đã đến lúc thức tỉnh!", tấn công người
                    chơi và thế là... game over. Để giải quyết vấn đề này cực kỳ
                    đơn giản, người chơi chỉ cần tiếp tục mở kho đồ và chọn viên
                    thuốc hồi sinh lên là... chơi tiếp được. Đúng là cú lừa đau
                    xót cho các game thủ mày mò suốt cả màn chơi.{" "}
                  </p>
                  <h5>2. Zeus - God Of War III</h5>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/28/photo-1-1624813934541978886012.jpg"
                    alt="2, GAME,TRÙM,BOSS,"
                    note=""
                  />
                  <p>
                    Con <strong>trùm</strong> cuối cùng của God of War 3 chính
                    là Zeus, vị thần tối cao của đỉnh Olympus. Sau khi đối đầu
                    với tên trùm cuối này sẽ có một đoạn cắt cảnh hiện lên,
                    Kratos bay vào đánh cho Zeus "ra bã". Góc màn hình sẽ xuất
                    hiện nút O yêu cầu người chơi thực hiện chuỗi hành động QTE
                    như mọi khi, nhưng sự thật hoàn toàn không phải là vậy.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Lúc này, người chơi cần dừng ấn nút, cứ kệ xác Kratos và
                    Zeus. Bạn cần dừng lại, "nghỉ tay" khoảng 3 giây thì{" "}
                    <strong>game</strong> mới tiếp tục chiếu đoạn cắt cảnh cuối
                    cùng. Dĩ nhiên là Kratos rất thù oán Zeus, nhưng đập thế chứ
                    có đập nữa thì Kratos cũng không nguôi cơn giận cho được.
                  </p>
                  <h5>3. Hela - Hellblade: Senua’s Sacrifice</h5>

                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/28/photo-1-16248139169401935721260.jpg"
                    alt="3, GAME,TRÙM,BOSS,"
                    note=""
                  />
                  <p>
                    Hellblade: Senua’s Sacrifice thích trêu{" "}
                    <strong>game</strong> thủ theo đúng nghĩa đen, khiến người
                    chơi lúc nào cũng cảm thấy sợ hãi và "xoắn" hệt như chính
                    Senua trong game vậy. Hela chính là một ví dụ như vậy, khi
                    con <strong>trùm</strong> cuối này đánh mãi mà chẳng chịu
                    chết bao giờ.
                  </p>
                  <p>
                    Thêm nữa, Hela thỉnh thoảng ra đòn, buộc người chơi phải
                    liên tục để mắt đến cô ta trong khi chiến đấu với lũ quái
                    vật trước mặt. Những ai mới chơi <strong>game</strong> này
                    lần đầu sẽ thấy là màn chơi này quá khó để chinh phục chứ
                    đừng nói là qua ải.{" "}
                  </p>
                  <p>
                    Thực chất thì, cách qua ải ở đây là buông xuôi và chấp nhận
                    cái chết của mình. Trong lúc trận đấu đang diễn ra thì bạn
                    sẽ nghe giọng nói trong đầu bảo là hãy từ bỏ đi, nhưng đầu{" "}
                    <strong>game</strong> đến giờ bạn sẽ biết được một điều là
                    không nên tin vào giọng nói này, cho nên cứ cắm đầu cắm cổ
                    mà đánh thôi. Một cú lừa khá là ngoạn mục đấy.
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
