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
"timestamp": '19/08/2021 12:59 PM',
"title": 'Top 10 tựa game bắn súng góc nhìn thứ nhất gắn liền với game thủ Việt thế hệ 8x, 9x (P.2)',
"description": 'Những game đã trở thành huyền thoại tuổi thơ...',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-1-16292245183131807925352.png',
"alt": 'GAME HAY,GAME,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,',
"category": 'games',
"date": '19/08/2021',
"time": '12:59 PM',
"link": '/top-10-tua-game-ban-sung-goc-nhin-thu-nhat-gan-lien-voi-game-thu-viet-the-he-8x-9x-p2',
"zcomponent": 'page_20210819125951',
"filepath": './20210819125951-top-10-tua-game-ban-sung-goc-nhin-thu-nhat-gan-lien-voi-game-thu-viet-the-he-8x-9x-p2.js'
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
  "Top 10 tựa game bắn súng góc nhìn thứ nhất gắn liền với game thủ Việt thế hệ 8x, 9x (P.2)";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "19/08/2021 12:59 PM";
const description = "Những game đã trở thành huyền thoại tuổi thơ...";
const link =
  "top-10-tua-game-ban-sung-goc-nhin-thu-nhat-gan-lien-voi-game-thu-viet-the-he-8x-9x-p2";
