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
"timestamp": '13/08/2021 09:22 AM',
"title": 'Top 10 tựa game chi phí phát triển không bao nhiêu nhưng gom tiền nhiều như bom tấn (P.2)',
"description": 'Những siêu phẩm làng game không nhất tiền phải đầu tư tiền tỷ...',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628711658851477207572.jpg',
"alt": 'GAME,GAME HAY,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,GAME ĐỈNH,',
"category": 'games',
"date": '13/08/2021',
"time": '09:22 AM',
"link": '/top-10-tua-game-chi-phi-phat-trien-khong-bao-nhieu-nhung-gom-tien-nhieu-nhu-bom-tan-p2',
"zcomponent": 'page_20210813092207',
"filepath": './20210813092207-top-10-tua-game-chi-phi-phat-trien-khong-bao-nhieu-nhung-gom-tien-nhieu-nhu-bom-tan-p2.js'
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
  "Top 10 tựa game chi phí phát triển không bao nhiêu nhưng gom tiền nhiều như bom tấn (P.2)";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "13/08/2021 09:22 AM";
const description =
  "Những siêu phẩm làng game không nhất tiền phải đầu tư tiền tỷ...";
const link =
  "top-10-tua-game-chi-phi-phat-trien-khong-bao-nhieu-nhung-gom-tien-nhieu-nhu-bom-tan-p2";
