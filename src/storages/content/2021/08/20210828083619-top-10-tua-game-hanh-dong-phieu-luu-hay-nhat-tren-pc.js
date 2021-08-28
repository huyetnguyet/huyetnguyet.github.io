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
"timestamp": '28/08/2021 08:36 AM',
"title": 'Top 10 tựa game hành động phiêu lưu hay nhất trên PC',
"description": 'Nếu anh em là tín đồ của thể loại game phiêu lưu, hành động, khám phá... thì chắc chắn không thể bỏ qua 10 cái tên vô cùng đình đám này rồi.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-1629659807918925258579.jpg',
"alt": 'GAME HAY,GAME ĐỈNH,PHIÊU LƯU,TOP GAME,HÀNH ĐỘNG,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,',
"category": 'games',
"date": '28/08/2021',
"time": '08:36 AM',
"link": '/top-10-tua-game-hanh-dong-phieu-luu-hay-nhat-tren-pc',
"zcomponent": 'page_20210828083619',
"filepath": './20210828083619-top-10-tua-game-hanh-dong-phieu-luu-hay-nhat-tren-pc.js'
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
const title = "Top 10 tựa game hành động phiêu lưu hay nhất trên PC";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "28/08/2021 08:36 AM";
const description =
  "Nếu anh em là tín đồ của thể loại game phiêu lưu, hành động, khám phá... thì chắc chắn không thể bỏ qua 10 cái tên vô cùng đình đám này rồi.";