const tagparam = [
  "GAME HAY",
  "GAME",
  "GAME ĐỈNH",
  "CỘNG ĐỒNG MẠNG",
  "TIN TỨC GAME",
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

export default function page_20210819125951() {
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
                      Vào thời điểm cuối những năm 1990, đầu 2000... có thể nói{" "}
                      <strong>game</strong> PC nói chung và game bắn súng FPS
                      nói riêng đã đem đến cho các anh em thế hệ 8x, 9x cảm xúc
                      vô cùng đặc biệt và kỷ niệm khó thể nào phai mờ.
                    </p>
                    <p>
                      Dù những trò chơi bom tấn hiện nay có đồ họa hoành tráng,{" "}
                      <strong>game</strong>play cuốn hút... nhưng những tựa game
                      tuổi thơ vẫn luôn giữ một vị trí đặc biệt trong tâm trí
                      game thủ Việt. Để gợi lại một thời đầy oanh liệt của game
                      thủ PC chúng mình, dưới đây là top 10 tựa game bắn súng
                      góc nhìn thứ nhất gắn liền với game thủ Việt thế hệ 8x,
                      9x. Mời các bạn cùng tham khảo nhé.
                    </p>
                    <h5>Unreal Tournament</h5>
                    <p>
                      Unreal Tournament là phần thứ 2 trong series Unreal, được
                      phát triển bởi Epic <strong>Game</strong>s và Digital
                      Extremes. Người chơi sẽ tham gia vào chuỗi trận đấu với
                      mục tiêu chính là hạ được càng nhiều kẻ địch càng tốt
                      thông qua mục chơi mạng online hoặc theo kết nối mạng cục
                      bộ LAN. Cùng với Unreal Engine trứ danh, Unreal Tournament
                      đã nhận được nhiều lời khen ngợi từ giới phê bình nhờ có
                      gameplay đặc sắc, thiết kế màn chơi hợp lý và đồ họa ấn
                      tượng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-1-16292245183131807925352.png"
                      alt="1, GAME HAY,GAME,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Cùng với Quake, Counter-Strike, Unreal Tournament là một
                      trong những tựa <strong>game</strong> từng thống trị tại
                      các phòng net một thời. Trước khi Internet được phổ cập
                      thì LAN Party chính là thứ đã kết nối game thủ chúng ta
                      lại với nhau. Có thể nói, trong những trận đấu LAN Unreal
                      Tournament đầy nghẹt thở, cái cảm giác tiêu diệt được đối
                      phương, hay thậm chí là chính đứa bạn thân đang ngồi máy
                      ngay bên cạnh mình vẫn luôn mang đến một cảm giác sung
                      sướng rất khó tả. Vì game này đòi hỏi kỹ năng nhiều nên
                      mỗi khi solo thắng là kiểu gì cũng quay qua cà khịa thằng
                      bạn kế bên. Nhờ những trò như thế này mà đi chơi net mới
                      vui, anh em mới càng gắn bó.
                    </p>
                    <h5>Deus Ex</h5>
                    <p></p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-1-16292245203911259414638.png"
                      alt="2, GAME HAY,GAME,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />

                    <p>
                      Nếu bạn mà chơi được Deus Ex hồi nó mới ra mắt thì chứng
                      tỏ máy bạn hơi bị khỏe đấy. Trước khi Cyberpunk 2077 xuất
                      hiện thì Deus Ex chính là tựa <strong>game</strong> làm
                      cho thể loại này tiếp cận với nhiều người và được yêu mến
                      trên toàn thế giới. Cho bạn nào chưa biết thì tựa game này
                      được bình chọn là Game of The Year trên PC hồi năm 2000.
                      Thế nên về chất lượng thì khỏi phải bàn luôn, từ đồ họa
                      đến gameplay đều thuộc hàng đỉnh trong thời đại của nó.
                    </p>
                    <p></p>
                    <p></p>
                    <p>
                      Hồi mình biết đến Deus Ex thì cũng còn nhỏ xíu, tiếng Anh
                      một chữ bẻ đôi cũng không biết nên chẳng chơi được{" "}
                      <strong>game</strong> này mà ngồi hóng ké ông anh chơi
                      thôi. Trong ký ức của mình thì đây mà một tựa game rất đặc
                      biệt thời đó, không bắn nhau ỳ xèo chí chóe như Serious
                      Sam với Quake, không vĩ mô như Đế Chế, không xô bồ như MU,
                      Deus Ex là một game gì đó rất cao siêu kiểu điệp viên 007
                      kết hợp với những yếu tố viễn tưởng. Bạn có thể tự do hoàn
                      thành nhiệm vụ bằng nhiều cách thức khác nhau, dẫn đến
                      nhiều kết cục tương ứng. Ngoài ra, bạn còn có thể thay
                      đổi, nâng cấp các kỹ năng của nhân vật chính, từ đó "mở ra
                      lối đi riêng" trong các màn chơi hoặc cách thức giao
                      tiếp/thuyết phục những nhân vật khác trong game. Chính vì
                      game phức tạp như thế thế nên nó thường quen thuộc với lứa
                      game thủ đã tương đối lớn thời đầu những năm 2000, chứ 9x
                      như mình thì cũng nhiều bạn không biết.
                    </p>
                    <h5>Serious Sam</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-2-1629224521923501327427.jpg"
                      alt="3, GAME HAY,GAME,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />

                    <RelationNewsInPage category={category} />
                    <p></p>
                    <p>
                      Tựa <strong>game</strong> bắn súng huyền thoại "Sam nghiêm
                      túc" từ lâu đã để lại dấu ấn của mình trong lòng game thủ
                      với lối chơi vui nhộn, đã tay mà đồ họa cũng đẹp mắt tại
                      thời điểm ra đời của nó.{" "}
                    </p>
                    <p>
                      Ấn tượng lớn nhất của mình với tựa <strong>game</strong>{" "}
                      này là hiệu ứng cháy nổ cực kỳ hoành tráng, vũ khí đa dạng
                      và màu sắc cũng rực rỡ khác biệt. Game mang đến cho người
                      chơi cảm giác làm một "anh hùng kiểu Mỹ" đúng nghĩa đi
                      giải cứu thế giới bằng cách quét sạch lũ người ngoài hành
                      tinh xâm lược. Mô-típ tuy không mới nhưng nó kinh điển và
                      cho cảm giác thân quen. Về đồ họa thì Serious Sam thời đó
                      cũng thuộc hàng khủng, trước khi nhưng Far Cry, Doom 4,
                      Battlefield... ra đời và đặt ra tiêu chuẩn mới thì nền đồ
                      họa của Serious Sam đúng là đẹp như mơ.
                    </p>
                    <p></p>
                    <p></p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-3-16292245214232120890423.jpg"
                      alt="4, GAME HAY,GAME,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      <strong>Game</strong> lấy bối cảnh tương lai, khi mà con
                      người lần đầu tiên thực hiện chuyến du hành giữa các vì
                      sao thì họ đã đụng độ với một thế lực thù địch tên là
                      Notorious Mental. Lũ này có mục tiêu là sẽ tàn sát loài
                      người (để cho vui), như chúng đã từng làm với các nền văn
                      minh khác. Bạn sẽ vào vai Sam "Serious" Stone, một lính
                      đặc nhiệm với nhiệm vụ đi lấy thiết bị gọi là Timelock rồi
                      sẽ dùng nó để du hành ngược về thời Ai Cập cổ đại để tiêu
                      diệt Mental trước khi hắn kịp "đẻ trứng". Game có bối cảnh
                      cyberpunk pha trộn với fantasy, cùng với đó là các thiết
                      bị công nghệ cao cũng được "phù phép" với ma thuật và năng
                      lượng đặc biệt. Sam sẽ di chuyển qua các vùng đất khác
                      nhau, từ Ai Cập cổ đại cho đến những hành tinh xa xôi, đối
                      đầu với lũ tay chân hiểm độc của Mental để tấn công vào
                      hang ổ của hắn.
                    </p>
                    <h5>Quake</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-4-16292245208971736271826.jpg"
                      alt="5, GAME HAY,GAME,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p></p>
                    <p></p>
                    <p>
                      Quake năm 1996 là một tựa <strong>game</strong> bắn súng
                      thuộc hàng siêu kinh điển, nó kế thừa những tinh hoa từ 2
                      phần Doom đầu tiên để tạo ra một thế giới 3D thực sự chứ
                      không phải là 2.5D như Doom. Người chơi sẽ vào vai
                      "Ranger", du hành qua các chiều không gian để ngăn chặn
                      thế lực thù địch gọi là Quake. Đối với nhiều game thủ PC
                      đời đầu ở Việt Nam, trước khi có "Hép-lai" huyền thoại thì
                      đây chính là tựa game bắn súng đỉnh nhất, đẹp nhất. Mặc dù
                      sau này các phiên bản của Counter Strike đã làm lu mờ bóng
                      dáng Quake trong ký ức của những thế hệ game thủ Việt về
                      sau nhưng nó vẫn là xịn nhất trong thời đại của nó.
                    </p>
                    <p></p>
                    <p></p>
                    <p>
                      Với đồ họa 3D đẹp mắt, lối chơi đơn giản mà kích thích
                      cùng bối cảnh cuốn hút lấy cảm hứng từ vũ trụ kinh dị của
                      nhà văn Lovecraftian, Quake nhanh chóng được đón nhận trên
                      toàn thế giới. Nó đã rất phổ biến trong giai đoạn cuối
                      những năm 90 và thậm chí là đến tận đầu những năm 2000.
                      Đây có thể xem là tựa <strong>game</strong> đầu tiên đặt
                      quy chuẩn cho chiều không gian thứ 3 trong game. Nó cũng
                      để lại rất nhiều ảnh hưởng cho thể loại game FPS nói riêng
                      và ngành công nghiệp game nói chung.
                    </p>
                    <p></p>
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
