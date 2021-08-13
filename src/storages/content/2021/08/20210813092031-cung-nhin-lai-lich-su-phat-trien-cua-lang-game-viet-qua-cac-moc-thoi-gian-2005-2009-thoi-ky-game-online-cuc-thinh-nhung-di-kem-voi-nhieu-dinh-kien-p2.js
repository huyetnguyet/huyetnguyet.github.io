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
"timestamp": '13/08/2021 09:20 AM',
"title": 'Cùng nhìn lại lịch sử phát triển của làng game Việt qua các mốc thời gian: 2005-2009, thời kỳ game online cực thịnh nhưng đi kèm với nhiều định kiến (p2)',
"description": '2005 - 2009 có thể coi là quãng thời gian phát triển mạnh mẽ nhất của làng game Việt.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/6/photo-1-16282477392111513328995.jpg',
"alt": 'GAME THỦ,GAME,TIN TỨC GAME,AUDITION,CAO BỒI KHÔNG GIAN,VÕ LÂM TRUYỀN KỲ,MU ONLINE,PRISON TALE,',
"category": 'games',
"date": '13/08/2021',
"time": '09:20 AM',
"link": '/cung-nhin-lai-lich-su-phat-trien-cua-lang-game-viet-qua-cac-moc-thoi-gian-2005-2009-thoi-ky-game-online-cuc-thinh-nhung-di-kem-voi-nhieu-dinh-kien-p2',
"zcomponent": 'page_20210813092031',
"filepath": './20210813092031-cung-nhin-lai-lich-su-phat-trien-cua-lang-game-viet-qua-cac-moc-thoi-gian-2005-2009-thoi-ky-game-online-cuc-thinh-nhung-di-kem-voi-nhieu-dinh-kien-p2.js'
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
  "Cùng nhìn lại lịch sử phát triển của làng game Việt qua các mốc thời gian: 2005-2009, thời kỳ game online cực thịnh nhưng đi kèm với nhiều định kiến (p2)";
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "13/08/2021 09:20 AM";
const description =
  "2005 - 2009 có thể coi là quãng thời gian phát triển mạnh mẽ nhất của làng game Việt.";
const link =
  "cung-nhin-lai-lich-su-phat-trien-cua-lang-game-viet-qua-cac-moc-thoi-gian-2005-2009-thoi-ky-game-online-cuc-thinh-nhung-di-kem-voi-nhieu-dinh-kien-p2";
