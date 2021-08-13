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
"timestamp": '08/08/2021 03:21 PM',
"title": 'The Suicide Squad: Tầng lớp cặn bã của siêu anh hùng làm nên điều Marvel chắc chắn sẽ chối từ',
"description": 'The Suicide Squad hẳn là bộ phim siêu anh hùng bạo lực, máu me nhất từ trước tới nay - đến cái mức mà Deadpool trông có vẻ hiền lành hơn hẳn.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/ngang-16284211045481640544690.png',
"alt": 'Suicide Squad (2016),James Gunn,DCEU,DC Universe,phim DC,DC,phim siêu anh hùng,review phim,phim Âu Mỹ,The Suicide Squad (2021),',
"category": 'stars',
"date": '08/08/2021',
"time": '03:21 PM',
"link": '/the-suicide-squad-tang-lop-can-ba-cua-sieu-anh-hung-lam-nen-dieu-marvel-chac-chan-se-choi-tu',
"zcomponent": 'page_20210808152116',
"filepath": './20210808152116-the-suicide-squad-tang-lop-can-ba-cua-sieu-anh-hung-lam-nen-dieu-marvel-chac-chan-se-choi-tu.js'
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
  "The Suicide Squad: Tầng lớp cặn bã của siêu anh hùng làm nên điều Marvel chắc chắn sẽ chối từ";
const author = "HIEUTHUBA,";
const source = "Trí Thức Trẻ";
const timestamp = "08/08/2021 03:21 PM";
const description =
  "The Suicide Squad hẳn là bộ phim siêu anh hùng bạo lực, máu me nhất từ trước tới nay - đến cái mức mà Deadpool trông có vẻ hiền lành hơn hẳn.";
const link =
  "the-suicide-squad-tang-lop-can-ba-cua-sieu-anh-hung-lam-nen-dieu-marvel-chac-chan-se-choi-tu";
