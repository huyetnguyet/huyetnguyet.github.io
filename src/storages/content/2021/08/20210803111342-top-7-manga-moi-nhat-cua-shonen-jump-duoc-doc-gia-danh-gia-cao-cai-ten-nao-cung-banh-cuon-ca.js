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
"timestamp": '03/08/2021 11:13 AM',
"title": 'Top 7 manga mới nhất của Shonen Jump được độc giả đánh giá cao, cái tên nào cũng "bánh cuốn" cả',
"description": 'Trong số rất nhiều tựa truyện đã được thêm vào năm 2021, đây là 7 bộ truyện tranh Shonen Jump mới hay nhất.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/nh-1-16278903561831983263743.jpg',
"alt": 'MANGA SHOUNEN,WEEKLY SHONEN JUMP,MANGA NHẬT BẢN,MANGA MỚI,',
"category": 'games',
"date": '03/08/2021',
"time": '11:13 AM',
"link": '/top-7-manga-moi-nhat-cua-shonen-jump-duoc-doc-gia-danh-gia-cao-cai-ten-nao-cung-banh-cuon-ca',
"zcomponent": 'page_20210803111342',
"filepath": './20210803111342-top-7-manga-moi-nhat-cua-shonen-jump-duoc-doc-gia-danh-gia-cao-cai-ten-nao-cung-banh-cuon-ca.js'
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
  'Top 7 manga mới nhất của Shonen Jump được độc giả đánh giá cao, cái tên nào cũng "bánh cuốn" cả';
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "03/08/2021 11:13 AM";
const description =
  "Trong số rất nhiều tựa truyện đã được thêm vào năm 2021, đây là 7 bộ truyện tranh Shonen Jump mới hay nhất.";
const link =
  "top-7-manga-moi-nhat-cua-shonen-jump-duoc-doc-gia-danh-gia-cao-cai-ten-nao-cung-banh-cuon-ca";
