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
"timestamp": '04/08/2021 06:59 PM',
"title": 'One Punch Man: Chỉ với 5 chiêu thức bình thường này mà Thánh Phồng Saitama trở nên "vô đối"',
"description": 'Ngoài kĩ năng tối thượng "Đấm thường nghiêm túc", anh hùng One Punch Man của chúng ta còn chiêu gì nữa? Cùng chúng tôi điểm qua những chiêu thức của Thánh Phồng Saitama nhé!',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/hp1-1628050012532853990835.jpg',
"alt": 'MANGA ONE PUNCH MAN,TÁC GIẢ ONE PUNCH MAN,MỸ NHÂN ONE PUNCH MAN,FAN ART ONE PUNCH MAN,ANIME ONE PUNCH MAN,FAN ONE PUNCH MAN,CỘNG ĐỒNG ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,BÍ MẬT VỀ SỨC MẠNH CỦA SAITAMA,THẦY TRÒ SAITAMA VS GENOS,',
"category": 'games',
"date": '04/08/2021',
"time": '06:59 PM',
"link": '/one-punch-man-chi-voi-5-chieu-thuc-binh-thuong-nay-ma-thanh-phong-saitama-tro-nen-vo-doi',
"zcomponent": 'page_20210804185942',
"filepath": './20210804185942-one-punch-man-chi-voi-5-chieu-thuc-binh-thuong-nay-ma-thanh-phong-saitama-tro-nen-vo-doi.js'
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
  'One Punch Man: Chỉ với 5 chiêu thức bình thường này mà Thánh Phồng Saitama trở nên "vô đối"';
const author = "Sầu Thiên Thu";
const source = "Trí Thức Trẻ";
const timestamp = "04/08/2021 06:59 PM";
const description =
  'Ngoài kĩ năng tối thượng "Đấm thường nghiêm túc", anh hùng One Punch Man của chúng ta còn chiêu gì nữa? Cùng chúng tôi điểm qua những chiêu thức của Thánh Phồng Saitama nhé!';
const link =
  "one-punch-man-chi-voi-5-chieu-thuc-binh-thuong-nay-ma-thanh-phong-saitama-tro-nen-vo-doi";
