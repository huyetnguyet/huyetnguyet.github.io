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
"timestamp": '11/08/2021 10:57 AM',
"title": 'Top 10 tựa game chi phí phát triển không bao nhiêu nhưng gom tiền nhiều như bom tấn',
"description": 'Những siêu phẩm làng game không nhất tiền phải đầu tư tiền tỷ...',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-1628619405076633259899.jpg',
"alt": 'GAME,SIÊU PHẨM,KINH PHÍ THẤP,CỘNG ĐỒNG MẠNG,BOM TẤN,TIN TỨC GAME,',
"category": 'games',
"date": '11/08/2021',
"time": '10:57 AM',
"link": '/top-10-tua-game-chi-phi-phat-trien-khong-bao-nhieu-nhung-gom-tien-nhieu-nhu-bom-tan',
"zcomponent": 'page_20210811105730',
"filepath": './20210811105730-top-10-tua-game-chi-phi-phat-trien-khong-bao-nhieu-nhung-gom-tien-nhieu-nhu-bom-tan.js'
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
  "Top 10 tựa game chi phí phát triển không bao nhiêu nhưng gom tiền nhiều như bom tấn";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "11/08/2021 10:57 AM";
const description =
  "Những siêu phẩm làng game không nhất tiền phải đầu tư tiền tỷ...";
const link =
  "top-10-tua-game-chi-phi-phat-trien-khong-bao-nhieu-nhung-gom-tien-nhieu-nhu-bom-tan";
