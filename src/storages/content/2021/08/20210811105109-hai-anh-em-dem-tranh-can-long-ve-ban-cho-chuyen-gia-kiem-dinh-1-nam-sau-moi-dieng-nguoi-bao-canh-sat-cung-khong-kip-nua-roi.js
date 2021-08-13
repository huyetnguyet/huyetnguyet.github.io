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
"timestamp": '11/08/2021 10:51 AM',
"title": 'Hai anh em đem tranh Càn Long vẽ bán cho chuyên gia kiểm định, 1 năm sau mới "điếng người": Báo cảnh sát cũng không kịp nữa rồi!',
"description": 'Chứng kiến hành động của vị chuyên gia sau đó, hai anh em nhà họ Chu mới vội vàng đi báo cảnh sát nhưng cũng không kịp nữa rồi.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/photo-1-16285829258491147498617.jpg',
"alt": 'Đài truyền hình Trung Quốc,Hoàng đế Càn Long,',
"category": 'news',
"date": '11/08/2021',
"time": '10:51 AM',
"link": '/hai-anh-em-dem-tranh-can-long-ve-ban-cho-chuyen-gia-kiem-dinh-1-nam-sau-moi-dieng-nguoi-bao-canh-sat-cung-khong-kip-nua-roi',
"zcomponent": 'page_20210811105109',
"filepath": './20210811105109-hai-anh-em-dem-tranh-can-long-ve-ban-cho-chuyen-gia-kiem-dinh-1-nam-sau-moi-dieng-nguoi-bao-canh-sat-cung-khong-kip-nua-roi.js'
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
  'Hai anh em đem tranh Càn Long vẽ bán cho chuyên gia kiểm định, 1 năm sau mới "điếng người": Báo cảnh sát cũng không kịp nữa rồi!';
const author = "TAMMY,";
const source = "Pháp luật và bạn đọc";
const timestamp = "11/08/2021 10:51 AM";
const description =
  "Chứng kiến hành động của vị chuyên gia sau đó, hai anh em nhà họ Chu mới vội vàng đi báo cảnh sát nhưng cũng không kịp nữa rồi.";
const link =
  "hai-anh-em-dem-tranh-can-long-ve-ban-cho-chuyen-gia-kiem-dinh-1-nam-sau-moi-dieng-nguoi-bao-canh-sat-cung-khong-kip-nua-roi";
const tagparam = ["Đài truyền hình Trung Quốc", "Hoàng đế Càn Long"];
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

