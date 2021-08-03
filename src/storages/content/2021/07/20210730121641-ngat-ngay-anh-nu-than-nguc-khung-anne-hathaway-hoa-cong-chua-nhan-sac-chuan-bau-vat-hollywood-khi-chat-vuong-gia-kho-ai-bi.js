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
"timestamp": '30/07/2021 12:16 PM',
"title": 'Ngất ngây ảnh nữ thần ngực khủng Anne Hathaway hóa công chúa: Nhan sắc chuẩn báu vật Hollywood, khí chất vương giả khó ai bì',
"description": '2 thập kỷ đã trôi qua nhưng nhan sắc của Anne Hathaway trong bộ phim Nhật Ký Công Chúa vẫn khiến khán giả phải trầm trồ và mê mẩn.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-1-16276241792571824908501.jpg',
"alt": 'anne hathaway,sao us uk,sao hollywood,Nhật Ký Công Chúa,mỹ nhân hollywood,nhan sắc mỹ nhân Hollywood,mỹ nhân,Nhật Ký Công Chúa (2001),The Princess Diaries,The Princess Diaries (2001),',
"category": 'stars',
"date": '30/07/2021',
"time": '12:16 PM',
"link": '/ngat-ngay-anh-nu-than-nguc-khung-anne-hathaway-hoa-cong-chua-nhan-sac-chuan-bau-vat-hollywood-khi-chat-vuong-gia-kho-ai-bi',
"zcomponent": 'page_20210730121641',
"filepath": './20210730121641-ngat-ngay-anh-nu-than-nguc-khung-anne-hathaway-hoa-cong-chua-nhan-sac-chuan-bau-vat-hollywood-khi-chat-vuong-gia-kho-ai-bi.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  "Ngất ngây ảnh nữ thần ngực khủng Anne Hathaway hóa công chúa: Nhan sắc chuẩn báu vật Hollywood, khí chất vương giả khó ai bì";
const author = "CHIZ,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "30/07/2021 12:16 PM";
const description =
  "2 thập kỷ đã trôi qua nhưng nhan sắc của Anne Hathaway trong bộ phim Nhật Ký Công Chúa vẫn khiến khán giả phải trầm trồ và mê mẩn.";
const link =
  "ngat-ngay-anh-nu-than-nguc-khung-anne-hathaway-hoa-cong-chua-nhan-sac-chuan-bau-vat-hollywood-khi-chat-vuong-gia-kho-ai-bi";
