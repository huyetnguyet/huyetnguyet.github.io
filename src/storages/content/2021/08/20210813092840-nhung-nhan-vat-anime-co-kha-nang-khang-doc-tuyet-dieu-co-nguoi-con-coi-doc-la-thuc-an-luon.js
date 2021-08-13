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
"timestamp": '13/08/2021 09:28 AM',
"title": 'Những nhân vật Anime có khả năng kháng độc tuyệt diệu, có người còn coi độc là thức ăn luôn',
"description": 'Dù cho trúng phải loại độc gì thì những nhân vật anime này cũng không gục ngã.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-1628823377261838656799.jpg',
"alt": 'ANIME/MANGA,KHẢ NĂNG MIỄN ĐỘC,NHÂN VẬT ANIME KHÁNG ĐỘC,KHẢ NĂNG KHÁNG ĐỘC,CHẤT ĐỘC TRONG ANIME,',
"category": 'games',
"date": '13/08/2021',
"time": '09:28 AM',
"link": '/nhung-nhan-vat-anime-co-kha-nang-khang-doc-tuyet-dieu-co-nguoi-con-coi-doc-la-thuc-an-luon',
"zcomponent": 'page_20210813092840',
"filepath": './20210813092840-nhung-nhan-vat-anime-co-kha-nang-khang-doc-tuyet-dieu-co-nguoi-con-coi-doc-la-thuc-an-luon.js'
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
  "Những nhân vật Anime có khả năng kháng độc tuyệt diệu, có người còn coi độc là thức ăn luôn";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "13/08/2021 09:28 AM";
const description =
  "Dù cho trúng phải loại độc gì thì những nhân vật anime này cũng không gục ngã.";
const link =
  "nhung-nhan-vat-anime-co-kha-nang-khang-doc-tuyet-dieu-co-nguoi-con-coi-doc-la-thuc-an-luon";
