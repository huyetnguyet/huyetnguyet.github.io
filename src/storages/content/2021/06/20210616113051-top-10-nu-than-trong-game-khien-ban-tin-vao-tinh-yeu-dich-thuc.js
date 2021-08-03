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
"timestamp": '16/06/2021 11:30 AM',
"title": 'Top 10 nữ thần trong game khiến bạn tin vào tình yêu đích thực',
"description": 'Đắm chìm trong cả thế giới ảo lẫn nhan sắc của các vị nữ thần...',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/14/photo-1-16236834372831875923547.jpg',
"alt": 'Game, Nu Than, Cong Dong Mang, Game Dinh, Tin Tuc Game, ',
"category": 'games',
"date": '16/06/2021',
"time": '11:30 AM',
"link": '/top-10-nu-than-trong-game-khien-ban-tin-vao-tinh-yeu-dich-thuc',
"zcomponent": 'page_20210616113051',
"filepath": './20210616113051-top-10-nu-than-trong-game-khien-ban-tin-vao-tinh-yeu-dich-thuc.js'
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
const title = "Top 10 nữ thần trong game khiến bạn tin vào tình yêu đích thực";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "16/06/2021 11:30 AM";
const description =
  "Đắm chìm trong cả thế giới ảo lẫn nhan sắc của các vị nữ thần...";