const tagparam = [
  "anne hathaway",
  "sao us uk",
  "sao hollywood",
  "Nhật Ký Công Chúa",
  "mỹ nhân hollywood",
  "nhan sắc mỹ nhân Hollywood",
  "mỹ nhân",
  "Nhật Ký Công Chúa (2001)",
  "The Princess Diaries",
  "The Princess Diaries (2001)",
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

export default function page_20210730121641() {
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
                      Năm 2001, bộ phim <strong>The Princess Diaries</strong> (
                      <strong>Nhật Ký Công Chúa</strong>) ra mắt khán giả và đưa
                      nữ chính <strong>Anne Hathaway</strong> trở thành ngôi sao
                      đình đám trong showbiz. Nhận được vai diễn lớn dù mới 18
                      tuổi nhưng nữ diễn viên vẫn được người xem yêu mến nhờ
                      nhan sắc sang chảnh cùng tài diễn xuất biến hóa.
                    </p>
                    <p>
                      Mới đây, loạt ảnh cô công chúa Mia Thermopolis 20 năm về
                      trước một lần nữa hot trở lại trên MXH. Dù đã 2 thập kỉ
                      trôi qua nhưng vẻ đẹp của Anne vẫn không hề bị lỗi thời,
                      trái lại dân tình vẫn u mê nhan sắc của "công chúa" như
                      ngày nào. Giữa dàn <strong>mỹ nhân</strong> mắt to mũi
                      cao, <strong>Anne Hathaway</strong> trở thành bông hồng
                      nổi bật với vẻ đẹp lạ hiếm có khó tìm của Hollywood. Cô sở
                      hữu đôi môi dày, gương mặt thon dài cùng đôi mắt to và sâu
                      hút quyến rũ. Được khán giả ưu ái gọi là "biểu tượng sắc
                      đẹp Hollywood" từ khi còn trẻ, không hề quá lời khi nói
                      rằng Anne Hathaway đã sống như một công chúa xinh đẹp cả ở
                      trong phim lẫn ngoài đời.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-1-1627623833136182102813.jpg"
                      alt="1, anne hathaway,sao us uk,sao hollywood,Nhật Ký Công Chúa,mỹ nhân hollywood,nhan sắc mỹ nhân Hollywood,mỹ nhân,Nhật Ký Công Chúa (2001),The Princess Diaries,The Princess Diaries (2001),"
                      note="Khí chất sang chảnh của minh tinh Anne Hathaway giúp cô dễ dàng hóa thân thành cô công chúa của hoàng gia. Đôi mắt to sâu hút hồn, đôi môi dày gợi cảm lúc nào cũng hiển hiện nụ cười rạng rỡ cùng đường nét khuôn mặt đẹp trời cho, nữ diễn viên này đúng là sinh ra để vào vai công chúa"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-1-16276240919651495288055.jpg"
                      alt="2, anne hathaway,sao us uk,sao hollywood,Nhật Ký Công Chúa,mỹ nhân hollywood,nhan sắc mỹ nhân Hollywood,mỹ nhân,Nhật Ký Công Chúa (2001),The Princess Diaries,The Princess Diaries (2001),"
                      note="Vẻ đẹp vô thực của Anne từng khiến người hâm mộ mê mệt và si mê bởi ánh mắt và thần thái hút hồn"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-1-1627624165785935854918.jpg"
                      alt="3, anne hathaway,sao us uk,sao hollywood,Nhật Ký Công Chúa,mỹ nhân hollywood,nhan sắc mỹ nhân Hollywood,mỹ nhân,Nhật Ký Công Chúa (2001),The Princess Diaries,The Princess Diaries (2001),"
                      note="Tỷ lệ cơ thể tuyệt đẹp cùng gương mặt như nữ thần đời thực giúp Anne Hathaway làm nên khung hình still cut huyền thoại như thế này cho bộ phim"
                    />
                    <p>
                      Vẻ đẹp sắc sảo kiêu sa của công chúa Mia sau 20 năm cuốn
                      hút và gây "sát thương" như ngày nào
                    </p>
                    <p>
                      Nhan sắc và thần thái, nụ cười tỏa ra "mùi tiền", "mùi
                      hoàng gia" là đây
                    </p>
                    <p>
                      Sở hữu đôi môi dày gợi cảm, <strong>Anne Hathaway</strong>{" "}
                      luôn khiến người xem "tan chảy" mỗi lần nở nụ cười và giúp
                      tô điểm thêm cho những thước phim thêm phần có hồn, thậm
                      chí là hớp hồn người xem
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/-16276238890842113834966.jpg"
                      alt="4, anne hathaway,sao us uk,sao hollywood,Nhật Ký Công Chúa,mỹ nhân hollywood,nhan sắc mỹ nhân Hollywood,mỹ nhân,Nhật Ký Công Chúa (2001),The Princess Diaries,The Princess Diaries (2001),"
                      note="Kể cả trong tạo hình nữ sinh trung học, Anne cũng thể hiện được nét tự nhiên, vui tươi và rạng ngời nổi bật trong mọi khung hình của cô nàng Mia ở độ tuổi mới lớn"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-1-1627624103691548583375.png"
                      alt="5, anne hathaway,sao us uk,sao hollywood,Nhật Ký Công Chúa,mỹ nhân hollywood,nhan sắc mỹ nhân Hollywood,mỹ nhân,Nhật Ký Công Chúa (2001),The Princess Diaries,The Princess Diaries (2001),"
                      note="Hình ảnh nữ sinh dịu dàng, xinh xắn trái ngược với khí chất của cô công chúa Mia khiến khán giả không bị nhàm chán khi theo dõi. Thậm chí không ít chàng trai si mê, các cô gái cũng rần rần mong muốn có được visual nữ sinh đẹp đến từng hơi thở như Anne Hathaway"
                    />
                    <p>
                      Dù là công chúa hay học sinh,{" "}
                      <strong>Anne Hathaway</strong> vẫn khiến khán giả phải
                      trầm trồ và "xỉu ngang" vì nhan sắc đỉnh cao khó ai sánh
                      bằng
                    </p>
                    <p>
                      Sau 20 năm, sức hút của cô nàng Mia vẫn không hề giảm sút,
                      trái lại còn khiến MXH "rần rần" vì nhan sắc không tuổi
                      đẹp không tì vết
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-1-16276252330471927159244.jpg"
                      alt="6, anne hathaway,sao us uk,sao hollywood,Nhật Ký Công Chúa,mỹ nhân hollywood,nhan sắc mỹ nhân Hollywood,mỹ nhân,Nhật Ký Công Chúa (2001),The Princess Diaries,The Princess Diaries (2001),"
                      note="Trời ơi nhìn bức hình huyền thoại này đi, xỉu mất thôi!"
                    />
                    <p>
                      Giờ đây, ở tuổi 38, <strong>Anne Hathaway</strong> vẫn
                      nhiều lần làm mưa làm gió nhờ visual đẹp xuất sắc. Dù vậy,
                      không thể phủ nhận rằng <strong>Nhật Ký Công Chúa</strong>{" "}
                      vẫn là bộ phim thành công nhất trong sự nghiệp của Anne và
                      giúp cô có được thành công như hiện tại.
                    </p>
                    <p>
                      Vẻ đẹp vô thực của Anne nhiều lần gây sốt MXH. Không chỉ
                      có nhan sắc nữ thần, cô còn sở hữu vóc dáng bốc lửa cùng
                      vòng 1 siêu khủng "xịt máu mũi"
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-1-1627625279001100028990.jpg"
                      alt="7, anne hathaway,sao us uk,sao hollywood,Nhật Ký Công Chúa,mỹ nhân hollywood,nhan sắc mỹ nhân Hollywood,mỹ nhân,Nhật Ký Công Chúa (2001),The Princess Diaries,The Princess Diaries (2001),"
                      note="Sau hơn 2 thập kỷ hoạt động nghệ thuật, nhan sắc của đại mỹ nhân Anne Hathaway vẫn là tường thành khó vượt qua của bất cứ người đẹp nào tại Hollywood"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-1-16276241792571824908501.jpg"
                      alt="8, anne hathaway,sao us uk,sao hollywood,Nhật Ký Công Chúa,mỹ nhân hollywood,nhan sắc mỹ nhân Hollywood,mỹ nhân,Nhật Ký Công Chúa (2001),The Princess Diaries,The Princess Diaries (2001),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-1-16276242045501149903753.jpg"
                      alt="9, anne hathaway,sao us uk,sao hollywood,Nhật Ký Công Chúa,mỹ nhân hollywood,nhan sắc mỹ nhân Hollywood,mỹ nhân,Nhật Ký Công Chúa (2001),The Princess Diaries,The Princess Diaries (2001),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-1-1627624644271253066444.jpg"
                      alt="10, anne hathaway,sao us uk,sao hollywood,Nhật Ký Công Chúa,mỹ nhân hollywood,nhan sắc mỹ nhân Hollywood,mỹ nhân,Nhật Ký Công Chúa (2001),The Princess Diaries,The Princess Diaries (2001),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-1-16276243088431716988590.jpg"
                      alt="11, anne hathaway,sao us uk,sao hollywood,Nhật Ký Công Chúa,mỹ nhân hollywood,nhan sắc mỹ nhân Hollywood,mỹ nhân,Nhật Ký Công Chúa (2001),The Princess Diaries,The Princess Diaries (2001),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-1-1627624360917471684361.jpg"
                      alt="12, anne hathaway,sao us uk,sao hollywood,Nhật Ký Công Chúa,mỹ nhân hollywood,nhan sắc mỹ nhân Hollywood,mỹ nhân,Nhật Ký Công Chúa (2001),The Princess Diaries,The Princess Diaries (2001),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-1-1627625265356540098024.jpg"
                      alt="13, anne hathaway,sao us uk,sao hollywood,Nhật Ký Công Chúa,mỹ nhân hollywood,nhan sắc mỹ nhân Hollywood,mỹ nhân,Nhật Ký Công Chúa (2001),The Princess Diaries,The Princess Diaries (2001),"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/30/photo-1-1627625279001100028990.jpg"
                      alt="14, anne hathaway,sao us uk,sao hollywood,Nhật Ký Công Chúa,mỹ nhân hollywood,nhan sắc mỹ nhân Hollywood,mỹ nhân,Nhật Ký Công Chúa (2001),The Princess Diaries,The Princess Diaries (2001),"
                      note=""
                    />
                    <p>Nguồn ảnh: Sưu tầm</p>
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
