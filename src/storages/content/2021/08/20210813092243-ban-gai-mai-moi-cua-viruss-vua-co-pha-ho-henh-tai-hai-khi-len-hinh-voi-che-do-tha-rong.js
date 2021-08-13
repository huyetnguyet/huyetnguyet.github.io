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
"timestamp": '13/08/2021 09:22 AM',
"title": '“Bạn gái mai mối” của ViruSs vừa có pha hớ hênh tai hại khi lên hình với chế độ “thả rông"',
"description": 'Đăng tải clip skincare trước khi ngủ, “vùng cấm” của hot girl được mai mối với ViruSs hớ hênh táo bạo.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287378005141042991511.jpg',
"alt": 'VIRUSS,BẠN GÁI,SUNNA,GÁI XINH,LỘ,',
"category": 'images',
"date": '13/08/2021',
"time": '09:22 AM',
"link": '/ban-gai-mai-moi-cua-viruss-vua-co-pha-ho-henh-tai-hai-khi-len-hinh-voi-che-do-tha-rong',
"zcomponent": 'page_20210813092243',
"filepath": './20210813092243-ban-gai-mai-moi-cua-viruss-vua-co-pha-ho-henh-tai-hai-khi-len-hinh-voi-che-do-tha-rong.js'
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
  '“Bạn gái mai mối” của ViruSs vừa có pha hớ hênh tai hại khi lên hình với chế độ “thả rông"';
const author = "Kayle";
const source = "Pháp luật và bạn đọc";
const timestamp = "13/08/2021 09:22 AM";
const description =
  "Đăng tải clip skincare trước khi ngủ, “vùng cấm” của hot girl được mai mối với ViruSs hớ hênh táo bạo.";
const link =
  "ban-gai-mai-moi-cua-viruss-vua-co-pha-ho-henh-tai-hai-khi-len-hinh-voi-che-do-tha-rong";
const tagparam = ["VIRUSS", "BẠN GÁI", "SUNNA", "GÁI XINH", "LỘ"];
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

export default function page_20210813092243() {
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
                      Hot girl lai Việt – Mỹ <strong>Sunna</strong> (Wilson Nhật
                      Anh) được biết đến khi sở hữu body hoàn hảo. Bông hồng lai
                      2k2 nóng bỏng với số đo 3 vòng chẳng thua kém gì người
                      mẫu, lần lượt là: 90, 66 và 95 cm. Với lợi thế này, cô
                      nàng đã sớm định hình cho bản thân phong cách thời trang
                      sexy, bốc lửa, quyến rũ và có phần táo bạo. Vậy nên việc
                      xuất hiện với hình ảnh show dáng nuột, khoe đường cong
                      không có gì bất ngờ với cô nàng này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-16287378005141042991511.jpg"
                      alt="1, VIRUSS,BẠN GÁI,SUNNA,GÁI XINH,LỘ,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, trong những trường hợp không chủ đích khoe,
                      những pha hớ hênh của <strong>Sunna</strong> khiến người
                      theo dõi không khỏi “thót tim” hay giật mình. Như trong
                      đoạn clip rửa mặt trước khi ngủ mà bóng hồng này cập nhật
                      trên story Instagram của mình, vì đang ở nhà riêng cũng
                      như chuẩn bị đi ngủ nên <strong>bạn gái</strong> mai mối
                      của <strong>ViruSs</strong> ăn mặc khá thoải mái với chiếc
                      váy ren mỏng và thả rông vòng 1.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/12/photo-1-1628738013624863509059.jpg"
                      alt="2, VIRUSS,BẠN GÁI,SUNNA,GÁI XINH,LỘ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/12/225473989220817503304266786394632028068308n-1628738040041800784094.jpg"
                      alt="3, VIRUSS,BẠN GÁI,SUNNA,GÁI XINH,LỘ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/12/22804191042038436697105881180011166224595080n-162873804005468748471.jpg"
                      alt="4, VIRUSS,BẠN GÁI,SUNNA,GÁI XINH,LỘ,"
                      note=""
                    />

                    <p>
                      Chuyện sẽ chẳng có gì để nói nếu như khi rửa mặt, cô nàng
                      cúi xuống khiến cho vòng 1 vốn bắt mắt bởi sự đồ sộ nay
                      lại trong tư thế hớ hênh không tưởng, rất dễ rơi vào trạng
                      thái “<strong>lộ</strong> hàng". Chắc hẳn trước khi đăng
                      tải, nàng hot girl này đã “check" lại nhiều lần và cô vẫn
                      thấy thoải mái với hình ảnh này tuy vậy fan của cô thì
                      được pha “thót tim" trước khoảnh khắc hớ hênh của cô nàng
                      nóng bỏng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/12/photo-1-16287380810291797415048.png"
                      alt="5, VIRUSS,BẠN GÁI,SUNNA,GÁI XINH,LỘ,"
                      note=""
                    />

                    <p>
                      Hiện đang sinh sống tại Tp. Hồ Chí Minh, cùng với chỉ thị
                      giãn cách, mọi công việc của cô nàng ít nhiều gặp khó
                      khăn, thậm chí phải ngưng hẳn. <strong>Sunna</strong> từng
                      chia sẻ, thời gian biểu của bản thân trong thời gian này
                      dường như chỉ có ăn ngủ và chơi game mà thôi.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Thông tin cho những ai chưa biết, cô nàng làm fan girl
                      cũng như game thủ Liên Quân Mobile thứ thiệt với lịch
                      trình chơi game đến mỏi cả tay: “Mở mắt dậy ăn miếng rồi
                      đánh Liên Quân, xong coi phim xí rồi ăn rồi lại đánh Liên
                      Quân tới 12 giờ trưa, ngủ tới 7 giờ tối rồi bắt đầu lại
                      như trên”. Chưa kể, việc chơi game còn theo cô nàng vào
                      tận giấc ngủ: “Tới mức đi ngủ thấy mình là tướng chạy long
                      nhong đánh. Có bữa ngủ mơ thấy bị Triệu Vân dí đánh chạy
                      quá trời mà bị nó đập chết cái giật mình tỉnh ngủ”.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/660/133514250583805952/2021/8/12/img8795-16287381181471685881539.png"
                      alt="6, VIRUSS,BẠN GÁI,SUNNA,GÁI XINH,LỘ,"
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
