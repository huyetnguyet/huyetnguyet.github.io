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
"timestamp": '05/08/2021 08:45 AM',
"title": 'Những bộ phim "thất lạc" của tuổi thơ chúng ta: Một thời mất ăn mất ngủ, giờ muốn tìm lại cái tên cũng khó!',
"description": 'Liệu có ai mất cả thanh xuân để đi tìm lại những bộ phim này không?',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/g0hlezfqjp5drxmzkgzww9pup7n-1627798441341617348561.jpg',
"alt": 'Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,',
"category": 'news',
"date": '05/08/2021',
"time": '08:45 AM',
"link": '/nhung-bo-phim-that-lac-cua-tuoi-tho-chung-ta-mot-thoi-mat-an-mat-ngu-gio-muon-tim-lai-cai-ten-cung-kho',
"zcomponent": 'page_20210805084545',
"filepath": './20210805084545-nhung-bo-phim-that-lac-cua-tuoi-tho-chung-ta-mot-thoi-mat-an-mat-ngu-gio-muon-tim-lai-cai-ten-cung-kho.js'
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
  'Những bộ phim "thất lạc" của tuổi thơ chúng ta: Một thời mất ăn mất ngủ, giờ muốn tìm lại cái tên cũng khó!';
const author = "HIEUTHUBA,";
const source = "Trí Thức Trẻ";
const timestamp = "05/08/2021 08:45 AM";
const description =
  "Liệu có ai mất cả thanh xuân để đi tìm lại những bộ phim này không?";
const link =
  "nhung-bo-phim-that-lac-cua-tuoi-tho-chung-ta-mot-thoi-mat-an-mat-ngu-gio-muon-tim-lai-cai-ten-cung-kho";