const tagparam = [
  "MANGA SHOUNEN",
  "WEEKLY SHONEN JUMP",
  "MANGA NHẬT BẢN",
  "MANGA MỚI",
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

export default function page_20210803111342() {
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
                      Tạp chí <strong>Weekly Shonen Jump</strong> là nơi khai
                      sinh và giúp nhiều <strong>manga shounen</strong> lẫn
                      mangaka vang danh. Tất nhiên mọi tác giả của Weekly Shonen
                      Jump đều ước vọng tác phẩm mình sáng tạo được nổi tiếng
                      tương tự Dragon Ball (Akira Toriyama) hoặc One Piece
                      (Eiichiro Oda).
                    </p>
                    <p>
                      Vì thế hàng năm có rất nhiều <strong>manga mới</strong>{" "}
                      xuất hiện trên tạp chí danh tiếng này. Và năm nay cũng
                      không khác gì, với một loạt manga mới xuất hiện để lấp đầy
                      khoảng trống sắp bị bỏ lại trên tạp chí hàng tuần.
                    </p>
                    <p>
                      Dưới đây chính là 7 bộ nổi bật nhất được độc giả đánh giá
                      cao.
                    </p>
                    <h5>Witch Watch</h5>
                    <p>
                      Từ tác giả tạo ra Astra Lost in Space, Witch Watch tiếp
                      nối series hành động Guardian of the Witch, gần đây đã kết
                      thúc trên <strong>Weekly Shonen Jump</strong> sau 19
                      chương. Bộ truyện bắt đầu vào tháng 2 và được viết bởi
                      Kenta Shinohara (tác giả Astra Lost in Space, SKET DANCE;
                      cả hai đều nhận được bản chuyển thể anime). Witch Watch
                      phát hành các chương mới vào Chủ nhật hàng tuần.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/nh-1-16278903561831983263743.jpg"
                      alt="1, MANGA SHOUNEN,WEEKLY SHONEN JUMP,MANGA NHẬT BẢN,MANGA MỚI,"
                      note=""
                    />
                    <p>
                      Witch Watch là <strong>manga shounen</strong> có cách tiếp
                      cận ý tưởng nhẹ nhàng hơn, cùng những người bạn tuổi teen
                      Morihito, người sở hữu sức mạnh như yêu tinh và Niko phù
                      thủy huấn luyện, tập hợp lại dưới một mái nhà, manga cũng
                      cho thấy khía cạnh kỳ quặc, hài hước.
                    </p>
                    <h5>Candy Flurry</h5>
                    <p>
                      Trong Candy Flurry, sau khi những viên kẹo ban sức mạnh bí
                      ẩn trôi nổi khắp Nhật Bản, Tokyo hoàn toàn bị xóa sổ bởi
                      những cây kẹo mút. Câu chuyện tập trung vào một lolypop
                      bất thường, Tsumugi Minase, cậu phải che giấu sức mạnh của
                      mình vì sợ bị nhầm lẫn với kẻ xấu đã xóa sổ Tokyo. Trong
                      khi đó, một thành viên của lực lượng cảnh sát săn kẹo gia
                      nhập trường học của Tsumugi, truy đuổi những người sử dụng
                      kẹo bất hợp pháp.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/anh-2-16278903560791959148292.jpg"
                      alt="2, MANGA SHOUNEN,WEEKLY SHONEN JUMP,MANGA NHẬT BẢN,MANGA MỚI,"
                      note=""
                    />
                    <p>
                      Đến từ bộ đôi mangaka Mitarashi Santa và Takeguchi Ippon.
                      Sau khi bắt đầu đăng vào tháng 4/2021, các chương mới của
                      Candy Flurry sẽ ra mắt vào Chủ nhật hàng tuần.
                    </p>
                    <h5>I Tell C</h5>
                    <p>
                      Bắt đầu được đăng dài kỳ vào đầu tháng 2 trên{" "}
                      <strong>Weekly Shonen Jump</strong>, I Tell C là{" "}
                      <strong>manga shounen</strong> sở hữu câu chuyện trinh
                      thám với plot twist: điều tra viên chính, Risa Aioi, có lẽ
                      còn nguy hiểm hơn nhiều so với những tên tội phạm mà cô
                      bắt giữ. "Trông nom" cô bao gồm hai anh em thám tử Sakon
                      và Ukon Futatsuki, những người giữ truyền thống trong công
                      việc chống tội phạm của họ; Risa không bận tâm đến việc
                      tìm kiếm manh mối hoặc động cơ - cô ấy bị nghi ngờ chỉ đơn
                      giản là "yêu" họ, sau đó buộc đối tượng phải từ bỏ tình
                      cảm.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/anh-3-16278903561022002019264.png"
                      alt="3, MANGA SHOUNEN,WEEKLY SHONEN JUMP,MANGA NHẬT BẢN,MANGA MỚI,"
                      note=""
                    />
                    <p>
                      I Tell C do Kazusa Inaoka phụ trách, người từng xuất bản
                      manga trước đó, Invade You trên{" "}
                      <strong>Weekly Shonen Jump</strong> với chỉ 16 chương
                      trong năm 2018. Các chương mới của I Tell C được đăng hàng
                      tuần vào Chủ nhật.
                    </p>

                    <RelationNewsInPage category={category} />
                    <h5>Choujin X</h5>

                    <p>
                      Trong thế giới của Choujin X , những con quái vật có khả
                      năng ma quái tồn tại, được gọi là choujin. Từ nhỏ 2 thanh
                      niên Tokio Kurohara và Azuma Higashi đã gắn bó với nhau.
                      Cả 2 đều nhìn như có tính cách đối lập lẫn nhau nhưng cả
                      hai thường xuyên bảo vệ những người dễ bị tổn thương trong
                      các cuộc đánh nhau tàn bạo trên đường phố. Tuy nhiên, khi
                      họ gặp phải một choujin đang đe dọa tính mạng của họ , hai
                      cậu bé phải trải qua một quá trình biến đổi kỳ cục để tồn
                      tại, mở ra cho họ một thế giới mới của các vị thần và quái
                      vật.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/anh-4-16278903561081087799477.jpeg"
                      alt="4, MANGA SHOUNEN,WEEKLY SHONEN JUMP,MANGA NHẬT BẢN,MANGA MỚI,"
                      note=""
                    />
                    <p>
                      Được vẽ bởi Sui Ishida, tác giả của Tokyo Ghoul, Choujin X
                      sẽ có lịch trình cập nhật không thường xuyên. Ishida đã
                      thông qua lịch phát hành manga không phải hàng tuần này để
                      tránh sự kiệt quệ khủng khiếp mà anh ấy đã trải qua trong
                      khi làm cho manga kinh dị của mình tốt nhất. Choujin X có
                      vẻ là một bộ truyện tranh được minh họa đẹp mắt, kết hợp
                      tương tự mối quan hệ của tình bạn với sự kinh dị về cơ
                      thể.
                    </p>
                    <h5>Blue Box</h5>
                    <p>
                      Shonen Jump không chỉ là nơi dành cho những câu chuyện
                      hành động. Nhiều manga lãng mạng cũng từng lên sóng trong
                      lịch sự của tạp chí, với Blue Box là một trong những câu
                      chuyện mới nhất. Manga cũng bổ sung thêm một chút biến tấu
                      cho thể loại lãng mạn có yếu tố thể thao: Taiki Inomata là
                      một vận động viên cầu lông bị mê hoặc với vận động viên
                      bóng rổ vô cùng tài năng, Chinatsu. Cả hai phát triển mối
                      quan hệ thông qua việc truyền cảm hứng cho nhau, chỉ để
                      Taiki dần nhận ra rằng mẹ của Chinatsu là bạn với mẹ của
                      anh ấy – và, trong khi gia đình Chinatsu ở nước ngoài, cô
                      ấy sẽ ở trong nhà của anh ấy.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/anh-5-1627890356132513858937.jpg"
                      alt="5, MANGA SHOUNEN,WEEKLY SHONEN JUMP,MANGA NHẬT BẢN,MANGA MỚI,"
                      note=""
                    />
                    <p>
                      Blue Box là một câu chuyện tình cảm về sự kết nối giữa con
                      người với nhau. Nó được vẽ rất đẹp, đôi khi giống một bộ
                      truyện tranh shojo hơn là một bộ truyện tranh thông
                      thường. Nếu Blue Box tiếp tục, nó có thể góp tên mình vào
                      shounen jump .
                    </p>
                    <h5>The Elusive Samurai</h5>
                    <p>
                      Một trong những tựa manga, hay nhất đang được đón chò trên
                      Shonen Jump là một câu chuyện có nhân vật chính tránh
                      chiến đấu với bất kỳ ai. Hojo Tokiyuki là một hoàng tử trẻ
                      đã sống sót sau một cuộc đảo chính quân sự, trong đó cả
                      gia đình anh bị sát hại. Hojo cố gắng trốn thoát chỉ để
                      thấy mình liên tục chạy trốn khi cả tỉnh quay lưng lại với
                      cậu. Và trong khi Hojo không thể chiến đấu để sinh tồn,
                      anh ấy có thể chạy trốn … rất tốt .
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/anh-6-1627890356140961594982.jpg"
                      alt="6, MANGA SHOUNEN,WEEKLY SHONEN JUMP,MANGA NHẬT BẢN,MANGA MỚI,"
                      note=""
                    />
                    <p>
                      Được tạo ra bởi Yusei Matsui, tác giả của Assassination
                      Classroom, manga sử thi lịch sử-viễn tưởng này, trong một
                      khoảng thời gian ngắn, đã trở thành một trong những điểm
                      nổi bật của các <strong>manga mới</strong> hơn của Shonen
                      Jump . Loạt manga không chỉ bất ngờ về cảm xúc mà còn dữ
                      dội đến bất ngờ, bắt đầu với tất cả các cảm xúc ở mức cao
                      nhất và không bao giờ bỏ cuộc.
                    </p>
                    <h5>Red Hood</h5>
                    <p>
                      Red Hood là <strong>manga shounen</strong> được viết và
                      minh họa bởi Yuuki Kawaguchi. Red Hood được xuất bản trên
                      tạp chí <strong>Weekly Shonen Jump</strong> số 30, ra mắt
                      ngày tháng 6/2021.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/anh-7-16278903561721243495674.jpg"
                      alt="7, MANGA SHOUNEN,WEEKLY SHONEN JUMP,MANGA NHẬT BẢN,MANGA MỚI,"
                      note=""
                    />
                    <p>
                      Red Hood có cốt truyện thuộc thể loại hành động, giả tưởng
                      được đặt trong một vũ trụ thay thế, nơi mà người sói và
                      những sinh vật kỳ diệu khác tồn tại, có cậu bé 13 tuổi nọ
                      muốn trở thành thợ săn để bảo vệ ngôi làng nơi cậu sinh
                      sống. Tuy nhiên, cậu sẽ cần sự giúp đỡ của hiệp hội thợ
                      săn cho mục đích này.
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
