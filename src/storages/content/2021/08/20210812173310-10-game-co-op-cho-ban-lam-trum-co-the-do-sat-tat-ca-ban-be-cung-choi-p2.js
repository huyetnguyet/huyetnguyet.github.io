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
"timestamp": '12/08/2021 05:33 PM',
"title": '10 game co-op cho bạn làm trùm, có thể "đồ sát" tất cả bạn bè cùng chơi (P2)',
"description": 'Đây đều là những game co-op rất hay mà bạn không nên bỏ qua.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287855378722059225818.jpg',
"alt": 'VIRUS NGUY HIỂM,KHU VỰC NGUY HIỂM,VIRUS CHẾT NGƯỜI,GAME HÀNH ĐỘNG,GAME CO-OP,',
"category": 'games',
"date": '12/08/2021',
"time": '05:33 PM',
"link": '/10-game-co-op-cho-ban-lam-trum-co-the-do-sat-tat-ca-ban-be-cung-choi-p2',
"zcomponent": 'page_20210812173310',
"filepath": './20210812173310-10-game-co-op-cho-ban-lam-trum-co-the-do-sat-tat-ca-ban-be-cung-choi-p2.js'
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
  '10 game co-op cho bạn làm trùm, có thể "đồ sát" tất cả bạn bè cùng chơi (P2)';
const author = "Real Madrid";
const source = "Trí Thức Trẻ";
const timestamp = "12/08/2021 05:33 PM";
const description =
  "Đây đều là những game co-op rất hay mà bạn không nên bỏ qua.";
const link =
  "10-game-co-op-cho-ban-lam-trum-co-the-do-sat-tat-ca-ban-be-cung-choi-p2";
