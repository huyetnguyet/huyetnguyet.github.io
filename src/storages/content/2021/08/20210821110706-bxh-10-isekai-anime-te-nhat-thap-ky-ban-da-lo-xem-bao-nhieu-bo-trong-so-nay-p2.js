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
"timestamp": '21/08/2021 11:07 AM',
"title": 'BXH 10 isekai anime tệ nhất thập kỷ, bạn đã "lỡ xem" bao nhiêu bộ trong số này? (P.2)',
"description": '5 bộ isekai anime đứng đầu BXH chắc chắn sẽ khiến nhiều người ngạc nhiên',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/mom-online-16294522284821028887287.jpeg',
"alt": 'ANIME,ISEKAI,',
"category": 'games',
"date": '21/08/2021',
"time": '11:07 AM',
"link": '/bxh-10-isekai-anime-te-nhat-thap-ky-ban-da-lo-xem-bao-nhieu-bo-trong-so-nay-p2',
"zcomponent": 'page_20210821110706',
"filepath": './20210821110706-bxh-10-isekai-anime-te-nhat-thap-ky-ban-da-lo-xem-bao-nhieu-bo-trong-so-nay-p2.js'
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
  'BXH 10 isekai anime tệ nhất thập kỷ, bạn đã "lỡ xem" bao nhiêu bộ trong số này? (P.2)';
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "21/08/2021 11:07 AM";
const description =
  "5 bộ isekai anime đứng đầu BXH chắc chắn sẽ khiến nhiều người ngạc nhiên";
const link =
  "bxh-10-isekai-anime-te-nhat-thap-ky-ban-da-lo-xem-bao-nhieu-bo-trong-so-nay-p2";
const tagparam = ["ANIME", "ISEKAI"];
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

