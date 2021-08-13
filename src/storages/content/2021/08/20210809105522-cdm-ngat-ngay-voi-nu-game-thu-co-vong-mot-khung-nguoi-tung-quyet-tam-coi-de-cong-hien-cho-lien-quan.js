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
"timestamp": '09/08/2021 10:55 AM',
"title": 'CĐM ngất ngây với nữ game thủ có vòng một khủng, là nàng Yasuo gợi cảm từng "cởi" để biến thành Natalya',
"description": 'Mới đây, cộng đồng mạng được một phen ngất ngây với sự hóa thân của nữ coser, một trong những gương mặt thân quen của game thủ Liên Quân.',
"src": 'https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2020/12/28/screenshot7-1609174048692148671450.png',
"alt": 'LIÊN QUÂN MOBILE,LIÊN QUÂN,GÁI XINH,COSER,COSPLAY,COSPLAYER,TRANG ĐỖ,BÍT TẾT,CỘNG ĐỒNG MẠNG,CĐM,CỘNG ĐỒNG LIÊN QUÂN MOBILE,',
"category": 'images',
"date": '09/08/2021',
"time": '10:55 AM',
"link": '/cdm-ngat-ngay-voi-nu-game-thu-co-vong-mot-khung-nguoi-tung-quyet-tam-coi-de-cong-hien-cho-lien-quan',
"zcomponent": 'page_20210809105522',
"filepath": './20210809105522-cdm-ngat-ngay-voi-nu-game-thu-co-vong-mot-khung-nguoi-tung-quyet-tam-coi-de-cong-hien-cho-lien-quan.js'
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
  'CĐM ngất ngây với nữ game thủ có vòng một khủng, là nàng Yasuo gợi cảm từng "cởi" để biến thành Natalya';
const author = "Lee Chueng Hee";
const source = "Pháp luật và bạn đọc";
const timestamp = "09/08/2021 10:55 AM";
const description =
  "Mới đây, cộng đồng mạng được một phen ngất ngây với sự hóa thân của nữ coser, một trong những gương mặt thân quen của game thủ Liên Quân.";
const link =
  "cdm-ngat-ngay-voi-nu-game-thu-co-vong-mot-khung-nguoi-tung-quyet-tam-coi-de-cong-hien-cho-lien-quan";
