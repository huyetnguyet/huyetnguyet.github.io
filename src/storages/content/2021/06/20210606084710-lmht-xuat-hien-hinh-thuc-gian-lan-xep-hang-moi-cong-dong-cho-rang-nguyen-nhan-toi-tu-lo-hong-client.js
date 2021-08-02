import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 <ContentItem title="LMHT xuất hiện hình thức gian lận xếp hạng mới, cộng đồng cho rằng nguyên nhân tới từ lỗ hổng client"\description="Nhiều game thủ LMHT cũng xác nhận rằng hình thức gian lận này đang rất phổ biến ở mức rank Kim Cương - Cao Thủ." 
src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-16229481139211967180953.jpg" 
alt="Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Gian Lan Xep Hang, Client Lmht, Cong Dong Mang, " 
category="games" 
time="06/06/2021 08:47 AM" 
link="/lmht-xuat-hien-hinh-thuc-gian-lan-xep-hang-moi-cong-dong-cho-rang-nguyen-nhan-toi-tu-lo-hong-client"/>

{title:"LMHT xuất hiện hình thức gian lận xếp hạng mới, cộng đồng cho rằng nguyên nhân tới từ lỗ hổng client",\description:"Nhiều game thủ LMHT cũng xác nhận rằng hình thức gian lận này đang rất phổ biến ở mức rank Kim Cương - Cao Thủ." ,
src:"https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-16229481139211967180953.jpg" ,
alt:"Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Gian Lan Xep Hang, Client Lmht, Cong Dong Mang, " ,
category:"games" ,
time:"06/06/2021 08:47 AM" ,
link:"/lmht-xuat-hien-hinh-thuc-gian-lan-xep-hang-moi-cong-dong-cho-rang-nguyen-nhan-toi-tu-lo-hong-client",component:"page_20210606084710",
filepath:"./20210606084710-lmht-xuat-hien-hinh-thuc-gian-lan-xep-hang-moi-cong-dong-cho-rang-nguyen-nhan-toi-tu-lo-hong-client.js"},

LMHT xuất hiện hình thức gian lận xếp hạng mới, cộng đồng cho rằng nguyên nhân tới từ lỗ hổng client
Nhiều game thủ LMHT cũng xác nhận rằng hình thức gian lận này đang rất phổ biến ở mức rank Kim Cương - Cao Thủ.
https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-16229481139211967180953.jpg
Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Gian Lan Xep Hang, Client Lmht, Cong Dong Mang, 
games
06/06/2021
08:47 AM
/lmht-xuat-hien-hinh-thuc-gian-lan-xep-hang-moi-cong-dong-cho-rang-nguyen-nhan-toi-tu-lo-hong-client
page_20210606084710
./20210606084710-lmht-xuat-hien-hinh-thuc-gian-lan-xep-hang-moi-cong-dong-cho-rang-nguyen-nhan-toi-tu-lo-hong-client.js




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
  "LMHT xuất hiện hình thức gian lận xếp hạng mới, cộng đồng cho rằng nguyên nhân tới từ lỗ hổng client";
const author = "A Đồi";
const source = "Pháp luật và bạn đọc";
const date = "06/06/2021";
const time = "08:47 AM";
const description =
  "Nhiều game thủ LMHT cũng xác nhận rằng hình thức gian lận này đang rất phổ biến ở mức rank Kim Cương - Cao Thủ.";
const link =
  "lmht-xuat-hien-hinh-thuc-gian-lan-xep-hang-moi-cong-dong-cho-rang-nguyen-nhan-toi-tu-lo-hong-client";
