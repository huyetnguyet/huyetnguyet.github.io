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
"timestamp": '12/08/2021 05:31 PM',
"title": 'Liều thuốc "thần tiên" khiến trái tim chẳng thể ngủ yên và câu chuyện phía sau những bộ phim ngôn tình "ngọt sún răng" của màn ảnh Hoa ngữ',
"description": 'Những năm gần đây, nhà sản xuất phim Trung Quốc ưa thích đem các tác phẩm ngôn tình "ngọt sâu răng" lên phim. Dù nội dung đơn giản, không có tình tiết tréo ngoe hay ân oán tình thù rối não, thế nhưng thể loại phim này vẫn thu hút sự quan tâm của đông đảo khán giả.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/12-16287686339931475075859.jpg',
"alt": 'Trung Quốc,phim ngôn tình Trung Quốc,sức khỏe tinh thần,phim chuyển thể ngôn tình,Phim tình cảm,giải tỏa stress,phim ngôn tình,phim ngôn tình Hoa ngữ,phim ngôn tình chuyển thể,ngọt sún răng,liều thuốc cho trái tim,',
"category": 'news',
"date": '12/08/2021',
"time": '05:31 PM',
"link": '/phia-sau-nhung-bo-phim-ngon-tinh-ngot-sun-rang-cua-man-anh-hoa-ngu-lieu-thuoc-than-tien-khien-trai-tim-chang-the-ngu-yen',
"zcomponent": 'page_20210812173141',
"filepath": './20210812173141-phia-sau-nhung-bo-phim-ngon-tinh-ngot-sun-rang-cua-man-anh-hoa-ngu-lieu-thuoc-than-tien-khien-trai-tim-chang-the-ngu-yen.js'
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
  'Liều thuốc "thần tiên" khiến trái tim chẳng thể ngủ yên và câu chuyện phía sau những bộ phim ngôn tình "ngọt sún răng" của màn ảnh Hoa ngữ';
const author = "NGUYÊN DŨNG TT,";
const source = "Trí Thức Trẻ";
const timestamp = "12/08/2021 05:31 PM";
const description =
  'Những năm gần đây, nhà sản xuất phim Trung Quốc ưa thích đem các tác phẩm ngôn tình "ngọt sâu răng" lên phim. Dù nội dung đơn giản, không có tình tiết tréo ngoe hay ân oán tình thù rối não, thế nhưng thể loại phim này vẫn thu hút sự quan tâm của đông đảo khán giả.';
const link =
  "phia-sau-nhung-bo-phim-ngon-tinh-ngot-sun-rang-cua-man-anh-hoa-ngu-lieu-thuoc-than-tien-khien-trai-tim-chang-the-ngu-yen";