const link = "top-10-tua-game-hanh-dong-phieu-luu-hay-nhat-tren-pc";
const tagparam = [
  "GAME HAY",
  "GAME ĐỈNH",
  "PHIÊU LƯU",
  "TOP GAME",
  "HÀNH ĐỘNG",
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

export default function page_20210828083619() {
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
                      Với sự phát triển chóng mặt của ngành game, rất nhiều trò
                      chơi đã tận dụng sức mạnh đến từ yếu tố công nghệ,
                      engine... để biến những trò chơi trong thể loại{" "}
                      <strong>phiêu lưu</strong> nhà động thành những bom tấn để
                      đời. Chẳng hạn, trong các tựa game phiêu lưu sẽ mang đến
                      cho game thủ những khung cảnh bạt ngàn đầy huyền ảo cùng
                      những pha <strong>hành động</strong>, diệt trùm vô cùng
                      nghẹt thở.{" "}
                    </p>
                    <p>
                      Dưới đây là top 10 tựa game <strong>hành động</strong>{" "}
                      <strong>phiêu lưu</strong> hay nhất trên PC cho anh em
                      "quẩy quên sầu".
                    </p>
                    <h5>Star War Jedi: Fallen Order</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-1629659807918925258579.jpg"
                      alt="1, GAME HAY,GAME ĐỈNH,PHIÊU LƯU,TOP GAME,HÀNH ĐỘNG,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Nếu nói về một tựa game PC <strong>phiêu lưu</strong>{" "}
                      <strong>hành động</strong>, đồ họa ấn tượng, lấy chủ đề
                      Star War thỏa lòng fan thì Jedi: Fallen Order đang làm rất
                      tốt nhiệm vụ đó. Jedi: Fallen Order không chỉ sở hữu một
                      đồ họa đẹp mắt, mà game còn khéo léo lồng những bản nhạc
                      huyền thoại của Star Wars vào đúng những khung cảnh hoành
                      tráng, khiến người chơi bồi hồi háo hức hệt như khi được
                      đi coi phim ngày nào.
                    </p>
                    <p>
                      Đối với một fan hâm mộ của dòng phim kinh điển này thì
                      không có gì sướng bằng việc được chính tay mình cầm thanh
                      lightsaber đỡ đạn, phản đạn và múa vài đường kiếm đẹp mắt.
                      Trong Jedi: Fallen Order, anh em còn được thoải mái sử
                      dụng các thần lực để tác động lên hầu hết các vật thể trên
                      bản đồ. Chưa hết, bạn còn được cung cấp hẳn một cây kỹ
                      năng để tha hồ "build" nhân vật của mình theo một sở
                      trường nhất định. Đương nhiên bạn vẫn có thể "build" đầy
                      đủ cây kỹ năng cho nhân vật, nhưng để có thể hoàn thành
                      được điều đó trước khi phá đảo game thì hơi khó.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-1629659809591497572375.jpg"
                      alt="2, GAME HAY,GAME ĐỈNH,PHIÊU LƯU,TOP GAME,HÀNH ĐỘNG,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Star War Jedi: Fallen Order lấy bối cảnh diễn ra sau trận
                      chiến Clone War, lúc mà phe bóng tối (The Sith) đã thâu
                      tóm dải Ngân Hà và gieo rắc nỗi kinh hoàng, còn hội đồng
                      Jedi thì bị phá hủy hoàn toàn. Bạn sẽ vào vai Cal, một
                      chàng trai ở cấp độ học viên Jedi đang cố gắng tìm lại sự
                      kết nối của bản thân với thần lực, đồng thời tạo ra những
                      cuộc Cách mạng nhỏ lẻ để giành lại quyền từ phe bóng tối.
                    </p>
                    <h5>Rise of The Tomb Raider</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-2-16296598136731731335719.jpg"
                      alt="3, GAME HAY,GAME ĐỈNH,PHIÊU LƯU,TOP GAME,HÀNH ĐỘNG,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Người chơi sẽ vào vai nhân vật chính có tên là Lara Croft,
                      một nhà khảo cổ học mạo hiểm cả tính mạng của bản thân cho
                      niềm đam mê đi tìm và khám phá những ngôi mộ cổ, những kho
                      báu và hiện vật quý hiếm. Tuy nhiên, khác với những kẻ độc
                      ác tham lam chỉ muốn chiếm lấy hết tất cả những báu vật đó
                      cho riêng mình, Lara Croft lại muốn tìm hiểu, học và bảo
                      quản những ngôi mộ cổ này hơn.
                    </p>
                    <p>
                      Do Rise of The Tomb Raider lấy bối cảnh thám hiểm ở những
                      vùng đất xa lạ, rừng rú và hiểm trở nên gameplay cũng vì
                      thế mà chông chênh theo. Cụ thể hơn thì bạn sẽ phải tập
                      trung vào kỹ năng leo trèo, ẩn nấp, ám sát lẫn "combat
                      tổng". Nghe thì có vẻ hơi lộn xộn nhiều thứ, nhưng đây lại
                      là điểm hay của series game PC <strong>hành động</strong>{" "}
                      này.
                    </p>
                    <p>
                      Nếu là một người thích khám phá, thích cảm giác parkour
                      mạnh, mạo hiểm, leo trèo lên những vách núi, tòa nhà cứ
                      ngỡ như con người sẽ chẳng bao giờ làm được; hay{" "}
                      <strong>hành động</strong> lén lút đúng thời điểm và xông
                      pha "combat tổng" lúc cần thì đây là một tựa game mà bạn
                      không nên bỏ qua. Đặc biệt là nhân vật chính của game rất
                      "hot" nữa.
                    </p>
                    <h5>Grand Theft Auto V (GTA 5)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-3-16296598131671618473193.jpg"
                      alt="4, GAME HAY,GAME ĐỈNH,PHIÊU LƯU,TOP GAME,HÀNH ĐỘNG,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Đây là một tựa game PC hay, có yếu tố{" "}
                      <strong>phiêu lưu</strong> <strong>hành động</strong> giật
                      gân lấy bối cảnh thành phố hiện đại, cho phép tự do làm
                      hầu hết tất cả mọi thứ bạn muốn, trừ tông đổ cây và chặn
                      xe lửa. Nếu như bạn đang tìm kiếm một tựa game hành động
                      nhưng không thích yếu tố rừng rú như Tomb Raider thì GTA 5
                      phải thử ít nhất một lần.
                    </p>

                    <p>
                      Thử hỏi có bao nhiêu tựa game cho phép bạn lái xe tự do
                      băng qua những con phố trên toàn bản đồ, chơi bời trong
                      những câu lạc bộ dành cho người lớn, phi máy bay lên cao
                      rồi nhảy tự do xuống dưới, bơi ngoài biển và săn cá mập
                      bằng dao, làm đủ trò thậm chí gây hỗn loạn cấp độ phá hoại
                      toàn thành phố để thách thức tội danh 5 sao... vân vân. Để
                      liệt kê hết những thứ mà bạn có thể làm trong GTA V thì
                      chắc phải tốn cả trang giấy A4 mất.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p></p>
                    <p></p>
                    <p>
                      Ngoài ra, game còn cho phép bạn thay đổi tùy ý góc nhìn
                      thứ 3 để nhìn bao quát hơn vẻ đẹp của đồ họa game, và góc
                      nhìn thứ nhất để tăng độ kịch tính khi giao tranh, đọ
                      súng. Bên cạnh gameplay vô cùng hoành tráng đó thì GTA V
                      còn sở hữu một cốt truyện dễ gây nghiện khi mang đến một
                      cảm giác cực kỳ mới lạ nhờ tính năng cho phép chuyển đổi
                      qua lại giữa 3 nhân vật chính với 3 tính cách khác nhau.
                    </p>
                    <h5>Days Gone</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-5-1629659812142465424317.png"
                      alt="6, GAME HAY,GAME ĐỈNH,PHIÊU LƯU,TOP GAME,HÀNH ĐỘNG,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Days Gone là tựa game <strong>hành động</strong>{" "}
                      <strong>phiêu lưu</strong> ra mắt trên PC và PS4, lấy bối
                      cảnh hậu tận thế khi đại dịch zombie đã lan rộng khắp vùng
                      đất hoang dã của nước Mỹ. Cốt truyện game xoay quanh một
                      anh chàng lái xe đơn độc đi lang thang trên những con
                      đường quanh co của vùng Oregon sau khi trận dịch bùng phát
                      và lấn át sự sống. Với bản đồ game rất rộng với kích thước
                      gần 22,5 km vuông, bạn cứ yên tâm rằng cảm giác phóng xe
                      hàng giờ từ khu vực này đến khu vực khác sẽ không bao giờ
                      thấy chán. Tuy nhiên, bạn cũng cần lưu ý là game có cơ chế
                      phải đổ xăng khi hết bình đấy.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-4-1629659812656829532964.jpg"
                      alt="5, GAME HAY,GAME ĐỈNH,PHIÊU LƯU,TOP GAME,HÀNH ĐỘNG,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Cơ chế gameplay của Days Gone mang tính thực tế, cốt
                      truyện về đại dịch zombie tạo cảm giác đầy kịch tính, pha
                      trộn với đó là một thế giới rộng lớn dù nguy hiểm nhưng
                      rất đẹp. Tất cả đã khiến cho Days Gone trở thành một tựa
                      game <strong>phiêu lưu</strong> thế giới mở được game thủ
                      PC săn đón ngay khi hết độc quyền trên PS4.
                    </p>
                    <h5>Watch Dogs: Legion</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Với việc thêm cơ chế hack và làm cho bối cảnh tại Anh được
                      hoàn thiện một cách sắc sảo hơn, Watch Dogs: Legion đã
                      khắc họa quận Brixton, London theo một cách rất đặc biệt,
                      rất riêng và rất trọn vẹn. Trong game, người chơi có thể
                      hack đủ thứ: Từ camera, cửa ra vào, cho đến xe cộ, đèn báo
                      hiệu. Muốn tạo ra một cuộc hỗn loạn trong Legion bạn chỉ
                      việc hack một chiếc xe rồi lái nó đâm toán loạn là xong.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-6-1629659811667199384128.png"
                      alt="7, GAME HAY,GAME ĐỈNH,PHIÊU LƯU,TOP GAME,HÀNH ĐỘNG,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Trường hợp bạn "cao tay hơn" thì có thể dùng một con robot
                      nhện để tấn công và chích điện vào mặt một nhà thầu quân
                      sự sau khi nhắn tin tống tiền hắn ta... Nói chung bạn càng
                      sáng tạo trong trò này thì nó sẽ càng vui và thú vị. Nếu
                      bạn yêu thích dòng game huyền thoại GTA nhưng muốn có thêm
                      yếu tố <strong>hành động</strong> công nghệ cao, làm
                      hacker "hi-tech" các kiểu thì chắc chắn không thể bỏ qua
                      tựa game hành động Watch Dog 2 trên PC rồi đó.
                    </p>
                    <p></p>
                    <p>
                      Top 10 tựa game <strong>hành động</strong>{" "}
                      <strong>phiêu lưu</strong> hay nhất trên PC (P.1)
                    </p>
                    <p>Nguồn Game Rant biên dịch GVN360</p>
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
