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
"timestamp": '02/08/2021 01:18 AM',
"title": 'Top 10 tựa game PC những năm 2000 với đồ họa đỉnh cao làm game thủ mãi nhớ (P.2)',
"description": 'Những ấn tượng không thể nào quên với các anh em game thủ 8x 9x một thời.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-1-1627755900498830370556.png',
"alt": 'GAME,GAME HAY,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,ĐỒ HỌA GAME,',
"category": 'games',
"date": '02/08/2021',
"time": '01:18 AM',
"link": '/top-10-tua-game-pc-nhung-nam-2000-voi-do-hoa-dinh-cao-lam-game-thu-mai-nho-p2',
"zcomponent": 'page_20210802011803',
"filepath": './20210802011803-top-10-tua-game-pc-nhung-nam-2000-voi-do-hoa-dinh-cao-lam-game-thu-mai-nho-p2.js'
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
  "Top 10 tựa game PC những năm 2000 với đồ họa đỉnh cao làm game thủ mãi nhớ (P.2)";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "02/08/2021 01:18 AM";
const description =
  "Những ấn tượng không thể nào quên với các anh em game thủ 8x 9x một thời.";
const link =
  "top-10-tua-game-pc-nhung-nam-2000-voi-do-hoa-dinh-cao-lam-game-thu-mai-nho-p2";