export default function page_20210811105109() {
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
                      Tại Trung Quốc, sưu tầm cổ vật là một thú chơi phổ biến,
                      được đông đảo người dân quan tâm. Để thu thập cũng như bảo
                      tồn những cổ vật lưu lạc trong dân gian, các{" "}
                      <strong>đài truyền hình Trung Quốc</strong> đã sản xuất
                      nhiều chương trình định giá đồ cổ cho nhân dân khắp mọi
                      miền đất nước được tới tham gia thẩm định miễn phí.
                    </p>
                    <p>
                      Thế nhưng ít ai ngờ rằng bên trong những chương trình kiểm
                      định bảo vật uy tín này cũng có thể phát sinh nhiều thủ
                      đoạn mờ ám.
                    </p>
                    <p>
                      Năm 2009, hai anh em nhà họ Chu mang một bức tranh gia
                      truyền tới đăng ký kiểm định tại chương trình "Hoa Dự Chi
                      Môn" - show kiểm định bảo vật uy tín của Đài truyền hình
                      tỉnh Hà Nam (Trung Quốc).
                    </p>
                    <p>
                      Khi đứng xếp hàng tại địa điểm đăng ký, hai anh em tình cờ
                      được nói chuyện cùng chuyên gia Lưu Nham. Lưu Nham là một
                      chuyên gia hội họa, thư pháp và gốm sứ có tiếng, ông cũng
                      đồng thời là chuyên gia kiểm định trong chính chương trình
                      "Hoa Dự Chi Môn".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/photo-1-16285829258491147498617.jpg"
                      alt="1, Đài truyền hình Trung Quốc,Hoàng đế Càn Long,"
                      note=""
                    />
                    <p>
                      Vị chuyên gia nhìn quá bức tranh của hai anh em rồi hỏi
                      xuất xứ bảo vật. Anh em họ Chu cho biết đây là bức tranh
                      thư pháp "Tung dương hán bách đồ" (cây bách dưới ánh nắng
                      Tung Sơn), do chính tay vua Càn Long họa nên.
                    </p>
                    <p>
                      Bức tranh "Tung dương hán bách đồ" được{" "}
                      <strong>Hoàng đế Càn Long</strong> vẽ khi ông 40 tuổi,
                      trong một lần đến thăm dãy núi Tung Sơn và cảm động trước
                      cảnh đẹp nơi đây (Ảnh: Sohu)
                    </p>
                    <p>
                      Lưu Nham nhìn bức tranh này rồi chau mày: "Tranh này thì
                      đúng là tranh cổ, nhưng không phải do Càn Long vẽ mà có lẽ
                      của tác giả khác. Bây giờ người xếp hàng vẫn còn đông
                      người tôi không nói kỹ được, nếu hai anh em muốn có thể
                      đến chỗ tôi tôi sẽ thẩm định thêm cho".
                    </p>
                    <p>
                      Buổi tối hôm ấy, hai anh em đã mang bức tranh thư pháp tới
                      cho chuyên gia Lưu Nham. Lưu Nham vui vẻ tiếp nhận rồi
                      giải thích: "Tác phẩm này thực chất là đồ giả, không phải
                      tranh Càn Long vẽ. Tuy nhiên niên đại của nó cũng được
                      khoảng 200 năm. Nếu đem bán được cao nhất là 30.000 NDT".
                    </p>
                    <p>
                      Lưu Nham là chuyên gia thẩm định của chương trình "Hoa Dự
                      Chi Môn" nên chủ nhân bảo vật đặt hoàn toàn niềm tin vào
                      ông (Ảnh: Haokan)
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/photo-2-1628582928717267085930.jpg"
                      alt="2, Đài truyền hình Trung Quốc,Hoàng đế Càn Long,"
                      note=""
                    />
                    <p>
                      Vị chuyên gia còn lấy ra một xấp hồ sơ đấu giá, chỉ ra các
                      tác phẩm của Càn Long để làm bằng chứng: "Các bạn thấy
                      đấy, bức này là tranh thật của Càn Long mà giá bán cũng
                      chỉ hơn 80.000 NDT, tranh giả được giá như vậy là rất tốt
                      rồi".
                    </p>
                    <p>
                      Hai anh em họ Chu nghe tới đây thì thất vọng vô cùng, món
                      bảo vật gia truyền nhà họ chỉ có giá 30.000 NDT, quả thực
                      không phải con số lớn. Nhìn rõ thái độ thất vọng của họ,
                      chuyên gia Lưu Nham lập tức động viên.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Ông nói mình có quen nhiều người sưu tầm thư pháp và tranh
                      cổ, ông có thể giới thiệu, trao đổi cho nhau để đạt mức
                      giá tốt hơn. Hai anh em mừng "như bắt được vàng", họ nghe
                      theo lời chuyên gia và bán lại bức "tranh giả" cho ông với
                      giá 170.000 NDT, cao hơn rất nhiều so với mức định giá ban
                      đầu.
                    </p>
                    <h5>Chân tướng sự việc hé mở</h5>
                    <p>
                      Tròn một năm sau khi bán tranh, anh em họ Châu nhận được
                      thông tin bức tranh "Tung dương hán bách đồ" của họ đang
                      được đấu giá tại Bắc Kinh.
                    </p>
                    <p>
                      Tác phẩm có giá khởi điểm là 78 triệu NDT và đã được bán
                      với giá 87 triệu NDT, phá vỡ mọi kỷ lục đấu giá các tác
                      phẩm cá nhân của Càn Long. Chủ nhân cũ của bảo vật chỉ
                      biết ngỡ ngàng: Năm ngoái chuyên gia còn nói là hàng giả,
                      mua lại giá 170.000 NDT mà giờ đã đạt 87 triệu NDT.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/photo-4-16285829287931773852063.jpeg"
                      alt="3, Đài truyền hình Trung Quốc,Hoàng đế Càn Long,"
                      note=""
                    />
                    <p>
                      Nguyên mẫu ba cây bách chụm lại ở núi Tung Sơn trong bức
                      tranh "Tung dương hán bách đồ" (Ảnh: Sohu)
                    </p>
                    <p>
                      Lúc này họ mới bàng hoàng nhận ra mình đã bị lừa một vố
                      đau điếng. Anh em nhà họ Chu báo cáo vụ việc này với phía
                      cảnh sát và mong được đền bù số tiền thỏa đáng.
                    </p>
                    <p>
                      Vụ kiện tụng kéo dài suốt nhiều năm mà vẫn không có kết
                      quả gì vì hai anh em đã tự nguyện ký vào thỏa thuận mua
                      bán bức tranh. Hơn nữa, Lưu Nham thẩm định cho hai anh em
                      dưới vai trò chuyên gia cá nhân nên họ không thể khởi kiện
                      chương trình "Hoa Dự Chi Môn".
                    </p>
                    <p>
                      Song vụ việc rùm beng này đã làm chấn động giới nghiên cứu
                      cổ vật, khiến danh tiếng của chuyên gia Lưu Nham sau đó bị
                      hủy hoại nghiêm trọng.
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
