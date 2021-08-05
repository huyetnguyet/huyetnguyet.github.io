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
"timestamp": '04/08/2021 07:00 PM',
"title": 'Top 6 nhân loại mạnh nhất trong Attack on Titan, Mikasa Ackerman thế mà chỉ đứng hạng 3',
"description": 'Top 3 của danh sách này đã bị thống trị bởi tộc nhân Ackerman.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-16280705862911029149739.jpg',
"alt": 'ATTACK ON TITAN,TITAN,ERWIN SMITH,GABI,MIKE ZACHARIAS,NHÂN LOẠI MẠNH NHẤT ATTACK ON TITAN,',
"category": 'games',
"date": '04/08/2021',
"time": '07:00 PM',
"link": '/top-6-nhan-loai-manh-nhat-trong-attack-on-titan-mikasa-ackerman-the-ma-chi-dung-hang-3',
"zcomponent": 'page_20210804190000',
"filepath": './20210804190000-top-6-nhan-loai-manh-nhat-trong-attack-on-titan-mikasa-ackerman-the-ma-chi-dung-hang-3.js'
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
  "Top 6 nhân loại mạnh nhất trong Attack on Titan, Mikasa Ackerman thế mà chỉ đứng hạng 3";
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "04/08/2021 07:00 PM";
const description =
  "Top 3 của danh sách này đã bị thống trị bởi tộc nhân Ackerman.";
const link =
  "top-6-nhan-loai-manh-nhat-trong-attack-on-titan-mikasa-ackerman-the-ma-chi-dung-hang-3";
