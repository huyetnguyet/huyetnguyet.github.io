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
"timestamp": '11/08/2021 10:59 AM',
"title": 'Đừng để phim ảnh đánh lừa: Phó Hằng có thật nhưng chỉ yêu một người con gái không phải Ngụy Anh Lạc, hạ sinh 6 đứa con',
"description": 'Cuộc đời thực sự của Phú Sát Phó Hằng - con trai dòng họ Phú Sát lừng lẫy thời Thanh thực sự là thế nào? Liệu có liên quan gì tới chuyện tình cùng Ngụy Anh Lạc giống như trong "Diên Hy công lược"?',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/10-153250281195864899936-15330571393871248739778-16286556478321068590289.jpg',
"alt": 'phim cổ trang,Diên Hi Công Lược (2018),Phó Sát Phú Hằng,',
"category": 'news',
"date": '11/08/2021',
"time": '10:59 AM',
"link": '/dung-de-phim-anh-danh-lua-phu-hang-co-that-nhung-chi-yeu-mot-nguoi-con-gai-khong-phai-nguy-anh-lac-ha-sinh-6-dua-con',
"zcomponent": 'page_20210811105938',
"filepath": './20210811105938-dung-de-phim-anh-danh-lua-phu-hang-co-that-nhung-chi-yeu-mot-nguoi-con-gai-khong-phai-nguy-anh-lac-ha-sinh-6-dua-con.js'
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
  "Đừng để phim ảnh đánh lừa: Phó Hằng có thật nhưng chỉ yêu một người con gái không phải Ngụy Anh Lạc, hạ sinh 6 đứa con";
const author = "PHẠM TRANG,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "11/08/2021 10:59 AM";
const description =
  'Cuộc đời thực sự của Phú Sát Phó Hằng - con trai dòng họ Phú Sát lừng lẫy thời Thanh thực sự là thế nào? Liệu có liên quan gì tới chuyện tình cùng Ngụy Anh Lạc giống như trong "Diên Hy công lược"?';
const link =
  "dung-de-phim-anh-danh-lua-phu-hang-co-that-nhung-chi-yeu-mot-nguoi-con-gai-khong-phai-nguy-anh-lac-ha-sinh-6-dua-con";
