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
"timestamp": '05/08/2021 08:47 AM',
"title": 'Đừng "nhìn mặt mà bắt hình dong", 5 nhân vật anime này mạnh hơn rất nhiều so với vẻ ngoài "ngáo ngơ" của mình',
"description": 'Không giống như bề ngoài của mình, một số nhân vật trong anime sở hữu sức mạnh vô cùng kinh khủng khiến nhiều người phải e sợ.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/anh-1-16280589606261873536026.jpg',
"alt": 'ANIME,NHÂN VẬT ANIME,DRAGON BALL,ONE PIECE,BLACK CLOVER,',
"category": 'games',
"date": '05/08/2021',
"time": '08:47 AM',
"link": '/dung-nhin-mat-ma-bat-hinh-dong-5-nhan-vat-anime-nay-manh-hon-rat-nhieu-so-voi-ve-ngoai-ngao-ngo-cua-minh',
"zcomponent": 'page_20210805084741',
"filepath": './20210805084741-dung-nhin-mat-ma-bat-hinh-dong-5-nhan-vat-anime-nay-manh-hon-rat-nhieu-so-voi-ve-ngoai-ngao-ngo-cua-minh.js'
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
  'Đừng "nhìn mặt mà bắt hình dong", 5 nhân vật anime này mạnh hơn rất nhiều so với vẻ ngoài "ngáo ngơ" của mình';
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "05/08/2021 08:47 AM";
const description =
  "Không giống như bề ngoài của mình, một số nhân vật trong anime sở hữu sức mạnh vô cùng kinh khủng khiến nhiều người phải e sợ.";
const link =
  "dung-nhin-mat-ma-bat-hinh-dong-5-nhan-vat-anime-nay-manh-hon-rat-nhieu-so-voi-ve-ngoai-ngao-ngo-cua-minh";
