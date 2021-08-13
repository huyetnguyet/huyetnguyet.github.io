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
"timestamp": '13/08/2021 09:27 AM',
"title": 'Kết cục của Tứ đại mỹ nhân: Chiêu Quân làm vợ 3 đời cha con, Điêu Thuyền bị Quan Vũ chê chẳng còn trong sạch, Tây Thi lại càng thảm',
"description": 'Có lẽ câu "hồng nhan bạc phận" đều ứng với số phận của Tứ đại mỹ nhân Trung Quốc cổ đại.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/24/-16245354592749449386.jpg',
"alt": 'tứ đại mỹ nhân,hồng nhan bạc phận,Tam Quốc Diễn Nghĩa,',
"category": 'news',
"date": '13/08/2021',
"time": '09:27 AM',
"link": '/ket-cuc-cua-tu-dai-my-nhan-chieu-quan-lam-vo-3-doi-cha-con-dieu-thuyen-bi-quan-vu-che-chang-con-trong-sach-tay-thi-lai-cang-tham',
"zcomponent": 'page_20210813092743',
"filepath": './20210813092743-ket-cuc-cua-tu-dai-my-nhan-chieu-quan-lam-vo-3-doi-cha-con-dieu-thuyen-bi-quan-vu-che-chang-con-trong-sach-tay-thi-lai-cang-tham.js'
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
  "Kết cục của Tứ đại mỹ nhân: Chiêu Quân làm vợ 3 đời cha con, Điêu Thuyền bị Quan Vũ chê chẳng còn trong sạch, Tây Thi lại càng thảm";
const author = "PHẠM TRANG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "13/08/2021 09:27 AM";
const description =
  'Có lẽ câu "hồng nhan bạc phận" đều ứng với số phận của Tứ đại mỹ nhân Trung Quốc cổ đại.';
const link =
  "ket-cuc-cua-tu-dai-my-nhan-chieu-quan-lam-vo-3-doi-cha-con-dieu-thuyen-bi-quan-vu-che-chang-con-trong-sach-tay-thi-lai-cang-tham";
