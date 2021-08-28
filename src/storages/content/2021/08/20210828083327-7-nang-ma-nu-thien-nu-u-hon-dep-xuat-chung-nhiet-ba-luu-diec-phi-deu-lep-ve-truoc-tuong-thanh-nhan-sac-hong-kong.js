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
"timestamp": '28/08/2021 08:33 AM',
"title": '7 nàng ma nữ Thiện Nữ U Hồn đẹp xuất chúng: Nhiệt Ba - Lưu Diệc Phi đều lép vế trước "tường thành nhan sắc Hong Kong"',
"description": 'Lưu Diệc Phi có khí chất thần tiên nhưng khi đóng vai ma nữ Nhiếp Tiểu Thiến lại thua xa đàn chị đình đám này.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/2c21baf2187e6dd577825d0b15c373b0-162927355140225107415.jpeg',
"alt": 'Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,',
"category": 'stars',
"date": '28/08/2021',
"time": '08:33 AM',
"link": '/7-nang-ma-nu-thien-nu-u-hon-dep-xuat-chung-nhiet-ba-luu-diec-phi-deu-lep-ve-truoc-tuong-thanh-nhan-sac-hong-kong',
"zcomponent": 'page_20210828083327',
"filepath": './20210828083327-7-nang-ma-nu-thien-nu-u-hon-dep-xuat-chung-nhiet-ba-luu-diec-phi-deu-lep-ve-truoc-tuong-thanh-nhan-sac-hong-kong.js'
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
  '7 nàng ma nữ Thiện Nữ U Hồn đẹp xuất chúng: Nhiệt Ba - Lưu Diệc Phi đều lép vế trước "tường thành nhan sắc Hong Kong"';
const author = "SU KEM,";
const source = "Trí Thức Trẻ";
const timestamp = "28/08/2021 08:33 AM";
const description =
  "Lưu Diệc Phi có khí chất thần tiên nhưng khi đóng vai ma nữ Nhiếp Tiểu Thiến lại thua xa đàn chị đình đám này.";
const link =
  "7-nang-ma-nu-thien-nu-u-hon-dep-xuat-chung-nhiet-ba-luu-diec-phi-deu-lep-ve-truoc-tuong-thanh-nhan-sac-hong-kong";
