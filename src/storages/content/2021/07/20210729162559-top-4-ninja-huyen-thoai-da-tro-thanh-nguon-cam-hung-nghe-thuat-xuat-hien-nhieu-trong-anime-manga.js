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
"timestamp": '29/07/2021 04:25 PM',
"title": 'Top 4 ninja huyền thoại đã trở thành nguồn cảm hứng nghệ thuật, xuất hiện nhiều trong anime/manga',
"description": 'Từ những chiến binh Tokugawa trung thành đến người sáng lập Kunoichi đều trở thành cảm hứng sáng tác cho các mangaka.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-16272838335811881199361.jpg',
"alt": 'NINJA,KUNOICHI,NINJA HUYỀN THOẠI,HANZO HATTORI,KOTARO FUMA,SASUKE SARUTOBI,CHIYOME MOCHIZUKI,',
"category": 'news',
"date": '29/07/2021',
"time": '04:25 PM',
"link": '/top-4-ninja-huyen-thoai-da-tro-thanh-nguon-cam-hung-nghe-thuat-xuat-hien-nhieu-trong-anime-manga',
"zcomponent": 'page_20210729162559',
"filepath": './20210729162559-top-4-ninja-huyen-thoai-da-tro-thanh-nguon-cam-hung-nghe-thuat-xuat-hien-nhieu-trong-anime-manga.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  "Top 4 ninja huyền thoại đã trở thành nguồn cảm hứng nghệ thuật, xuất hiện nhiều trong anime/manga";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:25 PM";
const description =
  "Từ những chiến binh Tokugawa trung thành đến người sáng lập Kunoichi đều trở thành cảm hứng sáng tác cho các mangaka.";
const link =
  "top-4-ninja-huyen-thoai-da-tro-thanh-nguon-cam-hung-nghe-thuat-xuat-hien-nhieu-trong-anime-manga";
