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
"timestamp": '20/08/2021 09:22 AM',
"title": '6 sai lệch so với nguyên tác của Harry Potter: Cú twist ngoạn mục lại bị cắt bỏ, mối tình của Harry vốn dĩ "nồng thắm" hơn nhiều!',
"description": 'Nội dung Harry Potter thiếu sót như thế nào khi chuyển thể từ truyện lên phim?',
"src": 'https://kenh14cdn.com/203336854389633024/2021/8/17/anigiforiginal-19838-1438790853-4-16292163837891098397787.gif',
"alt": 'phim Harry Potter,harry potter and the sorcerer's stone (2001),Harry Potter và Hòn đá Phù thủy,Tiểu thuyết Harry Potter,Harry Potter và Chiếc cốc lửa,sao harry potter,phim Âu Mỹ,Phim chuyển thể,Phim chuyển thể từ tiểu thuyết,harry potter,',
"category": 'news',
"date": '20/08/2021',
"time": '09:22 AM',
"link": '/6-sai-lech-so-voi-nguyen-tac-cua-harry-potter-cu-twist-ngoan-muc-lai-bi-cat-bo-moi-tinh-cua-harry-von-di-nong-tham-hon-nhieu',
"zcomponent": 'page_20210820092237',
"filepath": './20210820092237-6-sai-lech-so-voi-nguyen-tac-cua-harry-potter-cu-twist-ngoan-muc-lai-bi-cat-bo-moi-tinh-cua-harry-von-di-nong-tham-hon-nhieu.js'
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
  '6 sai lệch so với nguyên tác của Harry Potter: Cú twist ngoạn mục lại bị cắt bỏ, mối tình của Harry vốn dĩ "nồng thắm" hơn nhiều!';
const author = "CHI PHẠM,";
const source = "Trí Thức Trẻ";
const timestamp = "20/08/2021 09:22 AM";
const description =
  "Nội dung Harry Potter thiếu sót như thế nào khi chuyển thể từ truyện lên phim?";
const link =
  "6-sai-lech-so-voi-nguyen-tac-cua-harry-potter-cu-twist-ngoan-muc-lai-bi-cat-bo-moi-tinh-cua-harry-von-di-nong-tham-hon-nhieu";