const tagparam = [
  "GAME",
  "GAME HAY",
  "GAME ĐỈNH",
  "CỘNG ĐỒNG MẠNG",
  "TIN TỨC GAME",
  "ĐỒ HỌA GAME",
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

export default function page_20210802011803() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Có thể nói, những năm 2000 là thời kỳ hoàng kim của làng{" "}
                    <strong>game</strong> PC, đánh dấu sự chuyển mình trong
                    nhiều khía cạnh khác nhau. Và một trong số những điểm nhấn
                    dễ thấy nhất chính là phần đồ họa. Nó không chỉ đưa PC
                    gaming lên một tầm cao mới mà còn giúp tạo ra những trò chơi
                    với hình ảnh rất ấn tượng vào thời bấy giờ, từ đó làm tiền
                    đề để phát triển các series siêu đình đám sau này.
                  </p>
                  <p>
                    Để cùng nhìn lại chặng đường đầy huy hoàng này, mời các bạn
                    cùng điểm qua top 10 tựa <strong>game</strong> PC những năm
                    2000 với đồ họa đỉnh cao làm game thủ mãi nhớ.
                  </p>
                  <h5>BioShock (2007)</h5>
                  <p>
                    Tựa <strong>game</strong> BioShock nói riêng và dòng game
                    này nói chung hẳn cũng đã quá nổi tiếng trong làng game luôn
                    rồi. Bên cạnh vô vàn lời khen ngợi về cơ chế bắn súng góc
                    nhìn thứ nhất và một số yếu tố nhập vai... thì đây còn là
                    một trong những tựa game PC được ca tụng nhờ có phong cách
                    đồ họa retro vô cùng đặc sắc vào những năm 2000.
                  </p>{" "}
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-1-1627755900498830370556.png"
                    alt="1, GAME,GAME HAY,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,ĐỒ HỌA GAME,"
                    note=""
                  />
                  <p>
                    Cụ thể ở đây là bối cảnh thành phố Rapture dưới đại dương
                    sâu thẳm. Rapture được thiết kế như là một thiên đường,
                    nhưng đến khi người chơi đặt chân xuống đây thì nó không còn
                    giống với ánh hào quang ngày xưa nữa.
                  </p>
                  <p>
                    Chính xác thì nó chỉ còn là những tàn tích, là hậu quả của
                    sự tham nhũng và lòng tham của con người nơi đây. Ngay từ
                    lúc đi thang máy xuống Rapture, khi vừa mới bước ra ngoài
                    thì đập vào mắt người chơi là một cảnh tượng vô cùng ghê
                    rợn, nổi da gà. Bằng cách phối hợp tông màu u ám cộng với
                    các căn phòng, khu hành lang lạnh tanh, BioShock đã khiến
                    người chơi phải rùng mình mỗi khi tiến sâu vào Rapture.
                    Ngoài ra, kẻ địch cũng được thiết kế rất độc đáo, chẳng hạn
                    như Big Daddy đã khiến không ít <strong>game</strong> thủ
                    "điếng người" với vẻ ngoài rất đáng sợ. Nhìn chung, đây là
                    một bức phông nền hoàn hảo cho câu chuyện sắp diễn ra trong
                    BioShock.
                  </p>
                  <h5>Gears of War (2006)</h5>
                  <p>
                    Đây là phát súng đầu tiên của series Gears of War đình đám,
                    được phát triển bởi Epic <strong>Game</strong> (Xbox 360) và
                    People Can Fly (PC) vào những năm 2000. Nhờ có tựa game này
                    mà cơ chế núp bắn góc nhìn thứ ba mới được phổ biến rộng
                    rãi, bổ sung yếu tố chiến thuật vào thể loại bắn súng. Song
                    song đó, vì đây là tựa game đầu tiên (trên Xbox 360) được
                    thiết kế bằng Unreal Engine 3 trứ danh nên nó còn được đánh
                    giá cao về mảng đồ họa.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-2-1627755902546639914516.png"
                    alt="2, GAME,GAME HAY,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,ĐỒ HỌA GAME,"
                    note=""
                  />
                  <p>
                    Với Unreal Engine 3, Epic <strong>Game</strong>s đã xây dựng
                    được bối cảnh hoang tàn tại hành tinh Sera – nơi đang diễn
                    ra cuộc chiến giữa loài người với lũ quái vật dưới lòng đất
                    Locust. Các chi tiết texture bề mặt, những biểu cảm trên
                    khuôn mặt nhân vật tuy không quá xuất sắc nhưng nó vẫn là
                    một bước phát triển vượt bậc tại thời điểm đó. Ngoài ra, nó
                    cũng làm rất tốt nhiệm vụ của mình: Tạo dựng cảnh quan u ám,
                    xám xịt của cuộc chiến. Và kẻ địch cũng được thiết kế khá là
                    tỉ mỉ, nhất là con quái vật Brumak khổng lồ với khẩu đại bác
                    trên lưng khiến không ít người chơi phải hoảng hồn khi chạm
                    trán lần đầu. Tất cả các yếu tố này đã phối hợp với nhau để
                    tạo một trải nghiệm khó phai trong tâm trí game thủ.
                  </p>
                  <h5>Mirror's Edge (2008)</h5>
                  <p>
                    Mirror's Edge là một tựa <strong>game</strong> hành động -
                    phiêu lưu lấy bối cảnh tại một thành phố trong tương lai.
                    Bên cạnh cơ chế parkour đầy thú vị, khiến biết bao game thủ
                    vô cùng phấn khích khi được điều khiển Faith Connors vượt
                    chướng ngại vật, thì game còn có phong cách đồ họa rất độc
                    đáo các bạn ạ. Đúng là nhìn nó đơn giản đó, khá ít chi tiết
                    và chỉ có một vài màu sắc chủ đạo thôi, nhưng đây cũng chính
                    là điểm "ăn tiền" của Mirror's Edge.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-3-16277559020241018633864.png"
                    alt="3, GAME,GAME HAY,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,ĐỒ HỌA GAME,"
                    note=""
                  />
                  <p>
                    Vì parkour đòi hỏi bạn phải luôn di chuyển nên đồ họa đã
                    được DICE tinh giản bớt, giúp bạn dễ quan sát và tính toán
                    đường đi nước bước hơn. Chẳng hạn, màu trắng là màu trung
                    tính nên nó được gán cho những món đồ vật không có tác dụng
                    cụ thể; màu đỏ thì gây sự chú ý lên nó sẽ được tô cho cánh
                    cửa, ống nước để bạn biết đó là nơi mình cần phải đến; gam
                    màu lạnh thì được dùng cho những nơi tối tăm, ẩm thấp để tạo
                    sự lạnh lẽo. Cái hay của DICE ở đây là họ rất biết cách pha
                    trộn các màu sắc này với các tỷ lệ tương ứng, tạo sự hài hòa
                    trong khung cảnh. Đây là một trong những tựa{" "}
                    <strong>game</strong> PC ra mắt vào những năm 2000 có thiết
                    kế đơn giản nhưng cực kỳ hiệu quả.
                  </p>
                  <RelationNewsInPage category={category} />
                  <h5>Diablo 2 (2000)</h5>
                  <p>
                    2 phần đầu của series Diablo đều là những huyền thoại trong
                    lòng <strong>game</strong> thủ Việt hồi đầu những năm 2000.
                    Tuy nhiên có lẽ phần thứ 2 là phần nổi tiếng nhất. Diablo 2
                    đã tồn tại trong suốt 12 năm cho đến khi Diablo 3 xuất hiện.
                    Đó là một quãng thời gian đủ dài để khắc ghi những ấn tượng
                    sâu sắc vào lòng những thế hệ game thủ biết đến series này
                    trong những năm 2000.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-4-16277559015581280739540.jpg"
                    alt="4, GAME,GAME HAY,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,ĐỒ HỌA GAME,"
                    note=""
                  />
                  <p>
                    Diablo 2 có lối chơi cực kỳ gây nghiện với những màn chặt
                    chém tung chưởng đã tay đã mắt, cốt truyện cuốn hút đến lạ
                    kỳ và đồ họa cực kỳ đẹp mắt đã chinh phục trái tim của nhiều
                    thế hệ <strong>game</strong> thủ Việt. Có thể bây giờ nhìn
                    lại thì Diablo 2 trông rất "cổ" nhưng đối với thời điểm năm
                    2000 thì đồ họa 2.5D là một thứ gì đó rất đẹp, rất lạ nhưng
                    vẫn tối ưu phần cứng cực kỳ tốt, PC không quá mạnh vẫn có
                    thể chơi được. Có lẽ đó cũng là một trong những lý do khiến
                    tựa game này thành công đến vậy.
                  </p>
                  <h5>Doom 3 (2004)</h5>
                  <p>
                    Tựa <strong>game</strong> Doom đầu tiên hồi năm 1993 là một
                    trong những huyền thoại đã góp phần vẽ nên thế giới game
                    hiện đại. Doom 3 tuy không quá nổi tiếng như bản đầu tiên,
                    cũng không được game thủ yêu thích như bản reboot hồi năm
                    2016 nhưng nó vẫn được biết đến như là một trong những tựa
                    game PC đẹp nhất hồi những năm 2000.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-5-1627755901020878901303.jpg"
                    alt="5, GAME,GAME HAY,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,ĐỒ HỌA GAME,"
                    note=""
                  />
                  <p>
                    Không như 2 phần mới nhất của series, nơi mà bạn một mình
                    cân cả thế giới, <strong>game</strong>play Doom 3 thì có
                    chút nghiêm túc hơn. Chủ yếu là bạn sẽ đi loanh quanh trong
                    một cái trạm vũ trụ trên sao hỏa để bắn quái và khám phá cốt
                    truyện của game. Đồ họa trong game thì phải nói là đỉnh cao
                    thiên hạ, lúc mới ra thì đồ họa của Doom 3 có thể xem là đẹp
                    nhất và sát phần cứng nhất thế giới game luôn. Crysis đẹp
                    như thế nào vào năm 2007 thì Doom 3 cũng đẹp cỡ đó vào năm
                    2004. Nếu bạn chỉ mới chơi những phần mới nhất thì mình nghĩ
                    có lẽ bạn nên trải nghiệm tựa game này xem sao. Nó sẽ là một
                    tựa game Doom lạ lẫm mà bạn chưa hề biết.
                  </p>
                  <h5>Far Cry (2004)</h5>
                  <p>
                    Far Cry là huyền thoại và là khởi đầu của một dòng{" "}
                    <strong>game</strong> siêu kinh điển. Trước khi "sát thủ
                    phần cứng" Crysis xuất hiện thì đây chính là tựa game đẹp
                    nhất và cũng nặng nhất của studio Crytek. Đương nhiên tựa
                    game này cũng là thách thức lớn cho những dàn PC những năm
                    2000. Tuy nhiên bù lại một khi mà máy đã cân nổi game thì
                    bạn sẽ được thấy một hòn đảo nhiệt đới xinh đẹp xanh mát,
                    nước biển sóng sánh đẹp mê hồn, chỉ hơi tiếc là bạn lên đó
                    để đi bắn người chứ không phải để nghỉ dưỡng thôi.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-6-1627755901037599839310.jpg"
                    alt="6, GAME,GAME HAY,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,ĐỒ HỌA GAME,"
                    note=""
                  />
                  <p>
                    <strong>Game</strong> sẽ cho bạn vào vai một cực đặc nhiệm
                    xâm nhập vào một hòn đảo để làm nhiệm vụ, đồng thời khám phá
                    bí mật về những thí nghiệm điên rồ ở đó. Game cũng cho phép
                    bạn tận dụng các yếu tố địa hình để tiêu diệt kẻ thù giúp
                    lối chơi thêm phần tự do, lý thú. Ngoài ra thì bạn sẽ còn có
                    cả một kho vũ khí hay ho mà mỗi món đều mang lại những trải
                    nghiệm khác nhau để bạn chơi tha hồ.
                  </p>
                  <h5>[BONUS] Call of Duty 4: Modern Warfare (2007)</h5>
                  <p>
                    Vào thời điểm năm 2007, khi bản gốc ra mắt thì bản thân Call
                    of Duty 4: Modern Warfare đã sở hữu đồ họa mang tính đột
                    phá. Thậm chí, có thể nói đây là một trong những tựa{" "}
                    <strong>game</strong> PC đáng chú ý nhất trong những năm
                    2000 các bạn ạ.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/1/photo-7-16277559020521421108819.png"
                    alt="7, GAME,GAME HAY,GAME ĐỈNH,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,ĐỒ HỌA GAME,"
                    note=""
                  />
                  <p>
                    Nhờ sử dụng engine IW 3.0 với các tính năng cải thiện ánh
                    sáng, hiệu ứng HDR, hiệu ứng đổ bóng giúp môi trường trong{" "}
                    <strong>game</strong> trở nên thuyết phục hơn, khốc liệt
                    hơn. Ngoài ra, đường đạn cũng được tính toán bằng engine với
                    các yếu đố như loại bề mặt, độ dày bề mặt nên mỗi phát đạn
                    bắn ra đều mang lại cảm giác rất thật.
                  </p>
                  <p>
                    Những thứ như xe hơi và một số công trình cũng có thể bị phá
                    vỡ, càng làm tăng sự sống động trong <strong>game</strong>{" "}
                    này. Ngoài ra, khi kẻ địch bị bắn chết hoặc đứng gần lựu đạn
                    thì xác của chúng cũng cử động tương ứng theo đường đạn, vụ
                    nổ, tạo cảm giác y như một chiến trường thật sự chứ không
                    chỉ đơn thuần là một tựa game bắn súng nữa. Nhờ mang đến một
                    trải nghiệm hoàn toàn khác lạ so với các tựa game bắn súng
                    trước đó, cũng không quá bất ngờ khi Call of Duty 4: Modern
                    Warfare giành được hàng loạt giải thưởng danh giá vào thời
                    điểm đó.
                  </p>
                  <p>Theo GVN360</p>
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
