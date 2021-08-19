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
"timestamp": '19/08/2021 12:56 PM',
"title": 'Top 10 tựa game bắn súng góc nhìn thứ nhất gắn liền với game thủ Việt thế hệ 8x, 9x',
"description": 'Những game đã trở thành huyền thoại tuổi thơ...',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629122147785572385314.jpg',
"alt": 'GAME BẮN SÚNG,GAME THỦ VIỆT,GAME THỦ,GAME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,',
"category": 'games',
"date": '19/08/2021',
"time": '12:56 PM',
"link": '/top-10-tua-game-ban-sung-goc-nhin-thu-nhat-gan-lien-voi-game-thu-viet-the-he-8x-9x',
"zcomponent": 'page_20210819125603',
"filepath": './20210819125603-top-10-tua-game-ban-sung-goc-nhin-thu-nhat-gan-lien-voi-game-thu-viet-the-he-8x-9x.js'
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
  "Top 10 tựa game bắn súng góc nhìn thứ nhất gắn liền với game thủ Việt thế hệ 8x, 9x";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "19/08/2021 12:56 PM";
const description = "Những game đã trở thành huyền thoại tuổi thơ...";
const link =
  "top-10-tua-game-ban-sung-goc-nhin-thu-nhat-gan-lien-voi-game-thu-viet-the-he-8x-9x";
