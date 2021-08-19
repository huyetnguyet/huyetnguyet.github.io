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
"timestamp": '19/08/2021 01:01 PM',
"title": 'Top 10 tựa game indie hay nhất nửa đầu năm 2021',
"description": 'Game indie luôn có cách để khiến game thủ phải ngạc nhiên.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-1-16292276014751552938098.png',
"alt": 'GAME HAY,GAME ĐỈNH,GAME INDIE,GAME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,',
"category": 'games',
"date": '19/08/2021',
"time": '01:01 PM',
"link": '/top-10-tua-game-indie-hay-nhat-nua-dau-nam-2021',
"zcomponent": 'page_20210819130135',
"filepath": './20210819130135-top-10-tua-game-indie-hay-nhat-nua-dau-nam-2021.js'
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
const title = "Top 10 tựa game indie hay nhất nửa đầu năm 2021";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "19/08/2021 01:01 PM";
const description =
  "Game indie luôn có cách để khiến game thủ phải ngạc nhiên.";
const link = "top-10-tua-game-indie-hay-nhat-nua-dau-nam-2021";
const tagparam = [
  "GAME HAY",
  "GAME ĐỈNH",
  "GAME INDIE",
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

export default function page_20210819130135() {
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
                      <strong>
                        <strong>Game</strong> indie
                      </strong>{" "}
                      tuy được tạo ra chỉ bởi một hoặc một nhóm nhà làm game nhỏ
                      và không được sự tài trợ từ những ông lớn trong làng game,
                      nó vẫn có một sức hút rất đặc biệt và thậm chí chất lượng
                      cũng không hề kém cạnh so với những trò chơi được đầu tư
                      bài bản. Chúng không chỉ thành công về mặt doanh thu mà
                      còn chiếm được cảm tình của vô số game thủ cũng như các
                      trang đánh giá game uy tín. Để có một cái nhìn rõ hơn, mời
                      các bạn cùng điểm qua top 10 tựa game indie hay nhất nửa
                      đầu năm 2021 nhé.
                    </p>
                    <h5>Valheim</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Nếu nói tới những tựa{" "}
                      <strong>
                        <strong>game</strong> indie
                      </strong>{" "}
                      hay nhất ra mắt trong năm 2021 thì Valheim là cái tên chắc
                      chắn phải nhắc tới. Dù khởi nguồn là một phiên bản Early
                      Access (mặc dù tới giờ vẫn thế), Valheim lại nhận được sự
                      ủng hộ cực kỳ đông đảo từ game thủ trên Steam. Điều này
                      cũng giúp Valheim trở thành một tựa game sinh tồn thành
                      công khi tự phá vỡ kỷ lục số người chơi của chính mình.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-1-16292276014751552938098.png"
                      alt="1, GAME HAY,GAME ĐỈNH,GAME INDIE,GAME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />

                    <p>
                      Trong <strong>game</strong>, các bạn sẽ vào vai những
                      người chiến binh Viking mạnh mẽ và cơ bắp cuồn cuộn (dù là
                      phái nam hay phái nữ) đang cố gắng sống sót trên một hành
                      tinh hoang dã đầy rẫy những loài quái vật nguy hiểm.
                    </p>
                    <p>
                      Tương tự như các tựa <strong>game</strong> sinh tồn khác,
                      bạn sẽ cần phải chặt cây, đốt lửa để thắp sáng và xây nhà
                      cũng như săn thú, hái trái cây... để ăn uống và sinh sống
                      qua ngày. Tuy nhiên, đã gọi là sinh tồn thì không đơn giản
                      như thế. Các loài quái vật nguy hiểm luôn rình rập trong
                      rừng để tấn công bạn theo cách lẻ tẻ hoặc kéo hội đồng
                      theo đợt. Nếu bạn có xây tường thành xung quanh đi nữa thì
                      hãy đảm bảo rằng tường của bạn đủ kín, bởi vì bọn quái vật
                      này sẽ tìm cách len lỏi hoặc đôi khi "độn thổ" vào nhà để
                      tấn công bạn đấy.
                    </p>
                    <p>
                      Valheim không chỉ bó hẹp người chơi trong một hòn đảo nhất
                      định. Bạn hoàn toàn có thể đốn gỗ, xây thuyền và giăng
                      buồm ra khơi đi khám phá những hòn đảo khác để kiếm nguyên
                      liệu và tài nguyên mới như những người Viking thực thụ.
                      Ngoài ra, một số hòn đảo sẽ có một vài loại trùm khác
                      nhau. Khi đánh bại chúng thì các bạn sẽ được ban tặng cho
                      một kỹ năng ưu việt.
                    </p>
                    <h5>Rain On Your Parade</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Rain on Your Parade là một tựa{" "}
                      <strong>
                        <strong>game</strong> indie
                      </strong>{" "}
                      "vui nhộn" ra mắt vào tháng 4 năm 2021, nơi bạn sẽ vào vai
                      một đám mây nhỏ nhắn và dễ thương có nhiệm vụ là hủy hoại
                      một ngày làm việc và giải trí vui vẻ của loài người.{" "}
                    </p>

                    <p>
                      Dù mang hình dáng của một đám mây bình thường như bao đám
                      mây hiền lành khác trên bầu trời, bạn lại có khả năng tạo
                      mưa, tạo tuyết, mưa acid, tạo bão tố hay thậm chí là mưa
                      thiên thạch. Bạn có thể chọn bất kỳ khả năng nào cũng được
                      miễn là khiến cho loài người phải chịu khốn khổ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-1-16292276032611305122640.jpg"
                      alt="2, GAME HAY,GAME ĐỈNH,GAME INDIE,GAME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />
                    <p></p>
                    <p>
                      Ví dụ như bạn có thể tạo tuyết để mặt đường trơn trượt
                      khiến cho một người đàn ông bị trượt chân ra đường và bị
                      tông bởi một chiếc xe. Chiếc xe sau đó sẽ lạc tay lái tông
                      vào trạm xe buýt gần đó và khiến những người khác phải
                      "đau khổ" theo. Nghe qua thì có vẻ kinh dị và có phần
                      "dark", nhưng do <strong>game</strong> có tạo hình dễ
                      thương và vui nhộn nên… cũng không vấn đề gì đâu. Game sẽ
                      có tổng cộng 50 màn chơi với mỗi màn sẽ có cấp độ và mục
                      tiêu khác nhau như một lối đi bộ đông đúc, một trạm xe
                      buýt và đám cưới... để các bạn có thể pha hồ quậy phá.
                    </p>
                    <h5>Before Your Eyes</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Before Your Eyes là một tựa{" "}
                      <strong>
                        <strong>game</strong> indie
                      </strong>{" "}
                      thuộc thể loại phiêu lưu tường thuật góc nhìn thứ nhất.
                      Bạn sẽ được đắm mình trong một câu chuyện đầy cảm xúc pha
                      trộn giữa niềm vui và nỗi đau (bạn nào mà thích những tựa
                      game cốt truyện "deep deep" thì trúng tủ rồi đấy). Điều
                      đặc biệt là bạn hoàn toàn có thể điều khiển nội dung câu
                      chuyện dựa theo những quyết định của mình. Và đương nhiên
                      nó sẽ ảnh hưởng tới kết cục của game.{" "}
                    </p>
                    <p>
                      Before Your Eyes có một cơ chế vô cùng độc đáo và thông
                      minh. Tựa <strong>game</strong> này sẽ sử dụng webcam để
                      theo dõi hoạt động mắt của bạn để điều khiển game. Cứ mỗi
                      một lần bạn chớp mắt một cái thì thời gian sẽ trôi đi rất
                      nhanh.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-2-16292276047801181015008.jpg"
                      alt="3, GAME HAY,GAME ĐỈNH,GAME INDIE,GAME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />

                    <p></p>
                    <p>
                      Có thể nhiều bạn sẽ nghĩ rằng việc sử dụng camera thực
                      chất chỉ là một mánh lới để quảng cáo{" "}
                      <strong>game</strong>. Trên thực tế thì tính năng này tính
                      đến nay vẫn hoạt động rất tốt, vẫn mang lại những trải
                      nghiệm mới lạ tới cho người chơi mà không xảy ra vấn đề
                      lỗi bug gì. Nếu các bạn không thích những thể loại hành
                      động, kinh dị thì tựa <strong>game indie</strong> Before
                      Your Eyes sẽ là một tựa game thích hợp với bạn. Dù sao trò
                      này cũng mới ra mắt vào tháng 4 năm 2021 nên vẫn còn rất
                      mới.
                    </p>
                    <h5>30XX</h5>
                    <p></p>
                    <p></p>
                    <p>
                      30XX là phần tiếp theo của 20XX, lấy bối cảnh 1000 năm sau
                      sự kiện diễn ra trong 20XX. Lúc này, loài người đã mất ý
                      chí trong việc vươn đến những vì sao xa xôi và bắt đầu suy
                      tàn trong thế giới hiện tại. Một lần nữa, bạn sẽ có nhiệm
                      vụ giải cứu thế giới. Đây là một tựa <strong>game</strong>{" "}
                      hành động - đi cảnh mang phong cách roguelike, được lấy
                      cảm hứng từ tựa game Mega Man X trứ danh mà nhiều bạn đã
                      từng chơi.
                    </p>
                    <p></p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-3-16292276042671447344919.png"
                      alt="4, GAME HAY,GAME ĐỈNH,GAME INDIE,GAME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />

                    <p>
                      Bạn sẽ phải điều khiển nhân vật chính bắn và chém giết kẻ
                      địch, cộng với vượt qua các thử thách trên đường đi để
                      hoàn thành màn chơi đó. Bên cạnh yếu tố hành động kịch
                      tính với những màn đấu trùm đầy thử thách thì đồ họa trong{" "}
                      <strong>game</strong> cũng rất bắt mắt. Bạn nào thích
                      phong cách Mega Man với đồ họa xịn sò hơn thì 30XX là một
                      trong những tựa <strong>game indie</strong> mà bạn không
                      nên bỏ qua trong năm 2021.
                    </p>
                    <h5>Rhythm Doctor</h5>
                    <p></p>
                    <p></p>
                    <p>
                      Thường thì nhà phát triển indie sẽ muốn phá bỏ sự rập
                      khuôn, rẽ lối đi riêng cho đứa con tinh thần của mình. Và
                      Rhythm Doctor cũng không phải là ngoại lệ. Thay vì phải
                      bấm nhiều nút theo nhịp như những tựa{" "}
                      <strong>game</strong> âm nhạc (rhythm) khác, bạn chỉ cần
                      bấm đúng duy nhất thanh spacebar mỗi khi đến nhịp thứ 7.
                      Lý do là vì trong game, việc khử rung tim (defibrillating)
                      trùng với nhịp tim có giúp bệnh nhân hồi phục nhanh chóng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/photo-4-1629227603770965995048.png"
                      alt="5, GAME HAY,GAME ĐỈNH,GAME INDIE,GAME,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,"
                      note=""
                    />

                    <p></p>
                    <p>
                      Bên cạnh đó, <strong>game</strong> này còn đặc biệt ở chỗ
                      mỗi bệnh nhân sẽ có một căn bệnh khác nhau, và mỗi bệnh
                      này được thiết kế dựa trên nhạc lý. Nên cơ bản là bạn vừa
                      chơi vừa học được những kiến thức bổ ích về âm nhạc một
                      cách vô cùng sinh động và "dễ nuốt".{" "}
                    </p>
                    <p>
                      Ngoài ra, trong <strong>game</strong> còn có công cụ cho
                      phép bạn tự thiết kế ra màn chơi của riêng mình rồi chia
                      sẻ nó cho những game thủ khác. Hoặc nếu bạn muốn tìm những
                      màn chơi mang tính sáng tạo hơn thì có thể tải về thêm
                      cũng được. Có thể nói trong số những{" "}
                      <strong>game indie</strong> nửa đầu năm 2021 thì Rhythm
                      Doctor là một trò rất đáng để chơi thử các bạn ạ.
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