const tagparam = [
  "Nhiếp Tiểu Thiến",
  "Lưu Diệc Phi",
  "thiện nữ u hồn",
  "Dương Mịch",
  "trương gia nghê",
  "Vương Tổ Hiền",
  "Từ Hy Viên",
  "Chung Sở Hy",
  "Địch Lệ Nhiệt Ba",
  "Tân Thiện Nữ U Hồn",
  "Mỹ nhân Hoa ngữ",
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

export default function page_20210828083327() {
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
                      <strong>Lưu Diệc Phi</strong> có khí chất thần tiên nhưng
                      khi đóng vai ma nữ <strong>Nhiếp Tiểu Thiến</strong> lại
                      thua xa đàn chị đình đám này.
                    </p>
                    <p>
                      Nhắc đến hình tượng quỷ nữ trong các bộ phim truyền hình
                      và điện ảnh, có lẽ <strong>Nhiếp Tiểu Thiến</strong> của{" "}
                      <strong>Thiện Nữ U Hồn</strong> là nhân vật để lại cho
                      khán giả nhiều ấn tượng nhất. Diễn viên đảm nhận nhân vật
                      này đều là những mỹ nhân hàng đầu của làng giải trí Hoa
                      ngữ. Cùng điểm lại những nàng Nhiếp Tiểu Thiến trên màn
                      ảnh và tìm ra ai là thần tượng trong lòng bạn nhé!
                    </p>
                    <h5>
                      <strong>Từ Hy Viên</strong> -{" "}
                      <strong>Thiện Nữ U Hồn</strong> (2003)
                    </h5>
                    <p>
                      Năm 2003, <strong>Từ Hy Viên</strong> được giao cho vai
                      diễn ma nữ si tình <strong>Nhiếp Tiểu Thiến</strong> trong
                      bộ phim <strong>Thiện Nữ U Hồn</strong>, đóng cặp cùng với
                      Trần Hiểu Đông. Tuy nhiên, bộ phim này bị khán giả "ném
                      đá" tới tấp vì phim bị thần tượng hóa, Từ Hy Viên không có
                      nét ma mị, quyến rũ của ma nữ Nhiếp Tiểu Thiến mà lại dễ
                      thương và hiền lành.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/e8d2c37036c4a0985e03e8d0de982b17-16292735515091731651339.jpeg"
                      alt="1, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/006udwdnly1gbliprb9c5j316e1rlwot-1629273684372362295532.jpg"
                      alt="2, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/006udwdnly1gblipsca61j316e1rlthk-16292736844621305675159.jpg"
                      alt="3, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      Phim bị thần tượng hóa khiến hình tượng nhân vật ma nữ
                      khác hoàn toàn so với nguyên tác
                    </p>
                    <h5>
                      <strong>Địch Lệ Nhiệt Ba</strong> - Nghìn Lẻ Một Đêm
                      (2018)
                    </h5>
                    <p>
                      <strong>Địch Lệ Nhiệt Ba</strong> từng có cơ hội đảm nhận
                      vai ma nữ <strong>Nhiếp Tiểu Thiến</strong> trong bộ phim
                      Nghìn Lẻ Một Đêm. Tuy chỉ xuất hiện trong giấc mơ ngắn
                      ngủi, khi đi vào giấc ngủ của Đặng Luân, nhưng mỹ nhân Tân
                      Cương vẫn nhận được lời khen xinh đẹp và ma mị của khán
                      giả. Thậm chí, người xem còn hy vọng nữ diễn viên sẽ đóng
                      vai ma nữ Nhiếp Tiểu Thiên với tư cách nhân vật chính
                      trong tương lai.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/ff80cbfc7b-1629273684971523421973.jpg"
                      alt="4, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note="Cùng ánh mắt ma mị, Vương Tổ Hiền mang đến một Nhiếp Tiểu Thiến vừa yêu kiều, quyến rũ nhưng không kém phần oán hận"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/2c21baf2187e6dd577825d0b15c373b0-162927355140225107415.jpeg"
                      alt="5, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/55772ebd046d6d8de74ff932b4b51d5a-1629273551332717915260.jpeg"
                      alt="6, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      Nữ diễn viên gây ấn tượng mạnh với hai bộ trang phục trắng
                      và đen ma mị
                    </p>
                    <h5>
                      <strong>Chung Sở Hy</strong> - Thần Thám Bồ Tùng Linh
                      (2019)
                    </h5>
                    <p>
                      Năm 2019, <strong>Chung Sở Hy</strong> hóa thân thành nàng
                      ma nữ <strong>Nhiếp Tiểu Thiến</strong> trong phim điện
                      ảnh của Thành Long, mang tên Thần Thám Bồ Tùng Linh. Khác
                      hẳn với những Nhiếp Tiểu Thiến diện đồ trắng toát trước
                      đây, Chung Sở Hy mang đến một ma nữ mới mẻ khi khoác lên
                      mình bộ xiêm áo màu đỏ rực rỡ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/56f24e378f780fe5d6fee5da443311f4-1629273550587607352170.jpeg"
                      alt="7, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/293f93ea416fc387d513057c7ad6f737-16292735506011721231477.jpeg"
                      alt="8, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/18/dd00f535fb73f023ccc053a9403a912a-16292735505691333126889.gif"
                      alt="27, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/18/a2ff71362bc6247af126f85e15f003ee-16292735505382101046833.gif"
                      alt="28, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      Với đôi lông mày được kẻ hếch lên, ánh mắt sắc bén cùng
                      đôi môi đỏ mọng làm toát lên vẻ yêu kiều, quyến rũ của một
                      ma nữ. Thế nhưng, <strong>Nhiếp Tiểu Thiến</strong> của{" "}
                      <strong>Chung Sở Hy</strong> lại thiếu đi một chút u hận
                      mà một ma nữ nên có.
                    </p>
                    <h5>
                      <strong>Lưu Diệc Phi</strong> -{" "}
                      <strong>Thiện Nữ U Hồn</strong> 4 (2011)
                    </h5>
                    <p>
                      Vai diễn <strong>Nhiếp Tiểu Thiến</strong> của{" "}
                      <strong>Lưu Diệc Phi</strong> ở phim điện ảnh{" "}
                      <strong>Thiện Nữ U Hồn</strong> 4 không phải là ma nữ, mà
                      là một con Hồ yêu. Trong bản này, nội dung được thay đổi
                      khá nhiều, nam chính từ chàng thư sinh Ninh Thái Thần giờ
                      chuyển sang đạo sĩ trừ yêu Yến Xích Hà (Quách Thiếu Quần).
                      Nhiếp Tiểu Thiến còn bị mất trí nhớ và rơi vào chuyện tình
                      tay ba với hai người trên.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/6bfe5d3e8214d8370191dd7d805aeb59-162927355098560806276.jpeg"
                      alt="9, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/sxzv2hc41g-700x466-16292747910632053696826.jpg"
                      alt="10, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/nhan-sac-luu-diec-phi-2011c-1024x744-16292747910041921090985.jpg"
                      alt="11, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/b2494a2c9f2b0ba6096233a00a70bdb0-16292735508491946932272.jpeg"
                      alt="12, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/704f1dd57f2ce4b5ea689fe044212778-16292735511251207475675.jpeg"
                      alt="13, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/ca2b47e7a7da0b54b79601255759f40b-162927355104256945965.jpg"
                      alt="14, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/18/c0a38881ly1gheidhfnxbg20qk0c44qr-1629273684841223669067.gif"
                      alt="29, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      Tạo hình đơn giản của <strong>Lưu Diệc Phi</strong> trong
                      phim
                    </p>
                    <p>
                      <strong>Nhiếp Tiểu Thiến</strong> của{" "}
                      <strong>Lưu Diệc Phi</strong> có u buồn nhưng lại thiếu đi
                      sự yêu kiều
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Tuy cải biên khá nhiều nhưng{" "}
                      <strong>Thiện Nữ U Hồn</strong> 4 vẫn nhận được lời khen
                      mới mẻ. Nhân vật Nhiếp Tiểu Thiên dù thiếu sự yêu kiều của
                      ma nữ nhưng trong ánh mắt lại toát lên nỗi oán hận và âu
                      lo.
                    </p>
                    <h5>
                      <strong>Dương Mịch</strong> - Liêu Trai Chí Dị Chi Tiểu
                      Thiến (2007)
                    </h5>
                    <p>
                      Trong bộ phim Liêu Trai Chí Dị - Chi Tiểu Thiến (2007),{" "}
                      <strong>Dương Mịch</strong> cũng từng đảm nhận nhân vật ma
                      nữ <strong>Nhiếp Tiểu Thiến</strong>. Dù tạo hình có phần
                      đơn giản nhưng nhan sắc tươi trẻ, non nớt của cô lúc 19
                      tuổi vẫn hút mắt người xem. Nội dung phim không có gì mới
                      mẻ nhưng vì Dương Mịch đóng cặp cùng nam thần Hồ Ca (trong
                      vai Ninh Thái Thần) nên nhận được sự yêu thích của khán
                      giả.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/unnamed-1629274417551990831267.jpg"
                      alt="15, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/8e43d7ce59d744c0b6081ec21f2a0f0d-16292744174951665150837.jpeg"
                      alt="16, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/005zwiajgy1gbo4ncl3s5j30ir0s3jup-16292744495391850962534.jpg"
                      alt="17, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/006eivdfgy1gpz9sx541pj30ly0rgnhp-16292744496131408593820.jpg"
                      alt="18, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/006eivdfgy1gpz9t2e5f9j30ly0rgnhr-16292744496201704436942.jpg"
                      alt="19, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/18/006eivdfgy1gpz9tuqwgkg30ku0d1u11-16292736842511780249941.gif"
                      alt="30, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      Dù chỉ mới 19 tuổi nhưng <strong>Dương Mịch</strong> vẫn
                      mang đến một ma nữ Nhiếp Tiểu Thiên vừa ai oán, lại bi
                      thương
                    </p>
                    <h5>
                      <strong>Trương Gia Nghê</strong> - Thiên Sư Chung Quỳ
                      (2010)
                    </h5>
                    <p>
                      Trong bộ phim Thiên Sư Chung Quỳ,{" "}
                      <strong>Trương Gia Nghê</strong> đóng một lúc hai vai, một
                      người là tiểu thư nhà giàu có Lâm Tiểu Điệp, người còn lại
                      là ma nữ <strong>Nhiếp Tiểu Thiến</strong>. Với đôi mắt
                      sáng trong như nước và khuôn mặt khả ái, Trương Gia Nghê
                      mang đến một ma nữ vừa lương thiện, lại có chút u buồn
                      nhưng không kém phần bí ẩn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/18/25c5920f633e7a609da94a0e2e921656-1629273551544822322032.jpeg"
                      alt="20, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/dd984dd8e3ea43b33be68235dd12a021-16292735515742033655133.jpeg"
                      alt="21, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/60a6f4a98dd290d132dde4b319b9fde6-16292735520151549583644.jpeg"
                      alt="22, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      Thời điểm đó, truyền thông Trung Quốc còn ca ngợi{" "}
                      <strong>Trương Gia Nghê</strong> là một trong những nữ
                      diễn viên đảm nhận Nhiếp Tiểu Thiên đẹp nhất nhì Cbiz, chỉ
                      sau <strong>Vương Tổ Hiền</strong>.
                    </p>
                    <h5>
                      <strong>Vương Tổ Hiền</strong> -{" "}
                      <strong>Thiện Nữ U Hồn</strong> (1987)
                    </h5>
                    <p>
                      Cho đến nay, <strong>Nhiếp Tiểu Thiến</strong> của{" "}
                      <strong>Vương Tổ Hiền</strong> trong{" "}
                      <strong>Thiện Nữ U Hồn</strong> (1987) vẫn là bản kinh
                      điển nhất và là quy chuẩn để so sánh với các phiên bản sau
                      này. Sở hữu vẻ đẹp diễm lệ, thanh khiết lại có sự u sầu,
                      oán giận, đặc biệt diễn xuất điêu luyện khiến khán giả
                      chìm đắm trong nhân vật Nhiếp Tiểu Thiến của Ngọc nữ Hồng
                      Kông.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/b21c8701a18b87d6e2725b3a577a13301f30fd5a-16292736847691402080090.jpeg"
                      alt="23, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/18/32fa828ba61ea8d3d7d0fe8f4fb5c148271f5895-16292736845641446961348.jpeg"
                      alt="24, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/18/eedc54adf4b42a7b5a70cc3ff674459e-16292735511821521763534.gif"
                      alt="31, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/18/6d5e0aa463d747c9ed9cb8399db01f86-16292735507491915669365.gif"
                      alt="32, Nhiếp Tiểu Thiến,Lưu Diệc Phi,thiện nữ u hồn,Dương Mịch,trương gia nghê,Vương Tổ Hiền,Từ Hy Viên,Chung Sở Hy,Địch Lệ Nhiệt Ba,Tân Thiện Nữ U Hồn,Mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      <strong>Nhiếp Tiểu Thiến</strong> của{" "}
                      <strong>Vương Tổ Hiền</strong> chính là bản kinh điển,
                      không ai có thể vượt qua
                    </p>
                    <p>
                      Đóng cặp cùng tài tử Trương Quốc Vinh,{" "}
                      <strong>Vương Tổ Hiền</strong> mang đến một chuyện tình
                      giữa người và yêu đầy xúc động. Tuy phim đã phát sóng cách
                      đây khá lâu nhưng người hâm mộ vẫn dành riêng cho Vương Tổ
                      Hiền với biệt danh "ma nữ{" "}
                      <strong>Nhiếp Tiểu Thiến</strong> xinh đẹp và si tình
                      nhất".
                    </p>

                    <p>Nguồn ảnh: Tổng hợp</p>
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
