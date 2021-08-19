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
"timestamp": '15/08/2021 04:07 PM',
"title": 'Bây giờ chả ai gửi tiết kiệm nữa, thế họ làm gì để tiền đẻ ra tiền?',
"description": 'Không một tài sản nào trên đời sẽ đến một cách dễ dàng: Đầu tư không phải là con đường tắt đến với sự giàu có.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/1-16290387435451827783682.png',
"alt": 'Có tiền thì làm gì,đầu tư,tiết kiệm,người trẻ,giới trẻ,đế chế sổ tiết kiệm,ma trận đầu tư,bài học tài chính,tài chính,quản lý tài chính,',
"category": 'life',
"date": '15/08/2021',
"time": '04:07 PM',
"link": '/bay-gio-cha-ai-gui-tiet-kiem-nua-the-ho-lam-gi-de-tien-de-ra-tien',
"zcomponent": 'page_20210815160712',
"filepath": './20210815160712-bay-gio-cha-ai-gui-tiet-kiem-nua-the-ho-lam-gi-de-tien-de-ra-tien.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title =
  "Bây giờ chả ai gửi tiết kiệm nữa, thế họ làm gì để tiền đẻ ra tiền?";
const author = "EBE - DESIGN: HUYỀN TRANG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "15/08/2021 04:07 PM";
const description =
  "Không một tài sản nào trên đời sẽ đến một cách dễ dàng: Đầu tư không phải là con đường tắt đến với sự giàu có.";
const link =
  "bay-gio-cha-ai-gui-tiet-kiem-nua-the-ho-lam-gi-de-tien-de-ra-tien";