const tagparam = [
  "lien-minh-huyen-thoai",
  "lmht",
  "riot-games",
  "riot",
  "game",
  "tin-game",
  "gian-lan-xep-hang",
  "client-lmht",
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

export default function page_20210606084710() {
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
                    Cách đây hơn 1 tháng, Riot Games đã công bố rằng họ sẽ nâng
                    mức xử phạt với các hành vi phá game, kể cả thoát trong lúc
                    chọn tướng. Cụ thể khi thoát trong lúc chọn tướng 3 lần, bạn
                    sẽ bị khóa hàng chờ 12 tiếng và trừ điểm 10 xếp hạng. Thay
                    đổi này có mục đích là giảm tình trạng game thủ thoát quá
                    nhiều trong lúc chọn tướng để tránh những trận đấu mà họ cho
                    là sẽ gặp bất lợi và không thể chiến thắng.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-16229481139211967180953.jpg"
                    alt="Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Gian Lan Xep Hang, Client Lmht, Cong Dong Mang, "
                    note=""
                  />
                  <p>
                    Việc thoát trong lúc chọn tướng sẽ giúp bạn tránh được những
                    trận đấu bất lợi nhưng lại làm cho 9 người chơi khác cảm
                    thấy vô cùng khó chịu
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/6/rank-16229470274671945600673.jpg"
                    alt="Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Gian Lan Xep Hang, Client Lmht, Cong Dong Mang, "
                    note=""
                  />
                  <p>
                    Những tưởng thay đổi trên sẽ giúp nâng cao trải nghiệm ở chế
                    độ xếp hạng thì nó lại khiến cho một vài game thủ sử dụng
                    phần mềm thứ ba để không bị phạt. Cách đây ít giờ, cộng đồng
                    LMHT đã phát hiện ra một loại tool mới cho phép game thủ
                    thoát thoải mái trong lúc chọn tướng mà không hề bị trừ điểm
                    xếp hạng hay khóa hàng chờ. Điều đáng nói ở đây đó là loại
                    tool này được sử dụng rất nhiều bởi người chơi rank cao (Kim
                    Cương - Cao Thủ) và cả những streamer nữa.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-1622946995073568588937.png"
                    alt="Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Gian Lan Xep Hang, Client Lmht, Cong Dong Mang, "
                    note=""
                  />
                  <p>
                    Phần mềm gian lận còn gửi thông báo lên khung chat rằng trận
                    đấu có được bắt đầu hay không
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/6/rank1-1622947254342480833191.jpg"
                    alt="Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Gian Lan Xep Hang, Client Lmht, Cong Dong Mang, "
                    note=""
                  />
                  <p>
                    Các trận đấu rank cao ở máy chủ Brazil gần như không thể
                    chơi được.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/6/rank2-16229475093961050236767.jpg"
                    alt="Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Gian Lan Xep Hang, Client Lmht, Cong Dong Mang, "
                    note=""
                  />
                  <p>
                    Tôi không chắc nó diễn ra ở các máy chủ lớn hay không vì tôi
                    chỉ nhìn thấy tool này tại Brazil mà thôi. Về cơ bản thì có
                    một phần mềm khiến cho giai đoạn chọn tướng gặp lỗi và game
                    không thể bắt đầu được. Bạn có thể dùng nó để thoát trong
                    lúc chọn tướng mà không sợ bị phạt. Như ảnh trên thì người
                    thoát lobby sau thông báo đầu tiên đang sử dụng phần mềm
                    này. Có nhiều người chơi rank cao, streamer đang lạm dụng
                    phần mềm này ở máy chủ Brazil.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/6/rank3-1622947509518376090570.jpg"
                    alt="Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Gian Lan Xep Hang, Client Lmht, Cong Dong Mang, "
                    note=""
                  />
                  <p>
                    Tôi thấy điều tương tự cũng xảy ra ở máy chủ Bắc Mỹ và Tây
                    Âu nhé. Nó xảy ra thường xuyên ở mức rank Cao Thủ tại máy
                    chủ Bắc Mỹ luôn.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/6/photo-1-1622947611449709094315.png"
                    alt="Lien Minh Huyen Thoai, Lmht, Riot Games, Riot, Game, Tin Game, Gian Lan Xep Hang, Client Lmht, Cong Dong Mang, "
                    note=""
                  />
                  <p>
                    Khả năng cao là tool này lợi dụng lỗ hổng của client LMHT để
                    mở ra chế độ Phòng Tập trước khi việc đếm ngược về con số 0.
                    Khi máy chủ thấy người chơi sẵn sàng thì không biết phải làm
                    gì cả và trận đấu sẽ không được bắt đầu, người sử dụng tool
                    thì không bị phạt. Tình trạng này diễn ra trong nhiều tuần
                    rồi nhưng Riot không hề có động thái chỉnh sửa gì cả.
                  </p>
                  <p>
                    Đó là một phần mềm mà bạn phải mua nhé. Tôi có đăng một bài
                    viết về nó khoảng 1 tháng trước nhưng bị xóa mất rồi. Cứ để
                    tình trạng này diễn ra thêm nửa năm nữa thì Riot có thể sẽ
                    làm gì đó.
                  </p>
                  <p>
                    Vậy đó là một phần mềm gian lận à? Tình trạng này xảy ra ở
                    rank Kim Cương tại máy chủ Tây Âu suốt, tôi cứ nghĩ đó là
                    bug.
                  </p>
                  <p>
                    Game thủ cũng phát hiện ra một streamer người Brazil có tên
                    là YIOK sử dụng phần mềm này để thoát trong lúc chọn tướng
                    mà không bị phạt
                  </p>
                  <p>
                    Tính tới thời điểm hiện tại thì cộng đồng mới chỉ phát hiện
                    ra rằng tool kể trên có tính năng giúp game thủ thoát trong
                    lúc chọn tướng mà không bị phạt. Tuy nhiên chẳng có gì đảm
                    bảo là nó không có "tính năng" khác để người chơi có thể tận
                    dụng và gian lận nghiêm trọng hơn khi chơi ở chế độ xếp
                    hạng. Hy vọng Riot Games sẽ sớm nhận ra tình trạng này và
                    đưa ra những chỉnh sửa hợp lý, nếu không thì việc nâng mức
                    độ xử phạt của họ sẽ trở nên vô nghĩa mà thôi.
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