const tagparam = [
  "GAME",
  "SIÊU PHẨM",
  "KINH PHÍ THẤP",
  "CỘNG ĐỒNG MẠNG",
  "BOM TẤN",
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

export default function page_20210811105730() {
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
                      phí khiêm tốn nhưng mang về doanh thu không kém gì game{" "}
                      <strong>bom tấn</strong>.
                    </p>
                    <p>
                      Kỳ tích được tạo nên bởi những tựa <strong>game</strong>{" "}
                      này quá phá cách với phần còn lại của thế giới. Hy vọng có
                      thể mang đến cho các bạn những giờ giải trí thú vị.
                    </p>
                    <h5>
                      Outlast - Chi phí phát triển 1.14 triệu USD, doanh thu 64
                      triệu USD
                    </h5>
                    <p>
                      Nếu nói về những tựa <strong>game</strong>{" "}
                      <strong>bom tấn</strong> được đầu tư chi phí thấp nhưng
                      thu về bộn tiền thì không thể không nhắc đến Outlast - một
                      tựa game kinh dị có thể gây ám ảnh cho những con tim yếu
                      đuối. Dựa theo website gameindustry.biz thì Outlast trong
                      khi chỉ tốn khoảng 1.36 triệu CAD (đơn vị tiền tệ của
                      Canada) tương đương 1.14 triệu USD, mà lại thu về hơn 64
                      triệu USD. Con số này không chỉ chứng tỏ rằng đây là một
                      tựa game hay mà còn đánh dấu sự trở lại đầy ngoạn mục của
                      nhà phát triển kiêm phát hành Red Barrels.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-1628619405076633259899.jpg"
                      alt="1, GAME,SIÊU PHẨM,KINH PHÍ THẤP,CỘNG ĐỒNG MẠNG,BOM TẤN,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Lối chơi đơn giản, yếu tố kinh dị phối hợp với góc nhìn
                      thứ nhất đã tạo nên sự thành công ngoài mong đợi cho một
                      tựa <strong>game</strong> được đầu tư ngân sách thấp. Nếu
                      bạn nào đã từng chơi qua tựa game này rồi thì có thể khẳng
                      định rằng mức đầu tư thấp của game trái ngược hoàn toàn
                      với mức độ đầu tư về gameplay và trải nghiệm.
                    </p>
                    <h5>
                      Minecraft – Doanh thu 415 triệu USD (tính đến năm 2020)
                    </h5>

                    <p>
                      Dành cho những bạn nào chưa biết thì bản Minecraft đầu
                      tiên vốn chỉ được phát triển bởi đúng một người duy nhất
                      có tên là Markus "Notch" Persson. Một tựa{" "}
                      <strong>game</strong> indie với lối chơi và đồ họa cực kỳ
                      đơn giản, do đó không ai có thể ngờ rằng một tựa game như
                      vậy lại có thể thành công, được gọi là{" "}
                      <strong>bom tấn</strong> và trở thành một biểu tượng trong
                      lịch sử ngành game.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-1-16286194064721011885649.jpg"
                      alt="2, GAME,SIÊU PHẨM,KINH PHÍ THẤP,CỘNG ĐỒNG MẠNG,BOM TẤN,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Minecraft có mức doanh thu khủng khi con số bán ra vượt
                      hơn 200 triệu bản vào năm 2020 với doanh thu 415 triệu
                      USD. Vào tháng 9 năm 2014, Microsoft đã quyết định mua lại
                      Minecraft lẫn nhà phát triển Mojang với mức giá khủng lên
                      tới 2,5 tỷ đô la. Quả thật, Minecraft chính là một ví dụ
                      hùng hồn cho những tựa <strong>game</strong> được đầu tư
                      ít nhưng lại hái tiền khủng. Do Minecraft ban đầu được
                      phát triển bởi một người nên mình không rõ số tiền đầu tư
                      phát triển ban đầu là bao nhiêu.
                    </p>
                    <h5>
                      Starbound – Doanh số 2,5 triệu bản sau 6 tháng ra mắt
                      chính thức
                    </h5>

                    <p>
                      Starbound là một tựa <strong>game</strong> indie đặt người
                      chơi vào bối cảnh ở một hành tinh xa lạ với nhiệm vụ sửa
                      chữa lại tàu và khám phá vũ trụ. Nghe qua thì có vẻ đơn
                      giản và nhàm chán, tuy nhiên đây lại là một trong những
                      tựa game <strong>bom tấn</strong> mang lại số tiền khủng
                      cho nhà phát triển. Và nó cũng là một tựa game phải chơi
                      dành cho những game thủ nào đam mê thể loại game phiêu lưu
                      hành động 2D.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-2-1628619409020442551458.png"
                      alt="3, GAME,SIÊU PHẨM,KINH PHÍ THẤP,CỘNG ĐỒNG MẠNG,BOM TẤN,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Ban đầu thì nhà phát triển Chucklefish huy động vốn từ
                      cộng đồng, sau đó thì Starbound bị kẹt trong giai đoạn
                      Early Access một thời gian dài. Cho đến cuối cùng thì công
                      sức đầu tư của nhà phát triển đã không bị đổ sông đổ bể
                      khi Starbound bán hơn 2,5 triệu bản chỉ sau 6 tháng tựa{" "}
                      <strong>game</strong> này ra mắt chính thức, số liệu dựa
                      theo trang gameindustry.biz.
                    </p>
                    <p>
                      Từ đó doanh thu bán hàng của họ lên hàng chục triệu đô la,
                      cụ thể là hơn 22 triệu USD (tính trên Steam) dựa theo
                      trang <strong>Game</strong>s-Stats.com.
                    </p>
                    <h5>Tetris</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-3-16286194079931746831471.jpg"
                      alt="4, GAME,SIÊU PHẨM,KINH PHÍ THẤP,CỘNG ĐỒNG MẠNG,BOM TẤN,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Được phát triển bởi một kỹ sư phần mềm có tên là Alexey
                      Leonidovich Pajitnov vào năm 1984, tuy nhiên mãi cho đến
                      khi Tetris được phát hành trên Nintendo{" "}
                      <strong>Game</strong>boy vào năm 1989 thì tựa game này mới
                      trở nên thật sự phổ biến. Kể từ đó, Tetris phát triển rộng
                      rãi và trở thành một trong những tựa game{" "}
                      <strong>bom tấn</strong> bán chạy nhất mọi thời đại với
                      hơn 500 triệu bản được bán ra.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-4-16286194069711258019680.jpg"
                      alt="5, GAME,SIÊU PHẨM,KINH PHÍ THẤP,CỘNG ĐỒNG MẠNG,BOM TẤN,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Tetris có lối chơi đơn giản nhưng lại cực kỳ khó vì nó
                      được tạo ra để kiểm tra kỹ năng giải đố của người chơi
                      trong môi trường có nhịp độ nhanh, đòi hỏi tốc độ xử lý
                      tình huống cao. Cũng bởi vì yếu tố thú vị này đã khiến cho
                      tựa <strong>game</strong> có sức gây nghiện lớn và giúp
                      tăng doanh số bán hàng. Mặc dù tổng doanh số bán hàng cụ
                      thể không có sẵn (hay nói đúng hơn là gần như không thể
                      tính được do game có nhiều biến thể và xuất hiện trên
                      nhiều nền tảng), Henk Rogers – giám đốc điều hành của Công
                      ty Tetris cho biết rằng Tetris có 425 triệu lượt tải xuống
                      cho phiên bản di động. Và khoảng 70 triệu phiên bản vật lý
                      của game được bán ra. Đương nhiên, đây đều là những con số
                      từ năm 2014 nên hiện giờ Tetris dễ dàng vượt qua con số
                      500 triệu bản cũng là điều dễ hiểu.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>
                      Castle Crashers – Doanh thu 18 triệu USD (tính trên Steam)
                    </h5>
                    <p>
                      Những tựa <strong>game</strong> được phát hành trên Xbox
                      Live Arcade thường có mức đầu tư rất thấp, và Castle
                      Crasher là một trong số đó. Dù đây chỉ là một tựa game 2D
                      nhưng lại có tính gây nghiện rất cao, đó là còn chưa kể
                      game có hỗ trợ tối đa 4 người chơi để các bạn có thể rủ
                      bạn bè vào chung vui. Nếu như bạn thích các game thuộc thể
                      loại "beat ‘em up" như Super Smash Bros. thì khả năng cao
                      là bạn cũng sẽ chết mê chết mệt với tựa game này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/photo-5-16286194085001478920932.jpg"
                      alt="6, GAME,SIÊU PHẨM,KINH PHÍ THẤP,CỘNG ĐỒNG MẠNG,BOM TẤN,TIN TỨC GAME,"
                      note=""
                    />
                    <p>
                      Dành cho những bạn nào chưa biết thì tựa{" "}
                      <strong>game</strong> bán chạy nhất mọi thời đại trên Xbox
                      Live Arcade không ai khác chính là Castle Crashers. Theo
                      như trang Venturebeat.com thì game đã đạt được hơn 2,6
                      triệu lượt tải xuống. Do sở hữu những thành tích khủng này
                      mà Castle Crasher đã trở thành một tựa game{" "}
                      <strong>bom tấn</strong> được nhiều hệ máy console săn đón
                      như Nintendo Switch, PlayStation 4, và Xbox One. Vào ngày
                      16/8/2012, Castle Crasher có một phiên bành dành cho
                      Microsoft Windows phát hành độc quyền trên Steam. Phiên
                      bản này để giúp cho game thu về được một số tiền khủng là
                      18 triệu USD chỉ tính trên Steam.
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
