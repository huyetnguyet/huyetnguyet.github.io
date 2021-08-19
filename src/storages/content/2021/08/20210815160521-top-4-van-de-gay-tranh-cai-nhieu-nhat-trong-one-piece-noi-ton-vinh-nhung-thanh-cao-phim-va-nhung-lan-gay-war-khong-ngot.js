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
"timestamp": '15/08/2021 04:05 PM',
"title": 'Top 4 vấn đề gây tranh cãi nhiều nhất trong One Piece, nơi tôn vinh những "thánh cào phím" và những lần "gây war" không ngớt',
"description": 'Cho đến nay khi một trong bốn vấn đề sau đây trong One Piece được đưa ra bàn luận thì nó luôn tạo ra những cuộc tranh luận không có hồi kết. Cùng chúng tôi điểm qua các vấn đề này nhé!',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/yp1-16289265719271956823559.png',
"alt": 'ONE PIECE,FAN ONE PIECE,TRANH CÃI ONE PIECE,CỘNG ĐỒNG ONE PIECE,TỨ HOÀNG ONE PIECE,ĐÔ ĐỐC ONE PIECE,ARC WANO,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,PHƯỢNG HOÀNG MARCO,EIICHIRO ODA,',
"category": 'games',
"date": '15/08/2021',
"time": '04:05 PM',
"link": '/top-4-van-de-gay-tranh-cai-nhieu-nhat-trong-one-piece-noi-ton-vinh-nhung-thanh-cao-phim-va-nhung-lan-gay-war-khong-ngot',
"zcomponent": 'page_20210815160521',
"filepath": './20210815160521-top-4-van-de-gay-tranh-cai-nhieu-nhat-trong-one-piece-noi-ton-vinh-nhung-thanh-cao-phim-va-nhung-lan-gay-war-khong-ngot.js'
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
  'Top 4 vấn đề gây tranh cãi nhiều nhất trong One Piece, nơi tôn vinh những "thánh cào phím" và những lần "gây war" không ngớt';
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "15/08/2021 04:05 PM";
const description =
  "Cho đến nay khi một trong bốn vấn đề sau đây trong One Piece được đưa ra bàn luận thì nó luôn tạo ra những cuộc tranh luận không có hồi kết. Cùng chúng tôi điểm qua các vấn đề này nhé!";
const link =
  "top-4-van-de-gay-tranh-cai-nhieu-nhat-trong-one-piece-noi-ton-vinh-nhung-thanh-cao-phim-va-nhung-lan-gay-war-khong-ngot";