const tagparam = [
  "ANIME",
  "NHÂN VẬT ANIME",
  "DRAGON BALL",
  "ONE PIECE",
  "BLACK CLOVER",
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

export default function page_20210805084741() {
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
                    <h5>Tony Tony Chopper - One Piece</h5>
                    <p>
                      Tony Tony Chopper là bác sĩ của băng hải tặc Mũ Rơm và là
                      thành viên thứ 6 của băng, Chopper sở hữu trái ác quỷ Hito
                      Hito hệ Zoan. Chopper nguyên gốc là một chú tuần lộc mũi
                      xanh quê ở đảo Drum của Grand Line, do trái ác quỷ này mà
                      Chopper đã biến thành con người và có được những sức mạnh
                      vượt trội.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/anh-1-16280589606261873536026.jpg"
                      alt="1, ANIME,NHÂN VẬT ANIME,DRAGON BALL,ONE PIECE,BLACK CLOVER,"
                      note=""
                    />
                    <p>
                      Tuy chỉ treo thưởng có vỏn vẹn 100 Beri và với vẻ ngoài dễ
                      thương nên Tony thường bị lầm tưởng là "pet" của băng,
                      nhưng sức mạnh của Chopper thì có lẽ bất cứ ai cũng phải
                      nể phục. Nhờ vào Rumble Ball, Chopper có tới 7 dạng tiến
                      hóa khác nhau và với mỗi dạng tiến hóa lại có những sức
                      mạnh đặc biệt riêng, biến anh trở thành một "quái vật"
                      thực sự trong băng Mũ Rơm. Thậm chí mới đây Chopper còn
                      đạt được một hình thức mới, có thể kéo dài Rumble Ball
                      được tới tận 30 phút và tăng sức mạnh lên rất nhiều và đối
                      đầu được với Queen- một thành viên đứng đầu băng Bách Thú.
                    </p>
                    <h5>Charmy Pappitson - Black Clover</h5>
                    <p>
                      Chắc hẳn không có gì đáng ngạc nhiên khi mọi người thường
                      đánh giá thấp Charmy Pappitson, bởi vì cô chủ yếu xuất
                      hiện với một khuôn mặt phiên bản chibi không thể "ngây
                      thơ" hơn. Tuy ban đầu cô là một người rất vui vẻ và vô tư,
                      thế nhưng thái độ của cô sẽ thay đổi 100% khi đồng đội và
                      thức ăn của cô bị đe dọa. Từ một người tham ăn lười biếng,
                      cô sẽ biến thành một pháp sư cực kỳ đáng sợ với sức mạnh
                      ma thuật ấn tượng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/anh-2-16280589606471974322512.jpg"
                      alt="2, ANIME,NHÂN VẬT ANIME,DRAGON BALL,ONE PIECE,BLACK CLOVER,"
                      note=""
                    />
                    <p>
                      Với phép thuật của mình, Charmy có thể trói đối thủ của
                      mình dù họ mạnh thế nào. Còn khi tấn công cô có thể triệu
                      tập một ram khổng lồ đủ mạnh để hạ gục đối thủ chỉ trong
                      chưa đầy ba đòn. Đặc biệt gần đây, cô còn phát triển một
                      khả năng mới cho phép bản thân có thể nuốt chửng năng
                      lượng ma thuật của đối thủ và biến nó thành của mình.
                    </p>
                    <h5>
                      Rimuru Tempest - That Time I Got Reincarnated as a Smile
                    </h5>
                    <p>
                      Sau khi chết Satoru Mikami được tái sinh vào một thế giới
                      mới với tư cách là một con Slime tên là Rimuru Tempest.
                      Tuy nhiên, không giống như chất nhờn trung bình, anh ta sở
                      hữu một bộ kỹ năng độc đáo. Với sức mạnh của Gluttony, anh
                      ta có thể tiêu thụ các vật liệu hữu cơ và vô cơ, và lưu
                      trữ chúng bên trong bản thân, cũng như tái tạo sự xuất
                      hiện của những sinh vật mà anh ta hấp thụ. Sau đó, anh sẽ
                      phân tích các thuộc tính và kỹ năng của họ và hấp thụ
                      chúng tăng sức mạnh của chính mình trong quá trình này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/anh-3-1628058960651473090571.jpg"
                      alt="3, ANIME,NHÂN VẬT ANIME,DRAGON BALL,ONE PIECE,BLACK CLOVER,"
                      note=""
                    />
                    <p>
                      Nhờ Great Sage, anh có thể lưu trữ và tìm hiểu thông tin
                      về hầu hết mọi loại phép thuật với tốc độ nhanh. Với sức
                      mạnh của mình, Rimuru đã tiến hóa thành một con quỷ quỷ và
                      trở thành người thống trị của Liên đoàn Tempest Jura.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Arale - Dr. Slump/ Dragon Ball</h5>
                    <p>
                      Mặc dù cô là nhân vật chính trong Dr. Slump nhưng Arale
                      cũng là gương mặt thường xuyên của{" "}
                      <strong>Dragon Ball</strong> . Cô nổi bật với tính cách
                      "ngây thơ vô số tội" cùng sức mạnh phi thường. Arale có
                      vóc dáng của 1 cô bé tầm 7-8 tuổi nhưng trong lúc lúng
                      túng, tiến sĩ nói Arale 13 tuổi. Arale rất ngây thơ và ham
                      chơi đúng với tuổi của mình. Cô bé thường không phân biệt
                      được việc tốt xấu, người ngay kẻ gian, chỉ cần vui là cô
                      sẽ đi theo. Tuy nhiên kết cục của những tên xấu xa muốn
                      hãm hại cô thường…thảm hại vì sức mạnh "kinh khủng" của
                      Arale.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/anh-4-16280589606771636364776.jpg"
                      alt="4, ANIME,NHÂN VẬT ANIME,DRAGON BALL,ONE PIECE,BLACK CLOVER,"
                      note=""
                    />
                    <p>
                      Arale có tốc độ cực khủng khiếp, có thể di chuyển từ trái
                      đất đến sao thổ trong vài giây, chạy quanh trái đất nhiều
                      vòng trong thời gian ngắn. Bật nhảy từ sao hỏa đến sao kim
                      với 1 cú dậm chân duy nhất. Cô bé còn cực khỏe, có thể dễ
                      dàng nâng 100 tấn, đấm nứt trái đất, ném đá hủy diệt mặt
                      trăng. Trong <strong>Dragon Ball</strong> Super, Arale dễ
                      dàng đánh bại Vegeta và thậm chí chiến đấu với Goku dưới
                      dạng Super Saiyan Blue.
                    </p>
                    <h5>
                      Grand Zeno- <strong>Dragon Ball</strong> Super
                    </h5>
                    <p>
                      Một trong những gương mặt ngây thơ nhưng sở hữu sức mạnh
                      kinh khủng nhất <strong>anime</strong> không thể không
                      nhắc đến Zeno của <strong>Dragon Ball</strong> Super. Zeno
                      là một nhân vật có hình dạng giống con người và rất nhỏ.
                      Khuôn mặt ông khá biểu cảm và có phần hơi ngố ngố. Zeno có
                      phần rất giống với trẻ con. Ông được miêu tả là khá hài
                      hước nhưng khi thực hiện nhiệm vụ của mình thì cực kỳ
                      nghiêm túc, và không bao giờ có tư tưởng thiên vị ai trong
                      tất cả 12 vũ trụ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/anh-5-16280589606801938776326.jpg"
                      alt="5, ANIME,NHÂN VẬT ANIME,DRAGON BALL,ONE PIECE,BLACK CLOVER,"
                      note=""
                    />
                    <p>
                      Tuy nhiên trái với vẻ ngoài nhỏ bé của mình thì Zeno được
                      coi là nhân vật mạnh nhất trong{" "}
                      <strong>Dragon Ball</strong>, và sức mạnh thực sự của ông
                      thì không ai biết. Beerus nói rằng ông không bao giờ tham
                      chiến và Zeno sở hữu sức mạnh vô biên. Whis nói rằng không
                      ai trên thế giới này mạnh hơn Zeno, vì ông sẽ là người sau
                      cùng loại bỏ bất cứ điều gì; từ cá nhân, các hành tinh,
                      thiên hà đến toàn bộ vũ trụ. Chỉ cần Zeno cảm thấy thích,
                      ông có thể hủy hoại toàn bộ 12 vũ trụ chỉ trong một cái
                      phẩy tay.
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