const tagparam = [
  "Có tiền thì làm gì",
  "đầu tư",
  "tiết kiệm",
  "người trẻ",
  "giới trẻ",
  "đế chế sổ tiết kiệm",
  "ma trận đầu tư",
  "bài học tài chính",
  "tài chính",
  "quản lý tài chính",
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

export default function page_20210815160712() {
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
                      Không một tài sản nào trên đời sẽ đến một cách dễ dàng:{" "}
                      <strong>Đầu tư</strong> không phải là con đường tắt đến
                      với sự giàu có.
                    </p>
                    <p>
                      Chúng tôi hỏi 20 <strong>người trẻ</strong> ở lứa tuổi từ
                      23 tới 32 để xây dựng nên ma trận <strong>đầu tư</strong>{" "}
                      cá nhân cho <strong>giới trẻ</strong> - tất cả những kênh
                      mà bạn từng nghe đến, biết đến, đã thử, có thể đã rút ra,
                      đã thành công, hoặc đã thất bại. Mỗi người một câu trả
                      lời, mỗi người một lựa chọn, thế nhưng có một điểm chung
                      trong mọi phản hồi mà chúng tôi nhận được, đó là: "Tầm này
                      có sổ <strong>tiết kiệm</strong> chỉ để vừa đủ xác minh{" "}
                      <strong>tài chính</strong> đi du lịch thôi!".
                    </p>
                    <p>
                      Thế nếu không gửi <strong>tiết kiệm</strong>, thì{" "}
                      <strong>người trẻ</strong> đang làm gì với số tiền mình
                      kiếm được? Và sau đây là 4 kiểu tài sản được người trẻ
                      chuyển đổi từ tiền mặt mà thành.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/1-16290387435451827783682.png"
                      alt="1, Có tiền thì làm gì,đầu tư,tiết kiệm,người trẻ,giới trẻ,đế chế sổ tiết kiệm,ma trận đầu tư,bài học tài chính,tài chính,quản lý tài chính,"
                      note=""
                    />
                    <p>
                      Bạn đã có mặt ở mấy ô trong 4 ô vuông màu nhiệm này rồi?
                    </p>
                    <h5>
                      Tài sản cố định: Nhà và đất, hoặc đôi khi là nhà mặt đất
                    </h5>
                    <p>
                      Việc sở hữu một căn nhà đã được chúng tôi nhắc đến nhiều
                      lần và bình thường hoá thông qua những khái niệm cơ bản về
                      thế chấp vay ngân hàng. Về cơ bản, bạn chỉ cần có tối
                      thiểu 20% giá trị căn nhà trong tay để bắt đầu sở hữu căn
                      nhà đầu tiên của mình. Thế nhưng tài sản nhà trong bối
                      cảnh này của chúng ta có phần khác biệt: đây không phải là
                      căn nhà bạn mua để ở, mà là căn nhà bạn mua để{" "}
                      <strong>đầu tư</strong>. Tương tự như đất, đây là tài sản
                      cố định, tuy nhiên không phải mua để sử dụng, mà là để chờ
                      giá trị của chúng thay đổi và bán đi để có thu nhập trong
                      khoản chênh lệch ở giữa.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/2-16290388055041589050739.png"
                      alt="2, Có tiền thì làm gì,đầu tư,tiết kiệm,người trẻ,giới trẻ,đế chế sổ tiết kiệm,ma trận đầu tư,bài học tài chính,tài chính,quản lý tài chính,"
                      note=""
                    />
                    <h5>Tài sản không cố định: Chứng khoán, Tiền ảo</h5>

                    <p>
                      Đây rồi, từ khoá màu nhiệm của năm 2021 - tiền ảo! Nếu bạn
                      theo dõi kỹ làn sóng tiền ảo của năm nay (nếu không muốn
                      nói là của 3 năm trở lại đây), có thể bạn đã thấy có những
                      người có tất cả, và cũng có những người mất tất cả. Điều
                      khác nhau giữa họ ư? Có thể đều là những tư duy sắc bén
                      như nhau, số tiền <strong>đầu tư</strong> như nhau, thế
                      nhưng điểm khác biệt chính là tính thời điểm.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Thời điểm có thể tạo ra nhiều khác biệt đến như vậy ư? Hãy
                      thử nhìn sang người bạn thân bất đắc dĩ của tiền ảo -
                      chứng khoán. Về cơ bản tiền ảo "học hỏi" khá nhiều cách
                      xây dựng giao dịch của thị trường chứng khoán, cách đọc đồ
                      thị và phân tích kỹ thuật khá giống nhau. Thế nhưng khi
                      đưa yếu tố thời điểm vào so sánh, bạn sẽ nhận ra một vài
                      khác biệt nền tảng giữa hai kiểu tài sản này để cân nhắc
                      trước khi đổ toàn bộ tiền <strong>tiết kiệm</strong> của
                      mình vào một mã "coin" được đảm bảo sẽ x10 trong khoảng
                      thời gian từ giờ tới cuối tuần.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/3-16290389066511329026011.png"
                      alt="3, Có tiền thì làm gì,đầu tư,tiết kiệm,người trẻ,giới trẻ,đế chế sổ tiết kiệm,ma trận đầu tư,bài học tài chính,tài chính,quản lý tài chính,"
                      note=""
                    />
                    <h5>
                      Tài sản lười biếng: <strong>Tiết kiệm</strong> và Trái
                      phiếu
                    </h5>
                    <p>
                      Nói là tài sản lười biếng vì tài sản này không những đơn
                      giản, mà lại còn đã quá quen thuộc với bạn: đó là mở sổ{" "}
                      <strong>tiết kiệm</strong>.
                    </p>
                    <p>
                      Một khoản lãi cố định, tại sao phần lớn{" "}
                      <strong>người trẻ</strong> lại đang chối từ? Câu trả lời
                      khá đơn giản, đặc biệt là khi bạn đang có các phương án{" "}
                      <strong>đầu tư</strong> khác trong tay để cân nhắc: giai
                      đoạn kinh tế khó khăn luôn đi đôi với sự đi xuống của lãi
                      suất <strong>tiết kiệm</strong> và sự đi lên của lãi suất
                      vay nợ. Với cùng một số tiền, bạn có thể dễ dàng kiếm một
                      khoản lãi đều đặn lớn hơn hàng tháng. Thế nhưng không phải
                      vì vậy mà giá trị của một cuốn sổ tiết kiệm bị phủ nhận:
                      đấy là tài sản đáng tin cậy nhất, có tính thanh khoản
                      nhanh nhất bất cứ khi nào bạn cần xác nhận khả năng{" "}
                      <strong>tài chính</strong> trước bộ máy chính quyền. Bởi
                      vậy cho dù thế nào, chúng tôi cũng khuyến khích bạn hãy
                      luôn có một cuốn sổ tiết kiệm trước khi đầu tư vào bất cứ
                      một tài sản nào khác.{" "}
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/4-16290389922161452394696.png"
                      alt="4, Có tiền thì làm gì,đầu tư,tiết kiệm,người trẻ,giới trẻ,đế chế sổ tiết kiệm,ma trận đầu tư,bài học tài chính,tài chính,quản lý tài chính,"
                      note=""
                    />
                    <p>
                      Khi mở nhiều hơn một cuốn sổ <strong>tiết kiệm</strong>,
                      có lẽ không cần tới chúng tôi bạn cũng đã được chị nhân
                      viên ngân hàng giới thiệu về một khái niệm mới: Trái
                      phiếu. Vậy trái phiếu là gì? Về cơ bản, trái phiếu là một
                      sản phẩm nhằm huy động vốn của các doanh nghiệp lớn. Các
                      doanh nghiệp, ngân hàng, thậm chí là cả Chính phủ đều có
                      khả năng phát hành trái phiếu để kêu gọi vốn từ khách hàng
                      và người dân. Lãi trái phiếu bởi vậy thường cao hơn lãi
                      tiết kiệm thông thường 3-7%, và có tính an toàn cao.
                    </p>
                    <h5>Tài sản rủi ro: Kinh doanh</h5>
                    <p>
                      Sau khi đã tự bản thân mình kinh qua đầy đủ các hạng mục
                      tài sản phía trên và tâm sự cùng 20{" "}
                      <strong>người trẻ</strong> để tạo nên bài viết này, chúng
                      tôi cảm thấy việc đặt tài sản rủi ro vào đây là không thể
                      thiếu.{" "}
                    </p>
                    <p>
                      Tại sao ư? Vì không một tài sản nào trên đời sẽ đến một
                      cách dễ dàng: <strong>đầu tư</strong> không phải là con
                      đường tắt đến với sự giàu có. Để đầu tư thành công bạn
                      phải học về thị trường. Để mua được mảnh đất tốt bạn phải
                      đủ thành công để có một mối quan hệ "cùng tầm" đủ chất
                      lượng. Từ một góc nhìn khác, sản phẩm chứng khoán, sản
                      phẩm tiền ảo hay sản phẩm nhà đất cũng không khác gì một
                      sản phẩm kinh doanh mà bạn tin tưởng và quyết định đầu tư
                      vốn liếng của mình vào đó: bạn cần có hiểu biết nhất định
                      về sản phẩm, có niềm tin, có đủ hào hứng và cảm xúc để
                      dành thời gian tìm hiểu và gắn bó, cũng như nhìn thấy con
                      đường tương lai ở sản phẩm ấy.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/15/5-16290390540371306652984.png"
                      alt="5, Có tiền thì làm gì,đầu tư,tiết kiệm,người trẻ,giới trẻ,đế chế sổ tiết kiệm,ma trận đầu tư,bài học tài chính,tài chính,quản lý tài chính,"
                      note=""
                    />
                    <p>
                      Vậy nếu bạn cảm thấy không có nhiều cảm xúc cũng như luôn
                      hoa mắt chóng mặt khi phải nhìn vào những bảng con số của
                      chứng khoán hay tiền ảo, đừng lo lắng. Bạn đang không bỏ
                      lỡ điều gì đâu. Mỗi người sẽ phù hợp với một hệ "sản phẩm"
                      khác nhau, và việc của bạn là tìm ra đúng hệ sản phẩm dành
                      cho mình.
                    </p>
                    <p>
                      Chúc bạn đưa ra quyết định <strong>đầu tư</strong> thành
                      công cho tương lai của mình!
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
