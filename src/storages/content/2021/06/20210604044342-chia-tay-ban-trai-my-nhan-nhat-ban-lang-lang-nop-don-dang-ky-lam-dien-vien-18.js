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

 <ContentItem title="Chia tay bạn trai, mỹ nhân Nhật Bản lẳng lặng nộp đơn đăng ký làm diễn viên 18+"
content="Remu Suzumori đã có chút chia sẻ về quá khứ của cô nàng và những câu chuyện xung quanh đời sống của mình." 
src="https://gamek.mediacdn.vn/133514250583805952/2021/6/4/photo-1-16227968502611694022836.jpg" 
alt="images, Remu Suzumori, " 
category="images" 
time="04/06/2021 04:43 PM" 
link="/chia-tay-ban-trai-my-nhan-nhat-ban-lang-lang-nop-don-dang-ky-lam-dien-vien-18"/>

{title="Chia tay bạn trai, mỹ nhân Nhật Bản lẳng lặng nộp đơn đăng ký làm diễn viên 18+",
content="Remu Suzumori đã có chút chia sẻ về quá khứ của cô nàng và những câu chuyện xung quanh đời sống của mình." ,
src="https://gamek.mediacdn.vn/133514250583805952/2021/6/4/photo-1-16227968502611694022836.jpg" ,
alt="images, Remu Suzumori, " ,
category="images" ,
time="04/06/2021 04:43 PM" ,
link="/chia-tay-ban-trai-my-nhan-nhat-ban-lang-lang-nop-don-dang-ky-lam-dien-vien-18",component="page_20210604044342",
filepath="../storages/content/20210604044342-chia-tay-ban-trai-my-nhan-nhat-ban-lang-lang-nop-don-dang-ky-lam-dien-vien-18.js"},

Chia tay bạn trai, mỹ nhân Nhật Bản lẳng lặng nộp đơn đăng ký làm diễn viên 18+
Remu Suzumori đã có chút chia sẻ về quá khứ của cô nàng và những câu chuyện xung quanh đời sống của mình.
https://gamek.mediacdn.vn/133514250583805952/2021/6/4/photo-1-16227968502611694022836.jpg
images, Remu Suzumori, 
images
04/06/2021
04:43 PM
/chia-tay-ban-trai-my-nhan-nhat-ban-lang-lang-nop-don-dang-ky-lam-dien-vien-18
page_20210604044342
../storages/content/20210604044342-chia-tay-ban-trai-my-nhan-nhat-ban-lang-lang-nop-don-dang-ky-lam-dien-vien-18.js




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
  "Chia tay bạn trai, mỹ nhân Nhật Bản lẳng lặng nộp đơn đăng ký làm diễn viên 18+";
const author = "DS";
const source = "Trí Thức Trẻ";
const date = "04/06/2021";
const time = "04:43 PM";
const description =
  "Remu Suzumori đã có chút chia sẻ về quá khứ của cô nàng và những câu chuyện xung quanh đời sống của mình.";
const link =
  "chia-tay-ban-trai-my-nhan-nhat-ban-lang-lang-nop-don-dang-ky-lam-dien-vien-18";
const tagparam = ["18", "remu-suzumori"];
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

