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
"timestamp": '19/08/2021 12:53 PM',
"title": 'Naruto: Những thông tin và sự kiện quan trọng trong 3 cuộc Đại chiến thế giới Ninja đầu tiên',
"description": 'Ba cuộc đại chiến Ninja đầu tiên đã cướp đi sinh mạng của rất nhiều người.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629093479714282877037.png',
"alt": 'NARUTO,BORUTO,ĐẠI CHIẾN THẾ GIỚI NINJA,CUỘC CHIẾN NINJA,LÀNG NINJA,',
"category": 'games',
"date": '19/08/2021',
"time": '12:53 PM',
"link": '/naruto-nhung-thong-tin-va-su-kien-quan-trong-trong-3-cuoc-dai-chien-the-gioi-ninja-dau-tien',
"zcomponent": 'page_20210819125355',
"filepath": './20210819125355-naruto-nhung-thong-tin-va-su-kien-quan-trong-trong-3-cuoc-dai-chien-the-gioi-ninja-dau-tien.js'
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
  "Naruto: Những thông tin và sự kiện quan trọng trong 3 cuộc Đại chiến thế giới Ninja đầu tiên";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "19/08/2021 12:53 PM";
const description =
  "Ba cuộc đại chiến Ninja đầu tiên đã cướp đi sinh mạng của rất nhiều người.";
const link =
  "naruto-nhung-thong-tin-va-su-kien-quan-trong-trong-3-cuoc-dai-chien-the-gioi-ninja-dau-tien";
