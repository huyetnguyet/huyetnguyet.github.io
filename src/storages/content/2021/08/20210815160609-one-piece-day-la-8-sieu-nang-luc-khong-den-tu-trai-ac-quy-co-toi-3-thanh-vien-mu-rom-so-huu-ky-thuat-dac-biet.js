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
"timestamp": '15/08/2021 04:06 PM',
"title": 'One Piece: Đây là 8 "siêu năng lực" không đến từ trái ác quỷ, có tới 3 thành viên Mũ Rơm sở hữu kỹ thuật đặc biệt',
"description": 'Những kỹ thuật này đều rất kỳ diệu đấy nhé!',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/15/photo-1-1629019012401268560689.jpg',
"alt": 'ONE PIECE,MISS GOLDENWEEK,SIÊU NĂNG LỰC TRONG ONE PIECE,NĂNG LỰC KHÔNG ĐẾN TỪ TRÁI ÁC QUỶ,TRÁI ÁC QUỶ,',
"category": 'games',
"date": '15/08/2021',
"time": '04:06 PM',
"link": '/one-piece-day-la-8-sieu-nang-luc-khong-den-tu-trai-ac-quy-co-toi-3-thanh-vien-mu-rom-so-huu-ky-thuat-dac-biet',
"zcomponent": 'page_20210815160609',
"filepath": './20210815160609-one-piece-day-la-8-sieu-nang-luc-khong-den-tu-trai-ac-quy-co-toi-3-thanh-vien-mu-rom-so-huu-ky-thuat-dac-biet.js'
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
  'One Piece: Đây là 8 "siêu năng lực" không đến từ trái ác quỷ, có tới 3 thành viên Mũ Rơm sở hữu kỹ thuật đặc biệt';
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "15/08/2021 04:06 PM";
const description = "Những kỹ thuật này đều rất kỳ diệu đấy nhé!";
const link =
  "one-piece-day-la-8-sieu-nang-luc-khong-den-tu-trai-ac-quy-co-toi-3-thanh-vien-mu-rom-so-huu-ky-thuat-dac-biet";
