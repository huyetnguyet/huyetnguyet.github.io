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
"timestamp": '29/07/2021 04:05 PM',
"title": 'Giảm cân thành công để sở hữu thân hình nóng bỏng, cô gái bỗng hóa thành nữ YouTuber nổi tiếng',
"description": 'Nỗ lực giảm cân của nữ YouTuber này thật đáng để người ta học hỏi.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-162658830079429725748.jpg',
"alt": 'GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,',
"category": 'images',
"date": '29/07/2021',
"time": '04:05 PM',
"link": '/giam-can-thanh-cong-de-so-huu-than-hinh-nong-bong-co-gai-bong-hoa-thanh-nu-youtuber-noi-tieng',
"zcomponent": 'page_20210729160549',
"filepath": './20210729160549-giam-can-thanh-cong-de-so-huu-than-hinh-nong-bong-co-gai-bong-hoa-thanh-nu-youtuber-noi-tieng.js'
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
  "Giảm cân thành công để sở hữu thân hình nóng bỏng, cô gái bỗng hóa thành nữ YouTuber nổi tiếng";
const author = "A Đồi";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:05 PM";
const description =
  "Nỗ lực giảm cân của nữ YouTuber này thật đáng để người ta học hỏi.";
const link =
  "giam-can-thanh-cong-de-so-huu-than-hinh-nong-bong-co-gai-bong-hoa-thanh-nu-youtuber-noi-tieng";
const tagparam = ["GÁI XINH", "HOT GIRL", "YOUTUBER", "NỮ YOUTUBER"];
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

export default function page_20210729160549() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="desktop">
                  <AdsHorizontal />
                </div>
                <div className="contentBody">
                  <p>
                    Đối với những chị em phụ nữ thì vấn đề cân nặng luôn là một
                    chủ đề nhạy cảm và thường tránh được nhắc tới. Cộng đồng
                    mạng cũng đã chứng kiến không ít câu chuyện "vịt hóa thiên
                    nga", thậm chí là đổi đời nhờ vào việc giảm cân. Mới đây thì
                    một câu chuyện tương tự của nữ <strong>YouTuber</strong>{" "}
                    người Hàn Quốc - Na Yoon đã lan truyền nhanh chóng khi cô
                    nàng đã giảm cân thành công từ mức 135,4kg xuống còn
                    73-74kg.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/7/18/photo-1-1626588177372870039802.jpeg"
                    alt="1, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,"
                    note="Na Yoon trước khi giảm cân"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-16265881860911166095796.jpg"
                    alt="2, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,"
                    note="Cơ thể Na Yoon ở thời điểm hiện tại đã trở nên thon gọn đi rất nhiều lần"
                  />
                  <p>
                    Giống như bao thanh niên Hàn Quốc, ẩm thực luôn luôn là niềm
                    đam mê bất tận đối với Na Yoon kể từ khi cô còn ngồi trên
                    ghế nhà trường. Tuy nhiên tới khi cô bước sang tuổi 21 thì
                    mới bất chợt nhận ra rằng mình đã rơi vào tình trạng thừa
                    cân khi cô chỉ cao 1m68 nhưng lại nặng tới 135,4kg. Điều này
                    khiến Na Yoon đặt quyết tâm giảm cân bằng việc tập luyện và
                    áp dụng chế độ ăn kiêng nghiêm ngặt.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/1-1626588266050805490556.jpg"
                    alt="3, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,"
                    note="Na Yoon thường xuyên ghi lại quá trình luyện tập..."
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/2-16265882660601348478732.jpg"
                    alt="4, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,"
                    note="... cũng như chia sẻ công thức ăn kiêng nghiêm ngặt của mình tới khán giả"
                  />
                  <p>
                    Như một cách để lấy thêm động lực cho bản thân, Na Yoon đã
                    quay lại quá trình ăn kiêng của mình và đăng lên YouTube.
                    Sau hơn 2 năm kiên trì giảm cân thì cô nàng chỉ còn nặng
                    73-74kg và sở hữu thân hình vô cùng nóng bỏng. Có lẽ vì thấy
                    được sự thay đổi thần kỳ của Na Yoon mà số người đăng ký
                    kênh của cô trên YouTube đã tăng lên con số hơn 50 nghìn dù
                    cô nàng không hề có ý định "làm content" để câu view.
                  </p>
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-1626588281376875973249.jpg"
                    alt="5, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,"
                    note="Kết quả là cô nàng đã sở hữu thân hình cực kỳ nóng bỏng ở thời điểm hiện tại"
                  />
                  <p>
                    Sau đó thì danh tiếng của Na Yoon cũng trở nên lớn hơn và cô
                    nàng đã được xuất hiện trên các trang tin của Hàn Quốc. Cô
                    nàng cũng nhanh chóng trở thành một người mẫu cực kỳ hot khi
                    câu chuyện giảm cân của Na Yoon có tác dụng truyền cảm hứng
                    quá lớn.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-16265882907641525395702.jpg"
                    alt="6, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,"
                    note="Na Yoon nhanh chóng trở thành người mẫu sau khi giảm cân thành công"
                  />
                  <p>
                    Tuy nhiên điều này lại khiến Na Yoon gặp rắc rối khi các
                    bình luận mang tính "body shaming" nhắm tới Na Yoon xuất
                    hiện ngày càng nhiều. Vì vậy nữ <strong>YouTuber</strong>{" "}
                    này đã phải xóa rất nhiều video, đặt kênh của mình ở chế độ
                    riêng tư. Thật may mắn là sự việc này không đi xa hơn và Na
                    Yoon vẫn tiếp tục đăng video hướng dẫn ăn kiêng, tập luyện
                    lên YouTube cho khán giả học hỏi.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-162658830079429725748.jpg"
                    alt="7, GÁI XINH,HOT GIRL,YOUTUBER,NỮ YOUTUBER,"
                    note=""
                  />
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
