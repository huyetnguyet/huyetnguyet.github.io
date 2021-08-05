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
"title": '11 thông tin thú vị xung quanh Goku trong Dragon Ball: chưa bao giờ đánh bại Vegeta, cũng chẳng phải người mạnh nhất',
"description": 'Goku vẫn còn tiềm năng phát triển mạnh mẽ hơn trong tương lai.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281580913081068309699.jpg',
"alt": 'GOKU,DRAGON BALL,THÔNG TIN VỀ GOKU,BẢN NĂNG VÔ CỰC,KỸ THUẬT CỦA GOKU,TÊN THẬT CỦA GOKU,',
"category": 'games',
"date": '05/08/2021',
"time": '08:47 AM',
"link": '/11-thong-tin-thu-vi-xung-quanh-goku-trong-dragon-ball-chua-bao-gio-danh-bai-vegeta-cung-chang-phai-nguoi-manh-nhat',
"zcomponent": 'page_20210805084706',
"filepath": './20210805084706-11-thong-tin-thu-vi-xung-quanh-goku-trong-dragon-ball-chua-bao-gio-danh-bai-vegeta-cung-chang-phai-nguoi-manh-nhat.js'
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
  "11 thông tin thú vị xung quanh Goku trong Dragon Ball: chưa bao giờ đánh bại Vegeta, cũng chẳng phải người mạnh nhất";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "05/08/2021 08:47 AM";
const description =
  "Goku vẫn còn tiềm năng phát triển mạnh mẽ hơn trong tương lai.";
const link =
  "11-thong-tin-thu-vi-xung-quanh-goku-trong-dragon-ball-chua-bao-gio-danh-bai-vegeta-cung-chang-phai-nguoi-manh-nhat";
