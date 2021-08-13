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
"title": 'Tạo hình 5 nàng Tiểu Long Nữ xứ Trung: Lý Nhược Đồng - Lưu Diệc Phi vững ngôi thần tiên tỷ tỷ, 2 phiên bản mới nhất đua nhau rời xa nguyên tác',
"description": 'Thật bất ngờ khi có 1 nàng Tiểu Long Nữ lại gia nhập hội ghiền đùi gà!',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-16286933955911077975879.jpg',
"alt": 'Tiểu Long Nữ,Lưu Diệc Phi,Phạm Văn Phương,Mao Hiểu Huệ,Trần Nghiên Hy,Lý Nhược Đồng,Thần điêu đại hiệp,',
"category": 'stars',
"date": '12/08/2021',
"time": '05:31 PM',
"link": '/tao-hinh-5-nang-tieu-long-nu-xu-trung-ly-nhuoc-dong-luu-diec-phi-vung-ngoi-than-tien-ty-ty-2-phien-ban-moi-nhat-dua-nhau-roi-xa-nguyen-tac',
"zcomponent": 'page_20210812173119',
"filepath": './20210812173119-tao-hinh-5-nang-tieu-long-nu-xu-trung-ly-nhuoc-dong-luu-diec-phi-vung-ngoi-than-tien-ty-ty-2-phien-ban-moi-nhat-dua-nhau-roi-xa-nguyen-tac.js'
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
  "Tạo hình 5 nàng Tiểu Long Nữ xứ Trung: Lý Nhược Đồng - Lưu Diệc Phi vững ngôi thần tiên tỷ tỷ, 2 phiên bản mới nhất đua nhau rời xa nguyên tác";
const author = "CHÚ CÁ TRÊ X CHIM VÀNH KHEN,";
const source = "Trí Thức Trẻ";
const timestamp = "12/08/2021 05:31 PM";
const description =
  "Thật bất ngờ khi có 1 nàng Tiểu Long Nữ lại gia nhập hội ghiền đùi gà!";
const link =
  "tao-hinh-5-nang-tieu-long-nu-xu-trung-ly-nhuoc-dong-luu-diec-phi-vung-ngoi-than-tien-ty-ty-2-phien-ban-moi-nhat-dua-nhau-roi-xa-nguyen-tac";
