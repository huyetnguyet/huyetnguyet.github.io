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
"title": 'Ngất lịm với nhan sắc bùng nổ của "gái 1 con" Triệu Lệ Dĩnh ngày hôm nay, đúng là phụ nữ đẹp nhất khi không thuộc về ai',
"description": 'Vẫn biết nhan sắc của Triệu Lệ Dĩnh càng ngày càng xuất sắc nhưng quả thật cô nàng khiến ai cũng phải trầm trồ với visual "lên hương".',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/photo-1-16287747582271896935042.jpg',
"alt": 'triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,nhan sắc mỹ nhân Hoa ngữ,',
"category": 'stars',
"date": '13/08/2021',
"time": '09:21 AM',
"link": '/ngat-lim-voi-nhan-sac-bung-no-cua-gai-1-con-trieu-le-dinh-ngay-hom-nay-dung-la-phu-nu-dep-nhat-khi-khong-thuoc-ve-ai',
"zcomponent": 'page_20210813092120',
"filepath": './20210813092120-ngat-lim-voi-nhan-sac-bung-no-cua-gai-1-con-trieu-le-dinh-ngay-hom-nay-dung-la-phu-nu-dep-nhat-khi-khong-thuoc-ve-ai.js'
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
  'Ngất lịm với nhan sắc bùng nổ của "gái 1 con" Triệu Lệ Dĩnh ngày hôm nay, đúng là phụ nữ đẹp nhất khi không thuộc về ai';
const author = "NHÃ AN,";
const source = "Trí Thức Trẻ";
const timestamp = "13/08/2021 09:21 AM";
const description =
  'Vẫn biết nhan sắc của Triệu Lệ Dĩnh càng ngày càng xuất sắc nhưng quả thật cô nàng khiến ai cũng phải trầm trồ với visual "lên hương".';
const link =
  "ngat-lim-voi-nhan-sac-bung-no-cua-gai-1-con-trieu-le-dinh-ngay-hom-nay-dung-la-phu-nu-dep-nhat-khi-khong-thuoc-ve-ai";