const link = "top-10-nu-than-trong-game-khien-ban-tin-vao-tinh-yeu-dich-thuc";
const tagparam = [
  "game",
  "nu-than",
  "cong-dong-mang",
  "game-dinh",
  "tin-tuc-game",
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

export default function page_20210616113051() {
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
                      Có rất nhiều lý do để nhà phát triển đưa các vị thần vào
                      trong <strong>game</strong> của mình, nhưng dù mục đích là
                      gì đi chăng nữa thì sự xuất hiện của các vị thần cũng đều
                      khiến cốt truyện rẽ sang một hướng khác. Trong đó, nữ thần
                      tình yêu cũng xuất hiện không ít lần. Có game thì lấy ý
                      tưởng từ những câu chuyện thần thoại, có game thì tự sáng
                      tạo ra thần tình yêu cho riêng mình. Sau đây là top 10 nữ
                      thần trong game khiến bạn tin vào tình yêu đích thực.
                    </p>
                    <h3>Mythal – Dragon Age</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/14/photo-1-16236834372831875923547.jpg"
                      alt="1Game, Nu Than, Cong Dong Mang, Game Dinh, Tin Tuc Game, "
                      note=""
                    />
                    <p>
                      Mythal là một thành viên trong ngôi đền của tộc elf (gọi
                      là Evanuris) tại Thedas. Dalish – những vị thần elf với
                      nhiệm vụ duy trì truyền thống văn hóa – đã tôn thờ Mythal
                      như là nữ thần của tình yêu, tình mẫu tử và công lý. Nữ
                      thần trong <strong>game</strong> Dragon Age được biết đến
                      với nhiều cái tên khác nhau, bao gồm cả danh hiệu "Người
                      bảo vệ" và "Thánh mẫu của muôn loài".
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/14/photo-1-1623683445013276536067.png"
                      alt="2Game, Nu Than, Cong Dong Mang, Game Dinh, Tin Tuc Game, "
                      note=""
                    />
                    <p>
                      Đôi lúc, Mythal có thể xuất hiện dưới hình dạng một con
                      rồng hoặc là hình dạng con người nhưng với một số đặc điểm
                      của loài rồng. Nhiều thành viên trong đền thờ elf được cho
                      là con cái của Mythal, và cốt truyện cũng khắc họa cô ta
                      như là một người mẹ đầy ắp tình thương, luôn biết cách bao
                      bọc, chở che.
                    </p>
                    <h3>Auriel – Diablo</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/14/photo-1-1623683456926406626256.jpg"
                      alt="3Game, Nu Than, Cong Dong Mang, Game Dinh, Tin Tuc Game, "
                      note=""
                    />
                    <p>
                      Auriel được xem là một nữ thần trong <strong>game</strong>{" "}
                      với danh hiệu "Archangel of Hope" (tạm dịch: Thiên sứ của
                      hy vọng) đến từ High Heavens. Cô ta đề cao tình yêu và
                      lòng trắc ẩn hơn bất cứ thứ gì, trong hòa bình lẫn chiến
                      tranh. Ngay cả khi đang xảy ra bao cuộc xung đột và hỗn
                      loạn, Auriel vẫn tìm thấy sự yên bình. Auriel còn là một
                      người hòa giải, luôn nhìn thấy điều tốt đẹp trong mọi thứ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/14/photo-1-1623683464272913272799.jpg"
                      alt="4Game, Nu Than, Cong Dong Mang, Game Dinh, Tin Tuc Game, "
                      note=""
                    />
                    <p>
                      Giọng ca của Auriel là giọng chính trong dàn hợp xướng của
                      High Heavens. Khi cô bị giam cầm, loài người trở nên chán
                      nản và trầm cảm, mặc dù họ không hề hay biết rằng Auriel
                      đang bị bắt giữ. Khi được thả tự do thì loài người đã hạnh
                      phúc và lạc quan trở lại, tiếp tục phấn đấu để phát triển.
                    </p>
                    <h3>Erollisi Marr – EverQuest</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/14/photo-1-1623683472553380638102.jpg"
                      alt="5Game, Nu Than, Cong Dong Mang, Game Dinh, Tin Tuc Game, "
                      note=""
                    />
                    <p>
                      Erollisi Marr trong EverQuest còn được biết đến với cái
                      tên là "Nữ thần tình ái" (Queen of Love). Trong khi những
                      người theo chân Marr thường chuộng những cách giải quyết
                      trong êm đẹp thì họ cũng chấp nhận bạo lực như là một phần
                      trong cuộc sống. Họ sẽ chiến đấu tới cùng cho những người,
                      những địa điểm, và những món đồ mà họ yêu quý, thậm chí
                      chấp nhận cả cái chết.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/14/photo-1-16236834791151187545722.png"
                      alt="6Game, Nu Than, Cong Dong Mang, Game Dinh, Tin Tuc Game, "
                      note=""
                    />
                    <p>
                      Nhiều Paladins, Clerics, và Bards đều tôn kính Marr. Vị nữ
                      thần trong <strong>game</strong> này có một người anh em
                      là Mithaniel, và cả 2 đã tạo ra người barbarian. Đã từng
                      có giả thuyết cho rằng loài người được phát triển từ
                      barbarians nhờ Erollisi Marr.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h3>Mara – The Elder Scrolls</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/14/photo-1-1623683486594191392037.jpg"
                      alt="7Game, Nu Than, Cong Dong Mang, Game Dinh, Tin Tuc Game, "
                      note=""
                    />
                    <p>
                      Imperial Pantheon là tôn giáo được biết đến nhiều nhất tại
                      Tamriel. Nó bao gồm 9 vị thần, trong đó có Mara. Cô ta
                      được xem như là nữ thần về tình mẫu tử, về tình yêu và
                      lòng trắc ẩn. Riêng trong Skyrim thì Mara còn là cô hầu
                      gái của Kyne. <strong>Game</strong> thủ Skyrim sẽ thấy
                      hình ảnh của Mara quen thuộc bởi vì đeo bùa hộ mệnh của cô
                      ta là dấu hiệu cho thấy bạn đã sẵn sàng kết hôn. Các cặp
                      đôi phải thành hôn ngay tại ngôi đền của Mara.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/14/photo-1-16236834941971046088312.jpg"
                      alt="8Game, Nu Than, Cong Dong Mang, Game Dinh, Tin Tuc Game, "
                      note=""
                    />
                    <p>
                      Tùy theo vị trí của bạn ở Tamriel mà nữ thần Mara trong{" "}
                      <strong>game</strong> có thể có những đặc điểm khác nhau.
                      Tại Morrowind, Mara được gọi là Ama Nin. Còn ở một số vùng
                      khác thì cô ta được cho là đã kết hôn với Akatosh, một số
                      khác thì cho là Mara đã lấy Lorkhan.
                    </p>
                    <h3>Monika – Doki Doki Literature Club!</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/14/photo-1-162368350050920829467.png"
                      alt="9Game, Nu Than, Cong Dong Mang, Game Dinh, Tin Tuc Game, "
                      note=""
                    />
                    <p>
                      Mặc dù Monika không phải là một nữ thần theo nghĩa đen, cô
                      ấy cũng đã hớp hồn không biết bao nhiêu{" "}
                      <strong>game</strong> thủ đã "lỡ" sa chân vào tựa game
                      Doki Doki Literature Club!, trở thành nữ thần của lòng họ.
                      Trong game, Monika là chủ tịch câu lạc bộ văn học của
                      trường, chính vì thế nên cô ấy có khả năng tác động rất
                      lớn đến mạch truyện trong game, thúc đẩy nhiều sự kiện mà
                      bạn tham gia.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/14/photo-1-1623683506579794686250.png"
                      alt="10Game, Nu Than, Cong Dong Mang, Game Dinh, Tin Tuc Game, "
                      note=""
                    />
                    <p>
                      Nhìn thì hiền lành vậy thôi chứ Monika không đơn giản như
                      vẻ bề ngoài của mình. Cô nàng đã gây ra toàn bộ sự việc
                      kinh dị và điều khiển toàn bộ <strong>game</strong>.
                      Monika đã "phá vỡ bức tường thứ 4" (nghĩa là nhân vật
                      trong game biết tương tác với chính người chơi) và thổ lộ
                      rằng cô ấy yêu bạn mặc dù nhận thức rõ rằng mình chỉ là
                      một nhân vật trong game. Đồng thời Monika cũng thao túng
                      những nhân vật nữ khác nhằm loại bỏ họ và độc chiếm bạn
                      cho riêng mình. Cách duy nhất để bạn kết thúc cơn ác mộng
                      này chính là vào file game và xóa file dữ liệu của nhân
                      vật Monika một cách thủ công.
                    </p>
                    <p>
                      Nguồn The <strong>Game</strong>r biên dịch GVN360
                    </p>
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
