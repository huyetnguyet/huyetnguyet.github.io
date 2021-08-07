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
"timestamp": '07/08/2021 03:43 PM',
"title": 'Kiếm 30 tỷ tiền donate mỗi năm, nữ streamer top 1 khiến fan bất ngờ, sốc nặng khi công khai mặt mộc chưa trang điểm',
"description": 'Rất nhiều người đã tỏ ra khá bất ngờ trước màn thay đổi có phần khác biệt này của cô nàng streamer.',
"src": 'https://static-cmsads.admicro.vn/cmsads/2021/05/BANN-1620702934595.png',
"alt": 'streamer,bảng xếp hạng,mắt hai mí,phẫu thuật thẩm mỹ,',
"category": 'images',
"date": '07/08/2021',
"time": '03:43 PM',
"link": '/kiem-30-ty-tien-donate-moi-nam-nu-streamer-top-1-khien-fan-bat-ngo-soc-nang-khi-cong-khai-mat-moc-chua-trang-diem',
"zcomponent": 'page_20210807154308',
"filepath": './20210807154308-kiem-30-ty-tien-donate-moi-nam-nu-streamer-top-1-khien-fan-bat-ngo-soc-nang-khi-cong-khai-mat-moc-chua-trang-diem.js'
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
  "Kiếm 30 tỷ tiền donate mỗi năm, nữ streamer top 1 khiến fan bất ngờ, sốc nặng khi công khai mặt mộc chưa trang điểm";
const author = "MẶT TRỨNG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "07/08/2021 03:43 PM";
const description =
  "Rất nhiều người đã tỏ ra khá bất ngờ trước màn thay đổi có phần khác biệt này của cô nàng streamer.";
const link =
  "kiem-30-ty-tien-donate-moi-nam-nu-streamer-top-1-khien-fan-bat-ngo-soc-nang-khi-cong-khai-mat-moc-chua-trang-diem";
