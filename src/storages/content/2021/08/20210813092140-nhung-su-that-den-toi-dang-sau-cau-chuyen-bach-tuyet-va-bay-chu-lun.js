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
"timestamp": '13/08/2021 09:21 AM',
"title": 'Những sự thật đen tối đằng sau câu chuyện Bạch Tuyết và bảy chú lùn',
"description": 'Câu chuyện cổ tích "Nàng Bạch Tuyết và bảy chú lùn" có thể là sản phẩm của rất nhiều câu chuyện ghép lại. Không ít trong số đó vô cùng đen tối.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/snow-white2-1628671589734535858386.jpg',
"alt": 'TRUYỀN THUYẾT,TRUYỆN CỔ TÍCH,NÀNG BẠCH TUYẾT VÀ BẢY CHÚ LÙN,',
"category": 'news',
"date": '13/08/2021',
"time": '09:21 AM',
"link": '/nhung-su-that-den-toi-dang-sau-cau-chuyen-bach-tuyet-va-bay-chu-lun',
"zcomponent": 'page_20210813092140',
"filepath": './20210813092140-nhung-su-that-den-toi-dang-sau-cau-chuyen-bach-tuyet-va-bay-chu-lun.js'
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
  "Những sự thật đen tối đằng sau câu chuyện Bạch Tuyết và bảy chú lùn";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "13/08/2021 09:21 AM";
const description =
  'Câu chuyện cổ tích "Nàng Bạch Tuyết và bảy chú lùn" có thể là sản phẩm của rất nhiều câu chuyện ghép lại. Không ít trong số đó vô cùng đen tối.';
const link =
  "nhung-su-that-den-toi-dang-sau-cau-chuyen-bach-tuyet-va-bay-chu-lun";
