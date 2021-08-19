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
"timestamp": '19/08/2021 01:03 PM',
"title": 'Những nhân vật "bán máu" nổi tiếng trong anime - manga: Càng bầm dập, càng dễ win!',
"description": 'Đối với những nhân vật sử dụng máu làm vũ khí, vết thương hở có thể coi là chìa khóa đánh bại đối thủ.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-1-162921809458754272033.jpg',
"alt": 'MANGA,ANIME,',
"category": 'games',
"date": '19/08/2021',
"time": '01:03 PM',
"link": '/nhung-nhan-vat-ban-mau-noi-tieng-trong-anime-manga-cang-bam-dap-cang-de-win',
"zcomponent": 'page_20210819130311',
"filepath": './20210819130311-nhung-nhan-vat-ban-mau-noi-tieng-trong-anime-manga-cang-bam-dap-cang-de-win.js'
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
  'Những nhân vật "bán máu" nổi tiếng trong anime - manga: Càng bầm dập, càng dễ win!';
const author = "Giang Gamek";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 01:03 PM";
const description =
  "Đối với những nhân vật sử dụng máu làm vũ khí, vết thương hở có thể coi là chìa khóa đánh bại đối thủ.";
const link =
  "nhung-nhan-vat-ban-mau-noi-tieng-trong-anime-manga-cang-bam-dap-cang-de-win";
const tagparam = ["MANGA", "ANIME"];
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

export default function page_20210819130311() {
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
                      Nhiều nhân vật đưa máu của chính họ ra khỏi cơ thể và hóa
                      cứng để biến nó thành vũ khí sử dụng trong trận chiến. Một
                      số khác còn có thể biến máu thành đá băng, chất lỏng nóng
                      hay thậm chí những con dao sắc bén.
                    </p>
                    <p>
                      Cách những nhân vật đấy lấy lại được lượng máu đã đổ, hay
                      làm sao để nạp lại năng lượng nhanh chóng trong tình huống
                      "dầu sôi lửa bỏng", rất ít khi được đề cập. Những sức mạnh
                      này tuy thật tuyệt vời, nhưng nếu ngoài đời thật thì khá
                      là "nổi da gà."
                    </p>
                    <p>Sau đây là một số cái tên có thể bạn từng nghe qua:</p>
                    <h5>Học viện Anh hùng: Sekijiro Kan</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-1-162921809458754272033.jpg"
                      alt="1, MANGA,ANIME,"
                      note=""
                    />

                    <p>
                      Kan Sekijiro, còn được biết đến với tên gọi Anh hùng máu:
                      Vlad King. Anh là một anh hùng chuyên nghiệp và là giáo
                      viên chủ nhiệm của lớp 1-B tại Cao trung UA. Quirk của anh
                      là Điều khiển máu. Với một lượng máu nhất định lấy ra từ
                      mu bàn tay, Sekijiro có thể tự do điều khiển nó. Anh có
                      thể dùng máu đó áp chế đối phương, tấn công và hơn thế
                      nữa. Khi không cần đến nó nữa, anh có thể hấp thụ lại máu
                      của mình qua găng tay.
                    </p>
                    <h5>Thanh Gươm Diệt Quỷ: Nezuko Kamado</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/17/photo-1-1629218097580937206941.jpg"
                      alt="2, MANGA,ANIME,"
                      note=""
                    />
                    <p>
                      Có những con quỷ sở hữu Huyết Quỷ Thuật riêng và độc đáo
                      của bản thân. Huyết Quỷ Thuật của Nezuko mang tên Bộc
                      Huyết, cho phép em ấy biến máu của mình thành lửa. Những
                      ngọn lửa này có thể được điều khiển theo ý muốn của
                      Nezuko. Việc gây thương vong bằng lửa hay không có thể tùy
                      theo cách Nezuko sử dụng Huyết Quỷ Thuật của mình.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Văn Hào Lưu Lạc: Nathaniel Hawthorne</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-2-16292180970722106581973.jpg"
                      alt="3, MANGA,ANIME,"
                      note=""
                    />
                    <p>
                      Nathaniel Hawthorne là một cựu thành viên của The Guild.
                      Năng lực của anh ấy được biết đến với cái tên Huyết tự.
                      Khả năng này cho phép anh biến máu của mình thành các từ
                      trong kinh sách và sử dụng chúng như lá chắn phòng thủ
                      hoặc bắn ra như đạn.
                    </p>
                    <h5>Chú Thuật Hồi Chiến: Noritoshi Kamo</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-3-162921809815634705153.jpg"
                      alt="4, MANGA,ANIME,"
                      note=""
                    />
                    <p>
                      Là người thừa kế hiện tại của Gia tộc Kamo, Noritoshi sở
                      hữu thuật thức kế thừa của gia tộc mình: Xích Huyết Thao
                      Thuật. Thuật thức này cho phép anh điều khiển máu của mình
                      thành bất kỳ hình dạng hoặc hình thức nào. Anh có thể dùng
                      để tấn công bằng cách tạo hình máu thành đạn hoặc vũ khí
                      sắc bén. Một nhánh từ Thuật thức này, Xích Lân Động Dược,
                      giúp tăng số lượng tế bào máu cũng như tăng cường sức mạnh
                      và tốc độ cho Noritoshi.
                    </p>
                    <h5>Undead Unluck: Andy/Victhor</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/17/photo-4-16292180965472011639928.jpg"
                      alt="5, MANGA,ANIME,"
                      note=""
                    />
                    <p>
                      Năng lực có sẵn của Andy/Victhor là Undead, Bất tử. Nhưng
                      để chiến đấu và bảo vệ bản thân, cả hai đã dựa vào khả
                      năng tái tạo của bản thân để dùng cơ thể làm vũ khí, trong
                      đó có máu. Một trong những chiêu thức nguy hiểm nhất mang
                      tên Deadline. Victhor bắn ra một lượng máu và ngưng tụ nó
                      thành đòn tấn công với nhiều biến thể khác nhau. Ví dụ như
                      thành roi quật, vung tay cắt xén mọi tòa nhà xung quanh,
                      hoặc thành thanh gươm sắc bén để cận chiến.
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