const tagparam = [
  "streamer",
  "bảng xếp hạng",
  "mắt hai mí",
  "phẫu thuật thẩm mỹ",
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

export default function page_20210807154308() {
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
                      Rất nhiều người đã tỏ ra khá bất ngờ trước màn thay đổi có
                      phần khác biệt này của cô nàng <strong>streamer</strong>.
                    </p>
                    <p>
                      Nhân vật chính trong câu chuyện lần này là Park Garin -
                      gương mặt hiện đang được coi là một trong những{" "}
                      <strong>streamer</strong> top đầu trên Afreeca TV. Điều
                      đáng ngạc nhiên là cô nàng này gần như chẳng có tài năng
                      gì quá đặc biệt để thu hút người xem. Nội dung thường thấy
                      chỉ đơn giản là thực hiện các màn vũ đạo nóng bỏng, hoặc
                      lên sóng đọc kênh chat trò chuyện với người xem.
                    </p>
                    <p>
                      Đơn giản là vậy thế nhưng độ hiệu quả thì lại không nhiều
                      người lường được. Vốn dĩ, mỗi lần lên sóng, màn hình của
                      nàng <strong>streamer</strong> luôn nhảy donate liên tục
                      nhưng tới khi biết con số thực tế thì chẳng nhiều người có
                      thể tưởng tượng được. Thậm chí, trên các{" "}
                      <strong>bảng xếp hạng</strong> donate, Park Garin luôn
                      luôn là cái tên đứng ở vị trí số một.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-16283301973181707590348.jpg"
                      alt="1, streamer,bảng xếp hạng,mắt hai mí,phẫu thuật thẩm mỹ,"
                      note="Park Garin - cô nàng streamer xinh đẹp"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-1-16283301989521509383046.jpg"
                      alt="2, streamer,bảng xếp hạng,mắt hai mí,phẫu thuật thẩm mỹ,"
                      note="Và cũng không kém phần gợi cảm"
                    />
                    <p>
                      Cụ thể, theo như tiết lộ từ chính cô nàng, chỉ trong một
                      năm, lượng donate mà Park Garin nhận được tổng cộng có thể
                      lên tới con số 1,5 tỷ won (tương đương với 30 tỷ VND) -
                      mức cao nhất mà một <strong>streamer</strong> từng nhận
                      được. Và nên nhớ, đó mới chỉ là tiền donate thôi chứ chưa
                      bàn tới lương hay các hợp đồng quảng cáo nhé.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-6-16283301993811334578869.jpg"
                      alt="5, streamer,bảng xếp hạng,mắt hai mí,phẫu thuật thẩm mỹ,"
                      note=""
                    />
                    <p>
                      Vậy cũng đủ hiểu Park Garin giàu có tới cỡ nào. Mặc dù nữ{" "}
                      <strong>streamer</strong> cũng lên tiếng thanh minh rằng
                      mình sẽ không được cầm toàn bộ tiền donate mà phải chia sẻ
                      với cả nền tảng, nhưng theo ước tính, mỗi tháng cô nàng
                      cũng phải bỏ túi ít nhất hàng tỷ đồng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-2-16283301990471077418444.jpg"
                      alt="3, streamer,bảng xếp hạng,mắt hai mí,phẫu thuật thẩm mỹ,"
                      note="Mỗi tháng, cô nàng streamer xinh đẹp này có thể đút túi hàng tỷ đồng"
                    />
                    <p>
                      Gần đây, Park Garin còn tiếp tục khiến không ít fan phải
                      chú ý khi xuất hiện với vai trò là người mẫu của tạp chí
                      MAXIM. Nhưng cũng vì thế, bất ngờ nổi lên vô số tranh cãi
                      về chính nhan sắc của nữ <strong>streamer</strong> này.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Cụ thể, mọi thứ bắt đầu khi trong một buổi lên sóng trước
                      đó, Park Garin rất thoải mái show cho các fan quá trình
                      trang điểm của mình, và cụ thể là gương mặt mộc, chưa hề
                      được tô vẽ có phần khá khác biệt so với phiên bản khi lên
                      sóng hay chụp ảnh quảng cáo của Park Garin.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/7/photo-5-16283301992972103218374.jpg"
                      alt="4, streamer,bảng xếp hạng,mắt hai mí,phẫu thuật thẩm mỹ,"
                      note=""
                    />
                    <p>
                      Đứng trước những nghi vấn về việc đụng chạm dao kéo của
                      mình, Park Garin cũng không hề phủ nhận. Cô nàng chia sẻ
                      rằng ở thời điểm khi 20 tuổi, bản thân đã từng nhận được
                      đề nghị nhưng cô không lựa chọn mà chỉ phẫu thuật làm{" "}
                      <strong>mắt hai mí</strong> thôi. Cũng theo nữ{" "}
                      <strong>streamer</strong>,{" "}
                      <strong>phẫu thuật thẩm mỹ</strong> là lựa chọn của mỗi
                      người và muốn xinh đẹp, bạn phải chịu đựng đau đớn. Tuy
                      nhiên, vẫn còn khá nhiều người cho rằng cô nàng đã đụng
                      chạm dao kéo, khi mà một số góc ảnh, trông gương mặt của
                      Park Garin có phần khá đơ, cứng.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/7/photo-3-1628330199141591712874.gif"
                      alt="8, streamer,bảng xếp hạng,mắt hai mí,phẫu thuật thẩm mỹ,"
                      note="Hình ảnh đầy nóng bỏng của Park Garin khi quảng cáo MAXIM"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/7/photo-4-1628330199218282041624.gif"
                      alt="9, streamer,bảng xếp hạng,mắt hai mí,phẫu thuật thẩm mỹ,"
                      note="Cô nàng cũng là một trong số ít những nữ streamer hiếm hoi có vinh dự này"
                    />
                    <p>Ảnh: Internet</p>
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
