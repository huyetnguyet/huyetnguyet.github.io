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
"timestamp": '28/08/2021 08:49 AM',
"title": 'Top 5 siêu đạo chích nổi tiếng bậc nhất trong thế giới anime, Kaito Kid vẫn chưa phải là số 1',
"description": 'Cùng chúng tôi điểm qua 5 nhân vật được cho là những siêu đạo chích nổi tiếng nhất trong thế giới anime dựa trên ý kiến bình chọn của nhiều khán giả.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/27/kai1-1630072791701609201231.jpg',
"alt": 'SHOP ANIME - MANGA,PHONG CÁCH ANIME,NHÂN VẬT ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,MANGA ANIME,TOP ANIME,',
"category": 'games',
"date": '28/08/2021',
"time": '08:49 AM',
"link": '/top-5-sieu-dao-chich-noi-tieng-bac-nhat-trong-the-gioi-anime-kaito-kid-van-chua-phai-la-so-1',
"zcomponent": 'page_20210828084920',
"filepath": './20210828084920-top-5-sieu-dao-chich-noi-tieng-bac-nhat-trong-the-gioi-anime-kaito-kid-van-chua-phai-la-so-1.js'
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
  "Top 5 siêu đạo chích nổi tiếng bậc nhất trong thế giới anime, Kaito Kid vẫn chưa phải là số 1";
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "28/08/2021 08:49 AM";
const description =
  "Cùng chúng tôi điểm qua 5 nhân vật được cho là những siêu đạo chích nổi tiếng nhất trong thế giới anime dựa trên ý kiến bình chọn của nhiều khán giả.";
const link =
  "top-5-sieu-dao-chich-noi-tieng-bac-nhat-trong-the-gioi-anime-kaito-kid-van-chua-phai-la-so-1";