export default function page_20210604044342() {
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
              >
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
              <div className="author">{author}</div> - Theo {source} | {date}{" "}
              {time}
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
                      Remu Suzumori sinh năm 1997, gia nhập ngành công nghiệp
                      phim 18+ vào năm 2019. Dù chỉ mới vừa mới gia nhập, thế
                      nhưng cô nàng đã gây ấn tượng rất mạnh bởi nhan sắc xinh
                      lung linh cùng thân hình mảnh mai chẳng khác gì một người
                      mẫu. Thế nên, cô nàng đã nhanh chóng có được 1 lượng fan
                      khổng lồ dù chỉ mới gia nhập ngành phim người lớn dù chỉ
                      chưa tới 1 năm.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/4/photo-1-16227968502611694022836.jpg"
                      alt="images, Remu Suzumori, "
                      note=""
                    />
                    <p>
                      {" "}
                      Vào giữa năm 2019, Remu Suzumori này đã tham gia cuộc thi
                      Miss ID. Đây là 1 cuộc thi bình chọn các cô gái idol đa
                      lĩnh vực khá nổi tiếng tại Nhật Bản do công ty Kodansha tổ
                      chức, được bắt đầu tổ chức từ năm 2012. Dù không dành giải
                      cao, nhưng Remu cũng đã đạt giải thí sinh ăn ảnh nhất
                      giải.
                    </p>
                    <p>
                      Theo Remu chia sẻ, cô nàng đã có lần đầu tiên làm chuyện
                      ấy ngay từ hồi cấp 3. Khi đó, bạn trai của cô nàng là một
                      sinh viên đại học. Dù vậy mối tình của cả hai không bền
                      lâu mà chấm dứt chỉ sau 3 tháng. Về sau, cô nàng không có
                      thêm một mối tình nào nữa, lý do là vì cô nàng tự mình nộp
                      đơn và quyết định tham gia vào ngành công nghiệp 18+.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/-1622797625688638913185.jpg"
                      alt="images, Remu Suzumori, "
                      note=""
                    />
                    <p>
                      Với nhan sắc xinh đẹp, không khó hiểu vì sao Remu Suzumori
                      được hãng làm phim Prestige "chấm" và đưa làm diễn viên
                      độc quyền của studio này. Cô nàng bắt đầu trình làng từ
                      tháng 3/2019 và cũng dần được hãng này quảng bá như "một
                      viên ngọc thô nhưng sẽ sớm tỏa sáng". Thông thường, mỗi
                      khi bắt đầu xuất hiện lần đầu để quảng bá thì mọi cô gái
                      đều được gắn liền với một tài lẻ nào đấy, và Remu chọn món
                      đồ chơi Kendama là thứ gắn liền với cô nàng.
                    </p>
                    <p>
                      Về kiểu diễn viên nữ trên các sản phẩm 18+, Remu Suzumori
                      cho rằng kiểu nào thì cô nàng cũng thích cả, từ mẫu con
                      gái "quốc sắc thiên hương", xinh xắn đáng yêu cho tới cả
                      dạng gyaru (một dạng trang điểm sặc sỡ theo kiểu Nhật
                      Bản). Từ thời đi học, Remu đã rất thích dạng Gyaru với mẫu
                      tóc vàng nổi bật, nhưng cô nàng chưa bao giờ dám làm như
                      vậy nên chỉ "ước ao" mà thôi.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/4/-1622797653786403594517.jpg"
                      alt="images, Remu Suzumori, "
                      note=""
                    />
                    <p>
                      Trong tình yêu, Remu tự coi mình là một người "cuồng
                      nhiệt". Khi yêu ai, cô nàng chỉ biết đến một mình người đó
                      và không quan tâm những gì diễn ra xung quanh nữa. Thậm
                      chí, cô nàng còn không muốn rời xa người thương một chút
                      nào và chỉ muốn được gắn bó với người ấy hơn nữa. Cô nàng
                      chỉ cần một người hiểu, quan tâm và đáp ứng được cho mình
                      trong chuyện ấy.
                    </p>
                    <p>
                      Về chuyện tình dục, cô gái sinh năm 1997 cho rằng cô không
                      quá quan tâm đến kích thước to nhỏ cho lắm. Tuy nhiên, thứ
                      mà Remu muốn là một người bạn trai đáp ứng được điều kiện
                      là đủ "cứng cỏi" để làm chuyện ấy khiến cô nàng thỏa mãn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/4/photo-2-1622796852071613802775.jpg"
                      alt="images, Remu Suzumori, "
                      note=""
                    />
                    <p>
                      Dù vậy, chuyện tình ái của Remu hoàn toàn không được như
                      cô nàng mong đợi, lần nào yêu cũng là lần đó gặp trắc trở.
                      Hiện tại, cô nàng chỉ tập trung vào chuyện công việc của
                      mình và gạt chuyện yêu đương tình ái của bản thân qua một
                      bên.{" "}
                    </p>
                    <p>
                      {" "}
                      Bài viết được thực hiện với sự trợ giúp của AV Crush.
                    </p>
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
