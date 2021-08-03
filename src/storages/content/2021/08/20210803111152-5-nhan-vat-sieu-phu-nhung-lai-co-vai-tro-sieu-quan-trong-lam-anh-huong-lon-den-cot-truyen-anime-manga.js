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
"timestamp": '03/08/2021 11:11 AM',
"title": '5 nhân vật "siêu phụ" nhưng lại có vai trò "siêu quan trọng", làm ảnh hưởng lớn đến cốt truyện anime/manga',
"description": 'Nếu không có họ thì chắc chắn câu chuyện sẽ đi theo một hướng hoàn toàn khác.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/anh-1-16278854979831663757585.jpg',
"alt": 'ONE PIECE,NARUTO,MY HERO ACADEMIA,ANIME,DRAGON BALL,KIMETSU NO YAIBA,ANIME NHẬT BẢN,NHÂN VẬT PHỤ,',
"category": 'games',
"date": '03/08/2021',
"time": '11:11 AM',
"link": '/5-nhan-vat-sieu-phu-nhung-lai-co-vai-tro-sieu-quan-trong-lam-anh-huong-lon-den-cot-truyen-anime-manga',
"zcomponent": 'page_20210803111152',
"filepath": './20210803111152-5-nhan-vat-sieu-phu-nhung-lai-co-vai-tro-sieu-quan-trong-lam-anh-huong-lon-den-cot-truyen-anime-manga.js'
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
  '5 nhân vật "siêu phụ" nhưng lại có vai trò "siêu quan trọng", làm ảnh hưởng lớn đến cốt truyện anime/manga';
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "03/08/2021 11:11 AM";
const description =
  "Nếu không có họ thì chắc chắn câu chuyện sẽ đi theo một hướng hoàn toàn khác.";
const link =
  "5-nhan-vat-sieu-phu-nhung-lai-co-vai-tro-sieu-quan-trong-lam-anh-huong-lon-den-cot-truyen-anime-manga";
