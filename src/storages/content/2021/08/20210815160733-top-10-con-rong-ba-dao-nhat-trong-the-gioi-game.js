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
"timestamp": '15/08/2021 04:07 PM',
"title": 'Top 10 con rồng bá đạo nhất trong thế giới game',
"description": 'Cứ nghe đến loài rồng thì hầu hết toàn hàng khủng...',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16290513431851012562286.jpg',
"alt": 'RỒNG,LỊCH SỬ,GAME,LÀNG GAME,THẾ GIỚI GAME,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,',
"category": 'games',
"date": '15/08/2021',
"time": '04:07 PM',
"link": '/top-10-con-rong-ba-dao-nhat-trong-the-gioi-game',
"zcomponent": 'page_20210815160733',
"filepath": './20210815160733-top-10-con-rong-ba-dao-nhat-trong-the-gioi-game.js'
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
const title = "Top 10 con rồng bá đạo nhất trong thế giới game";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "15/08/2021 04:07 PM";
const description = "Cứ nghe đến loài rồng thì hầu hết toàn hàng khủng...";
const link = "top-10-con-rong-ba-dao-nhat-trong-the-gioi-game";
const tagparam = [
  "RỒNG",
  "LỊCH SỬ",
  "GAME",
  "LÀNG GAME",
  "THẾ GIỚI GAME",
  "TIN TỨC GAME",
  "CỘNG ĐỒNG MẠNG",
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

export default function page_20210815160733() {
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
                      Nghe tới chữ <strong>rồng</strong> thôi là nhiều bạn đã
                      bắt đầu cảm thấy hào hứng rồi. Trong <strong>game</strong>
                      , chúng có thể là những con quái vật đáng sợ, hoặc là một
                      loài cực kỳ thông minh chỉ đường dẫn lối cho người chơi.
                      Ngoài ra, chúng cũng có tính cách, kích thước, nguồn gốc
                      rất đa dạng. Bạn có thể bắt gặp một chú rồng bước ra từ
                      câu chuyện thần thoại của Trung Quốc, Nhật Bản; hoặc thậm
                      chí là một con rồng với hình thù khác lạ cùng sức mạnh
                      huyền bí tới từ phương Tây. Để có cái nhìn chi tiết hơn,
                      mời các bạn điểm qua top 10 con rồng bá đạo nhất trong{" "}
                      <strong>thế giới game</strong> nhé.
                    </p>
                    <h5>Grim Matchstick - Cuphead</h5>
                    <p>
                      Có thể nói, một trong những trận đánh gây ám ảnh nhất cho{" "}
                      <strong>game</strong> thủ khi chơi Cuphead chính là phải
                      đối mặt với con <strong>rồng</strong> Grim Matchstick. Bởi
                      lẽ các yếu tố trong trận đánh này đều diễn ra một cách
                      ngẫu nhiên, chính vì thế kỹ năng ghi nhớ hành động của đối
                      phương đã giúp bạn vượt qua được những con trùm trước đó
                      gần như trở nên vô dụng khi đấu với con rồng này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16290513431851012562286.jpg"
                      alt="1, RỒNG,LỊCH SỬ,GAME,LÀNG GAME,THẾ GIỚI GAME,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Một yếu tố khác khiến cho <strong>game</strong> thủ gặp
                      nhiều khó khăn khi đấu với Grim Matchstick đó là vùng
                      không gian mà bạn có thể đứng lên. Do{" "}
                      <strong>rồng</strong> thì biết bay, nên nếu bạn muốn chiến
                      thắng thì phải ở độ cùng độ cao với nó. Trong trường hợp
                      này thì đó chính là những đám mây. Các đám mây này di
                      chuyển liên tục và đương nhiên vị trí của nó cũng ngẫu
                      nhiên nên bạn vừa phải cẩn trọng né tránh các đòn đánh của
                      Grim Matchstick, vừa phải chú ý chỗ đứng của mình để tránh
                      trường hợp nhảy hụt và té xuống dưới.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16290513445241735829928.jpg"
                      alt="2, RỒNG,LỊCH SỬ,GAME,LÀNG GAME,THẾ GIỚI GAME,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Ngoài ra, Grim Matchstick có rất nhiều kỹ năng. Và một lần
                      nữa, tất cả các kỹ năng này cũng được tung ra ngẫu nhiên.
                      Trong số đó có một vài kỹ năng mà bạn sẽ rất khó tránh nếu
                      như các đám mây không ở đúng vị trí bạn cần để nhảy qua.
                      Mặc dù trận đánh này sẽ khiến nhiều bạn cảm thấy nản,
                      nhưng một khi đã thắng được rồi thì cảm xúc vỡ òa chắc
                      chắn sẽ khiến bạn thỏa mãn
                    </p>
                    <h5>Ender Dragon - Minecraft</h5>
                    <p>
                      Lần đầu tiên khi con <strong>rồng</strong> Ender được giới
                      thiệu trong <strong>game</strong> Minecraft, rất nhiều
                      game thủ đã thắc mắc rằng liệu hành động này của nhà phát
                      triển có thật sự cần thiết. Lý do là vì Minecraft không
                      phải là một tựa game cần đến những trận đánh trùm cuối
                      hoành tráng, hay một cái kết game đầy ý nghĩa do đây là
                      một tựa game thế giới mở, tự do và đầy sáng tạo.{" "}
                    </p>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-2-1629051345014475984737.jpg"
                      alt="3, RỒNG,LỊCH SỬ,GAME,LÀNG GAME,THẾ GIỚI GAME,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, khi <strong>rồng</strong> Ender chính thức được
                      thêm vào <strong>game</strong> thì người chơi lập tức nhận
                      ra đây là một ý tưởng tuyệt vời. Bởi thêm một con trùm
                      cuối sẽ tạo động lực hơn cho người chơi để đi khám phá tất
                      cả các khía cạnh, địa điểm mà Minecraft đang có.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-3-16290513460772093487941.jpg"
                      alt="4, RỒNG,LỊCH SỬ,GAME,LÀNG GAME,THẾ GIỚI GAME,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Bạn có thể chơi <strong>game</strong> mà không cần phải
                      đánh <strong>rồng</strong> Ender. Với lại có rất nhiều
                      cách để bạn có thể tới được địa điểm của con rồng này nên
                      người chơi cũng không cần phải vội vã gì. Chỉ khi nào bạn
                      thật sự sẵn sàng thì hãy tới, rồng Ender sẽ luôn đợi bạn
                      mà không hề càu nhàu một câu. Cuộc đấu với rồng Ender đã
                      được cập nhật trong nhiều năm qua, nên nhiệm vụ của bạn
                      bây giờ không chỉ đơn giản là tiêu diệt con rồng nữa mà
                      bạn còn phải phá hủy các viên pha lê xung quanh trong khi
                      con rồng này liên tục tấn công bạn.
                    </p>
                    <h5>Deathwing - World of Warcraft: Cataclysm</h5>
                    <p>
                      Là một nhân vật phản diện chính trong phần mở rộng thứ 3
                      của World of Warcraft (World of Warcraft: Cataclysm),{" "}
                      <strong>rồng</strong> Deathwing sẽ là một trong những con
                      trùm đáng sợ nhất mà bạn sẽ đối mặt. Deathwing từng là một
                      trong năm thành viên của Dragon Aspects và là thủ lĩnh của
                      Black Dragon. Tuy nhiên, sau khi đi ngao du với các Old
                      God để rồi bị nhiễm những tư tưởng xấu xa và trở nên phát
                      điên, Deathwing bắt đầu chống lại tất các Aspects khác.
                    </p>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-4-16290513465831410342950.jpg"
                      alt="5, RỒNG,LỊCH SỬ,GAME,LÀNG GAME,THẾ GIỚI GAME,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Nếu như bạn không hiểu những gì mà mình vừa nói bên trên
                      thì có thể hiểu đơn giản Deathwing là một con{" "}
                      <strong>rồng</strong> cực kỳ ngầu và đáng sợ nhưng lại
                      "gần mực thì đen" nên trở thành một con trùm trong World
                      of Warcraft. Trận chiến với con rồng Deathwing có thể coi
                      là một trong những trận chiến hay nhất trong{" "}
                      <strong>game</strong>. Mặc dù nhịp điệu trận đánh cực kỳ
                      căng thẳng và khó khăn nhưng đổi lại thì chơi rất vui.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-5-16290513445441717987573.jpg"
                      alt="6, RỒNG,LỊCH SỬ,GAME,LÀNG GAME,THẾ GIỚI GAME,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <h5>
                      Dinraal, Naydra, và Farosh - The Legend of Zelda: Breath
                      of the Wild
                    </h5>
                    <p>
                      The Legend of Zelda không thiếu <strong>rồng</strong> các
                      bạn ạ. Người chơi có thể bắt gặp những con như Aquamentus,
                      Stallord, Gleeok... nhưng có lẽ xịn nhất trong số đó là
                      Dinraal, Naydra và Farosh trong phần Breath of the Wild.{" "}
                    </p>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-6-162905134555994700678.jpg"
                      alt="7, RỒNG,LỊCH SỬ,GAME,LÀNG GAME,THẾ GIỚI GAME,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Thay vì trở thành những con trùm mà bạn phải đối đầu trên
                      hành trình, những con <strong>rồng</strong> này lại là
                      sinh vật linh thiêng, nếu bạn không xem trước hướng dẫn
                      thì chỉ có "nhân phẩm" mới giúp bạn bắt gặp được những con
                      rồng này đang bay trên bầu trời của Hyrule mà thôi.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Bình thường chúng sẽ không tấn công nhân vật chính, chỉ
                      khi nào Link tiến lại gần mà không có sự chuẩn bị trước
                      thì mới bị "aura" của nó gây damage thôi. Nếu muốn lấy
                      những món đồ quý giá từ mấy con <strong>rồng</strong>{" "}
                      trong <strong>game</strong> thì chúc bạn may mắn nhé. Vì
                      bạn phải có trình độ bắn cung thật chuẩn xác hoặc phải tìm
                      cách leo lên ngọn đồi cao. Còn nếu có ý định đánh bại
                      chúng thì cũng nên... từ bỏ, vì chúng mạnh khủng khiếp nên
                      bạn không cùng đẳng cấp với nó đâu. Bạn vẫn có thể tấn
                      công nó để rớt ra những món đồ xịn, nhưng bản thân chúng
                      sẽ chẳng hề hấn gì cả.
                    </p>
                    <h5>Bub và Bob - Bubble Bobble</h5>
                    <p>
                      Nghe tên thì có vẻ lạ, nhưng nhìn hình thì thế nào cũng sẽ
                      có nhiều bạn nhận ra 2 con <strong>rồng</strong> dễ thương
                      này. Đây là 2 nhân vật chính trong series Bubble Bobble
                      nổi tiếng. Nếu tính luôn cả những phiên bản spin-off thì
                      dòng <strong>game</strong> này có đến 46 tựa game lận đó.{" "}
                    </p>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-7-1629051345051290943329.jpg"
                      alt="8, RỒNG,LỊCH SỬ,GAME,LÀNG GAME,THẾ GIỚI GAME,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Quay trở lại chủ đề chính thì Bub là con{" "}
                      <strong>rồng</strong> màu xanh lá cây, còn Bob là con rồng
                      màu xanh dương và đây là 2 anh em sinh đôi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/-16290513450732103430905.jpg"
                      alt="9, RỒNG,LỊCH SỬ,GAME,LÀNG GAME,THẾ GIỚI GAME,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Bub và Bob là 2 con <strong>rồng</strong> rất đặc biệt so
                      với những con rồng mà bạn thường bắt gặp trong những{" "}
                      <strong>game</strong> khác. Chúng vừa vui nhộn, vừa đáng
                      yêu, có siêu năng lực biến kẻ địch thành bong bóng rồi làm
                      bể bong bóng đó để tiêu diệt chúng. Hoặc quen thuộc hơn
                      với game thủ Việt thì có trò điện tử thùng Puzzle Bobble
                      mà chúng ta hay gọi là trò bắn bong bóng ấy. Bub và Bob sẽ
                      đứng phía dưới màn hình, nạp những chiếc bong bóng với đủ
                      màu sắc cho bạn bắn lên phía trên và ghi điểm. Nhìn đơn
                      giản vậy thôi chứ thời đó trò này bao "hot" ở mấy tiệm
                      điện tử thùng luôn.
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
