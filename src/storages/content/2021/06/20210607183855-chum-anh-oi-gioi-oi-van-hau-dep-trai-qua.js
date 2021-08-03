import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature, RelationNews } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 06:38 PM",
"title": Chùm ảnh: Ối giời ơi Văn Hậu đẹp trai quá!",
"description": Càng ngắm càng mê, hihi!",
"src": ",
"alt": Van Hau, Doan Van Hau, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Nam Than, Dan Nam Than Doi Tuyen Viet Nam, ",
"category": news",
"date": 07/06/2021",
"time": 06:38 PM",
"link": "/chum-anh-oi-gioi-oi-van-hau-dep-trai-qua",
"zcomponent": page_20210607183855",
"filepath": ./20210607183855-chum-anh-oi-gioi-oi-van-hau-dep-trai-qua.js"
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
const title = "Chùm ảnh: Ối giời ơi Văn Hậu đẹp trai quá!";
const author = "M416,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "07/06/2021 06:38 PM";
const description = "Càng ngắm càng mê, hihi!";
const link = "chum-anh-oi-gioi-oi-van-hau-dep-trai-qua";
const tagparam = [
  "van-hau",
  "doan-van-hau",
  "tuyen-viet-nam-tham-du-vong-loai-world-cup-2022",
  "nam-than",
  "dan-nam-than-doi-tuyen-viet-nam",
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

export default function page_20210607183855() {
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
                      Việt Nam vừa có màn "nghiền nát" Indonesia tại vòng loại
                      thứ 2 World Cup 2022 đã với tỷ số 4-0. Dù đứng trước một
                      đối thủ với lối chơi không mấy đẹp mắt nhưng các cầu thủ
                      của đội tuyển không lấy đó làm trở ngại, ngược lại tất cả
                      còn mạnh mẽ hơn và tỏa sáng hơn.
                    </p>
                    <p>
                      Dù là 4 cầu thủ trực tiếp ghi bàn như Tiến Linh, Quang
                      Hải, Công Phượng, Văn Thanh hay các cầu thủ khác thì đều
                      xứng đáng với danh xưng "nam thần" mà cộng đồng mạng trao
                      tặng hơn. Tuy nhiên không thể không nói, ở một diễn biến
                      khác, cái tên Văn Hậu vẫn có sức hút không thể chối bỏ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/8/base64-1623093244180842159300.png"
                      alt="Van Hau, Doan Van Hau, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Nam Than, Dan Nam Than Doi Tuyen Viet Nam, "
                      note="Vào sân vào cuối hiệp 2 nhưng Văn Hậu vẫn chiếm đủ spotlight"
                    />
                    <p>
                      Dù phải tới tận phút 79 của trận đấu, Văn Hậu mới được HLV
                      Park Hang Seo tung vào sân song vừa xuất hiện, anh chàng
                      đã khiến mọi livestream lag thêm mấy phần vì lượng bình
                      luận mới tăng lên đột biến. Vì Hậu ơi, ăn gì mà đẹp trai
                      thế?
                    </p>
                    <p>
                      So với hơn 3 năm về trước khi cùng U23 lập kỳ tích ở
                      Thường Châu thì hiện tại, Văn Hậu thực sự đã "trổ mã",
                      phong độ hơn rất rất nhiều. Thời gian thi đấu ở châu Âu
                      cũng giúp nam cầu thủ sinh năm 1999 này càng thêm cao lớn,
                      nam tính và hút ánh nhìn. Nói chung, nếu các thành viên
                      thuộc đội tuyển Việt Nam là nam thần thì Văn Hậu chính là
                      nam thần trong nam thần!
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/8/screen-shot-2021-06-08-at-015506-16230932821271207167918.png"
                      alt="Van Hau, Doan Van Hau, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Nam Than, Dan Nam Than Doi Tuyen Viet Nam, "
                      note="Nam thần!!!"
                    />
                    <p>
                      Giờ thì không nói nhiều nữa, tặng cả nhà series ảnh siêu
                      đẹp trai của Văn Hậu để ngắm cho thích nhé!
                    </p>
                    <p>
                      Bất chấp tin đồn hẹn hò với Doãn Hải My - người đẹp HHVN
                      2020, Văn Hậu vẫn là "bạn trai quốc dân" được nhiều cô gái
                      yêu mến
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/8/2021-5-29-doi-tuyen-viet-nam-hop-uae-sport5-hieu-luong-25-16223264196001820263863-16230934069301077236056.jpg"
                      alt="Van Hau, Doan Van Hau, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Nam Than, Dan Nam Than Doi Tuyen Viet Nam, "
                      note="Nhìn cái body rắn chắc nam tính này đi, muốn không mê hơi khó"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/8/2021-5-28-doi-tuyen-viet-nam-tap-luyen-uae-sport5-hieu-luong-115-1622326544877443360346-16230934069301464634905.jpg"
                      alt="Van Hau, Doan Van Hau, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Nam Than, Dan Nam Than Doi Tuyen Viet Nam, "
                      note="Uống nước cũng ngầu nữa"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/8/2021-5-29-doi-tuyen-viet-nam-hop-uae-sport5-hieu-luong-28-1622315927574949786845-1623093406931958184989.jpg"
                      alt="Van Hau, Doan Van Hau, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Nam Than, Dan Nam Than Doi Tuyen Viet Nam, "
                      note="Nam cầu thủ sở hữu chiều cao vượt trội"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/8/2021-5-27-doi-tuyen-viet-nam-tap-luyen-uae-sport5-hieu-luong-31-1622165598289327406571-1623093750558958539336.jpg"
                      alt="Van Hau, Doan Van Hau, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Nam Than, Dan Nam Than Doi Tuyen Viet Nam, "
                      note="Điều này giúp anh chàng luôn nổi bật giữa đám đông"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/8/2021-5-27-doi-tuyen-viet-nam-tap-luyen-uae-sport5-hieu-luong-40-16221656002181077713714-162309236235551010895.jpg"
                      alt="Van Hau, Doan Van Hau, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Nam Than, Dan Nam Than Doi Tuyen Viet Nam, "
                      note="Và nụ cười cực kì tỏa nắng"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/8/2021-6-4-doi-tuyen-viet-nam-tap-luyen-sport5-hieu-luong-19-16228435319681927634252-1623093529982135599909.jpg"
                      alt="Van Hau, Doan Van Hau, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Nam Than, Dan Nam Than Doi Tuyen Viet Nam, "
                      note="Biểu cảm lém lỉnh của Văn Hậu khi trêu Đức Chinh"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/8/2021-5-27-doi-tuyen-viet-nam-tap-luyen-uae-sport5-hieu-luong-35-1622165599029358560278-162309379513065575050.jpg"
                      alt="Van Hau, Doan Van Hau, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Nam Than, Dan Nam Than Doi Tuyen Viet Nam, "
                      note="Còn đây là biểu cảm thú vị khi anh chàng khoe giày mới với Trọng Hoàng và Công Phượng"
                    />
                    <p>Bonus một chút "múi" cho chị em đây!</p>
                    <p>Ảnh: Sport5 + Cap màn hình</p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/8/2021-5-27-doi-tuyen-viet-nam-tap-luyen-uae-sport5-hieu-luong-41-16223266442531280925592-1623093373754579647098.jpg"
                      alt="Van Hau, Doan Van Hau, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Nam Than, Dan Nam Than Doi Tuyen Viet Nam, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/8/2021-5-27-doi-tuyen-viet-nam-tap-luyen-uae-sport5-hieu-luong-38-1622165599386249580616-16230938324691204395343.jpg"
                      alt="Van Hau, Doan Van Hau, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Nam Than, Dan Nam Than Doi Tuyen Viet Nam, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/8/2021-5-28-doi-tuyen-viet-nam-tap-luyen-uae-sport5-hieu-luong-53-16223264736011792041622-16230935738212055119410.jpg"
                      alt="Van Hau, Doan Van Hau, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Nam Than, Dan Nam Than Doi Tuyen Viet Nam, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/6/8/van-hau-3-15957780231921823994446-crop-159577805833656411500-1602143148738-16021431489151832762530-1623093585322238793069.jpg"
                      alt="Van Hau, Doan Van Hau, Tuyen Viet Nam Tham Du Vong Loai World Cup 2022, Nam Than, Dan Nam Than Doi Tuyen Viet Nam, "
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
