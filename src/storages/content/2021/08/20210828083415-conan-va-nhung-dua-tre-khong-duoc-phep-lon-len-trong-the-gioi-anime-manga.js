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
"timestamp": '28/08/2021 08:34 AM',
"title": 'Conan và những đứa trẻ "không được phép lớn lên" trong thế giới anime/manga',
"description": 'Mặc dù các mùa thay đổi và nhiều năm trôi qua trong loạt phim hoạt hình, nhưng các nhân vật này dường như không bao giờ già đi.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/22/ash-ketchum-in-front-of-alain-kalos-league-from-pokemon-1629612533169112262560.jpg',
"alt": 'ASH KETCHUM,CONAN,CRAYON SHIN-CHAN,NHÂN VẬT ANIME MÃI KHÔNG LỚN,NHÂN VẬT HOẠT HÌNH,DORAEMON,NOBITA,',
"category": 'games',
"date": '28/08/2021',
"time": '08:34 AM',
"link": '/conan-va-nhung-dua-tre-khong-duoc-phep-lon-len-trong-the-gioi-anime-manga',
"zcomponent": 'page_20210828083415',
"filepath": './20210828083415-conan-va-nhung-dua-tre-khong-duoc-phep-lon-len-trong-the-gioi-anime-manga.js'
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
  'Conan và những đứa trẻ "không được phép lớn lên" trong thế giới anime/manga';
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "28/08/2021 08:34 AM";
const description =
  "Mặc dù các mùa thay đổi và nhiều năm trôi qua trong loạt phim hoạt hình, nhưng các nhân vật này dường như không bao giờ già đi.";
const link =
  "conan-va-nhung-dua-tre-khong-duoc-phep-lon-len-trong-the-gioi-anime-manga";