const tagparam = [
  "NARUTO",
  "BORUTO",
  "ĐẠI CHIẾN THẾ GIỚI NINJA",
  "CUỘC CHIẾN NINJA",
  "LÀNG NINJA",
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

export default function page_20210819125355() {
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
                      Chúng ta đã được nghe nhiều về những cuộc đại chiến ninja
                      trong <strong>Naruto</strong>. Nhưng có lẽ thông tin về ba
                      cuộc đại chiến xảy ra trước khi đại chiến ninja lần thứ 4
                      bùng nổ thì không nhiều người nắm rõ. Nguyên nhân dẫn tới
                      ba cuộc đại chiến ninja lần 1, 2, 3 là do những xung đột
                      chính trị và cái tôi từ mỗi ngôi làng, đã cướp đi sinh
                      mạng của nhiều người.
                    </p>
                    <p>
                      Dưới đây là một số sự kiện ngắn gọn từ ba cuộc chiến đầu
                      tiên trong thế giới ninja:
                    </p>
                    <h5>
                      1. Cuộc chiến đầu tiên bắt đầu kể từ khi hệ thống làng
                      được hình thành
                    </h5>
                    <p>
                      Sau khi Hashirama cùng Madara lập ra Konoha và khái niệm
                      này được các làng khác bắt chước, không lâu sau đó Chiến
                      tranh thế giới Ninja lần thứ nhất đã nổ ra. Nguyên nhân là
                      do làng nào cũng muốn thể hiện khả năng và vị thế của mình
                      hơn những làng mới thành lập khác, năm{" "}
                      <strong>làng ninja</strong> lớn đều tham gia vào cuộc đại
                      chiến này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629093479714282877037.png"
                      alt="1, NARUTO,BORUTO,ĐẠI CHIẾN THẾ GIỚI NINJA,CUỘC CHIẾN NINJA,LÀNG NINJA,"
                      note=""
                    />
                    <p>
                      Nguyên nhân chính vẫn chưa được biết, nhưng có khả năng là
                      Madara đã tấn công Onoki (lúc còn trẻ) và Mu của làng Đá.
                      Sau đó Hashirama thậm chí còn mời tất cả các Kage đến để
                      nói về hòa bình và phân phối Bijuu một cách bình đẳng để
                      sức mạnh của tất cả các làng lớn trở nên ổn định.
                    </p>
                    <h5>
                      2. Cuộc đại chiến đầu tiên kết thúc bằng một hiệp định
                      đình chiến
                    </h5>
                    <p>
                      Chiến tranh thế giới Ninja lần thứ nhất kéo dài khá lâu.
                      Mặc dù không có chi tiết rõ ràng, nhưng tôi tin rằng cuộc
                      chiến đầu tiên là cuộc chiến dài nhất trong bốn cuộc
                      chiến. Lý do là vì cuộc chiến này kéo dài từ nhiệm kỳ của
                      Hashirama cho đến hết nhiệm kỳ của Tobirama.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16290934820882058592726.png"
                      alt="2, NARUTO,BORUTO,ĐẠI CHIẾN THẾ GIỚI NINJA,CUỘC CHIẾN NINJA,LÀNG NINJA,"
                      note=""
                    />
                    <p>
                      Bản thân Konoha đã mất Hokage Tobirama vào cuối cuộc đại
                      chiến này vì ông đã hy sinh bản thân để chống lại lực
                      lượng của Kinkaku và Ginkaku của làng Mây.
                    </p>
                    <p>
                      Sau khi năm ngôi làng bị ảnh hưởng nặng nề bởi cuộc chiến
                      tranh lớn, cuối cùng tất cả đã đồng ý kết thúc chiến tranh
                      bằng một hiệp định đình chiến, chứ không vì mục đích hòa
                      bình, để rồi vài năm sau đại chiến Ninja lần thứ hai xảy
                      ra.
                    </p>
                    <h5>
                      3. Đại chiến ninja lần thứ 2 đã "sản sinh" nhiều nhân vật
                      quan trọng
                    </h5>
                    <p>
                      Đối với sự phát triển của bộ truyện{" "}
                      <strong>Naruto</strong>,{" "}
                      <strong>Đại chiến thế giới Ninja</strong> lần thứ hai đã
                      sinh ra rất nhiều nhân vật quan trọng. Trong cuộc chiến
                      này, ba Sannin là Jiraiya, Orochimaru và Tsunade đã được
                      Hanzo của làng Mưa đặt cho danh xưng này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-2-1629093481575831695682.jpg"
                      alt="3, NARUTO,BORUTO,ĐẠI CHIẾN THẾ GIỚI NINJA,CUỘC CHIẾN NINJA,LÀNG NINJA,"
                      note=""
                    />
                    <p>
                      Tsunade cũng có thể chữa lành những chất kịch độc do Chiyo
                      chế tạo, vì vậy Tsunade được biết đến như một ninja y
                      thuật tuyệt vời. Cuộc chiến này đã khiến Nagato mồ côi cha
                      mẹ, rồi cậu cùng với Yahiko và Konan đã được Jiraiya huấn
                      luyện trong 3 năm sau đó.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Sakumo Hatake đã giết chết cha mẹ của Sasori, trở thành
                      anh hùng của làng Lá với biệt danh Nanh Trắng. Cũng trong
                      cuộc chiến đó, Sakumo đã thất bại trong việc thực hiện một
                      nhiệm vụ vì đã giúp đỡ bạn mình. Cuối cùng vì dằn vặt bởi
                      cảm giác tội lỗi, ông đã tự sát trước cuộc đại chiến thứ
                      ba.
                    </p>
                    <h5>
                      4. Đại chiến Ninja lần nào cũng có sự góp mặt của Konoha
                      và làng Đá
                    </h5>
                    <p>
                      Từ lâu, người ta đã biết rằng Konoha và làng Đá đều rất
                      mạnh. Điều này được chứng minh qua việc Konoha và làng Đá
                      luôn tham gia vào Thế chiến Ninja và thậm chí còn trở
                      thành ngôi làng trung tâm của cuộc chiến.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-3-1629093482608548892024.jpg"
                      alt="4, NARUTO,BORUTO,ĐẠI CHIẾN THẾ GIỚI NINJA,CUỘC CHIẾN NINJA,LÀNG NINJA,"
                      note=""
                    />
                    <p>
                      Đặc biệt cuộc đại chiến Ninja lần thứ 3 xuất phát từ xung
                      đột giữa Konoha và làng Đá, sau đó lan sang các làng khác,
                      cụ thể là làng Cát, Sương Mù và làng Mây. Chiến tranh thế
                      giới Ninja lần thứ ba là cuộc chiến đầu tiên mà kết quả
                      cuối cùng thuộc về một ngôi làng cụ thể, kẻ thắng là
                      Konoha và phe thua cuộc là làng Đá.
                    </p>
                    <p>
                      Nguyên nhân vì Minato đã thành công trong việc phá hủy
                      đường tiếp cận hỗ trợ hậu cần cho quân làng Đá, cụ thể là
                      cây cầu Kannabi để quân làng Đá thiếu hỗ trợ trong cuộc
                      chiến và buộc phải rút lui. Người ta nói rằng Onoki cũng
                      buộc phải thừa nhận thất bại trước Hiruzen trong cuộc
                      chiến thứ ba này. Konoha và làng Đá đồng ý kết thúc chiến
                      tranh.
                    </p>
                    <h5>
                      5. Những khoảnh khắc chiến đấu của đội Minato đã xảy ra
                      rất nhiều trong đại chiến Ninja thứ ba
                    </h5>
                    <p>
                      Như thể <strong>Đại chiến Thế giới Ninja</strong> lần thứ
                      ba được xây dựng chỉ để dành cho đội của Minato, bao gồm
                      Minato, Kakashi, Obito và Rin thể hiện.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-4-1629093482114986422208.png"
                      alt="5, NARUTO,BORUTO,ĐẠI CHIẾN THẾ GIỚI NINJA,CUỘC CHIẾN NINJA,LÀNG NINJA,"
                      note=""
                    />
                    <p>
                      Trong cuộc chiến này, Obito đã "chết", vì vậy Kakashi đã
                      nhận được 1 mắt Sharingan từ người bạn của mình và câu
                      chuyện của anh ấy với tư cách là Ninja sao chép bắt đầu.
                    </p>
                    <p>
                      Minato cũng đã được tìm cách phá hủy cây cầu Kannabi và
                      anh được biết đến như một anh hùng của Konoha vì sau đó
                      Konoha đã chiến thắng trong cuộc chiến này. Sau đó, Minato
                      tuyên thệ nhậm chức Hokage đệ tứ.
                    </p>
                    <p>
                      Một thời điểm sau đó không lâu, Rin cũng chết "dưới tay
                      Kakashi" và Obito trở nên hoàn toàn xấu xa, hợp lực và
                      thực hiện kế hoạch của Madara.
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
