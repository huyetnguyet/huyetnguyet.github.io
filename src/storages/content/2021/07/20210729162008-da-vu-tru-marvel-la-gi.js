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
"timestamp": '29/07/2021 04:20 PM',
"title": 'Đa vũ trụ Marvel là gì?',
"description": 'Cái kết của series Loki đã chính thức đưa MCU bước vào đa vũ trụ, nhưng rốt cuộc thì tình trạng này là gì mà lại có vẻ nghiêm trọng đến vậy?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-16266197121021694927468.jpg',
"alt": 'MARVEL,ĐA VŨ TRỤ,SIÊU ANH HÙNG,MARVEL MULTIVERSE,TRUYỆN TRANH,ĐA VŨ TRỤ MARVEL,',
"category": 'news',
"date": '29/07/2021',
"time": '04:20 PM',
"link": '/da-vu-tru-marvel-la-gi',
"zcomponent": 'page_20210729162008',
"filepath": './20210729162008-da-vu-tru-marvel-la-gi.js'
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
const title = "Đa vũ trụ Marvel là gì?";
const author = "DG";
const source = "Pháp luật và Bạn đọc";
const timestamp = "29/07/2021 04:20 PM";
const description =
  "Cái kết của series Loki đã chính thức đưa MCU bước vào đa vũ trụ, nhưng rốt cuộc thì tình trạng này là gì mà lại có vẻ nghiêm trọng đến vậy?";