const tagparam = [
  "phim Harry Potter",
  "harry potter and the sorcerer's stone (2001)",
  "Harry Potter và Hòn đá Phù thủy",
  "Tiểu thuyết Harry Potter",
  "Harry Potter và Chiếc cốc lửa",
  "sao harry potter",
  "phim Âu Mỹ",
  "Phim chuyển thể",
  "Phim chuyển thể từ tiểu thuyết",
  "harry potter",
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

export default function page_20210820092237() {
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
                      Nội dung <strong>Harry Potter</strong> thiếu sót như thế
                      nào khi chuyển thể từ truyện lên phim?
                    </p>
                    <h5>
                      1. Đám tang xúc động và hoành tráng nhất thế giới phù thủy
                      của cụ Dumbledore
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/17/anigiforiginal-19838-1438790853-4-16292163837891098397787.gif"
                      alt="9, phim Harry Potter,harry potter and the sorcerer's stone (2001),Harry Potter và Hòn đá Phù thủy,Tiểu thuyết Harry Potter,Harry Potter và Chiếc cốc lửa,sao harry potter,phim Âu Mỹ,Phim chuyển thể,Phim chuyển thể từ tiểu thuyết,harry potter,' note='"
                    />
                    <p>
                      Sự khác biệt giữa nguyên tác văn học và phim ảnh chuyển
                      thể luôn là đề tài muôn thuở khiến khán giả tranh luận
                      kịch liệt. Đối với một thương hiệu chuyển thể thành công
                      như <strong>Harry Potter</strong> thì đương nhiên tình
                      trạng sai lệch này còn làm người hâm mộ chú ý nhiều hơn.
                      Có người thích phiên bản điện ảnh ngắn gọn, có người lại
                      buồn bực vì tình tiết yêu thích của mình biến mất. Với tất
                      cả biến tấu về nội dung và tính cách nhân vật, sau đây là
                      6 khoảnh khắc kinh điển trong truyện Harry Potter mà không
                      được loạt phim sau này nhắc tới!
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/17/b6c30m1funeralofalbusdumbledore-1629216384663495955198.png"
                      alt="1, phim Harry Potter,harry potter and the sorcerer's stone (2001),Harry Potter và Hòn đá Phù thủy,Tiểu thuyết Harry Potter,Harry Potter và Chiếc cốc lửa,sao harry potter,phim Âu Mỹ,Phim chuyển thể,Phim chuyển thể từ tiểu thuyết,harry potter,' note='Minh họa về đám tang Dumbledore trong truyện"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/17/hp6007-16292163839441318337901.jpg"
                      alt="2, phim Harry Potter,harry potter and the sorcerer's stone (2001),Harry Potter và Hòn đá Phù thủy,Tiểu thuyết Harry Potter,Harry Potter và Chiếc cốc lửa,sao harry potter,phim Âu Mỹ,Phim chuyển thể,Phim chuyển thể từ tiểu thuyết,harry potter,' note='May là phim chuyển thể còn giữ lại khoảnh khắc học sinh Hogwarts giơ đũa thần tưởng niệm cố Hiệu trưởng"
                    />
                    <p>
                      <strong>Harry Potter</strong> Và Hoàng Tử Lai luôn được
                      cho là phần phim gay cấn nhất khi chiếu cảnh cụ Dumbledore
                      qua đời. So sánh với nguyên tác thì lẽ ra, nội dung này
                      còn xúc động hơn khi kéo theo đám tang của cố Hiệu trưởng
                      Hogwarts. Tại buổi lễ nghiêm trang này, không chỉ có nỗi
                      buồn của học sinh được miêu tả tường tận mà còn có sự xuất
                      hiện của nhiều nhân vật cấp cao ở Bộ Pháp Thuật. Trong mắt
                      độc giả thì đây là một trong những chương truyện nhiều cảm
                      xúc nhất Harry Potter, nếu được lên phim thì hẳn ai cũng
                      khóc hết nước mắt.
                    </p>
                    <h5>
                      2. Yêu tinh Peeves chiếm spotlight mệt nghỉ trong 7 tập
                      truyện, rốt cuộc khi lên phim "còn cái nịt"
                    </h5>
                    <p>
                      Trong nguyên tác, yêu tinh Peeves là một linh hồn tinh
                      nghịch và thường xuyên bày trò chơi khăm Giám thị Filch.
                      Chính nhờ sở thích gây hài mà Peeves được lòng đám học trò
                      nhỏ, hắn đồng thời là yếu tố độc lạ làm nên không khí vui
                      vẻ tại Hogwarts. Sau này, Peeves còn có công phá đám "mụ
                      cóc hồng" Umbridge và tham gia trận chiến chống lại
                      Voldemort.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/17/9jtxpcr-162921648432310825775.jpg"
                      alt="3, phim Harry Potter,harry potter and the sorcerer's stone (2001),Harry Potter và Hòn đá Phù thủy,Tiểu thuyết Harry Potter,Harry Potter và Chiếc cốc lửa,sao harry potter,phim Âu Mỹ,Phim chuyển thể,Phim chuyển thể từ tiểu thuyết,harry potter,' note='Peeves lên phim được đúng vài giây, còn lại thì mất hút"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/17/tumblrpjbtjtesh71sxbdnqo11280-16292164843941335061869.gif"
                      alt="10, phim Harry Potter,harry potter and the sorcerer's stone (2001),Harry Potter và Hòn đá Phù thủy,Tiểu thuyết Harry Potter,Harry Potter và Chiếc cốc lửa,sao harry potter,phim Âu Mỹ,Phim chuyển thể,Phim chuyển thể từ tiểu thuyết,harry potter,' note='"
                    />
                    <p>
                      Tham gia nhiều sự kiện quan trọng là thế mà Peeves chẳng
                      được thêm đất diễn trên phim. Ngoại trừ lần xuất hiện chớp
                      nhoáng trong{" "}
                      <strong>
                        <strong>Harry Potter</strong> Và Hòn Đá Phù Thủy
                      </strong>{" "}
                      thì nhân vật này biến mất mãi mãi. Hiện tại, nhiều người
                      hâm mộ không chỉ tiếc nuối Peeves mà còn thương nhớ diễn
                      xuất ấn tượng của nam tài tử Rik Mayall.
                    </p>
                    <h5>
                      3. Hermione và hành động nhân ái đáng ngưỡng mộ, trực tiếp
                      thay đổi cả một tuyến nhân vật
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/17/hermione-portrait-1629216820306620443532.jpg"
                      alt="4, phim Harry Potter,harry potter and the sorcerer's stone (2001),Harry Potter và Hòn đá Phù thủy,Tiểu thuyết Harry Potter,Harry Potter và Chiếc cốc lửa,sao harry potter,phim Âu Mỹ,Phim chuyển thể,Phim chuyển thể từ tiểu thuyết,harry potter,' note='Tạo hình Peeves chuẩn theo nguyên tác"
                    />
                    <p>
                      Bên cạnh Dobby và Kreacher thì nguyên tác{" "}
                      <strong>Harry Potter</strong> còn đề cập đến rất nhiều gia
                      tinh nhỏ làm việc tại học viện Hogwarts. Trong đó, không
                      thể không nhắc tới hội S.P.E.W trứ danh của Hermione, hay
                      chính là hội Vận động Bảo vệ Quyền lợi Gia Tinh. Nhờ hành
                      động thiết thực này của cô nàng nhà Gryffindor mà đời sống
                      gia tinh được cải thiện. Họ vừa có thêm quyền lợi, vừa
                      thoát khỏi điều kiện lao động khốn khó.
                    </p>
                    <h5>
                      4. Thời lượng lên hình ít đã đành, Ginny Weasley còn bị
                      "dìm" thậm tệ trong chuyện tình cảm
                    </h5>
                    <p>
                      Bên cạnh bộ 3 nhân vật chính thì Ginny Weasley cũng là một
                      nữ anh hùng nổi bật, vừa tán đổ{" "}
                      <strong>Harry Potter</strong>, vừa xuất sắc đánh bại bè lũ
                      hắc ám. Tiếc là Ginny phiên bản điện ảnh có quá ít đất
                      diễn, cách xây dựng tính cách lại nhạt nhòa, chưa kể đến
                      số lượng lời thoại nhỏ nhặt. Đáng buồn nhất là mối quan hệ
                      giữa Ginny và Harry Potter bị đẩy nhanh và thiếu sức
                      thuyết phục. Nhân vật "tuesday" Dean Thomas cũng không
                      được nhắc đến, khiến chuyện tình của Ginny vắng hẳn drama.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/17/harrypotterwbf7harryandginnyabouttokissstill080615land-1629217062975667448956.jpg"
                      alt="5, phim Harry Potter,harry potter and the sorcerer's stone (2001),Harry Potter và Hòn đá Phù thủy,Tiểu thuyết Harry Potter,Harry Potter và Chiếc cốc lửa,sao harry potter,phim Âu Mỹ,Phim chuyển thể,Phim chuyển thể từ tiểu thuyết,harry potter,' note='Hermione có công cực lớn trong công cuộc đòi quyền lợi cho gia tinh"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/17/harry-potter-bloghogwarts-harry-ginny-162921706313021560068.jpg"
                      alt="6, phim Harry Potter,harry potter and the sorcerer's stone (2001),Harry Potter và Hòn đá Phù thủy,Tiểu thuyết Harry Potter,Harry Potter và Chiếc cốc lửa,sao harry potter,phim Âu Mỹ,Phim chuyển thể,Phim chuyển thể từ tiểu thuyết,harry potter,' note='Theo ý kiến khán giả thì tương tác hóa học nhạt nhòa giữa Daniel Radcliffe và Bonnie Wright cũng là nguyên nhân chính khiến tuyến tình cảm này không được đánh giá cao"
                    />
                    <h5>
                      5. Twist ngoạn mục về mụ Umbridge bỗng trở thành lãng xẹt,
                      đã vậy còn đổ tội oan cho Giám Ngục
                    </h5>
                    <p>
                      Khoảnh khắc Giám Ngục ập đến thế giới Muggle và tấn công
                      anh họ <strong>Harry Potter</strong> chính là thời điểm
                      bùng nổ, buộc Harry phải sử dụng phép thuật ngoài thế giới
                      phù thủy. Vậy nhưng, trong phim chưa bao giờ đề cập đến kẻ
                      thả Giám Ngục ra, mặc dù đây là twist cực hay trong truyện
                      - chính thức tiết lộ mục đích ác độc của Dolores Umbridge.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/17/hp-dolores-umbridge-1-16292172450932135590695.jpg"
                      alt="7, phim Harry Potter,harry potter and the sorcerer's stone (2001),Harry Potter và Hòn đá Phù thủy,Tiểu thuyết Harry Potter,Harry Potter và Chiếc cốc lửa,sao harry potter,phim Âu Mỹ,Phim chuyển thể,Phim chuyển thể từ tiểu thuyết,harry potter,' note='Umbridge là kẻ đứng sau vụ Giám Ngục tấn công Muggle nhưng trên phim chẳng có chi tiết nào nhắc đến cả, vậy nên nên Giám Ngục vô tình mang tiếng xấu, người chưa đọc truyện còn dễ nhầm hung thủ là Voldemort"
                    />
                    <h5>
                      6. Một nhân vật bất ngờ lên giọng làm khán giả hết hồn,
                      nhìn lại miêu tả trong truyện mà "giận tím người" vì thay
                      đổi quá mức
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/17/tumblrinlinepigqv66qpp1s22twp500-16292173846071256336477.gif"
                      alt="11, phim Harry Potter,harry potter and the sorcerer's stone (2001),Harry Potter và Hòn đá Phù thủy,Tiểu thuyết Harry Potter,Harry Potter và Chiếc cốc lửa,sao harry potter,phim Âu Mỹ,Phim chuyển thể,Phim chuyển thể từ tiểu thuyết,harry potter,' note='"
                    />
                    <p>
                      <strong>
                        <strong>Harry Potter</strong> Và Chiếc Cốc Lửa
                      </strong>{" "}
                      có một sai sót cực nổi tiếng: cụ Dumbledore bất ngờ nổi
                      đóa lúc tra hỏi Harry Potter về việc đặt tên mình lên cốc
                      bốc thăm. Trong khi đó, nguyên tác truyện nhấn mạnh 2 chữ
                      "bình tĩnh" chứ không hề bảo ai gầm thét hay tức tối. Biết
                      là nhà làm phim biến tấu ít nhiều để kịch tính hóa cốt
                      truyện, nhưng để thành "biến dạng" như trường hợp này thì
                      hỏng hết cảm xúc. Nhiều khán giả còn tưởng Dumbledore sẵn
                      sàng giết Harry Potter tới nơi luôn chứ!
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