const tagparam = [
  "GAME BẮN SÚNG",
  "GAME THỦ VIỆT",
  "GAME THỦ",
  "GAME",
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

export default function page_20210819125603() {
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
                      <strong>game</strong> PC nói chung và{" "}
                      <strong>game bắn súng</strong> FPS nói riêng đã đem đến
                      cho các anh em thế hệ 8x, 9x cảm xúc vô cùng đặc biệt và
                      kỷ niệm khó thể nào phai mờ.
                    </p>
                    <p>
                      Dù những trò chơi bom tấn hiện nay có đồ họa hoành tráng,{" "}
                      <strong>game</strong>play cuốn hút... nhưng những tựa game
                      tuổi thơ vẫn luôn giữ một vị trí đặc biệt trong tâm trí{" "}
                      <strong>
                        <strong>game thủ</strong> Việt
                      </strong>
                      . Để gợi lại một thời đầy oanh liệt của game thủ PC chúng
                      mình, dưới đây là top 10 tựa{" "}
                      <strong>game bắn súng</strong> góc nhìn thứ nhất gắn liền
                      với game thủ Việt thế hệ 8x, 9x. Mời các bạn cùng tham
                      khảo nhé.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629122147785572385314.jpg"
                      alt="1, GAME BẮN SÚNG,GAME THỦ VIỆT,GAME THỦ,GAME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <h5>Half-Life</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-3-16291221493231587310242.png"
                      alt="4, GAME BẮN SÚNG,GAME THỦ VIỆT,GAME THỦ,GAME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Half-Life được Valve phát triển bằng engine Quake vào năm
                      1998. Mặc dù <strong>game</strong> thuộc thể loại bắn súng
                      góc nhìn thứ nhất, tuy nhiên yếu tố cốt truyện lại được
                      đầu tư mạnh hơn là gameplay. Cũng chính vì điều này đã
                      giúp cho Half-Life trở thành một tựa{" "}
                      <strong>game bắn súng</strong> có cốt truyện hay nhất mọi
                      thời đại. Một điều nữa giúp Half-Life trở nên khác biệt so
                      với những tựa game bắn súng khác lúc bấy giờ đó là: Thay
                      vì sử dụng các đoạn cắt cảnh để diễn tả cốt truyện game,
                      Half-Life lại cho cốt truyện xảy ra xung quanh bạn trong
                      khi vẫn giữ góc nhìn thứ nhất của nhân vật.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-4-1629122149843404383548.png"
                      alt="5, GAME BẮN SÚNG,GAME THỦ VIỆT,GAME THỦ,GAME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Có thể hiện tại nhìn lại đồ họa Half-Life thì các bạn sẽ
                      bị chóng mặt và không chơi được lâu do đồ họa của nó đã bị
                      "out meta" khiến nhiều người chơi cảm thấy chơi không hợp.
                      Tuy nhiên hồi bấy giờ đây lại là một tựa{" "}
                      <strong>game</strong> có đồ họa hút hồn, cực đẹp và chân
                      thực đi cùng cốt truyện ấn tượng. Mặc dù không hề có đoạn
                      cắt cảnh nào, Half-Life vẫn cho người chơi cảm giác đang
                      thưởng thức một bộ phim về khoa học viễn tưởng. Một bộ
                      phim lại cho phép anh em làm chủ mọi hành động của nhân
                      vật chính.
                    </p>
                    <h5>Wolfenstein 3D</h5>{" "}
                    <p>
                      Có thể ít ai biết rằng những tựa <strong>game</strong> bom
                      tấn, đồ họa "căng mọng" hiện giờ như Wolfenstein:
                      Youngblood, Wolfenstein: The New Order hay The New
                      Colossus cũng từng có thời đồ họa đơn giản, thô sơ và
                      khiến cho các <strong>game thủ</strong> 8x, 9x chơi cực
                      ghiền. Hay cụ thể ở đây chính là Wolfenstein 3D. Thật ra,
                      trước Wolfenstein 3D đã từng có rất nhiều tựa{" "}
                      <strong>game bắn súng</strong> góc nhìn thứ nhất ra đời.
                      Tuy nhiên, chúng thường có độ hoàn thiện không được tốt,
                      cũng như mang tới trải nghiệm không thoải mái cho người
                      chơi. Wolfenstein 3D dù cũng bước đi trên con đường tương
                      tự nhưng với một hướng tiếp cận khác đó là biến tựa game
                      thành một trải nghiệm vui vẻ và thú vị cho game thủ.
                    </p>{" "}
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16291221498221886759479.jpg"
                      alt="2, GAME BẮN SÚNG,GAME THỦ VIỆT,GAME THỦ,GAME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Mình còn nhớ cái cảm giác hồi hộp nhưng lại vô cùng thích
                      thú khi băng qua từng căn phòng mà không biết điều gì tiếp
                      theo đang chờ đợi mình ở đó. Không biết các bạn{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      8x, 9x hồi đó chơi game này có cảm thấy giống mình không?
                      Chứ đối với mình thì đây chính là yếu tố khiến mình "bị
                      thích" Wolfenstein 3D.
                    </p>
                    <h5>DOOM 2</h5>
                    <p>
                      Tương tự như cách mà Super Mario Bros, GTA 3... đã từng
                      làm, DOOM cũng thay đổi ngành công nghiệp{" "}
                      <strong>game</strong> khi nó được phát hành lần đầu vào
                      năm 1993. Tựa <strong>game bắn súng</strong> này thành
                      công tới nỗi mà một số trò trong danh sách này còn bị các
                      lứa <strong>game thủ</strong> gọi là phiên bản "clone" của
                      Doom nữa đấy.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-2-16291221503691774633827.jpg"
                      alt="3, GAME BẮN SÚNG,GAME THỦ VIỆT,GAME THỦ,GAME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      DOOM 2 về cơ bản là một phiên bản mở rộng của phần 1 khi
                      cập nhật nhiều vũ khí mới, kẻ thù mới. DOOM 2 cho bạn một
                      cảm giác thỏa thích bắn quái vật, cầm trên tay một khẩu
                      súng và sẵn sàng "headshot" mọi sinh vật kì dị nào dám
                      xuất hiện trước mặt bạn.
                    </p>
                    <p>
                      Vào thời điểm đó thì những thể loại <strong>game</strong>{" "}
                      kinh dị, có hình ảnh quái vật ghê rợn chưa thật sự được{" "}
                      <strong>
                        <strong>game thủ</strong> Việt
                      </strong>{" "}
                      trải nghiệm nhiều. Chính vì thế trong lần đầu chơi, nhiều
                      bạn có thể đã cảm thấy khá sợ. Song một khi đã quen rồi
                      thì game thủ rất dễ sa vào "lưới tình" của Doom 2 vì cái
                      cảm giác bắn quái rất đã tay vốn là phương thuốc di truyền
                      từ phần này sang phần khác mà tựa game này mang lại. Có
                      thể bây giờ Doom đã có các phiên bản mới đồ họa đẹp hơn,
                      bắn đã tay hơn nhưng đối với game thủ 8x, 9x hồi đó thì
                      Doom 2 đã rất thành công khi mang tới một trải nghiệm kinh
                      dị nhưng lại vô cùng sảng khoái.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Có những bạn dành cả tuổi thanh xuân với con chuột bi
                      trong phòng tin học ở trường chỉ để bắn "hép-lai" với
                      nhau. Đây không chỉ là một tựa <strong>game</strong> huyền
                      thoại trong lòng{" "}
                      <strong>
                        <strong>game thủ</strong> Việt
                      </strong>
                      , mà nó còn thay đổi cả thể loại game FPS sau này. Cơ bản
                      thì đây là bản mod của tựa game Half-Life đình đám, cho
                      nên nhiều người vẫn quen gọi Counter-Strike là "Half-Life"
                      bởi vì thế.
                    </p>
                    <p>
                      Ngày trước, trong mấy giờ học tin học trong trường, kiểu
                      gì cũng phải ráng làm bài cho lẹ để tranh thủ mở CS 1.6
                      lên làm ván với mấy đứa trong lớp. Sau nhiều lần bị ghi
                      bản kiểm điểm và bị xóa <strong>game</strong>, mình đã tìm
                      cách… lén cài lại game vào máy và tiếp tục giải cứu con
                      tin. Giờ nhớ lại thấy hồi đó có máu liều thật các bạn ạ.
                      Đến nay, Counter-Strike vẫn đang phát triển rất tốt với
                      phiên bản Global Offensive. Thế nhưng CS 1.6 vẫn là một
                      trong những <strong>game bắn súng</strong> tuyệt vời nhất
                      đối với <strong>game thủ</strong> thế hệ 8x, 9x.
                    </p>
                    <p>
                      Khi những dòng{" "}
                      <strong>
                        <strong>game</strong> bắn súng
                      </strong>{" "}
                      FPS như Call of Duty hay Battlefield vẫn chưa phổ biến ở
                      Việt Nam thì Project I.G.I vẫn là một trong những trò đỉnh
                      nhất mà{" "}
                      <strong>
                        <strong>game thủ</strong> Việt
                      </strong>{" "}
                      từng chơi qua trong thể loại này. Nó cho phép người chơi
                      trải nghiệm cảm giác sử dụng vũ khí một cách cực kỳ chân
                      thực, khiến nhiều game thủ phải mê mệt với nó.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-5-16291221493861363976959.png"
                      alt="6, GAME BẮN SÚNG,GAME THỦ VIỆT,GAME THỦ,GAME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, vào thời điểm bấy giờ thì Project I.G.I khá là
                      sát cấu hình nên bạn phải có một dàn PC xịn hoặc phải ra
                      quán net mới có thể trải nghiệm được trò này. Khi Call of
                      Duty và Battlefield xuất hiện thì Project I.G.I đành phải
                      lùi bước về sau, nhưng I.G.I vẫn luôn là một trò FPS in
                      đậm trong tâm trí của nhiều{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      8x, 9x.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-6-16291221494031174015385.png"
                      alt="7, GAME BẮN SÚNG,GAME THỦ VIỆT,GAME THỦ,GAME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Có lẽ đây là một trong những tựa{" "}
                      <strong>
                        <strong>game</strong> bắn súng
                      </strong>{" "}
                      đã đưa rất nhiều <strong>game thủ</strong> đến với thể
                      loại FPS. Trò này có gameplay khá đơn giản, ngồi một chỗ
                      ngay giữa quả đồi rồi bắn xung quanh, và game cũng rất
                      nhẹ. Chính nhờ vậy mà Beach Head đã đem lại một trải
                      nghiệm rất cuốn, kết hợp các hiệu ứng âm thanh, đạn bay,
                      animation khi lính bị trúng đạn, máy bay mất hút sau ngọn
                      đồi xa để mang đến cho người chơi một cảm giác y như đang
                      ở chiến trường.
                    </p>
                    <p>
                      Đó là chưa kể Beach Head còn có đoạn nhạc mở đầu nghe rất
                      bắt tai các bạn ạ. Nhiều lúc mình mở lên để đó nghe cho nó
                      hùng hồn lấy khí thế rồi sau đó mới mở tập ra học bài. Có
                      đợt, mình cứ cố gắng chơi hết màn này tới màn nọ vì nghĩ
                      là sắp "phá đảo" tới nơi rồi, đến nỗi bưng chén cơm lên
                      bàn vừa ăn vừa chơi luôn và được ăn thêm mấy cây roi mây
                      nữa. Sau này mình mới phát hiện là <strong>game</strong>{" "}
                      không có kết thúc như những trò bắn súng khác, cứ chơi
                      hoài cho đến khi nào "game over" thì thôi. Chắc đây cũng
                      là lý do vì sao hồi đó Beach Head lại thu hút nhiều người
                      chơi đến như vậy. Có thể là do họ cũng muốn "phá đảo" tựa
                      game này giống mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-7-16291221494321756231919.png"
                      alt="8, GAME BẮN SÚNG,GAME THỦ VIỆT,GAME THỦ,GAME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-8-1629122149455432581556.png"
                      alt="9, GAME BẮN SÚNG,GAME THỦ VIỆT,GAME THỦ,GAME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
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
