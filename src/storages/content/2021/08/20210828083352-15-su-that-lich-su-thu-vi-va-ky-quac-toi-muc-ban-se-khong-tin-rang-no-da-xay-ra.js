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
"title": '15 sự thật lịch sử thú vị và kỳ quặc tới mức bạn sẽ không tin rằng nó đã xảy ra',
"description": 'Đúng là người thật, việc thật bao giờ nghe cũng hấp dẫn hơn sách vở nhỉ!',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/4-1629640004227509014396.jpg',
"alt": 'súng thần công,Hải quân Hoa Kỳ,Tây Ban Nha,Đô đốc hải quân,tai nạn hy hữu,lịch sử,relax,thú vị,',
"category": 'news',
"date": '28/08/2021',
"time": '08:33 AM',
"link": '/15-su-that-lich-su-thu-vi-va-ky-quac-toi-muc-ban-se-khong-tin-rang-no-da-xay-ra',
"zcomponent": 'page_20210828083352',
"filepath": './20210828083352-15-su-that-lich-su-thu-vi-va-ky-quac-toi-muc-ban-se-khong-tin-rang-no-da-xay-ra.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  "15 sự thật lịch sử thú vị và kỳ quặc tới mức bạn sẽ không tin rằng nó đã xảy ra";
const author = "ĐỨC 2 XÍCH,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "28/08/2021 08:33 AM";
const description =
  "Đúng là người thật, việc thật bao giờ nghe cũng hấp dẫn hơn sách vở nhỉ!";
const link =
  "15-su-that-lich-su-thu-vi-va-ky-quac-toi-muc-ban-se-khong-tin-rang-no-da-xay-ra";