export default function page_20210821110706() {
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
                      Dù <strong>isekai</strong> là thể loại đang được rất nhiều
                      người yêu thích, nhưng cũng như những thể loại khác, vẫn
                      có những bộ isekai <strong>anime</strong> có chất lượng tệ
                      đến mức khán giả ước rằng chúng chưa từng tồn tại. Phần
                      tiếp theo của BXH sẽ tiết lộ 5 bộ phim được đánh giá thấp
                      đến cuối bảng trong vòng một thập kỷ vừa qua.
                    </p>
                    <h5>
                      5. Do You Love Your Mom And Her Two-Hit Multi-Target
                      Attacks?
                    </h5>
                    <p>
                      Mặc dù loạt <strong>anime</strong> này có ý tưởng khá độc
                      đáo, nhưng nó vẫn lọt vào bảng xếp hạng các anime dở tệ
                      nhất thập kỷ. Series xoay quanh Masato Oosuki và Mamako
                      Oosuki, hai mẹ con chuyển sinh vào thế giới game cùng
                      nhau.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/mom-online-16294522284821028887287.jpeg"
                      alt="1, ANIME,ISEKAI,"
                      note=""
                    />

                    <p>
                      Ban đầu Masato rất hào hứng với việc thể hiện, học hỏi các
                      kỹ năng của mình cho đến khi cậu phát hiện ra mẹ cậu mới
                      là người có sức mạnh đáng kinh ngạc. Vốn dĩ cốt truyện
                      được thiết lập để đề cao tình cảm mẹ con, nhưng cách dẫn
                      dắt của phim đã khiến khán giả dựng tóc gáy. Dù vậy, điều
                      an ủi cho ekip làm phim là nhân vật Mamako Oosuki trở
                      thành một trong số các nhân vật <strong>anime</strong>{" "}
                      được yêu thích nhấ năm 2019.
                    </p>
                    <h5>4. The Master Of Ragnarok And Blesser Of Einherjar</h5>
                    <p>
                      Khi một học sinh trung học quyết định tìm hiểu về truyền
                      thuyết liên quan đến ngôi đền gần nhà, cậu đã được chuyển
                      sinh đến thế giới khác. Tại đó, các phe phái giao tranh
                      khốc liệt với nhau để giành quyền thống trị.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/master-of-einherjar-16294522509631066499667.jpeg"
                      alt="2, ANIME,ISEKAI,"
                      note=""
                    />

                    <p>
                      Nhân vật chính Yuuto gia nhập vào tộc Sói, cậu đã sử dụng
                      kiến thức siêu việt mà mình có được từ chiếc điện thoại di
                      động chạy bằng năng lượng mặt trời để đem lại chiến thắng
                      cho gia tộc hết lần này đến lần khác. Đáng lẽ đây sẽ là
                      một bộ <strong>anime</strong> hành động tuyệt vời, nhưng
                      đáng tiếc nó lại trở thành câu chuyện về Yuuto và harem
                      của cậu.
                    </p>
                    <h5>
                      3. <strong>Isekai</strong> Cheat Magician
                    </h5>
                    <p>
                      Taichi Nishimura và Rin Azuma đang sống cuộc đời học sinh
                      trung học yên ả cho đến khi cả hai bị vòng tròn ma thuật
                      dịch chuyển đến một thế giới khác. Ở đó, mọi thứ vô cùng
                      kỳ lạ, đó còn là nơi sinh sống của nhiều sinh vật kỳ bí
                      như yêu tinh và thú nhân.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/isekai-cheat-magician-16294522712501277105905.jpg"
                      alt="3, ANIME,ISEKAI,"
                      note=""
                    />

                    <p>
                      Cả Taichi và Rin để muốn trở thành nhà thám hiểm, nhưng họ
                      phát hiện ra sức mạnh của mình vượt các pháp sư mạnh nhất
                      ở thế giới chuyển sinh rất nhiều lần. Dù hầu hết các bộ
                      truyện <strong>isekai</strong> đều sẽ đi đến việc gia tăng
                      sức mạnh, nhưng Isekai Cheat Magician lại chú trọng một
                      cách quá đà vào sức mạnh của nhân vật.
                    </p>
                    <h5>2. Seven Senses Of The Re’union</h5>
                    <p>
                      Câu chuyện xảy ra trong một thế giới VRMMO phổ biến tên là
                      Union. Ở đây, gia tộc đứng đầu là gia tộc Subaru, và gia
                      tộc này được tạo ra từ những đứa trẻ mang nguyên tố. Một
                      ngày nọ, một trong số những đứa trẻ qua đời. Cái chết bất
                      ngờ khiến cho trò chơi bị đóng cửa vĩnh viễn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/seven-senses-of-reunion-162945228807857354051.jpg"
                      alt="4, ANIME,ISEKAI,"
                      note=""
                    />

                    <p>
                      Một vài năm sau đó, trò chơi bất ngờ được hồi sinh với tên
                      gọi Re-Union. Các thành viên của Subaru bị kéo vào trò
                      chơi khi biết rằng người bạn đã chết của họ dường như đã
                      chuyển sinh vào thế giới game.
                    </p>
                    <h5>1.Conception</h5>
                    <p>
                      Đây là một trong số những bộ phim bị đánh giá thấp nhất
                      trên mọi bảng xếp hạng, vì khán giả cho rằng nội dung phim
                      chỉ hợp với thể loại truyện tranh 18+. Câu chuyện kể về
                      Itsuki, một học sinh trung học bị triệu hồi đến thế giới
                      khác. Vương quốc Gravania mà Itsuki đến đang gặp rắc rối
                      vì những kẻ bị vấy bẩn, và cậu học sinh được hướng dẫn
                      giải quyết rắc rối này bằng cách gặp gỡ với các Thiếu nữ
                      tinh tú.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/20/conception-16294523031841013215067.jpg"
                      alt="5, ANIME,ISEKAI,"
                      note=""
                    />

                    <p>
                      Tại sao Itsuki cần gặp các Thiếu nữ tinh tú? Câu trả lời
                      là vì cậu ta cần có con với họ! Chỉ những đứa trẻ do
                      Itsuki và các thiếu nữ này sinh ra mới có khả năng đánh
                      bại những kẻ bị vấy bẩn. Cho đến khi Itsuki hoàn thành
                      được nhiệm vụ sinh con này thì cậu mới được về nhà. Tóm
                      lại, đây có lẽ là một bộ <strong>anime</strong> khiến khán
                      giả cạn lời với nội dung.
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
