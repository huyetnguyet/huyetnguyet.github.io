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
"timestamp": '11/08/2021 10:50 AM',
"title": '3 bộ phận trên cơ thể nam giới càng cọ rửa sạch sẽ khi tắm thì thận càng khỏe mạnh, sức khỏe dồi dào',
"description": 'Tắm là việc mà nhiều người làm hàng ngày, đặc biệt là trong trường hợp ra nhiều mồ hôi. Bên cạnh đó, nếu nam giới chú ý cọ rửa kĩ ở 1 số bộ phận khi tắm thì rất có lợi cho sức khỏe.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/photo-1-16285841882251407951264.jpeg',
"alt": 'tắm,thận,cọ rửa,Sức khỏe sinh sản,',
"category": 'life',
"date": '11/08/2021',
"time": '10:50 AM',
"link": '/3-bo-phan-tren-co-the-nam-gioi-cang-co-rua-sach-se-khi-tam-thi-than-cang-khoe-manh-suc-khoe-doi-dao',
"zcomponent": 'page_20210811105021',
"filepath": './20210811105021-3-bo-phan-tren-co-the-nam-gioi-cang-co-rua-sach-se-khi-tam-thi-than-cang-khoe-manh-suc-khoe-doi-dao.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title =
  "3 bộ phận trên cơ thể nam giới càng cọ rửa sạch sẽ khi tắm thì thận càng khỏe mạnh, sức khỏe dồi dào";
const author = "MAKI,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "11/08/2021 10:50 AM";
const description =
  "Tắm là việc mà nhiều người làm hàng ngày, đặc biệt là trong trường hợp ra nhiều mồ hôi. Bên cạnh đó, nếu nam giới chú ý cọ rửa kĩ ở 1 số bộ phận khi tắm thì rất có lợi cho sức khỏe.";
const link =
  "3-bo-phan-tren-co-the-nam-gioi-cang-co-rua-sach-se-khi-tam-thi-than-cang-khoe-manh-suc-khoe-doi-dao";
const tagparam = ["tắm", "thận", "cọ rửa", "Sức khỏe sinh sản"];
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

export default function page_20210811105021() {
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
                      Khi thời tiết nắng nóng, <strong>tắm</strong> vào ban ngày
                      giúp chúng ta làm sạch cơ thể khỏi mồ hôi, bụi bẩn và mang
                      lại cảm giác thoải mái. Trong khi đó, tắm trước khi đi ngủ
                      cũng có tác dụng cải thiện chất lượng giấc ngủ. Do đó, có
                      thể nói tắm là một biện pháp trị liệu hiệu quả.
                    </p>
                    <p>
                      Đối với nam giới, <strong>tắm</strong> trước khi đi ngủ
                      không những mang lại lợi ích giữ gìn vóc dáng mà nếu họ
                      chú ý <strong>cọ rửa</strong> kĩ những bộ phận này thì có
                      thể kích thích lưu lượng máu trong <strong>thận</strong>,
                      cải thiện tình trạng thiếu thận, tăng cường sức khỏe tổng
                      thể.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/photo-1-16285841882251407951264.jpeg"
                      alt="1, tắm,thận,cọ rửa,Sức khỏe sinh sản,"
                      note=""
                    />
                    <p>
                      Trong y học cổ truyền phương Đông có câu "
                      <strong>Thận</strong> khí hồi tai". Xung quanh tai có
                      nhiều vùng phản xạ của thận. Nếu rửa tai đúng cách khi{" "}
                      <strong>tắm</strong> có thể đẩy nhanh quá trình lưu thông
                      máu, giúp điều hòa chức năng thận, lưu thông trơn tru hơn.
                    </p>
                    <p>
                      Từ đó, việc làm này giúp cơ thể tống độc tố và rác thải ra
                      ngoài hiệu quả hơn, bổ <strong>thận</strong> khí, khiến cơ
                      thể ngày càng tươi trẻ, khỏe mạnh. Vì vậy, nam giới nên
                      rửa tai thường xuyên khi đi <strong>tắm</strong>, vừa giúp
                      thư giãn tai, vừa giúp giữ dáng, có lợi sức khỏe.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/10/photo-2-1628584188760319091512.jpeg"
                      alt="2, tắm,thận,cọ rửa,Sức khỏe sinh sản,"
                      note=""
                    />
                    <p>
                      Y học phương Đông tin rằng: "Thắt lưng là ngôi nhà của{" "}
                      <strong>thận</strong>". Khi có vấn đề về thận, cảm giác rõ
                      ràng nhất là đau lưng và mỏi lưng.
                    </p>
                    <p>
                      Do đó, khi nam giới xoa bóp vùng thắt lưng một cách thích
                      hợp có thể kích thích lưu lượng máu trong{" "}
                      <strong>thận</strong>, có tác dụng loại bỏ chất độc, rác
                      thải ra khỏi cơ thể. Đồng thời, nó còn giúp tăng cường
                      chức năng của thận.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Vì vậy khi <strong>tắm</strong>, việc{" "}
                      <strong>cọ rửa</strong> kĩ vùng thắt lưng nên được làm
                      thường xuyên.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/10/photo-1-16285851987261776874144.gif"
                      alt="4, tắm,thận,cọ rửa,Sức khỏe sinh sản,"
                      note=""
                    />
                    <p>
                      Nhìn chung, chúng ta thường không để ý đến phần mắt cá này
                      khi đi <strong>tắm</strong>, tuy nhiên chúng rất dễ "giấu"
                      bụi bẩn. Đặc biệt vào mùa hè, nhiều người không có thói
                      quen ngâm chân, lúc này chân không được làm sạch hiệu quả,
                      dễ xuất hiện nhiều chất độc hại. Vì vậy, lời khuyên cho
                      bạn là nên <strong>cọ rửa</strong> mắt cá chân sạch sẽ khi
                      tắm.
                    </p>
                    <p>
                      Ở khớp cổ chân có một huyệt Thái Cực rất có lợi cho sức
                      khỏe của <strong>thận</strong>. Việc thường xuyên rửa mắt
                      cá chân khi <strong>tắm</strong> không chỉ giúp cổ chân
                      khỏe mạnh hơn mà còn thúc đẩy quá trình tuần hoàn máu ở
                      thận. Xoa bóp chân thường xuyên cũng giúp cải thiện lưu
                      lượng máu và nâng cao chất lượng giấc ngủ.
                    </p>
                    <p>Nguồn và ảnh: Sohu, Men's Health</p>
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
