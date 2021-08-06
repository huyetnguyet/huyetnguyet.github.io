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
"timestamp": '06/08/2021 09:36 AM',
"title": 'Đồ tập bỗng dưng trở nên "đen tối" nhờ cách mix hoặc lối tạo dáng khó hiểu của những nhân vật này',
"description": 'Có người vô tình, có người thì bị cho là cố ý, nhưng dù thế nào thì cách họ mix đồ tập bỗng trở nên "tăm tối" hơn trong mắt người xem.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/2saovietnamnetjscvn-images-2021-07-05-10-02-quynh-nga-01-1628223153811906562888.jpg',
"alt": 'quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,',
"category": 'images',
"date": '06/08/2021',
"time": '09:36 AM',
"link": '/do-tap-bong-dung-tro-nen-den-toi-nho-cach-mix-hoac-loi-tao-dang-kho-hieu-cua-nhung-nhan-vat-nay',
"zcomponent": 'page_20210806093614',
"filepath": './20210806093614-do-tap-bong-dung-tro-nen-den-toi-nho-cach-mix-hoac-loi-tao-dang-kho-hieu-cua-nhung-nhan-vat-nay.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  'Đồ tập bỗng dưng trở nên "đen tối" nhờ cách mix hoặc lối tạo dáng khó hiểu của những nhân vật này';
const author = "LÝ THẨM,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "06/08/2021 09:36 AM";
const description =
  'Có người vô tình, có người thì bị cho là cố ý, nhưng dù thế nào thì cách họ mix đồ tập bỗng trở nên "tăm tối" hơn trong mắt người xem.';
const link =
  "do-tap-bong-dung-tro-nen-den-toi-nho-cach-mix-hoac-loi-tao-dang-kho-hieu-cua-nhung-nhan-vat-nay";