const tagparam = [
  "Tiểu Long Nữ",
  "Lưu Diệc Phi",
  "Phạm Văn Phương",
  "Mao Hiểu Huệ",
  "Trần Nghiên Hy",
  "Lý Nhược Đồng",
  "Thần điêu đại hiệp",
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

export default function page_20210812173119() {
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
                    <h5>Lý Nhược Đồng </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-16286933955911077975879.jpg"
                      alt="1, Tiểu Long Nữ,Lưu Diệc Phi,Phạm Văn Phương,Mao Hiểu Huệ,Trần Nghiên Hy,Lý Nhược Đồng,Thần điêu đại hiệp,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-16286934003822123739565.jpg"
                      alt="2, Tiểu Long Nữ,Lưu Diệc Phi,Phạm Văn Phương,Mao Hiểu Huệ,Trần Nghiên Hy,Lý Nhược Đồng,Thần điêu đại hiệp,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/-16286934319231567966797.jpg"
                      alt="3, Tiểu Long Nữ,Lưu Diệc Phi,Phạm Văn Phương,Mao Hiểu Huệ,Trần Nghiên Hy,Lý Nhược Đồng,Thần điêu đại hiệp,"
                      note=""
                    />

                    <p>
                      <strong>Lý Nhược Đồng</strong> được xem là phiên bản{" "}
                      <strong>Tiểu Long Nữ</strong> kinh điển nhất, sát với
                      nguyên tác nhất. Trong phim, người đẹp "chuyên trị" những
                      bộ đồ lụa trắng giản dị đúng như mô tả của nhà văn Kim
                      Dung, kèm thêm đôi bông tai hạt ngọc mini với mái tóc đen
                      nhánh chải dài. Sẵn nét thanh tú nên dù không trang điểm
                      quá đậm, Lý Nhược Đồng vẫn 10 phần xinh đẹp, vừa ngây thơ
                      trong sáng, vừa chín chắn nghiêm túc.
                    </p>
                    <h5>Phạm Văn Phương</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-16286940544741680051466.jpg"
                      alt="4, Tiểu Long Nữ,Lưu Diệc Phi,Phạm Văn Phương,Mao Hiểu Huệ,Trần Nghiên Hy,Lý Nhược Đồng,Thần điêu đại hiệp,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-1628694098752264722955.jpg"
                      alt="5, Tiểu Long Nữ,Lưu Diệc Phi,Phạm Văn Phương,Mao Hiểu Huệ,Trần Nghiên Hy,Lý Nhược Đồng,Thần điêu đại hiệp,"
                      note=""
                    />

                    <p>
                      Trong vai <strong>Tiểu Long Nữ</strong>,{" "}
                      <strong>Phạm Văn Phương</strong> chưa bộc lộ rõ được phong
                      thái tiên tử phiêu diêu, thoát tục, tuy nhiên bù lại, cô
                      cũng có vẻ điềm đạm nhất định. Đôi mắt và chiếc mũi nhỏ
                      khiến Phạm Văn Phương trở nên kém ngây thơ, ngoài ra cũng
                      không hoàn toàn phù hợp với tạo hình cổ trang. Cách vẽ
                      lông mày của người đẹp quá đậm và cong, khiến gương mặt
                      nhân vật có phần sắc sảo.
                    </p>
                    <h5>Lưu Diệc Phi</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-1628693853686378005473.jpg"
                      alt="6, Tiểu Long Nữ,Lưu Diệc Phi,Phạm Văn Phương,Mao Hiểu Huệ,Trần Nghiên Hy,Lý Nhược Đồng,Thần điêu đại hiệp,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-16286935668021273076057.jpg"
                      alt="7, Tiểu Long Nữ,Lưu Diệc Phi,Phạm Văn Phương,Mao Hiểu Huệ,Trần Nghiên Hy,Lý Nhược Đồng,Thần điêu đại hiệp,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-16286946632271215330213.jpg"
                      alt="8, Tiểu Long Nữ,Lưu Diệc Phi,Phạm Văn Phương,Mao Hiểu Huệ,Trần Nghiên Hy,Lý Nhược Đồng,Thần điêu đại hiệp,"
                      note=""
                    />
                    <p>
                      Ở độ tuổi chưa đầy 20, <strong>Lưu Diệc Phi</strong> giữ
                      được nét đơn thuần, ngây ngô, phù hợp với vai{" "}
                      <strong>Tiểu Long Nữ</strong>. Cô sở hữu vẻ đẹp thần tiên
                      thoát tục với gương mặt thanh thoát, nhỏ nhắn, làn da
                      trắng muốt. Dù không được đánh giá quá cao về diễn xuất và
                      trình diễn võ thuật, song lợi thế ngoại hình đã giúp mỹ
                      nhân sinh năm 1987 trở thành một trong những phiên bản
                      Tiểu Long Nữ giống với nguyên tác nhất.
                    </p>
                    <RelationNewsInPage category={category} />

                    <h5>Trần Nghiên Hy</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-16286943507351616232743.jpg"
                      alt="9, Tiểu Long Nữ,Lưu Diệc Phi,Phạm Văn Phương,Mao Hiểu Huệ,Trần Nghiên Hy,Lý Nhược Đồng,Thần điêu đại hiệp,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-16286942786271696597909.jpg"
                      alt="10, Tiểu Long Nữ,Lưu Diệc Phi,Phạm Văn Phương,Mao Hiểu Huệ,Trần Nghiên Hy,Lý Nhược Đồng,Thần điêu đại hiệp,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-16286942442181526526432.jpeg"
                      alt="11, Tiểu Long Nữ,Lưu Diệc Phi,Phạm Văn Phương,Mao Hiểu Huệ,Trần Nghiên Hy,Lý Nhược Đồng,Thần điêu đại hiệp,"
                      note=""
                    />

                    <p>
                      <strong>Trần Nghiên Hy</strong> là trường hợp độc lạ của{" "}
                      <strong>Thần Điêu Đại Hiệp</strong> bản phim. Người đẹp có
                      gương mặt và vóc dáng bầu bĩnh dễ thương, hoàn toàn không
                      gợi lên chút khí chất thần tiên nào. Tóc của cô được cách
                      điệu theo kiểu Na Tra, có lẽ mục đích là để gắn mấy dải
                      lụa lên nhằm tăng tiên khí? Trang phục của Trần Nghiên Hy
                      cũng được cách điệu khi sử dụng nhiều màu sắc khác như be,
                      hồng thay cho sắc trắng đơn thuần. Nhìn chung, tạo hình
                      này không gây được thiện cảm và khiến chính cô bị ném đá.
                    </p>
                    <h5>Mao Hiểu Huệ</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-16286945315101885536863.png"
                      alt="12, Tiểu Long Nữ,Lưu Diệc Phi,Phạm Văn Phương,Mao Hiểu Huệ,Trần Nghiên Hy,Lý Nhược Đồng,Thần điêu đại hiệp,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-1628694512189877863971.jpg"
                      alt="13, Tiểu Long Nữ,Lưu Diệc Phi,Phạm Văn Phương,Mao Hiểu Huệ,Trần Nghiên Hy,Lý Nhược Đồng,Thần điêu đại hiệp,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-1628694453897230397484.jpg"
                      alt="14, Tiểu Long Nữ,Lưu Diệc Phi,Phạm Văn Phương,Mao Hiểu Huệ,Trần Nghiên Hy,Lý Nhược Đồng,Thần điêu đại hiệp,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/11/photo-1-16286944444131829201877.jpg"
                      alt="15, Tiểu Long Nữ,Lưu Diệc Phi,Phạm Văn Phương,Mao Hiểu Huệ,Trần Nghiên Hy,Lý Nhược Đồng,Thần điêu đại hiệp,"
                      note=""
                    />

                    <p>
                      Dù chưa ra mắt nhưng những hình ảnh từ phim trường{" "}
                      <strong>Thần Điêu Đại Hiệp</strong> 2019 của{" "}
                      <strong>Mao Hiểu Huệ</strong> cũng khiến netizen bàn tán
                      xôn xao. Nữ diễn viên trẻ được nhận định có đường nét
                      khuôn mặt quá hiện đại, lanh lợi, chưa phù hợp với vai{" "}
                      <strong>Tiểu Long Nữ</strong>. Thông qua hình chụp, có thể
                      thấy biểu cảm của cô còn đơ cứng. Tóc và phục trang của
                      Mao Hiểu Huệ đã được cách điệu hơn đôi chút so với các
                      phiên bản cũ, mang lại vẻ tươi mới cho một tác phẩm quen
                      thuộc.
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