const tagparam = [
  "LIÊN QUÂN MOBILE",
  "LIÊN QUÂN",
  "GÁI XINH",
  "COSER",
  "COSPLAY",
  "COSPLAYER",
  "TRANG ĐỖ",
  "BÍT TẾT",
  "CỘNG ĐỒNG MẠNG",
  "CĐM",
  "CỘNG ĐỒNG LIÊN QUÂN MOBILE",
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

export default function page_20210809105522() {
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
                      <strong>Trang Đỗ</strong> (<strong>Bít Tết</strong>) có lẽ
                      không phải là cái tên xa lạ đối với cộng đồng game thủ. Nữ{" "}
                      <strong>coser</strong> này từng không ít lần biến thân một
                      cách đầy ấn tượng thành các nhân vật trong game. Đặc biệt
                      là các tựa game đình đám như LMHT, Tốc Chiến và đương
                      nhiên là cả{" "}
                      <strong>
                        <strong>Liên Quân</strong> Mobile
                      </strong>
                      .
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2020/12/28/screenshot7-1609174048692148671450.png"
                      alt="1, LIÊN QUÂN MOBILE,LIÊN QUÂN,GÁI XINH,COSER,COSPLAY,COSPLAYER,TRANG ĐỖ,BÍT TẾT,CỘNG ĐỒNG MẠNG,CĐM,CỘNG ĐỒNG LIÊN QUÂN MOBILE,"
                      note=""
                    />
                    <p>
                      Màn hóa thân không thể bất ngờ hơn của nữ game thủ Trang
                      Đỗ
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2020/12/28/screenshot2-1609174065155964956798.png"
                      alt="2, LIÊN QUÂN MOBILE,LIÊN QUÂN,GÁI XINH,COSER,COSPLAY,COSPLAYER,TRANG ĐỖ,BÍT TẾT,CỘNG ĐỒNG MẠNG,CĐM,CỘNG ĐỒNG LIÊN QUÂN MOBILE,"
                      note=""
                    />
                    <p>
                      Còn nhớ cách đây không lâu, <strong>Trang Đỗ</strong> đã
                      từng có một màn biến thân thành Natalya Băng Tâm Nữ Thần
                      theo cách cực kỳ hấp dẫn và nóng bỏng. Thậm chí cách mà cô
                      nàng lựa chọn để tham gia thử thách biến hình cũng rất
                      mạnh dạn làm cho không ít người chơi{" "}
                      <strong>
                        <strong>Liên Quân</strong> Mobile
                      </strong>{" "}
                      cảm thấy bất ngờ và có phần choáng ngợp.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/9/photo-1-1628489564959776018305.jpg"
                      alt="3, LIÊN QUÂN MOBILE,LIÊN QUÂN,GÁI XINH,COSER,COSPLAY,COSPLAYER,TRANG ĐỖ,BÍT TẾT,CỘNG ĐỒNG MẠNG,CĐM,CỘNG ĐỒNG LIÊN QUÂN MOBILE,"
                      note=""
                    />
                    <p>
                      Cụ thể, nữ game thủ này đã quyết định “cởi” bỏ trang phục
                      của mình để hóa thân trở thành nữ pháp sư Natalya vô cùng
                      gợi cảm, nóng bỏng cũng như không kém phần xinh đẹp. Trước
                      đó, <strong>Trang Đỗ</strong> cũng đã khiến cho không ít
                      người cảm thấy bất ngờ khi trở thành một phiên bản Yasuo
                      nữ cực kỳ hấp dẫn và xinh đẹp.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Mới đây, cô nàng lại khoe những hình ảnh nóng bỏng của bộ
                      trang phục Lauriel skin Winter hay còn được biết đến với
                      tên gọi “Lauriel Hoa Khôi Dạ Hội hoặc Hoa Khôi Giáng
                      Sinh”. Đây tuy không phải là một bộ trang phục mới song
                      cũng vẫn là một trong số những skin hữu hạn hiếm có của{" "}
                      <strong>
                        <strong>Liên Quân</strong> Mobile
                      </strong>{" "}
                      bởi chỉ có thể sở hữu thông qua sổ sứ mệnh cách đây khá
                      lâu.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/9/photo-1-1628489557084424953016.jpg"
                      alt="4, LIÊN QUÂN MOBILE,LIÊN QUÂN,GÁI XINH,COSER,COSPLAY,COSPLAYER,TRANG ĐỖ,BÍT TẾT,CỘNG ĐỒNG MẠNG,CĐM,CỘNG ĐỒNG LIÊN QUÂN MOBILE,"
                      note=""
                    />
                    <p>
                      Nhìn chung, <strong>Trang Đỗ</strong> là một trong số
                      những nữ <strong>coser</strong> khiến cho cộng đồng game
                      thủ không chỉ của <strong>Liên Quân</strong> mà còn nhiều
                      tựa game khác cảm thấy mê mẩn bởi cách biến thân rất thần
                      thái và toát lên được nét đặc trưng của nhân vật trong
                      game. Hy vọng trong tương lai, sẽ có thêm nhiều tác phẩm
                      xuất sắc và nóng bỏng hơn nữa của nữ coser này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2020/12/28/photo-1-1609174345502782666263.jpg"
                      alt="5, LIÊN QUÂN MOBILE,LIÊN QUÂN,GÁI XINH,COSER,COSPLAY,COSPLAYER,TRANG ĐỖ,BÍT TẾT,CỘNG ĐỒNG MẠNG,CĐM,CỘNG ĐỒNG LIÊN QUÂN MOBILE,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2020/12/28/photo-1-16091741070031058085107.jpg"
                      alt="6, LIÊN QUÂN MOBILE,LIÊN QUÂN,GÁI XINH,COSER,COSPLAY,COSPLAYER,TRANG ĐỖ,BÍT TẾT,CỘNG ĐỒNG MẠNG,CĐM,CỘNG ĐỒNG LIÊN QUÂN MOBILE,"
                      note=""
                    />
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