const tagparam = [
  "ONE PIECE",
  "FAN ONE PIECE",
  "TRANH CÃI ONE PIECE",
  "CỘNG ĐỒNG ONE PIECE",
  "TỨ HOÀNG ONE PIECE",
  "ĐÔ ĐỐC ONE PIECE",
  "ARC WANO",
  "TỨ HOÀNG KAIDO",
  "TỨ HOÀNG BIG MOM",
  "PHƯỢNG HOÀNG MARCO",
  "EIICHIRO ODA",
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

export default function page_20210815160521() {
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
                    <h5>
                      Đô Đốc với Tứ Hoàng ai mạnh hơn và mạnh hơn có nhiều
                      không?
                    </h5>
                    <p>
                      Đây là một chủ đề chưa bao giờ cũ và đã tồn tại trong{" "}
                      <strong>One Piece</strong> từ rất lâu rồi. Điều thú vị là
                      bản thân Oda cũng chưa để cho một Đôc Đốc và Tứ Hoàng này
                      có một trận chiến tay đôi để giải quyết được câu hỏi này.
                      Chính vì vậy cứ mỗi lần chủ đề này được đưa ra là các fan
                      và đặc biệt là các "thánh cào phím" lại thể hiện được sức
                      mạnh tranh luận của mình.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/yp1-16289265719271956823559.png"
                      alt="1, ONE PIECE,FAN ONE PIECE,TRANH CÃI ONE PIECE,CỘNG ĐỒNG ONE PIECE,TỨ HOÀNG ONE PIECE,ĐÔ ĐỐC ONE PIECE,ARC WANO,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,PHƯỢNG HOÀNG MARCO,EIICHIRO ODA,"
                      note=""
                    />
                    <p>
                      Theo quan điểm cá nhân của tác giả bài viết thì Tứ Hoàng
                      mạnh hơn Đô Đốckhi có một trận đấu tay đôi. Về cách biệt
                      thì sức mạnh của Tứ Hoàng nếu được cho là 10 thì Đô Đốc sẽ
                      là 8 hoặc 9 tùy vào năng lực của mỗi Đô Đốc. Một bên là
                      những hải tặc đứng đầu xưng vương cả vùng biển Tân Thế
                      Giới. Một bên là lực lượng chiến đấu mạnh nhất hải quân.
                      Chính vì vậy mức thang chấm điểm trên là phù hợp. Tuy
                      nhiên Tứ Hoàng mạnh hơn không có nghĩa là họ sẽ chiến
                      thắng trong một cuộc đấu tay đôi với Đô Đốc. Trong một
                      trận chiến thì ngoài yếu tố sức mạnh ra còn khá nhiều yếu
                      tố khách quan và chủ quan khác ảnh hưởng tới kết quả.
                    </p>
                    <h5>
                      Đô Đốc với Đội Trưởng của băng Tứ Hoàng ai mạnh hơn?
                    </h5>
                    <p>
                      Đây cũng là chủ đề gây ra nhiều tranh luận trong nhiều năm
                      qua, và giống như vấn đề trên, Oda vẫn chưa giải quyết
                      điều này. Có vẻ như tác giả <strong>One Piece</strong>{" "}
                      muốn tạo những tranh luận không ngớt về chủ đề này qua đó
                      tạo ra sức hút cho bộ truyện mà ông sáng tác.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/yp2-16289265755861281910385.jpg"
                      alt="2, ONE PIECE,FAN ONE PIECE,TRANH CÃI ONE PIECE,CỘNG ĐỒNG ONE PIECE,TỨ HOÀNG ONE PIECE,ĐÔ ĐỐC ONE PIECE,ARC WANO,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,PHƯỢNG HOÀNG MARCO,EIICHIRO ODA,"
                      note=""
                    />
                    <p>
                      Đội Trưởng của Tứ Hoàng là một lực lượng rất khó đoán. Có
                      những người như Ace chỉ có giá 550 triệu. Nhưng lại có
                      những người truy nã trên 1 tỷ Beli như Katakuri, King,
                      Queen hay Marco. Tất nhiên con số ấy không đánh giá đúng
                      thực lực của một đội trưởng Tứ Hoàng, nhưng qua đây chúng
                      ta thấy sức mạnh của các đội trưởng không được đồng đều
                      như các Đô Đốc. Có những đội trưởng tương tự như Shiryu
                      hoàn toàn có thể sánh ngang với Đô Đốc, nhưng trường hợp
                      đó là đặc biệt vì hắn đi theo Râu Đen.
                    </p>
                    <p>
                      Chính vì vậy nếu chấm điểm Đô Đốc 10 thì hầu hết các Đội
                      Trưởng Tứ Hoàng chỉ ở mức 6 đến 7 điểm mà thôi. Những cá
                      nhân vượt trên như chúng tôi vừa kể là Katakuri, King,
                      Queen hay Marco, Shiryu có mức điểm 8 đến 9 điểm so với Đô
                      Đốc. Cũng giống như Tứ Hoàng đối đầu với Đô Đốc trong một
                      cuộc đấu tay đôi, dù yếu hơn nhưng nếu biết cách tận dụng
                      sai lầm của đối thủ thì việc Đội Trưởng của một băng Tứ
                      Hoàng đánh bại được Đô Đốc là điều hoàn toàn có thể xảy ra
                      dù họ được đánh giá yếu hơn.
                    </p>
                    <h5>
                      Bốn Tứ Hoàng mà liên minh thì chính phủ thế giới sẽ tan
                      tành?
                    </h5>

                    <p>
                      Đây là câu hỏi cũng nhận được rất nhiều ý kiến trái chiều
                      của độc giả hâm mộ <strong>One Piece</strong>. Nhiều người
                      cho rằng kể cả có liên minh với nhau thì 4 Tứ Hoàng rất
                      khó có thể đánh bại được chính quyền thế giới. Tuy nhiên
                      nếu nhìn cách mà hải quân và chính phủ thế giới hoảng hốt
                      trước sự liên minh giữa Big Mom và Kaido ở Wano hiện tại
                      thì chúng ta có thể thấy được nếu 4 Tứ Hoàng liên minh với
                      nhau và đồng lòng thì chính phủ thế giới sẽ tan tành là
                      điều hoàn toàn khả thi.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Tất nhiên việc 4 Tứ Hoàng liên minh là điều không thể, một
                      núi không thể có 2 vua chứ đừng nói tới là có tới 4 vị
                      vua. Trong suốt nhiều năm qua, việc các Tứ Hoàng cạnh
                      tranh với nhau chính là một yếu tố quan trọng tạo nên sự
                      cân bằng của thế giới trong <strong>One Piece</strong>.
                      Tuy nhiên để liên minh 4 Tứ Hoàng chiến thắng được chính
                      phủ thế giới là điều không hề dễ dàng như nhiều độc giả
                      vẫn thường nghĩ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/14/yp6-16289265971181552011102.jpg"
                      alt="3, ONE PIECE,FAN ONE PIECE,TRANH CÃI ONE PIECE,CỘNG ĐỒNG ONE PIECE,TỨ HOÀNG ONE PIECE,ĐÔ ĐỐC ONE PIECE,ARC WANO,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,PHƯỢNG HOÀNG MARCO,EIICHIRO ODA,"
                      note=""
                    />
                    <p>
                      Nếu Tứ Hoàng có liên minh thì chính phủ cũng có. Và liên
                      minh của chính phủ là hơn 170 quốc gia đồng minh của họ.
                      Spandam đã từng nói đối đầu với chính phủ thế giới đồng
                      nghĩa với việc là kẻ thù của cả 170 quốc gia. Nếu huy động
                      được toàn bộ quân đội của 170 quốc gia này này thì hoàn
                      toàn có thể đánh bại bất cứ liên minh nào của hải tặc.
                      Điển hình ở Alabasta với Đảo Người Cá mới nội chiến thôi
                      đã huy động cả triệu quân số. Trong khi trận chiến tại
                      Marineford chỉ vỏn vẹn có 100 nghìn quân, chưa ra trận hết
                      mà cũng đã đủ áp đảo băng Râu Trắng.
                    </p>
                    <h5>
                      Băng hải tặc Tứ Hoàng thực sự là tổ chức mạnh nhất hiện
                      nay?
                    </h5>
                    <p>
                      Điều này cũng là một câu hỏi gây ra nhiều tranh cãi dành
                      cho các fan <strong>One Piece</strong>. Trên thực tế xét
                      về con người đơn lẻ, mỗi băng Tứ Hoàng đều là tập hợp của
                      những hải tặc khét tiếng nhất và mạnh mẽ nhất. Tuy nhiên
                      xét về quy mô tổ chức thì họ sẽ phải nằm cửa dưới nếu so
                      với chính phủ thế giới. Để các bạn dễ hình dung hơn thì
                      chính phủ trong One Piece cai quản cả thế giới và đối chọi
                      với toàn bộ các thế lực thù địch từ quân cách mạng tới phe
                      phái hải tặc. Còn Tứ Hoàng thì chỉ cai quản phía nửa cuối
                      Đại Hải Trình là Tân Thế Giới. Một vùng biển cực kỳ nhỏ bé
                      chỉ bằng 1 phần 10 diện tích mà chính phủ kiểm soát. Đã
                      vậy Tân Thế Giới lại còn chia ra làm bốn và được cai trị
                      bởi 4 Tứ Hoàng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/14/yp4-1628926583154168458571.jpg"
                      alt="4, ONE PIECE,FAN ONE PIECE,TRANH CÃI ONE PIECE,CỘNG ĐỒNG ONE PIECE,TỨ HOÀNG ONE PIECE,ĐÔ ĐỐC ONE PIECE,ARC WANO,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,PHƯỢNG HOÀNG MARCO,EIICHIRO ODA,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/14/base64-16289266544932121126752.png"
                      alt="5, ONE PIECE,FAN ONE PIECE,TRANH CÃI ONE PIECE,CỘNG ĐỒNG ONE PIECE,TỨ HOÀNG ONE PIECE,ĐÔ ĐỐC ONE PIECE,ARC WANO,TỨ HOÀNG KAIDO,TỨ HOÀNG BIG MOM,PHƯỢNG HOÀNG MARCO,EIICHIRO ODA,"
                      note=""
                    />
                    <p>
                      Nhìn chung sẽ rất lâu nữa những câu vấn đề gây tranh cãi
                      trong <strong>One Piece</strong> này mới được giải quyết
                      hoặc là không bao giờ. Đó cũng là cái hay mà Oda có thể cố
                      tình tạo ra để mang lại sức hút cho bộ truyện của mình.
                      Bài viết có tham khảo nội dung trên fanpage "One Piece
                      FC". Các bạn thấy sao về điều này, hãy để lại ý kiến của
                      mình nhé!
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
