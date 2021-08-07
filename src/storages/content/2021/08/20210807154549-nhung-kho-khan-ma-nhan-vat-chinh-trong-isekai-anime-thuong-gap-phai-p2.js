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
"timestamp": '07/08/2021 03:45 PM',
"title": 'Những khó khăn mà nhân vật chính trong isekai anime thường gặp phải (P.2)',
"description": 'Nhân vật chính trong isekai anime có nhiều lợi thế và đặc quyền, nhưng chắc chắn họ cũng gặp không ít khó khăn',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/sword-art-online-war-of-underworld-asuna-1628233175359273668004.jpg',
"alt": 'KHÁM PHÁ,ANIME,ISEKAI ANIME,',
"category": 'games',
"date": '07/08/2021',
"time": '03:45 PM',
"link": '/nhung-kho-khan-ma-nhan-vat-chinh-trong-isekai-anime-thuong-gap-phai-p2',
"zcomponent": 'page_20210807154549',
"filepath": './20210807154549-nhung-kho-khan-ma-nhan-vat-chinh-trong-isekai-anime-thuong-gap-phai-p2.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  "Những khó khăn mà nhân vật chính trong isekai anime thường gặp phải (P.2)";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "07/08/2021 03:45 PM";
const description =
  "Nhân vật chính trong isekai anime có nhiều lợi thế và đặc quyền, nhưng chắc chắn họ cũng gặp không ít khó khăn";
const link =
  "nhung-kho-khan-ma-nhan-vat-chinh-trong-isekai-anime-thuong-gap-phai-p2";
const tagparam = ["KHÁM PHÁ", "ANIME", "ISEKAI ANIME"];
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