const tagparam = [
  "quỳnh nga",
  "Mai Phương Thuý",
  "đồ tập gym",
  "lệ quyên",
  "sao xấu",
  "sao mặc xấu",
  "thảm hoạ thời trang",
  "sao đỏ thời trang",
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

export default function page_20210806093614() {
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
                      Được ra đời với chức năng chính là đem đến sự thuận tiện
                      và dễ chịu vô cùng trong khoản tập tành, đồ tập chính là
                      giải pháp tối ưu, là cái ôm trìu mến dành cho những người
                      có tinh thần thể dục thể thao cao thật cao.
                    </p>
                    <p>
                      Nhưng cũng vì thiết kế mỏng mịn, ôm sát sàn sạt vào từng
                      ngóc ngách trên thân hình mà đồ tập đôi khi lại gây nên
                      những phút thẹn thùng xen lẫn bối rối khi cả người mặc và
                      người nhìn đều nhìn thấy những-thứ-không-nên-thấy. Vậy mà
                      vẫn có những ngôi sao hay những nhân vật danh (tai) tiếng
                      ở Vbiz lại không e dè khi gặp sự cố với đồ tập.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/-sau-hut-le-quyen-quynh-nga-khong-bao-bang-hoa-hau-goc-phu-yen-2249445202359030182654846017859085458059270n-1627966467-440-width1242height1228-1628223153890427928621.jpeg"
                      alt="1, quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,"
                      note="Quỳnh Nga vẫn luôn là cái tên đầu bảng bởi độ mạnh dạn và dứt khoát trong việc tạo dáng gợi cảm với đồ tập. Nhìn ảnh này, ai dám nói không để ý tới khuôn ngực tròn vo kia?"
                    />
                    <p>
                      Từng có lần cô khiến dân mạng sửng sốt vì mặc quần bó màu
                      nude mà cứ như không mặc, báo hại diễn viên Việt Anh phải
                      cảm thán 1 câu: "Tay lái phải rất chắc mới có thể lái được
                      cái đường này". Việt Anh hay quá! Chẳng những là diễn viên
                      mà còn là nhà văn với đủ hình thức ẩn dụ trong câu cú
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/1584886457-179-do-tap-8-1584860345-width600height1076-1628223153838954649894.jpeg"
                      alt="2, quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,"
                      note="Nhưng có lúc Quỳnh Nga lại quên"
                    />
                    <p>
                      <strong>Quỳnh Nga</strong> thể hiện các kỹ năng tập yoga
                      ngày 1 thuần thục với động tác rất khó này nhưng 1 lần
                      nữa, body "đâu ra đấy" của cô "cá sấu chúa" lại trở thành
                      tác nhân gây xao nhãng, người xem nhìn vào khó mà tập
                      trung vào động tác tập luyện
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/2saovietnamnetjscvn-images-2021-07-05-10-02-quynh-nga-01-1628223153811906562888.jpg"
                      alt="5, quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/92121170101585173174695512917015940606459904o-16000594786561490481288-16282231538491741867148.jpeg"
                      alt="6, quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,"
                      note=""
                    />
                    <p>
                      Chất liệu vải tổng hợp với độ co giãn cao dễ làm{" "}
                      <strong>Quỳnh Nga</strong> "lộ hàng". Cũng vì biết ý nên
                      có lúc cô chụp với 1 dáng khép nép, gợi cảm có chừng mực
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/5d57eb9080617-1584957701391410662581-0716-16282231536171571152038.jpeg"
                      alt="7, quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Ca sĩ <strong>Lệ Quyên</strong> cũng có những tạo dáng hay
                      ho không kém. Nếu <strong>Quỳnh Nga</strong> dùng động tác
                      yoga để nói lên tiếng lòng thì Lệ Quyên lại bộc lộ những
                      ngôn ngữ cơ thể rất... Lệ Quyên
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/lq2-16282291550461097571486.jpeg"
                      alt="3, quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,"
                      note="Hoặc như thế này chẳng hạn"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/lq1-1628229154967662311202.jpeg"
                      alt="4, quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,"
                      note="Chọn quần bó chẽn sáng màu càng làm tăng nguy cơ gây chú ý vào những chỗ... không cần thiết"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/lq4-1628229155145227546044.jpeg"
                      alt="8, quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,"
                      note=""
                    />
                    <p>
                      Trong mẫu đồ tập 1 quai với đoạn cut out lộ cả khe ngực,
                      vặn mình tạo 1 dáng cong vòng, <strong>Lệ Quyên</strong>{" "}
                      thủ thỉ: "Đành tự mày mò mấy bài tập ở nhà vậy"
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/c-sau-hut-le-quyen-quynh-nga-khong-bao-bang-hoa-hau-goc-phu-yen-224562073152612176984494148727331304315166n-1627966467-828-width1152height2048-1628223153881444046678.jpeg"
                      alt="9, quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/lq6-1628229155280815656442.jpeg"
                      alt="10, quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-1-16082542524581777620292-16282296343332044425522.jpeg"
                      alt="11, quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,"
                      note=""
                    />
                    <p>
                      Với body thon gọn như "hồi xuân", cũng dễ hiểu vì sao{" "}
                      <strong>Lệ Quyên</strong> lại thích chọn ngôn ngữ cơ thể
                      độc đáo tới vậy
                    </p>
                    <p></p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/do-tap-2-1593400214-724-width650height812-1628229745591578638833.jpeg"
                      alt="12, quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,"
                      note="Thuý Vi - người thứ 3 trong drama 'cắm sừng' ngày nào của
                      Midu từng nhận cơn bão chỉ trích vì diện đồ tập hở trên lộ
                      dưới. Áp crop top thấm ướt mồ hôi bỗng hoá trong suốt, lộ
                      cảm miếng dán ngực của cô"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/ngoai-mai-phuong-thuy-nhieu-sao-ngoai-dinh-phot-voi-quan-tap-bo-sat-0c7-5333329-1628223153987607575913.jpeg"
                      alt="13, quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/6/ngoai-mai-phuong-thuy-nhieu-sao-ngoai-dinh-phot-voi-quan-tap-bo-sat-7b0-5333329-1628223153999928036572.jpeg"
                      alt="14, quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/photo-3-1528132749649289348293-1548321001-17-width600height900-1628230036603488837243.jpeg"
                      alt="15, quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/sau-hut-le-quyen-quynh-nga-khong-bao-bang-hoa-hau-goc-phu-yen-2239761339971294343781735312665202605105918n-1627966467-169-width1152height2048-16282231538701547450389.jpeg"
                      alt="16, quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,"
                      note='Tuy nhiên sẽ vẫn có những trường hợp "tai nạn" vì vô ý như Mai Phương Thuý'
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/1-171640-16282370414271122735420.png"
                      alt="17, quỳnh nga,Mai Phương Thuý,đồ tập gym,lệ quyên,sao xấu,sao mặc xấu,thảm hoạ thời trang,sao đỏ thời trang,"
                      note='Hoa hậu Tường Linh từng vướng nghi án "độ loa" vì sự thay đổi kích cỡ vòng 1 quá nhanh. Nhìn ảnh này ta mới hiểu nghi ngờ của dân mạng chẳng phải vô lý'
                    />
                    <p>Ảnh: Sưu tầm</p>{" "}
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