const tagparam = [
  "Suicide Squad (2016)",
  "James Gunn",
  "DCEU",
  "DC Universe",
  "phim DC",
  "DC",
  "phim siêu anh hùng",
  "review phim",
  "phim Âu Mỹ",
  "The Suicide Squad (2021)",
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

export default function page_20210808152116() {
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
                      Thời điểm bom tấn <i>Suicide Squad</i> ra mắt năm 2016, cả
                      thế gian phải bàng hoàng, ngơ ngác và bật ngửa khi hãng
                      Warner Bros. lại có thể biến một chủ đề, dàn nhân vật thú
                      vị trở thành câu chuyện nhạt nhẽo, chướng tai gai mắt đến
                      vậy. Thế là ý tưởng về chuyến phiêu lưu của những "siêu
                      anh hùng" xấu xa bị gác lại tận 5 năm ròng rã, cho đến khi
                      The <i>Suicide Squad</i> ra mắt vào thời điểm hiện tại.
                    </p>
                    <p>
                      Đạo diễn <strong>James Gunn</strong> - được{" "}
                      <strong>DC</strong> nhanh chóng "vợt" về sau chút lùm xùm
                      với Disney - đã mang những kinh nghiệm từ thành công của
                      Guardians Of the Galaxy nhà Marvel vào bộ phim lần này,
                      đồng thời tìm cách nâng cấp nó. Cùng lúc đó, cả thế giới
                      nín thở chờ đợi liệu The <i>Suicide Squad</i> sẽ thực sự
                      mang lại thành công xứng đáng cho DC, hay lại là một phiên
                      bản bắt chước người bạn Marvel không-hơn-không-kém. May
                      quá, The <i>Suicide Squad</i> là một bộ phim hay (đối với
                      phần lớn mọi người).
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/ngang-16284211045481640544690.png"
                      alt="1, Suicide Squad (2016),James Gunn,DCEU,DC Universe,phim DC,DC,phim siêu anh hùng,review phim,phim Âu Mỹ,The Suicide Squad (2021),"
                      note=""
                    />
                    <h5>
                      Công thức thành công với những kẻ "cặn bã" nhất thế giới
                      siêu anh hùng
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/the-suicide-squad-cast-1269522-1280x0-1-16284216531102023016648.jpeg"
                      alt="2, Suicide Squad (2016),James Gunn,DCEU,DC Universe,phim DC,DC,phim siêu anh hùng,review phim,phim Âu Mỹ,The Suicide Squad (2021),"
                      note=""
                    />
                    <p>
                      Vẫn kể về một nhóm những kẻ tồi tệ, xấu xa lên đường giải
                      cứu thế giới, The <i>Suicide Squad</i> trên lý thuyết
                      chính là phần phim hậu truyện, tiếp nối tác phẩm{" "}
                      <i>Suicide Squad</i> năm 2016. Tuy nhiên bộ phim năm ấy dở
                      đến mức <strong>James Gunn</strong> quyết định "ngó lơ"
                      toàn bộ. Chỉ cần xem khoảng 15 phút đầu, khán giả sẽ hiểu
                      ngay vị đạo diễn này đang khao khát được bấm nút "F5" cho
                      toàn bộ vũ trụ <strong>DC</strong> như thế nào. Cũng không
                      ai muốn phản đối, bởi vì đây mới chính là chất liệu và sự
                      thú vị mà vũ trụ điện ảnh này cần.
                    </p>
                    <h5>
                      The <i>Suicide Squad</i> này mới chính là chất liệu thú vị
                      mà vũ trụ điện ảnh <strong>DC</strong> đang cần.
                    </h5>
                    <p>
                      Bên cạnh Harley Quinn và Rick Flag, The{" "}
                      <i>Suicide Squad</i> giới thiệu tới khán giả một hội phản
                      diện hoàn toàn mới mẻ - và sự xuất hiện của họ cũng đánh
                      dấu "cú lừa" đầu tiên mà bộ phim này mang tới người xem.
                      Có Bloodsport - một tay súng kỳ cựu từng khiến Superman
                      phải cấp cứu; có Peacemaker - người tin vào việc gìn giữ
                      hòa bình đến mức sẵn sàng chém giết vì điều đó; có
                      Polka-Dot Man - chàng trai nhút nhát nhưng sở hữu năng lực
                      đáng sợ do tuổi thơ bị bạo hành; có Ratcatcher 2 - cô gái
                      với khả năng điều khiển chuột; hay King Shark - một... con
                      cá mập với khao khát ăn thịt người khác.
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/empaug21newsstand-3rgb-1628421785242166146301.jpeg"
                      alt="3, Suicide Squad (2016),James Gunn,DCEU,DC Universe,phim DC,DC,phim siêu anh hùng,review phim,phim Âu Mỹ,The Suicide Squad (2021),"
                      note=""
                    />
                    <p>
                      Biệt đội cảm tử này được gửi đi để phá hủy một nhà tù từ
                      thời Nazi, kết cục phát hiện ra đó là nơi trú ngụ của một
                      quái vật ngoài hành tinh có khả năng thôn tính Trái Đất.
                      Cứ thế, The <i>Suicide Squad</i> là một tập hợp của sự hỗn
                      loạn, dẫn dắt bởi hội "siêu anh hùng cặn bã". Họ có sự
                      đáng yêu, hấp dẫn riêng, tuy nhiên phim cũng liên tục nhắc
                      nhở khán giả rằng họ thật-sự-cặn-bã.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Sự hỗn loạn "bậc thầy" trở thành vẻ đẹp gây bất ngờ</h5>
                    <p>
                      Sự hỗn loạn của The <i>Suicide Squad</i> không chỉ nằm
                      trong những phân cảnh hành động siêu bạo lực, máu me, mà
                      còn nằm trong chính phong cách và nội dung phim. Dàn nhân
                      vật chính đông đảo, chưa kể là hàng loạt những trò đùa từ
                      "xàm xí" tới 18+ được nhồi vào hơn 2 tiếng phim. Đây có
                      thể là công thức cho một thảm họa mới, hoặc một thành công
                      chưa <strong>phim siêu anh hùng</strong> nào có được. Và{" "}
                      <strong>James Gunn</strong> đã làm được cái vế sau.
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/original-16284218942651075568494.jpg"
                      alt="4, Suicide Squad (2016),James Gunn,DCEU,DC Universe,phim DC,DC,phim siêu anh hùng,review phim,phim Âu Mỹ,The Suicide Squad (2021),"
                      note=""
                    />
                    <h5>
                      Sự hỗn loạn của The <i>Suicide Squad</i> không chỉ nằm
                      trong những phân cảnh hành động siêu bạo lực, máu me, mà
                      còn nằm trong chính phong cách và nội dung phim.
                    </h5>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/7/giphy-1628315935128357507712.gif"
                      alt="7, Suicide Squad (2016),James Gunn,DCEU,DC Universe,phim DC,DC,phim siêu anh hùng,review phim,phim Âu Mỹ,The Suicide Squad (2021),"
                      note=""
                    />
                    <p>
                      The <i>Suicide Squad</i> điên cuồng đến cái mức bản thân
                      nó trở thành "vẻ đẹp" chính của phim. Mỗi nhân vật đều để
                      lại ấn tượng vừa đủ, và thậm chí những gương mặt quen
                      thuộc như Harley Quinn thì thực sự đã có màn thể hiện ấn
                      tượng nhất từ trước tới nay. Ít khán giả nào có thể không
                      trầm trồ trước màn thảm sát thoát ngục của cô nàng, khi
                      mọi tia máu bắn ra lập tức... biến thành hoa. Không chỉ
                      đẹp mắt về khía cạnh mỹ thuật, cảnh phim lạ lùng này còn
                      giúp khán giả hiểu được sự điên rồ của nhân vật - một sự
                      điên rồ do ám ảnh hoàn mỹ.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/8/giphy-1628421850724441437056.gif"
                      alt="8, Suicide Squad (2016),James Gunn,DCEU,DC Universe,phim DC,DC,phim siêu anh hùng,review phim,phim Âu Mỹ,The Suicide Squad (2021),"
                      note=""
                    />
                    <p>
                      The <i>Suicide Squad</i> hẳn là bộ{" "}
                      <strong>phim siêu anh hùng</strong> bạo lực, máu me nhất
                      từ trước tới nay - đến cái mức mà Deadpool trông có vẻ
                      hiền lành hơn hẳn khi đem ra so sánh. Đạo diễn{" "}
                      <strong>James Gunn</strong> không ngần ngại mạo hiểm và
                      quyết định "tới bến" với nhãn phim R (không dành cho khán
                      giả dưới 17 tuổi) - điều mà chắc chắn nhiều hãng phim sẽ
                      không bao giờ đồng ý, điển hình là Marvel. Khi xem bộ phim
                      này, khán giả có lẽ sẽ cảm nhận được niềm vui và sự hứng
                      khởi của đạo diễn lẫn các diễn viên, và nó dường như cũng
                      "lây" được sang tới người xem.
                    </p>
                    <h5>
                      The <i>Suicide Squad</i> hẳn là bộ{" "}
                      <strong>phim siêu anh hùng</strong> bạo lực, máu me nhất
                      từ trước tới nay - đến cái mức mà Deadpool trông có vẻ
                      hiền lành hơn hẳn khi đem ra so sánh.
                    </h5>
                    <p>
                      Một số khán giả phàn nàn The <i>Suicide Squad</i> yếu về
                      nội dung. Sự bạo lực, máu me của phim cũng không làm hài
                      lòng mọi người.
                    </p>
                    <p>
                      Thật vậy, bộ phim không có một âm mưu nào quá sâu xa, một
                      cú twist nào quá "kinh thiên động địa" ở những hồi sau.
                      Tuy nhiên nếu nhìn theo một góc độ nào đó, đây có thể là
                      một sự đánh đổi của đạo diễn để hướng sự tập trung tới dàn
                      nhân vật vốn quá phức tạp. Ở một vài phân đoạn, mức độ ghê
                      rợn hay tàn nhẫn của phim có thể dễ dàng bị đánh giá là
                      phản cảm. Điều này phụ thuộc vào từng khán giả vì vốn dĩ,
                      bộ phim đã định hình chính nó là một tác phẩm bạo lực nhãn
                      R. The <i>Suicide Squad</i> không quá mạnh về câu chuyện
                      trung tâm, thế nhưng không thể phủ nhận bộ phim là một tác
                      phẩm giải trí chất lượng cao, và cũng là một bom tấn "siêu
                      anh hùng" lâu rồi thế giới mới được chứng kiến.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/8/artboard1-16284211044172100465530.jpg"
                      alt="5, Suicide Squad (2016),James Gunn,DCEU,DC Universe,phim DC,DC,phim siêu anh hùng,review phim,phim Âu Mỹ,The Suicide Squad (2021),"
                      note=""
                    />
                    <p>Nguồn ảnh: Warner Bros.</p>
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