const link = "da-vu-tru-marvel-la-gi";
const tagparam = [
  "MARVEL",
  "ĐA VŨ TRỤ",
  "SIÊU ANH HÙNG",
  "MARVEL MULTIVERSE",
  "TRUYỆN TRANH",
  "ĐA VŨ TRỤ MARVEL",
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

export default function page_20210729162008() {
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
                      “<strong>Đa vũ trụ</strong>” có lẽ là một trong những từ
                      khóa được tìm kiếm nhiều nhất sau khi series Loki khép
                      lại. Trên thực tế, ý tưởng này đã được{" "}
                      <strong>Marvel</strong> Studios manh nha từ Avengers:
                      Endgame, đặc biệt là trong phân cảnh Thượng Cổ Tôn Giả
                      giải thích cho Bruce Banner về sự hình thành của nhánh
                      thời gian mới khi thay đổi 1 sự việc trong quá khứ. Giờ
                      đây, không những MCU đã chính thức bước vào đa vũ trụ, mà
                      còn phải đối diện với nguy cơ 1 cuộc chiến tranh lớn nổ ra
                      giữa các chiều không gian khác nhau.
                    </p>
                    <p>
                      Vậy chính xác thì <strong>Đa vũ trụ</strong>{" "}
                      <strong>Marvel</strong> (
                      <strong>Marvel Multiverse</strong>) là gì và sẽ ảnh hưởng
                      thế nào đến các dự án tương lai của MCU phase 4? Dựa vào
                      những thông tin từ <strong>truyện tranh</strong>, chúng ta
                      sẽ cùng tìm hiểu 1 cách đơn giản nhất trong bài viết này.
                    </p>
                    <p>
                      Nói 1 cách ngắn gọn là dễ hiểu nhất,{" "}
                      <strong>Đa vũ trụ</strong> <strong>Marvel</strong> là tất
                      cả những thực tại mà toàn bộ các nhân vật của Marvel tồn
                      tại. Trong Spider-Man: Far From Home (2019), khi phản diện
                      Mysterio ba hoa với Peter Parker về các vũ trụ song song
                      và khẳng định Spidey đến từ Earth-616, hắn không hoàn toàn
                      “chém gió” như nhiều người lầm tưởng. Ngược lại, những gì
                      Mysterio chia sẻ lại phần nào đó phản ánh đúng về đa vũ
                      trụ theo cách giải thích trong nguyên tác.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-16266197121021694927468.jpg"
                      alt="1, MARVEL,ĐA VŨ TRỤ,SIÊU ANH HÙNG,MARVEL MULTIVERSE,TRUYỆN TRANH,ĐA VŨ TRỤ MARVEL,"
                      note=""
                    />
                    <p>
                      <strong>Đa vũ trụ</strong> được định nghĩa là một tập hợp
                      các vũ trụ song song có cùng hệ thống phân cấp phổ quát,
                      và Đa vũ trụ <strong>Marvel</strong> cũng vậy. Mỗi thực
                      tại này lại có những phiên bản khác nhau của các{" "}
                      <strong>siêu anh hùng</strong> vốn đã quá nổi tiếng trên
                      thế giới. Nếu từng xem Spider-Man: Into the Spider-Verse
                      (2018), bạn cũng sẽ phần hiểu được khái niệm này và lý do
                      vì sao lại có nhiều phiên bản của Spidey đến vậy.
                    </p>
                    <p>
                      Hiểu rộng hơn nữa, <strong>Đa vũ trụ</strong>{" "}
                      <strong>Marvel</strong> có thể là 1 phần phụ của Omniverse
                      - tập hợp tất cả các thực tại mà bạn có thể nghĩ đến, ví
                      dụ như DCEU, Star Wars, các series truyền hình khác hay
                      thậm chí là chính thực tại mà chúng ta đang sinh sống. Tuy
                      nhiên, chúng ta sẽ không bàn luận sâu vào vấn đề này, bởi
                      suy cho cùng, khái niệm về đa vũ trụ trong{" "}
                      <strong>truyện tranh</strong> cũng chỉ là 1 phương pháp
                      cho phép các tác giả có thêm đất để sáng tạo nội dung mà
                      không lo bị mâu thuẫn với những tác phẩm đã xuất bản trước
                      đó. Có vô số thực tại khác nhau, đồng nghĩa với việc họ sẽ
                      không bao giờ sợ cạn ý tưởng cả.
                    </p>
                    <h5>
                      Số lượng thực tại trong <strong>Đa vũ trụ</strong> Marvel
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-1-1626619714596865067773.jpg"
                      alt="2, MARVEL,ĐA VŨ TRỤ,SIÊU ANH HÙNG,MARVEL MULTIVERSE,TRUYỆN TRANH,ĐA VŨ TRỤ MARVEL,"
                      note=""
                    />
                    <p>
                      Như đã đề cập ở trên, số lượng thực tại trong{" "}
                      <strong>Đa vũ trụ</strong> <strong>Marvel</strong> là vô
                      tận. Thậm chí khi truy cập vào trang tra cứu thông tin
                      Marvel’s Fandom, bạn sẽ thấy 1 danh sách liệt kê toàn bộ
                      các thực tại khác nhau, kèm theo dòng thông báo “chưa hoàn
                      thiện”. Tuy vậy, các dòng thời gian mới hình thành được
                      tách nhánh từ dòng thời gian cổ nhất (và cũng là trung tâm
                      nhất) của Marvel, được biết đến với tên gọi Earth-616. Đây
                      cũng chính là cái tên mà Mysterio đã nhắc đến khi nói về
                      MCU. Nhưng thực tế, MCU lại là Earth-19999.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Một vài thực tại đáng chú ý trong{" "}
                      <strong>Đa vũ trụ</strong> <strong>Marvel</strong> bao gồm
                      Earth-1610, được biết đến với tên gọi Ultimate Universe;
                      vũ trụ của Spider-Man 2099 là Earth-928; và thực tại thây
                      ma của Marvel (Marvel Zombies) lại là Earth-2149, sẽ xuất
                      hiện trong series hoạt hình What If…? sắp ra mắt vào ngày
                      21/8 tới đây. Vũ trụ của loạt phim X-Men là Earth-TRN414,
                      trong khi thực tại mà chúng ta đang sinh sống là
                      Earth-1218.
                    </p>
                    <h5>
                      Trái Đất ở các thực tại khác nhau lại sở hữu{" "}
                      <strong>siêu anh hùng</strong> trung tâm khác nhau
                    </h5>
                    <p>
                      Làm sao fan có thể theo dõi toàn bộ các{" "}
                      <strong>siêu anh hùng</strong> trong vô số thực tại như
                      vậy được? Liệu ý tưởng <strong>đa vũ trụ</strong> có khiến
                      họ “bội thực <strong>truyện tranh</strong>” hay không? Có
                      thể, nhưng chìa khóa nằm ở chỗ với mỗi thực tại khác nhau,
                      bạn chỉ cần tập trung vào mạch truyện 1 siêu anh hùng là
                      đủ. Điều quan trọng là làm thế nào để xác định đúng nhân
                      vật trung tâm của từng vũ trụ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-2-1626619715123138951420.jpg"
                      alt="3, MARVEL,ĐA VŨ TRỤ,SIÊU ANH HÙNG,MARVEL MULTIVERSE,TRUYỆN TRANH,ĐA VŨ TRỤ MARVEL,"
                      note=""
                    />
                    <p>
                      Ví dụ, trong Earth-616, Spider-Man chính là người có mỗi
                      liên kết với tất cả mọi thứ, mọi sự kiện xảy ra trong dòng
                      thời gian này. Wolverine thì là{" "}
                      <strong>siêu anh hùng</strong> trung tâm của Ultimate
                      Universe - nguồn cảm hứng chính cho loạt phim X-Men trước
                      đây của Fox và giúp Hugh Jackman trở thành 1 tượng đài bất
                      diệt trong lòng người hâm mộ. Dựa vào logic này, chúng ta
                      cũng có thể tạm khẳng định Tony Stark/Iron Man chính là
                      nhân vật chính của Earth-19999, sau khi mở màn cho MCU vào
                      năm 2008. Tuy nhiên, điều này có lẽ sẽ sớm thay đổi bởi
                      chàng Người Sắt đã “bỏ cuộc chơi” trong Avengers: Endgame
                      (2019) mất rồi.
                    </p>
                    <p>
                      Không phải nhân vật nào cũng tồn tại trong{" "}
                      <strong>Đa vũ trụ</strong> Marvel
                    </p>
                    <p>
                      Có một số nhân vật không có liên kết trực tiếp tới bất kỳ
                      thực tại nào, và hành động của họ cũng không ảnh hưởng đến
                      các vũ trụ đang tồn tại. Thế nhưng, quyền năng của họ lớn
                      đến mức họ có thể quyết định liệu 1 dòng thời gian có nên
                      tồn tại trong <strong>đa vũ trụ</strong> hay không. Những
                      nhân vật này thường là các Celestial hay các tổ chức độc
                      lập, đóng vai trò như những người bảo vệ cho Đa vũ trụ{" "}
                      <strong>Marvel</strong>.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/18/photo-3-16266197156482078176780.jpg"
                      alt="4, MARVEL,ĐA VŨ TRỤ,SIÊU ANH HÙNG,MARVEL MULTIVERSE,TRUYỆN TRANH,ĐA VŨ TRỤ MARVEL,"
                      note=""
                    />
                    <p>
                      Ví dụ như Merlyn là người giám sát, bảo hộ và phân loại
                      ban đầu của <strong>đa vũ trụ</strong> này. Đây cũng là
                      người đã thành lập Captain Britain Corps, chỉ định và phân
                      công các đặc vụ quản lý từng thực tại khác nhau. Trong
                      series Loki, tổ chức Time Variance Authority cũng đóng vai
                      trò tương tự. Nhưng mục đích cuối cùng của He Who Remains,
                      người đứng sau tổ chức này, lại là xóa bỏ những dòng thời
                      gian phân nhánh để đảm bảo quyền lực của bản thân và ngăn
                      chặn 1 cuộc chiến đa vũ trụ nổ ra trong tương lai.
                    </p>
                    <p>
                      <strong>Đa vũ trụ</strong> chắc chắn sẽ là đề tài trung
                      tâm của MCU phase 4 với rất nhiều tác phẩm sẽ tập trung
                      khai thác ý tưởng này. Sau Loki, khán giả sẽ tiếp tục "rối
                      não" với hàng loạt bom tấn liên quan như What If...?,
                      Doctor Strange in the Multiverse of Madness, Spider-Man:
                      No Way Home, Ant-Man & the Wasp: Quantumania, hay mùa 2
                      của Loki. Không chỉ mang đến dàn phản diện sừng sỏ hoàn
                      toàn mới (đa số sẽ là biến thể của Kang), đây còn là cơ
                      hội để <strong>Marvel</strong> Studios giới thiệu hàng
                      loạt nhân vật mà họ mới rước từ Fox về, trong đó bao gồm
                      cả các dị nhân X-Men, Fantastic Four, hay "thánh lầy" bất
                      tử Deadpool.
                    </p>
                    <p>Theo cinemablend</p>
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