export default function page_20210807154549() {
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
                      Nhân vật chính của isekai <strong>anime</strong> là một
                      vai trò đầy nguy hiểm. Ngoài việc phải vứt lại toàn bộ
                      cuộc sống quen thuộc ở phía sau, người ta còn phải đối mặt
                      với hàng loạt kẻ thù nguy hiểm, bị cuốn vào những tranh
                      chấp, rắc rối dù không hề mong muốn. Ngoài ra, họ còn phải
                      đối mặt với nguy cơ chuyển sinh thành một sinh vật hay vật
                      dụng không phải con người.
                    </p>
                    <h5>
                      5. Nhân vật chính trong isekai <strong>anime</strong>{" "}
                      thường phải cạnh tranh tình cảm
                    </h5>
                    <p>
                      Tất nhiên rồi, những cuộc cạnh tranh luôn đem lại sự hấp
                      dẫn cho câu chuyện, kể cả là cạnh tranh tình cảm. Trong
                      nhiều bộ isekai <strong>anime</strong>, dù nhân vật chính
                      vướng vào những mối tình đa phương, thì họ cũng không
                      tránh khỏi cảnh phải cạnh tranh với tình địch để thu hút
                      sự chú ý của đối phương.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/sword-art-online-war-of-underworld-asuna-1628233175359273668004.jpg"
                      alt="1, KHÁM PHÁ,ANIME,ISEKAI ANIME,"
                      note=""
                    />
                    <p>
                      Các tình địch này có thể là người tốt bụng, hoặc chỉ đơn
                      giản là quen biết của đối phương trước khi gặp nhân vật
                      chính, hoặc gay cấn hơn nữa, họ là những kẻ xấu xa sẵn
                      sàng sát hại nhân vật chính nhân danh tình yêu. Điển hình
                      như trường hợp của Kuradeel và Kirito trong Sword Art
                      Online, khi Kuradeel cố giết Kirito để giữ Asuna cho riêng
                      mình.
                    </p>
                    <h5>
                      4. Thế giới chuyển sinh thường nhan nhản những sinh vật
                      nguy hiểm
                    </h5>
                    <p>
                      Đôi khi, việc tỉnh dậy trong một thế giới hoàn toàn mới
                      không tuyệt vời như người ta vẫn nghĩ. Nhiều thế giới
                      isekai nguy hiểm hơn thế giới thực rất nhiều.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/sword-art-online-an-incarnation-of-the-radius-1628233192364428688011.jpg"
                      alt="2, KHÁM PHÁ,ANIME,ISEKAI ANIME,"
                      note=""
                    />
                    <p>
                      Những thế giới này có thể là quê nhà của nhiều phản diện
                      nguy hiểm có thể hủy diệt vô số người và địa điểm cùng
                      lúc, những quái vật thần thoại như orc hay goblin có thể
                      dễ dàng tấn công người mới đến… Bất kể mối đe dọa có là
                      gì, thì các thế giới mới thường rất đáng sợ và nguy hiểm
                      đối với một người bình thường.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>
                      3. Nhân vật chính thường rơi vào những tình huống kỳ quặc
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/birito-his-lover-truck-kun-1628233211337857761836.jpg"
                      alt="3, KHÁM PHÁ,ANIME,ISEKAI ANIME,"
                      note=""
                    />
                    <p>
                      Các nhân vật chính của isekai <strong>anime</strong>{" "}
                      thường gặp phải những tình huống kỳ lạ. Ngoài khả năng bị
                      chuyển sinh thành nhện hoặc slime, họ còn có thể trở thành
                      một cái máy bán hàng tự động hoặc kết bạn với chiếc xe
                      tải. Nếu nhân vật chính may mắn, những chi tiết kỳ quặc
                      này chỉ dẫn đến các tình huống hài hước. Ngược lại, nó có
                      thể dẫn đến các tình huống thậm chí còn kỳ quặc và nguy
                      hiểm hơn nữa.
                    </p>
                    <h5>
                      2. Nhân vật chính có thể trở thành phản diện bị mọi người
                      ghét bỏ
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/my-next-life-as-a-villainess-katarina-surrounded-by-friends-1628233229326646273358.jpg"
                      alt="4, KHÁM PHÁ,ANIME,ISEKAI ANIME,"
                      note=""
                    />
                    <p>
                      Trong My Next Life As A Villainess, nhân vật chính chuyển
                      sinh chẳng những không được thành anh hùng mà còn trở
                      thành phản diện chính. Các nhân vật chính trong isekai
                      khác có thể dễ dàng rơi vào tình huống này nếu họ đưa ra
                      lựa chọn sai lầm khi đến thế giới mới hoặc lỡ làm một việc
                      được xem như việc xấu ở thế giới này. Thật không dễ dàng
                      gì để kiếm được các chiến hữu trung thành sau khi bị ngờ
                      vực như vậy. Vì thế mà việc kết thù đối với nhân vật chính
                      trong isekai <strong>anime</strong> thậm chí còn dễ hơn
                      kết bạn.
                    </p>
                    <h5>1. Cuộc sống mới bận rộn và đầy xáo trộn</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/6/azusa-from-ive-been-killing-slimes-1628233247248748137244.jpg"
                      alt="5, KHÁM PHÁ,ANIME,ISEKAI ANIME,"
                      note=""
                    />
                    <p>
                      Các nhân vật chính trong thế giới isekai{" "}
                      <strong>anime</strong> hiếm khi có thời gian nghỉ ngơi.
                      Ngay cả với những nhân vật vốn được xây dựng theo hướng
                      muốn thư thả tận hưởng cuộc sống như Azusa trong I’ll Been
                      Killing Slimes, đôi khi cũng thấy mệt mỏi vì cuộc sống quá
                      bận rộn và đầy xáo trộn.
                    </p>
                    <p>
                      Tuy nhiên, nếu trong các bộ isekai <strong>anime</strong>{" "}
                      hài hước thì nhân vật chính vẫn sẽ có những khoảng thời
                      gian để nghỉ ngơi đôi chút. Và chắc chắn như thế có nghĩa
                      là họ may mắn hơn rất nhiều người hùng isekai đang miệt
                      mài cứu thế giới khác.
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