const tagparam = [
  "ANIME/MANGA",
  "KHẢ NĂNG MIỄN ĐỘC",
  "NHÂN VẬT ANIME KHÁNG ĐỘC",
  "KHẢ NĂNG KHÁNG ĐỘC",
  "CHẤT ĐỘC TRONG ANIME",
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

export default function page_20210813092840() {
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
                      Trong thế giới <strong>anime/manga</strong>, chất độc là
                      một trong những yếu tố nguy hiểm bậc nhất mà các nhân vật
                      thường sử dụng trong chiến đấu. Vì mức độ nguy hiểm của nó
                      là khá nghiêm trọng, nên có một số người đã khiến cơ thể
                      của mình có thể miễn độc
                    </p>
                    <p>Dưới đây là 5 nhân vật không thể bị đầu độc:</p>
                    <h5>1. Mifune (Naruto Shippuden)</h5>
                    <p>
                      Mifune được biết đến là một Samurai rất mạnh. Mifune là
                      bậc thầy về tuyệt kỹ Iaido trong võ sĩ đạo, một kĩ năng
                      rút kiếm lướt tới chém đứt đối thủ nhanh đến nỗi máu không
                      kịp dính lại trên lưỡi kiếm và kết thúc bằng động tác tra
                      kiếm lại vào bao, trong khi đối thủ vẫn còn đang kết ấn.
                      Hanzou từng nhận xét rằng mọi nhẫn thuật đều vô dụng với
                      Mifune, do kỹ thuật xuất kiếm nhanh như chớp của ông,
                      khiến ninja không kịp kết ấn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-1-1628823377261838656799.jpg"
                      alt="1, ANIME/MANGA,KHẢ NĂNG MIỄN ĐỘC,NHÂN VẬT ANIME KHÁNG ĐỘC,KHẢ NĂNG KHÁNG ĐỘC,CHẤT ĐỘC TRONG ANIME,"
                      note=""
                    />
                    <p>
                      Bản thân Mifune đã thua trong trận chiến đầu tiên với
                      Hanzo. Nhưng may mắn vẫn đứng về phía ông để ông có thể
                      sống sót sau thất bại. Mifune thậm chí đã có thời gian để
                      lấy thuốc giải độc từ Hanzo và sau đó bắt đầu phát triển
                      khả năng miễn dịch với chất độc. Khả năng miễn dịch của
                      Mifune đủ lớn để đối phó với chất độc từ Hanzo và con kỳ
                      nhông của ông ta.
                    </p>
                    <h5>2. Grinpatch (Toriko)</h5>
                    <p>
                      Đây là một trong những chiến binh từ tổ chức Gourmet Corp
                      được cho là thiên địch của Coco, kẻ sử dụng chất độc mạnh
                      nhất trong thế giới Toriko.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/13/photo-1-1628823378733470148368.jpg"
                      alt="2, ANIME/MANGA,KHẢ NĂNG MIỄN ĐỘC,NHÂN VẬT ANIME KHÁNG ĐỘC,KHẢ NĂNG KHÁNG ĐỘC,CHẤT ĐỘC TRONG ANIME,"
                      note=""
                    />
                    <p>
                      Hệ thống miễn dịch của anh ta được cho là hoàn hảo đến mức
                      có thể lọc ra hầu hết các loại độc tố. Anh ta thậm chí đã
                      có thời gian để nghĩ rằng tất cả các cuộc tấn công của
                      Coco không khác gì việc phục vụ đồ ăn ngon và hút chúng mà
                      không gặp vấn đề gì. Thêm vào đó, tính cách luôn vui vẻ và
                      không bao giờ căng thẳng khiến hệ thống miễn dịch của anh
                      ấy mạnh mẽ hơn.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Loại độc duy nhất có thể ảnh hưởng đến Grinpatch chỉ có
                      Demon Poison.
                    </p>
                    <h5>3. Reiju (One Piece)</h5>
                    <p>
                      Reiju - một trong những hậu duệ của gia tộc Vinsmoke được
                      cho là một trong nhiều nhân vật One Piece có thể xử lý
                      Magellan mà không gặp bất kỳ vấn đề gì. Bản thân cô gái
                      này nổi tiếng với sức mạnh đặc biệt của mình là Poison
                      Pink có khả năng khiến cho bất kỳ loại chất độc nào cũng
                      không thể gây hại cho cơ thể cô.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-2-162882338025587236929.jpg"
                      alt="3, ANIME/MANGA,KHẢ NĂNG MIỄN ĐỘC,NHÂN VẬT ANIME KHÁNG ĐỘC,KHẢ NĂNG KHÁNG ĐỘC,CHẤT ĐỘC TRONG ANIME,"
                      note=""
                    />
                    <p>
                      Ví dụ trong lần gặp đầu tiên ở arc Đảo Bánh, Hồng độc
                      Reiju ngay lập tức nhận thấy Luffy đang chết dần vì trúng
                      độc do ảnh hưởng của việc ăn da độc của cá Armored
                      Stonefish. Không chần chừ, Reiju đã tiến tới cứu mạng
                      Luffy bằng cách hôn Mũ Rơm để hút chất độc ra khỏi cơ thể
                      anh như lời cảm ơn vì mọi thứ mà Mũ Rơm đã làm cho Sanji.
                    </p>
                    <h5>4. Zoldyck Killua (Hunter x Hunter)</h5>
                    <p>
                      Giống như Reiju, Killua cũng có khả năng miễn nhiễm với
                      chất độc từ khi còn nhỏ. Điều khác biệt là khả năng này là
                      kết quả của quá trình huấn luyện của Killua để trở thành
                      một sát thủ trong gia đình Zoldyck. Bằng chứng là Killua
                      đã từng uống 5 lon nước ép Tonpa mà không cảm thấy bất kỳ
                      tác dụng phụ nào. Ngoài ra, khi bị Mosquito tấn công,
                      Killua từng nói rằng chất độc này không ảnh hưởng gì đến
                      anh cả.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/13/photo-3-16288233797781211199447.jpg"
                      alt="4, ANIME/MANGA,KHẢ NĂNG MIỄN ĐỘC,NHÂN VẬT ANIME KHÁNG ĐỘC,KHẢ NĂNG KHÁNG ĐỘC,CHẤT ĐỘC TRONG ANIME,"
                      note=""
                    />
                    <p>
                      Điều này cho thấy phương pháp huấn luyện của gia đình
                      Zoldyck nguy hiểm như thế nào.
                    </p>
                    <h5>5. Itadori Yuji (Jujutsu Kaisen)</h5>
                    <p>
                      Nhân vật chính của Jujutsu Kaisen thực sự đã bị nghi ngờ
                      có khả năng miễn dịch với chất độc từ khi sinh ra. Bằng
                      chứng là chỉ riêng năng lực thể chất của Yuji đã rất bất
                      thường ngay từ đầu. Sự kỳ lạ của cơ thể vật chứa Sukuna
                      này càng được chứng minh khi anh ta nuốt ngón tay của Vua
                      chú linh Sukuna - thứ độc nhất trong thế giới chú thuật mà
                      vẫn có thể sống sót và thậm chí nhận được sức mạnh của
                      năng lượng bị nguyền rủa từ Sukuna.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/13/photo-4-1628823379265399160639.jpg"
                      alt="5, ANIME/MANGA,KHẢ NĂNG MIỄN ĐỘC,NHÂN VẬT ANIME KHÁNG ĐỘC,KHẢ NĂNG KHÁNG ĐỘC,CHẤT ĐỘC TRONG ANIME,"
                      note=""
                    />
                    <p>
                      Ngoài ra, Itadori có thể chống lại chất độc từ Moon Dregs.
                      Ngoài ra, anh ta vẫn có thể di chuyển tự do mặc dù đã tiếp
                      xúc với kỹ thuật phân rã từ Eso. Tuy nhiên, Itadori vẫn
                      cảm thấy đau đớn khi tiếp xúc với chất độc.
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