const tagparam = [
  "GAME",
  "GAME HAY",
  "CỘNG ĐỒNG MẠNG",
  "TIN TỨC GAME",
  "GAME ĐỈNH",
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

export default function page_20210813092207() {
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
                      Xuất phát điểm không nói lên việc chúng ta đi được bao xa,
                      cũng như nhiều tựa <strong>game</strong> tuy không được
                      đầu tư nhiều vẫn thành công và đem về những khoản tiền
                      kếch xù cho nhà phát triển. Sau đây chúng ta sẽ cùng điểm
                      qua 10 cái tên nổi bật trong số những tựa game tuy kinh
                      phí khiêm tốn nhưng mang về doanh thu không kém gì game
                      bom tấn.
                    </p>
                    <p>
                      Kỳ tích được tạo nên bởi những tựa <strong>game</strong>{" "}
                      này quá phá cách với phần còn lại của thế giới. Hy vọng có
                      thể mang đến cho các bạn những giờ giải trí thú vị.
                    </p>
                    <h5>
                      Hollow Knight - Chi phí phát triển 42.000 USD - Doanh số 2
                      triệu bản (tính đến tháng 12 năm 2020)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628711658851477207572.jpg"
                      alt="1, GAME,GAME HAY,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,GAME ĐỈNH,"
                      note=""
                    />
                    <p>
                      Hollow Knight mang đến cho người chơi cảm giác trải nghiệm
                      nghệ thuật chứ không phải <strong>game</strong> đánh nhau.
                      Animation, âm thanh, tạo hình nhân vật, cơ chế gameplay...
                      đều mang lại một phong cách rất "chill". Game có nhịp độ
                      chậm, boss cũng không quá khó nhưng chắc chắn là không dễ
                      và đặc biệt là không cho phép điều chỉnh độ khó. Điều đó
                      cho thấy dù chỉ là một tựa game 2D đi cảnh nhưng Hollow
                      Knight cũng được cân bằng rất kỹ, anh em sẽ cảm thấy mình
                      bị thử thách trong một vài tình huống, nhưng cũng có những
                      lúc cưỡi ngựa xem hoa, trải nghiệm game một cách thư giãn.
                    </p>
                    <p></p>
                    <p>
                      Nhìn chung thì Hollow Knight đem lại nhiều cung bậc cảm
                      xúc khác nhau, lúc nhàn hạ lúc tuôn trào, lúc hoành tráng
                      lúc quạnh hiu. Theo gamingbolt.com, Hollow Knight được
                      phát triển với đội ngũ rất nhỏ nhưng hoạt động tích cực.
                      Với bản chất là một tựa <strong>game</strong> cực hay cộng
                      thêm mức giá 15 đô tương đối dễ chịu, không lạ gì khi nó
                      bán được đến tận hơn 2 triệu bản tính đến tháng 12 năm
                      2020.
                    </p>
                    <h5>
                      Dead Cells - Doanh số 5 triệu bản (tính đến tháng 3 năm
                      2021)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-16287116602281537844730.jpg"
                      alt="2, GAME,GAME HAY,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,GAME ĐỈNH,"
                      note=""
                    />
                    <p>
                      Dead Cells là một tựa <strong>game</strong> nhập vai di
                      chuyển ngang. Câu chuyện kể về một thanh niên lai giữa
                      Cyclop và Ghost Rider đi khắp nơi gặp cái gì di chuyển
                      cũng chém. Với tiết tấu nhanh, vũ khí đang dạng, chuyển
                      động nhịp nhàng và lối chơi cuốn hút, tựa game được giới
                      phê bình đánh giá rất cao. Dead Cells cũng tạo được điểm
                      nhấn với những màn đánh boss bung lụa hoành tráng và đồ
                      họa vui nhộn hạng Pixel cực kỳ thích mắt. Và do là game 2D
                      nên cực nhẹ, và bạn hoàn toàn có thể cân tốt nó với những
                      dàn máy hay những chiếc laptop không card rời một cách
                      mượt mà. Tuy nhiên có một điểm cần lưu ý là nếu bạn chết,
                      bạn sẽ chơi lại từ đầu luôn, cho nên cố gắng mà giữ mạng
                      nhé.
                    </p>
                    <p></p>
                    <p></p>
                    <p>
                      Đây cũng được xem là một trong những tựa{" "}
                      <strong>game</strong> Roguelike Metroidvania hay nhất mọi
                      thời đại. Đó là lý do mà tựa game indie này có thể trở nên
                      nổi tiếng trên toàn thế giới và thu về hàng triệu đô cho
                      nhà phát triển của nó.
                    </p>
                    <h5>
                      Stardew Valley – Doanh số 10 triệu bản trên Steam (tính
                      đến đầu năm 2020)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-2-16287116607391574851750.jpg"
                      alt="3, GAME,GAME HAY,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,GAME ĐỈNH,"
                      note=""
                    />
                    <p>
                      Nhiều tựa <strong>game</strong> chưa được xem là bom tấn
                      đã tốn hơn 10 triệu đô chi phí phát triển, tuy nhiên không
                      phải lúc nào cũng cần đầu tư lớn mới thu được nhiều lợi
                      nhuận. Và Stardew Valley chính là minh chứng rõ ràng nhất
                      cho việc đó. Đây là một tựa game quản lý nông trại với đồ
                      họa pixcel. Mục tiêu chính của Stardew Valley là xây dựng
                      một trang trại và khôi phục lại thung lũng Stardew. Các
                      bạn có thể trồng trọt, chăn nuôi, nấu ăn, đi câu cá và chế
                      tạo các vật phẩm mà bạn cần để xây dựng một trang trại của
                      riêng mình.
                    </p>
                    <p></p>
                    <p></p>
                    <RelationNewsInPage category={category} />
                    <p>
                      <strong>Game</strong> phát hành vào ngày 26/2 năm 2016.
                      Chỉ sau hai tháng ngắn ngủi, Stardew Valley đã bán được
                      hơn 1 triệu bản. Đến cuối năm 2016 thì nó bán được 2 triệu
                      bản trên Steam. Ước tính doanh thu của game phải đạt đến
                      con số 25 triệu đô chỉ tính riêng trên PC. Nếu tính luôn
                      cả các nền tảng như iOS, Android, Xbox One và PS4 thì
                      doanh thu của tựa game có thể lên đến con số 50 triệu đô.
                      Tuy nhiên đó chỉ mới là năm 2016, tính đến đầu năm 2020
                      thì game đã bán được đến tận 10 triệu bản trên Steam, một
                      con số đáng mơ ước với nhiều tựa game bom tấn. Bất ngờ hơn
                      nữa là tựa game này được phát triển chỉ bởi 1 người duy
                      nhất nên cũng không biết chi phí phát triển thực chất là
                      bao nhiêu.
                    </p>
                    <h5>
                      Rocket League – Chi phí phát triển dưới 2 triệu đô – Doanh
                      số 10 triệu bản (tính đến đầu năm 2018)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-3-16287116612641551867824.jpg"
                      alt="4, GAME,GAME HAY,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,GAME ĐỈNH,"
                      note=""
                    />
                    <p>
                      Nếu bạn đã chơi chán <strong>game</strong> đá bóng thông
                      thường và muốn đổi gió với một thứ gì đó thú vị hơn thì
                      nên chơi thử tựa game này. Về cơ bản thì Rocket League vẫn
                      là một tựa game bóng đá nhưng nó cực kỳ khác biệt. Trong
                      game, thay vì điều khiển cầu thủ thì bạn sẽ được lái những
                      chiếc xe mang động cơ tên lửa, có thể bay nhảy càn lướt
                      còn kinh dị hơn cả xe Batman. Mục tiêu của bạn là phối hợp
                      cùng những người đồng đội của mình và húc quả bóng sao cho
                      nó bay về khung thành đối phương là được. Với tiết tấu
                      nhanh, đồ họa đẹp mắt và những pha bóng lả lướt ấn tượng,
                      chắc chắn tựa game này có thể mang đến cho bạn những phút
                      giây giải trí chất lượng.
                    </p>
                    <p></p>
                    <p></p>
                    <p>
                      Chỉ trong vòng 2 năm kể từ khi ra mắt Rocket League đã thu
                      hút được hơn 10 triệu người chơi và trở thành một trong
                      những tựa <strong>game</strong> Esports phổ biến nhất. Từ
                      đó nó tiếp tục tạo ra hàng triệu đô doanh thu từ việc
                      người chơi mua hàng trong game. Thành tích này thực sự
                      không tệ chút nào với một tựa game có kinh phí phát triển
                      chưa đến 2 triệu đô, thậm chí nhiều game bom tấn còn phải
                      ganh tị.
                    </p>
                    <h5>
                      Terraria – Doanh số 27 triệu bản trên tất cả các nền tảng
                      (tính đến tháng 5 năm 2019)
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-4-16287116602511630172346.jpg"
                      alt="5, GAME,GAME HAY,CỘNG ĐỒNG MẠNG,TIN TỨC GAME,GAME ĐỈNH,"
                      note=""
                    />
                    <p>
                      Terraria là tựa <strong>game</strong> xây dựng nông trại
                      ra mắt vào năm 2011 trên PC, sau đó đã được chuyển hệ lên
                      nhiều nền tảng khác nhau. Game có môi trường vô cùng rộng
                      lớn, về cơ bản là nó cho phép người chơi làm bất cứ điều
                      gì mình thích, y như trong Minecraft vậy. Bạn có thể ở nhà
                      để làm vườn hoặc trồng các loại cây, hoặc bước chân ra thế
                      giới bên ngoài để khám phá nhiều thứ hay ho, thu gom vật
                      liệu để thực hiện dự án riêng. Nói chung là hầu như giới
                      hạn chỉ phụ thuộc vào mức độ sáng tạo của bạn mà thôi.
                    </p>
                    <p></p>
                    <p></p>
                    <p>
                      Đến tháng 5 năm 2019 thì Terraria đã bán được hơn 27 triệu
                      bản trên tất cả các nền tảng của nó, bao gồm PS4, PS3, PS
                      Vita, Xbox One, Xbox 360, Nintendo Switch, Wii U, Nintendo
                      3DS, PC và Mobile. Chỉ riêng trên PC thôi doanh số đã lên
                      đến 12 triệu bản bán ra rồi.
                    </p>
                    <p>
                      Nguồn <strong>game</strong>rant biên dịch GVN360
                    </p>
                    <p></p>
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