const tagparam = [
  "MANGA ONE PUNCH MAN",
  "TÁC GIẢ ONE PUNCH MAN",
  "MỸ NHÂN ONE PUNCH MAN",
  "FAN ART ONE PUNCH MAN",
  "ANIME ONE PUNCH MAN",
  "FAN ONE PUNCH MAN",
  "CỘNG ĐỒNG ONE PUNCH MAN",
  "THÁNH PHỒNG SAITAMA",
  "BÍ MẬT VỀ SỨC MẠNH CỦA SAITAMA",
  "THẦY TRÒ SAITAMA VS GENOS",
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

export default function page_20210804185942() {
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
                      Trong One Punch Man thì Saitama là anh hùng đủ sức one hit
                      bất kỳ quái vật nào hay thậm chí có thể thổi bay một phần
                      Trái Đất nếu anh ta không cẩn thận. Vì lý do này nên
                      Saitama luôn không chiến đấu hết mình và tự chia bộ kĩ
                      năng đánh đấm của mình ra làm hai, bao gồm series đánh
                      thường và series nghiêm túc. Giờ, chúng ta cùng đi sâu vào
                      từng kĩ năng của anh chàng hói đầu này nhé!
                    </p>
                    <h5>Đấm thường</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/hp1-1628050012532853990835.jpg"
                      alt="1, MANGA ONE PUNCH MAN,TÁC GIẢ ONE PUNCH MAN,MỸ NHÂN ONE PUNCH MAN,FAN ART ONE PUNCH MAN,ANIME ONE PUNCH MAN,FAN ONE PUNCH MAN,CỘNG ĐỒNG ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,BÍ MẬT VỀ SỨC MẠNH CỦA SAITAMA,THẦY TRÒ SAITAMA VS GENOS,"
                      note=""
                    />
                    <p>
                      Đúng với tên gọi, kĩ năng này chỉ là một cú đấm bình
                      thường mà ai cũng có thể thực hiện. Tuy nhiên, với sức
                      mạnh không tưởng của Saitama, đòn đấm thường của anh có
                      thể tiêu diệt hầu hết quái vật ngay trong tích tắc. Đấm
                      thường cũng không tốn quá nhiều công sức để thi triển, hơn
                      nữa nó cũng có thể tung ra bất kì lúc nào nên được Saitama
                      sử dụng khá nhiều trong bộ truyện One Punch Man.
                    </p>
                    <h5>Đấm thường liên hoàn</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/hp2-1628050024200171767716.jpg"
                      alt="2, MANGA ONE PUNCH MAN,TÁC GIẢ ONE PUNCH MAN,MỸ NHÂN ONE PUNCH MAN,FAN ART ONE PUNCH MAN,ANIME ONE PUNCH MAN,FAN ONE PUNCH MAN,CỘNG ĐỒNG ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,BÍ MẬT VỀ SỨC MẠNH CỦA SAITAMA,THẦY TRÒ SAITAMA VS GENOS,"
                      note=""
                    />
                    <p>
                      Đây là phiên bản nâng cấp của đấm thường, nói sang mồm thế
                      thôi chứ đơn giản chiêu thức này là chuỗi những cú đấm
                      thường của Saitama. Khi gặp những đối thủ khó nhằn không
                      thể hạ trong một đấm, Saitama sẽ liên tục tung đấm thường
                      để khiến cho chúng ra bã. Một trong những nạn nhân của
                      chiêu thức này chính là Boros. Sau khi nếm trọn loạt đấm,
                      cơ thể Boros đã phát nổ ngay lập tức. Nếu không nhờ khả
                      năng hồi phục cấp độ cao thì chắc Boros đã đi bán muối
                      luôn chứ không được nhìn thấy đòn tất sát của Saitama.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Đấm nghiêm túc</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/hp2-16280500180781435764475.gif"
                      alt="3, MANGA ONE PUNCH MAN,TÁC GIẢ ONE PUNCH MAN,MỸ NHÂN ONE PUNCH MAN,FAN ART ONE PUNCH MAN,ANIME ONE PUNCH MAN,FAN ONE PUNCH MAN,CỘNG ĐỒNG ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,BÍ MẬT VỀ SỨC MẠNH CỦA SAITAMA,THẦY TRÒ SAITAMA VS GENOS,"
                      note=""
                    />
                    <p>
                      Đây là kỹ năng đầu tiên của series nghiêm túc mà Saitama
                      sử dụng trong One Punch Man. Thực chất nó là một cú đấm
                      thường nhưng là một cú đấm nghiêm túc. Cú đấm nghiêm túc
                      này đã từng tiêu diệt Boros và để lại dư chấn mạnh tới nỗi
                      đủ để chia cắt mây trên bầu trời. Saitama cũng từng dùng
                      chiêu thức này để một đấm chết luôn quái vật Rết Trưởng
                      Lão. Dù nói là nghiêm túc nhưng đây vẫn chưa phải là một
                      đấm toàn lực của Saitama.
                    </p>
                    <h5>Nhảy ngang nghiêm túc</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/hp3-16280500291731637882758.gif"
                      alt="4, MANGA ONE PUNCH MAN,TÁC GIẢ ONE PUNCH MAN,MỸ NHÂN ONE PUNCH MAN,FAN ART ONE PUNCH MAN,ANIME ONE PUNCH MAN,FAN ONE PUNCH MAN,CỘNG ĐỒNG ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,BÍ MẬT VỀ SỨC MẠNH CỦA SAITAMA,THẦY TRÒ SAITAMA VS GENOS,"
                      note=""
                    />
                    <p>
                      Đây là kĩ năng phô diễn tốc độ kinh khủng của Saitama
                      trong One Punch Man. Đây đơn giản là động tác nhảy ngang
                      trong tập thể dục nhưng với khả năng của Saitama, anh trọc
                      có thể tạo ra đến 10 ảo ảnh vì tốc độ quá sức điên rồ và
                      khủng khiếp của mình. Đến cả một kẻ luôn tự hào về tốc độ
                      như Sonic cũng không thể theo được với tốc độ thần sầu này
                      của anh trọc Saitama.
                    </p>
                    <h5>Súng nước</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/hp3-1628050033474695575850.jpg"
                      alt="5, MANGA ONE PUNCH MAN,TÁC GIẢ ONE PUNCH MAN,MỸ NHÂN ONE PUNCH MAN,FAN ART ONE PUNCH MAN,ANIME ONE PUNCH MAN,FAN ONE PUNCH MAN,CỘNG ĐỒNG ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,BÍ MẬT VỀ SỨC MẠNH CỦA SAITAMA,THẦY TRÒ SAITAMA VS GENOS,"
                      note=""
                    />
                    <p>
                      Đây là một kĩ năng mới được ít được Saitama thể hiện trong
                      One Punch Man. Trong bản bổ sung của họa sĩ Murata Yusuke
                      về cuộc chiến của Saitama với Orochi, quái vật Orochi đã
                      rút lấy sức mạnh từ tâm Trái Đất và tấn công Saitama với
                      đòn Gaia Cannon. Saitama lúc này đang tắm đã dùng tay để
                      "bắn súng" giống như cái trò trẻ con chúng ta hay chơi lúc
                      nhỏ. Tia nước do Saitama bắn ra mạnh đến mức có thể chặn
                      đứng đòn tấn công của Orochi và khiến tên quái vật này ngỡ
                      ngàng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/4/base64-16280501556341732805757.png"
                      alt="6, MANGA ONE PUNCH MAN,TÁC GIẢ ONE PUNCH MAN,MỸ NHÂN ONE PUNCH MAN,FAN ART ONE PUNCH MAN,ANIME ONE PUNCH MAN,FAN ONE PUNCH MAN,CỘNG ĐỒNG ONE PUNCH MAN,THÁNH PHỒNG SAITAMA,BÍ MẬT VỀ SỨC MẠNH CỦA SAITAMA,THẦY TRÒ SAITAMA VS GENOS,"
                      note=""
                    />
                    <p>
                      Ngoài các chiêu thức trên, thì Saitama còn có chiêu thức
                      nào đã từng xuất hiện trong One Punch Man nữa hay không?
                      Hãy để lại ý kiến của mình nhé!
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
