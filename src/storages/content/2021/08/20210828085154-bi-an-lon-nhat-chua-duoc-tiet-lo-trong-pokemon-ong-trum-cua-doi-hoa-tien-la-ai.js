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
"timestamp": '28/08/2021 08:51 AM',
"title": 'Bí ẩn lớn nhất chưa được tiết lộ trong Pokémon: Ông trùm của đội Hỏa Tiễn là ai?',
"description": 'Có lẽ ông trùm của đội Hỏa Tiễn Pokémon còn gây tò mò cho fan hâm mộ manga-anime hơn cả ông trùm của Tổ chức Áo đen trong Thám tử Conan',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/28/giovanni-pokemon-header-1630124818537845738155.jpeg',
"alt": 'KHÁM PHÁ,POKÉMON,ĐỘI HỎA TIỄN,',
"category": 'games',
"date": '28/08/2021',
"time": '08:51 AM',
"link": '/bi-an-lon-nhat-chua-duoc-tiet-lo-trong-pokemon-ong-trum-cua-doi-hoa-tien-la-ai',
"zcomponent": 'page_20210828085154',
"filepath": './20210828085154-bi-an-lon-nhat-chua-duoc-tiet-lo-trong-pokemon-ong-trum-cua-doi-hoa-tien-la-ai.js'
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
  "Bí ẩn lớn nhất chưa được tiết lộ trong Pokémon: Ông trùm của đội Hỏa Tiễn là ai?";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "28/08/2021 08:51 AM";
const description =
  "Có lẽ ông trùm của đội Hỏa Tiễn Pokémon còn gây tò mò cho fan hâm mộ manga-anime hơn cả ông trùm của Tổ chức Áo đen trong Thám tử Conan";
const link =
  "bi-an-lon-nhat-chua-duoc-tiet-lo-trong-pokemon-ong-trum-cua-doi-hoa-tien-la-ai";
const tagparam = ["KHÁM PHÁ", "POKÉMON", "ĐỘI HỎA TIỄN"];
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