const tagparam = [
  "Trung Quốc",
  "phim ngôn tình Trung Quốc",
  "sức khỏe tinh thần",
  "phim chuyển thể ngôn tình",
  "Phim tình cảm",
  "giải tỏa stress",
  "phim ngôn tình",
  "phim ngôn tình Hoa ngữ",
  "phim ngôn tình chuyển thể",
  "ngọt sún răng",
  "liều thuốc cho trái tim",
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

export default function page_20210812173141() {
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
                      Truyện ngôn tình ra đời để phục vụ cho các độc giả trẻ hay
                      thích mộng mơ, chủ yếu là nữ giới từ 18-30 tuổi. Nội dung
                      thường đề cập đến chuyện tình cảm là chính, trong đó nhân
                      vật nữ luôn gặp được một người đàn ông hoàn hảo của đời
                      mình. Các chàng trai xuất hiện trong tiểu thuyết ngôn tình
                      thường là những người hội tụ đủ mọi ưu điểm: đẹp trai, học
                      thức, gia thế khủng, tính cách "ngoài lạnh trong nóng"...
                      Có thể nói nam chính luôn là người trong mộng, là diện mạo
                      trong tưởng tượng của tất cả các cô gái.
                    </p>
                    <p>
                      Thể loại "sủng ngọt" là 1 nhánh nhỏ của truyện ngôn tình,
                      trong đó "sủng" chỉ sự yêu thương, nâng niu, chiều chuộng
                      mà các nhân vật chính dành cho nhau; còn "ngọt" chỉ sự
                      ngọt ngào khiến mọi cô gái đều muốn tan chảy. Sau nhiều
                      năm phát triển, hiện tại truyện ngôn tình đã và đang trở
                      thành 1 món ăn tinh thần không thể thiếu trong đời sống
                      của đông đảo các bạn trẻ, thậm chí nhiều phụ nữ U40 cũng
                      là fan của thể loại này.
                    </p>
                    <h5>Ngọt đến sâu răng</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/11-1628768309862528459493.jpg"
                      alt="1, Trung Quốc,phim ngôn tình Trung Quốc,sức khỏe tinh thần,phim chuyển thể ngôn tình,Phim tình cảm,giải tỏa stress,phim ngôn tình,phim ngôn tình Hoa ngữ,phim ngôn tình chuyển thể,ngọt sún răng,liều thuốc cho trái tim,"
                      note="Ảnh minh họa"
                    />
                    <p>
                      Trương Mộc là 1 biên kịch mạng được hưởng lợi từ thể loại
                      ngôn tình "<strong>ngọt sún răng</strong>" hiện đang làm
                      mưa làm gió trên màn ảnh Hoa ngữ. Những năm gần đây, nhiều
                      bộ <strong>phim ngôn tình</strong> ngọt ngào đều được thị
                      trường đón nhận nhiệt tình, thu hút 1 lượng lớn vốn đầu tư
                      và các tác giả đua nhau tham gia sáng tác. Theo thống kê
                      từ "Báo cáo nghiên cứu thị trường phim ngôn tình trong nửa
                      đầu năm 2021", những bộ phim truyền hình tình cảm ngọt
                      ngào được chuyển thể từ tiểu thuyết ra mắt trong nửa đầu
                      năm 2021 chiếm hơn 30% tổng số thể loại phim chiếu cùng
                      thời điểm.
                    </p>
                    <p>
                      Trương Mộc đã làm biên kịch được 6 năm, nhưng cô vẫn phải
                      thừa nhận phim và đời khác xa nhau lắm. Tuy nhiên, vì kế
                      sinh nhai, cô buộc phải khiến mình bay bổng để tạo ra
                      những tình tiết vô thực. "Tôi nghĩ tình yêu thực sự không
                      phải như vậy, nhưng xu thế hiện giờ là thế, nên phải ăn
                      theo để kiếm miếng cơm." - Trương Mộc nói.
                    </p>
                    <p>
                      Cô gái trẻ Dương Nghị, hiện đang theo học chương trình
                      Tiến sĩ tại Đại học Sư phạm Bắc Kinh,{" "}
                      <strong>Trung Quốc</strong> đã từng cất công đếm cảnh hôn
                      trong 1 bộ phim và viết vào luận văn của mình như sau:
                    </p>
                    <p>
                      "1 tập phim dài khoảng 1h30' thì có tới 8 cảnh hôn nóng
                      bỏng từ hành lang chung cư cho tới sàn nhà, từ văn phòng
                      làm việc tới tủ quần áo, cầu thang, giường ngủ... Tất cả
                      đều trở thành địa điểm lãng mạn của cặp đôi nhân vật
                      chính. So với các bộ phim phát sóng cùng thời điểm, cảnh
                      hôn đầy nhiệt huyết trong bộ{" "}
                      <strong>phim ngôn tình</strong> ngọt ngào ấy khiến cho
                      người xem không khỏi cảm thấy nóng trong người."
                    </p>
                    <p>
                      Dương Nghị cho rằng đoàn làm phim đã cố nhồi nhét quá
                      nhiều cảnh hôn không cần thiết cho cốt truyện, mà chỉ đưa
                      thêm vào bộ phim để nhằm mục đích "câu view".
                    </p>
                    <p>
                      Khởi nguồn của thể loại phim này là phim thần tượng Hong
                      Kong, Đài Loan và Hàn Quốc. Có một dạo, người hâm mộ toàn
                      châu Á phát sốt với những bộ phim có mô típ quen thuộc
                      như: nhân vật chính thường bị bệnh nan y, bị tai nạn xe
                      cộ, nữ chính xinh đẹp nhưng gia cảnh nghèo khó bất ngờ gặp
                      được "nam thần" giàu có, điển trai...
                    </p>
                    <p>
                      Ở thị trường phim ảnh <strong>Trung Quốc</strong> trong
                      những năm gần đây, trải quá quá trình học tập và phát
                      triển, khả năng của các biên kịch đã được nâng cao, các
                      phương thức "rải đường" (khiến người ta ghen đỏ mắt vì quá
                      ngọt ngào) ngày càng trở nên tinh tế và đa dạng hơn. Nhiều
                      người viết kịch bản chỉ cần thêm thật nhiều "đường" (cảnh
                      ngọt ngào) và 1 vài mâu thuẫn vu vơ vào đúng chỗ - như
                      người thợ lắp ráp các bộ phận máy móc - là kịch bản có thể
                      được đóng gói và nhanh chóng "xuất xưởng".
                    </p>
                    <h5>Phim gì cũng phải nhồi nhét chi tiết "ngôn tình"</h5>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/12-16287686339931475075859.jpg"
                      alt="6, Trung Quốc,phim ngôn tình Trung Quốc,sức khỏe tinh thần,phim chuyển thể ngôn tình,Phim tình cảm,giải tỏa stress,phim ngôn tình,phim ngôn tình Hoa ngữ,phim ngôn tình chuyển thể,ngọt sún răng,liều thuốc cho trái tim,"
                      note=""
                    />
                    <p>
                      Nhìn ở góc độ lợi ích thì có thể thấy đây là thể loại phim
                      mang tính giải trí cao, giúp người xem thư giãn đầu óc sau
                      những giờ làm việc căng thẳng. Ngoài ra thì ngôn tình cũng
                      giúp con người có thêm niềm tin vào tình yêu và những điều
                      kỳ diệu mà nó mang lại, nhất là với những người từng gặp
                      đổ vỡ trong chuyện tình cảm, nó giống như 1 liều thuốc
                      giúp an ủi trái tim tan vỡ của họ.
                    </p>
                    <p>
                      Thế nhưng, lợi thường đi đôi với hại. Đến thuốc bổ còn có
                      tác dụng phụ thì "liệu trình cho tâm hồn" mang tên ngôn
                      tình cũng không phải ngoại lệ. Nhiều người chia sẻ, trước
                      đây họ rất thích thể loại <strong>phim ngôn tình</strong>{" "}
                      ngọt ngào, nhưng vì phải xem quá nhiều đến mức bội thực,
                      nên họ bắt đầu chuyển sang chán ghét, thậm chí là không
                      bao giờ muốn xem lại thể loại ấy nữa.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      "Việc làm phim dễ dãi khiến khán giả xem phim cũng dễ dãi
                      theo. Giờ bất luận là phim chiếu mạng hay chiếu rạp cũng
                      đều phải thêm thắt các chi tiết soái ca, mỹ nhân và hàng
                      loạt tình huống đậm chất ngôn tình. Nữ chính luôn phải rất
                      nghèo hoặc rất giàu, rất cá tính hoặc rất tội nghiệp. Nam
                      chính luôn phải đẹp hoặc rất đẹp và dàn phụ cũng phải từ
                      tuấn nam mỹ nữ trở lên. 1 bộ phim như vậy dường như chỉ
                      đang dùng sắc đẹp của diễn viên để đo lượng khán giả. Vì
                      vốn dĩ nội dung những bộ phim chuyển thể từ truyện hay
                      tiểu thuyết đều đã quá quen thuộc rồi, thế nên không nhất
                      thiết phải xem diễn xuất, chỉ cần xem 'mặt có hợp hay
                      không' là đủ rồi." - Trương Mộc tổng kết.
                    </p>
                    <h5>Đam mê không thắng nổi hiện thực</h5>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/13-1628768886929586898425.jpg"
                      alt="7, Trung Quốc,phim ngôn tình Trung Quốc,sức khỏe tinh thần,phim chuyển thể ngôn tình,Phim tình cảm,giải tỏa stress,phim ngôn tình,phim ngôn tình Hoa ngữ,phim ngôn tình chuyển thể,ngọt sún răng,liều thuốc cho trái tim,"
                      note=""
                    />
                    <p>
                      "Khi còn ngồi trên ghế nhà trường, tôi đã mơ ước được trở
                      thành đạo diễn và làm 1 bộ phim văn học. Nhưng do dòng đời
                      xô đẩy, tôi đành phải chuyển hướng sang viết thể loại ngôn
                      tình ngọt ngào này." - Trương Mộc nói.
                    </p>
                    <p>
                      Năm 2011, Trương Mộc theo học ở trường Đại học nổi tiếng
                      chuyên ngành kịch, điện ảnh và văn học. Sau khi tốt
                      nghiệp, cô được nhận vào 1 công ty điện ảnh và truyền hình
                      rồi bắt đầu viết nội dung cho webdrama (phim nhiều tập
                      chiếu mạng). Đã 6 năm trong nghề, nhưng Trương Mộc vẫn
                      quen gọi mình là biên kịch mới vào nghề, không đủ tiềm lực
                      tài chính, cũng không có đủ kiệt tác ăn khách để thêm dòng
                      chữ "tiền bối" vào kịch bản.
                    </p>
                    <p>
                      "Cho dù có viết kiểu gì cũng vẫn theo 1 vòng luẩn quẩn và
                      rồi lại đâm đầu vào những cảnh hôn." - Trương Mộc thở dài.
                    </p>
                    <p>
                      Ở 1 mức độ nào đó, tiêu chuẩn "đơn giản" của khán giả đang
                      tạo cơ hội cho Trương Mộc, cũng như các nhà biên kịch khác
                      của thể loại này.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/14-1628769801172206453703.jpg"
                      alt="8, Trung Quốc,phim ngôn tình Trung Quốc,sức khỏe tinh thần,phim chuyển thể ngôn tình,Phim tình cảm,giải tỏa stress,phim ngôn tình,phim ngôn tình Hoa ngữ,phim ngôn tình chuyển thể,ngọt sún răng,liều thuốc cho trái tim,"
                      note=""
                    />
                    <p>
                      Khác với những bộ phim truyền hình gay cấn, hiện thực hay
                      các thể loại webdrama khác, phim truyền hình "sủng ngọt"
                      tiết kiệm chi phí hơn. Biên kịch phim không cần tốn quá
                      nhiều thời gian để kể về 1 mối quan hệ, không cần sử dụng
                      quá nhiều thuật ngữ chuyên môn, cũng chẳng cần tốn quá
                      nhiều công sức để xây dựng nội dung logic, mà chỉ cần có
                      "cô bé lọ lem" và "hoàng tử" hoặc "tổng tài hống hách" và
                      "cô gái thú vị" cùng bối cảnh hài hước với những nhân vật
                      phụ bắt mắt là được.
                    </p>
                    <p>
                      <strong>Phim ngôn tình</strong> truyền thống hiện nay đang
                      được cải thiện và thêm vào nhiều hương vị khác nhau, chẳng
                      hạn như hồi hộp, trinh thám, siêu năng lực và các yếu tố
                      khác... nhằm thu hút thêm nhiều khán giả nam vào đội hình
                      người hâm mộ. Sự kết hợp giữa nam nữ chính không còn bị bó
                      hẹp, mà chuyển dần sang dạng "nữ cường, nam yếu" (nữ chính
                      giàu có hoặc mạnh mẽ, nam chính kinh tế bình thường nhưng
                      dịu dàng, hút phái nữ).
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/15-16287697826451393649588.jpg"
                      alt="9, Trung Quốc,phim ngôn tình Trung Quốc,sức khỏe tinh thần,phim chuyển thể ngôn tình,Phim tình cảm,giải tỏa stress,phim ngôn tình,phim ngôn tình Hoa ngữ,phim ngôn tình chuyển thể,ngọt sún răng,liều thuốc cho trái tim,"
                      note=""
                    />
                    <p>
                      Ngày nay, áp lực công việc, học tập và cuộc sống khiến
                      nhiều bạn trẻ trở nên trầm tính, hướng nội, thậm chí là
                      lãnh cảm. Đọc truyện và xem{" "}
                      <strong>phim ngôn tình</strong> là cách mà nhiều người lựa
                      chọn để cân bằng cuộc sống, khỏa lấp những ước mơ ẩn giấu
                      tận sâu trong tâm hồn.
                    </p>
                    <p>
                      Dương Nghị kết luận: "Đôi khi khán giả đến với phim theo
                      hướng vô cùng ngẫu hứng, ví dụ như chỉ muốn xem thử xem có
                      gì hay ho mà lại khiến nhiều người mê mệt đến thế. Nhưng
                      sau đó, chính bản thân họ lại bị cuốn vào vòng xoáy ấy.
                      Việc bị ám ảnh bởi tình yêu tuyệt đẹp của thể loại ngôn
                      tình khiến nhiều bạn trẻ bỡ ngỡ, gặp khó khăn khi tìm kiếm
                      người yêu ngoài đời thực."
                    </p>
                    <p>Nguồn: QQ</p>
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