const tagparam = [
  "GOKU",
  "DRAGON BALL",
  "THÔNG TIN VỀ GOKU",
  "BẢN NĂNG VÔ CỰC",
  "KỸ THUẬT CỦA GOKU",
  "TÊN THẬT CỦA GOKU",
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

export default function page_20210805084706() {
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
                      Son <strong>Goku</strong> là nhân vật chính của{" "}
                      <strong>Dragon Ball</strong>, nhưng trong Dragon Ball
                      Super, người ta đã chứng minh rằng Goku thực sự không phải
                      là nhân vật mạnh nhất trong vũ trụ mà anh ấy đang sống.
                      Tại sao lại như vậy? Hãy cùng nhau tìm hiểu những thông
                      tin thú vị về anh chàng "Khỉ con" ở dưới đây nhé!
                    </p>
                    <h5>1. Tên thật của anh ấy không phải là Son Goku</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-1-16281580913081068309699.jpg"
                      alt="1, GOKU,DRAGON BALL,THÔNG TIN VỀ GOKU,BẢN NĂNG VÔ CỰC,KỸ THUẬT CỦA GOKU,TÊN THẬT CỦA GOKU,"
                      note=""
                    />
                    <p>
                      Mặc dù được nuôi dưỡng bởi ông nội Gohan,{" "}
                      <strong>Goku</strong> đã có 1 cái tên khác trước khi hạ
                      cánh xuống trái đất. Cha mẹ người Saiyan của anh - Bardock
                      và Gine đã đặt cho con trai mình cái tên là Kakarot.
                      Vegeta thường hay gọi Goku bằng cái tên này.
                    </p>
                    <h5>
                      2. Thời thơ ấu của <strong>Goku</strong> trong anime và
                      manga có một chút khác biệt
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/5/photo-1-1628158092568702025635.png"
                      alt="2, GOKU,DRAGON BALL,THÔNG TIN VỀ GOKU,BẢN NĂNG VÔ CỰC,KỸ THUẬT CỦA GOKU,TÊN THẬT CỦA GOKU,"
                      note=""
                    />
                    <p>
                      Trong phiên bản anime, thời thơ ấu của{" "}
                      <strong>Goku</strong> có vẻ bình thường khi anh ấy luyện
                      tập với ông nội Gohan. Trong khi đó, sau những sự kiện xảy
                      ra trong <strong>Dragon Ball</strong> Z, Goku ở quá khứ
                      được nhìn thấy mặc quân phục Frieza trong manga Dragon
                      Ball Minus. Và cha mẹ Goku đã gửi anh tới hành tinh trái
                      đất xa xôi trước khi hành tinh Vegeta bị phá hủy.
                    </p>
                    <h5>3. Cấp độ hình thức của Goku</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-2-16281580930411366198519.jpg"
                      alt="3, GOKU,DRAGON BALL,THÔNG TIN VỀ GOKU,BẢN NĂNG VÔ CỰC,KỸ THUẬT CỦA GOKU,TÊN THẬT CỦA GOKU,"
                      note=""
                    />
                    <p>
                      <strong>Goku</strong> lần đầu tiên sử dụng Kaio-ken để có
                      thể theo kịp những kẻ thù như Vegeta. Rồi sau khi chiến
                      đấu với Frieza, anh đã có thể sử dụng Super Saiyan. Kế đến
                      anh đạt tới Super Saiyan 3 để chống lại Buu.
                    </p>
                    <p>
                      Trong <strong>Dragon Ball</strong> Super,{" "}
                      <strong>Goku</strong> đạt đến Super Saiyan God để chiến
                      đấu với Beerus, rồi tới Super Saiyan Blue. Super Saiyan
                      Blue sau đó có thể được tăng thêm sức mạnh với Kaio-ken.
                      Thế rồi trong Giải đấu sức mạnh, Goku vươn tới{" "}
                      <strong>Bản năng vô cực</strong>. Ở phiên bản manga, Goku
                      vẫn chỉ có thể sử dụng Dấu hiệu Bản năng vô cực.
                    </p>
                    <p>
                      Còn về Super Saiyan 4, cho đến nay, hình thức đó mới chỉ
                      đạt được trong GT. Không có dấu hiệu nào cho thấy{" "}
                      <strong>Goku</strong> trong phần Super đã đạt đến Super
                      Saiyan 4.
                    </p>
                    <h5>4. Có dạng hợp thể là Gogeta và Vegito</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-3-1628158092589332181427.jpg"
                      alt="4, GOKU,DRAGON BALL,THÔNG TIN VỀ GOKU,BẢN NĂNG VÔ CỰC,KỸ THUẬT CỦA GOKU,TÊN THẬT CỦA GOKU,"
                      note=""
                    />
                    <p>
                      Trong cả phần Z và Super, <strong>Goku</strong> có 2 dạng
                      hợp thể rất mạnh là Gogeta và Vegito, bằng cách hợp nhất
                      với Vegeta. Trong đó, Vegito là hợp thể bằng bông tai
                      Potara, còn Gogeta là hợp thể bằng kỹ thuật Lưỡng long
                      nhất thể.
                    </p>
                    <p>
                      Vậy giữa Gogeta và Vegito, phiên bản hợp thể nào mạnh hơn?
                      Trong phần Super, Gogeta có vẻ vượt trội hơn. Bởi vì
                      Vegito bằng cách nào đó đã bị tách ra khi chống lại
                      Zamasu, nhưng Gogeta dường như không có hạn chế đó khi
                      chiến đấu với Broly.
                    </p>
                    <h5>5. Là người có trái tim thuần khiết</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-4-1628158096882782462096.jpg"
                      alt="5, GOKU,DRAGON BALL,THÔNG TIN VỀ GOKU,BẢN NĂNG VÔ CỰC,KỸ THUẬT CỦA GOKU,TÊN THẬT CỦA GOKU,"
                      note=""
                    />
                    <p>
                      Saiyan nổi tiếng là chủng tộc chiến binh hiếu chiến và
                      khát máu. Nhưng nhờ sự kiên nhẫn và dạy dỗ của ông nội
                      Gohan, <strong>Goku</strong> đã có 1 trái tim thuần khiết
                      nhất so với những cư dân khác trên trái đất.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>6. Nhân vật chính đã chết nhiều lần</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-5-1628158095290855923293.jpg"
                      alt="6, GOKU,DRAGON BALL,THÔNG TIN VỀ GOKU,BẢN NĂNG VÔ CỰC,KỸ THUẬT CỦA GOKU,TÊN THẬT CỦA GOKU,"
                      note=""
                    />
                    <p>
                      Cái chết là một điều dễ dàng xảy ra trong thế giới{" "}
                      <strong>Dragon Ball</strong>, bản thân nhân vật chính{" "}
                      <strong>Goku</strong> cũng đi làm bạn với Diêm Vương vài
                      lần. Anh ta thậm chí còn tập luyện ở thế giới bên kia và
                      sau khi được hồi sinh còn mạnh hơn gấp nhiều lần so với
                      trước khi chết.
                    </p>
                    <h5>
                      7. Phiên bản gốc <strong>Goku</strong> có 1 cái tên khác
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-6-16281580936242101051818.jpg"
                      alt="7, GOKU,DRAGON BALL,THÔNG TIN VỀ GOKU,BẢN NĂNG VÔ CỰC,KỸ THUẬT CỦA GOKU,TÊN THẬT CỦA GOKU,"
                      note=""
                    />
                    <p>
                      Điều thú vị là trong phiên bản nguyên mẫu của manga{" "}
                      <strong>Dragon Ball</strong> có tựa đề Dragon Boy,{" "}
                      <strong>Goku</strong> là một cậu bé tên Tangtong, người có
                      thể triệu hồi một con rồng nhỏ với kiểu tóc trông giống
                      Yamcha hơn là Goku hiện tại.
                    </p>
                    <h5>8. Người phàm đầu tiên đạt được Bản năng vô cực</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-7-16281580973471133242261.jpg"
                      alt="8, GOKU,DRAGON BALL,THÔNG TIN VỀ GOKU,BẢN NĂNG VÔ CỰC,KỸ THUẬT CỦA GOKU,TÊN THẬT CỦA GOKU,"
                      note=""
                    />
                    <p>
                      Trong số tất cả các chiến binh của Vũ trụ 7, chỉ có{" "}
                      <strong>Goku</strong> là người phàm duy nhất đạt được{" "}
                      <strong>Bản năng vô cực</strong> - thứ sức mạnh mà ngay cả
                      Thần Hủy Diệt cũng khó lòng vươn tới. Trong tương lai, kỹ
                      thuật này của Goku có lẽ sẽ còn phát triển thêm nữa.
                    </p>
                    <h5>9. Chưa bao giờ đạt được chiến thắng KO với Vegeta</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-8-16281580959002131638418.jpg"
                      alt="9, GOKU,DRAGON BALL,THÔNG TIN VỀ GOKU,BẢN NĂNG VÔ CỰC,KỸ THUẬT CỦA GOKU,TÊN THẬT CỦA GOKU,"
                      note=""
                    />
                    <p>
                      Từ phần Z tới phần Super, <strong>Goku</strong> chưa từng
                      đánh bại Vegeta. Thông thường, trận chiến của họ kết thúc
                      với tỷ số hòa. Tuy nhiên, Goku luôn là người đánh bại kẻ
                      thù mà Vegeta không thể đánh bại, hoặc là người đầu tiên
                      đạt được một dạng biến hình mạnh mẽ.
                    </p>
                    <h5>
                      10. Các kỹ thuật của <strong>Goku</strong> học được từ
                      nhiều giáo viên khác nhau
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-9-1628158096366627546997.jpg"
                      alt="10, GOKU,DRAGON BALL,THÔNG TIN VỀ GOKU,BẢN NĂNG VÔ CỰC,KỸ THUẬT CỦA GOKU,TÊN THẬT CỦA GOKU,"
                      note=""
                    />
                    <p>
                      Hầu hết các kỹ thuật mạnh của <strong>Goku</strong> đều
                      học được từ nhiều giáo viên khác nhau. Ví dụ Kamehameha
                      anh ấy học được từ Master Roshi, còn Dịch chuyển tức thời
                      từ người Yardrats. Trong phần Super, Goku cũng đã bắt
                      chước kỹ thuật Destructo Disc của Krillin.
                    </p>
                    <h5>
                      11. <strong>Goku</strong> vẫn chưa phải là mạnh nhất vũ
                      trụ 7
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/5/photo-10-16281580931151327501281.png"
                      alt="11, GOKU,DRAGON BALL,THÔNG TIN VỀ GOKU,BẢN NĂNG VÔ CỰC,KỸ THUẬT CỦA GOKU,TÊN THẬT CỦA GOKU,"
                      note=""
                    />
                    <p>
                      Từ trận chiến trong Giải đấu Sức mạnh, rõ ràng{" "}
                      <strong>Goku</strong> là chiến binh mạnh nhất khi so sánh
                      với những người đồng loại của mình. Mặc dù vậy, Goku vẫn
                      chưa chứng minh được khả năng đánh bại Beerus, chứ đừng
                      nói đến việc được Whis thừa nhận là mạnh hơn Beerus rất
                      nhiều.
                    </p>
                    <p>
                      Hiện tại, <strong>Goku</strong> vẫn đang gặp khó khăn để
                      đánh bại đối thủ trong trận đấu tay đôi một chọi một với
                      Beerus, Merus và Moro.
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