const tagparam = [
  "ONE PIECE",
  "MISS GOLDENWEEK",
  "SIÊU NĂNG LỰC TRONG ONE PIECE",
  "NĂNG LỰC KHÔNG ĐẾN TỪ TRÁI ÁC QUỶ",
  "TRÁI ÁC QUỶ",
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

export default function page_20210815160609() {
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
                      Trong thế giới <strong>One Piece</strong>,{" "}
                      <strong>trái ác quỷ</strong> đã giúp con người sở hữu
                      những siêu năng lực đặc biệt. Tuy nhiên vẫn có những năng
                      lực kỳ diệu trong One Piece không đến từ trái ác quỷ:
                    </p>
                    <h5>1. Bẫy màu của Miss Goldenweek</h5>
                    <p>
                      <strong>Miss Goldenweek</strong> tên thật là Marianne, cô
                      là một đặc vụ của Baroque Works, từng là đối tác của Mr.
                      3/Galdino. Năng lực của cô nàng không đến từ{" "}
                      <strong>trái ác quỷ</strong>, và chính Eiichiro Oda đã xác
                      nhận điều này thông qua SBS <strong>One Piece</strong> tập
                      23 .
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/photo-1-1629019012401268560689.jpg"
                      alt="1, ONE PIECE,MISS GOLDENWEEK,SIÊU NĂNG LỰC TRONG ONE PIECE,NĂNG LỰC KHÔNG ĐẾN TỪ TRÁI ÁC QUỶ,TRÁI ÁC QUỶ,"
                      note=""
                    />
                    <p>
                      <strong>Miss Goldenweek</strong> có thể làm ảnh hưởng tới
                      Luffy bằng sức mạnh vẽ của cô ấy, có tên là Color Trap.
                      Những động thái từ Miss Goldenweek có thể tác động đến đối
                      thủ, giống như thôi miên. Màu vàng có thể khiến đối phương
                      cười và màu xanh lam có thể khiến bạn buồn.
                    </p>
                    <h5>2. Thuật thôi miên của Jango</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-1-1629019013738282631681.jpg"
                      alt="2, ONE PIECE,MISS GOLDENWEEK,SIÊU NĂNG LỰC TRONG ONE PIECE,NĂNG LỰC KHÔNG ĐẾN TỪ TRÁI ÁC QUỶ,TRÁI ÁC QUỶ,"
                      note=""
                    />
                    <p>
                      Nhắc đến thuật thôi miên, Jango là cái tên không thể bỏ
                      qua. Chỉ cần dùng một con lắc đung đưa trước mặt người
                      khác và nói "Một, hai, Jango!", Jango có thể thôi miên đối
                      thủ và đưa họ vào giấc ngủ hoặc thôi miên bạn bè để đánh
                      thức sức mạnh tiềm ẩn của họ. Tuy nhiên Jango cũng có thể
                      bị thôi miên bằng chính sức mạnh của mình.
                    </p>
                    <h5>3. Kyutoryu của Zoro</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-2-1629019016283390930282.jpg"
                      alt="3, ONE PIECE,MISS GOLDENWEEK,SIÊU NĂNG LỰC TRONG ONE PIECE,NĂNG LỰC KHÔNG ĐẾN TỪ TRÁI ÁC QUỶ,TRÁI ÁC QUỶ,"
                      note=""
                    />
                    <p>
                      Ngay cả khi không ăn <strong>trái ác quỷ</strong>, kỹ năng
                      kiếm thuật của Zoro có thể nói là khủng khiếp và khiến anh
                      trở thành một trong ba người mạnh nhất băng Mũ Rơm.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Suốt trận chiến với Kaku, Zoro đã tìm ra được một chiêu
                      thức mới là "Kyutoryu", làm anh trông như có ba đầu và sáu
                      tay, như thần Asura, khi kích hoạt chiêu thức Kiki
                      Kyutoryu: Asura. Khả năng này cho phép Zoro tận dụng chín
                      cây kiếm trong chiến đấu để gia tăng tiềm lực của mình, và
                      thường được dùng làm chiêu kết thúc trận đấu.
                    </p>
                    <h5>4. Diable Jambe của Sanji</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-3-16290190157701769054376.jpg"
                      alt="4, ONE PIECE,MISS GOLDENWEEK,SIÊU NĂNG LỰC TRONG ONE PIECE,NĂNG LỰC KHÔNG ĐẾN TỪ TRÁI ÁC QUỶ,TRÁI ÁC QUỶ,"
                      note=""
                    />
                    <p>
                      Với Diable Jambe, đòn tấn công bằng chân của Sanji có thể
                      thiêu rụi bất cứ ai anh ta đá trúng. Không cần sử dụng{" "}
                      <strong>trái ác quỷ</strong> liên quan đến lửa, Sanji có
                      thể tạo ra lửa bằng trái tim đang rực cháy của mình ngay
                      cả khi ở dưới nước. Thật kỳ diệu phải không nào? Chưa kể
                      khả năng bay với Sky Walk khiến Sanji được coi là có siêu
                      sức mạnh mà không cần trái ác quỷ.
                    </p>
                    <h5>5. Khả năng dùng âm nhạc thôi miên của Brook</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-4-162901901526637819657.jpg"
                      alt="5, ONE PIECE,MISS GOLDENWEEK,SIÊU NĂNG LỰC TRONG ONE PIECE,NĂNG LỰC KHÔNG ĐẾN TỪ TRÁI ÁC QUỶ,TRÁI ÁC QUỶ,"
                      note=""
                    />
                    <p>
                      Mặc dù Brook đã ăn <strong>trái ác quỷ</strong> Yomi Yomi,
                      nhưng nó lại không phải là nguồn sức mạnh của anh ta. Cái
                      đáng chú ý là khả năng dùng âm nhạc thôi miên của Brook.
                      Ngay cả khi không dựa vào sức mạnh của trái ác quỷ, Brook
                      có thể khiến đối thủ bị ảnh hưởng bởi âm nhạc của mình.
                      Việc đưa đối phương vào giấc ngủ đến khiến họ cảm thấy như
                      đang ở một lễ hội, Brook thực hiện rất dễ dàng.
                    </p>
                    <h5>6. Seimei Kikan của Kumadori</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-5-16290190137561644603075.jpg"
                      alt="6, ONE PIECE,MISS GOLDENWEEK,SIÊU NĂNG LỰC TRONG ONE PIECE,NĂNG LỰC KHÔNG ĐẾN TỪ TRÁI ÁC QUỶ,TRÁI ÁC QUỶ,"
                      note=""
                    />
                    <p>
                      Bên cạnh Rokushiki, Kumadori còn có kỹ năng khác là Seimei
                      Kikan, một kỹ thuật điều khiển tất cả các bộ phận của cơ
                      thể. Khi sử dụng Seimei Kikan, Kumadori có thể điều khiển
                      từng sợi tóc của mình và sử dụng nó để tấn công đối thủ
                      hoặc quấn quanh cơ thể họ. Thậm chí anh ta có thể tạo hình
                      tóc của mình thành một bàn tay phụ.
                    </p>
                    <h5>7. Kỹ năng Electro của tộc Mink</h5>
                    <p>
                      Nói về siêu năng lực mà không cần ăn{" "}
                      <strong>trái ác quỷ</strong>, bạn có thể nói rằng tất cả
                      các thành viên của tộc Mink đều là những bậc thầy. Ngoài
                      việc có cơ thể giống với dạng lai của một người sử dụng
                      trái ác quỷ hệ Zoan, tộc Mink còn có khả năng dẫn điện
                      trong các đòn tấn công mà họ gọi là Electro.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/15/photo-6-16290190147611943994877.jpg"
                      alt="7, ONE PIECE,MISS GOLDENWEEK,SIÊU NĂNG LỰC TRONG ONE PIECE,NĂNG LỰC KHÔNG ĐẾN TỪ TRÁI ÁC QUỶ,TRÁI ÁC QUỶ,"
                      note=""
                    />
                    <p>
                      Mặc dù nó không mạnh bằng đòn tấn công của Enel, nhưng mọi
                      thành viên của tộc Mink đều có thể chiến đấu bằng năng
                      lượng điện mà không cần bất kỳ năng lực{" "}
                      <strong>trái ác quỷ</strong> nào.
                    </p>
                    <h5>8. Kiếm thuật của Kin'emon có thể cắt xuyên qua lửa</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/15/photo-7-1629019014252608999166.jpg"
                      alt="8, ONE PIECE,MISS GOLDENWEEK,SIÊU NĂNG LỰC TRONG ONE PIECE,NĂNG LỰC KHÔNG ĐẾN TỪ TRÁI ÁC QUỶ,TRÁI ÁC QUỶ,"
                      note=""
                    />
                    <p>
                      Tương tự như Brook, mặc dù có sức mạnh{" "}
                      <strong>trái ác quỷ</strong> nhưng Kin'emon cũng có những
                      kỹ thuật không liên quan gì đến năng lực của trái ác quỷ.
                      Kỹ thuật cắt lửa của Kin'emon được gọi là Kitsunebi-ryu.
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
