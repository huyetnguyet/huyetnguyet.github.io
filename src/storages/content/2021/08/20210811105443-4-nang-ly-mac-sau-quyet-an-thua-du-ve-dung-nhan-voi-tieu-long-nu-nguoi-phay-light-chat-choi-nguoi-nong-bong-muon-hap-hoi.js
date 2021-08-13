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
"timestamp": '11/08/2021 10:54 AM',
"title": '4 nàng Lý Mạc Sầu quyết ăn thua đủ về dung nhan với Tiểu Long Nữ: Người "phẩy" light chất chơi, người nóng bỏng muốn "hấp hối"',
"description": 'Bên cạnh bộ đôi nhân vật chính, Lý Mạc Sầu cũng là vai diễn luôn được khán giả quan tâm ở mỗi phiên bản phim Thần Điêu Đại Hiệp.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283064376731058381652.jpg',
"alt": 'Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,',
"category": 'stars',
"date": '11/08/2021',
"time": '10:54 AM',
"link": '/4-nang-ly-mac-sau-quyet-an-thua-du-ve-dung-nhan-voi-tieu-long-nu-nguoi-phay-light-chat-choi-nguoi-nong-bong-muon-hap-hoi',
"zcomponent": 'page_20210811105443',
"filepath": './20210811105443-4-nang-ly-mac-sau-quyet-an-thua-du-ve-dung-nhan-voi-tieu-long-nu-nguoi-phay-light-chat-choi-nguoi-nong-bong-muon-hap-hoi.js'
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
  '4 nàng Lý Mạc Sầu quyết ăn thua đủ về dung nhan với Tiểu Long Nữ: Người "phẩy" light chất chơi, người nóng bỏng muốn "hấp hối"';
const author = "CHÚ CÁ TRÊ X CHIM VÀNH KHEN,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "11/08/2021 10:54 AM";
const description =
  "Bên cạnh bộ đôi nhân vật chính, Lý Mạc Sầu cũng là vai diễn luôn được khán giả quan tâm ở mỗi phiên bản phim Thần Điêu Đại Hiệp.";
const link =
  "4-nang-ly-mac-sau-quyet-an-thua-du-ve-dung-nhan-voi-tieu-long-nu-nguoi-phay-light-chat-choi-nguoi-nong-bong-muon-hap-hoi";