const tagparam = [
  "VIRUS NGUY HIỂM",
  "KHU VỰC NGUY HIỂM",
  "VIRUS CHẾT NGƯỜI",
  "GAME HÀNH ĐỘNG",
  "GAME CO-OP",
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

export default function page_20210812173310() {
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
                      10 <strong>game co-op</strong> cho bạn làm trùm, có thể
                      "đồ sát" tất cả bạn bè cùng chơi (P1)
                    </p>
                    <h5>Deceit</h5>
                    <p>
                      Trong Deceit, bạn sẽ cùng 5 game thủ khác thức dậy trong
                      một căn nhà rộng lớn. Hai trong số 6 người đã bị nhiễm một
                      thứ <strong>virus nguy hiểm</strong> biến họ thành những
                      sinh vật đầy nguy hiểm. Tuy nhiên, bạn sẽ không hề biết ai
                      trong số những người đồng hành của mình là quái vật. Họ sẽ
                      lén lút hành động và kết liễu bạn khi bạn sơ ý.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287855378722059225818.jpg"
                      alt="1, VIRUS NGUY HIỂM,KHU VỰC NGUY HIỂM,VIRUS CHẾT NGƯỜI,GAME HÀNH ĐỘNG,GAME CO-OP,"
                      note=""
                    />
                    <p>
                      Trong vai người chơi, nhiệm vụ cuối cùng của bạn là sống
                      sót và thoát khỏi <strong>khu vực nguy hiểm</strong>.
                      Ngược lại, trong vai quái vật, bạn sẽ phải diễn sâu hết
                      mức có thể để giành lấy niềm tin của những người chơi
                      khác, với mục tiêu cuối cùng là lây nhiễm{" "}
                      <strong>virus chết người</strong> cho họ trong mỗi màn
                      chơi.
                    </p>
                    <h5>Cluck Night</h5>
                    <p>
                      Đến từ nhà phát hành của Naughty Kitties , Cluck Night là
                      một <strong>game hành động</strong> sinh tồn thời gian
                      thực hoàn toàn mới với đồ họa theo phong cách hoạt hình
                      bất đối xứng và lối chơi 4v1 đầy tính cạnh tranh.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287860587141384611990.jpg"
                      alt="2, VIRUS NGUY HIỂM,KHU VỰC NGUY HIỂM,VIRUS CHẾT NGƯỜI,GAME HÀNH ĐỘNG,GAME CO-OP,"
                      note=""
                    />
                    <p>
                      Trong trang trại kinh dị của Cluck Night, bạn có thể đảm
                      nhận vai trò của một con gà (mỗi con có khả năng riêng)
                      hoặc chủ của trang trại kinh dị. Leon là một con người to
                      lớn và hắn sẽ làm tất cả trong khả năng của mình để tiêu
                      diệt mối đe dọa nhỏ bé này. Tuy nhiên, gà lại có sự vượt
                      trội về số lượng! Nếu đoàn kết với nhau, chúng có thể xoay
                      chuyển tình thế và trốn thoát.
                    </p>
                    <h5>Identity V</h5>
                    <p>
                      Cốt truyện của Identity V kể về một thám tử tên Orpheus
                      đang cố gắng từ từ làm sáng tỏ bí ẩn chưa có lời giải đáp
                      đằng sau một trò chơi giết người bí ẩn trong trang viên
                      Oletus, sau khi nhận được một bức thư ủy nhiệm từ một
                      người giấu tên nhờ ông điều tra vụ mất tích của một bé
                      gái.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628786423457278217628.jpg"
                      alt="3, VIRUS NGUY HIỂM,KHU VỰC NGUY HIỂM,VIRUS CHẾT NGƯỜI,GAME HÀNH ĐỘNG,GAME CO-OP,"
                      note=""
                    />
                    <p>
                      Chế độ trận đấu nhanh và trận đấu xếp hạng bao gồm năm
                      người chơi. Một người trong số đó là thợ săn, và bốn người
                      còn lại là những kẻ sống sót. Có nhiều nhân vật khác nhau
                      để người chơi lựa chọn (hầu hết trong số đó phải được mở
                      khóa từ trước), mỗi nhân vật đều có điểm mạnh, điểm yếu và
                      khả năng riêng, vì vậy không có vòng nào là hoàn toàn
                      giống nhau cả.
                    </p>
                    <p>
                      Mục tiêu của thợ săn là tìm và loại bỏ tất cả những kẻ
                      sống sót trước khi họ trốn thoát khỏi trang viên thành
                      công. Để làm được điều này, thợ săn phải truy đuổi từng kẻ
                      sống sót riêng lẻ và tấn công người đó bằng những kỹ năng
                      và đòn tấn công của riêng mình. Việc này cứ thế lặp đi lặp
                      lại cho đến khi kết thúc trận đấu.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Trong khi đó, mục tiêu của kẻ sống sót là cố gắng trốn
                      thoát qua hai cổng thoát hiểm bằng cách mở chúng bằng mật
                      khẩu mà họ có được sau khi giải mã xong năm máy mã hóa.
                      Khi những kẻ sống sót bắt đầu trận đấu, họ phải ngay lập
                      tức tiến hành công việc giải mã máy mã hóa và cố gắng hoàn
                      thành việc này càng sớm càng tốt. Trong suốt thời gian
                      này, một trong những kẻ sống sót sẽ bị thợ săn truy đuổi.
                    </p>
                    <h5>Resident Evil Resistance</h5>
                    <p>
                      {" "}
                      Resident Evil Resistance là một tựa game sinh tồn online 1
                      đấu 4 lấy bối cảnh những bạn trẻ bị dụ dỗ hoặc bị bắt cóc
                      bởi bộ phận tình báo của tập đoàn Umbrella. Sau đó họ được
                      gửi đến cơ sở NEST2 và buộc phải chiến đấu với các dị nhân
                      và quái vật mà Umbrella đang nghiên cứu nhằm mục đích thay
                      mặt các thành viên cấp cao của tập đoàn này chứng minh
                      tính hiệu quả của dự án T-Virus.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/12/photo-1-1628786619806973252991.jpg"
                      alt="4, VIRUS NGUY HIỂM,KHU VỰC NGUY HIỂM,VIRUS CHẾT NGƯỜI,GAME HÀNH ĐỘNG,GAME CO-OP,"
                      note=""
                    />
                    <p>
                      Game thủ sẽ được lựa chọn giữa 2 phe là Mastermind (kẻ chủ
                      mưu) và Survivor (người sống sót). Người chơi phe
                      Mastermind sẽ không đối đầu trực diện với 4 người sống sót
                      mà sẽ quan sát họ thông qua những chiếc camera nằm rải rác
                      khắp nơi. Nhiệm vụ của kẻ chủ mưu đó là thu thập các thông
                      tin về phản ứng của vật thí nghiệm khi đối mặt và tiêu
                      diệt những người sống sót, đồng thời đặt bẫy một cách
                      thông minh để ngăn không cho ai có thể trốn thoát được.
                      Ngược lại, về phe những người sống sót thì anh em sẽ phải
                      phối hợp với nhau vượt qua các cạm bẫy được đặt ở khắp
                      nơi, đồng thời sử dụng vũ khí để đánh trả hoặc chạy trốn
                      khỏi các sinh vật thí nghiệm khát máu.
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