const tagparam = [
  "ONE PIECE",
  "NARUTO",
  "MY HERO ACADEMIA",
  "ANIME",
  "DRAGON BALL",
  "KIMETSU NO YAIBA",
  "ANIME NHẬT BẢN",
  "NHÂN VẬT PHỤ",
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

export default function page_20210803111152() {
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
                      Đôi khi, có một hiện tượng đặc biệt trong thế giới{" "}
                      <strong>anime</strong>. Có những{" "}
                      <strong>nhân vật phụ</strong>, xuất hiện ít và thậm chí
                      đôi khi không có tên, nhưng chính những người đó đã làm
                      nên tình tiết lớn của câu chuyện.
                    </p>
                    <p>Dưới đây chính là 5 nhân vật đó.</p>
                    <h5>
                      Người đàn ông đã hỏi Gol D. Roger về{" "}
                      <strong>One Piece</strong> - One Piece
                    </h5>
                    <p>
                      Trong phiên bản <strong>anime</strong> của{" "}
                      <strong>One Piece</strong> tại thời điểm cuộc hành quyết
                      của Roger sắp bắt đầu. Đột nhiên một người dân vô danh hỏi
                      về kho báu của Roger. Và lúc này ông đã trả lời về Kỷ
                      nguyên Hải tặc. Mặc dù người đàn ông này không có trong
                      phiên bản manga, nhưng có vẻ Roger cũng đã trả lời câu hỏi
                      của ai đó trước khi ông bị hành quyết.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/anh-1-16278854979831663757585.jpg"
                      alt="1, ONE PIECE,NARUTO,MY HERO ACADEMIA,ANIME,DRAGON BALL,KIMETSU NO YAIBA,ANIME NHẬT BẢN,NHÂN VẬT PHỤ,"
                      note=""
                    />
                    <p>
                      Vì vậy, thật buồn cười khi tưởng tượng rằng hóa ra Kỷ
                      nguyên Hải tặc lại bắt đầu bởi vì một người đàn ông không
                      rõ tên tuổi này. Nói không ngoa nếu không có người này thì
                      ai biết mà đi tìm kho báu <strong>One Piece</strong> chứ.
                    </p>
                    <h5>Saburo - Kimetsu no Yaiba</h5>
                    <p>
                      Trong Kimetu no Yaiba thì Saburo chỉ là một dân làng bình
                      thường có nhà nằm trên con đường trở về Tanjiro. Trước khi
                      tai họa ập đến khi Tanjiro chuẩn bị về nhà, Saburo đã bảo
                      anh phải ở nhà mình trước. Sau đó, khi Tanjiro về nhà anh
                      đã thấy cả gia đình mình đã chết và chỉ còn lại Nezuko.
                      Cho dù lúc đó Nezuko cũng đã trở thành một con quỷ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/anh-2-16278854979941815518865.jpg"
                      alt="2, ONE PIECE,NARUTO,MY HERO ACADEMIA,ANIME,DRAGON BALL,KIMETSU NO YAIBA,ANIME NHẬT BẢN,NHÂN VẬT PHỤ,"
                      note=""
                    />
                    <p>
                      Điều này có nghĩa nếu không có Saburo giữ Tanjiro ở lại
                      thì có thể anh đã chết cùng gia đình hoặc biến thành quỷ
                      giống như Nezuko. Nếu Tanjiro và Nezuko đều là những con
                      quỷ thì ngay sau đó Giyuu sẽ giết chết họ. Vì vậy, có thể
                      nói cả câu chuyện của <strong>Kimetsu no Yaiba</strong>{" "}
                      được mở ra là nhờ công của Saburo.
                    </p>
                    <h5>Ông nội Gohan – Dragon Ball</h5>
                    <p>
                      Son Goku là một trong những nhân vật quan trọng nhất trong
                      vũ trụ <strong>Dragon Ball</strong>, nhưng ông nội Gohan
                      được cho là một <strong>nhân vật phụ</strong>. Khi câu
                      chuyện bắt đầu Gohan đã chết, và chúng ta chỉ được nhìn
                      thấy ông xuất hiện trong những đoạn hồi tưởng. Nhưng tác
                      động của ông nội Gohan là rất lớn, chính ông người đã tìm
                      thấy Goku và nuôi anh lớn khi đến Trái đất. Và cũng chính
                      ông là người đã kiểm soát bản năng Saiyan của Goku khi anh
                      còn nhỏ, tránh cho anh những rắc rối sau này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/2/anh-3-16278854980071254119017.jpg"
                      alt="3, ONE PIECE,NARUTO,MY HERO ACADEMIA,ANIME,DRAGON BALL,KIMETSU NO YAIBA,ANIME NHẬT BẢN,NHÂN VẬT PHỤ,"
                      note=""
                    />
                    <p>
                      Ví dụ như Goku không được tìm thấy bởi Gohan thì điều gì
                      sẽ xảy ra? Liệu anh ta có bị giết trước bởi chiến binh
                      mạnh nhất trên Trái đất? Liệu anh ấy có bị bản năng hoang
                      dã của mình làm hại hay không?
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Monster Lumpur - My Hero Academia</h5>
                    <p>
                      Monster Lumpur này xuất hiện khi câu truyện{" "}
                      <strong>My Hero Academia</strong> mới bắt đầu. Tuy nhiên
                      vai trò của nó là không hề nhỏ, nhờ có nó mà Deku đã có
                      thể gặp trực tiếp All Might và có được sức mạnh One For
                      All.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/anh-4-16278854980341652013246.jpg"
                      alt="4, ONE PIECE,NARUTO,MY HERO ACADEMIA,ANIME,DRAGON BALL,KIMETSU NO YAIBA,ANIME NHẬT BẢN,NHÂN VẬT PHỤ,"
                      note=""
                    />
                    <p>
                      Nếu con quái vật này không tấn công Deku thì có thể cuộc
                      đời anh đã sang một hướng khác. Deku vẫn là một cậu học
                      sinh bình thường không có gì nổi trội, chứ không thể có
                      được sức mạnh để trở thành một anh hùng.
                    </p>
                    <h5>Mizuki – Naruto</h5>
                    <p>
                      Nếu chúng ta không tính các tập phụ của{" "}
                      <strong>anime</strong> thì Mizuki xuất hiện rất ít. Nhưng
                      vai trò của anh ấy là không nhỏ trong cuộc phiêu lưu của{" "}
                      <strong>Naruto</strong>. Mizuki là nhân vật đã lừa Naruto
                      ăn cắp một cấm thuật của làng. Hắn đã lừa phỉnh Naruto làm
                      điều sai trái đó bằng cách giả vờ thông cảm với cậu bé
                      nhưng trên thực tế hắn luôn khinh thường Naruto.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/2/anh-5-1627885604246138334108.jpg"
                      alt="5, ONE PIECE,NARUTO,MY HERO ACADEMIA,ANIME,DRAGON BALL,KIMETSU NO YAIBA,ANIME NHẬT BẢN,NHÂN VẬT PHỤ,"
                      note=""
                    />
                    <p>
                      May mắn là Iruka đã phát hiện ra và tìm thấy{" "}
                      <strong>Naruto</strong> cùng Mizuki ở trong rừng nhưng
                      Mizuki lại tiếp tục giở trò lừa đảo hòng khiến Naruto
                      không tin tưởng Iruka bằng cách cho Naruto biết sự thật về
                      quá khứ của mình và tại sao người dân khinh miệt cậu bé,
                      rằng bên trong đang có phong ấn của Cửu Vỹ. Cuối cùng, khi
                      Iruka xả thân đỡ Shuriken cho Narto thì tình cảm thầy trò
                      của cả 2 đã được thắt chặt, Naruto có thêm động lực để
                      đánh bại Mizuki, trừng phạt hắn vì đã làm hại Iruka.
                    </p>
                    <p>
                      Và cũng từ đây suy nghĩ của <strong>Naruto</strong> đã
                      thay đổi, anh nhận ra được Iruka tốt như thế nào. Không
                      những thế Naruto đã học được kỹ thuật chủ đạo của mình là
                      Kage Bunshin no Jutsu.
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