const tagparam = [
  "TRUYỀN THUYẾT",
  "TRUYỆN CỔ TÍCH",
  "NÀNG BẠCH TUYẾT VÀ BẢY CHÚ LÙN",
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

export default function page_20210813092140() {
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
                      <strong>Nàng Bạch Tuyết và bảy chú lùn</strong> là một
                      trong số những câu chuyện cổ tích nổi tiếng thế giới với
                      hàng trăm phiên bản khác nhau. Phiên bản nối tiếng nhất có
                      lẽ là Snowdrop trong tập Children;s and Household Tales
                      của anh em Grimm. Đồng thời, phiên bản này cũng đã được
                      nhà nghiên cứu văn học dân gian Andrew Lang chỉnh sửa lại
                      và cuối cùng được Walt Disney lựa chọn để chuyển thể thành
                      phim hoạt hình.
                    </p>
                    <h5>
                      Những câu chuyện tạo lên "Nàng Bạch Tuyết và bảy chú lùn"
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/11/snow-white2-1628671589734535858386.jpg"
                      alt="1, TRUYỀN THUYẾT,TRUYỆN CỔ TÍCH,NÀNG BẠCH TUYẾT VÀ BẢY CHÚ LÙN,"
                      note=""
                    />
                    <p>
                      Có không ít ý kiến cho rằng nó chịu ảnh hưởng hoặc được
                      kết hợp từ nhiều câu chuyện khác nhau như The Young Slave
                      của Giambattista Basile, một câu chuyện cũng khá tương
                      đồng với Sleeping Beauty. Tuy nhiên, hai câu chuyện mang
                      nhiều điểm trùng hợp và xuất hiện sớm hơn là Gold-Tree and
                      Silver-Tree và Maria, the Wicked Stepmother, and the Seven
                      Robbers.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/snow-white-16286716149241599352227.jpg"
                      alt="2, TRUYỀN THUYẾT,TRUYỆN CỔ TÍCH,NÀNG BẠCH TUYẾT VÀ BẢY CHÚ LÙN,"
                      note=""
                    />
                    <p>
                      Trong câu chuyện dân gian Scotland, Gold-Tree and
                      Silver-Tree, câu chuyện kể về một ông vua có người vợ tên
                      Silver-Tree và một cô con gái tên Gold-Tree. Một ngày nọ,
                      Silver-Tree và Gold-Tree đi đến chỗ giếng nước, nơi đang
                      có con cá hồi thần cư ngụ. Hoàng hậu hỏi con cá xem liệu
                      bà có phải là người đẹp nhất thế gian hay không, con cá
                      đáp không phải, con gái bà – nàng Gold-Tree sẽ trở thành
                      hoàng hậu đẹp nhất thế gian. Silver-Tree trở về nhà, bị
                      cơn giận dữ làm cho mờ mắt. Bà nằm xuống giường và thề
                      rằng sẽ không bao giờ khỏe lại được nếu không ăn tim và
                      gan của nàng Gold-Tree. Nhà vua trở về cung điện sau khi
                      nghe tin vợ nằm liệt giường, và khi nghe vợ đòi ăn tim và
                      gan con gái, ông đã gả Gold-Tree cho một hoàng tử vừa đến
                      cầu hôn, để nàng rời xa khỏi hoàng hậu. Đồng thời, nhà vua
                      cũng đem nội tạng của một con dê cho vợ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/fairy-tale-gold-tree-16286717277681336926485.jpg"
                      alt="3, TRUYỀN THUYẾT,TRUYỆN CỔ TÍCH,NÀNG BẠCH TUYẾT VÀ BẢY CHÚ LÙN,"
                      note=""
                    />
                    <p>
                      Ở phần tiếp theo trong câu chuyện về Bạch Tuyết, các tình
                      tiết lại có những nét khá tương đồng với truyện Maria, the
                      Wicked Stepmother, and the Seven Robbers. Bị ép rời khỏi
                      nhà vì bà mẹ kế độc ác, nàng Maria đi lang thang trong
                      rừng cho đến khi thấy một ngôi nhà nơi bảy tên cướp sinh
                      sống. Thay vì làm tổn thương cô gái tội nghiệp, những tên
                      cướp lại cho phép cô ở lại để dọn dẹp, nấu nướng và trông
                      coi nhà cửa như một cô em gái. Thế nhưng mẹ kế phát hiện
                      được Maria vẫn còn sống, bà cho cô một chiếc nhẫn bị
                      nguyền, chỉ cần đeo vào, cô sẽ chết ngay lập tức.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/lived-happily-ever-after-1628671654728397604829.jpg"
                      alt="4, TRUYỀN THUYẾT,TRUYỆN CỔ TÍCH,NÀNG BẠCH TUYẾT VÀ BẢY CHÚ LÙN,"
                      note=""
                    />
                    <p>
                      Ngoài ra, phần kết của Bạch Tuyết thì rất rõ ràng, có điểm
                      chung với truyện The Crystal Coffin.
                    </p>
                    <h5>
                      Những nguồn cảm hứng khác tạo lên Bạch Tuyết và bảy chú
                      lùn
                    </h5>
                    <p>
                      Con cá hồi thần trở thành gương, một vật dụng gắn liền với
                      những quan niệm tâm linh lẫn tiên tri của con người trong
                      nhiều thế kỷ. Bên cạnh đó, nó còn phản ánh sự trưởng
                      thành, nở rộ về nhan sắc của một cô gái, cũng như lúc già
                      và xấu đi của một người phụ nữ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/snow-white-with-the-dwarfs-1628671635018423363440.jpg"
                      alt="5, TRUYỀN THUYẾT,TRUYỆN CỔ TÍCH,NÀNG BẠCH TUYẾT VÀ BẢY CHÚ LÙN,"
                      note=""
                    />
                    <p>
                      Tương tự như vậy, quả táo độc có thể liên quan đến những{" "}
                      <strong>truyền thuyết</strong> cổ của Hy Lạp kể về nữ thần
                      bất hòa Eris – vị thần đã gây ra biết bao phiền toái và đổ
                      máu chỉ với một quả táo "dành cho người đẹp nhất" ném vào
                      giữa tiệc cưới của Peleus và Thetis.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Cái tên "Snow White" có lẽ được lấy cảm hứng từ một truyện
                      khác trong tập truyện của Grimms là Snow-White and
                      Rose-Red. Trong câu chuyện này, Bạch Tuyết và Hồng Hoa là
                      hai chị em gái. Họ đã nuôi một chú gấu trong nhà suốt một
                      mùa đông dài như một người bạn. Sau đó họ lại tìm được một
                      chú lùn và nhiều lần giải cứu chú ta, dù chú lùn không tỏ
                      ra biết ơn. Cuối cùng hai chị em chứng kiến chú gấu mình
                      nuôi sát hại chú lùn khi chú lùn ăn trộm kho báu của gấu.
                      Hóa ra chú gấu là một hoàng tử điển trai bị gã lùn nguyền
                      rủa. Sau khi được khôi phục hình dạng, hoàng tử cưới Bạch
                      Tuyết và em trai hoàng tử cưới Hồng Hoa.
                    </p>
                    <h5>Những giả thuyết lịch sử</h5>
                    <p>
                      Bên cạnh những chất liệu thần thoại,{" "}
                      <strong>truyện cổ tích</strong>, Bạch Tuyết và bảy chú lùn
                      còn được cho là lấy cảm hứng từ hai nhân vật có thật trong
                      lịch sử. Trong cuốn Schneewittchen: Märchen oder Wahrheit?
                      (Snow White: Is It a Fairy Tale?) của tác giả Eckhard
                      Sander xuất bản năm 1994, có đề cập đến một giả thuyết về
                      nguyên mẫu đời thực của Bạch Tuyết.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/snow-white-in-her-glass-coffin-1628671775399987938352.jpg"
                      alt="6, TRUYỀN THUYẾT,TRUYỆN CỔ TÍCH,NÀNG BẠCH TUYẾT VÀ BẢY CHÚ LÙN,"
                      note=""
                    />
                    <p>
                      Theo cuốn sách, nguyên mẫu đời thực của Bạch Tuyết là
                      Margarete von Waldeck, một nữ bá tước người Đức. Năm 16
                      tuổi, Margarete bị mẹ kế Katharina xứ Hatzfeld ép chuyển
                      đến Wildungen ở Brussels. Tại đó, Margarete phải lòng
                      hoàng tử - người sau này sẽ trở thành Phillip II của Tây
                      Ban Nha. Tuy nhiên, cha và mẹ kế của Margarete không đồng
                      ý với mối quan hệ này và nàng qua đời ở tuổi 21 vì bị đầu
                      độc.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/snow-white-and-rose-red-1628671797105401840071.jpg"
                      alt="7, TRUYỀN THUYẾT,TRUYỆN CỔ TÍCH,NÀNG BẠCH TUYẾT VÀ BẢY CHÚ LÙN,"
                      note=""
                    />
                    <p>
                      Eckhard Sander còn đề cập đến nguồn cảm hứng cho nhân vật
                      7 chú lùn. Cha của Margarete có một vài mỏ khoáng sản sử
                      dụng nô lệ trẻ em. Điều kiện làm việc trong những mỏ này
                      vô cùng thiếu thốn, khiến cho người làm việc ảnh hưởng sức
                      khỏe nghiêm trọng. Nếu không qua đời, họ sống lay lắt với
                      bộ dạng còi cọc, chân tay biến dạng vì suy dinh dưỡng và
                      lao động nặng nhọc. Vì thế họ thường được gọi là "những
                      chú lùn tội nghiệp".
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/snow-white-and-the-seven-dwarfs-162867183579017240886.jpg"
                      alt="8, TRUYỀN THUYẾT,TRUYỆN CỔ TÍCH,NÀNG BẠCH TUYẾT VÀ BẢY CHÚ LÙN,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, ý kiến của Eckhard Sander không hẳn thuyết phục
                      được tất cả mọi người. Theo một nghiên cứu từ nhóm nghiên
                      cứu tại Lohr, Bavaria thì Bạch Tuyết có thể lấy cảm hứng
                      từ Maria Sophia von Erthal, sinh năm 1729 tại Lohr am
                      Main, Bavaria. Cô là con gái của một chủ đất sống ở thế kỷ
                      18, Philipp Christoph von Erthal và vợ là Baroness von
                      Bettendorff.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/11/talking-mirror0-1628671863153724103941.jpg"
                      alt="9, TRUYỀN THUYẾT,TRUYỆN CỔ TÍCH,NÀNG BẠCH TUYẾT VÀ BẢY CHÚ LÙN,"
                      note=""
                    />
                    <p>
                      Sau khi bà Baroness qua đời, Philipp kết hôn với Claudia
                      Elisabeth Maria von Venningen, nữ bá tước xứ Reichenstein.
                      Người vợ hai của ông không thích cô con gái riêng của
                      chồng cho lắm. Họ sống trong một dinh thự mà ngày nay đã
                      trở thành viên bảo tàng, trong số những món đồ nội thất có
                      món đồ được gọi là "Gương nói" – một món đồ chơi có thể
                      phát ra âm thanh được chế tạo vào năm 1720. Còn các chú
                      lùn trong truyện Maria, Wicked Stepmother, and Seven
                      Robbers lại liên quan đến thị trấn khai thác mỏ, Bieber ở
                      phía tây Lohr, nằm giữa bảy ngọn núi.
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