const tagparam = [
  "súng thần công",
  "Hải quân Hoa Kỳ",
  "Tây Ban Nha",
  "Đô đốc hải quân",
  "tai nạn hy hữu",
  "lịch sử",
  "relax",
  "thú vị",
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

export default function page_20210828083352() {
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
                      Đúng là người thật, việc thật bao giờ nghe cũng hấp dẫn
                      hơn sách vở nhỉ!
                    </p>
                    <p>
                      Mặc dù <strong>lịch sử</strong> trên sách vở là một thứ
                      khá khô khan, nhưng một số sự kiện đã từng xảy ra sẽ trở
                      nên <strong>thú vị</strong> hơn rất nhiều. Người thật việc
                      thật thì bao giờ cũng đem tới những câu chuyện lý thú hơn
                      là những sự kiện mà ai cũng phải nhớ!
                    </p>
                    <p>
                      Không chần chừ gì nữa, hãy cùng đắm mình vào quá khứ chút
                      nào!
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/1-16296400040731830464521.jpg"
                      alt="1, súng thần công,Hải quân Hoa Kỳ,Tây Ban Nha,Đô đốc hải quân,tai nạn hy hữu,lịch sử,relax,thú vị,"
                      note="Giỏi quá!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/2-16296400041321900361207.jpg"
                      alt="2, súng thần công,Hải quân Hoa Kỳ,Tây Ban Nha,Đô đốc hải quân,tai nạn hy hữu,lịch sử,relax,thú vị,"
                      note="Tội nghiệp ông..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/3-16296400042192116993949.jpg"
                      alt="3, súng thần công,Hải quân Hoa Kỳ,Tây Ban Nha,Đô đốc hải quân,tai nạn hy hữu,lịch sử,relax,thú vị,"
                      note="Thấy bảo họ tàn bạo hơn những đấu sĩ nam rất nhiều"
                    />
                    <p>
                      Nữ hải tặc Trịnh Thị (Ching Shih) có đến 200 chuyến thuyền
                      viễn dương, mỗi chiếc có từ 20 đến 30{" "}
                      <strong>súng thần công</strong>, 800 tàu chiến nhỏ gần bờ
                      và có khá nhiều thuyền đi trên sông. Bà ta có đến 50.000
                      hải tặc dưới trướng mình trong khi đó{" "}
                      <strong>Hải quân Hoa Kỳ</strong> chỉ có 5000 lính thuỷ
                      chiến. Chiến hạm của Trịnh Thị còn lớn gần gấp đôi tàu
                      Armada của <strong>Tây Ban Nha</strong>.{" "}
                      <strong>Đô đốc hải quân</strong> Mãn Thanh năm 1809 có nói
                      về đội quân hải tặc của Trịnh Thị như sau: "Quân hải tặc
                      quá mạnh, chúng tôi không thể khống chế chúng bằng vũ lực"
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/5-1629640004251632582716.jpg"
                      alt="4, súng thần công,Hải quân Hoa Kỳ,Tây Ban Nha,Đô đốc hải quân,tai nạn hy hữu,lịch sử,relax,thú vị,"
                      note="Đội hình The Avengers ngoài đời thật chính là đây!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/6-1629640004298915742374.jpg"
                      alt="5, súng thần công,Hải quân Hoa Kỳ,Tây Ban Nha,Đô đốc hải quân,tai nạn hy hữu,lịch sử,relax,thú vị,"
                      note="Nhưng đề bài thì lại do Olympic ban hành nên sau đó BTC đã phải loại bỏ những phần thi này"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/7-16296400043181341449002.jpg"
                      alt="6, súng thần công,Hải quân Hoa Kỳ,Tây Ban Nha,Đô đốc hải quân,tai nạn hy hữu,lịch sử,relax,thú vị,"
                      note="Sau tai nạn hy hữu trên, Napoleon không còn hứng thú với chuyện đi săn thỏ. Thậm chí, ông hoàng nổi danh nước Pháp còn bị ám ảnh mỗi khi nhìn thấy thỏ"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/8-1629640004447425827887.jpg"
                      alt="7, súng thần công,Hải quân Hoa Kỳ,Tây Ban Nha,Đô đốc hải quân,tai nạn hy hữu,lịch sử,relax,thú vị,"
                      note="Người thời xưa ngộ nghĩnh ghê ha"
                    />
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/9-16296400044581955437448.jpg"
                      alt="8, súng thần công,Hải quân Hoa Kỳ,Tây Ban Nha,Đô đốc hải quân,tai nạn hy hữu,lịch sử,relax,thú vị,"
                      note="Tổng thống Abraham Lincoln hóa ra lại không hề mọt sách như mọi người tưởng"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/10-16296400044611719605037.jpg"
                      alt="9, súng thần công,Hải quân Hoa Kỳ,Tây Ban Nha,Đô đốc hải quân,tai nạn hy hữu,lịch sử,relax,thú vị,"
                      note="Tuyệt vời"
                    />
                    <p>Hóa ra sách vở đôi khi cũng "chém gió" ghê lắm</p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/12-16296400045941991575183.jpg"
                      alt="10, súng thần công,Hải quân Hoa Kỳ,Tây Ban Nha,Đô đốc hải quân,tai nạn hy hữu,lịch sử,relax,thú vị,"
                      note="Chẳng biết phải nói gì..."
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/13-1629640004602492691844.jpg"
                      alt="11, súng thần công,Hải quân Hoa Kỳ,Tây Ban Nha,Đô đốc hải quân,tai nạn hy hữu,lịch sử,relax,thú vị,"
                      note="Ồ!"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/14-16296400046221354338025.jpg"
                      alt="12, súng thần công,Hải quân Hoa Kỳ,Tây Ban Nha,Đô đốc hải quân,tai nạn hy hữu,lịch sử,relax,thú vị,"
                      note="Ai bảo manh động!"
                    />
                    <p>
                      Khoảng 500 nam giới và nữ giới Zanzibar thương vong trong
                      lúc bắn phá, hầu hết thiệt mạng do lửa nhấn chìm cung
                      điện. Không rõ có bao nhiêu người chịu thương vong tham
                      gia chiến đấu, song đội súng của Khalid được thuật là "mất
                      một phần mười". Thương vong của người Anh là một hạ sĩ
                      quan trọng thương trên tàu Thrush và sau đó phục hồi. Mặc
                      dù phần lớn thị dân Zanzibar đứng về phía người Anh, song
                      khu phố của người Ấn Độ bị lợi dụng thời cơ cướp phá và
                      khoảng 20 dân cư thiệt mạng trong hỗn loạn
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/4-1629640004227509014396.jpg"
                      alt="13, súng thần công,Hải quân Hoa Kỳ,Tây Ban Nha,Đô đốc hải quân,tai nạn hy hữu,lịch sử,relax,thú vị,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/11-16296400044671994124350.jpg"
                      alt="14, súng thần công,Hải quân Hoa Kỳ,Tây Ban Nha,Đô đốc hải quân,tai nạn hy hữu,lịch sử,relax,thú vị,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/22/15-1629640004627416391707.jpg"
                      alt="15, súng thần công,Hải quân Hoa Kỳ,Tây Ban Nha,Đô đốc hải quân,tai nạn hy hữu,lịch sử,relax,thú vị,"
                      note=""
                    />
                    <p>Nguồn: Parade - kenh14.vn</p>
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