export default function page_20210828085154() {
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
                      Bên cạnh những bí mật về bản chất của một số{" "}
                      <strong>Pokémon</strong>, một bí ẩn khác đã tồn tại từ đầu
                      câu chuyện và cho đến giờ vẫn chưa được giải thích. Ai
                      cũng biết lý do khiến <strong>đội Hỏa Tiễn</strong> tìm
                      mọi cách để bắt cóc Pikachu chỉ là để gây ấn tượng với một
                      người đàn ông. Dù ông trùm này đã xuất hiện rất nhiều lần
                      với không ít Pokémon khác nhau, nhưng dường như khán giả
                      vẫn còn biết rất ít về ông ta – người có tên Giovanni.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/28/giovanni-pokemon-header-1630124818537845738155.jpeg"
                      alt="1, KHÁM PHÁ,POKÉMON,ĐỘI HỎA TIỄN,"
                      note=""
                    />

                    <p>
                      Từng là người quản lý của Viridian City Gym, Giovanni sau
                      đó chỉ quan tâm đến tổ chức tội phạm của riêng ông ta, hay
                      còn gọi là <strong>đội Hỏa Tiễn</strong>. Tổ chức này hoạt
                      động theo cách thức đi ăn trộm các{" "}
                      <strong>Pokémon</strong> có sức mạnh, sau đó lấy sức mạnh
                      hoặc bán chúng để thu lời cao. Mặc dù Giovanni đối xử với
                      Pokémon Persian của mình có vẻ khá tình cảm và chân thành,
                      nhưng với các Pokémon khác thì ông ta xem chúng không hơn
                      gì những phương tiện cho mục đích riêng. Dù vậy, hẳn không
                      ít fan của franchise này vẫn băn khoăn về việc các pokémon
                      cảm nhận về Giovanni ra sao?
                    </p>
                    <h5>Ông trùm siêu bí ẩn của thế giới Pokémon</h5>

                    <p>
                      Không có nhiều thông tin về Giovanni. Phần lớn các chi
                      tiết gợi ý về ông ta đều xuất hiện trong bộ phim The Birth
                      of Mewtwo. Chương trình ban đầu được phát sóng độc quyền
                      tại Nhật Bản trong những tuần đầu trước khi phát hành
                      Mewtwo Strikes Back vào tháng 6 năm 1998. Trong bộ phim có
                      tiết lộ chi tiết cá nhân của ông trùm này. Theo đó, mẹ của
                      Giovanni cũng từng lãnh đạo tổ chức này trước đây.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/28/giovanni-and-mewtwo-16301248365371295705040.jpg"
                      alt="2, KHÁM PHÁ,POKÉMON,ĐỘI HỎA TIỄN,"
                      note=""
                    />

                    <p>
                      Mẹ của Giovanni được biết đến với tên gọi “Madame Boss”.
                      Bà ta mới là người lập ra <strong>đội Hỏa Tiễn</strong>,
                      sau đó truyền lại chức vụ cho con trai. Giovanni rất coi
                      trọng mẹ và có lẽ đã học hỏi rất nhiều về độ tàn bạo của
                      bà. Mặc dù Madame Boss không đánh giá cao Giovanni, nhưng
                      bà vẫn để ông ta cai quản tổ chức. Dù The Birth of Mewtwo
                      có nghĩa gì với mạch chuyện chính thức không, nhưng cho
                      đến nay đó vẫn là tập phim duy nhất có đề cập đến quá khứ
                      của Giovanni.
                    </p>
                    <h5>
                      Giovanni và những mối quan hệ trong thế giới Pokémon
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/28/giovanni-vs-ash-16301249538691112952783.jpg"
                      alt="3, KHÁM PHÁ,POKÉMON,ĐỘI HỎA TIỄN,"
                      note=""
                    />

                    <p>
                      <strong>Pokémon</strong> the Series: Sun & Moon tiết lộ
                      rằng Giovanni đã có mối quan hệ cá nhân với Nanu – Kahuna
                      của đảo Ula’ula thuộc Alola Region. Trong lúc tìm kiếm
                      thông tin về Pokémon huyền thoại, Giovanni đã rất bất ngờ
                      khi nghe nói đến việc Nanu đã trở thành sĩ quan cảnh sát.
                      Dù mức độ của mối quan hệ trong quá khứ của hai bên không
                      rõ ràng, nhưng qua thái độ của Giovanni thì rất có thể họ
                      là bạn bè.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Ngoài Nanu, Giovanni còn từng có tương tác với Jessie,
                      James và Meowth. Đôi khi Giovanni quên họ, đôi khi ông ta
                      cần được nhắc nhở về đối phương, đôi khi ông ta trừng phạt
                      họ và không ít lần ông ta cũng đặt niềm tin vào họ. Thậm
                      ông ta đã giữ họ ở lại bên mình nhằm giúp đỡ, cố gắng
                      chinh phục vùng Unova. Trong kế hoạch này, Giovanni đã có
                      dịp chứng minh khả năng huấn luyện{" "}
                      <strong>pokémon</strong> khi Persian của ông ta đánh bại
                      được Pikachu của Ash.
                    </p>
                    <h5>Giovanni - Ông trùm sẽ mãi là bí ẩn</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/28/photo-1-1628560536284410144980-16301248771791564199463.png"
                      alt="4, KHÁM PHÁ,POKÉMON,ĐỘI HỎA TIỄN,"
                      note=""
                    />

                    <p>
                      Từ kỹ năng mà Giovanni thể hiện trong một vài dịp thì có
                      vẻ ông ta từng ước mơ đi theo con đường huấn luyện viên,
                      đó là lý do giải thích cho vai trò trước đây của ông ta là
                      thị trưởng thành phố Gym. Điều này không có nghĩa là
                      Giovanni đi mở phòng tập gym! Nó thể hiện rằng Giovanni sở
                      hữu phòng tập để đỡ những người huấn luyện, kiếm theo dõi
                      và bắt cóc các <strong>Pokémon</strong>. Chính vì vậy mà
                      không ít lần Giovanni giấu mặt hoàn toàn, chi tiết được
                      nhiều fan tin là ông ta đang thực hiện các tham vọng
                      riêng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/28/pokc3a9mon-go-giovanni6074103-1630124910307565143106.jpg"
                      alt="5, KHÁM PHÁ,POKÉMON,ĐỘI HỎA TIỄN,"
                      note=""
                    />

                    <p>
                      Tuy nhiên, cách ứng xử tàn nhẫn và đôi khi hoàn toàn xấu
                      xa của Giovanni được thể hiện rất rõ ràng. Với các{" "}
                      <strong>pokémon</strong> không phải Persian của ông ta,
                      chúng sẽ bị giam trong các lồng. Giovanni có các đối xử
                      khác nhau với pokémon. Trước Mewtwo, ông ta nói những gì
                      mà nó muốn nghe khi bàn về quan hệ hợp tác giữa hai người,
                      khiến nó trung thành với mình. Còn với bản sao, Giovanni
                      vô cùng coi thường nó. Chính điều này đã dẫn đến việc bản
                      sao trốn thoát và tìm cách thống trị thế giới.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/28/d33b8c4f1743cab8966f598bcebefa0d-16301249902171670511484.jpg"
                      alt="6, KHÁM PHÁ,POKÉMON,ĐỘI HỎA TIỄN,"
                      note=""
                    />

                    <p>
                      Có vẻ như trong tương lai, Giovanni sẽ vẫn xuất hiện với
                      vai trò đơn giản là sếp trùm của{" "}
                      <strong>đội Hỏa Tiễn</strong>. Ông ta không có một câu
                      chuyện riêng, không có sự tiến triển trong tính cách. Và
                      dường như Giovanni chỉ còn xuất hiện như động lực khiến
                      đội Hỏa Tiễn rình rập tìm bắt Pikachu. Bí ẩn xoay quanh
                      nhân vật này cũng như lý do ông ta muốn bắt Pikachu sẽ mãi
                      là một câu hỏi không có lời giải.
                    </p>
                    <p></p>
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
