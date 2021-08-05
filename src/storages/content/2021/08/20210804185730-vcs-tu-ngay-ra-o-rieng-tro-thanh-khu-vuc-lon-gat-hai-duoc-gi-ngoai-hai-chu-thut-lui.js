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
"timestamp": '04/08/2021 06:57 PM',
"title": 'VCS từ ngày "ra ở riêng", trở thành khu vực lớn: Gặt hái được gì ngoài hai chữ "thụt lùi"?',
"description": 'Việc trở thành một khu vực độc lập vào năm 2018 tưởng như sẽ là cột mốc mới cho sự phát triển của VCS...',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/3/-16280085373611997724014.jpg',
"alt": 'LIÊN MINH HUYỀN THOẠI,LMHT,GAM,VCS,GARENA,MSI,CKTG,GAME,TIN TỨC GAME,TIN GAME,TIN LMHT,TIN LOL,',
"category": 'games',
"date": '04/08/2021',
"time": '06:57 PM',
"link": '/vcs-tu-ngay-ra-o-rieng-tro-thanh-khu-vuc-lon-gat-hai-duoc-gi-ngoai-hai-chu-thut-lui',
"zcomponent": 'page_20210804185730',
"filepath": './20210804185730-vcs-tu-ngay-ra-o-rieng-tro-thanh-khu-vuc-lon-gat-hai-duoc-gi-ngoai-hai-chu-thut-lui.js'
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
  'VCS từ ngày "ra ở riêng", trở thành khu vực lớn: Gặt hái được gì ngoài hai chữ "thụt lùi"?';
const author = "Loris CarryUs";
const source = "Pháp luật và bạn đọc";
const timestamp = "04/08/2021 06:57 PM";
const description =
  "Việc trở thành một khu vực độc lập vào năm 2018 tưởng như sẽ là cột mốc mới cho sự phát triển của VCS...";
const link =
  "vcs-tu-ngay-ra-o-rieng-tro-thanh-khu-vuc-lon-gat-hai-duoc-gi-ngoai-hai-chu-thut-lui";
