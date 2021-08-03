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
"timestamp": '29/07/2021 04:20 PM',
"title": 'Top 10 lời đồn “huyền thoại” dù hư cấu nhưng nhiều game thủ vẫn tin sái cổ (P.2)',
"description": 'Những cú lừa cực mạnh nhưng anh em nào cũng ít nhất một lần dính trap...',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-16267104636641078128704.png',
"alt": 'GAME,GAME HAY,BÍ ẨN,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,GAME THỦ,',
"category": 'games',
"date": '29/07/2021',
"time": '04:20 PM',
"link": '/top-10-loi-don-huyen-thoai-du-hu-cau-nhung-nhieu-game-thu-van-tin-sai-co-p2',
"zcomponent": 'page_20210729162047',
"filepath": './20210729162047-top-10-loi-don-huyen-thoai-du-hu-cau-nhung-nhieu-game-thu-van-tin-sai-co-p2.js'
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
  "Top 10 lời đồn “huyền thoại” dù hư cấu nhưng nhiều game thủ vẫn tin sái cổ (P.2)";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:20 PM";
const description =
  "Những cú lừa cực mạnh nhưng anh em nào cũng ít nhất một lần dính trap...";
const link =
  "top-10-loi-don-huyen-thoai-du-hu-cau-nhung-nhieu-game-thu-van-tin-sai-co-p2";