const tagparam = [
  "ASH KETCHUM",
  "CONAN",
  "CRAYON SHIN-CHAN",
  "NHÂN VẬT ANIME MÃI KHÔNG LỚN",
  "NHÂN VẬT HOẠT HÌNH",
  "DORAEMON",
  "NOBITA",
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

export default function page_20210828083415() {
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
                    <h5>Ash Ketchum</h5>
                    <p>
                      Vào năm 1997, Ash bắt đầu chuyến hành trình khi còn là 1
                      cậu bé 10 tuổi. 20 năm sau kể từ ngày bộ phim hoạt hình
                      Pokemon được phát sóng, cậu ta vẫn cứ là một cậu nhóc 10
                      tuổi trong một dòng thời gian vô định. Dường như cứ đi hết
                      1 đại lục và chạm mốc 11 tuổi, Ash lại bị reset và trở lúc
                      10 tuổi ở một mùa anime mới. Điều này đã khiến cho rất
                      nhiều fan Pokemon thắc mắc, và câu trả lời cuối cùng của
                      nhà sản xuất Pokemon là cậu ta không già đi và không có
                      tuổi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/22/ash-ketchum-in-front-of-alain-kalos-league-from-pokemon-1629612533169112262560.jpg"
                      alt="1, ASH KETCHUM,CONAN,CRAYON SHIN-CHAN,NHÂN VẬT ANIME MÃI KHÔNG LỚN,NHÂN VẬT HOẠT HÌNH,DORAEMON,NOBITA,"
                      note=""
                    />

                    <p>
                      Và điều quan trọng cần nhớ là Pokémon là một chương trình
                      dành cho trẻ nhỏ, không phải thanh thiếu niên. Trẻ nhỏ
                      thích nhất quán và quen thuộc. Cho nên dù thiết kế của{" "}
                      <strong>Ash Ketchum</strong> đã thay đổi, nhưng các thông
                      tin cơ bản của cậu ta vẫn giữ nguyên.
                    </p>
                    <h5>Conan</h5>
                    <p>
                      Thám tử lừng danh <strong>Conan</strong> là một trong
                      những tựa truyện tranh trinh thám hấp dẫn và đến nay vẫn
                      luôn lọt top truyện tranh bán chạy nhất tại Việt Nam.
                      Nhiều fan hâm mộ từng nói rằng đã theo dõi truyện từ khi
                      còn là một đứa trẻ, đến nay kể cả khi họ đã lớn, đi làm
                      hay thậm chí là lập gia đình nhưng Conan vẫn chưa hề kết
                      thúc.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/22/photo-1-16296127981791033333739.jpg"
                      alt="2, ASH KETCHUM,CONAN,CRAYON SHIN-CHAN,NHÂN VẬT ANIME MÃI KHÔNG LỚN,NHÂN VẬT HOẠT HÌNH,DORAEMON,NOBITA,"
                      note=""
                    />

                    <p>
                      Và trong suốt hơn 20 năm xuất bản tính từ năm 1996 đến
                      nay, chúng ta có thể nhận thấy được một điều đó là dù đã
                      trải qua biết bao nhiêu vụ án thì nhân vật chính{" "}
                      <strong>Conan</strong> của chúng ta vẫn đang là học sinh
                      lớp 1, cô nàng Ran thì mãi vẫn đang là học sinh cấp 3.
                    </p>
                    <h5>Crayon Shin-Chan</h5>
                    <p>
                      Một lần nữa, sức hút lâu bền của{" "}
                      <strong>Crayon Shin-Chan</strong> đã chứng minh rằng các
                      chương trình dành cho trẻ em luôn tuân theo các quy tắc
                      riêng của chúng khi thời gian trôi qua. Bộ truyện kể về
                      cậu bé Shin-chan 5 tuổi với những câu chuyện phiêu lưu
                      cùng bố mẹ, em gái, chú cún Bạch Tuyết, bạn bè và những
                      nhân vật khác. Tính đến nay, Shin-Chan đã vượt mốc một
                      nghìn tập. Do đó, nếu mỗi tập phim chỉ diễn ra trong một
                      ngày duy nhất thì Shin-Chan đáng nhẽ đã phải tám tuổi. Thế
                      nhưng cậu nhóc này cứ bị mắc kẹt mãi ở độ tuổi lên năm.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/22/photo-1-16296130776681753986578.jpg"
                      alt="3, ASH KETCHUM,CONAN,CRAYON SHIN-CHAN,NHÂN VẬT ANIME MÃI KHÔNG LỚN,NHÂN VẬT HOẠT HÌNH,DORAEMON,NOBITA,"
                      note=""
                    />

                    <h5>
                      3 nhân vật chính của Daily Lives of High School Boys
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/22/daily-lives-of-high-school-boys-anime-1629613432745589537117.jpg"
                      alt="4, ASH KETCHUM,CONAN,CRAYON SHIN-CHAN,NHÂN VẬT ANIME MÃI KHÔNG LỚN,NHÂN VẬT HOẠT HÌNH,DORAEMON,NOBITA,"
                      note=""
                    />

                    <p>
                      Daily Lives of High School Boys xoay quanh cuộc sống
                      thường ngạy với nhiều biến cố hài hước của 3 nam sinh
                      trung học là Tadakuni, Hidenori Tabata và Yoshitake
                      Tanaka. Họ đang theo học tại trường nam sinh cao trung Bắc
                      Sanada và những sự tác động qua lại với các học sinh khác
                      xung quanh ngôi trường họ đang học, hoặc trường nữ sinh
                      bên cạnh, cùng những sự nỗ lực lớn lên của chính họ. Vấn
                      đề là các nhân vật trong phim không bao giờ già đi, thậm
                      chí họ còn tự phá vỡ bức tường thứ 4 để nói về việc này.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Khi các nhân vật thảo luận về những gì họ muốn làm khi tốt
                      nghiệp, Hidenori chỉ ra rằng họ nói gì không quan trọng vì
                      tất cả sẽ mãi mãi bị mắc kẹt trong năm thứ hai trung học.
                    </p>
                    <h5>Nam chính trong Ah! My Goddess</h5>
                    <p>
                      Câu chuyện xoay quanh anh chàng Keiichi Morisato, là sinh
                      viên năm thứ 2 của Học viện công nghệ Nekomi, chỉ vì quá
                      lùn mà không có bạn gái. Một lần cậu gọi nhầm số tới
                      "Trung tâm nữ thần giải quyết rắc rối" và gặp nữ thần hộ
                      mệnh xinh đẹp Belldandy. Belldandy xuất hiện và hỏi cậu
                      muốn ước điều gì, Keiichi nghĩ đây là một trò đùa nên nói:
                      "Tôi muốn cô ở đây mãi mãi". Điều ước được chấp thuận,
                      Belldandy trở thành bạn học của Keiichi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/22/belldandy-and-keiichi-morisato-from-ah-my-goddess-16296138731132025167408.jpg"
                      alt="5, ASH KETCHUM,CONAN,CRAYON SHIN-CHAN,NHÂN VẬT ANIME MÃI KHÔNG LỚN,NHÂN VẬT HOẠT HÌNH,DORAEMON,NOBITA,"
                      note=""
                    />

                    <p>
                      Cho đến bây giờ, các nhân vật của Ah! My Goddess đã học
                      đại học được hơn hai thập kỷ và chẳng có dấu hiệu họ sẽ
                      lớn lên. Mặc dù các nữ thần và ác quỷ có thể sẽ không già
                      đi, nhưng còn nam chính Keiichi Morisato chỉ là một người
                      bình thường, tại sao anh ta cứ mãi không tốt nghiệp đại
                      học?
                    </p>
                    <h5>
                      <strong>Doraemon</strong>, <strong>Nobita</strong>,
                      Takeshi, Suneo và Shizuka
                    </h5>
                    <p>
                      Chú mèo máy <strong>Doraemon</strong> đã trở thành hình
                      ảnh quen thuộc với nhiều thế hệ 8x, 9x - những người hâm
                      mộ bộ truyện tranh nổi tiếng của Fujiko Fujio. Sở hữu hàng
                      loạt phát minh thần kỳ từ thế kỷ 22, chú mèo máy đã làm
                      nên tuổi thơ của rất nhiều người. Cho tới khi trưởng
                      thành, chúng ta cũng khó có thể quên được hình ảnh
                      Doraemon sát cánh bên những người bạn (
                      <strong>Nobita</strong>, Shizuka, Suneo và Gian) trong
                      những chuyến hành trình thám hiểm kỳ thú. Doraemon là một
                      chú mèo máy nên dĩ nhiên cậu ta không già đi. Nhưng bên
                      cạnh Doraemon là một nhóm bạn con người, nhưng họ cũng
                      không già đi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/22/doraemon-16296142913541960221646.jpg"
                      alt="6, ASH KETCHUM,CONAN,CRAYON SHIN-CHAN,NHÂN VẬT ANIME MÃI KHÔNG LỚN,NHÂN VẬT HOẠT HÌNH,DORAEMON,NOBITA,"
                      note=""
                    />

                    <p>
                      Mặc dù vẫn có những đoạn chuyển tiếp nhanh đến các sự kiện
                      trong tương lai, ở đó các nhân vật xuất hiện khi trưởng
                      thành... nhưng nó chỉ diễn ra trong thời gian ngắn khi
                      chiếu về tương lai chứ không phải ở dòng thời gian thực
                      tại.
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