const tagparam = [
  "ATTACK ON TITAN",
  "TITAN",
  "ERWIN SMITH",
  "GABI",
  "MIKE ZACHARIAS",
  "NHÂN LOẠI MẠNH NHẤT ATTACK ON TITAN",
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

export default function page_20210804190000() {
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
                      Nếu chúng ta nói về các nhân vật mạnh nhất trong{" "}
                      <strong>
                        Attack on <strong>Titan</strong>
                      </strong>{" "}
                      thì các Titan có lẽ đứng đầu, đặc biệt là Titan Shifter.
                      Tuy nhiên, cũng có những con người rất nguy hiểm cả khi
                      đối mặt với đồng loại và khi đối mặt với Titan trong
                      Attack on Titan.
                    </p>
                    <h5>6. Gabi</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-16280705862911029149739.jpg"
                      alt="1, ATTACK ON TITAN,TITAN,ERWIN SMITH,GABI,MIKE ZACHARIAS,NHÂN LOẠI MẠNH NHẤT ATTACK ON TITAN,"
                      note=""
                    />
                    <p>
                      Có thể <strong>Gabi</strong> tuổi còn nhỏ, nhưng thành
                      tích của cô này rất đáng kinh ngạc. Cô đã từng giết một
                      thành viên của quân Trinh Sát, từng bắn vào đầu của Eren
                      và suýt chút nữa kết liễu nhân vật chính của chúng ta.
                      Gabi cũng đã giết một tên <strong>Titan</strong> vô tri
                      bằng một khẩu súng trường. Rõ ràng, chỉ cần có súng
                      trường, Gabi trở nên khá nguy hiểm.
                    </p>
                    <h5>5. Erwin Smith</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-1-1628070588777206512203.jpg"
                      alt="2, ATTACK ON TITAN,TITAN,ERWIN SMITH,GABI,MIKE ZACHARIAS,NHÂN LOẠI MẠNH NHẤT ATTACK ON TITAN,"
                      note=""
                    />
                    <p>
                      Khả năng lớn nhất của Erwin là khả năng lãnh đạo. Anh ta
                      có một "quyền lực" khiến những người lính muốn đi theo anh
                      ta, thậm chí cả sẵn sàng hy sinh. Bên cạnh đó khả năng
                      tiêu diệt <strong>Titan</strong> của Erwin cũng rất đáng
                      nể
                    </p>
                    <p>
                      Erwin có thể không có danh hiệu nhân loại mạnh nhất như
                      Levi hay mang dòng máu của tộc chiến binh Ackerman, nhưng
                      Erwin cũng rất cứng rắn và có thể tàn sát các{" "}
                      <strong>Titan</strong> vô tri.
                    </p>
                    <h5>4. Mike Zacharias</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-2-1628070589278240577248.jpg"
                      alt="3, ATTACK ON TITAN,TITAN,ERWIN SMITH,GABI,MIKE ZACHARIAS,NHÂN LOẠI MẠNH NHẤT ATTACK ON TITAN,"
                      note=""
                    />
                    <p>
                      <strong>Mike Zacharias</strong> là binh đoàn trưởng của
                      Đội Mike, một phân đội quan trọng của Quân Trinh Sát. Là
                      một người lính đáng tin cậy, anh được coi là người lính
                      mạnh thứ nhì nhân loại chỉ sau Levi Ackerman. Mike có khứu
                      giác cực kỳ tốt, cho phép anh có thể phát hiện ra các{" "}
                      <strong>Titan</strong> từ khoảng cách rất xa. Anh đã bị
                      các Titan bao vây và xé xác khi bị Titan Quái Thú lấy đi
                      bộ cơ động lập thể.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>3. Mikasa Ackerman</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-3-16280705881901951674198.jpg"
                      alt="4, ATTACK ON TITAN,TITAN,ERWIN SMITH,GABI,MIKE ZACHARIAS,NHÂN LOẠI MẠNH NHẤT ATTACK ON TITAN,"
                      note=""
                    />
                    <p>
                      Mikasa Ackerman là một nhân vật rất nổi tiếng trong anime
                      và manga{" "}
                      <strong>
                        Attack on <strong>Titan</strong>
                      </strong>
                      . Giữa một hệ thống nhân vật hết sức đông đảo và đa dạng
                      trong bộ anime bom tấn Attack on Titan, Mikasa nổi bật lên
                      bằng vẻ đẹp Á Đông đầy cuốn hút và khả năng chiến đấu
                      thiên tài trước mọi đối thủ.
                    </p>
                    <p>
                      Mikasa được sinh ra với người cha là dòng dõi của
                      Ackerman, trong khi mẹ cô là người gốc Á, chính xác là
                      Azumabito hay là người Nhật. Mikasa được di truyền khả
                      năng độc nhất vô nhị và rất mạnh của tộc Ackerman. Cô
                      chính là nhân vật nữ con người mạnh nhất trong câu chuyện{" "}
                      <strong>
                        Attack on <strong>Titan</strong>
                      </strong>
                      .
                    </p>
                    <h5>2. Kenny Ackerman</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-4-16280705879372045033954.jpg"
                      alt="5, ATTACK ON TITAN,TITAN,ERWIN SMITH,GABI,MIKE ZACHARIAS,NHÂN LOẠI MẠNH NHẤT ATTACK ON TITAN,"
                      note=""
                    />
                    <p>
                      Kenny Ackerman là một người đàn ông mạnh mẽ khác trong thế
                      giới{" "}
                      <strong>
                        Attack on <strong>Titan</strong>
                      </strong>
                      , có thể mạnh hơn Levi ở thời kỳ sơ khai, nhưng nếu đối
                      thủ là Titan thì Levi có kinh nghiệm hơn. Kenny là chú của
                      Levi, người từng được biết đến như một kẻ giết người hàng
                      loạt, người tập trung nhiều hơn vào việc tiêu diệt lực
                      lượng Cảnh Vệ bằng sức mạnh Ackerman của mình.
                    </p>
                    <p>
                      Nhưng kể từ khi gặp những người cụ thể mà anh ấy bảo vệ
                      (bản năng như Mikasa và Levi), anh ấy đã thay đổi và thậm
                      chí còn gia nhập Quân cảnh. Người được anh bảo vệ là Uri
                      Reiss. Kenny có một mục tiêu bí mật là muốn lấy sức mạnh
                      của <strong>Titan</strong> Thủy Tổ từ gia đình Reiss,
                      nhưng sự tôn trọng của anh ấy dành cho Uri Reiss là thật
                      lòng (như Mikasa với Eren và Levi với Erwin), trong khi
                      Kenny chỉ giả vờ tôn trọng Rod Reiss.
                    </p>
                    <h5>1. Levi Ackerman</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/4/photo-5-16280705917571666050380.jpg"
                      alt="6, ATTACK ON TITAN,TITAN,ERWIN SMITH,GABI,MIKE ZACHARIAS,NHÂN LOẠI MẠNH NHẤT ATTACK ON TITAN,"
                      note=""
                    />
                    <p>
                      Một trong 2 thành viên gia tộc Ackerman còn sống còn lại
                      được biết đến là Levi Ackerman. Levi Ackerman chính là con
                      người "bình thường" mạnh nhất hiện tại trong câu chuyện{" "}
                      <strong>
                        Attack on <strong>Titan</strong>
                      </strong>
                      .
                    </p>
                    <p>
                      Cho đến nay, bất cứ <strong>Titan</strong> nào nếu đã vào
                      phạm vi tấn công của Levi thì đều không thể thắng được,
                      đến cả Titan Quái Thú cũng bị bại thảm dưới tay Levi 2
                      lần. Đặc biệt, ở cuối câu truyện{" "}
                      <strong>Attack on Titan</strong>, Levi tuy bị giảm sức
                      mạnh vì anh bị thương nặng sau khi trúng một vụ nổ nhưng
                      "anh Lệ" vẫn có khả năng chiến đấu tuyệt vời.
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