const tagparam = [
  "tứ đại mỹ nhân",
  "hồng nhan bạc phận",
  "Tam Quốc Diễn Nghĩa",
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

export default function page_20210813092743() {
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
                      Có lẽ câu "<strong>hồng nhan bạc phận</strong>" đều ứng
                      với số phận của <strong>Tứ đại mỹ nhân</strong> Trung Quốc
                      cổ đại.
                    </p>
                    <h5>Tây Thi</h5>
                    <p>
                      Việt Vương Câu Tiễn vì trả thù Ngô Vương tiêu diệt Việt
                      Quốc mà bao năm nếm mật nằm gai. Biết Ngô Vương ham mê tửu
                      sắc, Câu Tiễn đã quyết định dùng mỹ nhân kế khiến Ngô
                      Vương đắm chìm, không còn tâm tư trị quốc. Và Tây Thi - mỹ
                      nhân trầm ngư đã được thủ hạ của Câu Tiễn vô tình phát
                      hiện và đưa vào cung.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/24/-16245354592749449386.jpg"
                      alt="1, tứ đại mỹ nhân,hồng nhan bạc phận,Tam Quốc Diễn Nghĩa,"
                      note=""
                    />
                    <p>
                      Câu Tiễn ngay khi vừa nhìn thấy Tây Thi đã quên mất mục
                      đích phục quốc của mình, không đành lòng mà để nàng đến
                      bên Ngô Vương. Đại thần Phạm Lãi đã khiến Câu Tiễn thức
                      tỉnh. Mặc dù Câu Tiễn hoàn toàn bị sắc đẹp của Tây Thi
                      quyến rũ đến thần hồn điên đảo nhưng vì Phù Sai nhất định
                      thích nàng nên đành phải dâng lên. Câu Tiễn vì phục quốc
                      mà từ bỏ tình yêu, giao Tây Thi cho Phù Sai.
                    </p>
                    <p>
                      Tây Thi ở lại Việt Quốc trong 3 năm học cầm kỳ thi họa, so
                      với 3 năm trước lại càng mê người, đồng thời, này cũng
                      cùng Phạm Lãi nảy sinh tình cảm. Tuy nhiên, nàng vẫn có
                      trách nhiệm của bản thân, không thể không tới Ngô Quốc. Mỹ
                      nhân kế của Câu Tiễn phát huy tác dụng. Phù Sai vừa gặp
                      Tây Thi đã quên cả giang sơn xã tắc, đối với việc Việt
                      Quốc dâng đến mỹ nhân vô cùng vừa lòng, thả lỏng cảnh giác
                      với Việt Quốc. Câu Tiễn cũng lợi dụng thời cơ này âm thầm
                      chuẩn bị, đến năm 473 TCN tiêu diệt Ngô Quốc.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/24/-16245354610541180681242.jpg"
                      alt="2, tứ đại mỹ nhân,hồng nhan bạc phận,Tam Quốc Diễn Nghĩa,"
                      note=""
                    />
                    <p>
                      Sau khi Ngô Quốc sụp đổ, người ta đưa ra 3 kết cục số phận
                      của Tây Thi. Đầu tiên là tự sát. Vì Phù Sai đối xử rất tốt
                      với Tây Thi nên việc phản bội lại hắn khiến nàng vô cùng
                      hổ thẹn nên đã tự sát. Thứ hai là nàng và Phạm Lãi đã cùng
                      nhau lui về sống ẩn giật. Kết cục thứ 3 là bị giết, có
                      người nói Ngô Vương phát hiện Tây Thi hại mình nên đã giết
                      nàng, cũng có người nói Câu Tiễn vì sợ rằng Tây Thi cũng
                      sẽ mê hoặc mình giống như Phù Sai nên đã sai người dìm
                      chết.
                    </p>
                    <h5>Điêu Thuyền</h5>
                    <p>
                      Điêu Thuyền là một nhân vật không hề có tên trong lịch sử
                      mà chỉ xuất hiện trong “
                      <strong>Tam quốc diễn nghĩa</strong>” nhưng nguyên mẫu của
                      nàng có thể được tìm thấy trong “Hậu Hán thư - Lữ Bố
                      truyền”. Trong đó có viết “Lã Bố và Thị tì của Đổng Trác
                      tư thông, sợ chuyện bị phát hiện, trong lòng bất an”. Thị
                      tỳ này thậm chí còn không được nói rõ tên, chỉ biết rằng
                      nàng là người chăm lo quần áo cho Đổng Trác nhưng lại cùng
                      Lữ Bố có gian tình sau lưng Đổng Trác. Cốt truyện rất
                      giống với tình tiết trong “Tam quốc diễn nghĩa” khiến
                      nhiều người tin rằng nàng chính là nguyên mẫu của Điêu
                      Thuyền.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/24/-16245354615491836316101.jpg"
                      alt="3, tứ đại mỹ nhân,hồng nhan bạc phận,Tam Quốc Diễn Nghĩa,"
                      note=""
                    />
                    <p>
                      Trong “Hậu Hán thư” có nhắc đến nguyên mẫu của Điêu Thuyền
                      nhưng cũng không nói gì thêm về kết cục của nàng . Trong “
                      <strong>Tam quốc diễn nghĩa</strong>” cũng đã nói thêm đôi
                      lời về số phận của Điêu Thuyền: “Vợ và con gái của Lữ Bố
                      bị đưa về Hứa đô”. Tào Tháo không giết vợ và con gái của
                      Lữ Bố mà chỉ đưa về Hứa đô. Người ta cho rằng Tào Tháo
                      muốn gả Điêu Thuyền cho Quan Vũ, nhưng Quan Vũ lại coi
                      thường Điêu Thuyền từng có quan hệ không trong sáng với
                      nhiều người đàn ông nên đã để nàng đi cùng vợ và con gái
                      của Lữ Bố.
                    </p>
                    <h5>Vương Chiêu Quân</h5>
                    <p>
                      Vào năm 33 TCN, Vương Chiêu Quân vì hòa thân mà đến Hung
                      Nô vạn dặm xa xôi, giúp văn hóa Trung Nguyên được truyền
                      bá rộng rãi tại nơi đây, cũng thuyết phục Hô Hàn Tà không
                      phát động chiến tranh với nhà Hán, Hô Hàn Tà vì rất yêu
                      thương nên đã nghe theo nàng. Nhờ Vương Chiêu Quân mà
                      trong hơn 60 năm Hung Nô không hề gây hấn với nhà Hán.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Những ngày tháng tốt đẹp của Vương Chiêu Quân kéo dài
                      không lâu, Hô Hàn Tà sau khi kết hôn 3 năm thì qua đời.
                      Chiếu theo lệ cũ của Hung Nô: “Cha chết, con lấy mẹ kế làm
                      vợ”, Chiêu Quân phải tái giá và trở thành vợ của con trai
                      Hô Hàn Tà. Chiêu Quân từ nhỏ đã tiếp nhận văn hóa Hán,
                      không thể nào chấp nhận được tập tục này của người Hung Nô
                      nên đã viết thư cho hoàng đế Hán mong quay về quê nhà.
                      Nhưng người đã gả như bát nước hất đi, hoàng đế Hán không
                      muốn để nàng trở lại vì muốn tiếp tục mối giao hảo với
                      Hung Nô. Đợi mãi không thấy hồi âm, nàng chỉ có thể kết
                      hôn cùng Phục Chu Lũy - con trai của Hô Hàn Tà. 11 năm
                      sau, sự việc lại thêm lần nữa tái diễn, Phục Chu Lũy qua
                      đời, Chiêu Quân lại tiếp tục tái hôn cùng con trai của
                      hắn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/24/-1624535461084142716376.jpg"
                      alt="4, tứ đại mỹ nhân,hồng nhan bạc phận,Tam Quốc Diễn Nghĩa,"
                      note=""
                    />
                    <p>
                      Năm thứ 8 công nguyên, Vương Mãng lên ngôi, mối quan hệ
                      hòa bình giữa Hung Nô và nhà Hán bị phá vỡ. Chiêu Quân tận
                      mắt nhìn thấy mối quan hệ bao lâu nay mình cố gắng nín
                      nhịn vun đắp đều tan thành mây khói, nảy sinh uất hận,
                      không bao lâu sau đã qua đời.
                    </p>
                    <h5>Dương Ngọc Hoàn</h5>
                    <p>
                      Năm 755, An Lộc Sơn lấy danh nghĩa phù trợ nhà Thanh để
                      tạo phản. Đường Huyền Tông vì bảo toàn mạng sống mà đưa
                      Dương Ngọc Hoàn ra khỏi thành Trường An, đến sườn núi Mã
                      Nguy, đồng loạt tướng sĩ đòi xử tử Dương Ngọc Hoàn, nếu
                      không tất cả sẽ dừng lại. Dương Ngọc Hoàn trước đây vì cậy
                      được sủng ái mà đưa em trai là Dương Quý Trung vào làm
                      quan. Dương Quý Trung lại là người chẳng có chút học vấn,
                      chỉ giỏi trò châm ngòi ly gián, trước mặt Đường Huyền Tông
                      luôn miệng nói An Lộc Sơn cố ý tạo phản. An Lộc Sơn vốn là
                      người Hồ, Đường Huyền Tông vốn đã nghi ngờ, lại thêm lời
                      của Dương Quý Trung khiến hoài nghi càng thêm lớn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/24/-1624535461117614207240.jpg"
                      alt="5, tứ đại mỹ nhân,hồng nhan bạc phận,Tam Quốc Diễn Nghĩa,"
                      note=""
                    />
                    <p>
                      Mặc dù An Lộc Sơn canh giữ biên giới, nhưng mọi chuyện
                      trong triều ông đều nắm chắc, nếu không nổi dậy thì sớm
                      muộn gì cũng bị Dương Quốc Trung giết chết. Chính vì vậy,
                      ông ta đã dẫn đầu cuộc nổi loạn, khiến quân lính đổ mọi
                      tội lỗi lên đầu Dương Quốc Trung và Dương Ngọc Hoàn. Trên
                      đường đi giết chết Dương Quốc Trung, kế đến là Dương Ngọc
                      Hoàn. Nếu Dương Ngọc Hoàn không chết, binh lính sẽ không
                      bảo vệ Đường Huyền Tông. Chẳng còn cách nào khác, Đường
                      Huyền Tông đành phải giết chết Dương Ngọc Hoàn.
                    </p>
                    <p>
                      Có người nói rằng Dương Ngọc Hoàn không chết mà đã trốn
                      sang Nhật Bản. Nhưng trong “Cựu Đường Thư” đã ghi rõ nàng
                      đã “treo cổ chết trong phòng thờ Phật”. Tướng quân Trần
                      Huyền Cơ cũng đã đích thân kiểm tra cái chết của Dương
                      Ngọc Hoàn. Trần Huyền Cơ là người đứng đầu ủng hộ việc
                      giết Dương Ngọc Hoàn, chẳng lý gì lại cho nàng một đường
                      sống. Dương Ngọc Hoàn khả năng cao là thực sự đã chết như
                      vậy.
                    </p>
                    <p>
                      Trên đây là kết cục của <strong>Tứ đại mỹ nhân</strong>,
                      dường như chẳng có ai được viên mãn. Có lẽ ông trời đã ban
                      cho họ nhan sắc thì cũng sẽ lấy đi của các nàng một cuộc
                      sống an yên.
                    </p>
                    <p>Theo Sohu</p>
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