const tagparam = [
  "Lý Mạc Sầu",
  "Thần điêu đại hiệp",
  "Mạnh Quảng Mỹ",
  "Trương Hinh Dư",
  "Mao Lâm Lâm",
  "trần hồng",
  "star style",
  "thần điêu đại hiệp (2014)",
  "tạo hình trong phim",
  "tạo hình nhân vật",
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

export default function page_20210811105443() {
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
                      <strong>Tạo hình trong phim</strong> của nàng{" "}
                      <strong>Lý Mạc Sầu</strong> phiên bản 1998 đậm vẻ tiên tử,
                      nhã nhặn, xinh đẹp nhất trong dàn cast. Với các chi tiết
                      tạo hình như lông mày mảnh, makeup tông hồng, lối trang
                      điểm khá sến đặc trưng 1 thời đem lại cho{" "}
                      <strong>Trần Hồng</strong> diện mạo hiền dịu và có đôi
                      phần "kẹo ngọt" hơn hẳn các phiên bản Lý Mạc Sầu khác.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283064376731058381652.jpg"
                      alt="1, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628306461324270507185.jpg"
                      alt="2, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <p>
                      Ngoài đời, <strong>Trần Hồng</strong> sở hữu gương mặt
                      trong trẻo, đôi mắt long lanh, khí chất xuất chúng. Vào
                      thập niên 80 - 90, cô được đánh giá là nữ diễn viên nổi
                      tiếng nhất màn ảnh nhỏ xứ Trung. Thậm chí, Trần Hồng còn
                      được mệnh danh là mỹ nữ có nhan sắc vượt qua cả Vương Tổ
                      Hiền.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-1628306905840838552725.jpg"
                      alt="3, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283072182891070805772.jpeg"
                      alt="4, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283071931691698360213.jpg"
                      alt="5, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283072654381230364145.jpg"
                      alt="6, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <p>Một số tạo hình điện ảnh khác của nữ diễn viên</p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628307103104272281549.jpg"
                      alt="7, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628307092334838212588.jpg"
                      alt="8, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <p>
                      Hiện tại, dù đã ngoài 50 nhưng <strong>Trần Hồng</strong>{" "}
                      vẫn khiến netizen phải bất ngờ trước vẻ ngoài quyến rũ,
                      quý phái... của mình. Có thể thấy, người đẹp vẫn sở hữu
                      nhan sắc và vóc dáng "hack" tuổi, duy trì được độ trẻ
                      trung vượt thời gian.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628306598235808758170.jpg"
                      alt="9, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283077361761447900394.jpg"
                      alt="10, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <p>
                      Xuất phát điểm là một người mẫu thời trang{" "}
                      <strong>Mạnh Quảng Mỹ</strong> được mệnh danh là "
                      <strong>Lý Mạc Sầu</strong> gợi cảm nhất màn ảnh" bởi
                      phong cách nóng bỏng, vóc dáng chuẩn mực của mình. Một đặc
                      điểm tạo hình gây chú ý của Lý Mạc Sầu phiên bản 2006 nằm
                      ở mái tóc, khi đã bắt trend highlight đang rất thịnh hành
                      thời đó cho một nhân vật cổ trang. Mái tóc tím cùng
                      eyeliner sắc nét đã tạo nên thương hiệu của 1 trong Lý Mạc
                      Sầu tàn ác nhất màn ảnh.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-16283123023711393594971.jpg"
                      alt="11, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283123835471932531913.jpg"
                      alt="12, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <p>
                      Với chiều cao khủng 1m78 và thân hình gợi cảm trứ danh, sự
                      nghiệp nghệ thuật của <strong>Mạnh Quảng Mỹ</strong> có đà
                      thăng tiến thuận lợi. Người đẹp không ngại phô trổ đường
                      cong 3 vòng nóng bỏng của mình trong những lần xuất hiện.
                      Gương mặt của cô cũng được nhận xét là góc cạnh với sống
                      mũi cao, chiếc cằm Vline. Đôi gò má cao khiến người đẹp
                      thêm phần sắc sảo.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628312517338989805847.jpg"
                      alt="13, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628312280811613052756.jpg"
                      alt="14, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Vốn là mỹ nhân nức tiếng nên sự góp mặt của{" "}
                      <strong>Trương Hinh Dư</strong> trong{" "}
                      <strong>Thần Điêu Đại Hiệp</strong> 2014 rất được mong
                      chờ. Trong phim, phần mày và mắt được chú ý với lối makeup
                      đậm, khiến ánh nhìn của <strong>Lý Mạc Sầu</strong> luôn
                      toát ra vẻ sắc lạnh. Bên cạnh đó, đường nét hài hoà, thon
                      gọn trên khuôn mặt của nữ diễn viên cũng khiến khán giả
                      chẳng nỡ ghét kẻ ác phụ này.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-1628312898503964409089.jpg"
                      alt="15, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283131224891667117831.jpg"
                      alt="16, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628313636958963831668.jpg"
                      alt="17, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283128995961047656358.jpg"
                      alt="18, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628313318715854433849.jpg"
                      alt="19, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <p>
                      Tương tự như phiên bản phim năm 1998,{" "}
                      <strong>Thần Điêu Đại Hiệp</strong> 2014 cũng gây nên
                      chuyện ngược đời khi <strong>Lý Mạc Sầu</strong> được nhận
                      định có phong thái thần tiên, thoát tục hơn cả Tiểu Long
                      Nữ. Tạo hình của "cô cô" của phiên bản này thậm chí còn bị
                      nhận xét là "mặt bánh bao, tóc đùi gà" đầy ngao ngán.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283135012041420262917.jpg"
                      alt="20, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />

                    <p>
                      Nổi lên từ một người mẫu quảng cáo trên mạng,{" "}
                      <strong>Trương Hinh Dư</strong> được netizen gọi tên là
                      "đệ nhất mỹ nhân mạng" vì gương mặt kiều diễm và vẻ ngoài
                      nóng bỏng của mình. Phong cách gợi cảm cũng là hướng đi
                      xuyên suốt của cô trong hành trình làm nghề hơn 10 năm.
                      Người đẹp sở hữu vóc dáng nuột nà, làn da trắng hồng, đặc
                      biệt là vòng 1 hấp dẫn luôn hút mắt người xem.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-1628312767647221099243.jpg"
                      alt="21, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283127853402146117852.png"
                      alt="22, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/-1628312745282739540684.jpg"
                      alt="23, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628312731050394573506.jpg"
                      alt="24, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />

                    <p>
                      Dù chưa chính thức trình chiếu nhưng tạo hình của{" "}
                      <strong>Mao Lâm Lâm</strong> trong phiên bản phim mới nhất
                      cũng khiến công chúng thích thú. Với lối trang điểm đậm và
                      dùng các màu tông trầm, lông mày sắc bén, Mao Lâm Lâm toát
                      lên nét cô độc và ma mị cần có ở một{" "}
                      <strong>Lý Mạc Sầu</strong>. Nữ diễn viên cũng nuôi được
                      mái tóc dài ấn tượng, và tạo hình kiểu tóc cầu kỳ cũng thu
                      hút ánh nhìn của netzien.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-1628313805724397908309.png"
                      alt="25, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-16283138160051555369836.jpg"
                      alt="26, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628314128072508829112.jpg"
                      alt="27, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <p>
                      Sở hữu gương mặt đậm nét Á Đông,{" "}
                      <strong>Mao Lâm Lâm</strong> là cái tên sáng giá cho nhiều
                      dự án cổ trang một vài năm trở lại đây. Các đường nét trên
                      khuôn mặt nữ diễn viên đều hanh tú, sắc nét, níu kéo cái
                      nhìn của người xem ở mỗi phân cảnh mình xuất hiện. Cô gần
                      như hợp với mọi layout makeup khác nhau, từ nhẹ nhàng nhàn
                      nhạt đến sắc sảo, ấn tượng. Ở các dự án trước, Mao Lâm Lâm
                      đều được đánh giá cao nhờ thần thái, biểu cảm phù hợp tâm
                      lý nhân vật.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-1628313840657305084122.jpg"
                      alt="28, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628313882378339640187.jpg"
                      alt="29, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628313897821858429028.jpg"
                      alt="30, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/photo-1-1628313869928934233366.jpg"
                      alt="31, Lý Mạc Sầu,Thần điêu đại hiệp,Mạnh Quảng Mỹ,Trương Hinh Dư,Mao Lâm Lâm,trần hồng,star style,thần điêu đại hiệp (2014),tạo hình trong phim,tạo hình nhân vật,"
                      note=""
                    />
                    <p>Ảnh: Sưu tầm</p>
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
