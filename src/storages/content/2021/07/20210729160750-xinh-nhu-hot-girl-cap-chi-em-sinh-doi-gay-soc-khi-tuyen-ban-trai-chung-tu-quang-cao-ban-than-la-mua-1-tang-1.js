import React from "react";
import "components/page.css";
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
"timestamp": '29/07/2021 04:07 PM',
"title": 'Xinh như hot girl, cặp chị em sinh đôi gây sốc khi tuyển bạn trai chung, tự quảng cáo bản thân là "mua 1 tặng 1"',
"description": 'Hai cô nàng hot girl này đang khiến cộng đồng mạng cực kỳ bất ngờ trước tuyên bố của mình.',
"src": '',
"alt": 'HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,',
"category": 'images',
"date": '29/07/2021',
"time": '04:07 PM',
"link": '/xinh-nhu-hot-girl-cap-chi-em-sinh-doi-gay-soc-khi-tuyen-ban-trai-chung-tu-quang-cao-ban-than-la-mua-1-tang-1',
"zcomponent": 'page_20210729160750',
"filepath": './20210729160750-xinh-nhu-hot-girl-cap-chi-em-sinh-doi-gay-soc-khi-tuyen-ban-trai-chung-tu-quang-cao-ban-than-la-mua-1-tang-1.js'
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
  'Xinh như hot girl, cặp chị em sinh đôi gây sốc khi tuyển bạn trai chung, tự quảng cáo bản thân là "mua 1 tặng 1"';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:07 PM";
const description =
  "Hai cô nàng hot girl này đang khiến cộng đồng mạng cực kỳ bất ngờ trước tuyên bố của mình.";
const link =
  "xinh-nhu-hot-girl-cap-chi-em-sinh-doi-gay-soc-khi-tuyen-ban-trai-chung-tu-quang-cao-ban-than-la-mua-1-tang-1";
const tagparam = ["HOT GIRL", "CỘNG ĐỒNG MẠNG", "GÁI XINH"];
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

export default function page_20210729160750() {
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
                <div className="contentBody">
                  <p>
                    Sự xuất hiện của các cặp chị em sinh đôi xinh đẹp, gợi cảm
                    chắc chắn luôn là một trong những chủ đề thu hút sự chú ý
                    của <strong>cộng đồng mạng</strong>. Và chẳng hiểu tình cảm
                    giữa cả hai trong câu chuyện này tốt đẹp tới cỡ nào, khi mà
                    cặp chị em <strong>hot girl</strong> này thậm chí còn có
                    chung suy nghĩ, đó là muốn chia sẻ bạn trai, thậm chí là
                    sống chung với một người chồng nữa, miễn sao anh ta chỉ cần
                    đáp ứng một số yêu cầu tối thiểu của họ là hoàn toàn có thể
                    hưởng ưu đãi "lấy một tặng một".
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/28/screenshot6-1624851301701870091818.png"
                    alt="1, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,"
                    note="Cặp chị em xinh đẹp trong câu chuyện"
                  />
                  <p>
                    Theo đó, nhân vật chính trong câu chuyện đang gây xôn xao
                    lần này là Adel và Alina - những sinh viên đại học bình
                    thường đang theo học ở Kazan. Gần đây, hai cô nàng đã công
                    khai đăng bài trên mạng xã hội với nội dung khá sốc: "Chúng
                    tôi đang tìm kiếm một người đàn ông có thể đưa chúng tôi đến
                    Moscow, rời xa vùng nông thôn nhàm chán này và trải nghiệm
                    những điều mới mẻ". Điều đáng chú ý là nhan sắc của hai cô
                    nàng trông khá ổn, thậm chí thân hình còn không kém phần gợi
                    cảm nữa. Nhưng bất ngờ hơn nữa lại nằm ở phần sau của đoạn
                    quảng cáo: "Từ trước đến nay chúng tôi luôn làm mọi thứ cùng
                    nhau, có thể sống chung cùng với một người chồng, tôi không
                    quan tâm lắm".
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/28/screenshot7-16248517875491430332647.png"
                    alt="2, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,"
                    note="CĐM đang được một phen sốc nặng trước bài đăng tuyển chồng chung của hai cô nàng này"
                  />
                  <p>
                    Điều này nhanh chóng khiến cho Adel và Alina trở nên nổi
                    tiếng và được ví von như cặp sinh đôi{" "}
                    <strong>hot girl</strong> đầy táo bạo. Rất nhanh, hai cô
                    nàng đã dần trở thành những blogger gợi cảm và cải thiện thu
                    nhập của mình thông qua việc quảng cáo cho một số nhãn hiệu
                    thời trang. Tuy nhiên, điều này không làm thay đổi suy nghĩ
                    ban đầu của họ, cả hai vẫn thống nhất rằng: "Chúng tôi đang
                    tìm kiếm một người chồng sẽ cung cấp một cuộc sống giàu có
                    hơn nhiều so với hiện tại".{" "}
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/28/photo-1-1624852011052764043997.jpg"
                    alt="3, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,"
                    note="Hai cô nàng đều sở hữu thân hình vô cùng nóng bỏng và gợi cảm"
                  />
                  <RelationNewsInPage category={category} />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/28/photo-1-1624852150318104860897.jpg"
                    alt="4, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,"
                    note="Hai cô nàng cũng không ngần ngại tìm kiếm chồng giàu sang để đổi đời"
                  />
                  <p>
                    Tuy nhiên, một thời gian rất lâu đã trôi qua, thế nhưng dựa
                    trên những gì mà nhiều người thấy thì trang cá nhân của cặp
                    đôi này vẫn không có bất kỳ bức ảnh nào liên quan tới bạn
                    trai hay chồng của họ. Thay vào đó, đa số đều là những bình
                    luận rất tích cực từ một lượng fan nam đông đảo. Dường như
                    sau màn phỏng vấn gây sốc kia, hai cô nàng cũng đã thành
                    công trong việc thu hút được sự chú ý của mọi người thì
                    phải. Còn vấn đề chồng chung hay mua 1 tặng 1 như đã nói từ
                    trước thì biết đâu đấy, lại chỉ là một màn PR, chiêu trò mà
                    thôi.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/28/photo-1-16248523705431763470656.jpg"
                    alt="5, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,"
                    note="Sau khi thành công trong việc thu hút sự chú ý"
                  />
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/28/photo-1-16248524078711109424169.jpg"
                    alt="6, HOT GIRL,CỘNG ĐỒNG MẠNG,GÁI XINH,"
                    note="Tới nay dường như hai cô nàng này vẫn chưa có bạn trai hay chồng chung thì phải"
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