const tagparam = [
  "NINJA",
  "KUNOICHI",
  "NINJA HUYỀN THOẠI",
  "HANZO HATTORI",
  "KOTARO FUMA",
  "SASUKE SARUTOBI",
  "CHIYOME MOCHIZUKI",
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

export default function page_20210729162559() {
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
                      Vì các <strong>ninja</strong> thường hành động bí mật và
                      việc chiến đấu mặt đối mặt chỉ được họ dùng đến trong
                      trường hợp thực sự cần thiết nên tên tuổi và những hành
                      động của họ ít được sử sách lưu lại. Mặc dù vậy, nhiều
                      ninja đã trở thành đề tài, nguồn cảm hứng cho các tác phẩm
                      nghệ thuật và văn học của Nhật Bản.
                    </p>
                    <p>
                      Dưới đây là 4 <strong>ninja</strong> huyền thoại xuất hiện
                      nhiều nhất trên các phương tiện thông tin đại chúng, trong
                      sách, truyện và anime:
                    </p>
                    <h5>1. Hanzo Hattori</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-1-16272838335811881199361.jpg"
                      alt="1, NINJA,KUNOICHI,NINJA HUYỀN THOẠI,HANZO HATTORI,KOTARO FUMA,SASUKE SARUTOBI,CHIYOME MOCHIZUKI,"
                      note=""
                    />
                    <p>
                      Hattori Hanzo được coi <strong>ninja</strong> nổi tiếng
                      nhất sống vào nửa cuối thế kỷ XVI. Tầm chiến lược quân sự
                      và sự dũng cảm trên chiến trường đã mang lại cho ông cái
                      tên Oni no Hanzo, tiếng Nhật có nghĩa là Quỷ dữ Hanzo.
                    </p>
                    <p>
                      Vào năm 1582, khi bạo chúa Nobunaga Oda qua đời, trong
                      tình cảnh hỗn loạn đó, Hanzo đã chỉ huy 300{" "}
                      <strong>ninja</strong> khác cứu được Tokugawa Ieyasu –
                      người về sau trở thành người sáng lập và cũng là tướng
                      quân đầu tiên của mạc phủ Tokugawa khỏi một cuộc phản
                      loạn. Về sau, ông còn giúp Tokugawa Ieyasu khôi phục lại
                      gia tộc vốn đã lụi tàn trong cuộc tranh đấu với các gia
                      tộc đối thủ. Tuy nhiên trong quá trình làm việc dưới
                      trướng Tokugawa, Hanzo nổi tiếng với biệt danh “Quỷ bán
                      tạng” vì sự tàn ác khi làm nhiệm vụ.
                    </p>
                    <h5>2. Kotaro Fuma</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/26/photo-1-16272838355341232622964.jpg"
                      alt="2, NINJA,KUNOICHI,NINJA HUYỀN THOẠI,HANZO HATTORI,KOTARO FUMA,SASUKE SARUTOBI,CHIYOME MOCHIZUKI,"
                      note=""
                    />
                    <p>
                      Fuma Kotaro là thủ lĩnh của Bộ tộc Fuma - một nhóm nhỏ các
                      nhẫn giả hoạt động độc lập ở vùng Kanagawa. Với khả năng
                      đánh lừa thị giác và sử dụng lửa trong chiến trận, Kotaro
                      còn có cái tên "Hỏa chủ". Dưới thời đại của Kotaro, quân
                      đội của ông có cái tên khác là Rappa, nghĩa là "Những kẻ
                      đặt dấu chấm hết cho mọi trận chiến". Các Rappa thiện
                      chiến tới mức nhiều trận chiến của họ đã được ghi vào lịch
                      sử.{" "}
                    </p>
                    <p>
                      Một trong những truyền thuyết nổi tiếng về Fuma Kotaro
                      chính là trận chiến giữa vị nhẫn giả nửa người nửa quỷ này
                      với <strong>ninja</strong> vĩ đại và nổi tiếng nhất xứ sở
                      hoa anh đào <strong>Hanzo Hattori</strong>. Có thể nói,
                      tên tuổi của Fuma Kotaro đã trở thành một huyền thoại với
                      hai danh hiệu "Phong quỷ" và "Hỏa chủ" - biến ông trở
                      thành nguồn cảm hứng vĩ đại cho rất nhiều văn hóa phẩm
                      Nhật Bản về sau.
                    </p>
                    <h5>3. Sasuke Sarutobi</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-2-1627283836554614453141.jpg"
                      alt="3, NINJA,KUNOICHI,NINJA HUYỀN THOẠI,HANZO HATTORI,KOTARO FUMA,SASUKE SARUTOBI,CHIYOME MOCHIZUKI,"
                      note=""
                    />
                    <p>
                      Sarutobi Sasuke là một nhân vật quan trọng trong văn hóa
                      dân gian Nhật Bản. Vì vậy, trong nhiều manga, tiểu thuyết,
                      anime, sách, trò chơi tên của ông được trích dẫn hoặc nhân
                      vật của ông được miêu tả một cách nào đó.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Sarutobi Sasuke là cái tên mà nhiều người tin rằng ông
                      thực sự tồn tại, và nhiều thành tựu của ông trong cuốn
                      sách là có thật. Tuy nhiên, cũng có không ít người cho
                      rằng nhân vật này chỉ được lấy cảm hứng từ một tiểu thuyết
                      dựa trên một <strong>ninja</strong> từ Thời Minh Trị, đó
                      là Kozuki Sasuke.
                    </p>
                    <p>
                      Vì vậy, không thể chắc chắn Sarutobi Sasuke có thực sự tồn
                      tại hay không. Nhưng dù thế nào cái tên Sarutobi Sasuke đã
                      đạt được giá trị lớn và tầm quan trọng cho thế giới{" "}
                      <strong>ninja</strong> và cho cả văn hóa Nhật Bản.
                    </p>
                    <h5>4. Chiyome Mochizuki</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/26/photo-3-16272838360571222589799.jpg"
                      alt="4, NINJA,KUNOICHI,NINJA HUYỀN THOẠI,HANZO HATTORI,KOTARO FUMA,SASUKE SARUTOBI,CHIYOME MOCHIZUKI,"
                      note=""
                    />
                    <p>
                      Nếu như Hattori Hanzo, bậc thầy về nhẫn thuật, một võ
                      tướng oai dũng dưới chướng Tokugawa cuối thời Sengoku, là{" "}
                      <strong>ninja</strong> vĩ đại nhất thuộc cánh mày râu thì
                      Mochizuki Chiyome là nữ ninja vĩ đại nhất của xứ sở hoa
                      anh đào.
                    </p>
                    <p>
                      Tương truyền, Mochizuki Chiyome vốn xuất thân từ tầng lớp
                      quý tộc, bà là vợ của lãnh chúa, Samurai tài giỏi
                      Mochizuki Nobumas (người được cho là xuất thân từ gia tộc{" "}
                      <strong>Ninja</strong> huyền thoại Koga).
                    </p>
                    <p>
                      Năm 1575, Mochizuki bắt đầu sự nghiệp{" "}
                      <strong>Kunoichi</strong> của mình khi đứng ra tuyển mộ 1
                      đội quân <strong>ninja</strong> nữ hùng mạnh, bao gồm trẻ
                      mồ côi, phụ nữ đến geisha, nạn nhân chiến tranh... Tất cả
                      đều được Mochizuki đào tạo, huấn luyện mọi kỹ năng cần
                      thiết như nhẫn thuật, cải trang, cách săn tin tình báo cần
                      có ở 1 người con gái... Kết quả, bà đã thu nhận và lãnh
                      đạo 1 đội quân "nữ điệp viên" lớn và vô cùng trung thành,
                      số lượng lên tới 200-300 người, ai cũng có thể làm nhiệm
                      vụ ám sát chỉ với 1 chiếc kẹp tóc hay trâm cài.
                    </p>
                    <p>Tổng hợp</p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