const tagparam = [
  "triệu lệ dĩnh",
  "Mỹ nhân Hoa ngữ",
  "nhan sắc của sao",
  "nhan sắc mỹ nhân Hoa ngữ",
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

export default function page_20210813092120() {
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
                      Vẫn biết nhan sắc của <strong>Triệu Lệ Dĩnh</strong> càng
                      ngày càng xuất sắc nhưng quả thật cô nàng khiến ai cũng
                      phải trầm trồ với visual "lên hương".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/photo-1-1628773211559798833070.jpg"
                      alt="1, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,nhan sắc mỹ nhân Hoa ngữ,"
                      note="Triệu Lệ Dĩnh rạng rỡ và tràn đầy năng lượng trong buổi giao lưu cùng các fan"
                    />
                    <p>
                      Sau khi tuyên bố ly hôn, sự nghiệp của{" "}
                      <strong>Triệu Lệ Dĩnh</strong> có phần chững lại. Nữ diễn
                      viên dành nhiều thời gian cho gia đình, hạn chế dự sự kiện
                      và chưa có bất cứ tuyên bố đóng bộ phim nào mới. Điều này
                      khiến không ít fan cứng sốt ruột và chờ đợi những sản phẩm
                      của cô nàng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/photo-1-16287732354381309420143.jpg"
                      alt="2, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,nhan sắc mỹ nhân Hoa ngữ,"
                      note="Cận cảnh nhan sắc của người đẹp họ Triệu"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/photo-1-16287732196331015836426.jpg"
                      alt="3, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,nhan sắc mỹ nhân Hoa ngữ,"
                      note="Các fan cứ thế chìm đắm trong loạt ảnh đẹp của Dĩnh Bảo mà thôi"
                    />
                    <p>
                      Tuy nhiên, bắt đầu từ tháng 8, tình cũ Phùng Thiệu Phong
                      tuyên bố mình sẽ trở lại showbiz với lịch trình làm việc
                      mới dày dặn hơn trước với các hoạt động quảng bá, dự
                      event. Trang Sina đưa tin, chiều tối ngày 12/8, nữ diễn
                      viên họ Triệu nhận lời tham dự livestream giao lưu cùng
                      khán giả. Nhan sắc lẫn thần thái của nàng "Sam Sam" nhận
                      được vô số lời ngợi khen.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/photo-1-16287747582271896935042.jpg"
                      alt="4, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,nhan sắc mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      Trước giờ G, studio tung loạt ảnh{" "}
                      <strong>Triệu Lệ Dĩnh</strong> khoe vóc dáng mảnh mai,
                      nhan sắc ngọt ngào khiến dân tình "đổ gục"
                    </p>
                    <p>
                      Bộ cánh ngày hôm nay càng tôn lên nét đẹp kiều diễm của nữ
                      thần họ Triệu
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/photo-1-16287746957871173409030.jpg"
                      alt="5, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,nhan sắc mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/photo-1-16287747886611734985413.jpg"
                      alt="6, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,nhan sắc mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      Cho đến khi livestream lên sóng, các fan còn "quắn quéo"
                      hơn nữa vì visual đẳng cấp của bà mẹ 1 con
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/photo-1-16287732271361574383670.jpg"
                      alt="7, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,nhan sắc mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <p>
                      Trở thành gái độc thân đắt giá nhất nhì Cbiz hiện nay,
                      nhan sắc của <strong>Triệu Lệ Dĩnh</strong> "lên hương"
                      vùn vụt. Mỗi lần cô nàng dự sự kiện, dân tình lại xuýt xoa
                      vì loạt tạo hình xinh lung linh của nữ thần visual hot hit
                      Cbiz
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/photo-1-16287732478281757356644.jpg"
                      alt="8, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,nhan sắc mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/12/photo-1-16287732989341575486988.jpg"
                      alt="9, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,nhan sắc mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/photo-1-16287732837031168793527.jpg"
                      alt="10, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,nhan sắc mỹ nhân Hoa ngữ,"
                      note=""
                    />

                    <p>
                      Có thể thấy rõ, sau 4 tháng ly hôn,{" "}
                      <strong>Triệu Lệ Dĩnh</strong> đã lấy lại được tinh thần
                      rất tốt. Cô nàng liên tục xuất hiện với hình ảnh rạng rỡ,
                      tươi vui. Chuyện buồn trong quá khứ không còn làm ảnh
                      hưởng tới tâm trạng của người đẹp.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Loạt khoảnh khắc siêu xinh của cô nàng được các fan nhanh
                      tay ghi lại
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/12/photo-1-1628767877965842433711.gif"
                      alt="14, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,nhan sắc mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/12/photo-1-162876789401016364554.gif"
                      alt="15, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,nhan sắc mỹ nhân Hoa ngữ,"
                      note=""
                    />

                    <p>
                      Không dừng lại ở đó, thương hiệu thời trang cao cấp Dior
                      vừa chia sẻ hình ảnh tuyên truyền mới đây nhất của{" "}
                      <strong>Triệu Lệ Dĩnh</strong> cho hãng. Lại một lần nữa,
                      người đẹp khẳng định câu nói: "Phụ nữ đẹp nhất khi không
                      thuộc về ai" là hoàn toàn chính xác nhờ loạt khung hình
                      đẹp tới ngẩn ngơ.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/photo-1-16287679029941901822641.jpg"
                      alt="11, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,nhan sắc mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/photo-1-16287680003461684349609.jpg"
                      alt="12, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,nhan sắc mỹ nhân Hoa ngữ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/12/photo-1-16287680003461684349609.jpg"
                      alt="13, triệu lệ dĩnh,Mỹ nhân Hoa ngữ,nhan sắc của sao,nhan sắc mỹ nhân Hoa ngữ,"
                      note=""
                    />

                    <p>Nguồn: Weibo</p>
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