const tagparam = [
  "GAME",
  "GAME HAY",
  "BÍ ẨN",
  "CỘNG ĐỒNG MẠNG",
  "TIN TỨC GAME",
  "GAME THỦ",
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

export default function page_20210729162047() {
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
                      Khi bắt đầu bước chân vào thế giới <strong>game</strong>,
                      hẳn anh em nào cũng muốn vọc vạch mọi bí mật, tìm hết
                      những ẩn khuất mà các nhà phát triển gửi gắm vào trong trò
                      chơi của mình. Đôi khi anh em sẽ tìm được các căn phòng bí
                      mật, các vật phẩm độc đáo hoặc có khi là mở ra được một
                      nhân vật, nhiệm vụ mới luôn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-16267104636641078128704.png"
                      alt="1, GAME,GAME HAY,BÍ ẨN,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,GAME THỦ,"
                      note=""
                    />
                    <p>
                      Bởi sự cuốn hút của những quả trứng và bí mật trong{" "}
                      <strong>game</strong> nên có rất nhiều{" "}
                      <strong>game thủ</strong> bỏ công sức, thời gian ra lục
                      lọi dù chúng có tồn tại hay không. Một số{" "}
                      <strong>bí ẩn</strong> được dựng lên từ trò đùa Cá tháng
                      Tư, một số thì thì xuất phát từ các đoạn quảng cáo hoặc
                      manh mối gây hiểu lầm trong game. Bên cạnh đó, nhiều game
                      thủ thích đùa bằng cách tự tạo tin đồn về các loại cheat
                      code có thể mở khóa tính năng ẩn của game cùng nhiều bằng
                      chứng cũng như hướng dẫn tận tình. Thoạt đầu, nhiều anh em
                      thấy cũng khá thuyết phục và làm theo, tuy nhiên, vì những
                      lời đồn này không có thật nên dù không bao giờ ra được lời
                      giải.
                    </p>
                    <p>
                      Và sau đây là 10 lời đồn không hề có thật trong thế giới{" "}
                      <strong>game</strong> mà anh em vẫn tin sái cổ.
                    </p>
                    <h5>
                      5. Tiến hóa Pokémon thành rồng Yoshi và Luigi – Pokémon
                      Red và Pokémon Blue
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-1-1626710465338832503785.jpg"
                      alt="2, GAME,GAME HAY,BÍ ẨN,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,GAME THỦ,"
                      note=""
                    />
                    <p>
                      Vào năm 1998, Pokémon Red và Pokémon Blue là hai tựa{" "}
                      <strong>game</strong> đình đám nhất của hệ máy Nintendo
                      Game Boy. Các bạn có thể tìm, bắt, huấn luyện và chiến đấu
                      với tổng cộng 150 Pokémon khác nhau. Bên cạnh đó, các bạn
                      cũng có thể trao đổi Pokemon với người chơi khác bằng cách
                      kết nối hai máy Game Boy với nhau.
                    </p>
                    <p>
                      Trong một bài báo của tạp chí Expert <strong>Game</strong>
                      r số 58 đã hướng dẫn anh em <strong>game thủ</strong> một
                      phương pháp tiến hóa Pokémon cực kỳ khó nhưng kết quả thì
                      sẽ tạo ra con rồng Yoshi từ game Mario (?). Cụ thể thì có
                      hai thanh niên đã phá đảo hai bản game này và đều thu thập
                      đủ 150 Pokémon. Thanh niên "Blue" nhận một con Dratini từ
                      thanh niên "Red" rồi tiến hóa nó thành Dragonite rồi
                      chuyển ngược về. Sau đó, thanh niên "Red" sẽ vào tầng hầm
                      tại Unknown Dungeon, đến tìm nơi ở của MewTwo, lấy viên
                      Fire Stone rồi dùng nó tiến hóa Dragonite thành Yoshi. Bài
                      báo này còn đăng cả ảnh chụp màn hình quá trình chuyển đổi
                      và con "Pokémon" Yoshi được đánh số là 999 luôn các bạn ạ.
                    </p>
                    <p>
                      Tuy nhiên, bài báo này được Expert <strong>Game</strong>r
                      xuất bản vào tháng 4, và anh em cũng biết tháng 4 là có
                      ngày... Cá tháng Tư đó. Dù vậy thì trò chơi khăm này vẫn
                      tiếp tục được lan truyền trong nhiều năm sau. Một tin đồn
                      tương tự đã được lan truyền rằng các bạn có thể tiến hóa
                      Lickitung thành Luigi bằng cách bắt Lickitung vào quả
                      Pokéball, cho ăn Rare Candy và phải úp ngược máy Game Boy
                      lại nữa kìa. Đúng là Cá tháng Tư thì nói gì cũng được được
                      anh em ạ.
                    </p>
                    <h5>4. Bắt MewTwo – Pokémon Red và Pokémon Blue</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-2-1626710467402930251583.jpg"
                      alt="3, GAME,GAME HAY,BÍ ẨN,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,GAME THỦ,"
                      note=""
                    />
                    <p>
                      Không giống như trò đùa tiến hóa Pokemon thành rồng Yoshi
                      và Luigi, MewTwo thực sự có tồn tại trong hai tựa{" "}
                      <strong>game</strong> này nhưng rất khó tìm được. Có nhiều
                      tin đồn rằng anh em phải tìm đến một bãi biển nào đó có
                      chiếc xe tải đang đỗ, tìm cách "phá" xe để dụ MewTwo xuất
                      hiện. Sau đó, chỉ cần đánh thắng nó là xong (dù nó là
                      Pokemon huyền thoại?). Chiếc xe tải được đồn là nằm ở gần
                      tàu S.S.Anne tại thành phố Vermilion City và rất khó để
                      tiếp cận. Bạn chỉ có thể đến đó bằng cách học kỹ năng surf
                      và di chuyển trên mặt nước sau khi lên tàu S.S.Anne.
                    </p>
                    <p>
                      Tuy nhiên, thực tế là không có ai tìm ra MewTwo bằng cách
                      này cả. Chỉ những ai có tham gia các sự kiện của Nintendo
                      và kết nối <strong>Game</strong>boy với người đại diện của
                      hãng thì mới được nhận MewTwo thôi. Ngoài ra, các bạn cũng
                      có thể hack máy Gameboy bằng các thiết bị Gameshark, Game
                      Genie hoặc Pro Action Replay và sử dụng cheat code mới
                      nhận được MewTwo thôi chứ không có con MewTwo nào có sẵn
                      trong game nha anh em.
                    </p>
                    <p>
                      3. Sheng Long <strong>bí ẩn</strong> – Street Fighter II
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-3-16267104663631171791778.jpg"
                      alt="4, GAME,GAME HAY,BÍ ẨN,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,GAME THỦ,"
                      note=""
                    />
                    <h5>
                      Street Fighter II là một tựa <strong>game</strong> đánh
                      nhau cực kỳ nổi tiếng của Capcom. Nếu anh em nào chưa chơi
                      thì sau mỗi trận đấu, game sẽ hiện một bức ảnh của hai đấu
                      sĩ lên, người thua sẽ xuất hiện với bộ dạng bê bết máu,
                      còn người thắng sẽ có một hộp thoại chứa một câu nói khoe
                      khoang hoặc châm chọc đối thủ. Trong bản game phát hành
                      tại Mỹ, nếu anh em chiến thắng bằng Ryu thì sẽ hiện lên
                      câu "You must defeat Sheng Long to stand a chance", tạm
                      dịch là "Ngươi phải đánh bại Sheng Long thì mới có cửa
                      thắng ta". Tuy nhiên, trong game lại không hề có nhân vật
                      nào tên là Sheng Long nên nhiều người cho rằng đây là một
                      nhân vật <strong>bí ẩn</strong> để người chơi tìm và mở
                      khóa trong game.
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-4-1626710465861500019653.jpg"
                      alt="5, GAME,GAME HAY,BÍ ẨN,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,GAME THỦ,"
                      note=""
                    />
                    <p>
                      Thậm chí tờ Electronic Gaming Monthly đã xuất bản một bài
                      báo nói rằng nếu muốn mở khóa Sheng Long thì anh em phải
                      dùng Ryu, thắng từ đầu đến cuối <strong>game</strong> và
                      không bị mất giọt máu nào. Đến trận đánh cuối cùng, sau
                      khi đánh bại trùm cuối M. Bison và cũng không mất giọt máu
                      nào thì Shen Long sẽ xuất hiện và đánh nhau với bạn. Và
                      anh em biết gì không, bài báo này cũng được xuất bản vào
                      tháng 4 và tiếp tục là một cú lừa.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Trên thực tế, không hề có nhân vật ShenLong nào cả, đó chỉ
                      là lỗi phiên âm sai tên cú đấm shoryuken của Ryu thôi, câu
                      châm chọc đúng của Ryu phải là "Ngươi phải đánh bại cú đấm
                      shoryuken của ta thì mới có cửa". Để tránh trường hợp tạo
                      hiểu nhầm như vậy thì khi Nintendo đưa{" "}
                      <strong>game</strong> sang hệ máy Super Nintendo, hãng đã
                      sửa câu này lại thành "You must defeat my dragon punch to
                      stand a chance!", tạm dịch là "ngươi phải đánh bại cú đấm
                      rồng thiêng của ta thì mới có cửa" nha anh em.
                    </p>
                    <h5>
                      2. Vật phẩm mạnh nhất <strong>game</strong> Triforce – The
                      Legend of Zelda
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-5-1626710466883532669132.jpg"
                      alt="6, GAME,GAME HAY,BÍ ẨN,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,GAME THỦ,"
                      note=""
                    />
                    <p>
                      Triforce là một vật phẩm trong các phần{" "}
                      <strong>game</strong> Zelda của Nintendo có thể mang lại
                      cho người nắm giữ sức mạnh to lớn. Việc tìm kiếm và lắp
                      ráp các mảnh của nó là một điểm mấu chốt trong cốt truyện
                      chính của phần game The Legend of Zelda. Vật phẩm này cũng
                      có ảnh hưởng rất lớn đến cốt truyện của phần The Legend of
                      Zelda: Ocarina of Time ra mắt năm 1998.
                    </p>
                    <p>
                      Trước khi phần Ocarina of Time ra mắt thì Nintendo còn
                      phát hành một số tài liệu quảng cáo cho{" "}
                      <strong>game</strong> có chứa hình ảnh của Triforce. Cụ
                      thể thì trong màn hình Quest Status của game, Nintendo
                      chèn logo Triforce vào giữa một các huy hiệu Spiritual
                      Medallions. Chính vì điều này đã làm vô số{" "}
                      <strong>game thủ</strong> tin rằng vật phẩm Triforce là có
                      thật và đang bị giấu đâu đó trong game. Thậm chí có nhiều
                      bức ảnh chụp màn hình chứng minh đã có người tìm thấy vật
                      phẩm này. Và thực tế là không ai tìm thấy nó hết anh em ạ,
                      nhà phát hành đâu có tạo ra nó đâu, họ chỉ để logo vào cho
                      đẹp mà thôi. Sau này Nintendo đã phải lập hẳn một trang
                      FAQ để thông báo rằng họ không có làm ra vật phẩm đó, anh
                      em đừng đi tìm nữa…
                    </p>
                    <h5>1. Mở khóa ninja màu đỏ Ermac – Mortal Kombat</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-6-16267104663861209138262.jpg"
                      alt="7, GAME,GAME HAY,BÍ ẨN,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,GAME THỦ,"
                      note=""
                    />
                    <p>
                      Ban đầu, Mortal Kombat là một tựa <strong>game</strong>{" "}
                      độc lập được tạo ra bởi Ed Boon và John Tobias rồi được
                      Midway Games phát hành năm 1992. Phần game này bao gồm một
                      trang Game Audit dùng để chẩn đoán lỗi hoặc để người dùng
                      xem quá trình boot up của console. Trong màn hình audit
                      này thường sẽ hiện ngẫu nhiên một số dòng thông báo, trong
                      đó các dòng hay hiện nhất là "REPTILE APPEARANCES,"
                      "REPTILE BATTLES" and "ERMACS."
                    </p>
                    <p>
                      Vì trong <strong>game</strong> thật sự có một ninja phiên
                      bản màu xanh lục có tên Reptile có thể mở khóa bằng cách
                      fatality đối thủ sau khi chặn hoặc nhận sát thương trong
                      hai vòng đấu liên tiếp. Thế là rất nhiều{" "}
                      <strong>game thủ</strong> tin rằng nếu game có Reptile thì
                      thế nào cũng sẽ có nhân vật <strong>bí ẩn</strong> khác
                      tên là Ermac. Một game thủ có tên Tony Casey còn gửi bài
                      về tạp chí chuyên "tung tin đồn ngày Cá tháng Tư"
                      Electronic Gaming Monthly rằng anh này đã tìm thấy Ermac
                      kèm theo bức ảnh chụp màn hình có dòng chữ "ERMAC WINS".
                      Nếu muốn mở ra Ermac thì bạn phải có được chiến thắng hoàn
                      hảo, không mất máu trước mọi đối thủ trong game.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/19/photo-7-16267104653581469822009.jpg"
                      alt="8, GAME,GAME HAY,BÍ ẨN,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,GAME THỦ,"
                      note=""
                    />
                    <p>
                      <strong>Bí ẩn</strong> này kéo dài đến năm 2011, khi chính
                      người tạo ra Mortal Kombat là Ed Boon đăng một dòng tweet
                      nói rằng ông viết dòng thông báo này cho lỗi catching code
                      thôi chứ không phải nhân vật bí ẩn nào cả. Đến bản Mortal
                      Kombat II, trong hộp thoại châm chọc đối thủ của nhân vật
                      Jade có dòng "Ermac who?" (Ermac nào?), khi bạn click vào
                      thì sẽ nhận được câu trả lời là CEAMR ODSE NTO EXITS" hay
                      viết ngược lại là "Ermac does not exist." (Ermac đâu có
                      tồn tại). Tuy nhiên, đến bản Ultimate Mortal Kombat 3 thì
                      Ermac đã thật sự xuất hiện khi bạn nhập một code gồm 10
                      chữ số. Cuối cùng, dù ban đầu Ermac chỉ là một dòng thông
                      báo lỗi nhưng nhờ sự nhiệt thành của người hâm mộ mà có
                      thể trở thành nhân vật thật anh em ạ.
                    </p>
                    <p>Nguồn How Stuff Work biên dịch GVN360</p>
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