const tagparam = [
  "GAME THỦ",
  "GAME",
  "TIN TỨC GAME",
  "AUDITION",
  "CAO BỒI KHÔNG GIAN",
  "VÕ LÂM TRUYỀN KỲ",
  "MU ONLINE",
  "PRISON TALE",
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

export default function page_20210813092031() {
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
                      Tiếp nối series của kỳ trước, hãy cùng tới với những cột
                      mốc tiếp theo của làng <strong>game</strong> Việt trong số
                      này nhé.
                    </p>
                    <h5>
                      6/2005: FPT mang về tựa <strong>game</strong> online 3D
                      đầu tiên
                    </h5>
                    <p>
                      Có thể là một cái tên xa lạ và ít người biết tới nhưng
                      thực tế, vào năm 2005, FPT đã mang{" "}
                      <strong>Prison Tale</strong> (PTV) - tựa{" "}
                      <strong>game</strong> online đầu tiên có đồ họa 3D về Việt
                      Nam. Tuy nhiên, Prison Tale sau đó đã thành dự án thất bại
                      thảm hai. Cũng dễ hiểu thôi, khi mà ở thời điểm ấy, các{" "}
                      <strong>game thủ</strong> Việt vẫn còn đang đắm chìm trong
                      không khí rộn ràng của các tựa game kiếm hiệp như{" "}
                      <strong>Võ Lâm Truyền Kỳ</strong>. Do đó, cái tên Prison
                      Tale mới chẳng được ai biết tới.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/photo-1-1628247054967587415449.jpg"
                      alt="1, GAME THỦ,GAME,TIN TỨC GAME,AUDITION,CAO BỒI KHÔNG GIAN,VÕ LÂM TRUYỀN KỲ,MU ONLINE,PRISON TALE,"
                      note="Prison Tale phiên bản PC và mobile"
                    />
                    <h5>
                      7/2005: <strong>MU Online</strong> "lậu" suy tàn
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/photo-1-16282472095901487845691.jpg"
                      alt="2, GAME THỦ,GAME,TIN TỨC GAME,AUDITION,CAO BỒI KHÔNG GIAN,VÕ LÂM TRUYỀN KỲ,MU ONLINE,PRISON TALE,"
                      note=""
                    />
                    <p>
                      Đây có thể coi là một trong những bước đầu tiên đánh dấu
                      sự sụp đổ của huyền thoại "lậu" một thời. Liên tục các
                      server của MU Hà Nội bị nhắm tới, sập dần và để lại không
                      ít tiếc nuối cho các{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      Việt.
                    </p>
                    <h5>
                      8/2005: <strong>Võ Lâm Truyền Kỳ</strong> bắt đầu thu phí
                      giờ chơi,{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      phẫn nộ
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/photo-1-1628247431277363659588.png"
                      alt="3, GAME THỦ,GAME,TIN TỨC GAME,AUDITION,CAO BỒI KHÔNG GIAN,VÕ LÂM TRUYỀN KỲ,MU ONLINE,PRISON TALE,"
                      note=""
                    />
                    <p>
                      {" "}
                      Sau một thời gian ra mắt miễn phí,{" "}
                      <strong>Võ Lâm Truyền Kỳ</strong> bắt đầu có những động
                      thái đầu tiên khiến nhiều{" "}
                      <strong>
                        <strong>game</strong> thủ
                      </strong>{" "}
                      cảm thấy tức giận. Đó chính là việc thu phí giờ chơi. Tuy
                      rằng gặp phải rất nhiều ý kiến phản đối cũng như không ít
                      game thủ còn kêu gọi tẩy chay ở thời điểm ấy, thế nhưng
                      cơn sốt Võ Lâm Truyền Kỳ cũng không vì thế mà dừng lại.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Tuy nhiên, sau cùng thì ý tưởng thu phí giờ chơi cũng thất
                      bại. Nhưng việc đổi cách tận dụng tối đa doanh thu qua hệ
                      thống Cash Shop sau này lại càng khiến cho VLTK phát triển
                      cực thịnh, nhưng rồi cũng là thứ đẩy nó xuống dốc khi
                      những chênh lệch giàu nghèo, đại gia dân cày bắt đầu bộc
                      lộ rõ hơn bao giờ hết.
                    </p>
                    <h5>
                      9/2005: Tựa <strong>game</strong> MU bản quyền đầu tiên ở
                      Việt Nam xuất hiện
                    </h5>
                    <p>
                      Đây có lẽ là quãng thời gian đầy sóng gió của làng{" "}
                      <strong>game</strong> Việt, khi mà bên cạnh việc cho ra
                      mắt không ít những siêu phẩm mới, game online cũng dần bị
                      đánh giá như một trong những vấn nạn của xã hội. 9/2005,{" "}
                      <strong>MU Online</strong> chính thức được FPT phát hành ở
                      Việt Nam. Chỉ một năm sau đó, <strong>Audition</strong> và{" "}
                      <strong>Cao Bồi Không Gian</strong> cũng ra mắt đánh dấu
                      sự phát triển của thương hiệu VTC game. Và cả hai đã thật
                      sự làm nên những vụ nổ lớn, ghi đậm dấu ấn với các{" "}
                      <strong>game thủ</strong>.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/photo-1-16282477473831425104337.jpg"
                      alt="4, GAME THỦ,GAME,TIN TỨC GAME,AUDITION,CAO BỒI KHÔNG GIAN,VÕ LÂM TRUYỀN KỲ,MU ONLINE,PRISON TALE,"
                      note="Cao Bồi Không Gian"
                    />
                    <p>
                      Tuy nhiên, cũng trong quãng thời gian đó, bộ luật về giới
                      hạn giờ chơi <strong>game</strong> online được thông qua
                      với chỉ tối đa 5 tiếng mỗi ngày. Điều này cũng bắt nguồn
                      từ việc xuất hiện vô số những tin tiêu cực, vấn nạn liên
                      quan tới nạn nghiện game.
                    </p>
                    <h5>
                      2006 - 2009: Quãng thời gian phát triển nhưng không kém
                      rắc rối
                    </h5>
                    <p>
                      Đây có thể coi là những ngày không mấy yên ả của làng{" "}
                      <strong>game</strong> Việt. Lượng người chơi vẫn tăng
                      mạnh, cũng có luôn những tựa game khá thành công như{" "}
                      <strong>Võ Lâm Truyền Kỳ</strong> 2, Crossfire hay Silk
                      Road. Thế nhưng, cả ba cái tên kể trên đều chẳng thể tạo
                      được sức hút quá lớn. Tất cả cũng chỉ vì game online ở
                      thời điểm ấy đang là một vấn đề khá nhạy cảm.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/6/photo-1-16282477392111513328995.jpg"
                      alt="5, GAME THỦ,GAME,TIN TỨC GAME,AUDITION,CAO BỒI KHÔNG GIAN,VÕ LÂM TRUYỀN KỲ,MU ONLINE,PRISON TALE,"
                      note=""
                    />
                    <ContentImage
                      src="https://static-cmsads.admicro.vn/cmsads/2021/01/phot-1609988157328.jpeg"
                      alt="6, GAME THỦ,GAME,TIN TỨC GAME,AUDITION,CAO BỒI KHÔNG GIAN,VÕ LÂM TRUYỀN KỲ,MU ONLINE,PRISON TALE,"
                      note=""
                    />
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