const tagparam = [
  "phim cổ trang",
  "Diên Hi Công Lược (2018)",
  "Phó Sát Phú Hằng",
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

export default function page_20210811105938() {
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
                      Năm 2018, bộ <strong>phim cổ trang</strong> "Diên Hi công
                      lược" trở thành một trong những bộ phim nổi tiếng nhất
                      năm. Bất cứ nhân vật nào trong bộ phim đều rất thu hút
                      người xem. Trong đó, chuyện tình giữa Phú Sát Phó Hằng và
                      nữ chính Ngụy Anh Lạc đã trở thành một câu chuyện chẳng
                      thể nguôi ngoai trong lòng khán giả.
                    </p>
                    <p>
                      Đặc biệt là chi tiết khi Phó Hằng tử trận nơi sa trường,
                      trước khi chết còn nhờ một người bạn thân hỏi Ngụy Anh
                      Lạc, "Kiếp này ta bảo vệ nàng đủ rồi, kiếp sau đổi lại
                      nàng bảo vệ ta được không?". Ngụy Anh Lạc đau lòng đến
                      cùng cực, tâm cũng chết lặng nói một câu: "Được" khiến
                      khán giả điên cuồng lau nước mắt.
                    </p>
                    <p>
                      Nhưng trong lịch sử, Phó Hằng và Ngụy Anh Lạc thực sự có
                      tình cảm với nhau sao? Đáp án chắc chắn là không. Phó Hằng
                      trong lịch sử thực sự "một đời chỉ yêu một người" nhưng
                      người ấy chính là phu nhân của ông, hai người còn có với
                      nhau 6 đứa con.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/-1628655082013842980411.jpg"
                      alt="4, phim cổ trang,Diên Hi Công Lược (2018),Phó Sát Phú Hằng,"
                      note=""
                    />
                    <p>
                      Hơn nữa, hình tượng nguyên gốc của Ngụy Anh Lạc là Ngụy
                      Giai thị, thời điểm mới vào cung mang thân phận cung nữ.
                      Nhưng Phó Hằng vốn xuất thân từ danh môn, làm sao có thể
                      quen biết một cung nữ nhỏ bé chốn thâm cung rồi dệt nên
                      một đoạn tình duyên ghi lòng tạc dạ như vậy?
                    </p>
                    <p>
                      Phó Hằng là thiếu gia của gia tộc Phú Sát, từ khi nhà
                      Thanh lập quốc đã được xếp vào bậc trung thần trong triều.
                      Tổ tiên của ông là Vượng Cát Nỗ nhìn xa trông rộng. Năm
                      ấy, Nỗ Nhĩ Cáp Xích khởi binh, Cát Nỗ liền đưa người trong
                      gia tộc quy thuận. Sau đó, với tài năng quân sự của mình
                      đã lấy được sự tín nhiệm từ Nỗ Nhĩ Cáp Xích, trở thành bậc
                      anh hùng khai quốc của triều Thanh. Những đời sau đó tiếp
                      tục hô mưa gọi gió trong triều đình, đặt nền móng vững
                      chắc cho gia tộc phát triển.
                    </p>
                    <p>
                      Bá phụ và phụ thân của Phó Hằng đều giữ vai trò quan
                      trọng, là những nhân vật hiển hách trong triều đình. Đặc
                      biệt phụ thân ông làm đến chức quan tổng quản Sát Cáp Nhĩ,
                      một vùng đất đặc biệt quan trọng với triều Thanh lúc bấy
                      giờ. Vốn dĩ địa vị của gia tộc Phú Sát trong triều khi ấy
                      không gì có thể lay chuyển.
                    </p>
                    <p>
                      Chị gái của ông lại gả cho vua Càn Long, sau khi Càn Long
                      đăng cơ lập tức lên làm hoàng hậu. Chuyện Càn Long yêu
                      thích Phú Sát hoàng hậu đến nhường nào mọi người đều biết.
                      Vì một tầng quan hệ mật thiết với hoàng hậu như vậy mà Càn
                      Long đối với Phú Sát gia cũng thêm nhiều phần ưu ái.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/ava-162865564785170423812.jpg"
                      alt="1, phim cổ trang,Diên Hi Công Lược (2018),Phó Sát Phú Hằng,"
                      note="Phú Sát Phó Hằng trong lịch sử"
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Phú Sát gia vừa là đại thần trong triều, vừa là họ ngoại,
                      hai quyền uy song song tồn tại. Người lớn lên trong một
                      đại gia tộc như vậy sao có thể muốn cưới một cung nữ làm
                      vợ? Trong lịch sử, Phó Hằng là một người rất ưu tú. Ông
                      sinh năm 1720, dưới sự bồi dưỡng của gia tộc, ông sớm đã
                      trở thành tinh anh trụ cột của đất nước, văn võ song toàn.
                      Năm 20 tuổi tiến cung đảm nhiệm vị trí Lục phẩm Thị vệ,
                      sau đó liên tục thăng chức, đến năm 1747 được trọng dụng
                      làm Hộ bộ thượng thư.
                    </p>
                    <p>
                      20 tuổi nhập cung, lên như diều gặp gió. Chỉ mất 7 năm để
                      từ một Thị vệ Lục phẩm biến thành Đại quan nhất phẩm trong
                      triều. Tốc độ thăng quan tiến chức như vậy thực sự rất
                      hiếm gặp. Sau này ông tham gia bình định Kim Xuyên, được
                      phong nhất đẳng trung dũng công.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/fuheng-1628655831038134535908.jpg"
                      alt="3, phim cổ trang,Diên Hi Công Lược (2018),Phó Sát Phú Hằng,"
                      note=""
                    />
                    <p>
                      Năm 1754, Chuẩn Cát Nhĩ nổi loạn, trong triều có rất nhiều
                      quan đại thần được cử đến nhưng không thể dẹp yên. Cuối
                      cùng, Phó Hằng tự mình đích thân sử dụng toàn bộ tài năng
                      của mình, với sự giúp sức của Càn Long đế, cuối cùng đã
                      dẹp yên phản loạn.
                    </p>
                    <p>
                      Càn Long nhận thấy Phó Hằng có công lao lớn nhất trong
                      việc này nên muốn một lần nữa phong ông làm Nhất đẳng
                      Trung dũng công, tuy nhiên bị Phó Hằng một mực từ chối.
                      Nhưng sau chuyện này, Càn Long vẫn luôn ghi khắc trong tim
                      công lao Phó Hằng. Về sau đặt tranh vẽ của Phó Hằng ở vị
                      trí đầu trong các công thần của Tử Quang Các.
                    </p>
                    <p>
                      Phó Hằng ưu tú như vậy, phu nhân của ông cũng không phải
                      một người tầm thường. Bà là Qua Nhĩ Giai thị, con gái của
                      một gia tộc danh giá không kém Phú Sát. Hôn nhân của hai
                      người cũng có thể coi là môn đăng hộ đối. Theo sử sách ghi
                      lại, Qua Nhĩ Giai thị vô cùng xinh đẹp, có thể xếp hạng
                      nhất hạng hai trong số những đại mỹ nhân thời ấy.
                    </p>
                    <p>
                      Bà và Phó Hằng sau khi kết hôn sắt cầm hoà hợp, sinh hạ 6
                      người con, 4 nam 2 nữ. Các con sau này đều được trọng
                      vọng. Con gái tiến cung, con trai sau này cũng kết hôn
                      cùng công chúa, địa vị của Phú Sát gia càng thêm vững
                      vàng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/10-153250281195864899936-15330571393871248739778-16286556478321068590289.jpg"
                      alt="2, phim cổ trang,Diên Hi Công Lược (2018),Phó Sát Phú Hằng,"
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