const tagparam = [
  "Zathura: A Space Adventure",
  "Kristen Stewart",
  "josh hutcherson",
  "taylor lautner",
  "rachel mcadams",
  "Anna Faris",
  "phim Âu Mỹ",
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

export default function page_20210805084545() {
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
                      Hollywood đã mang đến cho khán giả khắp thế giới rất nhiều
                      cái tên kinh điển, xuất sắc. Khán giả Việt Nam thời điểm
                      những năm 2000-2010 vẫn còn thường xuyên xem phim qua các
                      kênh truyền hình, và mặc dù có những phim không thể nhớ
                      nổi tên thì chắc chắn vẫn "nằm lòng" nội dung, diễn viên
                      và để lại ấn tượng đẹp thời thơ bé. Những bộ phim đình đám
                      ngày ấy nhưng giờ không còn được nhắc đến, thường được gọi
                      là "lost movies" - những bộ phim thất lạc. Dưới đây là
                      những phim điện ảnh nổi tiếng tại Việt Nam cách đây nhiều
                      năm, liệu bạn còn nhớ hay đã quên?
                    </p>
                    <h5>
                      1. Zathura: A Space Adventure - Lạc Ngoài Không Gian
                      (2005)
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/g0hlezfqjp5drxmzkgzww9pup7n-1627798441341617348561.jpg"
                      alt="1, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/mv5bmtuznzewndc0ml5bml5banbnxkftztgwmdizmzmymdiv1-16277984413531881713574.jpg"
                      alt="2, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/maxresdefault-16277984413551251335312.jpg"
                      alt="3, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />
                    <p>
                      Có sự tham gia của <strong>Kristen Stewart</strong> và{" "}
                      <strong>Josh Hutcherson</strong>, bộ phim phiêu lưu viễn
                      tưởng Zathura kể về trò chơi boardgame giúp tất cả có thể
                      du hành vũ trụ, tham gia chuyến hành trình vừa ly kỳ, vừa
                      nguy hiểm. Zathura có cùng tác giả với thương hiệu Jumanji
                      nổi tiếng, mặc dù được đánh giá cao bởi giới chuyên môn
                      thì lại không thành công về mặt thương mại. Dẫu sao, phim
                      vẫn rất được yêu thích tại Việt Nam khi xuất hiện trên các
                      kênh truyền hình chiếu phim.
                    </p>
                    <h5>
                      2. The Secret Of The Magic Gourd - Bí Mật Của Bảo Hồ Lô
                      (2007)
                    </h5>
                    <p>
                      Đây là một trong những bộ phim khá nổi tiếng, được phát
                      sóng trên kênh truyền hình Disney Channel nhiều lần và
                      khiến khán giả nhí say đắm. The Secret Of The Magic Gourd
                      kể về một cậu bé vô tình phát hiện một quả hồ lô thần kỳ,
                      có thể biến mọi điều ước của cậu thành hiện thực. Tuy
                      nhiên, mọi chuyện không phải lúc nào cũng như là mơ, và
                      khi cậu muốn rời bỏ quả hồ lô này thì lại gặp rắc rối
                      không tưởng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/p194043pv10ad-1627798640623501835258.jpg"
                      alt="4, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/97ad40994481e77dad2bc9c51bc1921c8d91c76d-1627798640626343733212.jpg"
                      alt="5, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/-16277986406271648641142.jpg"
                      alt="6, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />
                    <h5>
                      3. Minutemen - Những Anh Chàng Vượt Thời Gian (2008)
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/p176538pv8ab-16277987522301539209374.jpg"
                      alt="7, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/image-28759-md7ckzr693-1627798752233423010648.jpg"
                      alt="8, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/image-28759-1ukx131j8x-16277987522342131442746.jpg"
                      alt="9, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />
                    <p>
                      Bộ phim Disney kể về 3 anh chàng du hành thời gian này đã
                      từng làm nhiều khán giả phải mê mệt. Với mục đích ban đầu
                      chỉ là để quay về quá khứ và "cứu nguy" cho bản thân, bạn
                      bè lúc cần, thế nhưng 3 nhân vật chính lại không ngờ tới
                      "hiệu ứng cánh bướm" xảy ra, khiến cho mọi chuyện trở nên
                      hỗn loạn, tạo ra thảm kịch lớn hơn.
                    </p>
                    <RelationNewsInPage category={category} />

                    <h5>4. Little Man - Người Tí Hon (2006)</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/poster-780-162779884368479622111.jpg"
                      alt="10, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/marlon-wayans-16277988436881325874366.jpg"
                      alt="11, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/zyi0t8ojibqjdrqp80kuw6jnc0u-1627798843689945167533.jpg"
                      alt="12, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />
                    <p>
                      Sau khi ra khỏi tù, tên tội phạm "tí hon" Calvin Sims kết
                      hợp cùng người anh điên khùng Percy của mình để đi ăn trộm
                      kim cương. Tuy nhiên khi bị cảnh sát đuổi theo, Calvin đã
                      giấu tạm viên kim cương vào túi của một người phụ nữ. Sau
                      đó, để lấy lại viên kim cương từ người phụ nữ này, Calvin
                      đã phải cải trang làm em bé bị bỏ rơi trước cửa nhà họ.
                      Hàng loạt sự kiện bi hài diễn ra, vừa "xàm xí" vừa gây
                      cười liên tục tới khán giả.
                    </p>
                    <h5>
                      5. The Adventure Of Sharkboy And Lavagirl - Cậu Bé Cá Mập
                      Và Cô Bé Nham Thạch (2005)
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/p36122pv10ac-1627799089855370629812.jpg"
                      alt="13, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/theadventuresofsharkboyandlavagirl15278740140-16277990898601941458528.jpeg"
                      alt="14, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/sharkboy-lavagirl-1627799089862403999480.jpg"
                      alt="15, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />
                    <p>
                      Một trong những bộ phim siêu nhân "đời đầu" chính là The
                      Adventure Of Sharkboy And Lavagirl. Phim kể về Max - một
                      cậu bé hay bị bắt nạt ở trường bất ngờ gặp được 2 người
                      bạn tưởng tượng của mình. Tuy nhiên, thảm họa ập đến và họ
                      cần Max để giải cứu thế giới. Phim có sự tham gia của anh
                      chàng "người sói" <strong>Taylor Lautner</strong>. Năm
                      2020, Netflix đã sản xuất một phần phim "hậu truyện" tên
                      We Can Be Heroes kể về con cái của cậu bé cá mập và cô bé
                      nham thạch.
                    </p>
                    <h5>6. The Hot Chick - Sự Hoán Đổi Diệu Kỳ (2002)</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/f70e4a2e-6af1-4a77-9278-a9ca8e59ee2a-1627799217968758139839.jpg"
                      alt="16, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/hot-chick-2002-16277992179771056854909.jpg"
                      alt="17, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/1/p7kn5lvfvm1x-16277992179801486760695.jpg"
                      alt="18, Zathura: A Space Adventure,Kristen Stewart,josh hutcherson,taylor lautner,rachel mcadams,Anna Faris,phim Âu Mỹ,"
                      note=""
                    />

                    <p>
                      Bộ phim hài The Hot Chick đình đám tại Việt Nam kể về cô
                      nàng Jesscia xinh đẹp mà chảnh chọe, xấu tính. Jessica ăn
                      cắp một đôi bông tai cổ đại ở cửa hàng, không ngờ rằng đây
                      là đôi bông tai bị "nguyền rủa". Sáng ngày hôm sau,
                      Jessica tỉnh dậy và thấy mình đã bị hoán đổi cơ thể với
                      một "ông chú" 30 tuổi là tội phạm. Từ đó, cô phải tìm cách
                      để lấy lại thân thể của mình. Phim có sự tham gia của dàn
                      sao nổi tiếng Hollywood là Rob Schneider,{" "}
                      <strong>Rachel McAdams</strong>,{" "}
                      <strong>Anna Faris</strong>.
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