const tagparam = [
  "SHOP ANIME - MANGA",
  "PHONG CÁCH ANIME",
  "NHÂN VẬT ANIME",
  "TRAILER ANIME",
  "MOVIE ANIME",
  "REVIEW ANIME",
  "ĐÁNH GIÁ ANIME",
  "MANGA ANIME",
  "TOP ANIME",
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

export default function page_20210828084920() {
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
                      Trong thế giới anime có vô số những nhân vật đầy tài năng
                      và kỳ dị thì những siêu đạo chích và các bộ anime liên
                      quan đến những nhân vật này nhận được rất nhiều sự yêu
                      thích tới từ khán giả hâm mộ. Trong khuôn khổ bài viết này
                      chúng tôi sẽ giới thiệu đến các bạn top 7 siêu đạo chích
                      nổi tiếng bậc nhất trong thế giới anime do bạn Hazy Nguyen
                      tổng hợp. Bài viết có sử dụng một số tư liệu đến từ bài
                      viết của tác giả này và danh sách sau không phải là xếp
                      hạng theo thứ tự gì cả mà là sự sắp xếp ngẫu nhiên. Mời
                      các bạn cùng điểm qua nhé!
                    </p>
                    <h5>Kaito Jeanne (Kamikaze Kaitou Jeanne)</h5>
                    <p>
                      Kaito Jeanne là một nhân vật rất đặc biệt trong bộ anime
                      Kamikaze Kaitou Jeanne. Tên của siêu đạo chích này cũng có
                      từ Kaito trong tên của mình. Nhân dạng thật của Kaito
                      Jeanne là Maron Kusakabe, một nữ sinh 16 tuổi được thiên
                      thần giao sứ mệnh xua đuổi ác quỷ trong các tác phẩm nghệ
                      thuật. Vì vậy cô bất đắc dĩ hóa thân thành siêu trộm
                      Jeanne chuyên đánh cắp các bức tranh nổi tiếng. Hành trang
                      của Maron là sự khôn khéo uyển chuyển của một nghệ sĩ múa
                      và những tài phép dễ dàng qua mặt được giới an ninh. Không
                      một ai có thể làm khó cô cho đến khi một đối thủ khó nhằn
                      xuất hiện tự xưng là Kaitou Sinbad. Vừa phải che giấu thân
                      phận trước bạn bè, vừa cố gắng hoàn thành nhiệm vụ đồng
                      thời chiến đấu với Sinbad.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/27/kai1-1630072791701609201231.jpg"
                      alt="1, SHOP ANIME - MANGA,PHONG CÁCH ANIME,NHÂN VẬT ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />

                    <p>
                      Đến với anime này các bạn sẽ được đồng hành cùng một siêu
                      đạo chích nữ nhưng đầy tài năng, ứng biến thông minh và vô
                      cùng bình tĩnh trong mọi tình huống. Các tình tiết liên
                      quan đến siêu đạo chích này luôn mang đến cho khán giả sự
                      hồi hộp, căng thẳng rồi vỡ òa trong cảm xúc.
                    </p>
                    <h5>Cat’s eye (Cat’s eye)</h5>
                    <p>
                      Một trong những tác phẩm nổi tiếng nhất của Tsukasa Hojo,
                      Cat's eye kể về ba chị em siêu trộm nhà Kisugi. Ẩn dấu
                      tung tích đằng sau một quán cà phê nhỏ, họ tiến hành trộm
                      các bức tranh tại các cuộc triển lãm với hi vọng tìm thấy
                      manh mối về chủ nhân của chúng - người cha của các cô gái.
                      Dưới sự dẫn dắt của Hitomi, bộ ba này trở thành những siêu
                      trộm quyến rũ, bí ẩn và không ít lần khiến giới cảnh sát
                      khốn đốn. Trớ trêu thay, một trong số các sĩ quan cảnh sát
                      đó lại là chồng chưa cưới của Hitomi, nhưng anh không hề
                      hay biết về thế giới đầy nguy hiểm của người yêu mình. Dù
                      theo đuổi những giá trị vật chất nhưng nhóm siêu trộm
                      Cat's eye lại luôn mang trong mình khao khát đến gần sự
                      thật về người cha bằng những tác phẩm nghệ thuật đẹp đẽ,
                      tao nhã.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/27/kai2-16300727956492025954029.jpg"
                      alt="2, SHOP ANIME - MANGA,PHONG CÁCH ANIME,NHÂN VẬT ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />

                    <p>
                      Là một câu chuyện nhân văn đầy ý nghĩa nhưng không kém
                      phần ly kỳ và hấp dẫn. Chính câu chuyện và tài năng cùng
                      tấm lòng hiếu thảo của ba chị em nhà siêu trộm Hitomi đã
                      mang đến cho khán giả hâm mộ anime Cat's eye những trải
                      nghiệm khó quên. Chính vì vậy mà 3 chị em siêu trộm này
                      lọt vào danh sách những đạo chích được khán giả yêu thích
                      nhất.
                    </p>
                    <h5>Jing (Jing: King of Bandits)</h5>

                    <p>
                      Nhìn vẻ ngoài nhỏ bé, khiêm tốn của Jing, khó ai ngờ cậu
                      là tên trộm nguy hiểm nhất vũ trụ với biệt danh King of
                      Bandits. Đó là những lời mà chúng ta cần phải chú ý khi
                      nhắc đến nhân vật Jing trong anime Jing: King of Bandits.
                      Những ai coi thường Jing như một cậu nhóc lắm trò, đều
                      phải trả giá bằng sự kinh ngạc không nói nên lời trước
                      biệt tài trộm cướp thần sầu của cậu bé này. Vũ khí lợi hại
                      nhất của Jing chính là bộ óc, một thứ bảo đảm thành công
                      cho những kế hoạch gần như không tưởng. Ngoài tài phán
                      đoán phân tích hết sức sắc sảo, cậu còn xuất sắc trong khả
                      năng ứng biến và giao chiến. Đồng hành cùng Jing trong
                      những cuộc hành trình vui nhộn là con chim lớn màu đen
                      Kir. Kẻ đồng phạm nhiều chuyện này đóng góp không nhỏ tạo
                      nên tiếng tăm của siêu trộm.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/27/kai3-1630072799963921795778.jpg"
                      alt="3, SHOP ANIME - MANGA,PHONG CÁCH ANIME,NHÂN VẬT ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />

                    <p>
                      Jing: King of Bandits là một bộ anime kết hợp hài hòa yếu
                      tố trinh thám, đấu trí căng thẳng xen kẽ vào đó là những
                      màn tấu hài vô cùng vui nhộn của cặp đôi Jing và Kir. Cả 2
                      đã cùng tạo ra sức hút và sự thành công cho siêu phẩm đình
                      đám này.
                    </p>
                    <h5>Kaito Kid (Detective Conan)</h5>
                    <p>
                      Hàng chục năm kể từ khi ra đời, Detective Conan vẫn luôn
                      giữ cho mình một lượng fan đông đảo. Một trong những nhân
                      vật phụ, ít xuất hiện nhưng luôn chiếm trọn trái tim khán
                      giả chính là Kaito Kid.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/27/kai4-1630072804908944219169.jpg"
                      alt="4, SHOP ANIME - MANGA,PHONG CÁCH ANIME,NHÂN VẬT ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />

                    <p>
                      Với bộ cánh trắng lãng tử, vẻ ngoài điển trai và khả năng
                      xuất quỷ nhập thần trong những đêm trăng, Kaito Kid đã đốn
                      hạ không biết bao nhiêu trái tim người hâm mộ. Với các
                      ngón nghề siêu đẳng được thừa hưởng từ gia đình làm ảo
                      thuật, Kid đã đã thực hiên vô vàn phi vụ, cuỗm đi những
                      báu vật, đá quý lừng danh trên thế giới. Hắn mang đến nỗi
                      kinh hoàng cho các đại gia trọc phú và giới quan chức cảnh
                      sát, nhưng ngược lại được người dân yêu mến nhờ tính tình
                      hào hiệp, quyến rũ và trung thành với những nguyên tắc
                      riêng. Mỗi nơi cậu đi qua đã để lại những câu chuyện đầy
                      mộng mơ, ngưỡng mộ của các thiếu nữ về siêu đạo chích tài
                      ba mang biệt danh Kaito Kid.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Người hay đụng độ Kaito Kid nhất đó chính là Thám Tử Lừng
                      Danh Conan. Mặc dù là một cậu nhóc thám tử rất tài năng và
                      tự tin vào khả năng của mình nhưng Conan phải công nhận
                      Kaito Kid là một bộ óc thiên tài và là một tên đạo chích
                      tài năng. Về sau khi cả 2 đều có chung mối thù với Tổ Chức
                      Áo Đen đã khiến cặp đôi này có nhiều lần tương trợ lẫn
                      nhau để đưa tổ chức tà ác bí ẩn này ra ánh sáng.
                    </p>
                    <h5>Arsene Lupin III (Lupin the third)</h5>
                    <p>
                      Arsene Lupin III được xem là huyền thoại lừng danh về trộm
                      cắp đồng thời là một trong những nhân vật kinh điển nhất
                      của giới anime. Nổi tiếng với sự ranh mãnh, khéo léo và sở
                      hữu tài hóa trang siêu đẳng, Lupin đã thách thức giới cảnh
                      sát và biến những hàng rào an ninh vững chãi nhất trở
                      thành trò cười. Danh sách những chiến lợi phẩm dài vô kể
                      của tên trộm đào hoa này biến anh trở thành nỗi ám ảnh của
                      những phú ông giàu có. Dù thế, siêu đạo chích vẫn được yêu
                      mến vì chưa bao giờ làm hại tính mạng của bất cứ ai và đặc
                      biệt trân trọng phái đẹp.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/27/kai5-16300728096081249985663.jpg"
                      alt="5, SHOP ANIME - MANGA,PHONG CÁCH ANIME,NHÂN VẬT ANIME,TRAILER ANIME,MOVIE ANIME,REVIEW ANIME,ĐÁNH GIÁ ANIME,MANGA ANIME,TOP ANIME,"
                      note=""
                    />

                    <p>
                      Cũng chính vì điều này mà nhiều khán giả bình chọn rằng
                      Arsene Lupin III chính là siêu đạo chích nổi tiếng nhất
                      trong thế giới anime từ trước đến nay. Các bạn nghĩ sao về
                      điều này cũng như danh sách 5 siêu đạo chích nổi tiếng
                      trong thế giới anime mà chúng tôi vừa kể trên, còn cái tên
                      nào xứng đáng lọt vào danh sách này nữa hay không? Hãy để
                      lại ý kiến của mình nhé!
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