const tagparam = [
  "LIÊN MINH HUYỀN THOẠI",
  "LMHT",
  "GAM",
  "VCS",
  "GARENA",
  "MSI",
  "CKTG",
  "GAME",
  "TIN TỨC GAME",
  "TIN GAME",
  "TIN LMHT",
  "TIN LOL",
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

export default function page_20210804185730() {
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
                      Giai đoạn cuối năm 2017 đánh dấu những cột mốc vô cùng
                      đáng nhớ đối với người hâm mộ <strong>LMHT</strong> Việt.
                      5 năm sau "cơn địa chấn" mang tên Saigon Joker tại{" "}
                      <strong>CKTG</strong> 2012, LMHT chuyên nghiệp Việt Nam
                      lại có thêm một bước nhảy vọt mới, khi chính thức được
                      Riot <strong>Gam</strong>es thừa nhận là một khu vực độc
                      lập.
                    </p>
                    <p>
                      Kể từ Mùa Xuân 2018, <strong>VCS</strong> tách ra khỏi hệ
                      thống giải đấu GPL (giải đấu <strong>LMHT</strong> Đông
                      Nam Á), trở thành một khu vực riêng và chắc có 1 slot tham
                      dự <strong>MSI</strong> cũng như <strong>CKTG</strong>.
                      Đây là một điều "hiển nhiên phải đến", khi các đội tuyển
                      LMHT Việt Nam đã cho thấy những bước nhảy vọt về tầm vóc
                      và trình độ so với những đối thủ cùng khu vực. Chúng ta vô
                      địch GPL 4 mùa giải liên tiếp, và các đội VCS (
                      <strong>GAM</strong> Esports, Young Generation) cũng trở
                      thành những đại diện Wild-card có màn trình diễn ấn tượng
                      nhất tại MSI 2017 và CKTG 2017.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/photo-1-16280085177881892451151.jpg"
                      alt="1, LIÊN MINH HUYỀN THOẠI,LMHT,GAM,VCS,GARENA,MSI,CKTG,GAME,TIN TỨC GAME,TIN GAME,TIN LMHT,TIN LOL,"
                      note="GAM Esports tại CKTG 2017 - Giải đấu cuối cùng mà các đội Việt Nam tham dự với tư cách đại diện của GPL"
                    />
                    <p>
                      Bước sang năm 2019, với việc Phong Vũ Buffalo thành công
                      vượt qua vòng Play-in tại <strong>MSI</strong> 2019,{" "}
                      <strong>VCS</strong> tiếp tục nhận được sự ưu ái từ Riot,
                      khi tăng số lượng slot tham dự <strong>CKTG</strong> lên
                      2, một đại diện vào thẳng vòng bảng và một đại diện tham
                      dự Play-in. Lúc này, vị thế của VCS đã được nâng tầm hoàn
                      toàn, sánh vai với 5 khu vực lớn khác là LCK, LPL, LCS,
                      LEC và PCS.
                    </p>
                    <p>
                      Tuy vậy, không phải ngẫu nhiên mà cho đến hiện tại, đã gần
                      4 năm trôi qua, người hâm mộ quốc tế lại chẳng có thêm bất
                      kỳ ấn tượng sâu đậm nào về "khu vực lớn thứ 6" này, ngoại
                      trừ ánh hào quang của <strong>GAM</strong> 2017 trong quá
                      khứ. Vậy rốt cuộc, điều gì đã xảy ra với{" "}
                      <strong>VCS</strong> trong suốt giai đoạn 2018 - 2021, với
                      tư cách một khu vực độc lập?
                    </p>
                    <h5>Thành tích quốc tế ngày càng thụt lùi</h5>
                    <p>
                      Nếu không tính 3 giải đấu quốc tế gần nhất mà{" "}
                      <strong>VCS</strong> không thể góp mặt (
                      <strong>MSI</strong> 2020 bị hủy, <strong>CKTG</strong>{" "}
                      2020, MSI 2021 không thể tham dự), thì so với MSI 2017 và
                      CKTG 2017, các đại diện VCS tham dự đấu trường quốc tế vẫn
                      chưa tạo thêm bất kỳ dấu ấn nào về mặt thành tích, nói
                      cách khác là dậm chân tại chỗ và... lùi dần đều.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2021/8/3/photo-1-16280089316771440700781.jpg"
                      alt="2, LIÊN MINH HUYỀN THOẠI,LMHT,GAM,VCS,GARENA,MSI,CKTG,GAME,TIN TỨC GAME,TIN GAME,TIN LMHT,TIN LOL,"
                      note="MSI 2017 là giải đấu mà đại diện VCS có được thành tựu tốt nhất trên đấu trường quốc tế"
                    />
                    <p>
                      Đội có thành tích tốt nhất tại một giải đấu cấp thế giới
                      là <strong>GAM</strong> Esports ở <strong>MSI</strong>{" "}
                      2017, với 3 ván thắng. Vài tháng sau đó, đội tuyển này
                      suýt nữa đã làm nên bất ngờ khi có được 2 ván thắng ở{" "}
                      <strong>CKTG</strong> và chỉ mất tấm vé vào Tứ kết sau
                      loạt trận tie-break.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/-16280085373611997724014.jpg"
                      alt="3, LIÊN MINH HUYỀN THOẠI,LMHT,GAM,VCS,GARENA,MSI,CKTG,GAME,TIN TỨC GAME,TIN GAME,TIN LMHT,TIN LOL,"
                      note=""
                    />
                    <p>
                      Cũng chính vì một chữ "suýt" này, mà người hâm mộ{" "}
                      <strong>LMHT</strong> Việt Nam, dẫu có tiếc nuối, vẫn đặt
                      niềm tin vào một viễn cảnh tương lai, nơi{" "}
                      <strong>VCS</strong> thành công vượt qua vòng bảng một
                      giải đấu quốc tế, để chen chân vào top 8 đội mạnh nhất thế
                      giới.
                    </p>
                    <p>
                      Nhưng rồi, ở các giải đấu <strong>MSI</strong> 2018,{" "}
                      <strong>CKTG</strong> 2018, MSI 2019, CKTG 2019 sau đó,
                      các đại diện Việt Nam như EVOS Esports, Phong Vũ Buffalo,
                      hay chính <strong>GAM</strong> Esports, đều không thể hiện
                      thực hóa mục tiêu đó. Thậm chí tại CKTG 2019, GAM còn trở
                      thành nỗi thất vọng tràn trề, khi đặt mục tiêu vào top 4,
                      nhưng lại sớm ra về từ vòng bảng với thành tích 1 thắng -
                      5 thua.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      So sánh giữa <strong>CKTG</strong> 2019 và{" "}
                      <strong>MSI</strong> 2017, dường như thành tích{" "}
                      <strong>VCS</strong> chỉ có giảm mà không có tăng, trong
                      khi một giải đấu bị coi là "hết thời" như PCS, thì lại
                      ngày càng cho thấy dấu hiệu trở lại mạnh mẽ, điển hình là
                      vị trí top 4 mà PSG Talon có được tại MSI 2021 vừa qua.
                    </p>
                    <h5>Ngập ngụa trong drama</h5>
                    <p>
                      Không để lại thêm bất kỳ dấu ấn nào trên đấu trường chuyên
                      nghiệp, thậm chí không góp mặt ở 3 giải đấu gần nhất,
                      nhưng rốt cuộc, người hâm một quốc tế vẫn phải liên tục
                      nhắc tên <strong>VCS</strong>, vì những vụ bê bối, drama
                      truyền kỳ xoay quanh giải đấu này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2021/8/3/photo-1-16280085807661798042211.jpg"
                      alt="4, LIÊN MINH HUYỀN THOẠI,LMHT,GAM,VCS,GARENA,MSI,CKTG,GAME,TIN TỨC GAME,TIN GAME,TIN LMHT,TIN LOL,"
                      note=""
                    />
                    <p>
                      Điển hình là vụ việc Zeros bị ban vĩnh viễn do phát ngôn
                      liên quan đến dịch bệnh vừa qua. Sự việc này đã được rất
                      nhiều kênh truyền thông đình đám trên thế giới đưa tin, và
                      thậm chí từ khóa Zeros còn trở thành hot search trên MXH
                      Weibo trong suốt một tuần lễ.
                    </p>
                    <p>
                      Liên tiếp là những án phạt liên quan đến hành vi ứng xử,
                      vi phạm hợp đồng, gian lận, tham gia cá độ, khiến{" "}
                      <strong>VCS</strong> bỗng chốc trở thành cái gai trong mắt
                      khán giả nước nhà. SofM quả thực là niềm tự hào của
                      Esports Việt Nam, nhưng nhìn cái cách mà người hâm mộ
                      trong nước - Nơi sở hữu giải đấu nằm trong top 6 thế giới,
                      chỉ còn biết bấu víu vào duy nhất một tuyển thủ đã xa nhà
                      ngót 5 năm để tìm kiếm niềm vui chiến thắng, thì bảo sao
                      không chua xót.
                    </p>
                    <h5>Câu hỏi lớn về trách nhiệm của Nhà phát hành</h5>
                    <p>
                      <strong>LMHT</strong> từng được gọi là tựa{" "}
                      <strong>gam</strong>e "quốc dân" tại Việt Nam, nhưng thực
                      tế là trong 2 - 3 năm gần đây, bộ môn này dường như đã bị
                      ghẻ lạnh hoàn toàn bởi NPH <strong>Garena</strong>. Dù có
                      muốn lấp liếm đến đâu đi nữa thì việc hệ thống giải đấu
                      chuyên nghiệp <strong>VCS</strong> được triển khai một
                      cách hời hợt, thậm chí dẫn đến "đóng băng" vô thời hạn như
                      hiện tại, khi đặt lên bàn cân so sánh với những giải đấu
                      hoành tráng của Liên Quân Mobile hay Free Fire - Những tựa{" "}
                      <strong>game</strong> anh em của nó, cũng khiến cộng đồng
                      không khỏi nhức nhối.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/690/133514250583805952/2021/8/3/lmht-16280088209501443872345.png"
                      alt="5, LIÊN MINH HUYỀN THOẠI,LMHT,GAM,VCS,GARENA,MSI,CKTG,GAME,TIN TỨC GAME,TIN GAME,TIN LMHT,TIN LOL,"
                      note=""
                    />
                    <p>
                      Chất lượng giải đấu vốn đã bị hoài nghi, mà chất lượng
                      trải nghiệm của <strong>gam</strong>e thủ thì lại càng tệ.
                      Việc Client <strong>LMHT</strong> lỗi liên tục trong vòng
                      hơn 1 tuần vừa qua, đã khiến sự bức xúc của cộng đồng gần
                      như vượt khỏi giới hạn. Một số giả thuyết cho rằng, ngay
                      cả khi Client vốn là sản phẩm của Riot{" "}
                      <strong>Game</strong>s, thì việc <strong>Garena</strong>{" "}
                      đưa quá nhiều sự kiện vào game (mà sự kiện cần gì thì ai
                      cũng biết rồi) mới là nguyên nhân dẫn đến sự quá tải, lỗi
                      lên lỗi xuống, lỗi trái lỗi phải, lỗi nay lỗi mai... của
                      Client game.
                    </p>
                    <p>
                      Cộng đồng <strong>gam</strong>e thủ Việt ngán ngẩm khi lỗi
                      sự kiện thì fix rất nhanh, thậm chí fix ngay trong đêm,
                      nhưng lỗi tính năng thì nửa tháng rồi mà "nguyễn y vân"
                    </p>
                    <p>
                      Việc trải nghiệm một tựa <strong>gam</strong>e, một giải
                      đấu Esports với chất lượng luôn bị đặt dấu hỏi, và mang
                      nặng những bầu không khí tiêu cực, liệu có phải là thứ mà
                      người chơi của "một trong 6 khu vực lớn" đáng phải nhận?
                      Trong khi PCS, dù cũng bị lên án vì Client đấy, nhưng ít
                      ra họ còn được an ủi vì thành công mà các đội tuyển của
                      mình gặt hái được. Còn <strong>VCS</strong>, vốn từng là
                      cái tên được kỳ vọng sẽ thế chỗ của PCS, thì sau 3 năm "ra
                      ở riêng", chẳng thu lại thành quả gì ngoài những bước đi
                      giật lùi.
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
